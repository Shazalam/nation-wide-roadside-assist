'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Truck, Users, BarChart3, Zap, MapPin, Database } from 'lucide-react';

const capabilities = [
  {
    title: "Rapid Tire Response Network",
    description: "Nationwide network of certified technicians ensuring rapid arrival and efficient tire solutions.",
    icon: Zap,
    stat: "15m avg ETA",
    accent: "text-[#2F80FF]"
  },
  {
    title: "Mobile Technician Dispatch",
    description: "Intelligent dispatching to the nearest available technician with real-time tracking.",
    icon: Users,
    stat: "GPS Enabled",
    accent: "text-emerald-400"
  },
  {
    title: "Fleet Tire Operations Intelligence",
    description: "Data-driven insights and reporting to optimize fleet uptime and reduce roadside events.",
    icon: BarChart3,
    stat: "Uptime focus",
    accent: "text-[#FF7A1A]"
  },
  {
    title: "Predictive Mobility Response",
    description: "Advanced analytics to predict tire-related incidents and enable proactive mitigation.",
    icon: Database,
    stat: "ML Powered",
    accent: "text-purple-400"
  }
];

export const CoreCapabilities = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-bg">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
           <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="h-[1px] w-8 bg-[#2F80FF]" />
                <span className="text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.3em]">Infrastructure Capabilities</span>
              </motion.div>
              <h2 className="text-4xl lg:text-5xl font-black text-foreground dark:text-white tracking-tight">
                Enterprise Service <span className="text-[#2F80FF]">Capabilities Grid</span>
              </h2>
           </div>
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
               <GlassPanel className="p-8 h-full group hover:border-[#2F80FF]/30 transition-all duration-500 relative overflow-hidden flex flex-col">
                  {/* Dashboard-style background effect */}
                  <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                     <c.icon className="h-24 w-24" />
                  </div>

                  <div className="h-12 w-12 rounded-xl bg-white/[0.03] flex items-center justify-center mb-6 border border-brand-border group-hover:bg-[#2F80FF]/10 group-hover:border-[#2F80FF]/30 transition-all">
                     <c.icon className={`h-6 w-6 ${c.accent}`} />
                  </div>

                  <h3 className="text-xl font-black text-foreground dark:text-white mb-4 leading-tight">{c.title}</h3>
                  <p className="text-brand-slate text-sm leading-relaxed mb-8 flex-grow">
                     {c.description}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-brand-border">
                     <span className="text-[10px] font-black text-brand-slate uppercase tracking-widest">{c.stat}</span>
                     <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
               </GlassPanel>
             </motion.div>
           ))}
        </div>
      </div>

      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#2F80FF]/5 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
};
