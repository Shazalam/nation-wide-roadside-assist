'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Map, Zap, Server, BarChart2 } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const features = [
  {
    title: "Nationwide Vendor Coverage",
    description: "50-state vendor network with real-time availability intelligence and regional density analytics.",
    icon: Map,
    metric: "98.9%",
    metricLabel: "Coverage"
  },
  {
    title: "SLA-Driven Dispatch Intelligence",
    description: "AI-powered vendor matching, SLA monitoring, and performance-based routing.",
    icon: Zap,
    metric: "96.3%",
    metricLabel: "Match Accuracy"
  },
  {
    title: "API-Connected Infrastructure",
    description: "Seamless integrations, real-time webhooks, and enterprise-grade APIs.",
    icon: Server,
    metric: "99.99%",
    metricLabel: "API Uptime"
  }
];

export const VendorGrid = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassPanel className="p-8 h-full border-white/5 hover:border-[#2F80FF]/30 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                   <feature.icon className="w-32 h-32 text-[#2F80FF] -translate-y-8 translate-x-8" />
                </div>
                
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div className="h-10 w-10 rounded-xl bg-[#2F80FF]/10 flex items-center justify-center border border-[#2F80FF]/20 group-hover:bg-[#2F80FF]/20 transition-colors">
                    <feature.icon className="h-5 w-5 text-[#2F80FF]" />
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 relative z-10">{feature.title}</h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed mb-8 relative z-10">
                  {feature.description}
                </p>

                <div className="mt-auto relative z-10">
                   <div className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider mb-1">{feature.metricLabel}</div>
                   <div className="text-3xl font-black text-white group-hover:text-[#2F80FF] transition-colors">{feature.metric}</div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#2F80FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
