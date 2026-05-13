'use client';

import React from 'react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const data1 = [ { v: 40 }, { v: 30 }, { v: 45 }, { v: 25 }, { v: 35 }, { v: 28 } ];
const data2 = [ { v: 80 }, { v: 85 }, { v: 90 }, { v: 85 }, { v: 92 }, { v: 96 } ];

export const OperationalAnalytics = () => {
  return (
    <GlassPanel className="p-6 border-white/5 bg-[#0A192F]/40 h-full">
      <h3 className="text-lg font-bold text-white mb-6">Operational Analytics</h3>
      
      <div className="grid grid-cols-2 gap-4 h-48">
         {/* Metric Chart 1 */}
         <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 flex flex-col">
            <div className="flex justify-between items-start mb-4">
               <div>
                  <div className="text-[10px] font-bold text-white uppercase mb-1">Response Time</div>
                  <div className="text-xl font-mono text-white">28 min</div>
               </div>
               <div className="text-[10px] font-mono text-emerald-400">-8.3%</div>
            </div>
            <div className="flex-1">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data1}>
                     <defs>
                        <linearGradient id="color1" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="5%" stopColor="#2F80FF" stopOpacity={0.3}/>
                           <stop offset="95%" stopColor="#2F80FF" stopOpacity={0}/>
                        </linearGradient>
                     </defs>
                     <Area type="monotone" dataKey="v" stroke="#2F80FF" fillOpacity={1} fill="url(#color1)" strokeWidth={2} />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
         </div>

         {/* Metric Chart 2 */}
         <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 flex flex-col">
            <div className="flex justify-between items-start mb-4">
               <div>
                  <div className="text-[10px] font-bold text-white uppercase mb-1">Dispatch Efficiency</div>
                  <div className="text-xl font-mono text-white">92.6%</div>
               </div>
               <div className="text-[10px] font-mono text-emerald-400">+9.1%</div>
            </div>
            <div className="flex-1">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data2}>
                     <defs>
                        <linearGradient id="color2" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                           <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                        </linearGradient>
                     </defs>
                     <Area type="monotone" dataKey="v" stroke="#10B981" fillOpacity={1} fill="url(#color2)" strokeWidth={2} />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
         </div>
      </div>
    </GlassPanel>
  );
};
