'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, AreaChart, Area, 
  PieChart, Pie, Cell 
} from 'recharts';
import { GlassPanel } from '@/components/ui/glass-panel';

const volumeData = [
  { name: 'Mon', events: 1200 },
  { name: 'Tue', events: 1800 },
  { name: 'Wed', events: 1550 },
  { name: 'Thu', events: 2100 },
  { name: 'Fri', events: 2800 },
  { name: 'Sat', events: 2650 },
  { name: 'Sun', events: 1500 },
];

const pieData = [
  { name: 'Successful', value: 97.2 },
  { name: 'Unsuccessful', value: 2.8 }
];
const COLORS = ['#FF7A1A', '#0A192F'];

export const EnterpriseAnalytics = () => {
  return (
    <section className="py-24 bg-brand-bg relative z-10">
      <div className="container mx-auto px-4">
        <GlassPanel className="p-8 border-brand-border bg-white/[0.01]">
           <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-black text-foreground dark:text-white">Vendor Analytics</h3>
              <button className="text-[10px] font-bold text-[#2F80FF] uppercase tracking-widest hover:underline">View Full Dashboard</button>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Dispatch Volume */}
              <div>
                 <p className="text-[9px] font-bold text-brand-slate uppercase tracking-widest mb-2">Dispatch Volume <span className="opacity-60">(This Month)</span></p>
                 <div className="flex items-end gap-3 mb-4">
                    <span className="text-4xl font-black text-foreground dark:text-white leading-none">2.7M</span>
                    <span className="text-[10px] font-bold text-emerald-400 mb-1">+ 12.4%</span>
                 </div>
                 <div className="h-24 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                       <BarChart data={volumeData}>
                          <Bar dataKey="events" fill="#2F80FF" radius={[2, 2, 0, 0]} />
                       </BarChart>
                    </ResponsiveContainer>
                 </div>
              </div>

              {/* SLA Compliance */}
              <div>
                 <p className="text-[9px] font-bold text-brand-slate uppercase tracking-widest mb-2">SLA Compliance</p>
                 <div className="flex items-end gap-3 mb-4">
                    <span className="text-4xl font-black text-foreground dark:text-white leading-none">98.9%</span>
                    <span className="text-[10px] font-bold text-emerald-400 mb-1">+ 6.2%</span>
                 </div>
                 <div className="h-24 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                       <AreaChart data={volumeData.slice().reverse()}>
                          <defs>
                             <linearGradient id="colorSla" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#34d399" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#34d399" stopOpacity={0}/>
                             </linearGradient>
                          </defs>
                          <Area type="monotone" dataKey="events" stroke="#34d399" fillOpacity={1} fill="url(#colorSla)" />
                       </AreaChart>
                    </ResponsiveContainer>
                 </div>
              </div>

              {/* Avg. Response Time */}
              <div>
                 <p className="text-[9px] font-bold text-brand-slate uppercase tracking-widest mb-2">Avg. Response Time</p>
                 <div className="flex items-end gap-3 mb-4">
                    <span className="text-4xl font-black text-foreground dark:text-white leading-none">28 min</span>
                    <span className="text-[10px] font-bold text-emerald-400 mb-1">↓ 9.3%</span>
                 </div>
                 <div className="h-24 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                       <AreaChart data={volumeData}>
                          <defs>
                             <linearGradient id="colorRes" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#2F80FF" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#2F80FF" stopOpacity={0}/>
                             </linearGradient>
                          </defs>
                          <Area type="monotone" dataKey="events" stroke="#2F80FF" fillOpacity={1} fill="url(#colorRes)" />
                       </AreaChart>
                    </ResponsiveContainer>
                 </div>
              </div>

              {/* Recovery Success Rate */}
              <div className="relative">
                 <p className="text-[9px] font-bold text-brand-slate uppercase tracking-widest mb-2">Recovery Success Rate</p>
                 <div className="flex items-end gap-3 mb-4">
                    <span className="text-4xl font-black text-foreground dark:text-white leading-none">97.2%</span>
                    <span className="text-[10px] font-bold text-emerald-400 mb-1">↑ 5.6%</span>
                 </div>
                 <div className="h-24 w-full relative">
                    <ResponsiveContainer width="100%" height="100%">
                       <PieChart>
                          <Pie
                            data={pieData}
                            innerRadius={35}
                            outerRadius={45}
                            paddingAngle={5}
                            dataKey="value"
                            stroke="none"
                          >
                            {pieData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                       </PieChart>
                    </ResponsiveContainer>
                 </div>
              </div>

           </div>
        </GlassPanel>
      </div>
    </section>
  );
};
