'use client';

import React from 'react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { AreaChart, Area, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const lineData1 = [ { v: 40 }, { v: 50 }, { v: 45 }, { v: 60 }, { v: 55 }, { v: 70 } ];
const lineData2 = [ { v: 60 }, { v: 55 }, { v: 50 }, { v: 45 }, { v: 40 }, { v: 38 } ];
const lineData3 = [ { v: 90 }, { v: 92 }, { v: 95 }, { v: 94 }, { v: 97 }, { v: 98 } ];
const lineData4 = [ { v: 70 }, { v: 72 }, { v: 75 }, { v: 74 }, { v: 78 }, { v: 79 } ];

const pieData1 = [
  { name: 'Resolved', value: 79.4, color: '#2F80FF' },
  { name: 'Escalated', value: 15.6, color: '#FF7A1A' },
  { name: 'Abandoned', value: 5.0, color: '#EF4444' }
];

const pieData2 = [
  { name: 'High', value: 32.1, color: '#FF7A1A' },
  { name: 'Medium', value: 41.3, color: '#2F80FF' },
  { name: 'Low', value: 26.6, color: '#10B981' }
];

export const CallCenterAnalytics = () => {
  return (
    <section className="container mx-auto px-4 mb-24">
       <div className="grid lg:grid-cols-2 gap-6">
         
         <GlassPanel className="p-6 border-white/5 bg-[#0A192F]/40 h-full">
            <h3 className="text-lg font-bold text-white mb-6">Call Center Analytics</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 h-32">
               {[
                  { title: "Call Volume", val: "8,742", trend: "+12.6%", data: lineData1, color: "#10B981" },
                  { title: "Avg. Handle Time", val: "04:28", trend: "-4.3%", data: lineData2, color: "#10B981" },
                  { title: "SLA Compliance", val: "97.8%", trend: "+2.1%", data: lineData3, color: "#10B981" },
                  { title: "First Call Resolution", val: "79.4%", trend: "+6.2%", data: lineData4, color: "#10B981" },
               ].map((item, i) => (
                  <div key={i} className="flex flex-col border-r border-white/5 pr-4 last:border-0">
                     <div className="text-[10px] font-bold text-[#94A3B8] uppercase mb-1">{item.title}</div>
                     <div className="flex justify-between items-end mb-2">
                        <div className="text-lg font-mono text-white">{item.val}</div>
                        <div className="text-[9px] font-mono text-emerald-400">{item.trend}</div>
                     </div>
                     <div className="flex-1">
                        <ResponsiveContainer width="100%" height="100%">
                           <AreaChart data={item.data}>
                              <defs>
                                 <linearGradient id={`grad${i}`} x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor={item.color} stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor={item.color} stopOpacity={0}/>
                                 </linearGradient>
                              </defs>
                              <Area type="monotone" dataKey="v" stroke={item.color} fillOpacity={1} fill={`url(#grad${i})`} strokeWidth={2} />
                           </AreaChart>
                        </ResponsiveContainer>
                     </div>
                  </div>
               ))}
            </div>
         </GlassPanel>

         <GlassPanel className="p-6 border-white/5 bg-[#0A192F]/40 h-full">
            <div className="grid grid-cols-3 gap-6 h-full items-center">
               
               <div>
                  <div className="text-[10px] font-bold text-[#94A3B8] uppercase mb-4 text-center">Call Outcome</div>
                  <div className="h-24 relative flex justify-center">
                     <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                           <Pie data={pieData1} innerRadius={25} outerRadius={40} dataKey="value" stroke="none">
                              {pieData1.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                           </Pie>
                        </PieChart>
                     </ResponsiveContainer>
                  </div>
               </div>

               <div>
                  <div className="text-[10px] font-bold text-[#94A3B8] uppercase mb-4 text-center">Incident Priority</div>
                  <div className="h-24 relative flex justify-center">
                     <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                           <Pie data={pieData2} innerRadius={25} outerRadius={40} dataKey="value" stroke="none">
                              {pieData2.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                           </Pie>
                        </PieChart>
                     </ResponsiveContainer>
                  </div>
               </div>

               <div className="flex flex-col items-center justify-center">
                  <div className="text-[10px] font-bold text-[#94A3B8] uppercase mb-4 text-center">Customer Satisfaction</div>
                  <div className="h-24 w-24 rounded-full border-4 border-[#2F80FF]/20 border-t-[#2F80FF] flex flex-col items-center justify-center">
                     <div className="text-2xl font-bold text-white">4.8</div>
                     <div className="text-[9px] text-[#94A3B8] uppercase">Out of 5</div>
                  </div>
               </div>

            </div>
         </GlassPanel>

       </div>
    </section>
  );
};
