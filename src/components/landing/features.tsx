'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Zap, Globe, Shield, BarChart3, Cpu, Terminal } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Dispatch Intelligence",
    description: "Proprietary mesh algorithms coordinate nationwide vendors for sub-15 minute response times.",
    accent: "brand-blue"
  },
  {
    icon: Globe,
    title: "Nationwide Mesh",
    description: "Access over 12,000 certified heavy-duty and light-duty recovery nodes across North America.",
    accent: "emerald-500"
  },
  {
    icon: Shield,
    title: "Sovereign Security",
    description: "SOC 2 Type II compliant infrastructure with end-to-end encrypted telemetry and data sovereignty.",
    accent: "brand-orange"
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "ML-driven demand forecasting predicts surge zones before they happen, optimizing fleet positioning.",
    accent: "brand-blue"
  },
  {
    icon: Terminal,
    title: "API-First Architecture",
    description: "Robust REST & GraphQL endpoints for seamless integration into enterprise ERP and claims systems.",
    accent: "brand-slate"
  },
  {
    icon: Cpu,
    title: "OEM Connectivity",
    description: "Direct vehicle-to-cloud integration protocols for real-time diagnostics and automated dispatch.",
    accent: "brand-blue"
  }
];

export const Features = () => {
  return (
    <section className="py-24 relative overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="h-[1px] w-8 bg-brand-blue" />
            <span className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.3em]">Operational Excellence</span>
            <div className="h-[1px] w-8 bg-brand-blue" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground tracking-tight"
          >
            Engineered for High-Stakes Mobility
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassPanel className="p-8 h-full hover:border-brand-blue/30 transition-all duration-500 group shadow-sm dark:shadow-none">
                <div className="h-12 w-12 rounded-xl bg-foreground/[0.03] flex items-center justify-center mb-6 group-hover:bg-brand-blue/10 transition-colors">
                  <feature.icon className="h-6 w-6 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-brand-slate text-sm leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-8 flex items-center gap-2 text-[10px] font-bold text-brand-blue uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <div className="h-[1px] w-4 bg-brand-blue" />
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[160px] pointer-events-none opacity-50 dark:opacity-100" />
    </section>
  );
};
