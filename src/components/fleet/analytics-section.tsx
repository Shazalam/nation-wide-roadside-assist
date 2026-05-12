'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Activity, BarChart3, Target, Gauge } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, Tooltip, BarChart, Bar, Cell, LineChart, Line } from 'recharts';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const dispatchVolumeData = [
  { time: '06:00', events: 80 }, { time: '08:00', events: 180 },
  { time: '10:00', events: 340 }, { time: '12:00', events: 490 },
  { time: '14:00', events: 720 }, { time: '16:00', events: 640 },
  { time: '18:00', events: 890 }, { time: '20:00', events: 520 },
  { time: '22:00', events: 280 },
];

const regionalData = [
  { name: 'NE', value: 96 }, { name: 'SE', value: 94 },
  { name: 'MW', value: 92 }, { name: 'SW', value: 98 },
  { name: 'W', value: 95 }, { name: 'NW', value: 91 },
];

const utilizationTrend = [
  { month: 'Jan', rate: 82 }, { month: 'Feb', rate: 84 },
  { month: 'Mar', rate: 88 }, { month: 'Apr', rate: 91 },
  { month: 'May', rate: 94 },
];

const sideStats = [
  { label: 'Downtime Reduction', val: '22.4%', color: 'text-emerald-400', icon: TrendingUp },
  { label: 'Avg Dispatch ETA', val: '14m 22s', color: 'text-brand-blue', icon: Clock },
  { label: 'Operational Accuracy', val: '98.8%', color: 'text-brand-orange', icon: Activity },
];

const slaIndicators = [
  { label: 'Response Time SLA', target: '25 min', actual: '18 min', compliance: 99.2, status: 'healthy' },
  { label: 'Vendor Assignment SLA', target: '5 min', actual: '3.2 min', compliance: 98.8, status: 'healthy' },
  { label: 'Resolution SLA', target: '60 min', actual: '42 min', compliance: 97.4, status: 'warning' },
];

export const AnalyticsSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { setIsMounted(true); }, []);

  return (
    <section className="relative z-10 py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-12 items-end mb-16"
        >
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.3em] mb-4">Analytics Engine</p>
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">Intelligence-Driven Recovery</h2>
            <p className="text-brand-slate text-lg">Predictive fleet downtime reduction through real-time operational analytics and regional performance monitoring.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Dispatch Volume Chart */}
            <GlassPanel className="p-7 lg:p-9 bg-[#0A192F]/40 border-white/5 h-[400px] flex flex-col">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <div>
                  <p className="text-[9px] font-bold text-brand-blue uppercase tracking-[0.2em] mb-1">Dispatch Performance</p>
                  <h4 className="text-xl font-black text-white tracking-tight">Fleet Operations Volume</h4>
                </div>
                <Badge variant="outline" className="border-white/10 text-white text-[9px]">2026 Q1 Intelligence</Badge>
              </div>
              <div className="flex-1 min-h-0">
                {isMounted && (
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={dispatchVolumeData}>
                      <defs>
                        <linearGradient id="analyticsMainGrad2" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#2F80FF" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#2F80FF" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                      <XAxis dataKey="time" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                      <Tooltip contentStyle={{ backgroundColor: '#0A192F', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff' }} />
                      <Area type="monotone" dataKey="events" stroke="#2F80FF" strokeWidth={2.5} fillOpacity={1} fill="url(#analyticsMainGrad2)" />
                    </AreaChart>
                  </ResponsiveContainer>
                )}
              </div>
            </GlassPanel>

            {/* Bottom Row: Regional + Utilization */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Regional SLA */}
              <GlassPanel className="p-7 bg-[#0A192F]/40 border-white/5 h-[240px] flex flex-col">
                <p className="text-[9px] font-bold text-brand-slate uppercase tracking-widest mb-5">Regional SLA Compliance</p>
                <div className="flex-1 min-h-0">
                  {isMounted && (
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={regionalData}>
                        <XAxis dataKey="name" stroke="#475569" fontSize={9} axisLine={false} tickLine={false} />
                        <Tooltip contentStyle={{ backgroundColor: '#0A192F', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff' }} />
                        <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                          {regionalData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.value > 94 ? '#2F80FF' : '#1e293b'} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  )}
                </div>
              </GlassPanel>

              {/* Fleet Utilization Trend */}
              <GlassPanel className="p-7 bg-[#0A192F]/40 border-white/5 h-[240px] flex flex-col">
                <div className="flex justify-between items-center mb-5">
                  <p className="text-[9px] font-bold text-brand-slate uppercase tracking-widest">Fleet Utilization Trend</p>
                  <span className="text-[9px] text-emerald-400 font-bold">↑ +12% YoY</span>
                </div>
                <div className="flex-1 min-h-0">
                  {isMounted && (
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={utilizationTrend}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                        <XAxis dataKey="month" stroke="#475569" fontSize={9} axisLine={false} tickLine={false} />
                        <Line type="monotone" dataKey="rate" stroke="#10B981" strokeWidth={2.5} dot={{ fill: '#10B981', r: 3, stroke: '#0A192F', strokeWidth: 2 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  )}
                </div>
              </GlassPanel>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* KPI Stats */}
            {sideStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassPanel className="p-6 flex flex-col justify-center border-white/5 hover:border-white/15 transition-all bg-white/[0.02] group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-9 w-9 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <stat.icon className={cn("h-4 w-4", stat.color)} />
                    </div>
                    <p className="text-[9px] font-bold text-brand-slate uppercase tracking-widest">{stat.label}</p>
                  </div>
                  <p className={cn("text-3xl font-black", stat.color)}>{stat.val}</p>
                </GlassPanel>
              </motion.div>
            ))}

            {/* SLA Compliance Indicators */}
            <GlassPanel className="p-6 border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-4 w-4 text-brand-blue" />
                <p className="text-[9px] font-bold text-brand-blue uppercase tracking-widest">SLA Compliance</p>
              </div>
              <div className="space-y-4">
                {slaIndicators.map((sla) => (
                  <div key={sla.label}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[9px] text-brand-slate">{sla.label}</span>
                      <span className={`text-[9px] font-bold ${sla.compliance > 98 ? 'text-emerald-400' : 'text-amber-400'}`}>{sla.compliance}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${sla.compliance}%` }}
                        transition={{ duration: 1.2 }}
                        className={`h-full rounded-full ${sla.compliance > 98 ? 'bg-emerald-500/70' : 'bg-amber-500/70'}`}
                      />
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-[7px] text-brand-slate">Target: {sla.target}</span>
                      <span className="text-[7px] text-white font-medium">Actual: {sla.actual}</span>
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Predictive Recovery */}
            <GlassPanel className="p-6 border-brand-blue/15 bg-brand-blue/[0.04]">
              <div className="flex items-center gap-2 mb-4">
                <Gauge className="h-4 w-4 text-brand-blue" />
                <p className="text-[9px] font-bold text-brand-blue uppercase tracking-widest">Predictive Recovery</p>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Q2 Forecast', val: '94.2%' },
                  { label: 'Risk Zones Identified', val: '3 regions' },
                  { label: 'Mitigation Status', val: 'Active' },
                  { label: 'Predicted Savings', val: '$2.4M' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center">
                    <span className="text-[10px] text-brand-slate">{item.label}</span>
                    <span className="text-[10px] text-white font-bold">{item.val}</span>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </div>
        </div>
      </div>
    </section>
  );
};
