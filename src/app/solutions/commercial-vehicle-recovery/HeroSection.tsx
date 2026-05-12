'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight, Activity, MapPin, Truck, AlertTriangle,
  Clock, Users, Globe, ArrowUp, ArrowDown, Shield,
  Zap, BarChart3, Radio, Terminal, TrendingUp
} from 'lucide-react';

const liveRecoveryIncidents = [
  { id: 'CV-9021', type: 'Super Heavy Recovery', location: 'I-95, New Jersey', eta: '18 min', status: 'en-route', priority: 'critical' },
  { id: 'CV-4482', type: 'Trailer Recovery', location: 'I-80, Nebraska', eta: '32 min', status: 'assigned', priority: 'high' },
  { id: 'CV-1109', type: 'Winch-Out Operation', location: 'Route 66, Arizona', eta: '45 min', status: 'dispatched', priority: 'medium' },
  { id: 'CV-7723', type: 'Mobile Repair Dispatch', location: 'Port of Savannah, GA', eta: '12 min', status: 'active', priority: 'high' },
];

const weeklyFleetData = [
  { day: 'Mon', completed: 142, pending: 12 },
  { day: 'Tue', completed: 156, pending: 8 },
  { day: 'Wed', completed: 138, pending: 18 },
  { day: 'Thu', completed: 164, pending: 6 },
  { day: 'Fri', completed: 148, pending: 10 },
  { day: 'Sat', completed: 172, pending: 5 },
  { day: 'Sun', completed: 158, pending: 7 },
];

function LivePulse() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
    </span>
  );
}

function ProgressCircle({ value, label }: { value: number; label: string }) {
  const r = 28;
  const circ = 2 * Math.PI * r;
  const offset = circ - (value / 100) * circ;
  return (
    <div className="flex items-center gap-3">
      <svg width="64" height="64" viewBox="0 0 72 72">
        <circle cx="36" cy="36" r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
        <circle cx="36" cy="36" r={r} fill="none" stroke="#2F80FF" strokeWidth="6"
          strokeDasharray={circ} strokeDashoffset={offset}
          strokeLinecap="round" transform="rotate(-90 36 36)" />
        <text x="36" y="40" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="monospace">
          {value}%
        </text>
      </svg>
      <div>
        <div className="text-[10px] text-[#94A3B8] uppercase tracking-wider">{label}</div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(p => (p + 1) % liveRecoveryIncidents.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-12 overflow-hidden bg-[#081120]">
      {/* Ambient background effects */}
      <div className="absolute top-0 right-0 w-[1000px] h-[800px] bg-[#2F80FF]/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[600px] bg-[#FF7A1A]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          
          {/* ── LEFT CONTENT ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#94A3B8] font-mono mb-8">
              <span>Solutions</span>
              <ChevronRight className="w-3 h-3 text-[#2F80FF]" />
              <span className="text-white">Commercial Vehicle Recovery</span>
            </div>

            <h1 className="text-5xl lg:text-[5rem] font-black tracking-tighter leading-[0.95] mb-8">
              Enterprise Commercial
              <span className="block bg-gradient-to-r from-[#2F80FF] via-[#00C6FF] to-[#2F80FF] bg-clip-text text-transparent">
                Recovery Infrastructure
              </span>
            </h1>

            <p className="text-lg text-[#94A3B8] mb-12 max-w-xl leading-relaxed">
              Nationwide heavy-duty dispatch intelligence, commercial vehicle recovery operations, and API-first roadside infrastructure engineered for fleets, logistics providers, insurers, and enterprise mobility ecosystems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 mb-16">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(47,128,255,0.4)' }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 bg-[#2F80FF] text-white rounded-xl font-bold text-sm uppercase tracking-widest shadow-lg flex items-center justify-center gap-3 group"
              >
                Schedule Enterprise Demo
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 bg-transparent border border-white/10 text-white rounded-xl font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3"
              >
                Explore Recovery APIs <Terminal className="w-4 h-4 text-[#2F80FF]" />
              </motion.button>
            </div>

            {/* KPI Metric Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/5">
              {[
                { value: '99.1%', label: 'Dispatch Coverage', icon: Activity, color: '#2F80FF' },
                { value: '3.2M+', label: 'Annual Recovery Events', icon: Globe, color: '#FF7A1A' },
                { value: 'Nationwide', label: 'Vendor Network', icon: MapPin, color: '#2F80FF' },
                { value: '24/7', label: 'Fleet Operations', icon: Clock, color: '#FF7A1A' },
              ].map((kpi, i) => {
                const Icon = kpi.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <div className="p-1.5 rounded bg-white/5">
                        <Icon className="w-3.5 h-3.5" style={{ color: kpi.color }} />
                      </div>
                      <span className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-widest">{kpi.label}</span>
                    </div>
                    <div className="text-2xl font-black text-white">{kpi.value}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ── RIGHT DASHBOARD ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* Dashboard Container */}
            <div className="relative bg-[#0A192F]/80 backdrop-blur-3xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
              
              {/* Header */}
              <div className="bg-[#081120] px-6 py-4 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  </div>
                  <span className="text-[11px] font-mono text-[#94A3B8] ml-2">Fleet Operations Intelligence System v4.2.1</span>
                </div>
                <div className="flex items-center gap-2">
                  <LivePulse />
                  <span className="text-[10px] font-mono text-blue-400">OPERATIONAL MESH ACTIVE</span>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'Active Recoveries', value: '142', delta: '+12.4%', up: true },
                    { label: 'Fleet Assets', value: '4,892', delta: '+5.2%', up: true },
                    { label: 'Network Load', value: '84%', delta: '-2.1%', up: false },
                  ].map((stat, i) => (
                    <div key={i} className="bg-[#081120] rounded-xl p-4 border border-white/5">
                      <div className="text-[10px] text-[#94A3B8] uppercase tracking-widest mb-2">{stat.label}</div>
                      <div className="text-2xl font-black text-white font-mono">{stat.value}</div>
                      <div className={`text-[10px] font-mono mt-1 flex items-center gap-1 ${stat.up ? 'text-emerald-400' : 'text-blue-400'}`}>
                        {stat.up ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                        {stat.delta}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Main Visualization Area */}
                <div className="grid grid-cols-5 gap-4">
                  {/* Response Time Chart */}
                  <div className="col-span-3 bg-[#081120] rounded-xl p-4 border border-white/5">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-[10px] text-[#94A3B8] uppercase tracking-widest">Avg. Response Performance</div>
                      <span className="text-xl font-bold text-white font-mono">24.8<span className="text-xs text-[#94A3B8]">m</span></span>
                    </div>
                    {/* Sparkline Visual */}
                    <svg viewBox="0 0 300 80" className="w-full h-24 overflow-visible">
                      <defs>
                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#2F80FF" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#2F80FF" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0,70 L40,65 L80,72 L120,40 L160,55 L200,30 L240,45 L300,20"
                        fill="none" stroke="#2F80FF" strokeWidth="2" strokeLinecap="round" />
                      <path d="M0,70 L40,65 L80,72 L120,40 L160,55 L200,30 L240,45 L300,20 V80 H0 Z"
                        fill="url(#chartGrad)" />
                      <motion.circle
                        cx="300" cy="20" r="3" fill="#2F80FF"
                        animate={{ r: [3, 6, 3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </svg>
                  </div>

                  {/* Incident Alert */}
                  <div className="col-span-2 bg-[#081120] rounded-xl p-4 border border-white/5 flex flex-col justify-between">
                    <div className="flex items-center gap-2 mb-4">
                      <AlertTriangle className="w-4 h-4 text-[#FF7A1A]" />
                      <span className="text-[10px] font-bold text-[#FF7A1A] uppercase tracking-widest">Priority Dispatch</span>
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-1"
                      >
                        <div className="text-[11px] font-black text-white">{liveRecoveryIncidents[activeIndex].id}</div>
                        <div className="text-[10px] text-[#94A3B8]">{liveRecoveryIncidents[activeIndex].type}</div>
                        <div className="text-[10px] text-[#94A3B8] flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {liveRecoveryIncidents[activeIndex].location}
                        </div>
                        <div className="mt-3 py-1.5 px-3 bg-blue-500/10 border border-blue-500/20 rounded flex items-center justify-between">
                          <span className="text-[9px] font-mono text-blue-400 uppercase tracking-widest">ETA Analytics</span>
                          <span className="text-[10px] font-bold text-white font-mono">{liveRecoveryIncidents[activeIndex].eta}</span>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-3 gap-4">
                  {/* Service Mix */}
                  <div className="bg-[#081120] rounded-xl p-4 border border-white/5">
                    <div className="text-[9px] text-[#94A3B8] uppercase tracking-widest mb-3">Operational Mix</div>
                    <div className="space-y-3">
                      {[
                        { label: 'Heavy Tow', val: 68, color: '#2F80FF' },
                        { label: 'Winch-Out', val: 14, color: '#FF7A1A' },
                        { label: 'Mobile Repair', val: 18, color: '#94A3B8' },
                      ].map(item => (
                        <div key={item.label}>
                          <div className="flex justify-between text-[9px] mb-1">
                            <span className="text-[#94A3B8]">{item.label}</span>
                            <span className="text-white font-mono">{item.val}%</span>
                          </div>
                          <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full rounded-full" style={{ width: `${item.val}%`, backgroundColor: item.color }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Weekly Load */}
                  <div className="bg-[#081120] rounded-xl p-4 border border-white/5">
                    <div className="text-[9px] text-[#94A3B8] uppercase tracking-widest mb-3">7-Day Event Load</div>
                    <div className="flex items-end gap-1.5 h-16">
                      {weeklyFleetData.map((d, i) => (
                        <div key={i} className="flex-1 group relative">
                          <div className="w-full bg-blue-500/20 rounded-t-sm transition-all group-hover:bg-blue-500/40" 
                               style={{ height: `${(d.completed / 180) * 100}%` }} />
                          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[8px] font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity">
                            {d.completed}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-2 px-0.5">
                      {['M','T','W','T','F','S','S'].map((day, i) => (
                        <span key={i} className="text-[8px] text-[#94A3B8]">{day}</span>
                      ))}
                    </div>
                  </div>

                  {/* SLA Metrics */}
                  <div className="bg-[#081120] rounded-xl p-4 border border-white/5 flex flex-col items-center justify-center">
                    <div className="text-[9px] text-[#94A3B8] uppercase tracking-widest mb-2">SLA Compliance</div>
                    <ProgressCircle value={99.1} label="" />
                    <div className="mt-2 text-[9px] font-mono text-emerald-400 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> AT PEAK PERFORMANCE
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Telemetry Tags */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-10 -right-6 bg-white/5 backdrop-blur-xl border border-white/10 p-3 rounded-xl shadow-2xl z-10"
            >
              <div className="flex items-center gap-2">
                <Radio className="w-3 h-3 text-red-500" />
                <span className="text-[10px] font-bold text-white font-mono uppercase">Live Signal Tracking</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
