'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation2, Workflow, LineChart, ArrowDown, ArrowUp, ShieldCheck, Clock } from 'lucide-react';

const tabs = [
  { id: 'telemetry', label: 'RV Telemetry', icon: Navigation2 },
  { id: 'dispatch', label: 'Dispatch Automation', icon: Workflow },
  { id: 'predictive', label: 'Predictive Route Intelligence', icon: LineChart },
];

const serviceCategories = [
  { label: 'Towing / Recovery', count: 1248, color: '#2F80FF' },
  { label: 'Mobile Repair', count: 1024, color: '#00C6FF' },
  { label: 'Fuel Delivery', count: 643, color: '#FF7A1A' },
  { label: 'Tire Service', count: 452, color: '#94A3B8' },
  { label: 'Jump Start', count: 196, color: '#64748B' },
];

export default function TechShowcase() {
  const [activeTab, setActiveTab] = useState('telemetry');

  return (
    <section className="py-24 border-y border-[rgba(255,255,255,0.06)] bg-card/20 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[rgba(47,128,255,0.08)] border border-[rgba(47,128,255,0.15)] rounded-full mb-5">
            <span className="text-[9px] font-black text-[#2F80FF] uppercase tracking-[0.3em]">Technology Platform</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-4">
            Real-Time RV Telemetry &amp;<br /><span className="text-[#2F80FF]">Operational Intelligence</span>
          </h2>
          <p className="text-brand-slate max-w-2xl leading-relaxed">
            A comprehensive operational dashboard blending predictive routing, real-time fleet intelligence, and specialized vendor matching.
          </p>
        </div>

        {/* Top KPI strip */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Avg Efficiency', val: '89.2%', delta: '-7.4%', up: false, color: '#2F80FF' },
            { label: 'Predicted ETA', val: '35 min', delta: '+4.0%', up: false, color: '#FF7A1A' },
            { label: 'Vendor Proximity', val: '2.1 mi', delta: 'Nearest Available', up: true, color: '#2F80FF' },
            { label: 'SLA Compliance', val: '98.1%', delta: '+1.2%', up: true, color: '#2F80FF' },
          ].map((k, i) => (
            <div key={i} className="bg-brand-bg border border-[rgba(255,255,255,0.06)] rounded-xl p-4">
              <div className="text-[10px] text-brand-slate mb-1">{k.label}</div>
              <div className="text-xl font-black text-foreground dark:text-white font-mono">{k.val}</div>
              <div className={`flex items-center gap-1 text-[10px] font-mono mt-1 ${k.up ? 'text-emerald-400' : 'text-[#FF7A1A]'}`}>
                {k.up ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                {k.delta}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Tabs */}
          <div className="flex lg:flex-col gap-3 lg:w-56 shrink-0">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-5 py-4 rounded-xl text-left transition-all relative border ${isActive
                    ? 'bg-[#2F80FF]/10 border-[#2F80FF]/30 text-foreground dark:text-white'
                    : 'border-transparent hover:bg-[rgba(255,255,255,0.03)] text-brand-slate hover:border-[rgba(255,255,255,0.05)]'
                  }`}>
                  {isActive && (
                    <motion.div layoutId="techTabBg" className="absolute inset-0 rounded-xl bg-[#2F80FF]/5 border border-[#2F80FF]/20"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }} />
                  )}
                  <Icon className={`w-4 h-4 relative z-10 ${isActive ? 'text-[#2F80FF]' : 'text-brand-slate'}`} />
                  <span className="text-sm font-bold relative z-10 whitespace-nowrap">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Dashboard panel */}
          <div className="flex-1 bg-brand-bg border border-[rgba(255,255,255,0.07)] rounded-2xl overflow-hidden shadow-2xl min-h-[480px] relative">
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #2F80FF 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

            <AnimatePresence mode="wait">
              {activeTab === 'telemetry' && (
                <motion.div key="telemetry" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="p-6 h-full flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-mono text-xs text-[#2F80FF] uppercase tracking-widest">Live GPS &amp; Vendor Mapping</h3>
                    <div className="flex items-center gap-1.5 text-[10px] font-mono">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-emerald-400">System Online</span>
                    </div>
                  </div>

                  <div className="flex-1 grid grid-cols-5 gap-4">
                    {/* Map area */}
                    <div className="col-span-3 bg-card rounded-xl border border-[rgba(255,255,255,0.05)] relative overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #2F80FF 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
                      {/* Map SVG paths simulating roads */}
                      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 300">
                        <path d="M0,150 Q100,100 200,150 T400,150" fill="none" stroke="#2F80FF" strokeWidth="1.5" />
                        <path d="M200,0 Q180,150 200,300" fill="none" stroke="#2F80FF" strokeWidth="1" strokeDasharray="4 4" />
                        <path d="M0,80 Q150,60 300,120 L400,100" fill="none" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3" />
                      </svg>
                      {/* Incident markers */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                        <div className="w-6 h-6 bg-[#FF7A1A]/20 border-2 border-[#FF7A1A] rounded-full flex items-center justify-center animate-pulse">
                          <div className="w-2 h-2 bg-[#FF7A1A] rounded-full" />
                        </div>
                        <div className="mt-1 bg-card border border-[#FF7A1A]/30 rounded px-2 py-0.5">
                          <span className="text-[8px] font-mono text-[#FF7A1A]">RV-7821 · Yellowstone NP</span>
                        </div>
                        <span className="text-[8px] font-mono text-brand-slate mt-0.5">ETA 35 min</span>
                      </div>
                      <div className="absolute top-1/4 left-1/4 flex flex-col items-center">
                        <div className="w-4 h-4 bg-[#2F80FF]/20 border border-[#2F80FF] rounded-full flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-[#2F80FF] rounded-full" />
                        </div>
                        <span className="text-[8px] font-mono mt-0.5 text-[#2F80FF]">UNIT 42 · 18m</span>
                      </div>
                      <div className="absolute bottom-1/4 right-1/4 flex flex-col items-center">
                        <div className="w-4 h-4 bg-[#94A3B8]/20 border border-[#94A3B8] rounded-full flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-[#94A3B8] rounded-full" />
                        </div>
                        <span className="text-[8px] font-mono mt-0.5 text-brand-slate">UNIT 17 · 45m</span>
                      </div>
                      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                        <path d="M25% 25% Q 40% 40% 50% 50%" fill="none" stroke="#2F80FF" strokeWidth="1.5" strokeDasharray="4 4" />
                      </svg>
                    </div>

                    {/* Service categories */}
                    <div className="col-span-2 bg-card rounded-xl border border-[rgba(255,255,255,0.05)] p-4">
                      <div className="text-[9px] font-mono text-brand-slate uppercase tracking-widest mb-4">Service Categories</div>
                      <div className="space-y-3">
                        {serviceCategories.map((s) => (
                          <div key={s.label}>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-brand-slate">{s.label}</span>
                              <span className="font-mono text-foreground dark:text-white">{s.count.toLocaleString()}</span>
                            </div>
                            <div className="w-full h-1 bg-brand-bg rounded-full overflow-hidden">
                              <div className="h-full rounded-full" style={{ width: `${(s.count / 1248) * 100}%`, backgroundColor: s.color }} />
                            </div>
                          </div>
                        ))}
                      </div>
                      <button className="mt-4 text-[9px] font-bold text-[#2F80FF] uppercase tracking-widest">View All Services →</button>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'dispatch' && (
                <motion.div key="dispatch" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="p-6 flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-mono text-xs text-[#2F80FF] uppercase tracking-widest">Automated Dispatch Workflows</h3>
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /><span>87.5% Auto Rate</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-card rounded-xl border border-[rgba(255,255,255,0.05)] p-5 space-y-4">
                      {[{ l: 'SLA Compliance', v: 99.2, c: '#10b981' }, { l: 'Auto-Dispatch Rate', v: 87.5, c: '#2F80FF' }, { l: 'Vendor Match Quality', v: 94.1, c: '#FF7A1A' }].map(m => (
                        <div key={m.l}>
                          <div className="flex justify-between text-xs mb-1.5">
                            <span className="text-brand-slate">{m.l}</span>
                            <span className="font-mono text-foreground dark:text-white">{m.v}%</span>
                          </div>
                          <div className="h-2 w-full bg-brand-bg rounded-full overflow-hidden">
                            <motion.div className="h-full rounded-full" initial={{ width: 0 }}
                              animate={{ width: `${m.v}%` }} transition={{ duration: 1, delay: 0.3 }}
                              style={{ backgroundColor: m.c }} />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-card rounded-xl border border-[rgba(255,255,255,0.05)] p-5">
                      <div className="text-[9px] font-mono text-brand-slate uppercase tracking-widest mb-4">Recent Automations</div>
                      <div className="space-y-3">
                        {[{ id: 8041, type: 'Heavy Duty Tow', t: '2s ago' }, { id: 8042, type: 'Mobile Tech Dispatch', t: '8s ago' }, { id: 8043, type: 'Vendor Matched: Tire', t: '18s ago' }].map(d => (
                          <div key={d.id} className="flex gap-3 items-start border-l-2 border-[#2F80FF] pl-3 py-1">
                            <ShieldCheck className="w-4 h-4 text-[#2F80FF] shrink-0 mt-0.5" />
                            <div>
                              <div className="text-sm font-medium text-foreground dark:text-white">{d.type}</div>
                              <div className="text-[9px] font-mono text-brand-slate">ID: DISP-{d.id} · {d.t}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'predictive' && (
                <motion.div key="predictive" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="p-6 flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-mono text-xs text-[#FF7A1A] uppercase tracking-widest">ETA Forecasting &amp; Route Intelligence</h3>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {[{ label: 'National Avg ETA', val: '24m', sub: 'All vehicle types', color: '#2F80FF' }, { label: 'vs Last Quarter', val: '-12%', sub: 'Improvement trend', color: '#10b981' }, { label: 'Prediction Accuracy', val: '94.3%', sub: 'ML model v3.1', color: '#FF7A1A' }].map(k => (
                      <div key={k.label} className="bg-card rounded-xl border border-[rgba(255,255,255,0.05)] p-5">
                        <div className="text-[10px] text-brand-slate mb-2">{k.label}</div>
                        <div className="text-3xl font-black font-mono" style={{ color: k.color }}>{k.val}</div>
                        <div className="text-[10px] text-brand-slate mt-1">{k.sub}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex-1 bg-card rounded-xl border border-[rgba(255,255,255,0.05)] p-5 relative overflow-hidden">
                    <div className="text-[9px] font-mono text-brand-slate uppercase tracking-widest mb-3">30-Day ETA Trend</div>
                    <div className="absolute inset-0 flex items-end px-4 pb-4 opacity-60">
                      <svg viewBox="0 0 400 120" className="w-full" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="etaGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#FF7A1A" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#FF7A1A" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path d="M0,100 L0,85 Q50,95 100,60 T200,65 T300,25 T400,32 L400,120 L0,120 Z" fill="url(#etaGrad)" />
                        <path d="M0,85 Q50,95 100,60 T200,65 T300,25 T400,32" fill="none" stroke="#FF7A1A" strokeWidth="2" />
                      </svg>
                    </div>
                    <div className="relative z-10 mt-auto pt-24 flex gap-8">
                      <div className="flex items-center gap-2 text-[10px] font-mono">
                        <div className="w-3 h-0.5 bg-[#FF7A1A]" />
                        <span className="text-brand-slate">ETA Trend</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-mono">
                        <Clock className="w-3 h-3 text-[#2F80FF]" />
                        <span className="text-brand-slate">Updated every 60s</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
