'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, Clock, ShieldCheck, Zap } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const data = [
  { time: '00:00', load: 30, sla: 99.9 },
  { time: '04:00', load: 20, sla: 99.9 },
  { time: '08:00', load: 85, sla: 99.7 },
  { time: '12:00', load: 95, sla: 99.6 },
  { time: '16:00', load: 70, sla: 99.8 },
  { time: '20:00', load: 45, sla: 99.9 }
];

export const AnalyticsDashboard = () => {
  return (
    <section className="py-24 bg-[#0A192F]/20 relative z-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
           
           <div className="lg:col-span-5">
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight mb-8">
                 Operational Analytics <br />
                 <span className="text-[#94A3B8]">& ETA Forecasting</span>
              </h2>
              <div className="space-y-6 text-[#94A3B8] font-medium leading-relaxed text-sm md:text-base mb-10">
                 <p>
                    Dispatch decisions are not based on guesswork. Our systems utilize real-time operational data to forecast vendor availability, routing times, and regional load balancing.
                 </p>
                 <p>
                    By tracking historical completion metrics and SLA compliance, we continuously optimize the recovery network for enterprise fleet operations.
                 </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 {[
                   { label: 'Dispatch Efficiency', val: '94%', icon: Zap },
                   { label: 'Fleet Downtime Reduction', val: '28%', icon: Clock }
                 ].map((stat, i) => (
                   <div key={i} className="flex items-center gap-4 bg-white/[0.02] border border-white/5 p-4 rounded-xl">
                      <div className="h-10 w-10 bg-white/5 rounded flex items-center justify-center">
                         <stat.icon className="h-4 w-4 text-[#2F80FF]" />
                      </div>
                      <div>
                         <p className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest mb-1">{stat.label}</p>
                         <p className="text-xl font-black text-white">{stat.val}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="lg:col-span-7">
              <GlassPanel className="p-6 border-white/5 bg-[#081120] relative overflow-hidden shadow-2xl">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-[#2F80FF]/10 blur-3xl rounded-full" />
                 
                 <div className="flex justify-between items-center mb-8 relative z-10">
                    <div>
                       <h3 className="text-[11px] font-black text-white uppercase tracking-widest flex items-center gap-2">
                          <Activity className="h-4 w-4 text-emerald-400" />
                          Live Operational Load vs SLA
                       </h3>
                    </div>
                    <div className="flex gap-4">
                       <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#2F80FF]" />
                          <span className="text-[9px] font-mono text-[#94A3B8]">LOAD</span>
                       </div>
                       <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-emerald-400" />
                          <span className="text-[9px] font-mono text-[#94A3B8]">SLA %</span>
                       </div>
                    </div>
                 </div>

                 <div className="h-64 w-full relative z-10">
                    <ResponsiveContainer width="100%" height="100%">
                       <LineChart data={data} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                          <XAxis dataKey="time" stroke="rgba(255,255,255,0.2)" fontSize={10} tickMargin={10} />
                          <YAxis yAxisId="left" stroke="rgba(255,255,255,0.2)" fontSize={10} />
                          <YAxis yAxisId="right" orientation="right" stroke="rgba(255,255,255,0.2)" fontSize={10} domain={[99, 100]} />
                          <Tooltip 
                            contentStyle={{ backgroundColor: '#081120', borderColor: 'rgba(255,255,255,0.1)', fontSize: '10px', textTransform: 'uppercase', fontFamily: 'monospace' }}
                            itemStyle={{ color: '#fff' }}
                          />
                          <Line yAxisId="left" type="monotone" dataKey="load" stroke="#2F80FF" strokeWidth={3} dot={{ r: 4, fill: '#081120', stroke: '#2F80FF', strokeWidth: 2 }} />
                          <Line yAxisId="right" type="monotone" dataKey="sla" stroke="#34d399" strokeWidth={3} dot={{ r: 4, fill: '#081120', stroke: '#34d399', strokeWidth: 2 }} />
                       </LineChart>
                    </ResponsiveContainer>
                 </div>
              </GlassPanel>
           </div>

        </div>
      </div>
    </section>
  );
};
