'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Activity } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const capabilities = [
  {
    title: 'AI-Assisted Vendor Routing',
    icon: Cpu,
    desc: 'Automatically assign the closest and most qualified vendor using SLA logic, proximity intelligence, and live operational availability.',
    metrics: '99.9% Matching Accuracy'
  },
  {
    title: '24/7 Dispatch Operations',
    icon: Zap,
    desc: 'Mission-critical dispatch infrastructure engineered for enterprise roadside programs and nationwide fleet support.',
    metrics: 'Global Coverage Mesh'
  },
  {
    title: 'Real-Time Operational Intelligence',
    icon: Activity,
    desc: 'Monitor dispatch activity, incident escalation, and fleet response metrics through live telemetry dashboards.',
    metrics: '14ms Telemetry Latency'
  }
];

export const CoreCapabilities = () => {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassPanel className="p-10 border-brand-border bg-white/[0.01] hover:bg-white/[0.03] transition-all group relative overflow-hidden h-full">
                {/* Glow Accent */}
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-blue/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="h-14 w-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(47,128,255,0.1)]">
                   <cap.icon className="h-7 w-7 text-brand-blue" />
                </div>

                <h4 className="text-2xl font-black text-foreground dark:text-white mb-4 tracking-tight">{cap.title}</h4>
                <p className="text-brand-slate text-sm leading-relaxed mb-8">{cap.desc}</p>
                
                <div className="pt-6 border-t border-brand-border">
                   <p className="text-[10px] font-bold text-brand-blue uppercase tracking-widest">{cap.metrics}</p>
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
