import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import sqlite3 from 'sqlite3';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const WEB_DIR = path.join(ROOT, 'web');
const DB_PATH = path.join(__dirname, 'unitycure.db');

const app = express();
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet({ contentSecurityPolicy: false }));
app.use(morgan('dev'));

// Database setup
sqlite3.verbose();
const db = new sqlite3.Database(DB_PATH);

function initDb() {
  db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      identifier TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      role TEXT NOT NULL,
      redirect TEXT NOT NULL
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS appointments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      doctor_name TEXT,
      hospital TEXT,
      type TEXT,
      date TEXT,
      time TEXT,
      patient_name TEXT,
      patient_age INTEGER,
      patient_contact TEXT,
      reason TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS sos_reports (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      lat REAL,
      lng REAL,
      symptoms TEXT,
      description TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS feedback (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      service_id TEXT,
      service_type TEXT,
      user_id TEXT,
      rating INTEGER,
      review TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS providers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      provider_type TEXT,
      name TEXT,
      address TEXT,
      lat REAL,
      lng REAL,
      contact TEXT,
      services TEXT,
      specialty TEXT,
      admin_name TEXT,
      admin_email TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    )`);

    // Seed demo users if not present
    const seed = [
      ['citizen@example.com', 'Test@123', 'Citizen', '/user_dashboard.html'],
      ['9876543210', 'Test@123', 'Citizen', '/user_dashboard.html'],
      ['hospitaladmin@uc.com', 'Admin@123', 'Hospital Staff', '/resource_management.html'],
      ['doctor@uc.com', 'Doc@123', 'Doctor', '/doctor_schedule.html'],
      ['dispatcher@uc.com', 'Disp@123', 'Dispatcher', '/dispatcher_dashboard.html'],
      ['platformadmin@uc.com', 'Root@123', 'Platform Admin', '/platform_admin_dashboard.html']
    ];
    seed.forEach(([identifier, password, role, redirect]) => {
      db.run(
        'INSERT OR IGNORE INTO users(identifier, password, role, redirect) VALUES (?, ?, ?, ?)',
        [identifier, password, role, redirect]
      );
    });
  });
}

initDb();

// API routes
app.post('/api/login', (req, res) => {
  const { identifier, password } = req.body || {};
  if (!identifier || !password) {
    return res.status(400).json({ ok: false, error: 'Missing credentials' });
  }
  db.get(
    'SELECT role, redirect FROM users WHERE lower(identifier) = lower(?) AND password = ? LIMIT 1',
    [identifier, password],
    (err, row) => {
      if (err) return res.status(500).json({ ok: false, error: 'DB error' });
      if (!row) return res.status(401).json({ ok: false, error: 'Invalid credentials' });
      return res.json({ ok: true, role: row.role, redirect: row.redirect });
    }
  );
});

app.post('/api/appointments', (req, res) => {
  const {
    doctorName,
    hospital,
    type,
    date,
    time,
    patient
  } = req.body || {};
  if (!doctorName || !hospital || !type || !date || !time || !patient || !patient.name) {
    return res.status(400).json({ ok: false, error: 'Missing fields' });
  }
  db.run(
    `INSERT INTO appointments(doctor_name, hospital, type, date, time, patient_name, patient_age, patient_contact, reason)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      doctorName,
      hospital,
      type,
      date,
      time,
      patient.name,
      Number(patient.age) || null,
      patient.contact || null,
      patient.reason || null
    ],
    function(err) {
      if (err) return res.status(500).json({ ok: false, error: 'DB error' });
      return res.json({ ok: true, id: this.lastID });
    }
  );
});

app.post('/api/sos', (req, res) => {
  const { lat, lng, symptoms, description } = req.body || {};
  if (typeof lat !== 'number' || typeof lng !== 'number' || !Array.isArray(symptoms) || symptoms.length === 0) {
    return res.status(400).json({ ok: false, error: 'Invalid payload' });
  }
  db.run(
    'INSERT INTO sos_reports(lat, lng, symptoms, description) VALUES (?, ?, ?, ?)',
    [lat, lng, JSON.stringify(symptoms), description || null],
    function(err) {
      if (err) return res.status(500).json({ ok: false, error: 'DB error' });
      return res.json({ ok: true, id: this.lastID });
    }
  );
});

app.post('/api/feedback', (req, res) => {
  const { serviceId, serviceType, userId, rating, review } = req.body || {};
  if (!serviceId || !serviceType || !rating) {
    return res.status(400).json({ ok: false, error: 'Missing fields' });
  }
  db.run(
    'INSERT INTO feedback(service_id, service_type, user_id, rating, review) VALUES (?, ?, ?, ?, ?)',
    [String(serviceId), String(serviceType), userId || null, Number(rating), review || null],
    function(err) {
      if (err) return res.status(500).json({ ok: false, error: 'DB error' });
      return res.json({ ok: true, id: this.lastID });
    }
  );
});

app.post('/api/providers', (req, res) => {
  const { providerType, name, address, location, contact, services, specialty, admin } = req.body || {};
  if (!providerType || !name || !address || !location || typeof location.lat !== 'number' || typeof location.lng !== 'number' || !contact || !admin || !admin.fullName || !admin.email) {
    return res.status(400).json({ ok: false, error: 'Missing fields' });
  }
  db.run(
    `INSERT INTO providers(provider_type, name, address, lat, lng, contact, services, specialty, admin_name, admin_email)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      providerType,
      name,
      address,
      Number(location.lat),
      Number(location.lng),
      contact,
      Array.isArray(services) ? services.join(',') : services || null,
      specialty || null,
      admin.fullName,
      admin.email
    ],
    function(err) {
      if (err) return res.status(500).json({ ok: false, error: 'DB error' });
      return res.json({ ok: true, id: this.lastID });
    }
  );
});

// Static site
app.use('/', express.static(WEB_DIR, { extensions: ['html'] }));

const PORT = process.env.PORT || 5174;
app.listen(PORT, () => {
  console.log(`UnityCure server running on http://localhost:${PORT}`);
  console.log(`Serving static files from ${WEB_DIR}`);
});


