'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, Zap, TrendingUp, Clock } from 'lucide-react';
import {
  ResponsiveContainer, LineChart, Line, AreaChart, Area,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell
} from 'recharts';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Badge } from '@/components/ui/badge';
import { StatusIndicator } from '@/components/ui/status-indicator';
import { cn } from '@/lib/utils';

const fleetUptimeData = [
  { name: 'Mon', uptime: 98.2 }, { name: 'Tue', uptime: 99.1 },
  { name: 'Wed', uptime: 98.8 }, { name: 'Thu', uptime: 99.5 },
  { name: 'Fri', uptime: 99.2 }, { name: 'Sat', uptime: 97.9 },
  { name: 'Sun', uptime: 98.5 },
];

const dispatchVolumeData = [
  { time: '08:00', events: 120 }, { time: '10:00', events: 340 },
  { time: '12:00', events: 490 }, { time: '14:00', events: 720 },
  { time: '16:00', events: 640 }, { time: '18:00', events: 890 },
  { time: '20:00', events: 450 },
];

const regionalPerformance = [
  { region: 'Northeast', score: 96 }, { region: 'Southeast', score: 94 },
  { region: 'Midwest', score: 92 }, { region: 'Southwest', score: 98 },
  { region: 'West', score: 95 },
];

const tabs = [
  { id: 'telemetry', label: 'Fleet Telemetry', icon: Truck },
  { id: 'dispatch', label: 'Dispatch Automation', icon: Zap },
  { id: 'analytics', label: 'Predictive Fleet Analytics', icon: TrendingUp },
];

export const TechShowcase = () => {
  const [activeTechTab, setActiveTechTab] = useState('telemetry');
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { setIsMounted(true); }, []);

  return (
    <section className="relative z-10 py-32 bg-white/[0.01]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Tabs Column */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.3em]">Technology Platform</p>
              <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight">Advanced Core <br />Orchestration</h2>
              <p className="text-brand-slate">Intelligent operations command center for real-time fleet health and recovery monitoring.</p>
            </motion.div>

            <div className="space-y-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTechTab(tab.id)}
                  className={cn(
                    "w-full flex items-center gap-4 p-6 rounded-2xl border transition-all text-left group",
                    activeTechTab === tab.id
                      ? "bg-brand-blue/10 border-brand-blue/40 shadow-[0_0_20px_rgba(47,128,255,0.1)]"
                      : "bg-white/[0.02] border-white/5 hover:border-white/10"
                  )}
                >
                  <div className={cn(
                    "h-10 w-10 rounded-xl flex items-center justify-center transition-colors",
                    activeTechTab === tab.id ? "bg-brand-blue text-white" : "bg-white/5 text-brand-slate"
                  )}>
                    <tab.icon className="h-5 w-5" />
                  </div>
                  <span className={cn(
                    "font-bold transition-colors",
                    activeTechTab === tab.id ? "text-white" : "text-brand-slate group-hover:text-white"
                  )}>{tab.label}</span>
                  {activeTechTab === tab.id && (
                    <motion.div layoutId="activeTabIndicator" className="ml-auto h-2 w-2 rounded-full bg-brand-blue shadow-[0_0_8px_#2F80FF]" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Dashboard Viz Column */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTechTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <GlassPanel className="p-8 lg:p-10 bg-brand-navy/60 border-white/10 min-h-[550px] flex flex-col relative overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                    backgroundSize: '24px 24px'
                  }} />

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 relative z-10 gap-4">
                    <div className="flex items-center gap-4">
                      <h3 className="text-lg lg:text-xl font-bold text-white uppercase tracking-widest">
                        {activeTechTab === 'telemetry' ? 'Vehicle Tracking Mesh' : activeTechTab === 'dispatch' ? 'Dispatch Orchestration' : 'Regional Utilization'}
                      </h3>
                      <StatusIndicator status="online" pulse label="Live Ops" />
                    </div>
                    <div className="flex gap-3">
                      <div className="h-1.5 w-16 rounded-full bg-brand-blue" />
                      <div className="h-1.5 w-16 rounded-full bg-white/10" />
                    </div>
                  </div>

                  <div className="flex-1 relative z-10">
                    {activeTechTab === 'telemetry' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                        <div className="rounded-2xl bg-white/[0.02] border border-white/5 p-6 space-y-6">
                          <p className="text-[10px] font-bold text-brand-slate uppercase tracking-widest">Fleet Health Monitoring</p>
                          <div className="h-48 w-full">
                            {isMounted && (
                              <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={fleetUptimeData}>
                                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                                  <XAxis dataKey="name" stroke="#475569" fontSize={10} tickLine={false} axisLine={false} />
                                  <Line type="monotone" dataKey="uptime" stroke="#2F80FF" strokeWidth={3} dot={{ fill: '#2F80FF', r: 4 }} />
                                  <Tooltip contentStyle={{ backgroundColor: '#0A192F', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff' }} />
                                </LineChart>
                              </ResponsiveContainer>
                            )}
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-white/5 text-center">
                              <p className="text-2xl font-black text-white">99.4%</p>
                              <p className="text-[8px] text-brand-slate uppercase mt-1">Global Uptime</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 text-center">
                              <p className="text-2xl font-black text-emerald-400">0.05%</p>
                              <p className="text-[8px] text-brand-slate uppercase mt-1">Failure Rate</p>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-2xl bg-white/[0.02] border border-white/5 p-6">
                          <p className="text-[10px] font-bold text-brand-slate uppercase tracking-widest mb-6">Active Operations</p>
                          <div className="space-y-4">
                            {[
                              { id: '01', label: 'Hertz Fleet Recovery', match: '98%' },
                              { id: '02', label: 'Penske Route Optimize', match: '96%' },
                              { id: '03', label: 'Ryder Dispatch Coord', match: '99%' },
                              { id: '04', label: 'WEX Billing Pipeline', match: '94%' },
                            ].map((op) => (
                              <div key={op.id} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-brand-blue/20 transition-colors">
                                <div className="flex items-center gap-3">
                                  <div className="h-8 w-8 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                                    <Truck className="h-4 w-4 text-brand-blue" />
                                  </div>
                                  <div>
                                    <p className="text-[10px] font-bold text-white">DISPATCH-NODE-{op.id}</p>
                                    <p className="text-[8px] text-brand-slate">{op.label}</p>
                                  </div>
                                </div>
                                <Badge className="bg-brand-blue/10 text-brand-blue border-brand-blue/20 text-[8px] h-4">{op.match} Match</Badge>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTechTab === 'dispatch' && (
                      <div className="h-full flex flex-col space-y-8">
                        <div className="flex-1 rounded-2xl bg-white/[0.02] border border-white/5 p-6 flex flex-col">
                          <p className="text-[10px] font-bold text-brand-slate uppercase tracking-widest mb-8">AI-Powered Dispatch Flow (Last 24h)</p>
                          <div className="flex-1 min-h-[200px]">
                            {isMounted && (
                              <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={dispatchVolumeData}>
                                  <defs>
                                    <linearGradient id="techDispatchGrad" x1="0" y1="0" x2="0" y2="1">
                                      <stop offset="5%" stopColor="#2F80FF" stopOpacity={0.3} />
                                      <stop offset="95%" stopColor="#2F80FF" stopOpacity={0} />
                                    </linearGradient>
                                  </defs>
                                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                                  <XAxis dataKey="time" stroke="#475569" fontSize={10} tickLine={false} axisLine={false} />
                                  <Tooltip contentStyle={{ backgroundColor: '#0A192F', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff' }} />
                                  <Area type="monotone" dataKey="events" stroke="#2F80FF" fillOpacity={1} fill="url(#techDispatchGrad)" strokeWidth={2} />
                                </AreaChart>
                              </ResponsiveContainer>
                            )}
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-6">
                          {[
                            { label: 'Automated Match Rate', val: '92.4%', color: 'text-white' },
                            { label: 'Time to Assign', val: '84s', color: 'text-emerald-400' },
                            { label: 'Ops Reduction', val: '-40%', color: 'text-brand-blue' },
                          ].map((stat) => (
                            <div key={stat.label} className="p-5 rounded-2xl bg-white/5 border border-white/5">
                              <p className="text-[10px] font-bold text-brand-slate uppercase tracking-widest mb-2">{stat.label}</p>
                              <p className={cn("text-3xl font-black", stat.color)}>{stat.val}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeTechTab === 'analytics' && (
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
                        <div className="lg:col-span-8 rounded-2xl bg-white/[0.02] border border-white/5 p-6 flex flex-col">
                          <p className="text-[10px] font-bold text-brand-slate uppercase tracking-widest mb-8">Regional Operational Performance</p>
                          <div className="flex-1 min-h-[200px]">
                            {isMounted && (
                              <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={regionalPerformance} layout="vertical">
                                  <XAxis type="number" hide />
                                  <YAxis dataKey="region" type="category" stroke="#94A3B8" fontSize={10} width={80} axisLine={false} tickLine={false} />
                                  <Bar dataKey="score" fill="#2F80FF" radius={[0, 6, 6, 0]}>
                                    {regionalPerformance.map((entry, index) => (
                                      <Cell key={`cell-${index}`} fill={entry.score > 95 ? '#2F80FF' : '#1e293b'} />
                                    ))}
                                  </Bar>
                                </BarChart>
                              </ResponsiveContainer>
                            )}
                          </div>
                        </div>
                        <div className="lg:col-span-4 space-y-6">
                          <div className="p-6 rounded-2xl bg-brand-blue/5 border border-brand-blue/20 flex flex-col items-center text-center">
                            <TrendingUp className="h-8 w-8 text-brand-blue mb-4" />
                            <p className="text-4xl font-black text-white">12%</p>
                            <p className="text-[10px] text-brand-slate uppercase mt-1">Fleet Efficiency Gain</p>
                          </div>
                          <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center text-center">
                            <Clock className="h-8 w-8 text-emerald-400 mb-4" />
                            <p className="text-4xl font-black text-white">1.8h</p>
                            <p className="text-[10px] text-brand-slate uppercase mt-1">Downtime Saved / Incident</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </GlassPanel>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
