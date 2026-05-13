'use client';

import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  { label: 'Active Dispatches', val: '8,242', highlight: true },
  { label: 'Avg Dispatch Time', val: '4.2m', highlight: false },
  { label: 'SLA Compliance', val: '99.8%', highlight: true },
  { label: 'Tow Unit Availability', val: '14,020+', highlight: false },
  { label: 'Downtime Reduction', val: '28%', highlight: true },
  { label: 'Coordination Efficiency', val: 'High', highlight: false }
];

export const OperationalMetrics = () => {
  return (
    <section className="py-24 bg-[#081120] relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
           {metrics.map((metric, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: i * 0.05 }}
               viewport={{ once: true }}
               className={`p-6 rounded-xl border ${metric.highlight ? 'bg-[#2F80FF]/10 border-[#2F80FF]/30 shadow-[0_0_20px_rgba(47,128,255,0.15)]' : 'bg-white/[0.02] border-white/5'} flex flex-col items-center justify-center text-center group`}
             >
                <span className={`text-2xl lg:text-3xl font-black mb-2 tracking-tight ${metric.highlight ? 'text-white' : 'text-white'}`}>{metric.val}</span>
                <span className={`text-[9px] font-bold uppercase tracking-widest ${metric.highlight ? 'text-[#2F80FF]' : 'text-[#94A3B8]'}`}>{metric.label}</span>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};
