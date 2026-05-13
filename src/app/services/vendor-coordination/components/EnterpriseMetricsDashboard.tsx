'use client';

import React from 'react';
import { ResponsiveContainer, AreaChart, Area } from 'recharts';

const dummyData = [
  { val: 10 }, { val: 25 }, { val: 15 }, { val: 30 }, { val: 20 }, { val: 40 }, { val: 35 }
];

const metrics = [
  { label: 'Active Dispatches', val: '642', trend: '+ 8.2%', color: 'text-emerald-400', chartColor: '#34d399' },
  { label: 'Vendor Availability', val: '87%', trend: '+ 6.1%', color: 'text-emerald-400', chartColor: '#34d399' },
  { label: 'SLA Compliance', val: '98.9%', trend: '+ 6.2%', color: 'text-emerald-400', chartColor: '#34d399' },
  { label: 'ETA Accuracy', val: '95.6%', trend: '+ 5.8%', color: 'text-emerald-400', chartColor: '#34d399' },
  { label: 'Fleet Coverage', val: '94.3%', trend: '+ 7.3%', color: 'text-emerald-400', chartColor: '#34d399' },
  { label: 'Recovery Success Rate', val: '97.2%', trend: '+ 8.4%', color: 'text-emerald-400', chartColor: '#34d399' },
  { label: 'Dispatch Volume (24h)', val: '8,247', trend: '+ 9.4%', color: 'text-emerald-400', chartColor: '#34d399' },
  { label: 'Operational Efficiency', val: '91.7%', trend: '+ 6.7%', color: 'text-emerald-400', chartColor: '#34d399' }
];

export const EnterpriseMetricsDashboard = () => {
  return (
    <section className="py-12 bg-brand-bg relative z-10">
      <div className="container mx-auto px-4">
        <div className="mb-6">
           <h3 className="text-sm font-black text-white uppercase tracking-widest">Operational Metrics <span className="text-[#2F80FF] ml-1">(Live)</span></h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 border-y border-white/5 py-8">
           {metrics.map((metric, i) => (
             <div key={i} className="flex flex-col border-r border-white/5 last:border-0 pr-4">
                <span className="text-[8px] font-bold text-[#94A3B8] uppercase tracking-widest mb-2">{metric.label}</span>
                <div className="flex items-end justify-between mb-2">
                   <span className="text-xl font-black text-white leading-none">{metric.val}</span>
                   <span className={`text-[8px] font-bold ${metric.color} leading-none`}>{metric.trend}</span>
                </div>
                <div className="h-8 w-full mt-auto">
                   <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={dummyData}>
                         <Area type="monotone" dataKey="val" stroke={metric.chartColor} fill="none" strokeWidth={1.5} />
                      </AreaChart>
                   </ResponsiveContainer>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
