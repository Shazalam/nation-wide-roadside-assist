'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Activity, Map, PieChart, TrendingUp } from 'lucide-react';

const areaData = [
  { time: '00:00', load: 30 }, { time: '04:00', load: 45 },
  { time: '08:00', load: 85 }, { time: '12:00', load: 70 },
  { time: '16:00', load: 90 }, { time: '20:00', load: 60 },
  { time: '23:59', load: 40 },
];

const barData = [
  { name: 'NE', val: 92 }, { name: 'SE', val: 88 },
  { name: 'MW', val: 95 }, { name: 'SW', val: 98 },
  { name: 'W', val: 94 },
];

export const TelemetrySection = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="py-32 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.3em] mb-4">Real-Time Telemetry</p>
            <h2 className="text-4xl lg:text-5xl font-black text-foreground dark:text-white mb-6">Advanced Operational Analytics</h2>
            <p className="text-brand-slate text-lg leading-relaxed">
              Monitor dispatch heatmaps, incident density, and regional SLA performance through our mission-critical telemetry engine.
            </p>
          </div>
          <GlassPanel className="p-4 px-6 border-brand-blue/20 bg-brand-blue/5 hidden lg:flex items-center gap-4">
             <Activity className="h-5 w-5 text-brand-blue animate-pulse" />
             <div>
                <p className="text-[10px] font-bold text-foreground dark:text-white uppercase tracking-widest">Global Stream</p>
                <p className="text-xs text-brand-blue font-bold">14.2 GB/sec telemetry load</p>
             </div>
          </GlassPanel>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Chart */}
          <GlassPanel className="lg:col-span-8 p-8 border-brand-border bg-card/40 h-[500px] flex flex-col">
            <div className="flex items-center justify-between mb-8">
               <div className="flex items-center gap-3">
                  <TrendingUp className="h-5 w-5 text-brand-blue" />
                  <h4 className="text-xl font-bold text-foreground dark:text-white tracking-tight">Dispatch Performance Forecasting</h4>
               </div>
               <div className="flex gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                  <span className="text-[9px] text-brand-slate uppercase font-bold tracking-widest">AI Prediction Mode Active</span>
               </div>
            </div>
            <div className="flex-1 w-full">
               {mounted && (
                 <ResponsiveContainer width="100%" height="100%">
                   <AreaChart data={areaData}>
                     <defs>
                       <linearGradient id="telemetryGrad" x1="0" y1="0" x2="0" y2="1">
                         <stop offset="5%" stopColor="#2F80FF" stopOpacity={0.4} />
                         <stop offset="95%" stopColor="#2F80FF" stopOpacity={0} />
                       </linearGradient>
                     </defs>
                     <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                     <XAxis dataKey="time" stroke="#475569" fontSize={10} tickLine={false} axisLine={false} />
                     <YAxis stroke="#475569" fontSize={10} tickLine={false} axisLine={false} />
                     <Tooltip 
                       contentStyle={{ backgroundColor: '#0A192F', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                       itemStyle={{ color: '#fff', fontSize: '12px', fontWeight: 'bold' }}
                     />
                     <Area type="monotone" dataKey="load" stroke="#2F80FF" strokeWidth={3} fill="url(#telemetryGrad)" />
                   </AreaChart>
                 </ResponsiveContainer>
               )}
            </div>
          </GlassPanel>

          {/* Sidebar Stats */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <GlassPanel className="flex-1 p-8 border-brand-border bg-card/40 flex flex-col">
               <div className="flex items-center gap-3 mb-6">
                  <Map className="h-5 w-5 text-brand-blue" />
                  <h4 className="text-lg font-bold text-foreground dark:text-white tracking-tight">Regional SLA Scoring</h4>
               </div>
               <div className="flex-1 w-full min-h-[200px]">
                  {mounted && (
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={barData}>
                        <XAxis dataKey="name" stroke="#475569" fontSize={10} tickLine={false} axisLine={false} />
                        <Bar dataKey="val" radius={[4, 4, 0, 0]}>
                           {barData.map((entry, index) => (
                             <Cell key={`cell-${index}`} fill={entry.val > 95 ? '#2F80FF' : 'rgba(47, 128, 255, 0.2)'} />
                           ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  )}
               </div>
               <div className="mt-6 flex justify-between items-center text-[10px] text-brand-slate uppercase tracking-widest font-bold">
                  <span>Avg: 93.4%</span>
                  <span className="text-emerald-400">↑ 1.2% Improvement</span>
               </div>
            </GlassPanel>

            <GlassPanel className="p-8 border-brand-border bg-white/[0.02]">
               <div className="flex items-center gap-3 mb-4">
                  <PieChart className="h-5 w-5 text-brand-blue" />
                  <h4 className="text-lg font-bold text-foreground dark:text-white tracking-tight">Incident Density</h4>
               </div>
               <div className="space-y-4">
                  {[
                    { l: 'Major Highway (I-95, I-10)', v: 42, color: 'bg-brand-blue' },
                    { l: 'Urban Centers', v: 38, color: 'bg-brand-blue/60' },
                    { l: 'Remote / Rural', v: 20, color: 'bg-brand-blue/20' }
                  ].map((s, i) => (
                    <div key={i}>
                       <div className="flex justify-between text-[10px] text-brand-slate mb-1.5 font-bold">
                          <span>{s.l}</span>
                          <span className="text-foreground dark:text-white">{s.v}%</span>
                       </div>
                       <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} whileInView={{ width: `${s.v}%` }} transition={{ duration: 1.5 }} className={`h-full ${s.color}`} />
                       </div>
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
