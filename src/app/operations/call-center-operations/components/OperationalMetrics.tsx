'use client';

import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  { label: "Active Calls", value: "1,263", trend: "+12.4%" },
  { label: "Calls Handled Today", value: "8,742", trend: "+9.1%" },
  { label: "SLA Compliance", value: "97.8%", trend: "+2.1%" },
  { label: "Avg. Handle Time", value: "04:28", trend: "-4.3%", negative: true },
  { label: "Available Vendors", value: "2,847", trend: "+8.2%" },
  { label: "Dispatch Success", value: "98.3%", trend: "+3.4%" },
  { label: "Avg. ETA", value: "24 min", trend: "-6.5%", negative: true },
  { label: "Customer Rating", value: "4.8/5", trend: "+6.1%" },
];

export const OperationalMetrics = () => {
  return (
    <section className="py-12 border-t border-brand-border bg-card/20">
      <div className="container mx-auto px-4">
         <h3 className="text-xl font-bold text-foreground dark:text-white mb-8">Operational Metrics</h3>
         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {metrics.map((metric, i) => (
               <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="p-4 border-l border-brand-border"
               >
                  <div className="text-[10px] font-bold text-brand-slate uppercase tracking-wider mb-2">{metric.label}</div>
                  <div className="text-lg font-mono text-foreground dark:text-white mb-1">{metric.value}</div>
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
