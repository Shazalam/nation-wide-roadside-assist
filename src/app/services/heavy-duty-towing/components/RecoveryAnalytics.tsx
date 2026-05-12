'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, AreaChart, Area
} from 'recharts';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Activity, Shield, Map, TrendingUp, Clock, Users } from 'lucide-react';

const data = [
  { name: 'Mon', volume: 12842, response: 43 },
  { name: 'Tue', volume: 13200, response: 41 },
  { name: 'Wed', volume: 14500, response: 45 },
  { name: 'Thu', volume: 13800, response: 42 },
  { name: 'Fri', volume: 15900, response: 46 },
  { name: 'Sat', volume: 15200, response: 44 },
  { name: 'Sun', volume: 13400, response: 40 },
];

export const RecoveryAnalytics = () => {
  return (
    <section className="py-32 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20">
          <div className="max-w-3xl">
            <p className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.3em] mb-4">Operational Intelligence</p>
            <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-none">Recovery Intelligence & Analytics</h2>
          </div>
          <div className="flex gap-4">
             <GlassPanel className="p-4 py-2 border-brand-blue/20 bg-brand-blue/5 flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-brand-blue animate-pulse" />
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">Real-time Operational Stream</span>
             </GlassPanel>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           {/* Chart Column */}
           <div className="lg:col-span-8">
              <GlassPanel className="p-10 border-white/10 bg-[#0A192F]/60 h-[550px] flex flex-col">
                 <div className="flex justify-between items-start mb-12">
                    <div>
                       <h4 className="text-xl font-black text-white tracking-tight">Recovery Volume Velocity</h4>
                       <p className="text-[10px] text-[#94A3B8] uppercase tracking-widest mt-1.5 font-bold">Weekly Heavy recovery distribution</p>
                    </div>
                    <div className="flex gap-8">
                       <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-brand-blue" />
                          <span className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest">Incidents</span>
                       </div>
                    </div>
                 </div>
                 
                 <div className="flex-1 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                       <AreaChart data={data}>
                          <defs>
                             <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#2F80FF" stopOpacity={0.4}/>
                                <stop offset="95%" stopColor="#2F80FF" stopOpacity={0}/>
                             </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                          <XAxis 
                             dataKey="name" 
                             axisLine={false} 
                             tickLine={false} 
                             tick={{ fill: '#94A3B8', fontSize: 10, fontWeight: 'bold' }} 
                             dy={15}
                          />
                          <YAxis 
                             axisLine={false} 
                             tickLine={false} 
                             tick={{ fill: '#94A3B8', fontSize: 10, fontWeight: 'bold' }} 
                          />
                          <Tooltip 
                             contentStyle={{ backgroundColor: '#0A192F', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '12px' }}
                             itemStyle={{ color: '#fff', fontSize: '11px', fontWeight: 'bold' }}
                          />
                          <Area type="monotone" dataKey="volume" stroke="#2F80FF" strokeWidth={4} fillOpacity={1} fill="url(#colorVolume)" />
                       </AreaChart>
                    </ResponsiveContainer>
                 </div>
              </GlassPanel>
           </div>

           {/* Metrics Column */}
           <div className="lg:col-span-4 space-y-8">
              {[
                { label: 'Recovery Volume', val: '12,842', trend: '+ 8.2%', icon: Activity, color: 'text-brand-blue' },
                { label: 'Avg Response Time', val: '43 min', trend: '+ 6.1%', icon: Clock, color: 'text-brand-orange' },
                { label: 'SLA Compliance', val: '97.6%', trend: '+ 5.7%', icon: Shield, color: 'text-emerald-400' }
              ].map((m, i) => (
                <GlassPanel key={i} className="p-8 border-white/10 bg-[#0A192F]/60">
                   <div className="flex items-center gap-5 mb-8">
                      <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center">
                         <m.icon className={`h-6 w-6 ${m.color}`} />
                      </div>
                      <div>
                         <p className="text-[10px] font-black text-[#94A3B8] uppercase tracking-[0.2em]">{m.label}</p>
                         <div className="flex items-center gap-3 mt-1">
                            <span className="text-3xl font-black text-white">{m.val}</span>
                            <span className="text-[10px] font-bold text-emerald-400">{m.trend}</span>
                         </div>
                      </div>
                   </div>
                   <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: '85%' }} transition={{ duration: 1.5, delay: i * 0.1 }} className={`h-full ${m.color.replace('text-', 'bg-')} shadow-[0_0_15px_currentColor]`} />
                   </div>
                </GlassPanel>
              ))}

              <GlassPanel className="p-8 border-white/10 bg-[#0A192F]/60 h-44 relative overflow-hidden">
                 <div className="relative z-10">
                    <p className="text-[11px] font-black text-white uppercase tracking-widest mb-6">Recovery Heatmap</p>
                    <div className="flex items-center gap-4">
                       <Map className="h-12 w-12 text-brand-blue opacity-30" />
                       <div className="space-y-1">
                          <p className="text-[10px] font-black text-white">East Coast Mesh</p>
                          <p className="text-[9px] text-[#94A3B8] font-bold">High Density Incident Zone</p>
                       </div>
                    </div>
                 </div>
                 {/* Visual simulation of a heatmap */}
                 <div className="absolute top-0 right-0 h-full w-1/2 opacity-20 pointer-events-none">
                    <div className="h-12 w-12 rounded-full bg-brand-orange blur-3xl absolute top-10 right-10" />
                    <div className="h-16 w-16 rounded-full bg-brand-blue blur-3xl absolute bottom-10 right-20" />
                 </div>
              </GlassPanel>
           </div>
        </div>
      </div>
    </section>
  );
};
