'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area 
} from 'recharts';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Activity, Zap, TrendingUp, Users, Clock } from 'lucide-react';

const repairEventsData = [
  { name: 'Mon', events: 420 },
  { name: 'Tue', events: 580 },
  { name: 'Wed', events: 490 },
  { name: 'Thu', events: 620 },
  { name: 'Fri', events: 780 },
  { name: 'Sat', events: 350 },
  { name: 'Sun', events: 290 },
];

const slaData = [
  { name: '00:00', compliance: 98 },
  { name: '04:00', compliance: 99 },
  { name: '08:00', compliance: 97 },
  { name: '12:00', compliance: 98 },
  { name: '16:00', compliance: 96 },
  { name: '20:00', compliance: 99 },
];

export const RepairAnalytics = () => {
  return (
    <section className="py-32 relative z-10 bg-brand-bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
           <p className="text-[10px] font-black text-brand-blue uppercase tracking-[0.4em] mb-4">Operational Intelligence</p>
           <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Advanced Performance <br />Analytics Dashboard
           </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           
           {/* Main Large Chart: Service Events */}
           <div className="lg:col-span-8">
              <GlassPanel className="h-[500px] p-10 border-white/10 bg-[#0A192F]/60 flex flex-col">
                 <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-3">
                       <Activity className="h-5 w-5 text-brand-blue" />
                       <span className="text-xs font-black text-white uppercase tracking-widest">Service Events (7D)</span>
                    </div>
                    <div className="flex items-center gap-6">
                       <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-brand-blue" />
                          <span className="text-[10px] font-bold text-[#94A3B8] uppercase">Completed</span>
                       </div>
                    </div>
                 </div>
                 
                 <div className="flex-1 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                       <BarChart data={repairEventsData}>
                          <defs>
                             <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#2F80FF" stopOpacity={0.8} />
                                <stop offset="100%" stopColor="#2F80FF" stopOpacity={0.2} />
                             </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                          <XAxis 
                             dataKey="name" 
                             axisLine={false} 
                             tickLine={false} 
                             tick={{ fill: '#94A3B8', fontSize: 10, fontWeight: 700 }} 
                             dy={10}
                          />
                          <YAxis 
                             axisLine={false} 
                             tickLine={false} 
                             tick={{ fill: '#94A3B8', fontSize: 10, fontWeight: 700 }} 
                          />
                          <Tooltip 
                             cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                             contentStyle={{ backgroundColor: '#0A192F', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                          />
                          <Bar dataKey="events" fill="url(#barGradient)" radius={[6, 6, 0, 0]} barSize={40} />
                       </BarChart>
                    </ResponsiveContainer>
                 </div>
              </GlassPanel>
           </div>

           {/* Side Stats */}
           <div className="lg:col-span-4 space-y-8">
              <GlassPanel className="p-8 border-white/10 bg-[#0A192F]/60">
                 <div className="flex items-center gap-3 mb-6">
                    <Zap className="h-4 w-4 text-brand-blue" />
                    <span className="text-[10px] font-black text-white uppercase tracking-widest">SLA Compliance (Realtime)</span>
                 </div>
                 <div className="h-32 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                       <AreaChart data={slaData}>
                          <defs>
                             <linearGradient id="slaGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#2F80FF" stopOpacity={0.3} />
                                <stop offset="100%" stopColor="#2F80FF" stopOpacity={0} />
                             </linearGradient>
                          </defs>
                          <Area 
                             type="monotone" 
                             dataKey="compliance" 
                             stroke="#2F80FF" 
                             strokeWidth={3} 
                             fill="url(#slaGradient)" 
                          />
                       </AreaChart>
                    </ResponsiveContainer>
                 </div>
                 <div className="flex items-end justify-between mt-6">
                    <span className="text-4xl font-black text-white">98.9%</span>
                    <span className="text-[10px] font-bold text-emerald-400">↑ 0.5% vs Last Period</span>
                 </div>
              </GlassPanel>

              <div className="grid grid-cols-2 gap-8">
                 {[
                   { label: 'First Fix Rate', val: '91.3%', icon: TrendingUp },
                   { label: 'Customer Rating', val: '4.9/5', icon: Users }
                 ].map((kpi, i) => (
                   <GlassPanel key={i} className="p-6 border-white/5 bg-white/[0.02]">
                      <kpi.icon className="h-4 w-4 text-brand-blue mb-4 opacity-50" />
                      <p className="text-[9px] font-bold text-[#94A3B8] uppercase tracking-widest mb-1">{kpi.label}</p>
                      <p className="text-2xl font-black text-white">{kpi.val}</p>
                   </GlassPanel>
                 ))}
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};
