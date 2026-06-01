'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from '@/components/layout/navbar';
import {
  Shield,
  Truck,
  Globe,
  Zap,
  Wrench,
  Settings,
  Headphones,
  Navigation,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  AlertTriangle,
  MapPin,
  Phone,
  Mail,
  FileText,
  Activity,
  Network,
  Users,
  Database,
  BarChart3,
  Cpu,
  Layers,
  Clock,
  Map,
  UserCheck,
  ShieldAlert,
  FileCheck,
  Car,
  Bus,
  BatteryCharging,
  Eye,
  Radio,
  Server,
  Crosshair,
  Target,
  Timer,
  BarChart,
  GitMerge,
  PieChart,
  PhoneCall,
  Star,
  ShieldCheck,
  ChevronsUp,
  ClipboardList,
  AlertCircle,
  CheckCircle,
  Headset,
  BrainCircuit,
  Battery,
  User,
  Link,
  LayoutDashboard,
  Search,
  Building2,
  CheckCircle2,
  Webhook,
  Lock,
  Key
} from 'lucide-react';

const slides = [
  { id: 0, title: 'Enterprise Cover' },
  { id: 1, title: 'Company Overview' },
  { id: 2, title: 'Industry Problems' },
  { id: 3, title: 'Centralized Solution' },
  { id: 4, title: 'Provider Ecosystem' },
  { id: 5, title: 'Core Services' },
  { id: 6, title: 'Vehicle Support Matrix' },
  { id: 7, title: 'Dispatch Operations' },
  { id: 8, title: 'Enterprise Verticals' },
  { id: 9, title: 'Advanced Recovery & Contact' },
  { id: 10, title: 'Partnerships' }
];

export default function CapabilityReportPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to slide
  const scrollToSlide = (index: number) => {
    const element = document.getElementById(`slide-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setCurrentSlide(index);
    }
  };

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        if (currentSlide < slides.length - 1) {
          scrollToSlide(currentSlide + 1);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        if (currentSlide > 0) {
          scrollToSlide(currentSlide - 1);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  // Intersection Observer to sync dots on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const index = parseInt(id.replace('slide-', ''), 10);
          if (!isNaN(index)) {
            setCurrentSlide(index);
          }
        }
      });
    }, observerOptions);

    slides.forEach((_, idx) => {
      const el = document.getElementById(`slide-${idx}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#080d1a] text-white min-h-screen selection:bg-brand-blue/30 overflow-hidden font-sans relative">
      {/* Global Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[1200px] h-[600px] bg-[#2F80FF]/10 blur-[130px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-1/4 right-0 w-[900px] h-[700px] bg-cyan-500/5 blur-[150px] rounded-full mix-blend-screen" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #2F80FF 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
        {/* Holographic grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Shared Navbar */}
      <Navbar />

      {/* Presentation Deck Container */}
      <div
        ref={scrollContainerRef}
        className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth relative z-10"
      >
        {/* ==================================================
            SLIDE 1: COVER PAGE (REDESIGNED HERO SECTION)
            ================================================== */}
        <section
          id="slide-0"
          className="min-h-[100dvh] h-auto lg:h-screen w-full snap-start relative overflow-hidden flex flex-col justify-between p-8 md:p-12 pt-28 pb-6"
        >
          {/* Background image identical layout */}
          <div className="absolute inset-0 z-0">
            <img
              src="/nighttime_highway_infra.png"
              alt="Nighttime Highway Infrastructure"
              className="w-full h-full object-cover opacity-60"
            />
            {/* Dark gradient mapping to visual overlay in mock design */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/90 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712]/60" />
          </div>

          {/* Top Row Headers */}
          <div className="relative z-10 flex justify-between items-center w-full">
            <span className="text-[clamp(12px,1.2vw,14px)] font-mono font-bold tracking-[0.25em] text-slate-500 uppercase">
              OPERATIONAL INTELLIGENCE PLATFORM
            </span>
            <span className="text-[clamp(12px,1.2vw,14px)] font-mono font-bold tracking-[0.25em] text-cyan-400 uppercase">
              CONNECTED. INTELLIGENT. ALWAYS ON.
            </span>
          </div>

          {/* Main Content Area */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-[1680px] mx-auto my-auto items-center">
            {/* Left Column: Brand Details & Description (takes full left span) */}
            <div className="lg:col-span-8 flex flex-col space-y-6 pr-4">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white select-none">
                Nationwide
                <span className="text-cyan-400 font-bold">RoadsideAssist</span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-slate-200 font-semibold tracking-wide leading-tight max-w-2xl">
                Global Roadside Infrastructure &<br />
                Enterprise Mobility Operations Platform
              </p>

              {/* Glowing Pill Button Badge */}
              <div className="w-fit px-5 py-2.5 rounded-lg border border-[#2F80FF]/40 bg-slate-900/60 text-xs font-mono font-bold tracking-[0.2em] text-cyan-400 uppercase shadow-[0_0_20px_rgba(47,128,255,0.25)]">
                POWERING ENTERPRISE ROADSIDE OPERATIONS AT SCALE
              </div>

              {/* 4 Pillars Grid layout */}
              <div className="grid grid-cols-2 md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-white/10">
                <div className="space-y-2">
                  <div className="text-xs md:text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider leading-normal">
                    AI-POWERED<br />DISPATCH INTELLIGENCE
                  </div>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                    Real-time event detection, intelligent routing, and predictive coordination at scale.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-xs md:text-sm font-mono font-bold text-[#2F80FF] uppercase tracking-wider leading-normal">
                    NATIONWIDE<br />INFRASTRUCTURE
                  </div>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                    Enterprise-grade roadside coverage across USA and Canada with integrated provider ecosystems.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-xs md:text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider leading-normal">
                    REAL-TIME<br />VISIBILITY
                  </div>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                    End-to-end operational visibility across assets, events, and mobility environments.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-xs md:text-sm font-mono font-bold text-[#2F80FF] uppercase tracking-wider leading-normal">
                    ENTERPRISE<br />MOBILITY ECOSYSTEM
                  </div>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                    Built for fleets, insurers, OEMs, mobility providers, and transportation enterprises.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Empty space to let background highway light paths show through */}
            <div className="lg:col-span-4 hidden lg:block" />
          </div>

          {/* Bottom Footer Row */}
          <div className="relative z-10 flex justify-between items-center w-full mt-4 border-t border-white/5 pt-4">
            <span className="text-[clamp(10px,0.9vw,12px)] font-mono font-bold tracking-[0.25em] text-slate-500 uppercase">
              ENTERPRISE-GRADE  |  AI-POWERED  |  NATIONWIDE  |  ALWAYS ON
            </span>
          </div>
        </section>

        {/* ==================================================
            SLIDE 2: COMPANY OVERVIEW ("Who We Are")
            ================================================== */}
        <section
          id="slide-1"
          className="min-h-[100dvh] h-auto lg:h-screen w-full snap-start flex items-center relative overflow-hidden px-8 md:px-16 pt-20 pb-4"
        >
          <div className="w-full max-w-[1680px] mx-auto flex flex-col justify-between h-[86vh] space-y-4">
            {/* Top Row: Title, Subtitle, Stats (Full Width) */}
            <div className="flex flex-col space-y-3">
              <div>
                <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight uppercase">Who We Are</h2>
                <p className="text-sm md:text-base text-slate-300 leading-relaxed mt-2 max-w-4xl">
                  NationwideRoadsideAssist is a <span className="text-cyan-400 font-semibold">global enterprise mobility infrastructure platform</span> built to power the future of roadside coordination, dispatch intelligence, and operational continuity.
                </p>
              </div>

              {/* Key Stats Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t border-b border-white/10 py-3 mt-2 max-w-5xl">
                <div className="border-r border-white/10 pr-4">
                  <div className="text-2xl md:text-3xl font-extrabold text-[#2F80FF] tracking-tight">3000+</div>
                  <div className="text-[clamp(12px,1.2vw,14px)] md:text-xs font-mono text-slate-400 uppercase tracking-wider leading-none mt-0.5">PROVIDERS<br/>NATIONWIDE</div>
                </div>
                <div className="border-r border-white/10 px-4">
                  <div className="text-2xl md:text-3xl font-extrabold text-cyan-400 tracking-tight">24/7</div>
                  <div className="text-[clamp(12px,1.2vw,14px)] md:text-xs font-mono text-slate-400 uppercase tracking-wider leading-none mt-0.5">DISPATCH<br/>OPERATIONS</div>
                </div>
                <div className="border-r border-white/10 px-4">
                  <div className="text-2xl md:text-3xl font-extrabold text-[#2F80FF] tracking-tight">2 REGIONS</div>
                  <div className="text-[clamp(12px,1.2vw,14px)] md:text-xs font-mono text-slate-400 uppercase tracking-wider leading-none mt-0.5">USA & CANADA<br/>COVERAGE</div>
                </div>
                <div className="border-r border-white/10 px-4">
                  <div className="text-2xl md:text-3xl font-extrabold text-cyan-400 tracking-tight">AI-POWERED</div>
                  <div className="text-[clamp(12px,1.2vw,14px)] md:text-xs font-mono text-slate-400 uppercase tracking-wider leading-none mt-0.5">DISPATCH<br/>INTELLIGENCE</div>
                </div>
                <div className="pl-4">
                  <div className="text-2xl md:text-3xl font-extrabold text-[#2F80FF] tracking-tight">ENTERPRISE</div>
                  <div className="text-[clamp(12px,1.2vw,14px)] md:text-xs font-mono text-slate-400 uppercase tracking-wider leading-none mt-0.5">SCALE<br/>INFRASTRUCTURE</div>
                </div>
              </div>
            </div>

            {/* Middle Row: 4 Larger Highlight Cards */}
            <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Card 1: OUR VISION */}
              <div className="bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-xl p-5 flex flex-col justify-between hover:border-orange-500/40 hover:bg-slate-900/50 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
                <div>
                  <span className="text-sm font-mono font-bold text-orange-400 tracking-widest uppercase">OUR VISION</span>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                    Building the operational infrastructure layer powering the future of enterprise roadside coordination and mobility continuity.
                  </p>
                </div>
                <div className="mt-4 h-28 md:h-36 w-full overflow-hidden rounded-lg relative group">
                  <img src="/nighttime_highway_infra.png" alt="Highway trails" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                </div>
              </div>

              {/* Card 2: OUR MISSION */}
              <div className="bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-xl p-5 flex flex-col justify-between hover:border-cyan-400/40 hover:bg-slate-900/50 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
                <div>
                  <span className="text-sm font-mono font-bold text-cyan-400 tracking-widest uppercase">OUR MISSION</span>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                    Deliver intelligent, real-time, and scalable roadside operations through centralized coordination, advanced dispatch systems, and nationwide infrastructure.
                  </p>
                </div>
                <div className="mt-4 h-28 md:h-36 w-full overflow-hidden rounded-lg relative group">
                  <img src="/ops_command_center.png" alt="Command center" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                </div>
              </div>

              {/* Card 3: ENTERPRISE POSITIONING */}
              <div className="bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-xl p-5 flex flex-col justify-between hover:border-[#2F80FF]/40 hover:bg-slate-900/50 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
                <div>
                  <span className="text-sm font-mono font-bold text-[#2F80FF] tracking-widest uppercase">ENTERPRISE POSITIONING</span>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                    We serve as the operational backbone for mobility providers, fleets, insurers, OEMs, and enterprise organizations requiring roadside support ecosystems.
                  </p>
                </div>
                <div className="mt-4 h-28 md:h-36 w-full overflow-hidden rounded-lg relative bg-slate-950 flex items-center justify-center group">
                  <img src="/fleet_management_dashboard_3d_1778816662797.png" alt="Network nodes" className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                </div>
              </div>

              {/* Card 4: INFRASTRUCTURE FOCUS */}
              <div className="bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-xl p-5 flex flex-col justify-between hover:border-orange-500/40 hover:bg-slate-900/50 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
                <div>
                  <span className="text-sm font-mono font-bold text-orange-400 tracking-widest uppercase">ROADSIDE INFRASTRUCTURE FOCUS</span>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                    Our platform unifies people, processes, technology, and nationwide providers into one intelligent infrastructure built for enterprise mobility operations.
                  </p>
                </div>
                <div className="mt-4 h-28 md:h-36 w-full overflow-hidden rounded-lg relative bg-slate-950 flex items-center justify-center group">
                  <img src="/rollback_truck_cinematic_hero_1778782614539.png" alt="Infrastructure sunset" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                </div>
              </div>
            </div>

            {/* Bottom Row: 4 Larger Circular Telemetry feature items */}
            <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Nationwide RSA Coverage */}
              <div className="bg-slate-900/30 backdrop-blur-sm border border-white/5 rounded-xl p-4 flex items-center gap-4 shadow-md">
                <div className="h-14 w-14 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0 shadow-[0_0_16px_rgba(47,128,255,0.25)]">
                  <svg className="w-8 h-8 text-[#2F80FF]" viewBox="0 0 100 100" fill="none">
                    <path d="M20,50 L40,30 L60,35 L80,20 L75,70 L40,80 Z" fill="none" stroke="currentColor" strokeWidth="5" strokeDasharray="3 3" />
                    <circle cx="40" cy="30" r="5" fill="#2F80FF" />
                    <circle cx="60" cy="35" r="5" fill="#2F80FF" />
                    <circle cx="80" cy="20" r="5" fill="#2F80FF" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">USA & CANADA RSA COVERAGE</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mt-0.5">Complete coverage across USA and Canada with real-time roadside coordination.</p>
                </div>
              </div>

              {/* 24/7 Dispatch Operations */}
              <div className="bg-slate-900/30 backdrop-blur-sm border border-white/5 rounded-xl p-4 flex items-center gap-4 shadow-md">
                <div className="h-14 w-14 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0 shadow-[0_0_16px_rgba(34,211,238,0.25)] relative">
                  <span className="text-sm font-mono font-bold text-cyan-400">24/7</span>
                  <div className="absolute inset-0.5 rounded-full border border-cyan-500/20 border-t-cyan-400 animate-spin" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">24/7 DISPATCH OPERATIONS</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mt-0.5">Round-the-clock dispatch support for commercial enterprise mobility operations.</p>
                </div>
              </div>

              {/* Enterprise Coordination Systems */}
              <div className="bg-slate-900/30 backdrop-blur-sm border border-white/5 rounded-xl p-4 flex items-center gap-4 shadow-md">
                <div className="h-14 w-14 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0 shadow-[0_0_16px_rgba(47,128,255,0.25)]">
                  <svg className="w-8 h-8 text-[#2F80FF] animate-pulse" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="4" />
                    <line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" strokeWidth="3" />
                    <line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="3" />
                    <circle cx="50" cy="50" r="8" fill="#2F80FF" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">ENTERPRISE COORDINATION</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mt-0.5">Advanced coordination platforms connecting fleets, dispatchers, and field teams.</p>
                </div>
              </div>

              {/* Mobility Operations Ecosystem */}
              <div className="bg-slate-900/30 backdrop-blur-sm border border-white/5 rounded-xl p-4 flex items-center gap-4 shadow-md">
                <div className="h-14 w-14 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0 shadow-[0_0_16px_rgba(34,211,238,0.25)]">
                  <svg className="w-8 h-8 text-cyan-400" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="3" strokeDasharray="3 3" />
                    <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="4" />
                    <circle cx="50" cy="50" r="8" fill="#22d3ee" />
                    <path d="M50,10 L50,50 L80,50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">MOBILITY OPERATIONS</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mt-0.5">A unified ecosystem powering modern enterprise fleet systems through telemetry data.</p>
                </div>
              </div>
            </div>


          </div>
        </section>

        {/* ==================================================
            SLIDE 3: WHY THE INDUSTRY NEEDS US
            ================================================== */}
        <section
          id="slide-2"
          className="min-h-[100dvh] h-auto lg:h-screen w-full snap-start relative overflow-hidden flex flex-col bg-[#030912]"
          style={{backgroundImage:'radial-gradient(ellipse at 20% 50%, rgba(239,68,68,0.05) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(47,128,255,0.05) 0%, transparent 50%)'}}
        >
          {/* Navbar shim */}
          <div className="shrink-0 h-[64px]"/>

          {/* 3-COLUMN GRID */}
          <div className="flex-1 grid grid-cols-[260px_1fr_1fr] min-h-0">

            {/* COL 1: HERO TITLE */}
            <div className="relative overflow-hidden flex flex-col justify-end p-6 pb-8">
              <img src="/nighttime_highway_infra.png" alt="bg" className="absolute inset-0 w-full h-full object-cover opacity-35"/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#030912] via-[#030912]/70 to-[#030912]/20"/>
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-1/3 left-1/2 w-3 h-3 rounded-full bg-red-500 shadow-[0_0_30px_8px_rgba(239,68,68,0.7)] animate-pulse"/>
                <div className="absolute bottom-1/2 left-1/3 w-2 h-2 rounded-full bg-red-400 shadow-[0_0_20px_6px_rgba(239,68,68,0.5)]"/>
                <div className="absolute top-1/3 left-2/3 w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_14px_4px_rgba(239,68,68,0.4)]"/>
              </div>
              <div className="relative z-10">
                <div className="text-xs font-black text-red-500 uppercase tracking-[0.3em] mb-2">Enterprise Intelligence</div>
                <h2 className="text-4xl font-black text-white leading-none uppercase tracking-tight">
                  WHY THE<br/>INDUSTRY<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">NEEDS US</span>
                </h2>
                <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-transparent mt-3 mb-3"/>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Modern Mobility Ecosystems Require Intelligent Roadside Infrastructure & Centralized Operational Coordination.
                </p>
              </div>
            </div>

            {/* COL 2: PROBLEMS */}
            <div className="flex flex-col border-l border-white/5 bg-[#07101d]">
              <div className="shrink-0 bg-gradient-to-r from-red-700 to-red-600 px-4 py-3 flex items-center gap-2">
                <AlertTriangle size={14} className="text-red-200 shrink-0"/>
                <span className="text-[clamp(12px,1.2vw,14px)] font-black text-white tracking-widest uppercase">Fragmented Roadside Operations — Enterprise Mobility Challenges</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-2 flex-1 gap-x-3 gap-y-8 p-3 pt-8 bg-[#07101d]">
                {[
                  { icon: <Network size={24}/>, title: "Disconnected Vendor Networks", desc: "Limited coordination visibility creates inconsistent service and fragmented workflows.", color: "from-red-600 to-rose-700" },
                  { icon: <Zap size={24}/>, title: "Delayed Response Coordination", desc: "Manual dispatch systems slow response times and increase operational downtime.", color: "from-orange-600 to-red-600" },
                  { icon: <Globe size={24}/>, title: "No Real-Time Visibility", desc: "No centralized tracking, live intelligence, or coordination transparency.", color: "from-red-600 to-red-800" },
                  { icon: <FileText size={24}/>, title: "Manual Dispatch Workflows", desc: "Phone-based processes create inefficiencies and limit scalability.", color: "from-rose-600 to-red-700" },
                  { icon: <Truck size={24}/>, title: "Fleet Downtime & Interruptions", desc: "Uncoordinated events increase downtime and negatively impact customer experience.", color: "from-red-700 to-orange-600" },
                  { icon: <AlertTriangle size={24}/>, title: "Poor Escalation Handling", desc: "Critical incidents lack intelligent escalation, oversight, and coordinated recovery.", color: "from-red-600 to-rose-800" },
                  { icon: <Settings size={24}/>, title: "Inconsistent Service Quality", desc: "Dispersed ecosystems create inconsistent roadside service experiences.", color: "from-orange-700 to-red-600" },
                  { icon: <BarChart3 size={24}/>, title: "Scaling Challenges", desc: "Hard to maintain consistency across nationwide and cross-border networks.", color: "from-red-600 to-red-800" },
                ].map((item, i) => (
                  <div key={i} className="relative bg-[#0e1a2e] border border-red-500/25 rounded-xl pt-8 px-3 pb-3 flex flex-col gap-2 hover:bg-red-500/10 hover:border-red-500/50 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)] group">
                    <div className={`absolute -top-6 left-3 w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-[0_6px_16px_rgba(239,68,68,0.5)] border border-white/15 group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <div className="text-sm font-black text-white uppercase tracking-wide leading-tight">{item.title}</div>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* COL 3: SOLUTIONS */}
            <div className="flex flex-col border-l border-white/5 bg-[#060c1a]">
              <div className="shrink-0 bg-gradient-to-r from-[#1a5fd6] to-[#2F80FF] px-4 py-3 flex items-center gap-2">
                <CheckCircle2 size={14} className="text-blue-200 shrink-0"/>
                <span className="text-[clamp(12px,1.2vw,14px)] font-black text-white tracking-widest uppercase">Centralized Roadside Infrastructure — Enterprise Mobility Operations</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-2 flex-1 gap-x-3 gap-y-8 p-3 pt-8 bg-[#060c1a]">
                {[
                  { icon: <Database size={24}/>, title: "Centralized RSA Operations", desc: "Centralized RSA operations enabling enterprise-scale dispatch and nationwide oversight.", color: "from-[#1a5fd6] to-[#2F80FF]" },
                  { icon: <Globe size={24}/>, title: "Nationwide Vendor Ecosystem", desc: "3000+ vendors across USA and Canada.", color: "from-cyan-600 to-blue-600" },
                  { icon: <Activity size={24}/>, title: "Real-Time Operational Visibility", desc: "Live dispatch monitoring, GPS coordination, telemetry, and incident tracking.", color: "from-[#2F80FF] to-cyan-500" },
                  { icon: <CheckCircle2 size={24}/>, title: "SLA-Focused Workflows", desc: "Enterprise-grade response systems supporting operational continuity.", color: "from-blue-600 to-[#2F80FF]" },
                  { icon: <Shield size={24}/>, title: "Escalation Management", desc: "Centralized oversight for high-priority incidents and complex roadside workflows.", color: "from-indigo-600 to-blue-600" },
                  { icon: <Truck size={24}/>, title: "Fleet Mobility Support", desc: "Operational support for fleets, RVs, logistics and mobility ecosystems.", color: "from-[#2F80FF] to-indigo-600" },
                  { icon: <Headphones size={24}/>, title: "24/7 Dispatch Operations", desc: "Continuous operational support managing roadside coordination across regions.", color: "from-cyan-600 to-[#2F80FF]" },
                  { icon: <Layers size={24}/>, title: "Class 1-8 & Heavy-Duty Recovery", desc: "End-to-end support for all vehicle classes and complex recovery scenarios.", color: "from-blue-700 to-[#2F80FF]" },
                ].map((card, i) => (
                  <div key={i} className="relative bg-[#0a1628] border border-[#2F80FF]/25 rounded-xl pt-8 px-3 pb-3 flex flex-col gap-2 hover:bg-[#2F80FF]/10 hover:border-[#2F80FF]/55 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)] group">
                    <div className={`absolute -top-6 left-3 w-12 h-12 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center text-white shadow-[0_6px_16px_rgba(47,128,255,0.5)] border border-white/15 group-hover:scale-110 transition-transform`}>
                      {card.icon}
                    </div>
                    <div className="text-sm font-black text-white uppercase tracking-wide leading-tight">{card.title}</div>
                    <p className="text-xs text-slate-400 leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FOOTER: 6 STAT CARDS with skeuomorphic square icons */}
          <div className="shrink-0 grid grid-cols-6 gap-4 px-4 pb-4 mt-7 bg-[#020810] border-t border-white/10 overflow-visible">
            {[
              { val: "3000+", label: "VENDORS", sub: "USA & Canada Network", icon: <Users size={24}/>, grad: "from-blue-600 to-[#2F80FF]" },
              { val: "NATIONWIDE", label: "RSA COVERAGE", sub: "All 50 US States", icon: <Map size={24}/>, grad: "from-cyan-600 to-blue-500" },
              { val: "24/7", label: "DISPATCH OPERATIONS", sub: "Round-the-Clock Support", icon: <Clock size={24}/>, grad: "from-[#2F80FF] to-indigo-600" },
              { val: "2 REGIONS", label: "AREAS SERVED", sub: "USA · Canada Network", icon: <Globe size={24}/>, grad: "from-blue-600 to-cyan-500" },
              { val: "CLASS 1–8", label: "VEHICLE SUPPORT", sub: "All Vehicle Categories", icon: <Truck size={24}/>, grad: "from-indigo-600 to-blue-500" },
              { val: "HEAVY-DUTY", label: "RECOVERY CAPABILITY", sub: "Complex Roadside Events", icon: <Wrench size={24}/>, grad: "from-[#2F80FF] to-blue-700" },
            ].map((stat, i) => (
              <div key={i} className="relative bg-[#081020] border border-[#2F80FF]/20 rounded-xl px-4 pt-10 pb-4 flex flex-col hover:bg-[#2F80FF]/10 hover:border-[#2F80FF]/50 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.7)] group overflow-visible">
                <div className={`absolute -top-6 left-4 w-12 h-12 rounded-lg bg-gradient-to-br ${stat.grad} flex items-center justify-center text-white shadow-[0_6px_20px_rgba(47,128,255,0.55)] border border-white/20 group-hover:scale-110 transition-transform z-10`}>
                  {stat.icon}
                </div>
                <div className="text-2xl font-black text-[#2F80FF] leading-none tracking-tight">{stat.val}</div>
                <div className="text-sm font-bold text-white uppercase tracking-wider leading-tight mt-1">{stat.label}</div>
                <div className="text-xs text-slate-500 leading-none mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>

          {/* ── FOOTER ── */}
          <div className="shrink-0 border-t border-white/5 bg-[#020810] px-5 py-1.5 flex items-center justify-between relative z-20">
            <div className="flex items-center gap-3">
              <Globe size={11} className="text-[#2F80FF]"/>
              <span className="text-[clamp(10px,0.9vw,12px)] font-bold text-[#2F80FF] uppercase tracking-widest">Areas Served</span>
              {["USA","CANADA"].map((c,i)=>(
                <span key={i} className="text-[clamp(10px,0.9vw,12px)] text-slate-400 font-mono">{c}{i<1&&<span className="text-slate-600 mx-1">|</span>}</span>
              ))}
            </div>
            <div className="flex items-center gap-5 text-[clamp(10px,0.9vw,12px)] font-mono text-slate-500">
              <span className="flex items-center gap-1"><Phone size={9}/> +1 (855) 613-3131</span>
              <span className="flex items-center gap-1"><Mail size={9}/> partnerships@nationwideroadsideassist.com</span>
              <span className="flex items-center gap-1"><MapPin size={9}/> 11727 East End Avenue, Chino, CA 91710</span>
              <span className="flex items-center gap-1"><Globe size={9}/> www.nationwideroadsideassist.com</span>
            </div>
          </div>
        </section>

        {/* ==================================================
            SLIDE 4: CONNECTED ROADSIDE INFRASTRUCTURE
            ================================================== */}
        <section
          id="slide-3"
          className="min-h-[100dvh] h-auto lg:h-screen w-full snap-start relative overflow-hidden flex flex-col bg-[#020811]"
          style={{backgroundImage:'radial-gradient(ellipse at 50% 30%, rgba(47,128,255,0.07) 0%, transparent 65%)'}}
        >
          {/* ── TOP HEADER ── */}
          <div className="shrink-0 flex items-end justify-between px-6 pt-[68px] pb-2 border-b border-white/5">
            <div>
              <h2 className="text-3xl font-black text-white leading-tight tracking-tight">Connected Roadside Infrastructure</h2>
              <p className="text-xs text-slate-400 mt-0.5">Enterprise roadside coordination across large-scale mobility ecosystems.</p>
            </div>
            <div className="text-right">
              <div className="text-base font-black text-white">Nationwide<span className="text-[#2F80FF]">RoadsideAssist</span></div>
              <div className="text-[clamp(12px,1.2vw,14px)] text-slate-500">Global Roadside Infrastructure & Enterprise Mobility Operations Platform</div>
            </div>
          </div>

          {/* ── MAIN BODY (2 columns) ── */}
          <div className="flex-1 grid grid-cols-[440px_1fr] min-h-0">

            {/* LEFT: Dispatch Coordination Architecture */}
            <div className="flex flex-col border-r border-white/5 bg-[#020610] p-4 gap-3 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#2F80FF]/10 to-transparent pointer-events-none" />
              <div className="text-[clamp(14px,1.5vw,18px)] font-black text-[#22d3ee] uppercase tracking-[0.15em] border-b border-white/10 pb-2.5 flex items-center gap-2 relative z-10">
                <Activity size={16} className="text-[#2F80FF]" />
                DISPATCH COORDINATION ARCHITECTURE
              </div>
              
              <div className="flex-1 flex flex-col justify-center gap-0.5 relative z-10">
                {[
                  { icon: <AlertTriangle size={14}/>, title: "ROADSIDE EVENT", desc: "Event triggered across fleet or customer network" },
                  { icon: <Headphones size={14}/>, title: "24/7 RSA INTAKE", desc: "Live intake and incident classification" },
                  { icon: <Cpu size={14}/>, title: "AI DISPATCH COORDINATION", desc: "AI-powered routing and provider optimization" },
                  { icon: <UserCheck size={14}/>, title: "NEAREST VENDOR ASSIGNMENT", desc: "Intelligent vendor matching based on location, skills, and capacity" },
                  { icon: <MapPin size={14}/>, title: "GPS TRACKING & MONITORING", desc: "Live tracking, ETA updates, and operational monitoring" },
                  { icon: <ShieldAlert size={14}/>, title: "ESCALATION MANAGEMENT", desc: "Priority handling for severe incidents and recovery coordination" },
                  { icon: <FileCheck size={14}/>, title: "SERVICE RESOLUTION & REPORTING", desc: "Resolution confirmation, reporting, and operational analytics" },
                ].map((item, i, arr) => (
                  <div key={i} className="relative flex flex-col group">
                    <div className="flex items-center gap-3">
                      {/* Left Box */}
                      <div className="relative w-[210px] h-[38px] bg-[#030a18] border border-[#2F80FF]/30 rounded-md flex items-center px-3 gap-2.5 z-10 shadow-[0_0_10px_rgba(47,128,255,0.05)] group-hover:border-[#2F80FF]/60 group-hover:bg-[#2F80FF]/10 transition-all shrink-0">
                        <div className="text-[#22d3ee] group-hover:scale-110 transition-transform">{item.icon}</div>
                        <div className="text-[9.5px] font-black text-white uppercase tracking-wider leading-none mt-0.5">{item.title}</div>
                      </div>
                      
                      {/* Horizontal Arrow */}
                      <div className="flex items-center shrink-0 w-6">
                        <div className="h-[1px] w-full bg-gradient-to-r from-[#2F80FF]/40 to-[#22d3ee]"></div>
                        <div className="w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[4px] border-l-[#22d3ee] -ml-[1px]"></div>
                      </div>

                      {/* Description Text */}
                      <div className="flex-1 text-[clamp(12px,1.2vw,14px)] text-slate-300 leading-snug group-hover:text-white transition-colors pr-2">
                        {item.desc}
                      </div>
                    </div>

                    {/* Vertical Arrow connecting boxes (only show if not last item) */}
                    {i !== arr.length - 1 && (
                      <div className="flex flex-col items-center w-[210px] my-1 relative">
                        <div className="w-[1px] h-[10px] bg-gradient-to-b from-[#2F80FF]/30 to-[#22d3ee]"></div>
                        <div className="w-0 h-0 border-l-[3.5px] border-l-transparent border-r-[3.5px] border-r-transparent border-t-[4px] border-t-[#22d3ee] -mt-[1px]"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CENTER: Vendor Coordination US Map */}
            <div className="flex flex-col min-h-0 bg-[#010408]">
              {/* Map Container */}
              <div className="flex-1 min-h-0 relative overflow-hidden">
              {/* Grid and Map background overlay */}
              <div className="absolute inset-0 bg-[url('/us-vendor-map.png')] bg-cover bg-center bg-no-repeat opacity-95 mix-blend-screen scale-105 transition-transform duration-[10000ms] hover:scale-110" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#020811] via-transparent to-[#020811]/60" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#020610] via-transparent to-[#020610]/40" />
              
              </div> {/* Close Map Container */}

            {/* ── LOWER SECTION ── */}
            <div className="shrink-0 flex flex-col border-t border-white/5">
            {/* Row 1: Regional Coverage Ecosystem */}
            <div className="grid grid-cols-1 min-h-0" style={{height:'340px'}}>
              {/* Regional Coverage Ecosystem */}
              <div className="flex flex-col h-full bg-[#020811]">
                <div className="px-4 py-1.5 bg-[#030c1d] border-b border-white/5 flex items-center justify-between shrink-0">
                  <span className="text-[clamp(10px,0.9vw,12px)] font-black text-white uppercase tracking-widest flex items-center gap-2">
                    <Globe size={11} className="text-[#2F80FF]" />
                    Regional Coverage Ecosystem — High-fidelity Hub Network
                  </span>
                </div>

                {/* Regional Hub Cards Grid */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 p-3 min-h-0">
                  {[
                    {
                      name: "United States",
                      desc: "Nationwide coverage across all 50 states with enterprise-grade dispatch infrastructure.",
                      image: "/map-us.png"
                    },
                    {
                      name: "Canada",
                      desc: "SLA-driven corridors connecting major transportation routes and key metropolitan zones.",
                      image: "/map-canada.png"
                    },
                    {
                      name: "USA East Coast",
                      desc: "High-density provider network covering the Eastern Seaboard and major logistics routes.",
                      image: "/map-us.png"
                    },
                    {
                      name: "USA West Coast",
                      desc: "Expansive dispatch network servicing Western states, remote corridors, and major ports.",
                      image: "/map-us.png"
                    },
                    {
                      name: "Canada Cross-Border",
                      desc: "SLA-driven border transit network connecting key US-Canada commercial corridors.",
                      image: "/map-canada.png"
                    },
                  ].map((r, i) => (
                    <div
                      key={i}
                      className="group relative bg-[#030914] border border-cyan-500/30 rounded-xl p-3 flex flex-col justify-between hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-300 overflow-hidden"
                    >
                      {/* Ambient light overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#2F80FF]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      {/* Map Image + Centered Overlay Title (Full Left-to-Right, No Background) */}
                      <div className="relative -mx-3 -mt-3 w-[calc(100%+1.5rem)] h-[155px] flex items-center justify-center pointer-events-none shrink-0 overflow-hidden">
                        {/* Title overlayed directly on the map */}
                        <h3 className="absolute top-2 left-0 right-0 text-center font-black text-cyan-400 uppercase tracking-widest text-[clamp(12px,1.2vw,14px)] z-20 drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)]">
                          {r.name}
                        </h3>

                        {/* Map Image spanning fully */}
                        <img 
                          src={r.image} 
                          alt={`${r.name} Map`} 
                          className="h-[135px] w-full object-contain opacity-95 group-hover:scale-105 transition-transform duration-300 relative z-10"
                          onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                      </div>

                      {/* Description, centered */}
                      <p className="text-[12.5px] text-slate-200 text-center leading-normal mb-3 px-1.5 min-h-[48px] flex items-center justify-center shrink-0 font-medium">
                        {r.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
                    {/* Row 2: Enterprise Metrics */}
            <div className="grid grid-cols-1 min-h-0 border-t border-white/10 bg-transparent">
              {/* Enterprise Operational Metrics */}
              <div className="flex flex-col border-r border-white/10 p-2.5">
                <div className="border border-white/10 rounded-xl bg-slate-950/20 backdrop-blur-md p-3 flex flex-col h-full shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
                  <div className="text-[clamp(12px,1.2vw,14px)] font-black text-[#22d3ee] uppercase tracking-[0.2em] mb-2 px-1">Enterprise Operational Metrics</div>
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-2.5">
                    {[
                      {
                        val: "3000+", l1: "VENDOR", l2: "ECOSYSTEM",
                        svg: (
                          <svg viewBox="0 0 100 50" className="w-full h-full opacity-85 group-hover:opacity-100 transition-opacity">
                            <circle cx="20" cy="20" r="1.5" fill="#2F80FF"/><circle cx="23" cy="16" r="1" fill="#22d3ee"/><circle cx="27" cy="22" r="1.5" fill="#2F80FF"/><circle cx="32" cy="14" r="1" fill="#2F80FF"/>
                            <circle cx="45" cy="12" r="1.5" fill="#22d3ee"/><circle cx="50" cy="17" r="1" fill="#2F80FF"/><circle cx="56" cy="10" r="1" fill="#2F80FF"/>
                            <circle cx="70" cy="20" r="1.5" fill="#22d3ee"/><circle cx="76" cy="25" r="1" fill="#2F80FF"/><circle cx="86" cy="35" r="1.5" fill="#22d3ee"/>
                            <circle cx="35" cy="36" r="1" fill="#2F80FF"/><circle cx="42" cy="42" r="1.5" fill="#22d3ee"/>
                            <path d="M23,16 Q34,10 45,12 T70,20" fill="none" stroke="#2F80FF" strokeWidth="0.5" strokeDasharray="1 1"/>
                            <path d="M45,12 Q60,25 86,35" fill="none" stroke="#2F80FF" strokeWidth="0.5" strokeDasharray="1 1"/>
                            <path d="M27,22 Q31,30 35,36 L42,42" fill="none" stroke="#2F80FF" strokeWidth="0.5" strokeDasharray="1 1"/>
                          </svg>
                        )
                      },
                      {
                        val: "24/7", l1: "DISPATCH", l2: "OPERATIONS",
                        svg: (
                          <svg viewBox="0 0 100 50" className="w-full h-full opacity-85 group-hover:opacity-100 transition-opacity">
                            <circle cx="50" cy="25" r="20" fill="none" stroke="#2F80FF" strokeWidth="0.5" strokeDasharray="2 2"/>
                            <circle cx="50" cy="25" r="12" fill="none" stroke="#2F80FF" strokeWidth="0.5"/>
                            <circle cx="50" cy="25" r="3" fill="#22d3ee"/>
                            <line x1="50" y1="0" x2="50" y2="50" stroke="#2F80FF" strokeWidth="0.5" opacity="0.6"/>
                            <line x1="20" y1="25" x2="80" y2="25" stroke="#2F80FF" strokeWidth="0.5" opacity="0.6"/>
                            <line x1="28" y1="3" x2="72" y2="47" stroke="#2F80FF" strokeWidth="0.5" opacity="0.6"/>
                            <line x1="28" y1="47" x2="72" y2="3" stroke="#2F80FF" strokeWidth="0.5" opacity="0.6"/>
                            <circle cx="60" cy="15" r="2" fill="#22d3ee" className="animate-pulse"/>
                            <circle cx="40" cy="35" r="2" fill="#22d3ee" className="animate-pulse"/>
                          </svg>
                        )
                      },
                      {
                        val: "NATIONWIDE", l1: "RSA", l2: "COVERAGE",
                        svg: (
                          <svg viewBox="0 0 100 50" className="w-full h-full opacity-85 group-hover:opacity-100 transition-opacity">
                            <path d="M15,15 Q30,10 50,15 L80,10 Q90,20 85,35 L70,45 Q50,40 30,45 L15,35 Z" fill="rgba(47,128,255,0.05)" stroke="#2F80FF" strokeWidth="0.8"/>
                            <circle cx="20" cy="20" r="1.5" fill="#22d3ee"/><circle cx="25" cy="28" r="1.5" fill="#2F80FF"/>
                            <circle cx="40" cy="18" r="1.5" fill="#2F80FF"/><circle cx="45" cy="35" r="1.5" fill="#22d3ee"/>
                            <circle cx="65" cy="20" r="1.5" fill="#22d3ee"/><circle cx="75" cy="25" r="1.5" fill="#2F80FF"/>
                            <circle cx="60" cy="35" r="1.5" fill="#2F80FF"/><circle cx="35" cy="40" r="1.5" fill="#22d3ee"/>
                            <circle cx="50" cy="25" r="2" fill="#22d3ee" className="animate-pulse shadow-[0_0_4px_#22d3ee]"/>
                          </svg>
                        )
                      },
                      {
                        val: "REAL-TIME", l1: "OPERATIONAL", l2: "VISIBILITY",
                        svg: (
                          <svg viewBox="0 0 100 50" className="w-full h-full opacity-85 group-hover:opacity-100 transition-opacity">
                            <line x1="10" y1="40" x2="90" y2="40" stroke="#2F80FF" strokeWidth="0.5" opacity="0.6"/>
                            <line x1="10" y1="10" x2="10" y2="40" stroke="#2F80FF" strokeWidth="0.5" opacity="0.6"/>
                            <path d="M10,40 M10,30 h80 M10,20 h80 M10,10 h80" stroke="#2F80FF" strokeWidth="0.3" strokeDasharray="1 2" opacity="0.4"/>
                            <polyline points="10,35 25,20 40,30 55,10 70,25 90,5" fill="none" stroke="#22d3ee" strokeWidth="1.2"/>
                            <circle cx="25" cy="20" r="2" fill="#2F80FF"/><circle cx="55" cy="10" r="2" fill="#2F80FF"/><circle cx="70" cy="25" r="2" fill="#2F80FF"/>
                            <path d="M10,35 L25,20 L40,30 L55,10 L70,25 L90,5 L90,40 L10,40 Z" fill="rgba(47,128,255,0.15)"/>
                          </svg>
                        )
                      },
                      {
                        val: "CLASS 1–8", l1: "VEHICLE", l2: "SUPPORT",
                        svg: (
                          <svg viewBox="0 0 100 50" className="w-full h-full opacity-85 group-hover:opacity-100 transition-opacity">
                            <path d="M18,15 h35 v18 h-35 z" fill="none" stroke="#2F80FF" strokeWidth="1"/>
                            <path d="M53,22 h12 l6,5 v6 h-18 z" fill="none" stroke="#2F80FF" strokeWidth="1"/>
                            <circle cx="28" cy="33" r="3.5" fill="#030a18" stroke="#22d3ee" strokeWidth="1"/>
                            <circle cx="45" cy="33" r="3.5" fill="#030a18" stroke="#22d3ee" strokeWidth="1"/>
                            <circle cx="65" cy="33" r="3.5" fill="#030a18" stroke="#22d3ee" strokeWidth="1"/>
                            <path d="M68,40 h15 l3,5 h-21 l3,-5 z" fill="none" stroke="#2F80FF" strokeWidth="0.8"/>
                            <path d="M71,37 h9 l2,3 h-13 z" fill="none" stroke="#2F80FF" strokeWidth="0.8"/>
                            <circle cx="71" cy="45" r="2.5" fill="#030a18" stroke="#22d3ee" strokeWidth="0.8"/>
                            <circle cx="80" cy="45" r="2.5" fill="#030a18" stroke="#22d3ee" strokeWidth="0.8"/>
                          </svg>
                        )
                      },
                      {
                        val: "HEAVY-DUTY", l1: "RECOVERY", l2: "CAPABILITIES",
                        svg: (
                          <svg viewBox="0 0 100 50" className="w-full h-full opacity-85 group-hover:opacity-100 transition-opacity">
                            <path d="M15,25 h45 v15 h-45 z" fill="none" stroke="#2F80FF" strokeWidth="1"/>
                            <path d="M60,20 h12 l5,8 v12 h-17 z" fill="none" stroke="#2F80FF" strokeWidth="1"/>
                            <line x1="40" y1="25" x2="15" y2="10" stroke="#22d3ee" strokeWidth="1.5"/>
                            <line x1="15" y1="10" x2="15" y2="25" stroke="#2F80FF" strokeWidth="1" strokeDasharray="1 1"/>
                            <circle cx="25" cy="40" r="4.5" fill="#030a18" stroke="#2F80FF" strokeWidth="1"/>
                            <circle cx="36" cy="40" r="4.5" fill="#030a18" stroke="#2F80FF" strokeWidth="1"/>
                            <circle cx="50" cy="40" r="4.5" fill="#030a18" stroke="#2F80FF" strokeWidth="1"/>
                            <circle cx="70" cy="40" r="4.5" fill="#030a18" stroke="#22d3ee" strokeWidth="1"/>
                          </svg>
                        )
                      },
                      {
                        val: "FLEET SUPPORT", l1: "MOBILITY", l2: "OPERATIONS",
                        svg: (
                          <svg viewBox="0 0 100 50" className="w-full h-full opacity-85 group-hover:opacity-100 transition-opacity">
                            {[15, 45, 75].map(x => (
                              <g key={x} className={x===45?"opacity-100":"opacity-50"}>
                                <path d={`M${x},25 h14 l3,5 h-20 l3,-5 z`} fill="none" stroke={x===45?"#22d3ee":"#2F80FF"} strokeWidth="0.8"/>
                                <path d={`M${x+3},22 h8 l2,3 h-12 z`} fill="none" stroke={x===45?"#22d3ee":"#2F80FF"} strokeWidth="0.8"/>
                                <circle cx={x+3} cy={30} r="2.5" fill="#030a18" stroke={x===45?"#2F80FF":"#22d3ee"} strokeWidth="0.8"/>
                                <circle cx={x+11} cy={30} r="2.5" fill="#030a18" stroke={x===45?"#2F80FF":"#22d3ee"} strokeWidth="0.8"/>
                              </g>
                            ))}
                          </svg>
                        )
                      },
                    ].map((m, i) => (
                      <div 
                        key={i} 
                        className="relative bg-slate-950/45 border border-white/5 hover:border-cyan-400/50 rounded-lg p-2.5 flex flex-col items-center justify-between text-center hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300 group backdrop-blur-sm animate-[fadeIn_0.5s_ease-out]"
                        style={{ animationDelay: `${i * 50}ms` }}
                      >
                        <div className="flex flex-col items-center w-full mt-1">
                          <div className="text-[clamp(16px,1.8vw,20px)] font-black text-[#22d3ee] leading-none mb-1.5 group-hover:scale-105 transition-transform duration-300">{m.val}</div>
                          <div className="text-[7.8px] text-slate-300 uppercase tracking-wider leading-normal font-bold">
                            {m.l1}<br/>{m.l2}
                          </div>
                        </div>
                        <div className="h-10 w-full mt-2 flex items-center justify-center relative">
                          {m.svg}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>            </div>
            </div>
          </div>

          {/* ── FOOTER ── */}
          <div className="shrink-0 border-t border-white/5 bg-[#020810] px-5 py-1.5 flex items-center justify-between relative z-20">
            <div className="flex items-center gap-3">
              <Globe size={11} className="text-[#2F80FF]"/>
              <span className="text-[clamp(10px,0.9vw,12px)] font-bold text-[#2F80FF] uppercase tracking-widest">Areas Served</span>
              {["USA","CANADA"].map((c,i)=>(
                <span key={i} className="text-[clamp(10px,0.9vw,12px)] text-slate-400 font-mono">{c}{i<1&&<span className="text-slate-600 mx-1">|</span>}</span>
              ))}
            </div>
            <div className="flex items-center gap-5 text-[clamp(10px,0.9vw,12px)] font-mono text-slate-500">
              <span className="flex items-center gap-1"><Phone size={9}/> +1-855-613-3131</span>
              <span className="flex items-center gap-1"><Mail size={9}/>partnerships@nationwideroadsideassist.com</span>
              <span className="flex items-center gap-1"><MapPin size={9}/> 11727 East End Avenue, Chino, CA 91710</span>
              <span className="flex items-center gap-1"><Globe size={9}/> www.nationwideroadsideassist.com</span>
            </div>
          </div>
        </section>

        {/* ==================================================
            SLIDE 5: PROVIDER ECOSYSTEM (Network Scale)
            ================================================== */}
        <section
          id="slide-4"
          className="min-h-[100dvh] h-auto lg:h-screen w-full snap-start flex flex-col justify-between bg-[#020811] px-6 pt-[68px] pb-1.5 relative overflow-hidden"
        >
          {/* Background & Overlays */}
          <div className="absolute inset-0 bg-[#020811] z-0" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 mix-blend-overlay z-0" />
          
          <div className="w-full flex-1 min-h-0 max-w-[1800px] mx-auto flex flex-col justify-between z-10 relative">
            
            {/* TOP ROW */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:h-[40%] h-auto mt-2">
              
              {/* Left Column: Title & Icons */}
              <div className="lg:col-span-4 flex flex-col justify-between p-4 bg-slate-900/30 rounded-2xl border border-white/5 shadow-lg backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0" />
                <div>
                  <h3 className="text-[clamp(14px,1.4vw,17px)] font-mono text-cyan-500 tracking-[0.2em] mb-4 uppercase">• Network Scale & Provider Ecosystem</h3>
                  <div className="flex items-baseline space-x-2">
                    <h2 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-cyan-300 tracking-tighter drop-shadow-[0_0_15px_rgba(56,189,248,0.5)] leading-none">
                      3000+
                    </h2>
                  </div>
                  <h3 className="text-3xl font-bold text-white tracking-wide mt-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                    Roadside Providers
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mt-4 w-11/12">
                    NationwideRoadsideAssist coordinates a large-scale roadside ecosystem powered by towing operators, recovery specialists, mobile repair vendors, heavy-duty recovery partners, and enterprise dispatch operations.
                  </p>
                </div>


              </div>

              {/* Right Column: Live Network Map Image */}
              <div className="lg:col-span-8 h-80 lg:h-full relative border border-white/5 rounded-2xl bg-slate-900/20 backdrop-blur-sm overflow-hidden shadow-lg">
                <img
                  src="/live-network-map.png"
                  alt="Live Network Overview - Nationwide Provider Density Map"
                  className="w-full h-full object-cover rounded-2xl"
                />
                {/* Bottom Row inside Map Area - Vehicle Classes */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between lg:justify-between items-center gap-6 overflow-x-auto lg:overflow-x-visible bg-slate-900/70 border border-white/10 rounded-xl p-3 px-6 backdrop-blur-md z-10 scrollbar-none whitespace-nowrap">
                  {[
                    { icon: Car, label: 'Passenger\nVehicles' },
                    { icon: Bus, label: 'RVs &\nMotorhomes' },
                    { icon: Truck, label: 'Commercial\nFleet' },
                    { icon: Truck, label: 'Medium Duty\nTrucks' },
                    { icon: Truck, label: 'Heavy Duty\nTrucks' },
                    { icon: BatteryCharging, label: 'Electric\nVehicles' },
                    { icon: Wrench, label: 'Specialized\nEquipment' },
                  ].map((v, i) => (
                    <div key={i} className="flex flex-col items-center text-center shrink-0">
                      <div className="w-14 h-14 rounded-md border border-slate-700 flex items-center justify-center mb-1.5 bg-slate-900/50">
                        <v.icon size={26} className="text-slate-400" />
                      </div>
                      <span className="text-[clamp(12px,1.1vw,14px)] text-slate-300 uppercase leading-[1.2] whitespace-pre-line font-medium">{v.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* BOTTOM ROW */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:h-[50%] h-auto mt-6">
              
              {/* Panel 1: Flowchart */}
              <div className="lg:col-span-4 border border-white/10 rounded-2xl bg-slate-900/30 backdrop-blur-sm p-4 relative overflow-hidden flex flex-col shadow-lg">
                <h4 className="text-[clamp(12px,1.1vw,14px)] font-mono text-slate-400 uppercase tracking-widest border-b border-white/10 pb-2 mb-3 shrink-0">Provider Network Architecture</h4>
                
                <div className="flex-grow grid grid-cols-2 gap-4 relative z-10 py-1">
                  {/* Left list - 5 items */}
                  <div className="w-full flex flex-col justify-between space-y-1">
                    {[
                      { title: 'ENTERPRISE MOBILITY PLATFORM', subtitle: 'Unified mobility intelligence & event ingestion' },
                      { title: '24/7 DISPATCH COORDINATION', subtitle: 'Always-on dispatch orchestration & routing' },
                      { title: 'INTELLIGENT VENDOR MATCHING', subtitle: 'AI-powered matching for optimal response' },
                      { title: 'TOW OPERATORS', subtitle: 'Nationwide towing & transport support' },
                      { title: 'RECOVERY SPECIALISTS', subtitle: 'Advanced recovery & extraction support' },
                    ].map((step, idx) => (
                      <div key={idx} className="flex items-start space-x-3 relative group">
                        <div className="w-1.5 h-1.5 shrink-0 rounded-full bg-[#2F80FF] mt-1.5 z-10 group-hover:bg-[#38bdf8] group-hover:shadow-[0_0_8px_rgba(56,189,248,0.8)] transition-all duration-300 shadow-[0_0_4px_rgba(47,128,255,0.6)]" />
                        <div>
                          <div className="text-[clamp(11px,1.0vw,13px)] font-bold text-white uppercase leading-tight group-hover:text-cyan-300 transition-colors">{step.title}</div>
                          <div className="text-[clamp(9.5px,0.85vw,11px)] text-slate-500 leading-tight mt-0.5">{step.subtitle}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Right list - 4 items */}
                  <div className="w-full flex flex-col justify-between space-y-1">
                    {[
                      { title: 'MOBILE REPAIR VENDORS', subtitle: 'On-site repair, diagnostics & maintenance' },
                      { title: 'HEAVY-DUTY RECOVERY TEAMS', subtitle: 'Class 6-8 recovery & equipment support' },
                      { title: 'FLEET SUPPORT COORDINATION', subtitle: 'Fleet-specific support & proactive coverage' },
                      { title: 'SERVICE RESOLUTION & REPORTING', subtitle: 'Resolution confirmation & analytics reporting' },
                    ].map((step, idx) => (
                      <div key={idx} className="flex items-start space-x-3 relative group">
                        <div className="w-1.5 h-1.5 shrink-0 rounded-full bg-[#2F80FF] mt-1.5 z-10 group-hover:bg-[#38bdf8] group-hover:shadow-[0_0_8px_rgba(56,189,248,0.8)] transition-all duration-300 shadow-[0_0_4px_rgba(47,128,255,0.6)]" />
                        <div>
                          <div className="text-[clamp(11px,1.0vw,13px)] font-bold text-white uppercase leading-tight group-hover:text-cyan-300 transition-colors">{step.title}</div>
                          <div className="text-[clamp(9.5px,0.85vw,11px)] text-slate-500 leading-tight mt-0.5">{step.subtitle}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
 
              {/* Panel 2: Operational Intelligence */}
              <div className="lg:col-span-8 border border-white/10 rounded-2xl bg-slate-900/30 backdrop-blur-sm p-4 relative overflow-hidden shadow-lg flex flex-col">
                <h4 className="text-[clamp(12px,1.1vw,14px)] font-mono text-slate-400 uppercase tracking-widest border-b border-white/10 pb-2 mb-3 shrink-0">Enterprise Operational Intelligence</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-grow content-center">
                  {/* Card 1 */}
                  <div className="border border-cyan-500/20 bg-blue-900/10 rounded-xl p-2.5 lg:p-3 flex items-center space-x-3 hover:border-cyan-400/50 transition-colors h-full">
                    <Users size={24} className="text-cyan-400 shrink-0 w-6 h-6 lg:w-7 lg:h-7" />
                    <div>
                      <div className="text-lg lg:text-xl font-bold text-white tracking-wide leading-none">3000+</div>
                      <div className="text-[clamp(11px,1.0vw,13px)] text-slate-400 leading-tight mt-1">Connected<br/>Roadside Providers</div>
                    </div>
                  </div>
                  {/* Card 2 */}
                  <div className="border border-white/10 bg-white/[0.02] rounded-xl p-2.5 lg:p-3 flex items-center space-x-3 hover:border-cyan-400/50 transition-colors h-full">
                    <Clock size={24} className="text-cyan-400 shrink-0 w-6 h-6 lg:w-7 lg:h-7" />
                    <div>
                      <div className="text-lg lg:text-xl font-bold text-white tracking-wide leading-none">24/7</div>
                      <div className="text-[clamp(11px,1.0vw,13px)] text-slate-400 leading-tight mt-1">Operations</div>
                    </div>
                  </div>
                  {/* Card 3 */}
                  <div className="border border-white/10 bg-white/[0.02] rounded-xl p-2.5 lg:p-3 flex items-center space-x-3 hover:border-cyan-400/50 transition-colors h-full">
                    <Globe size={24} className="text-cyan-400 shrink-0 w-6 h-6 lg:w-7 lg:h-7" />
                    <div>
                      <div className="text-lg lg:text-xl font-bold text-white tracking-wide uppercase leading-none">Nationwide</div>
                      <div className="text-[clamp(11px,1.0vw,13px)] text-slate-400 leading-tight mt-1">RSA Infrastructure<br/>Coverage</div>
                    </div>
                  </div>
                  {/* Card 4 */}
                  <div className="border border-white/10 bg-white/[0.02] rounded-xl p-2.5 lg:p-3 flex items-center space-x-3 hover:border-cyan-400/50 transition-colors h-full">
                    <Server size={24} className="text-cyan-400 shrink-0 w-6 h-6 lg:w-7 lg:h-7" />
                    <div>
                      <div className="text-lg lg:text-xl font-bold text-white tracking-wide uppercase leading-none">Enterprise</div>
                      <div className="text-[clamp(11px,1.0vw,13px)] text-slate-400 leading-tight mt-1">Escalation<br/>Coordination</div>
                    </div>
                  </div>
                  {/* Card 5 */}
                  <div className="border border-white/10 bg-white/[0.02] rounded-xl p-2.5 lg:p-3 flex items-center space-x-3 hover:border-cyan-400/50 transition-colors h-full">
                    <Truck size={24} className="text-cyan-400 shrink-0 w-6 h-6 lg:w-7 lg:h-7" />
                    <div>
                      <div className="text-lg lg:text-xl font-bold text-white tracking-wide uppercase leading-none">Fleet</div>
                      <div className="text-[clamp(11px,1.0vw,13px)] text-slate-400 leading-tight mt-1">Mobility<br/>Support</div>
                    </div>
                  </div>
                  {/* Card 6 */}
                  <div className="border border-white/10 bg-white/[0.02] rounded-xl p-2.5 lg:p-3 flex items-center space-x-3 hover:border-cyan-400/50 transition-colors h-full">
                    <Wrench size={24} className="text-cyan-400 shrink-0 w-6 h-6 lg:w-7 lg:h-7" />
                    <div>
                      <div className="text-lg lg:text-xl font-bold text-white tracking-wide uppercase leading-none">Heavy-Duty</div>
                      <div className="text-[clamp(11px,1.0vw,13px)] text-slate-400 leading-tight mt-1">Recovery<br/>Capabilities</div>
                    </div>
                  </div>
                  {/* Card 7 */}
                  <div className="border border-white/10 bg-white/[0.02] rounded-xl p-2.5 lg:p-3 flex items-center space-x-3 hover:border-cyan-400/50 transition-colors h-full">
                    <Eye size={24} className="text-cyan-400 shrink-0 w-6 h-6 lg:w-7 lg:h-7" />
                    <div>
                      <div className="text-lg lg:text-xl font-bold text-white tracking-wide uppercase leading-none">Real-Time</div>
                      <div className="text-[clamp(11px,1.0vw,13px)] text-slate-400 leading-tight mt-1">Operational<br/>Visibility</div>
                    </div>
                  </div>
                  {/* Card 8 */}
                  <div className="border border-white/10 bg-white/[0.02] rounded-xl p-2.5 lg:p-3 flex items-center space-x-3 hover:border-cyan-400/50 transition-colors h-full">
                    <MapPin size={24} className="text-cyan-400 shrink-0 w-6 h-6 lg:w-7 lg:h-7" />
                    <div>
                      <div className="text-lg lg:text-xl font-bold text-white tracking-wide uppercase leading-none">Multi-Region</div>
                      <div className="text-[clamp(11px,1.0vw,13px)] text-slate-400 leading-tight mt-1">Coordination</div>
                    </div>
                  </div>
                  {/* Card 9 */}
                  <div className="border border-white/10 bg-white/[0.02] rounded-xl p-2.5 lg:p-3 flex items-center space-x-3 hover:border-cyan-400/50 transition-colors h-full">
                    <Activity size={24} className="text-cyan-400 shrink-0 w-6 h-6 lg:w-7 lg:h-7" />
                    <div>
                      <div className="text-lg lg:text-xl font-bold text-white tracking-wide uppercase leading-none">AI-Driven</div>
                      <div className="text-[clamp(11px,1.0vw,13px)] text-slate-400 leading-tight mt-1">Predictive<br/>Analytics</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>



          </div>

          {/* ── FOOTER ── */}
          <div className="shrink-0 border-t border-white/5 bg-[#020810] px-5 py-1.5 flex items-center justify-between relative z-20">
            <div className="flex items-center gap-3">
              <Globe size={11} className="text-[#2F80FF]"/>
              <span className="text-[clamp(10px,0.9vw,12px)] font-bold text-[#2F80FF] uppercase tracking-widest">Areas Served</span>
              {["USA","CANADA"].map((c,i)=>(
                <span key={i} className="text-[clamp(10px,0.9vw,12px)] text-slate-400 font-mono">{c}{i<1&&<span className="text-slate-600 mx-1">|</span>}</span>
              ))}
            </div>
            <div className="flex items-center gap-5 text-[clamp(10px,0.9vw,12px)] font-mono text-slate-500">
              <span className="flex items-center gap-1"><Phone size={9}/> +1-855-613-3131</span>
              <span className="flex items-center gap-1"><Mail size={9}/> partnerships@nationwideroadsideassist.com</span>
              <span className="flex items-center gap-1"><MapPin size={9}/> 11727 East End Avenue, Chino, CA 91710</span>
              <span className="flex items-center gap-1"><Globe size={9}/> www.nationwideroadsideassist.com</span>
            </div>
          </div>
        </section>

        {/* ==================================================
            SLIDE 6: CORE ROADSIDE SERVICES
            ================================================== */}
        <section
          id="slide-5"
          className="min-h-[100dvh] h-auto lg:h-screen w-full snap-start flex flex-col justify-between bg-[#020811] px-6 pt-[68px] pb-1.5 relative overflow-hidden animate-[fadeIn_0.5s_ease-out]"
          style={{backgroundImage:'radial-gradient(ellipse at 50% 30%, rgba(47,128,255,0.06) 0%, transparent 65%)'}}
        >
          {/* ── UPPER HERO HEADER SECTION ── */}
          <div className="shrink-0 w-full h-[180px] relative rounded-xl border border-white/10 bg-slate-950/20 backdrop-blur-md overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex items-center justify-between">
            {/* Cinematic City Skyline Background Image */}
            <div 
              className="absolute inset-0 bg-[url('/rollback_truck_cinematic_hero_1778782614539.png')] bg-cover bg-center bg-no-repeat opacity-85 hover:scale-102 transition-transform duration-1000"
            />
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent z-10" />
            <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-slate-950/60 to-transparent z-10" />
            <div className="absolute inset-0 bg-cyan-500/[0.02] mix-blend-overlay z-10" />

            {/* Left Column: Title, Section & Description Info */}
            <div className="relative z-20 ml-6 my-3 p-6 rounded-xl bg-slate-950/40 backdrop-blur-md border border-white/10 max-w-[650px] flex flex-col justify-center shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
              <div className="text-[14px] font-black text-cyan-400 uppercase tracking-[0.25em] mb-1">
                CORE ROADSIDE SERVICES
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase leading-none mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Integrated RSA & Recovery Operations
              </h2>
              <p className="text-[14px] text-slate-200 leading-relaxed font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                <span className="text-[#2F80FF] font-bold">NationwideRoadsideAssist</span> delivers integrated roadside coordination and recovery operations through intelligent dispatch systems, nationwide provider ecosystems, and enterprise mobility support infrastructure.
              </p>
            </div>

            {/* Floating Drone Hover Overlay */}
            <div className="absolute top-2 right-[460px] z-20 flex flex-col items-center pointer-events-none select-none">
              <svg viewBox="0 0 100 50" className="w-14 h-8 text-cyan-400 animate-bounce duration-[4000ms]">
                {/* Arms & Rotors */}
                <line x1="20" y1="20" x2="80" y2="20" stroke="#22d3ee" strokeWidth="2.5" />
                <circle cx="20" cy="15" r="7" fill="none" stroke="#2F80FF" strokeWidth="1.5" className="animate-spin" />
                <circle cx="80" cy="15" r="7" fill="none" stroke="#2F80FF" strokeWidth="1.5" className="animate-spin" />
                {/* Body */}
                <rect x="35" y="16" width="30" height="12" rx="4" fill="#030914" stroke="#22d3ee" strokeWidth="1.5" />
                {/* Camera/Lens */}
                <circle cx="50" cy="28" r="4" fill="#22d3ee" className="animate-pulse" />
                {/* Glowing Beam */}
                <polygon points="50,28 35,48 65,48" fill="url(#drone-beam-gradient-s6)" opacity="0.25" />
                <defs>
                  <linearGradient id="drone-beam-gradient-s6" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Circular ETA Dial on far right */}
            <div className="absolute top-1/2 -translate-y-1/2 right-[380px] bg-slate-950/70 border border-[#22d3ee]/40 rounded-full h-[65px] w-[65px] flex flex-col items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.15)] backdrop-blur-md pointer-events-none text-center z-20">
              <span className="text-[6.5px] font-mono text-cyan-400 uppercase tracking-widest leading-none mb-0.5">ETA</span>
              <span className="text-lg font-black text-white leading-none drop-shadow-[0_0_5px_#22d3ee]">28</span>
              <span className="text-[6.5px] font-mono text-slate-400 uppercase tracking-widest leading-none mt-0.5">MIN</span>
            </div>

            {/* Nationwide logo in the top-right corner */}
            <div className="relative z-20 mr-6 my-3 p-4 rounded-xl bg-slate-950/40 backdrop-blur-md border border-white/10 flex flex-col items-end justify-center shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
              <div className="flex items-center text-[clamp(16px,1.8vw,20px)] md:text-[clamp(16px,1.8vw,20px)] font-black tracking-tight leading-none">
                <span className="text-[#2F80FF]">Nationwide</span>
                <span className="text-white">RoadsideAssist</span>
              </div>
              <div className="text-[7.5px] text-slate-300 uppercase tracking-widest leading-none mt-1.5 font-semibold">
                Enterprise Roadside Infrastructure & Mobility Operations Platform
              </div>
            </div>
          </div>

          {/* ── MIDDLE ROW: OPERATIONAL WORKFLOW INFRASTRUCTURE (Connected Flowchart Pipeline) ── */}
          <div className="shrink-0 flex flex-col border border-white/10 rounded-xl bg-slate-950/20 backdrop-blur-md p-3.5 h-[280px] min-h-0 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
            {/* Header */}
            <div className="flex items-center border-b border-white/10 pb-1.5 mb-2 px-1 shrink-0">
              <span className="text-[clamp(14px,1.4vw,16px)] font-black text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                <Activity size={14} className="text-[#2F80FF]" />
                OPERATIONAL WORKFLOW INFRASTRUCTURE
              </span>
            </div>

            {/* Connected Flowchart Row & Column Layout (Glassmorphic) */}
            <div className="flex-1 flex flex-col justify-center py-2 min-h-0 relative">
              {/* Background Connector Line */}
              <div className="absolute top-[40px] left-[6%] right-[6%] h-px bg-gradient-to-r from-transparent via-[#2F80FF]/30 to-transparent z-0 hidden lg:block" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 gap-4 px-2 lg:px-6 relative z-10">
                {[
                  { icon: <AlertTriangle size={20} />, title: "ROADSIDE INCIDENT", desc: "Event triggered across fleet or customer network", theme: "orange" },
                  { icon: <Headphones size={20} />, title: "24/7 RSA INTAKE", desc: "Live intake and incident classification", theme: "cyan" },
                  { icon: <Cpu size={20} />, title: "AI DISPATCH COORDINATION", desc: "AI-powered routing and provider optimization", theme: "cyan" },
                  { icon: <UserCheck size={20} />, title: "NEAREST VENDOR ASSIGNMENT", desc: "Intelligent vendor matching based on location & skills", theme: "cyan" },
                  { icon: <Navigation size={20} />, title: "SERVICE TYPE ROUTING", desc: "Service-specific workflow and resource routing", theme: "cyan" },
                  { icon: <MapPin size={20} />, title: "GPS TRACKING & MONITORING", desc: "Live tracking and operational monitoring", theme: "cyan" },
                  { icon: <ShieldAlert size={20} />, title: "ESCALATION MANAGEMENT", desc: "Priority handling for critical incidents and recovery", theme: "cyan" },
                  { icon: <FileCheck size={20} />, title: "RESOLUTION & REPORTING", desc: "Service completion, reporting, and operational closure", theme: "emerald" }
                ].map((step, idx) => {
                  const isOrange = step.theme === 'orange';
                  const isEmerald = step.theme === 'emerald';
                  const themeColor = isOrange ? '#F97316' : isEmerald ? '#10B981' : '#2F80FF';
                  const themeClass = isOrange ? 'text-orange-400 group-hover:text-orange-400' : isEmerald ? 'text-emerald-400 group-hover:text-emerald-400' : 'text-slate-400 group-hover:text-[#2F80FF]';
                  const shadowColor = isOrange ? 'rgba(249,115,22,0.3)' : isEmerald ? 'rgba(16,185,129,0.3)' : 'rgba(47,128,255,0.3)';
                  
                  return (
                    <div key={idx} className="flex flex-col items-center text-center group relative">
                      
                      {/* Connection Indicator (To next) */}
                      {idx < 7 && (
                        <div className="absolute top-[28px] left-[50%] w-full h-px bg-white/5 hidden lg:block overflow-hidden z-0">
                           <div 
                              className="h-full w-1/2 bg-gradient-to-r from-transparent to-transparent animate-[slideRight_2.5s_linear_infinite]"
                              style={{ backgroundImage: `linear-gradient(to right, transparent, ${themeColor}, transparent)`, animationDelay: `${idx * 0.4}s` }}
                           />
                        </div>
                      )}

                      {/* Glassmorphic Node */}
                      <div 
                        className="relative h-14 w-14 mb-4 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.4)] group-hover:-translate-y-1.5 transition-all duration-500 z-10"
                        
                      >
                        {/* Hover Styles applied via injected class or style */}
                        <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-transparent`} style={{ borderColor: themeColor, boxShadow: `0 0 20px ${shadowColor}` }} />
                        
                        <div className={`relative z-10 transition-colors duration-500 ${themeClass}`}>
                          {step.icon}
                        </div>
                        
                        {/* Step Number Badge */}
                        <div 
                          className="absolute -top-2 -right-2 h-5 w-5 rounded-md text-[9px] font-black flex items-center justify-center border shadow-lg"
                          style={{ backgroundColor: themeColor, borderColor: 'rgba(255,255,255,0.2)', color: '#fff', boxShadow: `0 4px 10px ${shadowColor}` }}
                        >
                           0{idx + 1}
                        </div>

                        {/* Inner Glow */}
                        <div 
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                          style={{ background: `radial-gradient(circle at center, ${themeColor}20 0%, transparent 70%)` }} 
                        />
                      </div>

                      {/* Active Telemetry Dot */}
                      <div 
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full animate-ping opacity-70"
                        style={{ backgroundColor: themeColor, animationDelay: `${idx * 0.3}s` }}
                      />

                      {/* Text Content */}
                      <div className="px-1 flex flex-col h-[90px]">
                        <h3 className={`text-[clamp(11px,1.0vw,13px)] font-black uppercase tracking-wider mb-1.5 transition-colors duration-300 leading-tight ${themeClass}`}>
                          {step.title}
                        </h3>
                        <p className="text-[clamp(10px,0.9vw,11px)] text-slate-400/80 font-medium leading-relaxed group-hover:text-slate-300 transition-colors line-clamp-3">
                          {step.desc}
                        </p>
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── BOTTOM ROW: CORE ROADSIDE SERVICE ECOSYSTEM ── */}
          <div className="shrink-0 flex flex-col border border-white/10 rounded-xl bg-slate-950/20 backdrop-blur-md p-3.5 h-[260px] overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5 mb-2 px-1">
              <span className="text-[clamp(14px,1.4vw,16px)] font-black text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                <Layers size={14} className="text-[#2F80FF]" />
                CORE ROADSIDE SERVICE ECOSYSTEM
              </span>
            </div>

            {/* Grid of 9 Cards */}
            <div className="flex-1 grid grid-cols-9 gap-2 min-h-0">
              {[
                {
                  title: "TOWING COORDINATION",
                  desc: "Intelligent towing dispatch for cars, RVs, fleets, and commercial transportation.",
                  icon: (
                    <svg viewBox="0 0 24 24" className="text-white h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 18H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h11M14 7h6l3 4v5a2 2 0 0 1-2 2h-2M10 21a2 2 0 1 1-4 0M18 21a2 2 0 1 1-4 0" />
                      <path d="M14 14l5-4h4" />
                    </svg>
                  )
                },
                {
                  title: "TIRE CHANGE SUPPORT",
                  desc: "Rapid tire assistance workflows minimizing downtime and supporting mobility continuity.",
                  icon: (
                    <svg viewBox="0 0 24 24" className="text-white h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="9"/>
                      <circle cx="12" cy="12" r="4"/>
                      <line x1="12" y1="3" x2="12" y2="8"/><line x1="12" y1="16" x2="12" y2="21"/>
                      <line x1="3" y1="12" x2="8" y2="12"/><line x1="16" y1="12" x2="21" y2="12"/>
                    </svg>
                  )
                },
                {
                  title: "FUEL DELIVERY",
                  desc: "Emergency fuel delivery integrated into real-time dispatch infrastructure.",
                  icon: (
                    <svg viewBox="0 0 24 24" className="text-white h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 22V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v20"/>
                      <path d="M15 6h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4"/>
                      <circle cx="9" cy="8" r="2"/>
                    </svg>
                  )
                },
                {
                  title: "LOCKOUT ASSISTANCE",
                  desc: "Roadside access services ensuring customer safety and operational efficiency.",
                  icon: (
                    <svg viewBox="0 0 24 24" className="text-white h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                  )
                },
                {
                  title: "JUMP START OPERATIONS",
                  desc: "Battery support and power coordination managed through centralized dispatch systems.",
                  icon: (
                    <svg viewBox="0 0 24 24" className="text-white h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="7" width="18" height="14" rx="2" ry="2"/>
                      <line x1="6" y1="11" x2="10" y2="11"/><line x1="8" y1="9" x2="8" y2="13"/>
                      <line x1="14" y1="11" x2="16" y2="11"/><path d="M20 11h2"/>
                    </svg>
                  )
                },
                {
                  title: "MOBILE REPAIR",
                  desc: "Connected mobile repair ecosystem for diagnostics, repairs, and field support.",
                  icon: <Wrench className="text-white" size={16} />
                },
                {
                  title: "WINCH-OUT & RECOVERY",
                  desc: "Advanced recovery for off-road, stuck, and difficult terrain extraction events.",
                  icon: (
                    <svg viewBox="0 0 24 24" className="text-white h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v10a4 4 0 0 0 8 0v-2"/>
                      <circle cx="12" cy="2" r="1"/>
                    </svg>
                  )
                },
                {
                  title: "RECOVERY OPERATIONS",
                  desc: "Accident recovery, vehicle extraction, and incident response coordination.",
                  icon: (
                    <svg viewBox="0 0 24 24" className="text-white h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      <line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                  )
                },
                {
                  title: "HEAVY-DUTY TOWING",
                  desc: "Heavy-duty roadside support for Class 6–8 commercial vehicles and logistics networks.",
                  icon: (
                    <svg viewBox="0 0 24 24" className="text-white h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="11" width="13" height="9"/>
                      <path d="M15 11h4l3 3v6h-7z"/>
                      <circle cx="6" cy="20" r="2"/><circle cx="18" cy="20" r="2"/>
                    </svg>
                  )
                }
              ].map((s, idx) => (
                <div
                  key={idx}
                  className="relative bg-slate-950/45 border border-white/5 hover:border-cyan-400/50 rounded-lg p-2 pt-3 flex flex-col justify-between hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300 group backdrop-blur-sm animate-[fadeIn_0.5s_ease-out]"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  {/* Floating Icon Header */}
                  <div className="w-6.5 h-6.5 rounded bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center border border-blue-400/30 mb-1.5 self-center shadow-[0_2px_6px_rgba(47,128,255,0.2)] group-hover:scale-105 transition-transform shrink-0">
                    {s.icon}
                  </div>

                  {/* Title */}
                  <h4 className="text-[clamp(12px,1.1vw,14px)] font-black text-white uppercase tracking-wider text-center line-clamp-2 leading-tight">
                    {s.title}
                  </h4>

                  {/* Description */}
                  <p className="text-[11px] text-slate-300 text-center leading-normal px-0.5 mt-1 line-clamp-4 flex-1 flex items-center justify-center font-medium">
                    {s.desc}
                  </p>

                  {/* Bottom Dispatch Active dot */}
                </div>
              ))}
            </div>
          </div>

          {/* ── FOOTER ── */}
          <div className="shrink-0 border-t border-white/5 bg-[#020810] px-5 py-1.5 flex items-center justify-between relative z-20">
            <div className="flex items-center gap-3">
              <Globe size={11} className="text-[#2F80FF]"/>
              <span className="text-[clamp(10px,0.9vw,12px)] font-bold text-[#2F80FF] uppercase tracking-widest">Areas Served</span>
              {["USA","CANADA"].map((c,i)=>(
                <span key={i} className="text-[clamp(10px,0.9vw,12px)] text-slate-400 font-mono">{c}{i<1&&<span className="text-slate-600 mx-1">|</span>}</span>
              ))}
            </div>
            <div className="flex items-center gap-5 text-[clamp(10px,0.9vw,12px)] font-mono text-slate-500">
              <span className="flex items-center gap-1"><Phone size={9}/> +1-855-613-3131</span>
              <span className="flex items-center gap-1"><Mail size={9}/> partnerships@nationwideroadsideassist.com</span>
              <span className="flex items-center gap-1"><MapPin size={9}/> 11727 East End Avenue, Chino, CA 91710</span>
              <span className="flex items-center gap-1"><Globe size={9}/> www.nationwideroadsideassist.com</span>
            </div>
          </div>
        </section>

        {/* ==================================================
            SLIDE 7: CLASS 1–8 VEHICLE SUPPORT
            ================================================== */}
        <section
          id="slide-6"
          className="min-h-[100dvh] h-auto lg:h-screen w-full snap-start flex flex-col justify-between bg-[#020811] px-6 pt-[68px] pb-1.5 relative overflow-hidden animate-[fadeIn_0.5s_ease-out]"
          style={{backgroundImage:'radial-gradient(ellipse at 50% 30%, rgba(47,128,255,0.06) 0%, transparent 65%)'}}
        >
          {/* ── UPPER HERO HEADER SECTION ── */}
          <div className="shrink-0 w-full h-[187px] relative rounded-xl border border-white/10 bg-slate-950/20 backdrop-blur-md overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex items-center justify-between">
            {/* Panoramic Vehicle Lineup Background Image */}
            <div 
              className="absolute inset-0 bg-[url('/vehicle_classes_new_lineup.png')] bg-cover bg-center bg-no-repeat opacity-85 hover:scale-102 transition-transform duration-[8000ms]"
            />
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent z-10" />
            <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-slate-950/60 to-transparent z-10" />
            <div className="absolute inset-0 bg-cyan-500/[0.02] mix-blend-overlay z-10" />

            {/* Left Column: Title, Section & Description Info */}
            <div className="relative z-20 ml-6 my-3 p-5 rounded-xl bg-slate-950/40 backdrop-blur-md border border-white/10 max-w-[620px] flex flex-col justify-center shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
              <div className="text-[13px] font-black text-cyan-400 uppercase tracking-[0.25em] mb-1">
                CLASS 1–8 VEHICLE SUPPORT
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight uppercase leading-none mb-1.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Enterprise Vehicle Coverage
              </h2>
              <p className="text-[14px] text-slate-200 leading-relaxed font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                <span className="text-[#2F80FF] font-bold">NationwideRoadsideAssist</span> delivers intelligent roadside coordination and recovery infrastructure across the full spectrum of vehicle classes through advanced dispatch systems, nationwide provider networks, and enterprise mobility operations.
              </p>
            </div>



            {/* Right Column: Platform logo and subtitle */}
            <div className="relative z-20 mr-6 my-3 p-4 rounded-xl bg-slate-950/40 backdrop-blur-md border border-white/10 flex flex-col items-end justify-center shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
              <div className="flex items-center text-[clamp(16px,1.8vw,20px)] md:text-[clamp(16px,1.8vw,20px)] font-black tracking-tight leading-none">
                <span className="text-[#2F80FF]">Nationwide</span>
                <span className="text-white">RoadsideAssist</span>
              </div>
              <div className="text-[7.5px] text-slate-300 uppercase tracking-widest leading-none mt-1.5 font-semibold">
                Global Roadside Infrastructure & Mobility Operations Platform
              </div>
            </div>
          </div>

          {/* ── MIDDLE ROW: FOUR-COLUMN VEHICLE CLASS CARDS GRID ── */}
          <div className="shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 h-[342px] min-h-0">
            {/* Card 1: Class 1-2 Vehicles */}
            <div className="relative bg-slate-950/80 border border-cyan-500/30 hover:border-cyan-400/60 rounded-2xl p-3 flex flex-col justify-between shadow-[inset_0_0_20px_rgba(6,182,212,0.03),_0_4px_24px_rgba(0,0,0,0.4)] hover:shadow-[inset_0_0_25px_rgba(6,182,212,0.1),_0_0_25px_rgba(6,182,212,0.25)] transition-all duration-300 backdrop-blur-md group overflow-hidden h-full">
              <div className="flex flex-col items-center shrink-0">
                <div className="text-center mb-1.5 flex flex-col items-center">
                  <h4 className="text-[9.5px] font-black text-cyan-400 uppercase tracking-wider leading-none mb-0.5 text-center">
                    CLASS 1-2 VEHICLES
                  </h4>
                  <span className="text-[clamp(8px,0.7vw,10px)] font-bold text-slate-300 uppercase tracking-wider leading-none text-center block">
                    CONSUMER MOBILITY SUPPORT
                  </span>
                </div>
                {/* 5 sub-badges in a divided flex row */}
                <div className="flex w-full border-b border-cyan-500/20 pb-1.5 mb-1.5 shrink-0">
                  {[
                    { label: "Sedans", svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.8C2.1 11.1 2 11.5 2 12v4c0 .6.4 1 1 1h2M7 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/></svg> },
                    { label: "SUVs", svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 18H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h11M14 7h6l3 4v5a2 2 0 0 1-2 2h-2M6 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/></svg> },
                    { label: "Crossovers", svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9M2 12v4c0 .6.4 1 1 1h2M7 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/></svg> },
                    { label: "Electric Vehicles", svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 18H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2M19 8h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2M10 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM13 10l-4 6h6l-4 6"/></svg> },
                    { label: "Consumer Mobility Platforms", svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8"/></svg> }
                  ].map((sub, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center justify-start text-center group/sub min-h-[36px] w-full border-r border-cyan-500/10 last:border-r-0 px-0.5">
                      <div className="w-7 h-7 rounded bg-cyan-950/30 flex items-center justify-center text-cyan-400 border border-cyan-500/10 group-hover/sub:bg-cyan-500/15 group-hover/sub:border-cyan-400/30 transition-all p-0.5 shrink-0">
                        {sub.svg}
                      </div>
                      <span className="text-[8px] font-bold text-slate-300 leading-[1.1] text-center max-w-[56px] block mt-0.5 transition-colors duration-300 group-hover/sub:text-cyan-300">
                        {sub.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Central Vehicle Image with Send-to-Back graphics */}
              <div className="relative flex-1 flex items-center justify-center my-0.5 pointer-events-none select-none min-h-0 w-full overflow-hidden rounded-xl bg-slate-950/20 border border-cyan-500/5 shadow-[inset_0_0_12px_rgba(6,182,212,0.1)]">
                {/* Send-to-Back Cyber Grid Background */}
                <div 
                  className="absolute inset-0 bg-[url('/luxury_car_new.png')] bg-cover bg-top opacity-20 mix-blend-screen pointer-events-none z-0 scale-110 transition-transform duration-[8000ms] group-hover:scale-115"
                  style={{ 
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0.1) 85%, rgba(0,0,0,0))', 
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0.1) 85%, rgba(0,0,0,0))' 
                  }}
                />
                <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent opacity-60 z-0 pointer-events-none" />
                <img 
                  src="/luxury_car_new.png" 
                  alt="Class 1-2 Luxury Sedan" 
                  className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-700 relative z-10 rounded-lg drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>

              {/* Description */}
              <p className="text-[clamp(10px,0.9vw,12px)] text-slate-300 text-center leading-normal px-1 mt-1 shrink-0 font-medium z-10 relative">
                Roadside coordination infrastructure supporting passenger vehicles and everyday mobility operations.
              </p>
            </div>

            {/* Card 2: Class 3-5 Vehicles */}
            <div className="relative bg-slate-950/80 border border-cyan-500/30 hover:border-cyan-400/60 rounded-2xl p-3 flex flex-col justify-between shadow-[inset_0_0_20px_rgba(6,182,212,0.03),_0_4px_24px_rgba(0,0,0,0.4)] hover:shadow-[inset_0_0_25px_rgba(6,182,212,0.1),_0_0_25px_rgba(6,182,212,0.25)] transition-all duration-300 backdrop-blur-md group overflow-hidden h-full">
              <div className="flex flex-col items-center shrink-0">
                <div className="text-center mb-1.5 flex flex-col items-center">
                  <h4 className="text-[9.5px] font-black text-cyan-400 uppercase tracking-wider leading-none mb-0.5 text-center">
                    CLASS 3-5 VEHICLES
                  </h4>
                  <span className="text-[clamp(8px,0.7vw,10px)] font-bold text-slate-300 uppercase tracking-wider leading-none text-center block">
                    RV & CAMPER SUPPORT
                  </span>
                </div>
                {/* 5 sub-badges in a divided flex row */}
                <div className="flex w-full border-b border-cyan-500/20 pb-1.5 mb-1.5 shrink-0">
                  {[
                    { label: "RV Roadside Support", svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="12" rx="2"/><circle cx="7" cy="20" r="2"/><circle cx="17" cy="20" r="2"/></svg> },
                    { label: "Camper Recovery", svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 17h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v8M18 17l4 3M6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/></svg> },
                    { label: "Rental Ecosystems", svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 22a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0 0V8M5 14h6M9 10l-4 4 4 4"/></svg> },
                    { label: "Tourism Transport", svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16v10H4zM6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2 9h2"/></svg> },
                    { label: "Long-Distance Support", svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22V2M3 5h18M3 19h18M5 21l3-18"/></svg> }
                  ].map((sub, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center justify-start text-center group/sub min-h-[36px] w-full border-r border-cyan-500/10 last:border-r-0 px-0.5">
                      <div className="w-7 h-7 rounded bg-cyan-950/30 flex items-center justify-center text-cyan-400 border border-cyan-500/10 group-hover/sub:bg-cyan-500/15 group-hover/sub:border-cyan-400/30 transition-all p-0.5 shrink-0">
                        {sub.svg}
                      </div>
                      <span className="text-[8px] font-bold text-slate-300 leading-[1.1] text-center max-w-[56px] block mt-0.5 transition-colors duration-300 group-hover/sub:text-cyan-300">
                        {sub.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Central Vehicle Image with Send-to-Back graphics */}
              <div className="relative flex-1 flex items-center justify-center my-0.5 pointer-events-none select-none min-h-0 w-full overflow-hidden rounded-xl bg-slate-950/20 border border-cyan-500/5 shadow-[inset_0_0_12px_rgba(6,182,212,0.1)]">
                {/* Send-to-Back Cyber Grid Background */}
                <div 
                  className="absolute inset-0 bg-[url('/luxury_car_new.png')] bg-cover bg-top opacity-20 mix-blend-screen pointer-events-none z-0 scale-110 transition-transform duration-[8000ms] group-hover:scale-115"
                  style={{ 
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0.1) 85%, rgba(0,0,0,0))', 
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0.1) 85%, rgba(0,0,0,0))' 
                  }}
                />
                <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent opacity-60 z-0 pointer-events-none" />
                <img 
                  src="/class_3_5_camper_new.jpg" 
                  alt="Class 3-5 Luxury Camper" 
                  className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-700 relative z-10 rounded-lg drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>

              {/* Description */}
              <p className="text-[clamp(10px,0.9vw,12px)] text-slate-300 text-center leading-normal px-1 mt-1 shrink-0 font-medium z-10 relative">
                Enterprise roadside coordination for RV fleets, camper vans, and travel mobility ecosystems.
              </p>
            </div>

            {/* Card 3: Class 4-6 Vehicles */}
            <div className="relative bg-slate-950/80 border border-cyan-500/30 hover:border-cyan-400/60 rounded-2xl p-3 flex flex-col justify-between shadow-[inset_0_0_20px_rgba(6,182,212,0.03),_0_4px_24px_rgba(0,0,0,0.4)] hover:shadow-[inset_0_0_25px_rgba(6,182,212,0.1),_0_0_25px_rgba(6,182,212,0.25)] transition-all duration-300 backdrop-blur-md group overflow-hidden h-full">
              <div className="flex flex-col items-center shrink-0">
                <div className="text-center mb-1.5 flex flex-col items-center">
                  <h4 className="text-[9.5px] font-black text-cyan-400 uppercase tracking-wider leading-none mb-0.5 text-center">
                    CLASS 4-6 VEHICLES
                  </h4>
                  <span className="text-[clamp(8px,0.7vw,10px)] font-bold text-slate-300 uppercase tracking-wider leading-none text-center block">
                    FLEET VEHICLE OPERATIONS
                  </span>
                </div>
                {/* 5 sub-badges in a divided flex row */}
                <div className="flex w-full border-b border-cyan-500/20 pb-1.5 mb-1.5 shrink-0">
                  {[
                    { label: "Fleet Dispatch", svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 18v-6a9 9 0 0 1 18 0v6M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3"/></svg> },
                    { label: "Roadside Continuity", svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22V2M2 12h20M4 4l16 16M4 20L10 14"/></svg> },
                    { label: "Fleet Uptime Support", svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg> },
                    { label: "Service Vehicles", svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg> },
                    { label: "Recovery Systems", svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4"/></svg> }
                  ].map((sub, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center justify-start text-center group/sub min-h-[36px] w-full border-r border-cyan-500/10 last:border-r-0 px-0.5">
                      <div className="w-7 h-7 rounded bg-cyan-950/30 flex items-center justify-center text-cyan-400 border border-cyan-500/10 group-hover/sub:bg-cyan-500/15 group-hover/sub:border-cyan-400/30 transition-all p-0.5 shrink-0">
                        {sub.svg}
                      </div>
                      <span className="text-[8px] font-bold text-slate-300 leading-[1.1] text-center max-w-[56px] block mt-0.5 transition-colors duration-300 group-hover/sub:text-cyan-300">
                        {sub.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Central Vehicle Image with Send-to-Back graphics */}
              <div className="relative flex-1 flex items-center justify-center my-0.5 pointer-events-none select-none min-h-0 w-full overflow-hidden rounded-xl bg-slate-950/20 border border-cyan-500/5 shadow-[inset_0_0_12px_rgba(6,182,212,0.1)]">
                {/* Send-to-Back Cyber Grid Background */}
                <div 
                  className="absolute inset-0 bg-[url('/luxury_car_new.png')] bg-cover bg-top opacity-20 mix-blend-screen pointer-events-none z-0 scale-110 transition-transform duration-[8000ms] group-hover:scale-115"
                  style={{ 
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0.1) 85%, rgba(0,0,0,0))', 
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0.1) 85%, rgba(0,0,0,0))' 
                  }}
                />
                <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent opacity-60 z-0 pointer-events-none" />
                <img 
                  src="/class_4_6_bus_new.jpg" 
                  alt="Class 4-6 Student Transport & Fleet Operations" 
                  className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-700 relative z-10 rounded-lg drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>

              {/* Description */}
              <p className="text-[clamp(10px,0.9vw,12px)] text-slate-300 text-center leading-normal px-1 mt-1 shrink-0 font-medium z-10 relative">
                Operational roadside infrastructure supporting enterprise fleets, service vehicles, and commercial mobility continuity.
              </p>
            </div>

            {/* Card 4: Class 6-8 Vehicles */}
            <div className="relative bg-slate-950/80 border border-cyan-500/30 hover:border-cyan-400/60 rounded-2xl p-3 flex flex-col justify-between shadow-[inset_0_0_20px_rgba(6,182,212,0.03),_0_4px_24px_rgba(0,0,0,0.4)] hover:shadow-[inset_0_0_25px_rgba(6,182,212,0.1),_0_0_25px_rgba(6,182,212,0.25)] transition-all duration-300 backdrop-blur-md group overflow-hidden h-full">
              <div className="flex flex-col items-center shrink-0">
                <div className="text-center mb-1.5 flex flex-col items-center">
                  <h4 className="text-[9.5px] font-black text-cyan-400 uppercase tracking-wider leading-none mb-0.5 text-center">
                    CLASS 6-8 VEHICLES
                  </h4>
                  <span className="text-[clamp(8px,0.7vw,10px)] font-bold text-slate-300 uppercase tracking-wider leading-none text-center block">
                    COMMERCIAL & HEAVY RECOVERY
                  </span>
                </div>
                {/* 5 sub-badges in a divided flex row */}
                <div className="flex w-full border-b border-cyan-500/20 pb-1.5 mb-1.5 shrink-0">
                  {[
                    { label: "Semi-Truck Recovery", svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 18H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h11M14 7h6l3 4v5a2 2 0 0 1-2 2h-2M6 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/></svg> },
                    { label: "Heavy Towing", svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 18h-4l-5-8H3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="m13 10 4-5h5"/></svg> },
                    { label: "Trailer Recovery", svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 17h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H2M18 17l4 3M6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM14 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/></svg> },
                    { label: "Logistics Fleets", svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/></svg> },
                    { label: "Equipment Support", svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 18V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12M18 9h4v6h-4M6 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM18 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg> }
                  ].map((sub, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center justify-start text-center group/sub min-h-[36px] w-full border-r border-cyan-500/10 last:border-r-0 px-0.5">
                      <div className="w-7 h-7 rounded bg-cyan-950/30 flex items-center justify-center text-cyan-400 border border-cyan-500/10 group-hover/sub:bg-cyan-500/15 group-hover/sub:border-cyan-400/30 transition-all p-0.5 shrink-0">
                        {sub.svg}
                      </div>
                      <span className="text-[8px] font-bold text-slate-300 leading-[1.1] text-center max-w-[56px] block mt-0.5 transition-colors duration-300 group-hover/sub:text-cyan-300">
                        {sub.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Central Vehicle Image with Send-to-Back graphics */}
              <div className="relative flex-1 flex items-center justify-center my-0.5 pointer-events-none select-none min-h-0 w-full overflow-hidden rounded-xl bg-slate-950/20 border border-cyan-500/5 shadow-[inset_0_0_12px_rgba(6,182,212,0.1)]">
                {/* Send-to-Back Cyber Grid Background */}
                <div 
                  className="absolute inset-0 bg-[url('/luxury_car_new.png')] bg-cover bg-top opacity-20 mix-blend-screen pointer-events-none z-0 scale-110 transition-transform duration-[8000ms] group-hover:scale-115"
                  style={{ 
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0.1) 85%, rgba(0,0,0,0))', 
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0.1) 85%, rgba(0,0,0,0))' 
                  }}
                />
                <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent opacity-60 z-0 pointer-events-none" />
                <img 
                  src="/class_6_8_semi_truck_new.jpg" 
                  alt="Class 6-8 Commercial Tractor semi truck" 
                  className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-700 relative z-10 rounded-lg drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>

              {/* Description */}
              <p className="text-[clamp(10px,0.9vw,12px)] text-slate-300 text-center leading-normal px-1 mt-1 shrink-0 font-medium z-10 relative">
                Large-scale recovery coordination for commercial transportation, logistics fleets, and heavy-duty mobility operations.
              </p>
            </div>
          </div>

          {/* ── TWO BOTTOM SPLIT OPERATIONS PANELS ── */}
          <div className="shrink-0 grid grid-cols-2 gap-3.5 h-[222px] min-h-0">
            {/* Panel 1: Commercial Mobility Infrastructure */}
            <div className="border border-white/10 rounded-xl bg-slate-950/20 backdrop-blur-md p-2.5 flex flex-col justify-between shadow-[0_4px_30px_rgba(0,0,0,0.3)] h-full overflow-hidden">
              <div className="text-[8.5px] font-black text-cyan-400 uppercase tracking-widest border-b border-white/10 pb-1 flex items-center gap-1 shrink-0">
                <Network size={11} className="text-[#2F80FF]"/>
                COMMERCIAL MOBILITY INFRASTRUCTURE
              </div>
              <div className="flex-1 grid grid-cols-[180px_1fr] gap-4 mt-1.5 min-h-0">
                <div className="relative rounded-lg border border-white/5 overflow-hidden bg-slate-950/60 pointer-events-none select-none shrink-0 h-full">
                  <img 
                    src="/fleet_support_hero_cinematic_1778821042458.png" 
                    alt="Commercial Fleet Support Operator" 
                    className="h-full w-full object-cover opacity-75"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent"/>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 py-1 text-[clamp(12px,1.2vw,14px)] text-slate-300 font-bold leading-normal min-w-0 my-auto">
                  {[
                    "Logistics Fleet Support",
                    "Fleet Dispatch Systems",
                    "Roadside Continuity Workflows",
                    "Real-Time GPS Coordination",
                    "Fleet Telemetry Dashboards"
                  ].map((s, i) => (
                    <div key={i} className="flex items-center gap-1.5 truncate">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0 shadow-[0_0_3px_#22d3ee]"/>
                      <span className="truncate">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Panel 2: Heavy-Duty Recovery Operations */}
            <div className="border border-white/10 rounded-xl bg-slate-950/20 backdrop-blur-md p-2.5 flex flex-col justify-between shadow-[0_4px_30px_rgba(0,0,0,0.3)] h-full overflow-hidden">
              <div className="text-[8.5px] font-black text-cyan-400 uppercase tracking-widest border-b border-white/10 pb-1 flex items-center gap-1 shrink-0">
                <Wrench size={11} className="text-[#2F80FF]"/>
                HEAVY-DUTY RECOVERY OPERATIONS
              </div>
              <div className="flex-1 grid grid-cols-[180px_1fr] gap-4 mt-1.5 min-h-0">
                <div className="relative rounded-lg border border-white/5 overflow-hidden bg-slate-950/60 pointer-events-none select-none shrink-0 h-full">
                  <img 
                    src="/heavy_duty_towing.png" 
                    alt="Class 8 Heavy Duty Wrecker Wrench Operations" 
                    className="h-full w-full object-cover opacity-75"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent"/>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 py-1 text-[clamp(12px,1.2vw,14px)] text-slate-300 font-bold leading-normal min-w-0 my-auto">
                  {[
                    "Heavy-Duty Towing",
                    "Semi-Truck Recovery",
                    "Accident Recovery",
                    "Winch-Out Operations",
                    "Trailer & Load Recovery",
                    "Equipment Extraction"
                  ].map((s, i) => (
                    <div key={i} className="flex items-center gap-1.5 truncate">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0 shadow-[0_0_3px_#22d3ee]"/>
                      <span className="truncate">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── FOOTER ── */}
          <div className="shrink-0 border-t border-white/5 bg-[#020810] px-5 py-1.5 flex items-center justify-between relative z-20">
            <div className="flex items-center gap-3">
              <Globe size={11} className="text-[#2F80FF]"/>
              <span className="text-[clamp(10px,0.9vw,12px)] font-bold text-[#2F80FF] uppercase tracking-widest">Areas Served</span>
              {["USA","CANADA"].map((c,i)=>(
                <span key={i} className="text-[clamp(10px,0.9vw,12px)] text-slate-400 font-mono">{c}{i<1&&<span className="text-slate-600 mx-1">|</span>}</span>
              ))}
            </div>
            <div className="flex items-center gap-5 text-[clamp(10px,0.9vw,12px)] font-mono text-slate-500">
              <span className="flex items-center gap-1"><Phone size={9}/> +1-855-613-3131</span>
              <span className="flex items-center gap-1"><Mail size={9}/> partnerships@nationwideroadsideassist.com</span>
              <span className="flex items-center gap-1"><MapPin size={9}/> 11727 East End Avenue, Chino, CA 91710</span>
              <span className="flex items-center gap-1"><Globe size={9}/> www.nationwideroadsideassist.com</span>
            </div>
          </div>
        </section>

        {/* ==================================================
            SLIDE 8: DISPATCH OPERATIONS CENTER
            ================================================== */}
        <section
          id="slide-7"
          className="min-h-[100dvh] h-auto lg:h-screen w-full snap-start flex flex-col relative overflow-hidden bg-[#020617] px-4 lg:px-8 pt-16 pb-4"
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-2 shrink-0">
            
            <span className="text-slate-400 text-[clamp(10px,0.9vw,12px)] tracking-widest uppercase">DISPATCH OPERATIONS CENTER</span>
          </div>

          <div className="w-full flex-1 flex flex-col gap-2 min-h-0">
            {/* TOP ROW: Title & Map & Dashboard */}
            <div className="h-[60%] grid grid-cols-1 lg:grid-cols-12 gap-2">
              {/* Left Column: Title and text */}
              <div className="lg:col-span-3 flex flex-col border border-blue-900/40 bg-slate-900/30 rounded-xl p-3 overflow-hidden shadow-lg relative">
                <h2 className="text-3xl xl:text-5xl font-black text-white leading-none tracking-tighter">
                  24/7 <span className="text-cyan-400 block text-2xl xl:text-3xl mt-0.5">DISPATCH<br/>INTELLIGENCE</span>
                </h2>
                <h3 className="text-[#2F80FF] font-bold text-[clamp(10px,0.9vw,12px)] tracking-widest mt-2 uppercase">NATIONWIDEROADSIDEASSIST</h3>
                <p className="text-[clamp(10px,0.9vw,12px)] text-slate-300 leading-relaxed mt-1.5 flex-1">
                  NationwideRoadsideAssist delivers real-time dispatch coordination and enterprise roadside operations through intelligent workflows, live telemetry systems, nationwide vendor orchestration, and centralized operational visibility.
                </p>
                {/* 6 Icons row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 gap-x-3 mt-4 pb-2">
                  {[
                    { icon: Cpu, label: "AI-POWERED\nDispatch Intelligence" },
                    { icon: Activity, label: "REAL-TIME\nOperational Visibility" },
                    { icon: Globe, label: "NATIONWIDE\nRSA Coverage" },
                    { icon: Shield, label: "ENTERPRISE\nEscalation Coordination" },
                    { icon: Truck, label: "FLEET\nMobility Continuity" },
                    { icon: Clock, label: "24/7\nOperations Center" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center">
                      <item.icon size={32} className="text-cyan-400 mb-2 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" strokeWidth={1.5} />
                      <span className="text-[clamp(10px,0.9vw,12px)] xl:text-[11px] text-slate-300 uppercase leading-[1.2] whitespace-pre-line font-medium tracking-wide drop-shadow-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Middle Column: Central Map */}
              <div className="lg:col-span-6 border border-blue-900/40 bg-slate-900/30 rounded-xl overflow-hidden flex flex-col relative shadow-lg">


                 {/* Map Image */}
                 <div className="flex-1 w-full h-full relative flex items-center justify-center p-2">
                    <img src="/live-network-overview-new.jpg" alt="Dispatch Command Center" className="object-contain w-full h-full rounded-lg shadow-[0_0_25px_rgba(34,211,238,0.15)]" />
                 </div>
                 
                 {/* Control Center Bottom Overlay */}
                 <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-gradient-to-t from-slate-950 to-transparent pointer-events-none z-10"></div>
                 <div className="absolute bottom-0 left-0 right-0 h-[80px] overflow-hidden opacity-30 z-0 border-t border-white/5 mix-blend-screen">
                    <img src="/ops_command_center.png" alt="Ops Center" className="w-full h-full object-cover" />
                 </div>
              </div>
              
              {/* Right Column: Performance Metrics */}
              <div className="lg:col-span-3 flex flex-col border border-blue-900/40 bg-slate-900/30 rounded-xl p-3 overflow-hidden shadow-lg relative">
                 <h2 className="text-3xl xl:text-5xl font-black text-white leading-none tracking-tighter text-right">
                   OPERATIONAL <span className="text-cyan-400 block text-2xl xl:text-3xl mt-0.5">PERFORMANCE<br/>METRICS</span>
                 </h2>
                 <h3 className="text-[#2F80FF] font-bold text-[clamp(10px,0.9vw,12px)] tracking-widest mt-2 uppercase text-right">ENTERPRISE SLA</h3>
                 <p className="text-[clamp(10px,0.9vw,12px)] text-slate-300 leading-relaxed mt-1.5 text-right flex-1">
                   Monitoring active SLAs across dispatch requests to ensure rapid response, continuous mobility, and industry-leading customer satisfaction scores.
                 </p>
                 
                 <div className="mt-auto flex flex-col justify-end w-full">
                   <div className="flex justify-between items-center border-b border-white/5 pb-2 mb-2">
                     <span className="text-[9px] xl:text-[10px] text-slate-400 font-bold tracking-widest uppercase">AVG ETA TO CX</span>
                     <span className="text-[clamp(13px,1.2vw,15px)] xl:text-[clamp(13px,1.2vw,15px)] text-[#2F80FF] font-black">60 MINS</span>
                   </div>
                   
                   <div className="flex justify-between items-center border-b border-white/5 pb-2 mb-2">
                     <span className="text-[9px] xl:text-[10px] text-slate-400 font-bold tracking-widest uppercase">ETA FOR PHONE PICKUP</span>
                     <span className="text-[clamp(10px,1vw,12px)] xl:text-[clamp(10px,1vw,12px)] text-cyan-400 font-black">30 SEC - 4 MIN</span>
                   </div>
                   
                   <div className="flex justify-between items-center border-b border-white/5 pb-2 mb-2">
                     <span className="text-[9px] xl:text-[10px] text-slate-400 font-bold tracking-widest uppercase">CUSTOMER SATISFACTION</span>
                     <span className="text-[clamp(13px,1.2vw,15px)] xl:text-[clamp(13px,1.2vw,15px)] text-emerald-400 font-black flex items-center gap-1.5">4.9 <Star size={10} className="fill-emerald-400 text-emerald-400" /></span>
                   </div>
                   
                   <div className="flex justify-between items-center border-b border-white/5 pb-2 mb-2">
                     <span className="text-[9px] xl:text-[10px] text-slate-400 font-bold tracking-widest uppercase">AREAS SERVED</span>
                     <span className="text-[9px] xl:text-[10px] text-white font-bold text-right max-w-[50%] leading-[1.2]">USA, CANADA</span>
                   </div>
                   
                   <div className="flex justify-between items-center">
                     <span className="text-[9px] xl:text-[10px] text-slate-400 font-bold tracking-widest uppercase">ACTIVE</span>
                     <span className="text-[clamp(13px,1.2vw,15px)] xl:text-[clamp(13px,1.2vw,15px)] text-white font-black flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_6px_rgba(239,68,68,0.8)]"></div> 24/7</span>
                   </div>
                 </div>
              </div>
            </div>

            {/* MIDDLE ROW: Workflow */}
            <div className="h-[40%] border border-blue-900/40 bg-slate-900/30 rounded-xl p-3 flex flex-col shadow-lg relative">
              <div className="text-[clamp(10px,0.9vw,12px)] text-blue-100 drop-shadow-[0_0_5px_rgba(96,165,250,0.6)] tracking-[0.2em] font-bold uppercase mb-4 text-center shrink-0">Real-Time Dispatch Workflow Infrastructure</div>
              
              {/* Process Flow */}
              <div className="flex-1 flex justify-between items-start relative px-1 sm:px-4 w-full">
                 {[
                   { id: 19, title: "ROADSIDE\nINCIDENT", desc: "Incident detected\nvia call, mobile app,\ntelemetry, or third-\nparty integration.", icon: AlertTriangle, active: true },
                   { id: 20, title: "24/7 RSA\nINTAKE", desc: "Enterprise intake\nspecialists capture\nincident details,\nverify location &\nclassify event.", icon: Headphones },
                   { id: 21, title: "AI DISPATCH\nCOORDINATION", desc: "AI engine analyzes\nskill sets, ETA, traffic,\ncapacity, and event\npriority to build the\noptimal plan.", icon: Cpu },
                   { id: 22, title: "NEAREST VENDOR\nASSIGNMENT", desc: "Best-matched vendor\nis assigned automatically\nbased on proximity,\ncapability, and\nperformance.", icon: MapPin },
                   { id: 23, title: "LIVE GPS\nMONITORING", desc: "Real-time GPS\ntracking provides\nvisibility across\nroutes, ETAs, and\non-scene status.", icon: Truck },
                   { id: 24, title: "ESCALATION\nROUTING", desc: "High-priority events\nare escalated to\nspecialized teams\nfor rapid operational\nintervention.", icon: ChevronsUp },
                   { id: 25, title: "RECOVERY\nCOORDINATION", desc: "Recovery operations\nmanaged to ensure\nmobility continuity\nand customer\nsatisfaction.", icon: ShieldCheck },
                   { id: 26, title: "RESOLUTION &\nREPORTING", desc: "Event resolved,\ndocumented, and\nanalyzed for SLA,\nreporting & continuous\nimprovement.", icon: ClipboardList }
                 ].map((step, idx, arr) => (
                   <React.Fragment key={idx}>
                     <div className="flex flex-col items-center text-center relative z-10 flex-1 max-w-[12%]">
                       <div className={`relative flex items-center justify-center w-12 h-12 xl:w-[56px] xl:h-[56px] rounded-full border-[1.5px] ${step.active ? 'border-red-500/80 bg-red-950/40 shadow-[0_0_14px_rgba(239,68,68,0.5),inset_0_0_10px_rgba(239,68,68,0.3)]' : 'border-blue-400/60 bg-blue-950/40 shadow-[0_0_14px_rgba(59,130,246,0.3),inset_0_0_10px_rgba(59,130,246,0.2)]'} mb-3`}>
                         <div className={`absolute inset-1.5 rounded-full border-[1px] border-dashed ${step.active ? 'border-red-400/60' : 'border-cyan-400/50'} animate-[spin_15s_linear_infinite]`}></div>
                         <div className={`absolute -inset-[5px] rounded-full border-[1px] ${step.active ? 'border-red-500/20' : 'border-blue-400/20'}`}></div>
                         <step.icon className={`${step.active ? 'text-red-400 drop-shadow-[0_0_6px_rgba(239,68,68,0.9)]' : 'text-blue-300 drop-shadow-[0_0_4px_rgba(96,165,250,0.7)]'} relative z-10`} size={26} strokeWidth={1.5} />
                       </div>
                       <div className={`text-[7.5px] xl:text-[8.5px] font-bold ${step.active ? 'text-white' : 'text-blue-50'} uppercase whitespace-pre-line leading-[1.1] mt-2 text-center tracking-wide min-h-[22px] flex items-center justify-center`}>
                         {step.title}
                       </div>
                       <div className="text-[6.5px] xl:text-[clamp(8px,0.7vw,10px)] text-slate-300 mt-1.5 leading-[1.4] whitespace-pre-line text-center hidden lg:block px-0.5 drop-shadow-sm">
                         {step.desc}
                       </div>
                     </div>
                     {idx < arr.length - 1 && (
                       <div className="flex items-center justify-center pt-5 xl:pt-7 w-4 shrink-0 text-cyan-400/70 drop-shadow-[0_0_5px_rgba(34,211,238,0.7)]">
                          <ArrowRight size={16} strokeWidth={2.5} />
                       </div>
                     )}
                   </React.Fragment>
                 ))}
              </div>
            </div>
          </div>

          {/* ── FOOTER ── */}
          <div className="shrink-0 border-t border-white/5 bg-[#020810] px-5 py-1.5 flex items-center justify-between relative z-20">
            <div className="flex items-center gap-3">
              <Globe size={11} className="text-[#2F80FF]"/>
              <span className="text-[clamp(10px,0.9vw,12px)] font-bold text-[#2F80FF] uppercase tracking-widest">Areas Served</span>
              {["USA","CANADA"].map((c,i)=>(
                <span key={i} className="text-[clamp(10px,0.9vw,12px)] text-slate-400 font-mono">{c}{i<1&&<span className="text-slate-600 mx-1">|</span>}</span>
              ))}
            </div>
            <div className="flex items-center gap-5 text-[clamp(10px,0.9vw,12px)] font-mono text-slate-500">
              <span className="flex items-center gap-1"><Phone size={9}/> +1-855-613-3131</span>
              <span className="flex items-center gap-1"><Mail size={9}/> partnerships@nationwideroadsideassist.com</span>
              <span className="flex items-center gap-1"><MapPin size={9}/> 11727 East End Avenue, Chino, CA 91710</span>
              <span className="flex items-center gap-1"><Globe size={9}/> www.nationwideroadsideassist.com</span>
            </div>
          </div>
        </section>

        {/* ==================================================
            SLIDE 8: FLEET & ENTERPRISE SUPPORT
            ================================================== */}
        {/* ==================================================
            SLIDE 8: FLEET & ENTERPRISE SUPPORT (DASHBOARD REDESIGN)
            ================================================== */}
        {/* ==================================================
            SLIDE 8: FLEET & ENTERPRISE SUPPORT (SIMPLIFIED DASHBOARD)
            ================================================== */}
        {/* ==================================================
            SLIDE 8: FLEET & ENTERPRISE SUPPORT (DASHBOARD REDESIGN)
            ================================================== */}
        <section
          id="slide-8"
          className="min-h-[100dvh] h-auto lg:h-screen w-full snap-start flex flex-col justify-between bg-[#020617] px-6 md:px-12 pt-[68px] pb-1.5 relative overflow-hidden"
        >
          <div className="w-full flex-1 min-h-0 max-w-[1800px] mx-auto flex flex-col justify-between z-10 relative">
            {/* TIER 1: TOP (45% height on desktop) */}
            <div className="lg:h-[45%] h-auto shrink-0 min-h-min grid grid-cols-1 lg:grid-cols-12 gap-4">
              {/* Left: Title & Icons */}
              <div className="lg:col-span-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    
                    <span className="text-slate-400 text-[clamp(10px,0.9vw,12px)] tracking-widest uppercase">FLEET & ENTERPRISE SUPPORT</span>
                  </div>
                  <h2 className="text-4xl xl:text-5xl font-black text-white leading-[0.9] tracking-tighter uppercase">
                    BUILT FOR<br/>
                    <span className="text-[#2F80FF]">ENTERPRISE</span><br/>
                    MOBILITY<br/>
                    OPERATIONS
                  </h2>
                  <p className="text-[clamp(10px,0.9vw,12px)] xl:text-xs text-slate-300 mt-3 font-medium leading-relaxed pr-4">
                    NationwideRoadsideAssist enables enterprise mobility continuity through centralized roadside coordination, intelligent dispatch operations, and real-time operational visibility.
                  </p>
                </div>
                
                {/* 6 Icons Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-auto">
                  {[
                    { icon: Clock, label: "24/7\nOPERATIONS" },
                    { icon: Map, label: "NATIONWIDE\nCOVERAGE" },
                    { icon: BrainCircuit, label: "AI-POWERED\nDISPATCH" },
                    { icon: Network, label: "ESCALATION\nMANAGEMENT" },
                    { icon: Shield, label: "MOBILITY\nCONTINUITY" },
                    { icon: Target, label: "SLA-FOCUSED\nPERFORMANCE" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center justify-center border border-white/10 rounded-xl p-2 bg-slate-900/40 backdrop-blur-sm h-14 xl:h-16 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                      <item.icon size={14} className="text-[#2F80FF] mb-1.5" strokeWidth={1.5} />
                      <span className="text-[clamp(6px,0.5vw,8px)] xl:text-[clamp(8px,0.7vw,10px)] text-slate-300 text-center font-bold uppercase leading-[1.2]">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Center: Hero Image */}
              <div className="lg:col-span-3 h-48 sm:h-64 lg:h-full border border-white/10 rounded-2xl bg-slate-900/40 p-2 relative shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-sm overflow-hidden flex flex-col items-center justify-center">
                 <img src="/tow_truck_rv_night_hero.png" alt="Heavy-duty tow truck recovering an RV" className="w-full h-full object-cover rounded-xl mix-blend-luminosity opacity-80" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent pointer-events-none"></div>
              </div>

              {/* Right: Enterprise Benefits Grid */}
              <div className="lg:col-span-6 border border-white/10 rounded-2xl bg-slate-900/40 p-2 xl:p-3 relative shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-sm flex flex-col justify-center">
                 <div className="text-[clamp(12px,1.1vw,14px)] text-slate-300 font-bold tracking-widest uppercase absolute -top-3 left-6 bg-[#020617] px-5 z-10 border border-white/10 rounded-full py-1.5">ENTERPRISE BENEFITS</div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 xl:gap-2.5 w-full lg:h-full">
                    
                    {/* Card 1 */}
                    <div className="flex items-center gap-2.5 bg-[#020817] rounded-lg p-2.5 border border-blue-500/40 shadow-[inset_0_0_15px_rgba(47,128,255,0.1)]">
                      <Clock size={22} strokeWidth={1.5} className="text-[#38bdf8] shrink-0 drop-shadow-[0_0_5px_rgba(56,189,248,0.8)]"/>
                      <div>
                        <div className="text-[clamp(12px,1.1vw,14px)] font-bold text-white uppercase leading-tight mb-0.5">REDUCED DOWNTIME</div>
                        <div className="text-[clamp(10px,0.9vw,12px)] text-slate-400 leading-snug pr-1">Minimizing interruptions and maximizing uptime.</div>
                      </div>
                    </div>
                    {/* Card 2 */}
                    <div className="flex items-center gap-2.5 bg-[#020817] rounded-lg p-2.5 border border-blue-500/40 shadow-[inset_0_0_15px_rgba(47,128,255,0.1)]">
                      <Zap size={22} strokeWidth={1.5} className="text-[#38bdf8] shrink-0 drop-shadow-[0_0_5px_rgba(56,189,248,0.8)]"/>
                      <div>
                        <div className="text-[clamp(12px,1.1vw,14px)] font-bold text-white uppercase leading-tight mb-0.5">FASTER RESOLUTION</div>
                        <div className="text-[clamp(10px,0.9vw,12px)] text-slate-400 leading-snug pr-1">AI-assisted dispatch accelerates response times.</div>
                      </div>
                    </div>
                    {/* Card 3 */}
                    <div className="flex items-center gap-2.5 bg-[#020817] rounded-lg p-2.5 border border-blue-500/40 shadow-[inset_0_0_15px_rgba(47,128,255,0.1)]">
                      <MapPin size={22} strokeWidth={1.5} className="text-[#38bdf8] shrink-0 drop-shadow-[0_0_5px_rgba(56,189,248,0.8)]"/>
                      <div>
                        <div className="text-[clamp(12px,1.1vw,14px)] font-bold text-white uppercase leading-tight mb-0.5">OPERATIONAL VISIBILITY</div>
                        <div className="text-[clamp(10px,0.9vw,12px)] text-slate-400 leading-snug pr-1">Real-time monitoring telemetry.</div>
                      </div>
                    </div>
                    {/* Card 4 */}
                    <div className="flex items-center gap-2.5 bg-[#020817] rounded-lg p-2.5 border border-blue-500/40 shadow-[inset_0_0_15px_rgba(47,128,255,0.1)]">
                      <Network size={22} strokeWidth={1.5} className="text-[#38bdf8] shrink-0 drop-shadow-[0_0_5px_rgba(56,189,248,0.8)]"/>
                      <div>
                        <div className="text-[clamp(12px,1.1vw,14px)] font-bold text-white uppercase leading-tight mb-0.5">CENTRALIZED COORDINATION</div>
                        <div className="text-[clamp(10px,0.9vw,12px)] text-slate-400 leading-snug pr-1">Unified command managing intake and dispatch.</div>
                      </div>
                    </div>
                    {/* Card 5 */}
                    <div className="flex items-center gap-2.5 bg-[#020817] rounded-lg p-2.5 border border-blue-500/40 shadow-[inset_0_0_15px_rgba(47,128,255,0.1)]">
                      <Link size={22} strokeWidth={1.5} className="text-[#38bdf8] shrink-0 drop-shadow-[0_0_5px_rgba(56,189,248,0.8)]"/>
                      <div>
                        <div className="text-[clamp(12px,1.1vw,14px)] font-bold text-white uppercase leading-tight mb-0.5">SEAMLESS API INTEGRATION</div>
                        <div className="text-[clamp(10px,0.9vw,12px)] text-slate-400 leading-snug pr-1">Connect dispatch directly into your CRM via APIs.</div>
                      </div>
                    </div>
                    {/* Card 6 */}
                    <div className="flex items-center gap-2.5 bg-[#020817] rounded-lg p-2.5 border border-blue-500/40 shadow-[inset_0_0_15px_rgba(47,128,255,0.1)]">
                      <Headset size={22} strokeWidth={1.5} className="text-[#38bdf8] shrink-0 drop-shadow-[0_0_5px_rgba(56,189,248,0.8)]"/>
                      <div>
                        <div className="text-[clamp(12px,1.1vw,14px)] font-bold text-white uppercase leading-tight mb-0.5">ACCOUNT MANAGEMENT</div>
                        <div className="text-[clamp(10px,0.9vw,12px)] text-slate-400 leading-snug pr-1">24/7 priority support from dedicated coordinators.</div>
                      </div>
                    </div>
                    {/* Card 7 */}
                    <div className="flex items-center gap-2.5 bg-[#020817] rounded-lg p-2.5 border border-blue-500/40 shadow-[inset_0_0_15px_rgba(47,128,255,0.1)]">
                      <FileCheck size={22} strokeWidth={1.5} className="text-[#38bdf8] shrink-0 drop-shadow-[0_0_5px_rgba(56,189,248,0.8)]"/>
                      <div>
                        <div className="text-[clamp(12px,1.1vw,14px)] font-bold text-white uppercase leading-tight mb-0.5">VOLUME ECONOMICS</div>
                        <div className="text-[clamp(10px,0.9vw,12px)] text-slate-400 leading-snug pr-1">Lock in guaranteed response times and bulk pricing.</div>
                      </div>
                    </div>
                    {/* Card 8 */}
                    <div className="flex items-center gap-2.5 bg-[#020817] rounded-lg p-2.5 border border-blue-500/40 shadow-[inset_0_0_15px_rgba(47,128,255,0.1)]">
                      <LayoutDashboard size={22} strokeWidth={1.5} className="text-[#38bdf8] shrink-0 drop-shadow-[0_0_5px_rgba(56,189,248,0.8)]"/>
                      <div>
                        <div className="text-[clamp(12px,1.1vw,14px)] font-bold text-white uppercase leading-tight mb-0.5">UNIFIED TELEMETRY</div>
                        <div className="text-[clamp(10px,0.9vw,12px)] text-slate-400 leading-snug pr-1">Command infrastructure with automated reporting.</div>
                      </div>
                    </div>
                 </div>
              </div>
            </div>

            {/* TIER 2: MIDDLE (48% height on desktop) */}
            <div className="lg:h-[48%] h-auto shrink-0 min-h-min w-full border border-white/10 rounded-2xl bg-slate-900/40 p-4 xl:p-6 relative shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-sm flex flex-col">
              <div className="text-[clamp(12px,1.1vw,15px)] text-slate-300 font-bold tracking-widest uppercase absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#020617] px-6 z-10 border border-white/10 rounded-full py-1.5">ENTERPRISE MOBILITY ECOSYSTEM SUPPORT</div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 xl:gap-5 mt-5 lg:h-full h-auto">
                {[
                  { title: "RV RENTAL COMPANIES", img: "/rental_3d_icon_enterprise_1778864913282.png", items: ["RV Roadside Support", "Traveler Continuity", "Long-Distance Mobility", "Rental Fleet Dispatch"] },
                  { title: "FLEET OPERATORS", img: "/fleet_3d_icon_enterprise_1778864894428.png", items: ["Fleet Roadside Workflows", "Operational Uptime", "Dispatch Intelligence", "Mobility Continuity"] },
                  { title: "INSURERS", img: "/insurance_3d_icon_enterprise_1778864876426.png", items: ["Roadside Coordination", "Customer Assistance", "Claims Support Workflows", "Real-Time Visibility"] },
                  { title: "OEMS", img: "/oem_3d_icon_enterprise_1778864936385.png", items: ["Connected Mobility Ops", "Roadside Infrastructure", "Customer Mobility", "Dispatch Intelligence"] },
                  { title: "LOGISTICS COMPANIES", img: "/dispatch_3d_icon_enterprise_1778864954864.png", items: ["Logistics Fleet Support", "Commercial Dispatch", "Heavy-Duty Operations", "Transportation Continuity"] },
                  { title: "MOBILITY PROVIDERS", img: "/fleet_management_dashboard_3d_1778816662797.png", items: ["Mobility Continuity Ops", "Roadside Orchestration", "Dispatch Infrastructure", "Enterprise Workflows"] }
                ].map((card, i) => (
                  <div key={i} className="flex flex-col bg-slate-950/80 rounded-lg border border-white/5 overflow-hidden">
                    <div className="text-[clamp(10px,0.9vw,12px)] font-bold text-slate-200 text-center py-2 xl:py-2.5 uppercase bg-slate-900">{card.title}</div>
                    <div className="h-14 xl:h-20 overflow-hidden border-b border-white/5 relative">
                       <div className="absolute inset-0 bg-[#2F80FF]/20 mix-blend-overlay z-10"></div>
                       <img src={card.img} alt={card.title} className="w-full h-full object-cover opacity-80" />
                    </div>
                    <div className="p-1.5 xl:p-2 flex flex-col gap-0.5 xl:gap-1 flex-1 justify-center">
                      {card.items.map((item, j) => (
                        <div key={j} className="flex items-start gap-1">
                          <div className="w-0.5 xl:w-1 h-0.5 xl:h-1 rounded-full bg-cyan-500 mt-1.5 shrink-0 shadow-[0_0_5px_rgba(34,211,238,0.8)]"></div>
                          <span className="text-[clamp(10px,0.9vw,12px)] text-slate-300 leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ── FOOTER ── */}
          <div className="shrink-0 border-t border-white/5 bg-[#020810] px-5 py-1.5 flex items-center justify-between relative z-20">
            <div className="flex items-center gap-3">
              <Globe size={11} className="text-[#2F80FF]"/>
              <span className="text-[clamp(10px,0.9vw,12px)] font-bold text-[#2F80FF] uppercase tracking-widest">Areas Served</span>
              {["USA","CANADA"].map((c,i)=>(
                <span key={i} className="text-[clamp(10px,0.9vw,12px)] text-slate-400 font-mono">{c}{i<1&&<span className="text-slate-600 mx-1">|</span>}</span>
              ))}
            </div>
            <div className="flex items-center gap-5 text-[clamp(10px,0.9vw,12px)] font-mono text-slate-500">
              <span className="flex items-center gap-1"><Phone size={9}/> +1-855-613-3131</span>
              <span className="flex items-center gap-1"><Mail size={9}/> partnerships@nationwideroadsideassist.com</span>
              <span className="flex items-center gap-1"><MapPin size={9}/> 11727 East End Avenue, Chino, CA 91710</span>
              <span className="flex items-center gap-1"><Globe size={9}/> www.nationwideroadsideassist.com</span>
            </div>
          </div>
        </section>

        {/* ==================================================
            SLIDE 9: ADVANCED RECOVERY & CONTACT INFO
            ================================================== */}
        <section
          id="slide-9"
          className="min-h-[100dvh] h-auto lg:h-screen w-full snap-start flex flex-col justify-between bg-[#020617] px-6 pt-[68px] pb-1.5 relative overflow-hidden"
        >
          <div className="w-full flex-1 min-h-0 max-w-[1800px] mx-auto flex flex-col justify-between z-10 relative overflow-y-auto scrollbar-none pr-1">
            {/* TIER 1: HERO & TOP METRICS (33% height on desktop) */}
            <div className="lg:h-[33%] h-auto shrink-0 min-h-min grid grid-cols-1 lg:grid-cols-12 gap-4 mt-2">
               {/* Title & 6 Icons */}
               <div className="lg:col-span-3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      
                      <span className="text-slate-400 text-[clamp(11px,1vw,13px)] tracking-widest uppercase font-semibold">HEAVY-DUTY & RECOVERY OPERATIONS</span>
                    </div>
                    <h2 className="text-2xl xl:text-3xl font-black text-white leading-[0.9] tracking-tighter uppercase mt-1">
                      ADVANCED RECOVERY &<br/>
                      <span className="text-[#2F80FF]">HEAVY-DUTY COORDINATION</span>
                    </h2>
                    <p className="text-[clamp(11.5px,1vw,13.5px)] text-slate-300 mt-2 font-medium leading-relaxed pr-2">
                      Scalable recovery infrastructure for enterprise and commercial mobility operations.
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 mt-auto pb-1">
                    {[
                      { icon: Network, label: "Enterprise Network" },
                      { icon: Search, label: "24/7 Coordination" },
                      { icon: BrainCircuit, label: "AI-Powered Dispatch" },
                      { icon: MapPin, label: "Nationwide Coverage" },
                      { icon: Shield, label: "Operational Continuity" },
                      { icon: Clock, label: "Real-Time Visibility" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex flex-col items-center justify-center border border-white/10 rounded-lg bg-slate-900/40 p-1 backdrop-blur-sm h-12 xl:h-14 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                        <item.icon size={16} className="text-[#2F80FF] mb-1.5" strokeWidth={1.5} />
                        <span className="text-[clamp(9.5px,0.8vw,11.5px)] text-slate-300 text-center uppercase leading-tight font-bold">{item.label}</span>
                      </div>
                    ))}
                  </div>
               </div>

               {/* Center Hero Image */}
               <div className="lg:col-span-3 h-48 sm:h-64 lg:h-full relative rounded-xl overflow-hidden border border-white/10 shadow-[0_0_15px_rgba(47,128,255,0.15)] bg-slate-900/40">
                  <img src="/heavy_duty_towing.png" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-80" alt="Heavy Duty Recovery" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent pointer-events-none"></div>
               </div>

               {/* Right Side Tabs (Parallel) */}
               <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
                  {/* Heavy-Duty Capabilities Tab */}
                  <div className="flex flex-col h-full bg-slate-900/40 rounded-xl border border-white/10 p-2">
                    <div className="text-[clamp(12px,1.05vw,14px)] text-slate-300 font-extrabold uppercase tracking-widest border-b border-white/10 pb-1 mb-1.5">HEAVY-DUTY CAPABILITIES</div>
                    <div className="flex-1 flex flex-col gap-1">
                      {[
                        { title: "Rotators & Cranes", desc: "50-75 ton rotator capabilities for complex recoveries" },
                        { title: "Air Cushion Recovery", desc: "Specialized airbags for uprighting delicate cargo & loaded trailers" },
                        { title: "Landoll Trailers", desc: "Specialized equipment for transporting low-clearance vehicles" },
                        { title: "Heavy Winching", desc: "Multi-winch operations for complex off-road extractions" }
                      ].map((item, idx) => (
                        <div key={idx} className="flex-1 bg-slate-950/60 border border-white/5 rounded p-1.5 flex flex-col justify-center hover:border-cyan-500/30 transition-all duration-300">
                           <div className="text-[#2F80FF] font-extrabold text-[clamp(11.5px,1vw,13px)] uppercase mb-0.5 flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></div>{item.title}</div>
                           <div className="text-slate-300 text-[clamp(10.5px,0.9vw,12px)] leading-relaxed">{item.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Commercial Fleet Support Tab */}
                  <div className="flex flex-col h-full bg-slate-900/40 rounded-xl border border-white/10 p-2">
                    <div className="text-[clamp(12px,1.05vw,14px)] text-slate-300 font-extrabold uppercase tracking-widest border-b border-white/10 pb-1 mb-1.5">COMMERCIAL FLEET SUPPORT</div>
                    <div className="flex-1 flex flex-col gap-1">
                      {[
                        { title: "Load Shifts & Transfers", desc: "Secure handling of cargo transfers to minimize loss" },
                        { title: "Hazardous Material (Hazmat)", desc: "Certified recovery teams for environmental compliance" },
                        { title: "Secure Storage", desc: "24/7 monitored facilities for recovered assets & cargo" },
                        { title: "Incident Management", desc: "Scene safety coordination with local authorities" }
                      ].map((item, idx) => (
                        <div key={idx} className="flex-1 bg-slate-950/60 border border-white/5 rounded p-1.5 flex flex-col justify-center hover:border-cyan-500/30 transition-all duration-300">
                           <div className="text-[#2F80FF] font-extrabold text-[clamp(11.5px,1vw,13px)] uppercase mb-0.5 flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></div>{item.title}</div>
                           <div className="text-slate-300 text-[clamp(10.5px,0.9vw,12px)] leading-relaxed">{item.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
               </div>
            </div>

            {/* TIER 2: INFRASTRUCTURE PROCESS FLOW (23% height on desktop) */}
            <div className="lg:h-[23%] h-auto shrink-0 min-h-min mt-2">
               <div className="h-full border border-white/10 rounded-xl bg-slate-900/40 relative pt-6 lg:pt-5 pb-2 px-3 flex flex-col justify-center">
                 <div className="absolute -top-4 left-4 bg-[#020617] px-2.5 z-20">
                   <span className="text-[clamp(13px,1.4vw,20px)] whitespace-nowrap bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-extrabold tracking-widest uppercase">
                     COMMERCIAL MOBILITY RECOVERY INFRASTRUCTURE
                   </span>
                 </div>
                 <div className="flex items-start justify-between w-full h-full mt-2 relative overflow-x-auto lg:overflow-x-visible whitespace-nowrap lg:whitespace-normal scrollbar-none py-2 gap-6 lg:gap-0">
                   {/* Background connecting line */}
                   <div className="hidden lg:block absolute top-4 left-4 right-4 h-[1px] bg-white/10 z-0 border-t border-dashed border-[#2F80FF]/30"></div>
                   {[
                     { icon: Truck, title: "COMMERCIAL\nTRANSPORTATION\nECOSYSTEM", desc: "Connected fleets,\nlogistics, insurers,\nOEMs, and mobility\nproviders.", color: "text-[#2F80FF]" },
                     { icon: AlertTriangle, title: "ROADSIDE INCIDENT\nCOORDINATION", desc: "Real-time incident\ncapture, classification,\nand operational\nprioritization.", color: "text-[#2F80FF]" },
                     { icon: Network, title: "HEAVY-DUTY DISPATCH\nOPERATIONS", desc: "AI-assisted dispatch\nrouting for heavy-duty\ntowing and recovery\nresources.", color: "text-[#2F80FF]" },
                     { icon: User, title: "RECOVERY PROVIDER\nASSIGNMENT", desc: "Nearest and most\ncapable provider\nassigned based on\nexpertise and proximity.", color: "text-[#2F80FF]" },
                     { icon: MapPin, title: "LIVE GPS & RECOVERY\nMONITORING", desc: "Real-time tracking of\nrecovery units, assets,\nETAs, and incident\nprogress.", color: "text-[#38bdf8]" },
                     { icon: AlertCircle, title: "ACCIDENT ESCALATION\nMANAGEMENT", desc: "High-priority escalation\nfor complex incidents,\nhazmat, rollover, and\nmulti-unit events.", color: "text-orange-500" },
                     { icon: CheckCircle2, title: "OPERATIONAL RECOVERY\nRESOLUTION", desc: "Incident resolution,\nclearance, reporting,\nand operational\ncontinuity restored.", color: "text-emerald-500" }
                   ].map((step, idx) => (
                     <div key={idx} className="flex flex-col items-center z-10 w-[180px] lg:w-[12%] text-center relative shrink-0 whitespace-normal">
                        <div className="w-10 h-10 rounded-full bg-[#020617] border border-white/20 flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(0,0,0,0.6)]">
                          <step.icon size={16} className={step.color} strokeWidth={1.5} />
                        </div>
                        <div className="text-[clamp(10px,0.85vw,12px)] text-[#2F80FF] font-extrabold uppercase leading-tight mb-1">{step.title}</div>
                        <div className="text-[clamp(9px,0.75vw,10.5px)] text-slate-300 leading-snug whitespace-pre-wrap">{step.desc}</div>
                     </div>
                   ))}
                 </div>
               </div>
            </div>

            {/* TIER 3: SERVICES AND METRICS (28% height on desktop) */}
            <div className="lg:h-[28%] h-auto shrink-0 min-h-min mt-2">
               {/* Image Cards */}
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 lg:h-full h-auto">
                  {[
                    { title: "HEAVY-DUTY TOWING", img: "/class_6_8_semi_truck_new.jpg", list: ["Semi-Truck Towing", "Trailer Recovery", "Heavy Load Handling", "Commercial Fleet Support", "Breakdown Assistance"] },
                    { title: "RECOVERY OPERATIONS", img: "/heavy_duty_towing.png", list: ["Roadside Recovery", "Incident Response", "Recovery Dispatch", "Operational Visibility", "Transportation Continuity"] },
                    { title: "WINCH-OUT COORDINATION", img: "/recovery_trucks_3d_set_1778670994479.png", list: ["Off-Road Extraction", "Winch-Out Support", "Terrain Recovery", "Difficult Environment Ops", "Escalation Workflows"] },
                    { title: "COMMERCIAL TRUCK SUPPORT", img: "/class_4_6_truck_new.png", list: ["Freight Fleet Support", "Logistics Continuity", "Commercial Dispatch", "Heavy Vehicle Assistance", "Fleet Management"] },
                    { title: "ACCIDENT RECOVERY", img: "/tire_change_hero_cinematic_1778819076922.png", list: ["Accident Response", "Incident Management", "Emergency Escalation", "Recovery Command", "Operational Oversight"] }
                  ].map((card, idx) => (
                    <div key={idx} className="group flex flex-col h-full bg-slate-900/60 border border-white/10 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_4px_25px_rgba(56,189,248,0.1)]">
                      <div className="text-[clamp(10px,0.85vw,12.5px)] text-slate-200 font-extrabold uppercase text-center py-1 bg-[#020617] shrink-0 tracking-wider">{card.title}</div>
                      <div className="h-8 lg:h-9 xl:h-11 shrink-0 w-full overflow-hidden relative border-b border-white/10">
                         <div className="absolute inset-0 bg-[#2F80FF]/10 mix-blend-overlay z-10"></div>
                         <img src={card.img} alt={card.title} className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="flex-1 px-3 py-1 flex flex-col justify-center gap-0.5 xl:gap-1">
                        {card.list.map((l, i) => (
                           <div key={i} className="flex items-center gap-2">
                             <div className="w-1 h-1 rounded-full bg-[#38bdf8] shrink-0 shadow-[0_0_4px_rgba(56,189,248,0.6)]"></div>
                             <span className="text-[clamp(9.5px,0.8vw,11px)] text-slate-300 font-medium leading-tight">{l}</span>
                           </div>
                        ))}
                      </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* ── FOOTER ── */}
          <div className="shrink-0 border-t border-white/5 bg-[#020810] px-5 py-1.5 flex items-center justify-between relative z-20">
            <div className="flex items-center gap-3">
              <Globe size={11} className="text-[#2F80FF]"/>
              <span className="text-[clamp(10px,0.9vw,12px)] font-bold text-[#2F80FF] uppercase tracking-widest">Areas Served</span>
              {["USA","CANADA"].map((c,i)=>(
                <span key={i} className="text-[clamp(10px,0.9vw,12px)] text-slate-400 font-mono">{c}{i<1&&<span className="text-slate-600 mx-1">|</span>}</span>
              ))}
            </div>
            <div className="flex items-center gap-5 text-[clamp(10px,0.9vw,12px)] font-mono text-slate-500">
              <span className="flex items-center gap-1"><Phone size={9}/> +1-855-613-3131</span>
              <span className="flex items-center gap-1"><Mail size={9}/> partnerships@nationwideroadsideassist.com</span>
              <span className="flex items-center gap-1"><MapPin size={9}/> 11727 East End Avenue, Chino, CA 91710</span>
              <span className="flex items-center gap-1"><Globe size={9}/> www.nationwideroadsideassist.com</span>
            </div>
          </div>
        </section>
      
        {/* ==================================================
            SLIDE 10: PARTNERSHIP OPPORTUNITIES
            ================================================== */}
        <section
          id="slide-10"
          className="min-h-[100dvh] h-auto lg:h-screen w-full snap-start flex flex-col justify-between bg-[#020617] px-6 pt-[68px] pb-1.5 relative overflow-hidden"
        >
          <div className="w-full flex-1 min-h-0 max-w-[1800px] mx-auto flex flex-col justify-between z-10 relative overflow-y-auto scrollbar-none pr-1">
            {/* TIER 1: STRATEGIC PARTNERSHIP HERO (35%) */}
            <div className="lg:h-[35%] h-auto shrink-0 min-h-min grid grid-cols-1 lg:grid-cols-12 gap-4 mt-2 relative">
              {/* Center Map Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2F80FF]/10 blur-[120px] pointer-events-none rounded-full" />
              
              <div className="lg:col-span-5 flex flex-col justify-center z-10">
                <div className="flex items-center gap-2 mb-2">
                  
                  <span className="text-slate-400 text-[clamp(8px,0.7vw,10px)] tracking-widest uppercase">PARTNERSHIP OPPORTUNITIES</span>
                </div>
                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-2">
                  STRATEGIC RSA<br/>
                  <span className="text-[#2F80FF]">PARTNERSHIP</span><br/>
                  ECOSYSTEM
                </h2>
                <p className="text-[clamp(10px,0.9vw,12px)] text-cyan-400 font-medium leading-relaxed max-w-lg mb-3">
                  NationwideRoadsideAssist enables enterprise organizations to outsource and scale roadside operations through centralized dispatch infrastructure, intelligent workflow coordination, and nationwide provider ecosystems.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-1.5">
                  <div className="border border-white/10 rounded-lg p-2 bg-slate-900/40 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.3)]">
                    <div className="flex items-center gap-2 mb-1">
                      <Globe size={16} className="text-[#2F80FF]" />
                      <span className="text-[clamp(11px,0.9vw,12.5px)] text-white font-bold uppercase">NATIONWIDE INFRASTRUCTURE</span>
                    </div>
                    <span className="text-[clamp(9.5px,0.8vw,11px)] text-slate-400">Coast-to-Coast Coverage</span>
                  </div>
                  <div className="border border-white/10 rounded-lg p-2 bg-slate-900/40 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.3)]">
                    <div className="flex items-center gap-2 mb-1">
                      <ShieldCheck size={16} className="text-emerald-400" />
                      <span className="text-[clamp(11px,0.9vw,12.5px)] text-white font-bold uppercase">ENTERPRISE GRADE SECURITY</span>
                    </div>
                    <span className="text-[clamp(9.5px,0.8vw,11px)] text-slate-400">Industry-Standard Security Practices & Enterprise Security</span>
                  </div>
                  <div className="border border-white/10 rounded-lg p-2 bg-slate-900/40 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.3)]">
                    <div className="flex items-center gap-2 mb-1">
                      <BrainCircuit size={16} className="text-cyan-400" />
                      <span className="text-[clamp(11px,0.9vw,12.5px)] text-white font-bold uppercase">AI-POWERED DISPATCH</span>
                    </div>
                    <span className="text-[clamp(9.5px,0.8vw,11px)] text-slate-400">Real-Time Routing Intelligence</span>
                  </div>
                </div>
              </div>

              {/* CENTER MAP IMAGE */}
              <div className="lg:col-span-3 h-40 sm:h-56 lg:h-full flex items-center justify-center overflow-hidden relative z-10">
                 <img src="/us-nodes-map.jpg" alt="Nationwide Dispatch Mesh" className="w-full h-full object-contain opacity-90 mix-blend-screen drop-shadow-[0_0_20px_rgba(47,128,255,0.4)] pointer-events-none" />
              </div>

              <div className="lg:col-span-4 border border-white/10 rounded-xl bg-slate-900/40 p-2 relative shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-sm z-10">
                <div className="absolute -top-4 left-4 bg-[#020617] px-2.5 z-20">
                  <span className="text-[clamp(13px,1.4vw,20px)] whitespace-nowrap bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-extrabold tracking-widest uppercase">
                    ENTERPRISE RSA ECOSYSTEM ARCHITECTURE
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 lg:h-full h-auto pt-6 lg:pt-5">
                  <div className="flex items-start gap-2 bg-slate-950/60 p-1.5 rounded border border-white/5">
                    <div className="text-blue-400 shrink-0 mt-0.5"><Layers size={14} /></div>
                    <div>
                      <div className="text-[clamp(10px,0.85vw,11px)] text-white font-bold uppercase mb-0.5">WHITE-LABEL RSA PROGRAMS</div>
                      <div className="text-[clamp(8.5px,0.75vw,10px)] text-slate-400 leading-tight">Branded infrastructure & workflows</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 bg-slate-950/60 p-1.5 rounded border border-white/5">
                    <div className="text-cyan-400 shrink-0 mt-0.5"><Truck size={14} /></div>
                    <div>
                      <div className="text-[clamp(10px,0.85vw,11px)] text-white font-bold uppercase mb-0.5">FLEET PARTNERSHIPS</div>
                      <div className="text-[clamp(8.5px,0.75vw,10px)] text-slate-400 leading-tight">Mobility continuity ecosystems</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 bg-slate-950/60 p-1.5 rounded border border-white/5">
                    <div className="text-emerald-400 shrink-0 mt-0.5"><Activity size={14} /></div>
                    <div>
                      <div className="text-[clamp(10px,0.85vw,11px)] text-white font-bold uppercase mb-0.5">DISPATCH OUTSOURCING</div>
                      <div className="text-[clamp(8.5px,0.75vw,10px)] text-slate-400 leading-tight">Centralized dispatch routing</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 bg-slate-950/60 p-1.5 rounded border border-white/5">
                    <div className="text-purple-400 shrink-0 mt-0.5"><Headphones size={14} /></div>
                    <div>
                      <div className="text-[clamp(10px,0.85vw,11px)] text-white font-bold uppercase mb-0.5">CALL CENTER OPERATIONS</div>
                      <div className="text-[clamp(8.5px,0.75vw,10px)] text-slate-400 leading-tight">24/7 intake & support</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 bg-slate-950/60 p-1.5 rounded border border-white/5">
                    <div className="text-orange-400 shrink-0 mt-0.5"><Users size={14} /></div>
                    <div>
                      <div className="text-[clamp(10px,0.85vw,11px)] text-white font-bold uppercase mb-0.5">VENDOR COORDINATION</div>
                      <div className="text-[clamp(8.5px,0.75vw,10px)] text-slate-400 leading-tight">Provider network orchestration</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 bg-slate-950/60 p-1.5 rounded border border-white/5">
                    <div className="text-pink-400 shrink-0 mt-0.5"><BarChart3 size={14} /></div>
                    <div>
                      <div className="text-[clamp(10px,0.85vw,11px)] text-white font-bold uppercase mb-0.5">REPORTING & VISIBILITY</div>
                      <div className="text-[clamp(8.5px,0.75vw,10px)] text-slate-400 leading-tight">Real-time enterprise analytics</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TIER 2: RSA ECOSYSTEM ARCHITECTURE (25%) */}
            <div className="lg:h-[25%] h-auto shrink-0 min-h-min mt-2">
              <div className="h-full border border-white/10 rounded-xl bg-slate-900/40 relative pt-6 lg:pt-5 pb-2 px-3 flex flex-col justify-center">
                <div className="absolute -top-4 left-4 bg-[#020617] px-2.5 z-20">
                  <span className="text-[clamp(13px,1.4vw,20px)] whitespace-nowrap bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-extrabold tracking-widest uppercase">
                    END-TO-END RSA WORKFLOW INFRASTRUCTURE
                  </span>
                </div>
                <div className="flex items-start justify-between w-full h-full mt-2 relative overflow-x-auto lg:overflow-x-visible whitespace-nowrap lg:whitespace-normal scrollbar-none py-2 gap-6 lg:gap-0">
                  {/* Primary Pipeline Trace */}
                  <div className="hidden lg:block absolute top-6 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-[#2F80FF]/40 to-transparent z-0" />
                  
                  {[
                    { icon: Search, title: "INCIDENT DETECTED", desc: "Automated incident\nvia telematics,\ncall center intake.", num: '01' },
                    { icon: Cpu, title: "VEHICLE DIAGNOSTICS\nVALIDATION", desc: "AI-powered diagnostics\nidentify service\nrequirements and\nseverity.", num: '02' },
                    { icon: Zap, title: "INTELLIGENT VENDOR\nASSIGNMENT", desc: "Proximity-based vendor\nmatching with SLA and\ncapability filtering.", num: '03' },
                    { icon: MapPin, title: "LIVE DISPATCH\nCOORDINATION", desc: "Real-time dispatch with\nGPS tracking and ETA\nintelligence.", num: '04' },
                    { icon: Truck, title: "ROADSIDE RESOLUTION", desc: "On-site service execution\nwith live status updates.", num: '05' },
                    { icon: FileText, title: "AUTOMATED REPORTING\nBILLING", desc: "Invoice generation,\ncompliance reporting,\nand analytics capture.", num: '06' }
                  ].map((step, idx) => (
                    <div key={idx} className="flex flex-col items-center z-10 w-[180px] lg:w-[15%] text-center relative shrink-0 whitespace-normal">
                      {/* The Node Bubble */}
                      <div className="relative w-10 h-10 bg-[#0b1221] border border-[#1e293b] rounded-xl flex items-center justify-center mb-2 shadow-lg z-10">
                        <step.icon size={16} className="text-slate-300" />
                        
                        {/* Step Number */}
                        <div className="absolute -top-1.5 -right-1.5 h-3.5 w-3.5 rounded bg-[#2F80FF] text-white flex items-center justify-center text-[clamp(7px,0.65vw,9px)] font-bold shadow-md">
                           {step.num}
                        </div>
                      </div>

                      {/* Active Telemetry Dot */}
                      <div className="h-1 w-1 rounded-full bg-[#2F80FF] mb-1 opacity-80" />

                      <h3 className="text-[clamp(9.5px,0.85vw,11.5px)] text-white font-extrabold text-center uppercase leading-tight mb-1 whitespace-pre-line">{step.title}</h3>
                      <p className="text-[clamp(8.5px,0.75vw,10px)] text-slate-400 text-center whitespace-pre-line leading-tight">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* TIER 3: OPERATIONAL WORKFLOW & INTEGRATION LAYER (25%) */}
            <div className="lg:h-[25%] h-auto shrink-0 min-h-min mt-2 border border-white/10 rounded-xl bg-slate-900/40 p-2 relative shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-sm">
              <div className="absolute -top-4 left-4 bg-[#020617] px-2.5 z-20">
                <span className="text-[clamp(13px,1.4vw,20px)] whitespace-nowrap bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-extrabold tracking-widest uppercase">
                  OPERATIONAL WORKFLOW & INTEGRATION LAYER
                </span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 lg:h-full h-auto pt-6 lg:pt-5">
                <div className="flex flex-col h-full border border-white/10 rounded-xl bg-slate-900/40 backdrop-blur-md bg-gradient-to-br from-white/5 to-transparent p-2 shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:border-white/20 transition-colors duration-300">
                  <div className="text-[clamp(10px,0.85vw,12px)] text-white font-extrabold uppercase mb-1.5 text-center">FULL RSA WORKFLOW<br/>MANAGEMENT</div>
                  <img src="/workflow-management.png" className="hidden xl:block w-full h-10 object-cover rounded opacity-80 mb-1 border border-white/10" onError={(e) => e.currentTarget.style.display = 'none'} />
                  <div className="flex flex-col gap-0.5 flex-1 mt-auto">
                    {["Roadside Event Intake", "Customer Coordination", "Escalation Management", "Resolution Tracking", "Operational Reporting"].map((t, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <CheckCircle size={9} className="text-emerald-400 shrink-0" />
                        <span className="text-[clamp(9px,0.75vw,10.5px)] text-slate-300 leading-tight">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col h-full border border-white/10 rounded-xl bg-slate-900/40 backdrop-blur-md bg-gradient-to-br from-white/5 to-transparent p-2 shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:border-white/20 transition-colors duration-300">
                  <div className="text-[clamp(10px,0.85vw,12px)] text-white font-extrabold uppercase mb-1.5 text-center">CALL CENTER<br/>OPERATIONS</div>
                  <img src="/callcenter-dashboard.png" className="hidden xl:block w-full h-10 object-cover rounded opacity-80 mb-1 border border-white/10" onError={(e) => e.currentTarget.style.display = 'none'} />
                  <div className="flex flex-col gap-0.5 flex-1 mt-auto">
                    {["24/7 Mobility Support", "Intake & Verification", "Customer Communication", "Incident Coordination"].map((t, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <CheckCircle size={9} className="text-[#2F80FF] shrink-0" />
                        <span className="text-[clamp(9px,0.75vw,10.5px)] text-slate-300 leading-tight">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col h-full border border-white/10 rounded-xl bg-slate-900/40 backdrop-blur-md bg-gradient-to-br from-white/5 to-transparent p-2 shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:border-white/20 transition-colors duration-300">
                  <div className="text-[clamp(10px,0.85vw,12px)] text-white font-extrabold uppercase mb-1.5 text-center">DISPATCH<br/>COORDINATION</div>
                  <img src="/dispatch-coordination-map.png" className="hidden xl:block w-full h-10 object-cover rounded opacity-80 mb-1 border border-white/10" onError={(e) => e.currentTarget.style.display = 'none'} />
                  <div className="flex flex-col gap-0.5 flex-1 mt-auto">
                    {["AI-Powered Routing", "Provider Matching", "Real-Time GPS Tracking", "ETAs & Status Updates"].map((t, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <CheckCircle size={9} className="text-cyan-400 shrink-0" />
                        <span className="text-[clamp(9px,0.75vw,10.5px)] text-slate-300 leading-tight">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col h-full border border-white/10 rounded-xl bg-slate-900/40 backdrop-blur-md bg-gradient-to-br from-white/5 to-transparent p-2 shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:border-white/20 transition-colors duration-300">
                  <div className="text-[clamp(10px,0.85vw,12px)] text-white font-extrabold uppercase mb-1.5 text-center">ESCALATION<br/>MANAGEMENT</div>
                  <img src="/escalation-management.png" className="hidden xl:block w-full h-10 object-cover rounded opacity-80 mb-1 border border-white/10" onError={(e) => e.currentTarget.style.display = 'none'} />
                  <div className="flex flex-col gap-0.5 flex-1 mt-auto">
                    {["High-Priority Incidents", "Critical Event Handling", "Recovery Coordination", "Executive Escalations"].map((t, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <CheckCircle size={9} className="text-orange-400 shrink-0" />
                        <span className="text-[clamp(9px,0.75vw,10.5px)] text-slate-300 leading-tight">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col h-full border border-white/10 rounded-xl bg-slate-900/40 backdrop-blur-md bg-gradient-to-br from-white/5 to-transparent p-2 shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:border-white/20 transition-colors duration-300">
                  <div className="text-[clamp(10px,0.85vw,12px)] text-white font-extrabold uppercase mb-1.5 text-center">REAL-TIME OPERATIONAL<br/>INTELLIGENCE</div>
                  <img src="/dashboard-charts.png" className="hidden xl:block w-full h-10 object-cover rounded opacity-80 mb-1 border border-white/10" onError={(e) => e.currentTarget.style.display = 'none'} />
                  <div className="flex flex-col gap-0.5 flex-1 mt-auto">
                    {["Live Event Monitoring", "Performance Analytics", "SLA & KPI Reporting", "Enterprise Dashboards"].map((t, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <CheckCircle size={9} className="text-emerald-400 shrink-0" />
                        <span className="text-[clamp(9px,0.75vw,10.5px)] text-slate-300 leading-tight">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── FOOTER ── */}
          <div className="shrink-0 border-t border-white/5 bg-[#020810] px-5 py-1.5 flex items-center justify-between relative z-20">
            <div className="flex items-center gap-3">
              <Globe size={11} className="text-[#2F80FF]"/>
              <span className="text-[clamp(10px,0.9vw,12px)] font-bold text-[#2F80FF] uppercase tracking-widest">Areas Served</span>
              {["USA","CANADA"].map((c,i)=>(
                <span key={i} className="text-[clamp(10px,0.9vw,12px)] text-slate-400 font-mono">{c}{i<1&&<span className="text-slate-600 mx-1">|</span>}</span>
              ))}
            </div>
            <div className="flex items-center gap-5 text-[clamp(10px,0.9vw,12px)] font-mono text-slate-500">
              <span className="flex items-center gap-1"><Phone size={9}/> +1-855-613-3131</span>
              <span className="flex items-center gap-1"><Mail size={9}/> partnerships@nationwideroadsideassist.com</span>
              <span className="flex items-center gap-1"><MapPin size={9}/> 11727 East End Avenue, Chino, CA 91710</span>
              <span className="flex items-center gap-1"><Globe size={9}/> www.nationwideroadsideassist.com</span>
            </div>
          </div>
        </section>

      {/* Side dot navigation indicators */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
        {slides.map((slide) => (
          <button
            key={slide.id}
            onClick={() => scrollToSlide(slide.id)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === slide.id
                ? 'bg-cyan-400 scale-125 shadow-[0_0_8px_rgba(34,211,238,0.8)]'
                : 'bg-white/30 hover:bg-white/60'
            }`}
            title={slide.title}
          />
        ))}
      </div>

      

      {/* Slide Navigation Controls */}
      <div className="fixed bottom-6 right-6 z-40 flex gap-2">
        <button
          onClick={() => currentSlide > 0 && scrollToSlide(currentSlide - 1)}
          disabled={currentSlide === 0}
          className="p-2 rounded-xl border border-white/10 bg-slate-950/60 backdrop-blur-md text-white/80 hover:text-white hover:bg-slate-900 disabled:opacity-30 disabled:pointer-events-none transition"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={() => currentSlide < slides.length - 1 && scrollToSlide(currentSlide + 1)}
          disabled={currentSlide === slides.length - 1}
          className="p-2 rounded-xl border border-white/10 bg-slate-950/60 backdrop-blur-md text-white/80 hover:text-white hover:bg-slate-900 disabled:opacity-30 disabled:pointer-events-none transition"
          aria-label="Next Slide"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  </div>
  );
}
