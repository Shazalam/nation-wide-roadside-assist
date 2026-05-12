'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, Activity, MapPin, Shield, Zap, 
  Terminal, Globe, Clock, BarChart3, Radio, 
  TrendingUp, ArrowUpRight, CheckCircle, Database
} from 'lucide-react';

const liveClaims = [
  { id: 'CLM-8821', carrier: 'Allstate', type: 'Roadside Assist', status: 'validated', eta: '14 min', priority: 'high' },
  { id: 'CLM-7742', carrier: 'Geico', type: 'Towing Dispatch', status: 'dispatched', eta: '28 min', priority: 'critical' },
  { id: 'CLM-1109', carrier: 'AAA', type: 'Winch-Out', status: 'active', eta: '42 min', priority: 'medium' },
  { id: 'CLM-3392', carrier: 'State Farm', type: 'Mobile Repair', status: 'pending', eta: 'N/A', priority: 'high' },
];

function LivePulse() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
    </span>
  );
}

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(p => (p + 1) % liveClaims.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-12 overflow-hidden bg-[#081120]">
      {/* Ambient background effects */}
      <div className="absolute top-0 right-0 w-[1200px] h-[900px] bg-[#2F80FF]/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[900px] h-[700px] bg-[#FF7A1A]/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 items-center">
          
          {/* ── LEFT CONTENT ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-[#94A3B8] font-mono mb-10">
              <span>Solutions</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#2F80FF]" />
              <span className="text-white">Insurance Programs</span>
            </div>

            <h1 className="text-5xl lg:text-[5.5rem] font-black tracking-tighter leading-[0.9] mb-10">
              Enterprise Roadside 
              <span className="block mt-2 bg-gradient-to-r from-[#2F80FF] via-[#00C6FF] to-[#2F80FF] bg-clip-text text-transparent">
                Infrastructure
              </span>
            </h1>

            <p className="text-xl text-[#94A3B8] mb-14 max-w-xl leading-relaxed">
              Nationwide dispatch intelligence, SLA-driven roadside operations, and API-first claims workflows engineered for insurers, motor clubs, and enterprise mobility providers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-20">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(47,128,255,0.4)' }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 bg-[#2F80FF] text-white rounded-2xl font-bold text-sm uppercase tracking-widest shadow-lg flex items-center justify-center gap-3 group"
              >
                Schedule Enterprise Demo
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 bg-transparent border border-white/10 text-white rounded-2xl font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3"
              >
                View API Documentation <Terminal className="w-4 h-4 text-[#2F80FF]" />
              </motion.button>
            </div>

            {/* KPI Metric Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/5">
              {[
                { value: '97.8%', label: 'SLA Compliance', icon: Activity, color: '#2F80FF' },
                { value: '2.4M+', label: 'Dispatch Events', icon: Database, color: '#FF7A1A' },
                { value: 'Nationwide', label: 'Vendor Coverage', icon: Globe, color: '#2F80FF' },
                { value: '24/7', label: 'Enterprise Ops', icon: Clock, color: '#FF7A1A' },
              ].map((kpi, i) => {
                const Icon = kpi.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-2 rounded-lg bg-white/5">
                        <Icon className="w-4 h-4" style={{ color: kpi.color }} />
                      </div>
                      <span className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-[0.2em]">{kpi.label}</span>
                    </div>
                    <div className="text-3xl font-black text-white">{kpi.value}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ── RIGHT DASHBOARD ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative"
          >
            {/* Main Dashboard Panel */}
            <div className="relative bg-[#0A192F]/80 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.9)]">
              
              {/* Terminal Header */}
              <div className="bg-[#081120] px-8 py-5 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/30" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                    <div className="w-3 h-3 rounded-full bg-green-500/30" />
                  </div>
                  <div className="h-4 w-[1px] bg-white/10 mx-2" />
                  <span className="text-[11px] font-mono text-[#94A3B8] tracking-widest">INSURANCE_CORE_V4.2 // LIVE_TELEMETRY</span>
                </div>
                <div className="flex items-center gap-3 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                  <LivePulse />
                  <span className="text-[10px] font-mono text-blue-400 font-bold tracking-widest uppercase">Operational Mesh Active</span>
                </div>
              </div>

              <div className="p-8 space-y-8">
                {/* Top Quick Stats */}
                <div className="grid grid-cols-4 gap-4">
                   {[
                     { label: 'Active Incidents', val: '1,247', up: true, delta: '+12.5%' },
                     { label: 'Avg Dispatch', val: '18.4m', up: false, delta: '-8.2%' },
                     { label: 'First Call Res', val: '93.6%', up: true, delta: '+5.7%' },
                     { label: 'Satisfaction', val: '4.8/5', up: true, delta: '+3.2%' },
                   ].map((s, i) => (
                     <div key={i} className="bg-[#081120] rounded-2xl p-5 border border-white/5">
                        <div className="text-[9px] text-[#94A3B8] uppercase tracking-[0.2em] mb-2">{s.label}</div>
                        <div className="text-2xl font-black text-white font-mono">{s.val}</div>
                        <div className={`text-[10px] font-mono mt-1 ${s.up ? 'text-emerald-400' : 'text-blue-400'}`}>{s.delta}</div>
                     </div>
                   ))}
                </div>

                {/* Main Visualization Grid */}
                <div className="grid grid-cols-12 gap-6">
                  {/* Map / Heatmap Proxy */}
                  <div className="col-span-8 bg-[#081120] rounded-3xl border border-white/5 relative overflow-hidden h-[450px]">
                    <div className="absolute inset-0 opacity-40 pointer-events-none">
                       {/* Grid Backdrop */}
                       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(47,128,255,0.15)_0%,transparent_70%)]" />
                       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px]" />
                    </div>

                    {/* Live Tracking Visualization (SVG Map Proxy) */}
                    <svg viewBox="0 0 600 350" className="absolute inset-0 w-full h-full p-12">
                       <path d="M50,150 Q150,100 250,150 T450,150" fill="none" stroke="rgba(47,128,255,0.1)" strokeWidth="40" strokeLinecap="round" />
                       <path d="M100,50 L500,300" fill="none" stroke="rgba(255,122,26,0.1)" strokeWidth="30" strokeLinecap="round" />
                       
                       {/* Animated Nodes */}
                       {[
                         { x: 120, y: 140, color: '#2F80FF' },
                         { x: 420, y: 280, color: '#FF7A1A' },
                         { x: 280, y: 100, color: '#2F80FF' },
                         { x: 480, y: 60, color: '#2F80FF' },
                       ].map((node, idx) => (
                         <motion.g key={idx} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: idx * 0.2 }}>
                            <motion.circle 
                              cx={node.x} cy={node.y} r="12" 
                              fill={node.color} opacity="0.2"
                              animate={{ scale: [1, 1.8, 1] }} 
                              transition={{ duration: 3, repeat: Infinity }}
                            />
                            <circle cx={node.x} cy={node.y} r="4" fill={node.color} />
                         </motion.g>
                       ))}
                    </svg>

                    <div className="absolute top-6 left-6 flex items-center gap-3">
                       <div className="bg-[#0A192F]/90 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-xl flex items-center gap-3">
                          <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
                          <span className="text-[10px] font-mono text-white font-bold uppercase">Usa Dispatch Heatmap</span>
                       </div>
                    </div>

                    {/* Floating Incident Notification */}
                    <motion.div 
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      className="absolute bottom-6 right-6 bg-[#0A192F]/90 backdrop-blur-xl border border-white/10 p-5 rounded-2xl w-64 shadow-2xl"
                    >
                      <div className="flex items-center gap-3 mb-3">
                         <div className="p-2 rounded-lg bg-blue-500/10">
                            <Shield className="w-4 h-4 text-blue-400" />
                         </div>
                         <div>
                            <div className="text-[10px] font-black text-white">ACTIVE INCIDENT</div>
                            <div className="text-[9px] text-[#94A3B8]">I-95 North, Florida</div>
                         </div>
                      </div>
                      <div className="flex justify-between items-end">
                         <div className="text-[14px] font-mono text-white font-bold">ETA 18 min • Tow</div>
                         <div className="flex gap-1">
                            <div className="w-1 h-3 bg-blue-500 rounded-full" />
                            <div className="w-1 h-3 bg-blue-500 rounded-full" />
                            <div className="w-1 h-3 bg-white/10 rounded-full" />
                         </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Sidebar Analytics */}
                  <div className="col-span-4 space-y-6">
                    {/* Dispatch Summary */}
                    <div className="bg-[#081120] rounded-3xl border border-white/5 p-6">
                       <div className="text-[11px] font-black text-white uppercase tracking-widest mb-6">Dispatch Summary</div>
                       <div className="space-y-4">
                          {[
                            { label: 'Towing', val: 512, color: '#2F80FF' },
                            { label: 'Roadside Assistance', val: 384, color: '#FF7A1A' },
                            { label: 'Battery Service', val: 178, color: '#94A3B8' },
                            { label: 'Tire Service', val: 96, color: '#2F80FF' },
                            { label: 'Fuel Delivery', val: 77, color: '#FF7A1A' },
                          ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between">
                               <div className="flex items-center gap-3">
                                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                                  <span className="text-[10px] text-[#94A3B8] font-medium">{item.label}</span>
                               </div>
                               <span className="text-[10px] font-mono text-white font-bold">{item.val}</span>
                            </div>
                          ))}
                       </div>
                       <button className="w-full mt-6 py-2 text-[9px] font-black text-[#2F80FF] uppercase tracking-widest border border-[#2F80FF]/20 rounded-lg hover:bg-[#2F80FF]/10 transition-colors">
                          View All
                       </button>
                    </div>

                    {/* Live Claims Pulse */}
                    <div className="bg-[#081120] rounded-3xl border border-white/5 p-6 overflow-hidden">
                       <div className="flex justify-between items-center mb-6">
                          <span className="text-[11px] font-black text-white uppercase tracking-widest">Incidents (7 Days)</span>
                          <span className="text-[11px] font-mono text-emerald-400">2.4M +</span>
                       </div>
                       <div className="flex items-end gap-1 h-20">
                          {[40, 60, 45, 80, 55, 90, 70].map((h, i) => (
                            <div key={i} className="flex-1 bg-blue-500/20 rounded-t-sm relative group overflow-hidden">
                               <motion.div 
                                 initial={{ height: 0 }}
                                 animate={{ height: `${h}%` }}
                                 className="absolute bottom-0 left-0 w-full bg-blue-500 transition-all group-hover:bg-blue-400" 
                               />
                            </div>
                          ))}
                       </div>
                       <div className="flex justify-between mt-3 px-1">
                          {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d => (
                            <span key={d} className="text-[8px] text-[#94A3B8] uppercase">{d[0]}</span>
                          ))}
                       </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Live Feed Row */}
                <div className="bg-[#081120] rounded-3xl border border-white/5 p-4 flex items-center justify-between overflow-hidden">
                   <div className="flex items-center gap-4 px-4 overflow-x-auto no-scrollbar whitespace-nowrap">
                      <div className="text-[10px] font-black text-[#2F80FF] uppercase tracking-widest mr-4">Live Incident Feed</div>
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeIndex}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-6"
                        >
                          <span className="text-[11px] font-mono text-white/80">
                            <span className="text-blue-400 font-bold">{liveClaims[activeIndex].id}</span> // {liveClaims[activeIndex].carrier}
                          </span>
                          <span className="text-[11px] font-mono text-[#94A3B8] uppercase">
                            Type: <span className="text-white">{liveClaims[activeIndex].type}</span>
                          </span>
                          <span className="text-[11px] font-mono text-[#94A3B8] uppercase">
                            ETA: <span className="text-emerald-400">{liveClaims[activeIndex].eta}</span>
                          </span>
                          <div className={`px-2 py-0.5 rounded text-[8px] font-black uppercase ${
                            liveClaims[activeIndex].priority === 'critical' ? 'bg-red-500/20 text-red-400' : 'bg-blue-500/20 text-blue-400'
                          }`}>
                            {liveClaims[activeIndex].priority}
                          </div>
                        </motion.div>
                      </AnimatePresence>
                   </div>
                   <div className="flex gap-2 pr-4">
                      <button className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                         <ArrowUpRight className="w-4 h-4 text-[#94A3B8]" />
                      </button>
                   </div>
                </div>
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-12 -right-12 bg-white/5 backdrop-blur-2xl border border-white/10 p-6 rounded-3xl shadow-2xl z-20"
            >
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2F80FF] to-blue-700 flex items-center justify-center">
                     <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                     <div className="text-2xl font-black text-white font-mono">99.1%</div>
                     <div className="text-[9px] text-[#94A3B8] uppercase tracking-widest">Network Optimization</div>
                  </div>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
