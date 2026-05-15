'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Clock, Smartphone, Cpu, Lock, Activity } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const capabilities = [
  {
    title: 'Smart Dispatch',
    desc: 'AI-driven vendor matching based on vehicle class, location, and real-time availability.',
    icon: Zap,
    color: 'text-[#2F80FF]'
  },
  {
    title: 'Nationwide Reach',
    desc: 'Full coverage across 50 states with a managed network of 12,000+ verified light-duty vendors.',
    icon: Globe,
    color: 'text-purple-400'
  },
  {
    title: 'White-Label UX',
    desc: 'Seamlessly integrate roadside assistance into your brand with customizable digital web-apps.',
    icon: Smartphone,
    color: 'text-emerald-400'
  },
  {
    title: 'Real-time Telemetry',
    desc: 'End-to-end tracking of every dispatch event from request to on-scene arrival.',
    icon: Activity,
    color: 'text-[#FF7A1A]'
  }
];

export const CoreCapabilities = () => {
  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <span className="text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.3em]">Operational DNA</span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground dark:text-white mt-4 tracking-tight">Core Infrastructure <span className="text-[#2F80FF]">Capabilities</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassPanel className="p-8 border-brand-border bg-card/40 hover:bg-card/60 transition-all group h-full">
                <div className={`mb-6 p-3 bg-white/5 rounded-xl w-fit group-hover:scale-110 transition-transform ${c.color}`}>
                   <c.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-black text-foreground dark:text-white uppercase tracking-tight mb-4">{c.title}</h3>
                <p className="text-sm text-brand-slate font-medium leading-relaxed">{c.desc}</p>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
