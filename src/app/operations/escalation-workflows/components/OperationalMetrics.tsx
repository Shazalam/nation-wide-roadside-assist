'use client';

import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  { label: "Active Escalations", value: "128", trend: "+18.6%" },
  { label: "SLA Recovery Rate", value: "98.9%", trend: "+7.3%" },
  { label: "SLA Breaches", value: "23", trend: "-14.2%", negative: true },
  { label: "Vendor Failures", value: "11", trend: "-8.3%", negative: true },
  { label: "Avg. Resolution Time", value: "24 min", trend: "-8.1%", negative: true },
  { label: "Fleet Downtime", value: "2.6%", trend: "-11.6%", negative: true },
  { label: "Customer Rating", value: "4.8/5", trend: "+8.3%" },
  { label: "Resolution Accuracy", value: "99.2%", trend: "+6.2%" },
];

export const OperationalMetrics = () => {
  return (
    <section className="py-12 border-t border-white/5 bg-[#0A192F]/20">
      <div className="container mx-auto px-4">
         <h3 className="text-xl font-bold text-white mb-8">Key Operational Metrics</h3>
         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {metrics.map((metric, i) => (
               <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="p-4 border-l border-white/10"
               >
                  <div className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider mb-2">{metric.label}</div>
                  <div className="text-lg font-mono text-white mb-1">{metric.value}</div>
                  <div className={`text-[10px] font-mono ${metric.negative ? 'text-emerald-400' : 'text-emerald-400'}`}>
                     {metric.trend}
                  </div>
               </motion.div>
            ))}
         </div>
      </div>
    </section>
  );
};
