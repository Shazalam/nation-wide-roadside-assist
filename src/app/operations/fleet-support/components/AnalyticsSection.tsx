'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts';
import { TrendingUp, Activity, Shield, Zap, Globe } from 'lucide-react';

const analyticsData = [
  { month: 'Jan', downtime: 15, uptime: 85, compliance: 98.2 },
  { month: 'Feb', downtime: 12, uptime: 88, compliance: 98.5 },
  { month: 'Mar', downtime: 14, uptime: 86, compliance: 98.1 },
  { month: 'Apr', downtime: 10, uptime: 90, compliance: 98.8 },
  { month: 'May', downtime: 8, uptime: 92, compliance: 99.2 },
  { month: 'Jun', downtime: 9, uptime: 91, compliance: 99.0 },
];

export const AnalyticsSection = () => {
  return (
    <section className="py-24 relative bg-brand-bg overflow-hidden border-t border-brand-border">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
           <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="h-[1px] w-8 bg-[#2F80FF]" />
                <span className="text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.3em]">Fleet Operational Analytics</span>
              </motion.div>
              <h2 className="text-4xl lg:text-5xl font-black text-foreground dark:text-white tracking-tight">
                Deep <span className="text-[#2F80FF]">Operational Insights</span>
              </h2>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
           
           {/* Chart 1: Downtime Reduction */}
           <div className="lg:col-span-4">
              <GlassPanel className="p-8 h-full flex flex-col border-brand-border bg-card/60">
                 <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                       <TrendingUp className="h-4 w-4 text-emerald-400" />
                       <span className="text-[10px] font-black text-foreground dark:text-white uppercase tracking-widest leading-none">Downtime Reduction</span>
                    </div>
                    <span className="text-2xl font-black text-emerald-400 tracking-tighter">-12.4%</span>
                 </div>
                 <div className="h-48 w-full mt-auto">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={analyticsData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                        <XAxis dataKey="month" hide />
                        <YAxis hide />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#0A192F', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                          itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                        />
                        <Bar dataKey="downtime" fill="#2F80FF" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                 </div>
              </GlassPanel>
           </div>

           {/* Chart 2: SLA Compliance Trend */}
           <div className="lg:col-span-8">
              <GlassPanel className="p-8 h-full flex flex-col border-brand-border bg-card/60">
                 <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                       <Shield className="h-4 w-4 text-[#2F80FF]" />
                       <span className="text-[10px] font-black text-foreground dark:text-white uppercase tracking-widest leading-none">SLA Compliance Index</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                       <span className="text-[11px] font-black text-foreground dark:text-white tracking-widest leading-none">98.6% MONTH AVG</span>
                    </div>
                 </div>
                 <div className="h-48 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={analyticsData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 10, fontWeight: 700 }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 10, fontWeight: 700 }} domain={[97.5, 100]} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#0A192F', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                          itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                        />
                        <Line type="monotone" dataKey="compliance" stroke="#2F80FF" strokeWidth={3} dot={{ r: 4, fill: '#2F80FF', strokeWidth: 0 }} />
                      </LineChart>
                    </ResponsiveContainer>
                 </div>
              </GlassPanel>
           </div>

           {/* Small Metric Widgets */}
           <div className="lg:col-span-3">
              <GlassPanel className="p-6 border-brand-border bg-card/60">
                 <p className="text-[9px] font-black text-brand-slate uppercase tracking-widest mb-4">Total Dispatches</p>
                 <div className="flex items-end justify-between">
                    <span className="text-3xl font-black text-foreground dark:text-white tracking-tighter">4.8M+</span>
                    <Zap className="h-4 w-4 text-[#FF7A1A]" />
                 </div>
                 <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: '75%' }} className="h-full bg-[#FF7A1A]" />
                 </div>
              </GlassPanel>
           </div>
           <div className="lg:col-span-3">
              <GlassPanel className="p-6 border-brand-border bg-card/60">
                 <p className="text-[9px] font-black text-brand-slate uppercase tracking-widest mb-4">Preventive Events</p>
                 <div className="flex items-end justify-between">
                    <span className="text-3xl font-black text-foreground dark:text-white tracking-tighter">2.1M+</span>
                    <Activity className="h-4 w-4 text-emerald-400" />
                 </div>
                 <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: '60%' }} className="h-full bg-emerald-400" />
                 </div>
              </GlassPanel>
           </div>
           
           {/* Map/Heatmap Widget */}
           <div className="lg:col-span-6">
              <GlassPanel className="p-6 border-brand-border bg-card/60 relative overflow-hidden h-full">
                 <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className="flex items-center gap-3">
                       <Globe className="h-4 w-4 text-[#2F80FF]" />
                       <span className="text-[10px] font-black text-foreground dark:text-white uppercase tracking-widest leading-none">Regional Heatmap</span>
                    </div>
                 </div>
                 <div className="h-32 w-full flex items-center justify-center relative">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/3/3f/World_map_blank_without_borders.svg')] bg-center bg-contain bg-no-repeat grayscale invert" />
                    <div className="relative z-10 h-12 w-12 rounded-full bg-[#2F80FF]/20 flex items-center justify-center">
                       <div className="h-4 w-4 rounded-full bg-[#2F80FF] animate-ping" />
                    </div>
                 </div>
              </GlassPanel>
           </div>

        </div>
      </div>
    </section>
  );
};
