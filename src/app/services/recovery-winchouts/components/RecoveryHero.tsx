'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, Activity, Database, Globe, Clock, Terminal, Shield, Zap, Truck
} from 'lucide-react';

const liveIncidents = [
  { id: 'INC-7821', type: 'Class 8 Rollover', location: 'I-95 North, FL', status: 'In-Progress', eta: '18 min', priority: 'critical' },
  { id: 'INC-8832', type: 'Off-Road Recovery', location: 'I-80, WY', status: 'En-Route', eta: '32 min', priority: 'high' },
  { id: 'INC-9910', type: 'Hazmat Towing', location: 'NJ Turnpike', status: 'Active', eta: '12 min', priority: 'critical' },
];

export const RecoveryHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(p => (p + 1) % liveIncidents.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-24 pb-12 lg:pt-28 lg:pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden bg-brand-bg min-h-[90vh] lg:min-h-screen flex items-center">
      {/* Cinematic Enterprise Atmosphere */}
      <div className="absolute top-0 right-0 w-[1200px] h-[900px] bg-[#2F80FF]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[900px] h-[700px] bg-[#FF7A1A]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(47,128,255,0.05)_0%,transparent_80%)] pointer-events-none" />

      <div className="max-w-[1536px] mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ── LEFT CONTENT (xl:col-span-5) ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="xl:col-span-5 flex flex-col"
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[10px] font-black text-brand-slate uppercase tracking-[0.2em] mb-6">
              <span className="hover:text-foreground dark:text-white transition-colors cursor-pointer">Services</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#2F80FF]" />
              <span className="text-[#2F80FF]">Recovery & Winch-Outs</span>
            </div>

            <h1 className="text-4xl lg:text-[3.5rem] xl:text-[4rem] font-black tracking-tighter text-foreground dark:text-white leading-[1.05] mb-6 drop-shadow-lg">
              Enterprise Recovery <br />
              <span className="text-[#2F80FF]">Intelligence</span>
            </h1>

            <p className="text-base lg:text-lg text-brand-slate mb-8 max-w-lg leading-relaxed font-medium">
              Real-time recovery dispatch coordination, nationwide heavy-duty response infrastructure, and API-first incident management systems engineered for mission-critical scale.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3.5 bg-[#2F80FF] text-foreground dark:text-white rounded-xl font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 group shadow-[0_0_20px_rgba(47,128,255,0.3)] hover:shadow-[0_0_30px_rgba(47,128,255,0.5)] transition-all"
              >
                Schedule Recovery Demo
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3.5 bg-card/50 backdrop-blur-md border border-brand-border text-foreground dark:text-white rounded-xl font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 transition-colors hover:border-white/20"
              >
                Explore Recovery APIs <Terminal className="w-4 h-4 text-brand-slate" />
              </motion.button>
            </div>

            {/* Premium KPI Metric Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { value: '99.1%', label: 'Recovery Coverage', icon: Shield },
                { value: '3.2M+', label: 'Annual Events', icon: Database },
                { value: 'Nationwide', label: 'Response Network', icon: Globe },
                { value: '24/7', label: 'Command Center', icon: Clock },
              ].map((kpi, i) => {
                const Icon = kpi.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="bg-card/60 backdrop-blur-md border border-brand-border rounded-xl p-3.5 hover:border-[#2F80FF]/40 transition-colors group"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 rounded-md bg-brand-bg border border-brand-border group-hover:border-[#2F80FF]/30 transition-colors">
                        <Icon className="w-3.5 h-3.5 text-[#2F80FF]" />
                      </div>
                    </div>
                    <div className="text-lg lg:text-xl font-black text-foreground dark:text-white mb-1 tracking-tighter">{kpi.value}</div>
                    <div className="text-[8px] font-black text-brand-slate uppercase tracking-widest leading-tight">{kpi.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ── RIGHT DASHBOARD (xl:col-span-7) ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="xl:col-span-7 relative"
          >
            {/* Cinematic Dashboard Container */}
            <div className="relative bg-[#070D18]/90 backdrop-blur-3xl border border-brand-border rounded-[32px] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)] p-5 lg:p-8">
              
              {/* Top KPIs Row */}
              <div className="grid grid-cols-4 gap-4 pb-6 border-b border-brand-border mb-8">
                {[
                  { label: 'Active Recoveries', val: '1,248', delta: '+8.3%', pos: true },
                  { label: 'Avg. Arrival Time', val: '32.4 min', delta: '-12.3%', pos: true },
                  { label: 'Asset Extraction', val: '98.6%', delta: '+5.7%', pos: true },
                  { label: 'Service Efficiency', val: '4.9/5', delta: '+3.2%', pos: true },
                ].map((s, i) => (
                  <div key={i} className="flex flex-col">
                    <div className="text-[10px] text-brand-slate font-black uppercase tracking-widest mb-1 truncate">{s.label}</div>
                    <div className="flex items-baseline gap-1.5">
                       <span className="text-lg lg:text-2xl font-black text-foreground dark:text-white tracking-tighter">{s.val}</span>
                       <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-full ${s.pos ? 'text-emerald-400 bg-emerald-400/10' : 'text-rose-400 bg-rose-400/10'}`}>{s.delta}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Main Dashboard Split */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Map Area */}
                <div className="lg:col-span-7 bg-[#0B1221] rounded-2xl border border-brand-border relative overflow-hidden h-[300px] lg:h-[400px]">
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                     <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                     <span className="text-[10px] font-black text-foreground dark:text-white uppercase tracking-widest">Live Recovery Mesh</span>
                  </div>
                  
                  {/* Grid Lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

                  {/* Telemetry Dots & Connections */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400">
                     {/* Dynamic Paths */}
                     <path d="M150,150 L300,200 L450,100 L600,250" fill="none" stroke="rgba(47,128,255,0.2)" strokeWidth="1" />
                     <path d="M300,200 L400,300 L550,220" fill="none" stroke="rgba(47,128,255,0.2)" strokeWidth="1" />
                     
                     {/* Recovery Nodes */}
                     {[
                       {cx: 150, cy: 150}, {cx: 300, cy: 200}, {cx: 450, cy: 100}, {cx: 600, cy: 250},
                       {cx: 400, cy: 300}, {cx: 550, cy: 220}, {cx: 200, cy: 280}, {cx: 500, cy: 180}
                     ].map((dot, i) => (
                        <g key={i}>
                          <circle cx={dot.cx} cy={dot.cy} r="3" fill="#2F80FF" className="animate-pulse" style={{animationDelay: `${i * 0.2}s`}} />
                          <circle cx={dot.cx} cy={dot.cy} r="10" fill="#2F80FF" opacity="0.1" />
                        </g>
                     ))}

                     {/* Active Heavy Duty Event */}
                     <g>
                       <circle cx="550" cy="220" r="4" fill="#FF7A1A" />
                       <circle cx="550" cy="220" r="12" fill="#FF7A1A" opacity="0.3" className="animate-ping" />
                     </g>
                  </svg>

                  {/* Dynamic Incident Popover */}
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={activeIndex}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      className="absolute top-[30%] right-[10%] bg-card/95 backdrop-blur-xl border border-brand-border rounded-xl p-4 shadow-[0_0_40px_rgba(47,128,255,0.25)] w-48"
                    >
                       <div className="flex justify-between items-start mb-3">
                          <span className="text-[10px] font-black text-foreground dark:text-white uppercase tracking-widest">{liveIncidents[activeIndex].id}</span>
                          <Truck className="h-3 w-3 text-[#2F80FF]" />
                       </div>
                       <div className="text-[12px] text-foreground dark:text-white font-black uppercase mb-1">{liveIncidents[activeIndex].type}</div>
                       <div className="text-[10px] text-brand-slate font-bold mb-3 uppercase tracking-tighter">{liveIncidents[activeIndex].location}</div>
                       <div className="flex items-center justify-between pt-3 border-t border-brand-border">
                          <span className="text-[9px] font-black text-emerald-400 uppercase">ETA {liveIncidents[activeIndex].eta}</span>
                          <span className="text-[8px] font-black text-[#2F80FF] uppercase">Tracking Live</span>
                       </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Right Side Sidebar */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  
                  {/* Live Fleet Availability */}
                  <div className="bg-[#0B1221] rounded-2xl border border-brand-border p-5 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                       <div className="text-[11px] font-black text-foreground dark:text-white uppercase tracking-widest">Fleet Availability</div>
                       <div className="flex items-center gap-1.5 bg-emerald-400/10 px-2 py-0.5 rounded-full">
                          <div className="h-1 w-1 rounded-full bg-emerald-400" />
                          <span className="text-[8px] font-black text-emerald-400 uppercase">Active</span>
                       </div>
                    </div>
                    <div className="space-y-4">
                      {[
                        { label: 'Heavy Duty Rotators', val: '142', progress: 85 },
                        { label: 'Medium Duty Units', val: '384', progress: 92 },
                        { label: 'Recovery Flatbeds', val: '612', progress: 78 },
                        { label: 'Support Equipment', val: '1,204', progress: 95 },
                      ].map((item, i) => (
                        <div key={i} className="space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] text-brand-slate font-black uppercase tracking-widest">{item.label}</span>
                            <span className="text-[10px] font-bold text-foreground dark:text-white font-mono">{item.val}</span>
                          </div>
                          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                             <motion.div 
                               initial={{ width: 0 }}
                               whileInView={{ width: `${item.progress}%` }}
                               transition={{ duration: 1, delay: i * 0.1 }}
                               className="h-full bg-[#2F80FF]"
                             />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto pt-6">
                       <button className="w-full h-11 bg-white/5 border border-brand-border rounded-xl text-[10px] font-black text-foreground dark:text-white uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                          View Fleet Intel <ArrowUpRight className="w-3 h-3 text-[#2F80FF]" />
                       </button>
                    </div>
                  </div>

                  {/* Recovery Load Line Chart */}
                  <div className="bg-[#0B1221] rounded-2xl border border-brand-border p-5 h-[120px] lg:h-[140px] flex flex-col justify-between relative overflow-hidden">
                    <div className="flex justify-between items-center z-10 relative">
                      <span className="text-[11px] font-black text-foreground dark:text-white uppercase tracking-widest">Incident Load (24h)</span>
                      <span className="text-[11px] font-mono font-bold text-[#2F80FF]">STABLE_OPS</span>
                    </div>
                    
                    {/* SVG Line Chart */}
                    <div className="absolute bottom-0 left-0 right-0 h-[60px] lg:h-[70px]">
                      <svg viewBox="0 0 300 70" className="w-full h-full" preserveAspectRatio="none">
                         <path d="M0,70 L0,40 Q45,20 90,50 T180,30 T270,45 T300,35 L300,70 Z" fill="rgba(47,128,255,0.05)" />
                         <path d="M0,40 Q45,20 90,50 T180,30 T270,45 T300,35" fill="none" stroke="#2F80FF" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ArrowUpRight = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);
