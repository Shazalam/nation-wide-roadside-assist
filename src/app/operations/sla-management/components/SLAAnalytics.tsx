'use client';

import React from 'react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { AreaChart, Area, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const lineData1 = [ { v: 92 }, { v: 94 }, { v: 93 }, { v: 96 }, { v: 95 }, { v: 98 } ];
const lineData2 = [ { v: 5.1 }, { v: 4.8 }, { v: 4.6 }, { v: 4.3 }, { v: 4.2 }, { v: 4.1 } ];

const pieData1 = [
  { name: 'Resolved', value: 78.6, color: '#10B981' },
  { name: 'Escalated', value: 15.4, color: '#FF7A1A' },
  { name: 'Failed', value: 6.0, color: '#EF4444' }
];

export const SLAAnalytics = () => {
  return (
     <GlassPanel className="p-6 border-white/5 bg-[#0A192F]/40 h-full flex flex-col">
        <h3 className="text-lg font-bold text-white mb-6">Enterprise Analytics</h3>
        
        <div className="grid grid-cols-2 gap-4 h-32 mb-6">
           {[
              { title: "SLA Forecasting", val: "98.2%", trend: "+0.4%", data: lineData1, color: "#10B981" },
              { title: "Dispatch Efficiency", val: "4.1m", trend: "-12.4%", data: lineData2, color: "#2F80FF" },
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

        <div className="grid grid-cols-2 gap-6 h-32 items-center border-t border-white/5 pt-6 mt-auto">
           <div>
              <div className="text-[10px] font-bold text-[#94A3B8] uppercase mb-4 text-center">Incident Resolution Analytics</div>
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

           <div className="flex flex-col items-center justify-center">
              <div className="text-[10px] font-bold text-[#94A3B8] uppercase mb-4 text-center">Customer Satisfaction Telemetry</div>
              <div className="h-24 w-24 rounded-full border-4 border-[#2F80FF]/20 border-t-[#2F80FF] flex flex-col items-center justify-center">
                 <div className="text-2xl font-bold text-white">4.8</div>
                 <div className="text-[9px] text-[#94A3B8] uppercase">Out of 5</div>
              </div>
           </div>
        </div>
     </GlassPanel>
  );
};
