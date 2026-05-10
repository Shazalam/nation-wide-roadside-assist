"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight, Activity, Shield, Code,
  MapPin, CheckCircle2, ChevronRight,
  Terminal, Globe2, Clock, Zap,
  BarChart3, Cpu, Network
} from "lucide-react";
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis } from "recharts";

// --- Mock Data ---
const telemetryData = Array.from({ length: 20 }).map((_, i) => ({
  time: i,
  events: Math.floor(Math.random() * 50) + 50 + (i * 2),
}));

// --- Navbar Component ---
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? "bg-brand-navy/80 backdrop-blur-md border-brand-border" : "bg-transparent border-transparent"}`}>
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded bg-brand-blue/20 border border-brand-blue/50 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-brand-blue/20 blur-xl group-hover:bg-brand-blue/40 transition-colors" />
            <span className="font-mono font-bold text-brand-blue relative z-10">NT</span>
          </div>
          <div className="hidden md:flex flex-col">
            <span className="font-bold text-lg leading-tight tracking-tight text-white">Nationwide Trans Inc.</span>
            <span className="text-xs text-brand-slate tracking-wider uppercase font-medium">Operations Infrastructure</span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-brand-slate">
          {["Solutions", "Services", "Operations", "Technology", "About"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <a href="#login" className="text-sm font-medium text-brand-slate hover:text-white hidden md:block transition-colors">
            Partner Login
          </a>
          <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white shadow-[0_0_20px_rgba(47,128,255,0.4)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(47,128,255,0.6)]">
            Partner With Us
          </Button>
        </div>
      </div>
    </header>
  );
};

// --- Hero Section ---
const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-1/4 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <Badge variant="outline" className="border-brand-blue/30 text-brand-blue bg-brand-blue/10 px-4 py-1.5 mb-6 rounded-full text-xs font-mono uppercase tracking-widest flex w-fit items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
              Enterprise Mobility Infrastructure
            </Badge>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Powering the Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-blue to-brand-blue/70">
                Mobility & Roadside Infrastructure.
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-brand-slate mb-10 leading-relaxed max-w-xl">
              Enterprise-grade dispatch, nationwide vendor coordination, and API-first technology engineered for insurers, fleets, OEMs, and roadside providers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 text-base bg-white text-brand-navy hover:bg-gray-100 font-semibold group transition-all">
                Explore Enterprise Solutions
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base border-brand-border hover:bg-brand-blue/10 hover:text-brand-blue font-semibold transition-all">
                <Terminal className="mr-2 w-5 h-5" />
                View API Documentation
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center lg:justify-end perspective-[2000px]"
          >
            {/* Dashboard Mockup */}
            <div className="relative w-full max-w-lg aspect-square lg:aspect-auto lg:h-[500px] bg-brand-navy/40 backdrop-blur-xl border border-brand-border rounded-2xl p-6 shadow-2xl transform rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out">

              <div className="flex items-center justify-between mb-8 pb-4 border-b border-brand-border">
                <div className="flex items-center gap-3">
                  <Activity className="text-brand-blue" />
                  <span className="font-mono font-semibold text-white">Live Operations</span>
                </div>
                <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">System Nominal</Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-brand-navy/60 border border-brand-border rounded-xl p-4 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p className="text-brand-slate text-sm mb-1">SLA Compliance</p>
                  <p className="text-3xl font-bold text-white">97.8%</p>
                  <div className="mt-2 text-xs text-emerald-400 flex items-center gap-1">
                    <Activity className="w-3 h-3" /> +0.4% from last month
                  </div>
                </div>
                <div className="bg-brand-navy/60 border border-brand-border rounded-xl p-4">
                  <p className="text-brand-slate text-sm mb-1">Dispatch Events</p>
                  <p className="text-3xl font-bold text-white">2.4M+</p>
                  <div className="mt-2 text-xs text-brand-blue flex items-center gap-1">
                    <Globe2 className="w-3 h-3" /> Nationwide Coverage
                  </div>
                </div>
              </div>

              <div className="h-40 w-full">
                <p className="text-sm text-brand-slate mb-4">Event Telemetry (Real-time)</p>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={telemetryData}>
                    <defs>
                      <linearGradient id="colorEvents" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--color-brand-blue)" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="var(--color-brand-blue)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="events" stroke="var(--color-brand-blue)" fillOpacity={1} fill="url(#colorEvents)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Floating Element */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-12 top-20 bg-brand-navy/80 backdrop-blur-xl border border-brand-border rounded-xl p-4 shadow-xl hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center border border-brand-orange/20">
                    <Clock className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Avg Response ETA</p>
                    <p className="text-lg font-bold text-brand-orange">18.4 mins</p>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Trust Bar Section ---
const TrustBar = () => {
  // Duplicated logos for infinite seamless marquee
  const logos = ["AAA", "HONK", "WEX", "Enterprise", "Agero", "Geico", "AAA", "HONK", "WEX", "Enterprise", "Agero", "Geico"];
  const certs = ["SOC 2 Type II", "ISO 27001", "PCI-DSS", "GDPR Ready"];

  return (
    <section className="py-14 border-y border-brand-border/60 bg-[#060D18]/80 backdrop-blur-2xl overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#081120] via-transparent to-[#081120] z-10 pointer-events-none" />

      <div className="container mx-auto px-6 mb-10 relative z-20">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {certs.map((cert) => (
            <motion.div whileHover={{ y: -2 }} key={cert}>
              <Badge variant="outline" className="bg-[#0A192F]/80 text-white/90 border-brand-border/60 hover:border-brand-blue/60 hover:text-white hover:bg-[#0A192F] hover:shadow-[0_0_20px_rgba(47,128,255,0.3)] transition-all duration-300 px-5 py-2 text-xs font-mono font-medium backdrop-blur-md cursor-default">
                <Shield className="w-3.5 h-3.5 mr-2 text-brand-blue" />
                {cert}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative flex overflow-x-hidden">
        <motion.div
          className="flex whitespace-nowrap items-center gap-16 md:gap-32 py-2 px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
        >
          {logos.map((logo, i) => (
            <div key={i} className="text-2xl md:text-4xl font-bold font-mono tracking-[0.2em] text-brand-slate/30 hover:text-white transition-all duration-500 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] cursor-pointer select-none">
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// --- Capabilities Section ---
const CapabilitiesSection = () => {
  return (
    <section className="py-32 relative overflow-hidden" id="operations">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Core Capabilities</h2>
          <p className="text-lg md:text-xl text-brand-slate max-w-3xl mx-auto leading-relaxed">
            Enterprise infrastructure designed to handle massive scale while maintaining rigorous operational standards across the country.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="group relative rounded-[2rem] bg-[#0A192F]/60 border border-brand-border/60 hover:border-brand-blue/40 overflow-hidden backdrop-blur-2xl transition-all duration-700 hover:shadow-[0_15px_50px_-15px_rgba(47,128,255,0.4)]"
          >
            <div className="h-72 relative bg-[#060D18] p-6 overflow-hidden border-b border-brand-border/60">
              <div className="absolute inset-0 opacity-40 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(47,128,255,0.15)_0%,transparent_70%)]" />

              {/* Fake US Map with nodes */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[120%] h-[120%] -translate-y-4">
                  {[...Array(18)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.3, 1] }}
                      transition={{ duration: 1.5 + ((i * 13) % 100 / 100) * 2, repeat: Infinity, delay: ((i * 17) % 100 / 100) * 2 }}
                      className="absolute w-1.5 h-1.5 rounded-full bg-brand-blue shadow-[0_0_12px_#2F80FF]"
                      style={{
                        top: `${20 + ((i * 23) % 100 / 100) * 60}%`,
                        left: `${10 + ((i * 29) % 100 / 100) * 80}%`
                      }}
                    />
                  ))}
                  {/* Connecting lines */}
                  <svg className="absolute inset-0 w-full h-full opacity-20 group-hover:opacity-50 transition-opacity duration-700">
                    <path d="M50 100 Q 150 50 250 120 T 400 80" stroke="var(--color-brand-blue)" strokeWidth="1" fill="none" className="animate-[dash_10s_linear_infinite]" strokeDasharray="5,5" />
                    <path d="M100 150 Q 200 200 300 100 T 450 150" stroke="var(--color-brand-blue)" strokeWidth="1" fill="none" className="animate-[dash_15s_linear_infinite_reverse]" strokeDasharray="4,8" />
                    <path d="M80 80 Q 250 180 350 120" stroke="var(--color-brand-blue)" strokeWidth="0.5" fill="none" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-8 md:p-10">
              <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center mb-6 text-brand-blue group-hover:scale-110 group-hover:bg-brand-blue/20 transition-all duration-500">
                <Network className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Unmatched Network Density</h3>
              <p className="text-brand-slate leading-relaxed">
                Access a rigorously vetted nationwide ecosystem of light, medium, and heavy-duty recovery providers.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="group relative rounded-[2rem] bg-[#0A192F]/60 border border-brand-border/60 hover:border-brand-blue/40 overflow-hidden backdrop-blur-2xl transition-all duration-700 hover:shadow-[0_15px_50px_-15px_rgba(47,128,255,0.4)]"
          >
            <div className="h-72 relative bg-[#060D18] p-6 overflow-hidden border-b border-brand-border/60 flex flex-col justify-end">
              <div className="absolute inset-0 opacity-40 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] group-hover:bg-emerald-500/20 transition-colors duration-700" />

              {/* KPI overlay */}
              <div className="relative z-10 w-full bg-[#0A192F]/90 backdrop-blur-md border border-brand-border rounded-2xl p-5 mb-2 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700 shadow-2xl">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-mono text-brand-slate uppercase tracking-wider">Avg Response</span>
                  <Badge className="bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] uppercase tracking-wider">Optimal</Badge>
                </div>
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-4xl font-bold text-white leading-none tracking-tighter">14.2</span>
                  <span className="text-sm text-brand-slate font-mono pb-1">mins</span>
                </div>
                {/* Faux chart */}
                <div className="flex gap-1.5 h-10 items-end">
                  {[40, 60, 45, 80, 55, 90, 70, 85].map((h, i) => (
                    <div key={i} className="w-full bg-brand-slate/20 rounded-t-sm transition-all duration-700 group-hover:bg-emerald-500/80" style={{ height: `${h}%`, transitionDelay: `${i * 50}ms` }} />
                  ))}
                </div>
              </div>
            </div>
            <div className="p-8 md:p-10">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-500">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">SLA-Driven Operations</h3>
              <p className="text-brand-slate leading-relaxed">
                White-labeled dispatch infrastructure engineered to exceed enterprise response-time expectations.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="group relative rounded-[2rem] bg-[#0A192F]/60 border border-brand-border/60 hover:border-brand-blue/40 overflow-hidden backdrop-blur-2xl transition-all duration-700 hover:shadow-[0_15px_50px_-15px_rgba(47,128,255,0.4)] lg:col-span-1 md:col-span-2"
          >
            <div className="h-72 relative bg-[#060D18] p-6 overflow-hidden border-b border-brand-border/60">
              <div className="absolute inset-0 opacity-40 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.15)_0%,transparent_70%)]" />

              {/* API Graphics */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] text-[11px] md:text-xs font-mono text-purple-400/40 group-hover:text-purple-400/80 transition-colors duration-700 whitespace-pre leading-loose">
                {`POST /api/v1/dispatch
{
  "location": {
    "lat": 34.0522,
    "lng": -118.2437
  },
  "service": "TOW_FLATBED",
  "priority": "HIGH"
}
200 OK -> MATCHING_VENDOR`}
              </div>

              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-6 bottom-6 bg-[#0A192F]/90 backdrop-blur-md border border-brand-border rounded-xl p-3 text-[11px] font-mono text-white flex items-center gap-3 shadow-2xl group-hover:border-purple-500/50 transition-colors duration-500"
              >
                <div className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
                </div>
                Webhook Active
              </motion.div>
            </div>
            <div className="p-8 md:p-10">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-500">
                <Code className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">API-First Architecture</h3>
              <p className="text-brand-slate leading-relaxed">
                RESTful APIs and webhook integrations designed for real-time telemetry, automation, and billing orchestration.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Technology Showcase Section ---
const TechnologySection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: "telemetry",
      title: "Live Telemetry",
      desc: "Real-time GPS tracking and heatmap visualizations for thousands of concurrent active mobility events.",
      icon: MapPin,
    },
    {
      id: "dispatch",
      title: "Automated Dispatch",
      desc: "Algorithmic routing matching the closest, most capable vendor based on live SLA performance and payload requirements.",
      icon: Zap,
    },
    {
      id: "analytics",
      title: "Predictive Analytics",
      desc: "Forecast regional surge demand and intelligently reposition network assets before incidents occur.",
      icon: BarChart3,
    }
  ];

  return (
    <section className="py-32 bg-[#060D18] border-y border-brand-border/40 relative overflow-hidden" id="technology">
      {/* Background gradients */}
      <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">Complete Visibility. <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-purple-500">Total Control.</span></h2>
          <p className="text-lg md:text-xl text-brand-slate leading-relaxed">
            Real-time telemetry, AI-assisted dispatch intelligence, and predictive operational analytics engineered for enterprise mobility infrastructure.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT SIDE: Tabs */}
          <div className="lg:col-span-4 space-y-4">
            {tabs.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <div
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-500 overflow-hidden border ${isActive ? 'bg-[#0A192F]/80 border-brand-blue/50 shadow-[0_0_30px_rgba(47,128,255,0.15)]' : 'bg-transparent border-transparent hover:bg-[#0A192F]/40 hover:border-brand-border/40'}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabGlow"
                      className="absolute inset-0 bg-gradient-to-r from-brand-blue/10 to-transparent pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-blue shadow-[0_0_10px_#2F80FF]" />
                  )}
                  <div className="relative z-10 flex gap-4">
                    <div className={`mt-1 flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-500 ${isActive ? 'bg-brand-blue/20 text-brand-blue' : 'bg-brand-slate/10 text-brand-slate'}`}>
                      <tab.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold mb-2 transition-colors duration-500 ${isActive ? 'text-white' : 'text-brand-slate'}`}>
                        {tab.title}
                      </h3>
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p className="text-brand-slate/80 text-sm leading-relaxed pt-2">
                              {tab.desc}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE: Dashboard UI */}
          <div className="lg:col-span-8 relative perspective-[2000px]">
            <motion.div
              initial={{ opacity: 0, rotateX: 20, rotateY: -10, scale: 0.9 }}
              whileInView={{ opacity: 1, rotateX: 5, rotateY: -5, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full aspect-[16/10] bg-[#030812] border border-brand-border/60 rounded-2xl shadow-[0_30px_100px_-20px_rgba(47,128,255,0.25)] overflow-hidden transform-style-3d group"
            >
              {/* Dashboard Header */}
              <div className="absolute top-0 left-0 w-full h-12 border-b border-brand-border/60 bg-[#0A192F]/80 backdrop-blur-md flex items-center px-4 justify-between z-50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 bg-[#060D18] border border-brand-border rounded px-3 py-1">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">SYSTEM NOMINAL</span>
                  </div>
                </div>
              </div>

              {/* Dynamic Content Based on Tab */}
              <div className="absolute inset-0 pt-12 p-4 md:p-6 overflow-hidden">
                <AnimatePresence mode="wait">
                  {/* TAB 0: Telemetry */}
                  {activeTab === 0 && (
                    <motion.div
                      key="telemetry"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full flex flex-col gap-4"
                    >
                      <div className="flex gap-4 h-2/3">
                        {/* Map View */}
                        <div className="flex-1 bg-[#0A192F]/50 rounded-xl border border-brand-border/50 relative overflow-hidden group-hover:border-brand-blue/30 transition-colors">
                          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                          <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                            <Badge className="bg-[#0A192F]/80 text-brand-blue border-brand-blue/30 backdrop-blur font-mono text-[10px] w-fit">LIVE MAP</Badge>
                            <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30 backdrop-blur font-mono text-[10px] w-fit">8,241 ACTIVE NODES</Badge>
                          </div>

                          {/* Map Pings */}
                          <div className="absolute inset-0">
                            {[...Array(20)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: [0, 1.5, 2], opacity: [0, 0.8, 0] }}
                                transition={{ duration: 2, repeat: Infinity, delay: ((i * 7) % 20) * 0.2 }}
                                className="absolute w-4 h-4 rounded-full border border-brand-blue/50 bg-brand-blue/20"
                                style={{ top: `${20 + ((i * 13) % 60)}%`, left: `${10 + ((i * 17) % 80)}%` }}
                              />
                            ))}
                          </div>
                        </div>
                        {/* Status Panel */}
                        <div className="w-1/3 flex flex-col gap-4">
                          <div className="flex-1 bg-[#0A192F]/50 rounded-xl border border-brand-border/50 p-4">
                            <h4 className="text-[10px] md:text-xs font-mono text-brand-slate uppercase mb-3">Regional Load</h4>
                            <div className="space-y-3">
                              {["Northeast", "Midwest", "South", "West"].map((region, i) => {
                                const load = 40 + ((i * 19) % 50);
                                return (
                                  <div key={region} className="w-full">
                                    <div className="flex justify-between text-[10px] text-brand-slate font-mono mb-1">
                                      <span>{region}</span>
                                      <span>{load}%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-brand-bg rounded-full overflow-hidden">
                                      <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${load}%` }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                        className={`h-full ${load > 80 ? 'bg-brand-orange' : 'bg-brand-blue'}`}
                                      />
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Telemetry Chart */}
                      <div className="h-1/3 bg-[#0A192F]/50 rounded-xl border border-brand-border/50 p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="text-[10px] md:text-xs font-mono text-brand-slate uppercase">Global Events</h4>
                          <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                            <Activity className="w-3 h-3" /> LIVE
                          </span>
                        </div>
                        <div className="w-full h-[calc(100%-20px)]">
                          <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={telemetryData.slice(0, 15)}>
                              <defs>
                                <linearGradient id="colorEvents2" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="var(--color-brand-blue)" stopOpacity={0.4} />
                                  <stop offset="95%" stopColor="var(--color-brand-blue)" stopOpacity={0} />
                                </linearGradient>
                              </defs>
                              <Area type="monotone" dataKey="events" stroke="var(--color-brand-blue)" strokeWidth={2} fillOpacity={1} fill="url(#colorEvents2)" />
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* TAB 1: Dispatch */}
                  {activeTab === 1 && (
                    <motion.div
                      key="dispatch"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full flex gap-4"
                    >
                      <div className="w-1/2 flex flex-col gap-4">
                        <div className="bg-[#0A192F]/50 border border-brand-border/50 rounded-xl p-4 flex-1">
                          <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/30 font-mono text-[10px] mb-4">AI ROUTING ENGINE</Badge>
                          <div className="space-y-2">
                            {[1, 2, 3, 4].map(i => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-[#060D18] border border-brand-border/50 p-2 md:p-3 rounded-lg flex items-center justify-between"
                              >
                                <div>
                                  <div className="text-[9px] md:text-[10px] text-brand-slate font-mono">INCIDENT_ID: #{1024 + i * 17}</div>
                                  <div className="text-[10px] md:text-xs text-white mt-1">Flatbed Recovery required</div>
                                </div>
                                <div className="text-right">
                                  <div className="text-[9px] md:text-[10px] text-emerald-400 font-mono">MATCH FOUND</div>
                                  <div className="text-[10px] md:text-xs text-brand-slate mt-1">Vendor ETA: 12m</div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="w-1/2 bg-[#0A192F]/50 border border-brand-border/50 rounded-xl p-4 flex flex-col items-center justify-center relative overflow-hidden">
                        {/* Animated matching graphic */}
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.5)_0%,transparent_70%)]" />
                        <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border border-dashed border-purple-500/40 rounded-full"
                          />
                          <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-4 border border-purple-500/20 rounded-full"
                          />
                          <Cpu className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />
                        </div>
                        <div className="mt-6 text-center">
                          <div className="text-xs md:text-sm font-bold text-white">Algorithmic Matcher</div>
                          <div className="text-[10px] md:text-xs text-brand-slate mt-1 font-mono">Evaluating 24 variables/sec</div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* TAB 2: Analytics */}
                  {activeTab === 2 && (
                    <motion.div
                      key="analytics"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full flex flex-col gap-4"
                    >
                      <div className="flex gap-4 h-1/2">
                        <div className="w-1/2 bg-[#0A192F]/50 border border-brand-border/50 rounded-xl p-4">
                          <h4 className="text-[10px] md:text-xs font-mono text-brand-slate uppercase mb-2">Demand Forecast</h4>
                          <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={telemetryData.slice(5, 15)}>
                              <defs>
                                <linearGradient id="colorForecast" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="var(--color-brand-orange)" stopOpacity={0.4} />
                                  <stop offset="95%" stopColor="var(--color-brand-orange)" stopOpacity={0} />
                                </linearGradient>
                              </defs>
                              <Area type="step" dataKey="events" stroke="var(--color-brand-orange)" strokeWidth={2} fillOpacity={1} fill="url(#colorForecast)" />
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>
                        <div className="w-1/2 grid grid-cols-2 gap-2 md:gap-4">
                          {[
                            { label: "Surge Risk", value: "High", color: "text-brand-orange" },
                            { label: "Cost Eff", value: "94.2%", color: "text-emerald-400" },
                            { label: "Pred ETA", value: "11m", color: "text-brand-blue" },
                            { label: "Health", value: "99.9%", color: "text-white" }
                          ].map((kpi, i) => (
                            <div key={i} className="bg-[#0A192F]/50 border border-brand-border/50 rounded-xl p-3 md:p-4 flex flex-col justify-center">
                              <span className="text-[9px] md:text-[10px] font-mono text-brand-slate uppercase">{kpi.label}</span>
                              <span className={`text-lg md:text-2xl font-bold mt-1 ${kpi.color}`}>{kpi.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="h-1/2 bg-[#0A192F]/50 border border-brand-border/50 rounded-xl p-4 overflow-hidden relative">
                        <h4 className="text-[10px] md:text-xs font-mono text-brand-slate uppercase mb-4">Historical Performance Variance</h4>
                        <div className="absolute inset-0 pt-10 pb-4 px-4">
                          <div className="w-full h-full flex items-end gap-1 md:gap-2">
                            {[...Array(12)].map((_, i) => {
                              const h1 = 30 + ((i * 17) % 50);
                              const h2 = 20 + ((i * 23) % 40);
                              return (
                                <div key={i} className="flex-1 flex flex-col justify-end gap-0.5 md:gap-1 group relative">
                                  <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h2}%` }}
                                    transition={{ duration: 1, delay: i * 0.05 }}
                                    className="w-full bg-brand-orange/50 rounded-t"
                                  />
                                  <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h1}%` }}
                                    transition={{ duration: 1, delay: i * 0.05 }}
                                    className="w-full bg-brand-blue/80 rounded-t group-hover:bg-brand-blue transition-colors"
                                  />
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Floating Decorative Elements */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-blue/20 blur-3xl rounded-full pointer-events-none" />
              <div className="absolute top-1/2 -left-10 w-32 h-32 bg-purple-500/10 blur-2xl rounded-full pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Industry Solutions ---
const IndustrySolutions = () => {
  const [activeInd, setActiveInd] = useState(0);

  const industries = [
    {
      id: "insurance",
      title: "Insurance & Motor Clubs",
      target: "AAA, Agero, Insurance Carriers",
      desc: "Deliver a seamless, branded rescue experience for your policyholders with guaranteed nationwide SLA adherence.",
      features: ["White-label roadside operations", "Digital roadside request flows", "Customer satisfaction analytics", "Low abandonment rates", "SLA compliance metrics"],
    },
    {
      id: "commercial",
      title: "Commercial & Fleet",
      target: "WEX, Logistics Operators, Trucking",
      desc: "Keep your supply chain moving with specialized heavy-duty recovery networks and consolidated enterprise billing.",
      features: ["Heavy-duty towing operations", "Fleet downtime reduction", "DOT compliance systems", "Consolidated billing", "Logistics recovery operations"],
    },
    {
      id: "rental",
      title: "Rental & OEM",
      target: "Rental Providers, OEM Ecosystems",
      desc: "Enhance vehicle ownership and rental experiences with API-driven connected mobility and roadside assistance.",
      features: ["Connected-car integrations", "Mobile tire repair", "Key replacement workflows", "Trip continuation operations", "OEM roadside ecosystems"],
    }
  ];

  return (
    <section className="py-32 relative bg-[#081120] border-t border-brand-border/40 overflow-hidden" id="solutions">
      {/* Ambient background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-blue/5 rounded-[100%] blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Solutions Engineered for <br />Enterprise Mobility Operations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-brand-slate"
          >
            Scalable roadside infrastructure and operational intelligence tailored for insurers, fleets, OEM ecosystems, and nationwide mobility partners.
          </motion.p>
        </div>

        {/* Custom Tab Selector */}
        <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-4 mb-12 max-w-5xl mx-auto">
          {industries.map((ind, idx) => {
            const isActive = activeInd === idx;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveInd(idx)}
                className={`relative px-6 py-4 rounded-xl text-sm md:text-base font-medium transition-all duration-300 w-full md:w-auto overflow-hidden ${isActive ? 'text-white bg-[#0A192F]/80 border border-brand-blue/30 shadow-[0_0_20px_rgba(47,128,255,0.15)]' : 'text-brand-slate border border-transparent hover:border-brand-border/40 hover:bg-[#0A192F]/40'}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeIndTab"
                    className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-blue/10 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                {isActive && (
                  <motion.div
                    layoutId="activeIndLine"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-brand-blue shadow-[0_0_10px_#2F80FF]"
                  />
                )}
                <span className="relative z-10">{ind.title}</span>
              </button>
            )
          })}
        </div>

        {/* Dynamic Content Area */}
        <div className="bg-[#0A192F]/40 border border-brand-border/60 rounded-3xl p-6 md:p-12 backdrop-blur-sm relative overflow-hidden max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeInd}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left Text Content */}
              <div>
                <Badge className="bg-brand-blue/10 text-brand-blue border-brand-blue/20 font-mono text-[10px] mb-6 tracking-wider uppercase">
                  BUILT FOR: {industries[activeInd].target}
                </Badge>
                <h3 className="text-3xl font-bold text-white mb-4">{industries[activeInd].title} Infrastructure</h3>
                <p className="text-brand-slate text-lg leading-relaxed mb-8">
                  {industries[activeInd].desc}
                </p>
                <div className="space-y-4">
                  {industries[activeInd].features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      <span className="text-white font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="mt-10 bg-white text-brand-bg hover:bg-gray-200 rounded-full px-8 py-6 h-auto text-sm font-semibold transition-transform hover:scale-105">
                  Explore Capabilities <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Right Visual Dashboard */}
              <div className="relative aspect-square md:aspect-[4/3] bg-[#030812] rounded-2xl border border-brand-border/60 overflow-hidden shadow-2xl group">
                {/* Dashboard Header Mock */}
                <div className="absolute top-0 left-0 right-0 h-10 border-b border-brand-border/60 bg-[#0A192F]/80 backdrop-blur z-20 flex items-center px-4 gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <div className="ml-auto text-[10px] font-mono text-brand-slate">operations.portal</div>
                </div>

                <div className="absolute inset-0 pt-10">
                  {activeInd === 0 && (
                    <div className="w-full h-full p-4 flex flex-col gap-4">
                      <div className="flex gap-4 h-1/3">
                        <div className="flex-1 bg-[#0A192F]/50 rounded-xl border border-brand-border/50 p-4 flex flex-col justify-center transition-colors group-hover:border-brand-blue/30">
                          <div className="text-[10px] text-brand-slate font-mono uppercase mb-1">Global CSAT</div>
                          <div className="text-3xl font-bold text-white mb-1">4.92<span className="text-sm text-brand-slate">/5.0</span></div>
                          <div className="text-xs text-emerald-400 flex items-center gap-1"><Activity className="w-3 h-3" /> +0.14 this week</div>
                        </div>
                        <div className="flex-1 bg-[#0A192F]/50 rounded-xl border border-brand-border/50 p-4 flex flex-col justify-center">
                          <div className="text-[10px] text-brand-slate font-mono uppercase mb-1">Abandonment Rate</div>
                          <div className="text-3xl font-bold text-white mb-1">1.2%</div>
                          <div className="text-xs text-emerald-400">Industry avg: 14%</div>
                        </div>
                      </div>
                      <div className="flex-1 bg-[#0A192F]/50 rounded-xl border border-brand-border/50 p-4 relative overflow-hidden">
                        <div className="text-[10px] text-brand-slate font-mono uppercase mb-4">Live Digital Requests</div>
                        <div className="space-y-2 md:space-y-3 relative z-10">
                          {[1, 2, 3].map(i => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-center justify-between bg-[#060D18] border border-brand-border/50 p-3 rounded-lg"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue">
                                  <Shield className="w-4 h-4" />
                                </div>
                                <div>
                                  <div className="text-xs text-white">Policyholder #{8400 + i * 13}</div>
                                  <div className="text-[10px] text-brand-slate">Tow Request • Digital Flow</div>
                                </div>
                              </div>
                              <Badge className="bg-emerald-500/10 text-emerald-400 border-none font-mono text-[10px]">DISPATCHED</Badge>
                            </motion.div>
                          ))}
                        </div>
                        <div className="absolute right-0 bottom-0 w-48 h-48 bg-brand-blue/10 blur-3xl rounded-full pointer-events-none" />
                      </div>
                    </div>
                  )}

                  {activeInd === 1 && (
                    <div className="w-full h-full p-4 flex flex-col gap-4">
                      <div className="flex-1 bg-[#0A192F]/50 rounded-xl border border-brand-border/50 relative overflow-hidden transition-colors group-hover:border-brand-orange/30">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                        {/* Mock Heatmap dots */}
                        <div className="absolute inset-0">
                          {[...Array(20)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: [0.4, 0.8, 0.4] }}
                              transition={{ duration: 3, repeat: Infinity, delay: ((i * 11) % 20) * 0.2 }}
                              className="absolute w-8 h-8 rounded-full bg-brand-orange/20 blur-md"
                              style={{ top: `${20 + ((i * 31) % 60)}%`, left: `${10 + ((i * 47) % 80)}%` }}
                            />
                          ))}
                        </div>
                        <div className="absolute top-4 left-4 z-10">
                          <Badge className="bg-[#0A192F]/80 text-brand-orange border-brand-orange/30 backdrop-blur font-mono text-[10px]">LOGISTICS HEATMAP</Badge>
                        </div>
                      </div>
                      <div className="h-1/3 flex gap-4">
                        <div className="flex-1 bg-[#0A192F]/50 rounded-xl border border-brand-border/50 p-4 flex flex-col justify-center relative overflow-hidden">
                          <div className="text-[10px] text-brand-slate font-mono uppercase mb-1 z-10 relative">Heavy-Duty Ops</div>
                          <div className="text-xl md:text-2xl font-bold text-brand-orange z-10 relative">Class 8 Towing</div>
                          <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-brand-orange/20 blur-2xl rounded-full pointer-events-none" />
                        </div>
                        <div className="flex-1 bg-[#0A192F]/50 rounded-xl border border-brand-border/50 p-4 flex flex-col justify-center">
                          <div className="text-[10px] text-brand-slate font-mono uppercase mb-1">Downtime Reduction</div>
                          <div className="text-xl md:text-2xl font-bold text-white mb-2">34%</div>
                          <div className="w-full h-1.5 bg-brand-bg rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "66%" }}
                              transition={{ duration: 1 }}
                              className="h-full bg-emerald-400"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeInd === 2 && (
                    <div className="w-full h-full p-4 flex flex-col gap-4">
                      <div className="h-1/2 flex gap-4">
                        <div className="w-1/2 bg-[#0A192F]/50 rounded-xl border border-brand-border/50 p-4 flex flex-col items-center justify-center text-center transition-colors group-hover:border-purple-500/30">
                          <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-12 h-12 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mb-3"
                          >
                            <Globe2 className="w-6 h-6" />
                          </motion.div>
                          <div className="text-sm font-bold text-white">Connected Vehicle API</div>
                          <div className="text-[10px] text-brand-slate mt-1">Direct Telematics Integration</div>
                        </div>
                        <div className="w-1/2 bg-[#0A192F]/50 rounded-xl border border-brand-border/50 p-4 flex flex-col justify-center">
                          <div className="text-[10px] text-brand-slate font-mono uppercase mb-2">API Latency</div>
                          <div className="text-3xl font-bold text-white">42<span className="text-sm text-brand-slate">ms</span></div>
                          <div className="w-full h-12 mt-2 flex items-end gap-1">
                            {[...Array(8)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${20 + (((i + 1) * 17) % 80)}%` }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="flex-1 bg-purple-500/50 rounded-t"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 bg-[#0A192F]/50 rounded-xl border border-brand-border/50 p-4 flex flex-col justify-center relative overflow-hidden">
                        <div className="text-[10px] text-brand-slate font-mono uppercase mb-4 z-10 relative">OEM Service Flows</div>
                        <div className="flex items-center gap-1 md:gap-2 h-16 z-10 relative">
                          <div className="flex-1 h-full bg-[#060D18] border border-brand-border/50 rounded flex items-center justify-center text-[9px] md:text-[10px] text-brand-slate text-center leading-tight">Telematics<br />Fault</div>
                          <div className="w-2 md:w-4 h-px bg-brand-border/50 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-brand-blue rounded-full" /></div>
                          <div className="flex-1 h-full bg-brand-blue/10 border border-brand-blue/30 rounded flex items-center justify-center text-[9px] md:text-[10px] text-brand-blue text-center leading-tight">API<br />Trigger</div>
                          <div className="w-2 md:w-4 h-px bg-brand-border/50 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-brand-blue rounded-full" /></div>
                          <div className="flex-1 h-full bg-emerald-500/10 border border-emerald-500/30 rounded flex items-center justify-center text-[9px] md:text-[10px] text-emerald-400 text-center leading-tight">Vendor<br />Dispatched</div>
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/10 blur-2xl rounded-full" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

// --- Final CTA Section ---
const FinalCTA = () => {
  return (
    <section className="py-32 relative bg-[#060D18] overflow-hidden">
      {/* Background ambient visuals */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-blue/10 rounded-[100%] blur-[120px] pointer-events-none" />
      
      {/* Floating particles background layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -100], 
              opacity: [0, 0.5, 0] 
            }}
            transition={{ 
              duration: 5 + ((i * 13) % 5), 
              repeat: Infinity, 
              delay: (i * 7) % 10 
            }}
            className="absolute w-1 h-1 bg-brand-blue/40 rounded-full"
            style={{ left: `${(i * 19) % 100}%`, top: `${70 + (i * 5) % 30}%` }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto bg-[#0A192F]/60 backdrop-blur-xl border border-brand-border/60 rounded-3xl p-10 md:p-20 text-center relative overflow-hidden shadow-[0_0_50px_rgba(47,128,255,0.1)] group"
        >
          {/* Inner Glow lines */}
          <div className="absolute inset-0 border border-brand-blue/20 rounded-3xl group-hover:border-brand-blue/40 transition-colors duration-500 pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-brand-blue to-transparent shadow-[0_0_15px_rgba(47,128,255,0.8)]" />

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 relative z-10 tracking-tight">
            Ready to modernize your roadside operations infrastructure?
          </h2>
          <p className="text-lg md:text-xl text-brand-slate mb-12 relative z-10 max-w-3xl mx-auto leading-relaxed">
            Connect with our enterprise mobility team to explore integrations, SLAs, and nationwide operational coverage.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 relative z-10">
            <Button size="lg" className="h-14 px-8 text-base bg-brand-blue hover:bg-[#1a66db] text-white w-full sm:w-auto rounded-xl shadow-[0_0_20px_rgba(47,128,255,0.4)] hover:shadow-[0_0_30px_rgba(47,128,255,0.6)] transition-all duration-300 group/btn">
              Contact Our Enterprise Team
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base bg-[#0A192F]/50 backdrop-blur-sm border-brand-blue/30 text-white hover:bg-brand-blue/10 hover:border-brand-blue/50 w-full sm:w-auto rounded-xl transition-all duration-300">
              Get a Capability Report
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Footer Section ---
const Footer = () => {
  return (
    <footer className="bg-[#081120] border-t border-brand-border/40 pt-24 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Column 1 - Company */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-brand-blue to-purple-600 flex items-center justify-center shadow-[0_0_15px_rgba(47,128,255,0.4)]">
                <span className="font-mono font-bold text-white text-xs">NT</span>
              </div>
              <span className="font-bold text-white text-lg tracking-tight">Nationwide Trans Inc.</span>
            </div>
            <p className="text-sm text-brand-slate leading-relaxed mb-6 max-w-sm">
              Nationwide roadside operations infrastructure and enterprise mobility platform.
            </p>
            <a href="mailto:partnerships@nationwidetrans.com" className="text-sm text-brand-blue hover:text-white transition-colors font-mono flex items-center gap-2 w-fit">
              <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
              partnerships@nationwidetrans.com
            </a>
          </div>

          {/* Column 2 - Solutions */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs font-semibold text-white mb-6 uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-4 text-sm text-brand-slate">
              {["Insurance Programs", "Fleet Operations", "Enterprise Dispatch", "Commercial Recovery"].map((link, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-brand-blue transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-px bg-brand-blue transition-all duration-300 group-hover:w-2" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Technology */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs font-semibold text-white mb-6 uppercase tracking-wider">Technology</h4>
            <ul className="space-y-4 text-sm text-brand-slate">
              {["API Documentation", "Dashboards", "Integrations", "System Status"].map((link, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-brand-blue transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-px bg-brand-blue transition-all duration-300 group-hover:w-2" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Resources */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs font-semibold text-white mb-6 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-4 text-sm text-brand-slate">
              {["Case Studies", "Compliance", "Privacy Policy", "Terms of Service"].map((link, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-brand-blue transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-px bg-brand-blue transition-all duration-300 group-hover:w-2" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-border/40 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
             <div className="flex gap-1.5 items-center">
               <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 shadow-[0_0_8px_#10b981] animate-pulse" />
               <div className="text-[10px] font-mono text-brand-slate uppercase tracking-wider">All Systems Operational</div>
             </div>
          </div>
          <p className="text-[11px] text-brand-slate/60 font-mono">
            &copy; {new Date().getFullYear()} NATIONWIDE TRANS INC. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-brand-slate/60 font-mono">
            <a href="#" className="hover:text-white transition-colors tracking-widest">PRIVACY</a>
            <a href="#" className="hover:text-white transition-colors tracking-widest">TERMS</a>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default function HomePage() {
  return (
    <div className="min-h-screen bg-brand-bg font-sans selection:bg-brand-blue/30 text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <CapabilitiesSection />
        <TechnologySection />
        <IndustrySolutions />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
