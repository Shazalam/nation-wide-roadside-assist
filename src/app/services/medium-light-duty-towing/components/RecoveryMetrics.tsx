'use client';

import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  { label: 'Network Density', val: '12,000+', sub: 'Verified Vendors' },
  { label: 'Avg ETA', val: '22', sub: 'Minutes Nationwide' },
  { label: 'SLA Compliance', val: '98.4%', sub: 'On-scene Guarantee' },
  { label: 'Support Ops', val: '24/7/365', sub: 'Always Active' }
];

export const RecoveryMetrics = () => {
  return (
    <section className="py-24 bg-brand-bg relative border-y border-brand-border">
      <div className="max-w-[1536px] mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center lg:text-left"
            >
              <p className="text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.3em] mb-4">{m.label}</p>
              <p className="text-4xl md:text-5xl font-black text-foreground dark:text-white tracking-tighter mb-2">{m.val}</p>
              <p className="text-xs font-bold text-brand-slate uppercase tracking-widest">{m.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
