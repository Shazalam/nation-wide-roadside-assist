'use client';

import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  { label: "SLA Compliance", value: "97.8%", trend: "+1.2%" },
  { label: "Avg Dispatch Time", value: "4.1m", trend: "-12.4%", negative: true },
  { label: "Vendor Performance Score", value: "98.2%", trend: "+2.1%" },
  { label: "ETA Accuracy", value: "96.4%", trend: "+3.4%" },
  { label: "Fleet Coverage", value: "Nationwide", trend: "Active" },
  { label: "Claims Resolution Rate", value: "99.2%", trend: "+1.1%" },
  { label: "Dispatch Efficiency", value: "95.8%", trend: "+4.2%" },
  { label: "Operational Uptime", value: "99.99%", trend: "Optimal" },
];

export const OperationalMetrics = () => {
  return (
    <section className="py-12 border-t border-white/5 bg-[#0A192F]/20">
      <div className="container mx-auto px-4">
         <h3 className="text-xl font-bold text-white mb-8">Enterprise Metrics Dashboard</h3>
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
