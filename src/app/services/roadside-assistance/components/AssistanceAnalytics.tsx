'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, AreaChart, Area,
  PieChart, Pie, Cell
} from 'recharts';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Activity, Shield, Map, PieChart as PieChartIcon, TrendingUp } from 'lucide-react';

const data = [
  { name: 'Mon', requests: 4200, sla: 98 },
  { name: 'Tue', requests: 3800, sla: 97 },
  { name: 'Wed', requests: 5100, sla: 99 },
  { name: 'Thu', requests: 4800, sla: 98 },
  { name: 'Fri', requests: 6200, sla: 96 },
  { name: 'Sat', requests: 5800, sla: 97 },
  { name: 'Sun', requests: 4400, sla: 99 },
];

const COLORS = ['#2F80FF', '#FF7A1A', '#8B5CF6', '#10B981'];

export const AssistanceAnalytics = () => {
  return (
    <section className="py-32 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20">
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.3em] mb-4">Operational Intelligence</p>
            <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight">Assistance Analytics Hub</h2>
          </div>
          <div className="flex gap-4">
             <GlassPanel className="p-4 py-2 border-white/5 bg-white/5 flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-brand-blue animate-pulse" />
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">Real-time Stream</span>
             </GlassPanel>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           {/* Volume Area Chart */}
           <div className="lg:col-span-8">
              <GlassPanel className="p-10 border-white/10 bg-[#0A192F]/60 h-[500px] flex flex-col">
                 <div className="flex justify-between items-start mb-10">
                    <div>
                       <h4 className="text-lg font-black text-white tracking-tight">Request Volume Velocity</h4>
                       <p className="text-[10px] text-[#94A3B8] uppercase tracking-widest mt-1">Weekly incident distribution</p>
                    </div>
                    <div className="flex gap-6">
                       <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-brand-blue" />
                          <span className="text-[9px] font-bold text-[#94A3B8] uppercase">Requests</span>
                       </div>
                    </div>
                 </div>
                 
                 <div className="flex-1 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                       <AreaChart data={data}>
                          <defs>
                             <linearGradient id="colorRequests" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#2F80FF" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#2F80FF" stopOpacity={0}/>
                             </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                          <XAxis 
                             dataKey="name" 
                             axisLine={false} 
                             tickLine={false} 
                             tick={{ fill: '#94A3B8', fontSize: 10, fontWeight: 'bold' }} 
                             dy={10}
                          />
                          <YAxis 
                             axisLine={false} 
                             tickLine={false} 
                             tick={{ fill: '#94A3B8', fontSize: 10, fontWeight: 'bold' }} 
                          />
                          <Tooltip 
                             contentStyle={{ backgroundColor: '#0A192F', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                             itemStyle={{ color: '#fff', fontSize: '12px', fontWeight: 'bold' }}
                          />
                          <Area type="monotone" dataKey="requests" stroke="#2F80FF" strokeWidth={3} fillOpacity={1} fill="url(#colorRequests)" />
                       </AreaChart>
                    </ResponsiveContainer>
                 </div>
              </GlassPanel>
           </div>

           {/* Metrics Column */}
           <div className="lg:col-span-4 space-y-8">
              <GlassPanel className="p-8 border-white/10 bg-[#0A192F]/60">
                 <div className="flex items-center gap-4 mb-8">
                    <div className="h-10 w-10 rounded-xl bg-brand-blue/10 flex items-center justify-center">
                       <Shield className="h-5 w-5 text-brand-blue" />
                    </div>
                    <div>
                       <p className="text-[10px] font-black text-[#94A3B8] uppercase tracking-widest">SLA Compliance</p>
                       <p className="text-2xl font-black text-white">97.8%</p>
                    </div>
                 </div>
                 <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: '97.8%' }} transition={{ duration: 1.5 }} className="h-full bg-brand-blue shadow-[0_0_10px_#2F80FF]" />
                 </div>
              </GlassPanel>

              <GlassPanel className="p-8 border-white/10 bg-[#0A192F]/60 flex-1">
                 <div className="flex items-center gap-4 mb-8">
                    <div className="h-10 w-10 rounded-xl bg-[#FF7A1A]/10 flex items-center justify-center">
                       <Map className="h-5 w-5 text-[#FF7A1A]" />
                    </div>
                    <div>
                       <p className="text-[10px] font-black text-[#94A3B8] uppercase tracking-widest">Incident Density</p>
                       <p className="text-2xl font-black text-white">High (East Coast)</p>
                    </div>
                 </div>
                 <div className="space-y-4">
                    {[
                      { label: 'North East', val: 82 },
                      { label: 'South East', val: 94 },
                      { label: 'Central', val: 68 },
                      { label: 'Pacific', val: 76 }
                    ].map((reg, i) => (
                      <div key={i} className="flex items-center gap-4">
                         <span className="text-[9px] font-bold text-brand-slate w-20">{reg.label}</span>
                         <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <motion.div initial={{ width: 0 }} whileInView={{ width: `${reg.val}%` }} transition={{ duration: 1, delay: i * 0.1 }} className="h-full bg-[#FF7A1A]" />
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
