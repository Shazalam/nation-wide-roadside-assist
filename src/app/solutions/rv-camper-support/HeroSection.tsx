'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight, Activity, MapPin, Truck, AlertTriangle,
  Clock, Users, Globe, ArrowUp, ArrowDown, Shield,
  Zap, RefreshCw, Radio, TrendingUp, CheckCircle
} from 'lucide-react';

const liveIncidents = [
  { id: 'RV4162', type: 'Class A Recovery', location: 'I-70, Colorado', eta: '22 min', status: 'active', priority: 'high' },
  { id: 'RV7821', type: 'Tire Blowout', location: 'Yellowstone NP', eta: '35 min', status: 'dispatched', priority: 'medium' },
  { id: 'RV3309', type: 'Engine Derate', location: 'I-90, Montana', eta: '48 min', status: 'en-route', priority: 'high' },
  { id: 'RV5501', type: 'Flat Service', location: 'Zion NP, UT', eta: '14 min', status: 'active', priority: 'low' },
];

const weeklyData = [
  { day: 'Mon', completed: 87, pending: 9 },
  { day: 'Tue', completed: 92, pending: 6 },
  { day: 'Wed', completed: 78, pending: 14 },
  { day: 'Thu', completed: 95, pending: 4 },
  { day: 'Fri', completed: 88, pending: 8 },
  { day: 'Sat', completed: 96, pending: 3 },
  { day: 'Sun', completed: 91, pending: 5 },
];

function LiveDot() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
    </span>
  );
}

function DonutChart({ value, label }: { value: number; label: string }) {
  const r = 28;
  const circ = 2 * Math.PI * r;
  const offset = circ - (value / 100) * circ;
  return (
    <div className="flex items-center gap-3">
      <svg width="72" height="72" viewBox="0 0 72 72">
        <circle cx="36" cy="36" r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
        <circle cx="36" cy="36" r={r} fill="none" stroke="#2F80FF" strokeWidth="6"
          strokeDasharray={circ} strokeDashoffset={offset}
          strokeLinecap="round" transform="rotate(-90 36 36)" />
        <text x="36" y="40" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="monospace">
          {value}%
        </text>
      </svg>
      <div>
        <div className="text-xs text-[#94A3B8] uppercase tracking-widest">{label}</div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [activeIncident, setActiveIncident] = useState(0);
  const [counter, setCounter] = useState({ active: 12842, onRoad: 8675, incidents: 156 });

  useEffect(() => {
    const iv = setInterval(() => {
      setActiveIncident(p => (p + 1) % liveIncidents.length);
    }, 3000);
    return () => clearInterval(iv);
  }, []);

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-[#2F80FF]/8 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-[#FF7A1A]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto">
        {/* Enterprise badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#2F80FF]/10 border border-[#2F80FF]/20 rounded-full mb-8"
        >
          <Zap className="w-3 h-3 text-[#2F80FF]" />
          <span className="text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.3em]">Enterprise RV Mobility Solutions</span>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-16 items-start">
          {/* ── LEFT COLUMN ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-[#94A3B8] font-mono mb-6">
              <span>Solutions</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-[#2F80FF]">RV &amp; Camper Support</span>
            </div>

            <h1 className="text-5xl lg:text-[4.5rem] font-black tracking-tight leading-[1.05] mb-6">
              Enterprise RV &amp; Camper
              <span className="block bg-gradient-to-r from-[#2F80FF] via-[#00C6FF] to-[#2F80FF] bg-clip-text text-transparent">
                Roadside Infrastructure
              </span>
            </h1>

            <p className="text-lg text-[#94A3B8] mb-10 max-w-xl leading-relaxed">
              Nationwide roadside intelligence, specialized RV dispatch operations, and API-driven mobility support engineered for motorhomes, travel trailers, campground networks, insurers, and enterprise mobility ecosystems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(47,128,255,0.5)' }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-[#2F80FF] text-white rounded-xl font-bold text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(47,128,255,0.3)] flex items-center justify-center gap-2 group"
              >
                Schedule Enterprise Demo
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-transparent border border-[rgba(255,255,255,0.15)] text-white rounded-xl font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2"
              >
                Explore RV APIs <span className="font-mono text-[#2F80FF]">{`</>`}</span>
              </motion.button>
            </div>

            {/* KPI Grid */}
            <div className="grid grid-cols-2 gap-5 pt-8 border-t border-[rgba(255,255,255,0.06)]">
              {[
                { value: '98.9%', label: 'RV Response Efficiency', icon: Activity, color: '#2F80FF', delta: '+2.1%' },
                { value: '1.8M+', label: 'Annual Support Events', icon: Globe, color: '#FF7A1A', delta: '+18%' },
                { value: 'Nationwide', label: 'RV Vendor Coverage', icon: MapPin, color: '#2F80FF', delta: '50k+ Nodes' },
                { value: '24/7', label: 'Mobility Operations', icon: Clock, color: '#FF7A1A', delta: 'Always On' },
              ].map((kpi, i) => {
                const Icon = kpi.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="p-2 rounded-lg mt-0.5" style={{ backgroundColor: `${kpi.color}15` }}>
                      <Icon className="w-4 h-4" style={{ color: kpi.color }} />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-white leading-none mb-0.5">{kpi.value}</div>
                      <div className="text-[11px] text-[#94A3B8]">{kpi.label}</div>
                      <div className="text-[10px] font-mono mt-1" style={{ color: kpi.color }}>{kpi.delta}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN — Dashboard ─────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="relative"
          >
            {/* Outer glow */}
            <div className="absolute -inset-6 bg-gradient-to-br from-[#2F80FF]/10 to-[#FF7A1A]/5 blur-2xl rounded-3xl" />

            {/* Dashboard Shell */}
            <div className="relative bg-[#0A192F]/90 backdrop-blur-2xl border border-[rgba(255,255,255,0.08)] rounded-2xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6)]">

              {/* Titlebar */}
              <div className="bg-[#081120] px-5 py-3 border-b border-[rgba(255,255,255,0.06)] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-2 font-mono text-[10px] text-[#94A3B8]">
                  <span className="text-white font-bold">Live RV Operations Overview</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <LiveDot />
                  <span className="text-[10px] font-mono text-emerald-400">LIVE</span>
                </div>
              </div>

              <div className="p-5 space-y-4">
                {/* Top metrics row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Active RVs', value: '12,842', delta: '+8.7%', up: true },
                    { label: 'On the Road', value: '8,675', delta: '+6.1%', up: true },
                    { label: 'Active Incidents', value: '156', delta: '-17.4%', up: false },
                  ].map((m, i) => (
                    <div key={i} className="bg-[#081120] rounded-xl p-3 border border-[rgba(255,255,255,0.05)]">
                      <div className="text-[10px] text-[#94A3B8] mb-1">{m.label}</div>
                      <div className="text-xl font-black text-white font-mono">{m.value}</div>
                      <div className={`flex items-center gap-0.5 text-[10px] mt-0.5 font-mono ${m.up ? 'text-emerald-400' : 'text-[#FF7A1A]'}`}>
                        {m.up ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                        {m.delta}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Avg Response + live incident */}
                <div className="grid grid-cols-5 gap-3">
                  <div className="col-span-3 bg-[#081120] rounded-xl p-3 border border-[rgba(255,255,255,0.05)]">
                    <div className="text-[10px] text-[#94A3B8] mb-1">Avg. Response Time</div>
                    <div className="text-2xl font-black text-white font-mono">18.6<span className="text-sm text-[#94A3B8]"> min</span></div>
                    <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono mt-0.5">
                      <ArrowDown className="w-3 h-3" /> -15.3% vs last period
                    </div>

                    {/* Sparkline */}
                    <svg viewBox="0 0 200 40" className="w-full mt-3 overflow-visible">
                      <defs>
                        <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#2F80FF" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#2F80FF" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0,35 L28,28 L57,32 L85,20 L114,25 L142,15 L171,18 L200,10"
                        fill="none" stroke="#2F80FF" strokeWidth="1.5" />
                      <path d="M0,35 L28,28 L57,32 L85,20 L114,25 L142,15 L171,18 L200,10 L200,40 L0,40 Z"
                        fill="url(#sparkGrad)" />
                    </svg>
                  </div>

                  {/* Live incident popup */}
                  <div className="col-span-2 bg-[#081120] rounded-xl border border-[rgba(255,255,255,0.05)] p-3 flex flex-col justify-between">
                    <div className="flex items-center gap-1.5 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF7A1A] animate-pulse" />
                      <span className="text-[9px] font-mono text-[#FF7A1A] uppercase tracking-widest">Live Incident</span>
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeIncident}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-[10px] font-bold text-white">#{liveIncidents[activeIncident].id}</div>
                        <div className="text-[9px] text-[#94A3B8] mt-0.5">{liveIncidents[activeIncident].location}</div>
                        <div className="text-[9px] text-[#94A3B8]">{liveIncidents[activeIncident].type}</div>
                        <div className="mt-2 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#2F80FF]" />
                          <span className="text-[10px] font-mono text-[#2F80FF]">ETA {liveIncidents[activeIncident].eta}</span>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Dispatch summary + weekly bar chart + ETA donut */}
                <div className="grid grid-cols-3 gap-3">
                  {/* Dispatch summary */}
                  <div className="bg-[#081120] rounded-xl p-3 border border-[rgba(255,255,255,0.05)]">
                    <div className="text-[9px] text-[#94A3B8] font-mono uppercase tracking-widest mb-3">Dispatch Summary</div>
                    <div className="text-[10px] font-black text-white font-mono mb-2">2.4M <span className="text-[#94A3B8] font-normal">Total</span></div>
                    {[
                      { label: 'Completed', val: 81.1, color: '#2F80FF' },
                      { label: 'In Progress', val: 12.4, color: '#FF7A1A' },
                      { label: 'Pending', val: 6.4, color: '#94A3B8' },
                    ].map(s => (
                      <div key={s.label} className="mb-1.5">
                        <div className="flex justify-between text-[9px] mb-0.5">
                          <span className="text-[#94A3B8]">{s.label}</span>
                          <span className="font-mono" style={{ color: s.color }}>{s.val}%</span>
                        </div>
                        <div className="w-full h-1 bg-[#0A192F] rounded-full overflow-hidden">
                          <div className="h-full rounded-full" style={{ width: `${s.val}%`, backgroundColor: s.color }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Weekly bar chart */}
                  <div className="bg-[#081120] rounded-xl p-3 border border-[rgba(255,255,255,0.05)]">
                    <div className="text-[9px] text-[#94A3B8] font-mono uppercase tracking-widest mb-2">Incidents (7 Days)</div>
                    <div className="text-[10px] font-black text-white font-mono mb-2">2.4K+</div>
                    <div className="flex items-end gap-1 h-14">
                      {weeklyData.map((d, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                          <div className="w-full rounded-sm" style={{
                            height: `${d.completed * 0.5}px`,
                            background: 'linear-gradient(to top, #2F80FF, #00C6FF)',
                            opacity: 0.8
                          }} />
                          <span className="text-[7px] text-[#94A3B8]">{d.day.charAt(0)}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ETA compliance donut */}
                  <div className="bg-[#081120] rounded-xl p-3 border border-[rgba(255,255,255,0.05)] flex flex-col items-center justify-center">
                    <div className="text-[9px] text-[#94A3B8] font-mono uppercase tracking-widest mb-2">ETA Compliance</div>
                    <DonutChart value={97} label="" />
                    <div className="flex items-center gap-1 mt-1 text-[9px] font-mono text-emerald-400">
                      <ArrowUp className="w-2.5 h-2.5" /> +5.7% vs 30d
                    </div>
                  </div>
                </div>

                {/* Bottom stats row */}
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { label: 'Vendor Available', val: '1,048', icon: Truck },
                    { label: 'Mobile Techs', val: '782', icon: Users },
                    { label: 'Campgrounds', val: '2,104', icon: Globe },
                    { label: 'Roadside Events', val: '3,562', icon: Activity },
                  ].map((s, i) => {
                    const Icon = s.icon;
                    return (
                      <div key={i} className="bg-[#081120] rounded-lg p-2.5 border border-[rgba(255,255,255,0.04)] text-center">
                        <Icon className="w-3.5 h-3.5 text-[#2F80FF] mx-auto mb-1" />
                        <div className="text-sm font-black text-white font-mono">{s.val}</div>
                        <div className="text-[8px] text-[#94A3B8] leading-tight mt-0.5">{s.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
