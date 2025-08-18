"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  MapPin,
  Clock,
  Users,
  Heart,
  Shield,
  Zap,
  Star,
  Phone,
  Video,
  Activity,
  Brain,
  Plus,
  Minus,
  Sparkles,
} from "lucide-react"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeHospitals, setActiveHospitals] = useState(1247)
  const [onlineDoctors, setOnlineDoctors] = useState(3892)
  const [patientsHelped, setPatientsHelped] = useState(156789)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setActiveHospitals((prev) => prev + Math.floor(Math.random() * 3))
      setOnlineDoctors((prev) => prev + Math.floor(Math.random() * 5))
      setPatientsHelped((prev) => prev + Math.floor(Math.random() * 10))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const benefits = [
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Real-Time Availability",
      description: "See live hospital bed availability, doctor schedules, and wait times instantly",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: <Video className="w-5 h-5" />,
      title: "Telemedicine Integration",
      description: "Connect with doctors virtually for consultations, follow-ups, and emergency advice",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: "AI-Powered Insights",
      description: "Get personalized health recommendations and early warning systems",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Collaborative Care",
      description: "Seamless coordination between patients, families, doctors, and NGOs",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Secure & Private",
      description: "HIPAA-compliant platform with end-to-end encryption for your health data",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Emergency Response",
      description: "Instant emergency alerts and fastest route to nearest available care",
      gradient: "from-yellow-500 to-orange-500",
    },
  ]

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Emergency Medicine Physician",
      content:
        "UnityCure has revolutionized how we coordinate patient care. Real-time visibility into bed availability has reduced our transfer times by 60%.",
      rating: 5,
      avatar: "/asian-woman-doctor.png",
    },
    {
      name: "Maria Rodriguez",
      role: "Patient & Mother of 3",
      content:
        "Finding the right care for my family used to be stressful. Now I can see which doctors are available and book appointments instantly.",
      rating: 5,
      avatar: "/hispanic-mother.png",
    },
    {
      name: "James Thompson",
      role: "Healthcare NGO Director",
      content:
        "The collaborative features help us coordinate community health programs more effectively. We've reached 40% more patients this year.",
      rating: 5,
      avatar: "/professional-director.png",
    },
  ]

  const faqs = [
    {
      question: "How does UnityCure ensure my health data is secure?",
      answer:
        "We use HIPAA-compliant infrastructure with end-to-end encryption, multi-factor authentication, and regular security audits to protect your sensitive health information.",
    },
    {
      question: "Can I use UnityCure for emergency situations?",
      answer:
        "Yes! UnityCure provides instant emergency alerts, shows the fastest route to the nearest available emergency care, and can notify your emergency contacts automatically.",
    },
    {
      question: "How accurate is the real-time hospital availability data?",
      answer:
        "Our data is updated every 30 seconds through direct integration with hospital management systems, providing 99.8% accuracy for bed availability and wait times.",
    },
    {
      question: "Is telemedicine covered by insurance through UnityCure?",
      answer:
        "Most major insurance providers cover telemedicine consultations. We verify your coverage in real-time and show only covered options during booking.",
    },
    {
      question: "How does the AI health insights feature work?",
      answer:
        "Our AI analyzes your health patterns, medical history, and real-time data to provide personalized recommendations, early warning alerts, and preventive care suggestions.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 relative overflow-hidden medical-pattern">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Enhanced floating medical icons with staggered animations */}
        <div className="absolute top-20 left-10 opacity-10 animate-float">
          <Heart className="w-8 h-8 text-emerald-500" />
        </div>
        <div className="absolute top-40 right-20 opacity-10 animate-float" style={{ animationDelay: "1s" }}>
          <Activity className="w-6 h-6 text-teal-500" />
        </div>
        <div className="absolute bottom-40 left-20 opacity-10 animate-float" style={{ animationDelay: "2s" }}>
          <Brain className="w-7 h-7 text-cyan-500" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-10 animate-float" style={{ animationDelay: "3s" }}>
          <Shield className="w-5 h-5 text-emerald-600" />
        </div>
        <div className="absolute top-1/2 left-1/2 opacity-10 animate-float" style={{ animationDelay: "4s" }}>
          <Zap className="w-6 h-6 text-teal-400" />
        </div>

        {/* Enhanced data stream lines with multiple layers */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent animate-data-stream"></div>
        <div
          className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-400/20 to-transparent animate-data-stream"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent animate-data-stream"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Enhanced neural network nodes with pulsing connections */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-emerald-400/30 rounded-full animate-neural-pulse"></div>
        <div
          className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-teal-400/40 rounded-full animate-neural-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-cyan-400/30 rounded-full animate-neural-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/4 right-1/4 w-1 h-1 bg-emerald-500/40 rounded-full animate-neural-pulse"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Enhanced matrix-style background with more elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-20 bg-gradient-to-b from-transparent via-emerald-400/10 to-transparent animate-matrix"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-emerald-400/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <nav className="fixed top-0 w-full z-50 glass backdrop-blur-xl border-b border-white/20 shadow-lg shadow-emerald-500/5 animate-hologram">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center animate-glow shadow-lg shadow-emerald-500/30 hover:scale-110 transition-transform">
                <Heart className="w-5 h-5 text-white animate-pulse" />
              </div>
              <span className="text-xl font-mono font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                UnityCure
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-slate-600 hover:text-emerald-600 transition-all duration-300 font-medium text-sm hover:scale-105 relative group"
              >
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#benefits"
                className="text-slate-600 hover:text-emerald-600 transition-all duration-300 font-medium text-sm hover:scale-105 relative group"
              >
                Benefits
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#testimonials"
                className="text-slate-600 hover:text-emerald-600 transition-all duration-300 font-medium text-sm hover:scale-105 relative group"
              >
                Testimonials
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#faq"
                className="text-slate-600 hover:text-emerald-600 transition-all duration-300 font-medium text-sm hover:scale-105 relative group"
              >
                FAQ
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                className="font-medium text-sm px-4 py-2 hover:scale-105 transition-transform hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border border-transparent hover:border-emerald-200"
              >
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold px-6 py-2 text-sm shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all hover:scale-105 border border-transparent hover:border-emerald-300">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/30 via-transparent to-teal-100/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(20,184,166,0.08),transparent_50%)]"></div>

        <div className="absolute inset-0 opacity-5">
          <img
            src="/medical-technology-bg.png"
            alt="Medical Technology Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-emerald-400/15 to-teal-400/15 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-teal-400/15 to-cyan-400/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-emerald-400/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className={`text-center space-y-12 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <div className="space-y-6">
              <Badge className="glass bg-emerald-500/10 text-emerald-700 border-emerald-200 hover:bg-emerald-500/20 px-4 py-2 text-sm font-semibold shadow-lg shadow-emerald-500/20 animate-hologram hover:scale-105 transition-transform">
                <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                Revolutionary Healthcare Platform
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-black tracking-tight leading-tight">
                Your Health Journey,
                <br />
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent animate-glow relative">
                  Unified
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600/20 via-teal-600/20 to-cyan-600/20 blur-lg animate-pulse"></div>
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
                Experience healthcare reimagined. Real-time hospital insights, seamless telemedicine, and AI-powered
                care coordination—all in one intelligent platform that puts you in control of your health journey.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="relative glass p-2 rounded-2xl border border-white/30 shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all animate-hologram hover:scale-105">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  placeholder="Find hospitals, specialists, or services near you..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-14 pr-4 py-6 text-base border-0 bg-transparent focus:ring-0 placeholder:text-slate-400 font-medium"
                />
                <Button
                  size="lg"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold px-8 py-3 text-sm animate-glow shadow-lg shadow-emerald-500/30 hover:scale-105 transition-all"
                >
                  Search
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="glass p-8 rounded-3xl text-center space-y-4 hover:scale-110 transition-all duration-500 shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 animate-hologram group border border-emerald-200/30 hover:border-emerald-300/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="text-4xl font-mono font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent group-hover:scale-125 transition-transform duration-300 animate-bounce-slow">
                    {activeHospitals.toLocaleString()}+
                  </div>
                  <div className="text-slate-600 font-semibold text-base group-hover:text-emerald-700 transition-colors">
                    Connected Hospitals
                  </div>
                  <div className="flex justify-center">
                    <div className="w-4 h-4 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50 group-hover:shadow-emerald-500/80 group-hover:scale-125 transition-all"></div>
                  </div>
                </div>
              </div>
              <div
                className="glass p-8 rounded-3xl text-center space-y-4 hover:scale-110 transition-all duration-500 shadow-xl shadow-teal-500/20 hover:shadow-teal-500/40 animate-hologram group border border-teal-200/30 hover:border-teal-300/50 relative overflow-hidden"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="text-4xl font-mono font-black bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent group-hover:scale-125 transition-transform duration-300 animate-bounce-slow">
                    {onlineDoctors.toLocaleString()}+
                  </div>
                  <div className="text-slate-600 font-semibold text-base group-hover:text-teal-700 transition-colors">
                    Available Doctors
                  </div>
                  <div className="flex justify-center">
                    <div className="w-4 h-4 bg-teal-500 rounded-full animate-pulse shadow-lg shadow-teal-500/50 group-hover:shadow-teal-500/80 group-hover:scale-125 transition-all"></div>
                  </div>
                </div>
              </div>
              <div
                className="glass p-8 rounded-3xl text-center space-y-4 hover:scale-110 transition-all duration-500 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 animate-hologram group border border-cyan-200/30 hover:border-cyan-300/50 relative overflow-hidden"
                style={{ animationDelay: "1s" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="text-4xl font-mono font-black bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent group-hover:scale-125 transition-transform duration-300 animate-bounce-slow">
                    {patientsHelped.toLocaleString()}+
                  </div>
                  <div className="text-slate-600 font-semibold text-base group-hover:text-cyan-700 transition-colors">
                    Lives Transformed
                  </div>
                  <div className="flex justify-center">
                    <div className="w-4 h-4 bg-cyan-500 rounded-full animate-pulse shadow-lg shadow-cyan-500/50 group-hover:shadow-cyan-500/80 group-hover:scale-125 transition-all"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-lg px-10 py-4 font-bold shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 transition-all border-2 border-transparent hover:border-emerald-300 relative overflow-hidden group"
              >
                <Sparkles className="w-5 h-5 mr-2 animate-pulse relative z-10" />
                <span className="relative z-10">Begin Your Journey</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-emerald-300 text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50 hover:border-emerald-400 text-lg px-10 py-4 font-bold bg-white/80 backdrop-blur-sm shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 hover:scale-105 transition-all group"
              >
                <Video className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-100 to-slate-50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.03),transparent_70%)]"></div>
        <div className="absolute inset-0 opacity-5">
          <img
            src="/healthcare-problems-bg.png"
            alt="Healthcare Problems Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-16">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-mono font-black text-slate-800">
                Healthcare Shouldn't Be This <span className="text-red-500 animate-pulse">Complicated</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
                Every day, millions struggle with fragmented healthcare systems, endless wait times, and lack of
                coordination between providers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { icon: Clock, title: "Long Wait Times", desc: "Average 4+ hour emergency room waits" },
                { icon: MapPin, title: "No Visibility", desc: "Can't see which hospitals have availability" },
                { icon: Users, title: "Poor Coordination", desc: "Disconnected care between providers" },
                { icon: Phone, title: "Limited Access", desc: "Difficulty reaching doctors when needed" },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="glass border-red-200/50 hover:border-red-300/70 transition-all duration-500 hover:scale-110 shadow-xl shadow-red-500/20 hover:shadow-red-500/40 animate-hologram rounded-3xl group relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  <CardContent className="p-8 text-center space-y-6 relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-3xl flex items-center justify-center mx-auto shadow-xl shadow-red-500/30 group-hover:shadow-red-500/50 group-hover:scale-125 transition-all duration-300 animate-bounce-slow">
                      <item.icon className="w-7 h-7 text-red-500 group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="font-bold text-lg text-slate-800 group-hover:text-red-700 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed font-medium text-sm group-hover:text-slate-700 transition-colors duration-300">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-gradient-to-br from-white to-emerald-50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.08),transparent_70%)]"></div>
        <div className="absolute inset-0 opacity-10">
          <img
            src="/healthcare-technology-bg.png"
            alt="Healthcare Technology Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-16">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-mono font-black text-slate-800">
                Meet Your{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Healthcare Companion
                </span>
              </h2>
              <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
                UnityCure transforms healthcare into a seamless, connected experience where you're always in control of
                your health journey.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                {[
                  {
                    icon: Activity,
                    title: "Real-Time Health Dashboard",
                    desc: "See live hospital capacity, doctor availability, and wait times across your area",
                    color: "emerald",
                  },
                  {
                    icon: Video,
                    title: "Integrated Telemedicine",
                    desc: "Connect with doctors instantly for consultations, follow-ups, and emergency advice",
                    color: "teal",
                  },
                  {
                    icon: Brain,
                    title: "AI-Powered Insights",
                    desc: "Get personalized health recommendations and early warning systems",
                    color: "cyan",
                  },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="glass border-white/30 hover:border-emerald-200 transition-all duration-300 hover:scale-105 group shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 animate-hologram"
                    style={{ animationDelay: `${index * 0.3}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-6">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br from-${item.color}-100 to-${item.color}-200 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-${item.color}-500/20`}
                        >
                          <item.icon className={`w-5 h-5 text-${item.color}-600`} />
                        </div>
                        <div className="space-y-3">
                          <h3 className="font-bold text-lg text-slate-800">{item.title}</h3>
                          <p className="text-slate-600 leading-relaxed text-sm font-medium">{item.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="relative">
                <div className="glass p-6 rounded-2xl border border-white/30 hover:scale-105 transition-transform duration-300 shadow-xl shadow-emerald-500/20 animate-hologram">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-lg text-slate-800">Live Hospital Status</h4>
                      <Badge className="bg-emerald-500/20 text-emerald-700 border-emerald-300 animate-pulse px-3 py-1 font-semibold text-sm">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 shadow-lg shadow-emerald-500/50 animate-neural-pulse"></div>
                        Live
                      </Badge>
                    </div>

                    <div className="space-y-4">
                      {[
                        {
                          name: "City General Hospital",
                          beds: "12 beds available",
                          status: "emerald",
                          dot: "emerald-500",
                        },
                        { name: "Metro Medical Center", beds: "3 beds available", status: "yellow", dot: "yellow-500" },
                        { name: "Regional Emergency", beds: "At capacity", status: "red", dot: "red-500" },
                      ].map((hospital, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 bg-white/50 rounded-xl border border-white/30 hover:bg-white/70 transition-all duration-300 hover:scale-105 shadow-md"
                        >
                          <div className="flex items-center space-x-4">
                            <div
                              className={`w-3 h-3 bg-${hospital.dot} rounded-full animate-pulse shadow-lg shadow-${hospital.dot}/50`}
                            ></div>
                            <span className="font-semibold text-slate-800 text-sm">{hospital.name}</span>
                          </div>
                          <span
                            className={`text-sm font-semibold ${hospital.status === "emerald" ? "text-emerald-600" : hospital.status === "yellow" ? "text-yellow-600" : "text-red-600"}`}
                          >
                            {hospital.beds}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-gradient-to-br from-slate-50 to-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(20,184,166,0.08),transparent_70%)]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-16">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-mono font-black text-slate-800">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  UnityCure?
                </span>
              </h2>
              <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
                Experience healthcare the way it should be - connected, intelligent, and always available.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="group glass border-white/40 hover:border-emerald-300/60 transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/30 shadow-xl shadow-emerald-500/15 animate-hologram rounded-3xl relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                  <CardContent className="p-8 text-center space-y-6 relative z-10">
                    <div
                      className={`w-18 h-18 bg-gradient-to-br ${benefit.gradient} rounded-3xl flex items-center justify-center mx-auto group-hover:scale-125 transition-transform duration-500 animate-glow shadow-xl group-hover:shadow-2xl`}
                    >
                      <div className="text-white group-hover:scale-125 transition-transform duration-300 animate-bounce-slow">
                        {benefit.icon}
                      </div>
                    </div>
                    <h3 className="font-bold text-lg text-slate-800 group-hover:text-emerald-700 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm font-medium group-hover:text-slate-700 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(16,185,129,0.08),transparent_70%)]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-16">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-mono font-black text-slate-800">
                Trusted by{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Healthcare Heroes
                </span>
              </h2>
              <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
                See how UnityCure is transforming healthcare experiences for patients, doctors, and organizations
                worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="glass border-white/30 hover:border-emerald-200 transition-all duration-300 hover:scale-105 group shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 animate-hologram"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <CardContent className="p-6 space-y-6">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400 animate-pulse"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                    <p className="text-slate-600 italic leading-relaxed text-sm font-medium">"{testimonial.content}"</p>
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full border-2 border-emerald-200 shadow-lg hover:scale-110 transition-transform"
                      />
                      <div className="text-left">
                        <div className="font-bold text-slate-800 text-sm">{testimonial.name}</div>
                        <div className="text-slate-600 font-medium text-xs">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex items-center justify-center space-x-12 opacity-80">
              <div className="text-center animate-hologram">
                <div className="text-2xl font-mono font-black text-emerald-600">500+</div>
                <div className="text-slate-600 font-semibold text-sm">Hospitals</div>
              </div>
              <div className="w-px h-12 bg-slate-300"></div>
              <div className="text-center animate-hologram" style={{ animationDelay: "0.5s" }}>
                <div className="text-2xl font-mono font-black text-teal-600">10K+</div>
                <div className="text-slate-600 font-semibold text-sm">Doctors</div>
              </div>
              <div className="w-px h-12 bg-slate-300"></div>
              <div className="text-center animate-hologram" style={{ animationDelay: "1s" }}>
                <div className="text-2xl font-mono font-black text-cyan-600">1M+</div>
                <div className="text-slate-600 font-semibold text-sm">Patients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-gradient-to-br from-white to-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-16">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-mono font-black text-slate-800">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
              <p className="text-lg text-slate-600 font-medium">Everything you need to know about UnityCure</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card
                  key={index}
                  className="glass border-white/30 hover:border-emerald-200 transition-all duration-300 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 animate-hologram"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-emerald-50/50 transition-colors group"
                    >
                      <span className="font-bold text-base text-slate-800 group-hover:text-emerald-700 transition-colors">
                        {faq.question}
                      </span>
                      <div className="flex-shrink-0 ml-4">
                        {openFaq === index ? (
                          <Minus className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform animate-pulse" />
                        ) : (
                          <Plus className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform" />
                        )}
                      </div>
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6 animate-slide-up">
                        <p className="text-slate-600 leading-relaxed text-sm font-medium">{faq.answer}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-600/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 opacity-10">
          <img
            src="/healthcare-success-bg.png"
            alt="Healthcare Success Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-mono font-black text-white">
              Ready to Transform Your <span className="text-yellow-300 animate-pulse">Healthcare Experience?</span>
            </h2>
            <p className="text-lg text-emerald-100 leading-relaxed font-medium">
              Join thousands of patients, doctors, and healthcare organizations who are already experiencing the future
              of healthcare.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 text-base px-8 py-3 font-bold hover:scale-105 transition-all shadow-xl shadow-white/20 border-2 border-transparent hover:border-emerald-200"
            >
              <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/50 text-white hover:bg-white/10 hover:border-white/80 text-base px-8 py-3 font-bold glass hover:scale-105 transition-all bg-transparent shadow-lg shadow-white/10"
            >
              <Video className="w-5 h-5 mr-2" />
              Schedule Demo
            </Button>
          </div>

          <p className="text-emerald-100 text-sm font-medium animate-pulse">
            No credit card required • 30-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      <footer className="bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src="/footer-medical-bg.png" alt="Footer Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30 animate-glow">
                  <Heart className="w-5 h-5 text-white animate-pulse" />
                </div>
                <span className="text-xl font-mono font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  UnityCure
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed text-sm font-medium">
                Transforming healthcare through technology, connection, and compassion.
              </p>
            </div>

            {[
              { title: "Product", items: ["Features", "Pricing", "API", "Integrations"] },
              { title: "Company", items: ["About", "Careers", "Press", "Contact"] },
              { title: "Support", items: ["Help Center", "Privacy Policy", "Terms of Service", "HIPAA Compliance"] },
            ].map((section, index) => (
              <div key={index} className="space-y-6">
                <h4 className="font-bold text-base text-white">{section.title}</h4>
                <div className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 cursor-pointer font-medium text-sm hover:scale-105"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-800 mt-16 pt-8 text-center">
            <p className="text-slate-400 text-sm font-medium">
              &copy; 2024 UnityCure. All rights reserved. Transforming healthcare, one connection at a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
