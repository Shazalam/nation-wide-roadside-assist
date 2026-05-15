'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, AreaChart, Area, 
  PieChart, Pie, Cell 
} from 'recharts';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Activity, ShieldCheck, Clock, Star } from 'lucide-react';

const volumeData = [
  { name: 'Mon', events: 400 },
  { name: 'Tue', events: 600 },
  { name: 'Wed', events: 550 },
  { name: 'Thu', events: 700 },
  { name: 'Fri', events: 800 },
  { name: 'Sat', events: 650 },
  { name: 'Sun', events: 500 },
];

const COLORS = ['#2F80FF', '#FF7A1A'];
const pieData = [
  { name: 'Resolved', value: 98.7 },
  { name: 'Escalated', value: 1.3 }
];

export const EnterpriseAnalytics = () => {
  return (
    <section className="py-24 bg-card/20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           
           {/* Mobility Analytics */}
           <GlassPanel className="p-8 border-brand-border bg-white/[0.02]">
              <div className="flex items-center justify-between mb-8">
                 <h3 className="text-xl font-black text-foreground dark:text-white">Mobility Analytics</h3>
                 <button className="text-[10px] font-bold text-[#2F80FF] uppercase tracking-widest hover:underline">View Full Dashboard</button>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-8">
                 <div>
                    <p className="text-[10px] font-bold text-brand-slate uppercase tracking-widest mb-1">Assistance Events <span className="text-[8px] opacity-60">(This Month)</span></p>
                    <div className="flex items-end gap-3">
                       <span className="text-4xl font-black text-foreground dark:text-white leading-none">1.9M</span>
                       <span className="text-[10px] font-bold text-emerald-400 mb-1">+ 12.4%</span>
                    </div>
                 </div>
                 <div className="h-24 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                       <BarChart data={volumeData}>
                          <Bar dataKey="events" fill="#2F80FF" radius={[4, 4, 0, 0]} />
                          <Tooltip 
                            cursor={{fill: 'rgba(255,255,255,0.05)'}}
                            contentStyle={{ backgroundColor: '#0A192F', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                          />
                       </BarChart>
                    </ResponsiveContainer>
                 </div>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-brand-border">
                 <div>
                    <p className="text-[9px] font-bold text-brand-slate uppercase tracking-widest mb-1">SLA Compliance</p>
                    <p className="text-xl font-black text-foreground dark:text-white mb-1">98.7% <span className="text-[9px] text-emerald-400 ml-1">+ 6.2%</span></p>
                 </div>
                 <div>
                    <p className="text-[9px] font-bold text-brand-slate uppercase tracking-widest mb-1">Resolution Time</p>
                    <p className="text-xl font-black text-foreground dark:text-white mb-1">42 min</p>
                 </div>
                 <div>
                    <p className="text-[9px] font-bold text-brand-slate uppercase tracking-widest mb-1">Customer Satisfaction</p>
                    <p className="text-xl font-black text-foreground dark:text-white mb-1">4.8 / 5 <span className="text-[9px] text-emerald-400 ml-1">+ 0.3</span></p>
                 </div>
              </div>
           </GlassPanel>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {/* Operational Metrics Stack */}
             <div className="space-y-4">
               {[
                 { label: 'Active Assistance Cases', val: '642', trend: '+ 8.2%', chart: volumeData },
                 { label: 'Transportation Availability', val: '85%', trend: '+ 6.1%', chart: volumeData.slice().reverse() },
                 { label: 'ETA Accuracy', val: '96.3%', trend: '+ 5.4%', chart: volumeData },
                 { label: 'Mobility Resolution Rate', val: '98.7%', trend: '+ 5.7%', chart: volumeData.slice().reverse() }
               ].map((metric, i) => (
                 <GlassPanel key={i} className="p-4 border-brand-border bg-white/[0.02] flex items-center justify-between">
                    <div>
                       <p className="text-[9px] font-bold text-brand-slate uppercase tracking-widest mb-1">{metric.label}</p>
                       <p className="text-lg font-black text-foreground dark:text-white">{metric.val}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                       <span className="text-[9px] font-bold text-emerald-400">{metric.trend}</span>
                       <div className="h-6 w-20">
                          <ResponsiveContainer width="100%" height="100%">
                             <AreaChart data={metric.chart}>
                                <defs>
                                   <linearGradient id={`colorM${i}`} x1="0" y1="0" x2="0" y2="1">
                                      <stop offset="5%" stopColor="#2F80FF" stopOpacity={0.3}/>
                                      <stop offset="95%" stopColor="#2F80FF" stopOpacity={0}/>
                                   </linearGradient>
                                </defs>
                                <Area type="monotone" dataKey="events" stroke="#2F80FF" fillOpacity={1} fill={`url(#colorM${i})`} />
                             </AreaChart>
                          </ResponsiveContainer>
                       </div>
                    </div>
                 </GlassPanel>
               ))}
             </div>
             
             {/* Pie Chart / Summary */}
             <GlassPanel className="p-6 border-brand-border bg-white/[0.02] flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[#2F80FF]/5 blur-3xl rounded-full" />
                <h4 className="text-[10px] font-black text-foreground dark:text-white uppercase tracking-widest mb-6 absolute top-6 left-6">Resolution Rate</h4>
                <div className="h-40 w-40 relative">
                   <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                         <Pie
                           data={pieData}
                           innerRadius={60}
                           outerRadius={80}
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
                   <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className="text-3xl font-black text-foreground dark:text-white leading-none">98.7%</span>
                   </div>
                </div>
                <div className="flex items-center gap-6 mt-6">
                   <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-sm bg-[#2F80FF]" />
                      <span className="text-[10px] font-bold text-brand-slate uppercase">Resolved</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-sm bg-[#FF7A1A]" />
                      <span className="text-[10px] font-bold text-brand-slate uppercase">Escalated</span>
                   </div>
                </div>
             </GlassPanel>
           </div>

        </div>
      </div>
    </section>
  );
};
