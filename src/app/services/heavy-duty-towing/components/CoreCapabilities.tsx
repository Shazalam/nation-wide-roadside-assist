'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Zap, Code2, ArrowRight } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const capabilities = [
  {
    title: 'Nationwide Heavy Recovery Network',
    desc: 'Access a vetted network of certified heavy-duty recovery operators equipped with rotators, wreckers, and specialized equipment.',
    icon: Globe,
    stats: '8.2k+ Active Nodes'
  },
  {
    title: 'SLA-Driven Dispatch Operations',
    icon: Zap,
    desc: 'Enterprise-grade dispatch coordination with real-time tracking, incident orchestration, and guaranteed response protocols.',
    stats: '99.1% Compliance'
  },
  {
    title: 'Commercial Recovery APIs',
    icon: Code2,
    desc: 'API-first infrastructure for automated incident reporting, fleet telemetry integration, and real-time operational reporting.',
    stats: '15ms Response'
  }
];

export const CoreCapabilities = () => {
  return (
    <section className="py-32 relative z-10 bg-white/[0.01]">
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
              <GlassPanel className="p-12 border-brand-border bg-white/[0.01] hover:bg-white/[0.03] transition-all group h-full flex flex-col">
                <div className="flex-1">
                  <div className="h-16 w-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    <cap.icon className="h-8 w-8 text-brand-blue" />
                  </div>
                  <h4 className="text-2xl font-black text-foreground dark:text-white mb-5 tracking-tight">{cap.title}</h4>
                  <p className="text-brand-slate text-sm leading-relaxed mb-10">{cap.desc}</p>
                </div>

                <div className="flex items-center justify-between pt-8 border-t border-brand-border">
                   <div className="flex flex-col">
                      <span className="text-[10px] font-black text-brand-blue uppercase tracking-widest">{cap.stats}</span>
                      <span className="text-[8px] font-bold text-brand-slate uppercase tracking-widest mt-0.5">Live Operational Telemetry</span>
                   </div>
                   <button className="h-10 w-10 rounded-full border border-brand-border flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue transition-all group/btn">
                      <ArrowRight className="h-4 w-4 text-foreground dark:text-white group-hover/btn:translate-x-1 transition-transform" />
                   </button>
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
