'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Zap, MapPin, Truck, BarChart3, Shield } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, LineChart, Line } from 'recharts';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { StatusIndicator } from '@/components/ui/status-indicator';
import { useFleetStats } from '@/app/solutions/fleet-rental-operations/hooks/use-fleet-stats';

const fleetUptimeData = [
  { name: 'Mon', uptime: 98.2 }, { name: 'Tue', uptime: 99.1 },
  { name: 'Wed', uptime: 98.8 }, { name: 'Thu', uptime: 99.5 },
  { name: 'Fri', uptime: 99.2 }, { name: 'Sat', uptime: 97.9 },
  { name: 'Sun', uptime: 98.5 },
];

const etaData = [
  { t: '1', v: 24 }, { t: '2', v: 18 }, { t: '3', v: 22 },
  { t: '4', v: 15 }, { t: '5', v: 19 }, { t: '6', v: 14 },
  { t: '7', v: 16 },
];

const kpis = [
  { label: 'Fleet Response Efficiency', val: '99.2%', glow: 'from-brand-blue/20', icon: Shield },
  { label: 'Fleet Dispatch Events', val: '4.8M+', glow: 'from-emerald-500/20', icon: BarChart3 },
  { label: 'Nationwide Vendor Coverage', val: 'All 50 States', glow: 'from-brand-orange/20', icon: MapPin },
  { label: '24/7 Operations Intelligence', val: 'Always On', glow: 'from-purple-500/20', icon: Clock },
];

const fleetDots = [
  { x: 45, y: 60 }, { x: 120, y: 130 }, { x: 200, y: 80 }, { x: 280, y: 200 },
  { x: 350, y: 120 }, { x: 150, y: 280 }, { x: 400, y: 300 }, { x: 70, y: 220 },
  { x: 320, y: 50 }, { x: 250, y: 330 }, { x: 180, y: 180 }, { x: 420, y: 180 },
  { x: 90, y: 350 }, { x: 370, y: 250 }, { x: 230, y: 40 },
  { x: 310, y: 290 }, { x: 140, y: 60 }, { x: 450, y: 130 },
];

export const FleetHero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { stats } = useFleetStats();
  
  useEffect(() => { setIsMounted(true); }, []);

  const kpis = [
    { label: 'Fleet Response Efficiency', val: stats?.slaCompliance ? `${stats.slaCompliance}%` : '99.2%', glow: 'from-brand-blue/20', icon: Shield },
    { label: 'Fleet Dispatch Events', val: stats?.totalVehicles ? `${(stats.totalVehicles / 1000).toFixed(1)}k` : '4.8M+', glow: 'from-emerald-500/20', icon: BarChart3 },
    { label: 'Nationwide Vendor Coverage', val: 'All 50 States', glow: 'from-brand-orange/20', icon: MapPin },
    { label: '24/7 Operations Intelligence', val: 'Always On', glow: 'from-purple-500/20', icon: Clock },
  ];

  return (
    <section className="relative pt-28 lg:pt-36 pb-20 lg:pb-28 z-10">
      {/* Hero background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-brand-blue/5 blur-[200px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-[10px] font-bold text-brand-blue uppercase tracking-[0.3em]"
            >
              <span className="opacity-50">Solutions</span>
              <ArrowRight className="h-3 w-3 opacity-30" />
              <span>Fleet & Rental Operations</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[4.2rem] xl:text-7xl font-black tracking-tight leading-[1.05]"
            >
              Enterprise Fleet &{' '}
              <span className="bg-gradient-to-r from-brand-blue via-emerald-400 to-brand-blue bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-flow">
                Rental Mobility
              </span>
              <br />
              <span className="text-white/50">Operations Infrastructure</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg lg:text-xl text-brand-slate leading-relaxed max-w-xl"
            >
              Real-time roadside intelligence, dispatch automation, fleet recovery coordination, and API-driven operational visibility engineered for rental providers, logistics fleets, and enterprise transportation ecosystems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold h-14 px-10 rounded-xl shadow-[0_0_40px_rgba(47,128,255,0.4)] transition-all hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(47,128,255,0.5)]">
                Schedule Enterprise Demo
              </Button>
              <Button variant="ghost" size="lg" className="text-white border border-white/10 hover:bg-white/5 hover:border-white/20 font-bold h-14 px-10 rounded-xl group transition-all">
                Explore Fleet APIs <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* KPI Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-10"
            >
              {kpis.map((kpi, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.04, y: -2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-xl relative overflow-hidden group cursor-default"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${kpi.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <kpi.icon className="h-4 w-4 text-brand-blue/60 mb-2" />
                    <p className="text-xl font-black text-white leading-tight">{kpi.val}</p>
                    <p className="text-[8px] font-bold text-brand-slate uppercase tracking-widest mt-1.5 leading-tight">{kpi.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Fleet Dashboard Visual */}
          <div className="lg:col-span-6 relative h-[520px] sm:h-[580px] lg:h-[680px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-brand-blue/8 blur-[100px] rounded-full translate-x-1/4 -translate-y-1/4" />

              {/* Main Dashboard */}
              <GlassPanel className="absolute inset-0 bg-[#0A192F]/60 border-white/10 shadow-2xl overflow-hidden p-0 flex flex-col">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-white/5 bg-white/[0.02]">
                  <div className="flex items-center gap-3">
                    <StatusIndicator status="online" pulse label="Fleet Command Center" />
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-[9px] border-white/10 hidden sm:flex">Active: {stats?.totalVehicles?.toLocaleString() || '1,242'}</Badge>
                    <Badge variant="outline" className="text-[9px] border-emerald-500/30 text-emerald-400 hidden md:flex">SLA: {stats?.slaCompliance || '99.4'}%</Badge>
                  </div>
                </div>

                {/* Map Area */}
                <div className="flex-1 relative bg-brand-bg/40 overflow-hidden">
                  <div className="absolute inset-0 opacity-15"
                    style={{
                      backgroundImage: `linear-gradient(rgba(47,128,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(47,128,255,0.06) 1px, transparent 1px)`,
                      backgroundSize: '24px 24px'
                    }}
                  />

                  {/* Fleet dots */}
                  {fleetDots.map((pos, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2.5 + (i % 4), repeat: Infinity, delay: (i % 6) * 0.3 }}
                      style={{ left: pos.x, top: pos.y }}
                      className="absolute h-1.5 w-1.5 rounded-full bg-brand-blue shadow-[0_0_8px_rgba(47,128,255,0.8)]"
                    />
                  ))}

                  {/* Incident dots */}
                  {[{ x: 160, y: 150 }, { x: 380, y: 90 }, { x: 260, y: 310 }].map((pos, i) => (
                    <motion.div
                      key={`alert-${i}`}
                      animate={{ scale: [1, 1.6, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
                      style={{ left: pos.x, top: pos.y }}
                      className="absolute h-2 w-2 rounded-full bg-brand-orange shadow-[0_0_12px_rgba(255,122,26,0.8)]"
                    />
                  ))}

                  {/* SVG Route Paths */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <motion.path d="M 80 200 Q 220 90 400 220" fill="none" stroke="rgba(47, 128, 255, 0.25)" strokeWidth="1.5" strokeDasharray="6,4"
                      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, repeat: Infinity }} />
                    <motion.path d="M 40 320 Q 180 220 350 100" fill="none" stroke="rgba(16, 185, 129, 0.15)" strokeWidth="1" strokeDasharray="3,6"
                      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 4, repeat: Infinity, delay: 0.8 }} />
                    <motion.path d="M 300 350 Q 400 200 480 120" fill="none" stroke="rgba(255, 122, 26, 0.15)" strokeWidth="1" strokeDasharray="4,5"
                      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3.5, repeat: Infinity, delay: 1.5 }} />
                  </svg>

                  {/* Vendor Overlay - Top Left */}
                  <div className="absolute top-5 left-5 w-52 pointer-events-none">
                    <GlassPanel className="p-3.5 bg-brand-navy/90 border-brand-blue/20 backdrop-blur-2xl">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[8px] font-bold text-brand-slate uppercase tracking-wider">Vendor Dispatched</span>
                        <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 text-[7px] h-3.5 px-1.5">En Route</Badge>
                      </div>
                      <p className="text-[11px] font-bold text-white">Ryder Logistics #8291</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-3 w-3 text-brand-blue" />
                          <span className="text-[9px] text-white font-medium">ETA: 14 mins</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Truck className="h-3 w-3 text-brand-slate" />
                          <span className="text-[9px] text-brand-slate">Light-duty</span>
                        </div>
                      </div>
                    </GlassPanel>
                  </div>

                  {/* ETA Intelligence - Top Right */}
                  <div className="absolute top-5 right-5 w-44 pointer-events-none hidden md:block">
                    <GlassPanel className="p-3.5 bg-brand-navy/90 border-white/5 backdrop-blur-2xl">
                      <p className="text-[8px] font-bold text-brand-slate uppercase tracking-widest mb-2">ETA Intelligence</p>
                      <div className="h-16 w-full">
                        {isMounted && (
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={etaData}>
                              <Line type="monotone" dataKey="v" stroke="#10B981" strokeWidth={1.5} dot={false} />
                            </LineChart>
                          </ResponsiveContainer>
                        )}
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-[8px] text-emerald-400 font-bold">↓ 18% avg</span>
                        <span className="text-[8px] text-brand-slate">7-day trend</span>
                      </div>
                    </GlassPanel>
                  </div>

                  {/* Fleet Availability - Bottom Right */}
                  <div className="absolute bottom-5 right-5 w-56 pointer-events-none">
                    <GlassPanel className="p-3.5 bg-brand-navy/90 border-white/5 backdrop-blur-2xl">
                      <p className="text-[8px] font-bold text-brand-slate uppercase mb-2 tracking-widest">Fleet Availability Heatmap</p>
                      <div className="h-20 w-full">
                        {isMounted && (
                          <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={fleetUptimeData}>
                              <defs>
                                <linearGradient id="heroFleetGrad" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="#2F80FF" stopOpacity={0.4} />
                                  <stop offset="95%" stopColor="#2F80FF" stopOpacity={0} />
                                </linearGradient>
                              </defs>
                              <Area type="monotone" dataKey="uptime" stroke="#2F80FF" fill="url(#heroFleetGrad)" strokeWidth={2} />
                            </AreaChart>
                          </ResponsiveContainer>
                        )}
                      </div>
                    </GlassPanel>
                  </div>

                  {/* KPI Analytics - Bottom Left */}
                  <div className="absolute bottom-5 left-5 w-48 pointer-events-none hidden sm:block">
                    <GlassPanel className="p-3.5 bg-brand-navy/90 border-white/5 backdrop-blur-2xl">
                      <p className="text-[8px] font-bold text-brand-slate uppercase tracking-widest mb-2">Operational KPIs</p>
                      <div className="space-y-2">
                        {[
                          { label: 'Response Rate', val: '99.2%', w: '99%' },
                          { label: 'SLA Compliance', val: '98.8%', w: '98%' },
                          { label: 'Fleet Utilization', val: '94.1%', w: '94%' },
                        ].map((kpi) => (
                          <div key={kpi.label}>
                            <div className="flex justify-between text-[7px] text-brand-slate mb-0.5">
                              <span>{kpi.label}</span>
                              <span className="text-white font-bold">{kpi.val}</span>
                            </div>
                            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: kpi.w }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                                className="h-full bg-brand-blue/70 rounded-full"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </GlassPanel>
                  </div>
                </div>

                {/* Bottom Stats Bar */}
                <div className="grid grid-cols-4 divide-x divide-white/5 border-t border-white/5 bg-white/[0.01]">
                  {[
                    { label: 'Active Fleet', val: stats?.totalVehicles ? `${(stats.totalVehicles / 1000).toFixed(1)}k` : '84.2k' },
                    { label: 'Availability', val: stats?.fleetUtilization ? `${stats.fleetUtilization}%` : '96.4%' },
                    { label: 'Avg ETA', val: stats?.avgResponseTime ? `${stats.avgResponseTime}m` : '18m' },
                    { label: 'Live Incidents', val: stats?.activeIncidents || '12' },
                  ].map((stat, i) => (
                    <div key={i} className="p-3 text-center">
                      <p className="text-xs font-bold text-white">{stat.val}</p>
                      <p className="text-[7px] text-brand-slate uppercase tracking-wider">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </GlassPanel>

              {/* Floating: Critical Incident */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-4 w-56 z-20 hidden lg:block"
              >
                <GlassPanel className="p-3.5 border-brand-orange/30 bg-brand-navy/95 shadow-2xl">
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="h-7 w-7 rounded-lg bg-brand-orange/10 flex items-center justify-center">
                      <Zap className="h-3.5 w-3.5 text-brand-orange" />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-white">Critical Incident Detected</p>
                      <p className="text-[7px] text-brand-slate">Hertz Fleet • TX-2914</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[7px] text-brand-slate uppercase">Vendor Assignment</span>
                    <span className="text-[7px] text-brand-orange font-bold">In Progress</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: '72%' }} transition={{ duration: 2 }} className="h-full bg-brand-orange rounded-full" />
                  </div>
                </GlassPanel>
              </motion.div>

              {/* Floating: AI Dispatch */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-2 -left-4 w-52 z-20 hidden lg:block"
              >
                <GlassPanel className="p-3.5 border-emerald-500/20 bg-brand-navy/95 shadow-2xl">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[8px] font-bold text-emerald-400 uppercase tracking-widest">AI Dispatch Active</span>
                  </div>
                  <p className="text-[10px] text-white font-medium">Optimizing 342 vendor routes</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[8px] text-brand-slate">Efficiency gain</span>
                    <span className="text-[9px] text-emerald-400 font-bold">+12.4%</span>
                  </div>
                </GlassPanel>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
