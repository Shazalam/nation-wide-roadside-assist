'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRight, Activity, Database, Globe, Clock, Terminal, Shield,
  Zap, Truck, MapPin, Radio, BarChart3, CheckCircle, TrendingUp
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setPartnershipOpen } from '@/store';

export const FleetHero = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [activeNav, setActiveNav] = useState('Overview');
  const [liveCount, setLiveCount] = useState(12842);

  useEffect(() => {
    const timer = setInterval(() => {
      setLiveCount(p => p + Math.floor(Math.random() * 3));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const navItems = ['Overview', 'Live Map', 'Dispatches', 'Incidents', 'Vendors', 'Performance', 'Reports', 'Alerts', 'Settings'];

  return (
    <section className="relative pt-24 pb-12 lg:pt-28 lg:pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden bg-brand-bg min-h-[90vh] lg:min-h-screen flex items-center z-10 transition-colors duration-500">
      {/* Cinematic Enterprise Atmosphere */}
      <div className="absolute top-0 right-0 w-[1200px] h-[900px] bg-brand-blue/10 blur-[150px] rounded-full pointer-events-none opacity-50 dark:opacity-100" />
      <div className="absolute bottom-0 left-0 w-[900px] h-[700px] bg-brand-orange/5 blur-[150px] rounded-full pointer-events-none opacity-50 dark:opacity-100" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(47,128,255,0.05)_0%,transparent_80%)] pointer-events-none" />

      <div className="max-w-[1536px] mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* ── LEFT CONTENT ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="xl:col-span-5 flex flex-col"
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-medium text-brand-slate mb-6">
              <span className="hover:text-foreground transition-colors cursor-pointer">Solutions</span>
              <ChevronRight className="w-3.5 h-3.5 text-brand-blue" />
              <span className="text-brand-blue">Fleet & Rental Operations</span>
            </div>

            <h1 className="text-4xl lg:text-[3.5rem] xl:text-[4rem] font-bold tracking-tight text-foreground leading-[1.05] mb-6 drop-shadow-sm dark:drop-shadow-lg">
              Enterprise Fleet &{' '}
              <span className="text-brand-blue">Rental Mobility</span>
              <br />
              <span className="text-foreground/50">Operations Infrastructure</span>
            </h1>

            <p className="text-base lg:text-lg text-brand-slate mb-8 max-w-lg leading-relaxed font-medium">
              Real-time roadside intelligence, dispatch automation, fleet recovery coordination, and API-driven operational visibility engineered for rental providers, logistics fleets, and enterprise transportation ecosystems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => dispatch(setPartnershipOpen(true))}
                className="px-6 py-3.5 bg-brand-blue text-foreground dark:text-white rounded-lg font-bold text-sm flex items-center justify-center gap-3 group shadow-[0_0_20px_var(--brand-glow)] hover:shadow-[0_0_30px_var(--brand-glow)] transition-all"
              >
                Schedule Enterprise Demo
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: 'var(--accent)' }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push('/developer')}
                className="px-6 py-3.5 bg-brand-navy/50 backdrop-blur-md border border-brand-border text-foreground rounded-lg font-bold text-sm flex items-center justify-center gap-3 transition-colors hover:border-brand-blue/30 shadow-sm dark:shadow-none"
              >
                Explore Fleet APIs <Terminal className="w-4 h-4 text-brand-slate" />
              </motion.button>
            </div>

            {/* Premium KPI Metric Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { value: '99.2%', label: 'Fleet Response Efficiency', icon: Shield },
                { value: '4.8M+', label: 'Fleet Dispatch Events', icon: BarChart3 },
                { value: 'Nationwide', label: 'Vendor Coverage', icon: Globe },
                { value: '24/7', label: 'Operations Intelligence', icon: Clock },
              ].map((kpi, i) => {
                const Icon = kpi.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="bg-card/60 backdrop-blur-md border border-brand-border rounded-xl p-3.5 hover:border-brand-blue/40 transition-colors group shadow-sm dark:shadow-none"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 rounded-md bg-brand-bg border border-brand-border group-hover:border-brand-blue/30 transition-colors">
                        <Icon className="w-3.5 h-3.5 text-brand-blue" />
                      </div>
                    </div>
                    <div className="text-lg lg:text-xl font-bold text-foreground mb-1 tracking-tight">{kpi.value}</div>
                    <div className="text-[9px] text-brand-slate font-medium leading-tight">{kpi.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ── RIGHT DASHBOARD ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="xl:col-span-7 relative"
          >
            {/* Cinematic Dashboard Container */}
            <div className="relative bg-card/90 backdrop-blur-3xl border border-brand-border rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.1)] dark:shadow-[0_0_80px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-500">

              {/* Dashboard Header Bar */}
              <div className="bg-brand-bg/50 px-4 md:px-6 py-3 border-b border-brand-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-black text-foreground uppercase tracking-[0.15em]">Fleet Operations</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20 hidden sm:flex">
                    <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[8px] font-bold text-emerald-500 uppercase tracking-widest">Live</span>
                  </div>
                </div>
              </div>

              {/* Top KPIs Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-b border-brand-border">
                {[
                  { label: 'Active Vehicles', val: liveCount.toLocaleString(), delta: '+8.2%', pos: true },
                  { label: 'On the Road', val: '8,675', delta: '+4.1%', pos: true },
                  { label: 'Active Incidents', val: '156', delta: '-10.4%', pos: true },
                  { label: 'Avg. Response Time', val: '18.6 min', delta: '+15.3%', pos: false },
                ].map((s, i) => (
                  <div key={i} className="px-4 md:px-5 py-3.5 flex flex-col border-r border-brand-border last:border-r-0">
                    <div className="text-[9px] text-brand-slate font-medium mb-1 truncate">{s.label}</div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-lg lg:text-xl font-semibold text-foreground tracking-tight">{s.val}</span>
                      <span className={`text-[8px] font-medium px-1.5 py-0.5 rounded-full ${s.pos ? 'text-emerald-500 bg-emerald-500/10' : 'text-rose-500 bg-rose-500/10'}`}>{s.delta}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Main Dashboard Content */}
              <div className="flex flex-col lg:flex-row">

                {/* Side Navigation */}
                <div className="hidden lg:flex flex-col w-[140px] border-r border-brand-border py-2">
                  {navItems.map((item) => (
                    <button
                      key={item}
                      onClick={() => setActiveNav(item)}
                      className={`text-left px-4 py-2 text-[10px] font-medium transition-colors ${activeNav === item ? 'text-foreground bg-brand-blue/10 border-r-2 border-brand-blue' : 'text-brand-slate hover:text-foreground hover:bg-foreground/5'}`}
                    >
                      {item}
                    </button>
                  ))}
                </div>

                {/* Map + Right Panel */}
                <div className="flex-1 flex flex-col lg:flex-row">

                  {/* Map Area */}
                  <div className="flex-1 relative overflow-hidden h-[250px] md:h-[280px] lg:h-[320px] bg-brand-bg/50">
                    <div className="absolute top-3 left-4 z-10 text-[10px] font-semibold text-foreground tracking-wide">Live Fleet Map</div>

                    {/* Grid Lines */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

                    {/* USA Map SVG */}
                    <div className="absolute inset-0 flex items-center justify-center p-4 opacity-40 dark:opacity-60">
                      <svg viewBox="0 0 1000 600" className="w-full h-full text-brand-blue/10" fill="currentColor">
                        <path d="M165.7,21.7c0,0-5.8,51.8,4.1,68.4c9.9,16.6,56.4,85.4,56.4,85.4l25.7,69.6l24.1-1.7l16.6,26.5c0,0-25.7,51.4-8.3,77.9 s106.1,107.8,106.1,107.8s12.4,5.8,32.3,16.6s35.6,35.6,44.8,35.6s22.4,19.1,43.9,15.8c21.6-3.3,32.3-9.1,58-9.1 c25.7,0,51.4,15.8,66.3,15.8c14.9,0,32.3-15.8,45.6-21.6c13.3-5.8,40.6-21.6,40.6-21.6l88.7-27.3l11.6,25.7 c0,0,14.9-5.8,24.1-23.2s11.6-29,11.6-29l50.6-23.2c0,0,10.8-3.3,10.8-19.1c0-15.8,11.6-25.7,11.6-25.7l16.6-47.3 c0,0-6.6-43.1,8.3-51.4c14.9-8.3,37.3-34.8,37.3-34.8l20.7-56.4L954.1,180c0,0-17.4-44.8-19.9-53.9c-2.5-9.1-12.4-38.1-12.4-38.1 s-30.7-33.2-53.9-34.8c-23.2-1.7-46.4-1.7-46.4-1.7S799.1,38.2,780.9,44.9s-34.8,19.1-34.8,19.1l-25.7,0l-45.6,25.7 c0,0-14.9-20.7-28.2-19.1c-13.3,1.7-52.2,27.4-60.5,23.2s-39.8-12.4-39.8-12.4s-32.3,0-39.8-5.8c-7.5-5.8-21.6,5.8-21.6,5.8 l-40.6,2.5l-20.7-16.6l-57.2-22.4l-46.4,4.1l-44.8-12.4l-31.5-3.3l-20.7-19.1c0,0-34.8,13.3-43.1,15.8c-8.3,2.5-36.5,5.8-36.5,5.8 l-10.8-20.7L165.7,21.7z" />
                      </svg>
                    </div>

                    {/* Telemetry Dots & Route Lines */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 320">
                      {/* Animated Route Paths */}
                      <motion.path d="M150,120 Q300,80 450,150 T700,100" fill="none" stroke="rgba(47,128,255,0.2)" strokeWidth="1.5" strokeDasharray="6,4"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 4, repeat: Infinity }} />
                      <motion.path d="M100,220 Q250,150 400,250 T650,180" fill="none" stroke="rgba(16,185,129,0.15)" strokeWidth="1" strokeDasharray="4,6"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} />
                      <motion.path d="M300,280 Q450,180 600,260" fill="none" stroke="rgba(255,122,26,0.15)" strokeWidth="1" strokeDasharray="4,5"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3.5, repeat: Infinity, delay: 2 }} />

                      {/* Fleet Blue Nodes */}
                      {[
                        { cx: 150, cy: 120 }, { cx: 250, cy: 90 }, { cx: 350, cy: 160 }, { cx: 480, cy: 130 },
                        { cx: 550, cy: 200 }, { cx: 650, cy: 100 }, { cx: 200, cy: 200 }, { cx: 400, cy: 250 },
                        { cx: 120, cy: 260 }, { cx: 320, cy: 60 }, { cx: 600, cy: 260 }, { cx: 700, cy: 180 },
                        { cx: 450, cy: 80 }, { cx: 180, cy: 170 }, { cx: 520, cy: 270 }, { cx: 380, cy: 290 }
                      ].map((dot, i) => (
                        <g key={i}>
                          <motion.circle cx={dot.cx} cy={dot.cy} r="2.5" fill="#2F80FF"
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 2.5 + (i % 4), repeat: Infinity, delay: (i % 6) * 0.3 }}
                          />
                          <circle cx={dot.cx} cy={dot.cy} r="8" fill="#2F80FF" opacity="0.06" />
                        </g>
                      ))}

                      {/* Orange Incident Nodes */}
                      {[{ cx: 350, cy: 160 }, { cx: 550, cy: 200 }, { cx: 200, cy: 200 }].map((dot, i) => (
                        <g key={`alert-${i}`}>
                          <circle cx={dot.cx} cy={dot.cy} r="4" fill="#FF7A1A" />
                          <motion.circle cx={dot.cx} cy={dot.cy} r="12" fill="#FF7A1A" opacity="0.3"
                            animate={{ r: [12, 20, 12], opacity: [0.3, 0.1, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
                          />
                        </g>
                      ))}
                    </svg>

                    {/* Floating Incident Card */}
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="absolute top-[38%] right-[8%] bg-card/95 backdrop-blur-xl border border-brand-border rounded-lg p-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_0_30px_rgba(47,128,255,0.2)] hidden md:block"
                    >
                      <div className="text-[9px] text-foreground font-bold mb-0.5">Incident #A582</div>
                      <div className="text-[9px] text-brand-slate mb-1.5 font-mono">I-95 North, Georgia</div>
                      <div className="text-[8px] text-emerald-500 font-mono font-bold">ETA 22 min • Recovery</div>
                    </motion.div>
                  </div>

                  {/* Right Sidebar Panel */}
                  <div className="w-full lg:w-[220px] border-t lg:border-t-0 lg:border-l border-brand-border flex flex-col">

                    {/* Dispatch Summary - Donut */}
                    <div className="p-4 border-b border-brand-border flex-1">
                      <div className="text-[10px] font-semibold text-foreground tracking-wide mb-3">Dispatch Summary</div>
                      <div className="flex items-center gap-4">
                        {/* SVG Donut Chart */}
                        <div className="relative w-20 h-20 flex-shrink-0">
                          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                            <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(148,163,184,0.1)" strokeWidth="10" />
                            <circle cx="50" cy="50" r="38" fill="none" stroke="#2F80FF" strokeWidth="10" strokeDasharray="238.76" strokeDashoffset="45" strokeLinecap="round" />
                            <circle cx="50" cy="50" r="38" fill="none" stroke="#FF7A1A" strokeWidth="10" strokeDasharray="238.76" strokeDashoffset="200" strokeLinecap="round" className="origin-center" style={{ transform: 'rotate(197deg)', transformOrigin: '50% 50%' }} />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <div className="text-base font-black text-foreground font-mono">2.4M</div>
                            <div className="text-[7px] text-brand-slate">Total Dispatches</div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {[
                            { label: 'Completed', val: '81.3%', color: 'bg-brand-blue' },
                            { label: 'In Progress', val: '12.4%', color: 'bg-emerald-500' },
                            { label: 'Pending', val: '6.3%', color: 'bg-brand-orange' },
                          ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
                              <span className="text-[9px] text-brand-slate">{item.label}</span>
                              <span className="text-[9px] text-foreground font-mono ml-auto">{item.val}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* SLA Compliance */}
                    <div className="p-4">
                      <div className="text-[10px] font-semibold text-foreground tracking-wide mb-3">SLA Compliance</div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="relative w-14 h-14 flex-shrink-0">
                          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                            <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(148,163,184,0.1)" strokeWidth="8" />
                            <circle cx="50" cy="50" r="42" fill="none" stroke="#2F80FF" strokeWidth="8" strokeDasharray="263.89" strokeDashoffset="5.3" strokeLinecap="round" />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-sm font-black text-foreground font-mono">97.8%</span>
                          </div>
                        </div>
                        <div>
                          <div className="text-[8px] text-emerald-500 font-mono font-bold">↑ 5.7% vs last 30 days</div>
                          <div className="text-[8px] text-brand-slate mt-1">Target: 95.0%</div>
                        </div>
                      </div>
                      {/* Mini bar chart */}
                      <div className="flex items-end gap-1 h-8">
                        {[65, 72, 58, 80, 75, 90, 95, 88, 78, 92, 85, 97].map((h, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ delay: 0.8 + i * 0.05, duration: 0.5 }}
                            className="flex-1 bg-brand-blue/20 rounded-t-sm hover:bg-brand-blue/40 transition-colors"
                          />
                        ))}
                      </div>
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
