'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Network, Cpu, Share2, Activity, ShieldCheck, Zap } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const highlights = [
  { title: 'North American Dispatch Orchestration', desc: 'Centralized coordination mesh across USA and Canada.', icon: Network },
  { title: 'Multi-Region Incident Coordination', desc: 'Simultaneous management of large-scale operational events.', icon: Share2 },
  { title: 'Intelligent Vendor Matching', desc: 'AI-driven assignment based on proximity and capabilities.', icon: Cpu },
  { title: 'Real-Time Response Optimization', desc: 'Live ETA calibration and dispatch flow adjustment.', icon: Activity },
  { title: 'Emergency Roadside Operations', desc: 'Mission-critical response for high-stakes incidents.', icon: Zap },
  { title: 'Enterprise Escalation Workflows', desc: 'Automated routing for sensitive or complex cases.', icon: ShieldCheck }
];

export const DispatchOverview = () => {
  return (
    <section className="py-32 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-20">
          <p className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.3em] mb-4">Operational Intelligence</p>
          <h2 className="text-4xl lg:text-6xl font-black text-foreground dark:text-white mb-8 tracking-tight">
            Premium Operational <br />
            <span className="text-foreground dark:text-white/40">Infrastructure Orchestration</span>
          </h2>
          <p className="text-brand-slate text-lg leading-relaxed">
            Our platform provides the backbone for enterprise-scale dispatch operations, combining AI intelligence with real-time network visibility to ensure mission-critical roadside recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassPanel className="p-8 border-brand-border bg-white/[0.01] hover:bg-white/[0.03] transition-all group h-full">
                <div className="h-12 w-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <h.icon className="h-6 w-6 text-brand-blue" />
                </div>
                <h4 className="text-xl font-bold text-foreground dark:text-white mb-3 tracking-tight">{h.title}</h4>
                <p className="text-brand-slate text-sm leading-relaxed">{h.desc}</p>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
