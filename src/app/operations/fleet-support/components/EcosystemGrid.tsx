'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Truck, Car, Cpu, Container, Shield } from 'lucide-react';

const ecosystems = [
  {
    title: "Logistics Providers",
    desc: "Real-time support for last-mile and long-haul operations.",
    icon: Truck,
    stats: [
      { label: "Uptime Impact", val: "99.2%" }
    ],
    accent: "text-[#2F80FF]"
  },
  {
    title: "Rental Fleets",
    desc: "Reduce vehicle downtime and improve customer satisfaction.",
    icon: Car,
    stats: [
      { label: "Service Reliability", val: "98.7%" }
    ],
    accent: "text-emerald-400"
  },
  {
    title: "OEM Mobility",
    desc: "Integrated roadside support for connected vehicle programs.",
    icon: Cpu,
    stats: [
      { label: "Customer Satisfaction", val: "97.8%" }
    ],
    accent: "text-purple-400"
  },
  {
    title: "Commercial Transportation",
    desc: "Mission-critical support for commercial and industrial fleets.",
    icon: Container,
    stats: [
      { label: "Fleet Uptime", val: "99.1%" }
    ],
    accent: "text-[#FF7A1A]"
  },
  {
    title: "Insurance Programs",
    desc: "Seamless claims and roadside support integration.",
    icon: Shield,
    stats: [
      { label: "Claims Efficiency", val: "98.5%" }
    ],
    accent: "text-indigo-400"
  }
];

export const EcosystemGrid = () => {
  return (
    <section className="py-24 relative bg-brand-bg overflow-hidden border-t border-brand-border">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-[1px] w-8 bg-[#2F80FF]" />
            <span className="text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.3em]">Vertical Fleet Solutions</span>
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-black text-foreground dark:text-white tracking-tight">
            Powering the <span className="text-[#2F80FF]">Mobility Ecosystem</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
           {ecosystems.map((e, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
             >
               <GlassPanel className="p-8 h-full group hover:border-[#2F80FF]/30 transition-all duration-500 flex flex-col">
                  <div className="h-10 w-10 rounded-lg bg-white/[0.03] flex items-center justify-center mb-6 border border-brand-border group-hover:bg-[#2F80FF]/10 transition-all">
                     <e.icon className={`h-5 w-5 ${e.accent}`} />
                  </div>
                  
                  <h3 className="text-base font-black text-foreground dark:text-white mb-4 leading-tight">{e.title}</h3>
                  <p className="text-[11px] text-brand-slate font-medium leading-relaxed mb-8 flex-grow">
                     {e.desc}
                  </p>

                  <div className="space-y-4 pt-6 border-t border-brand-border">
                     {e.stats.map((s, si) => (
                        <div key={si} className="space-y-1">
                           <p className="text-[9px] font-black text-brand-slate uppercase tracking-widest leading-tight">{s.label}</p>
                           <p className="text-lg font-black text-foreground dark:text-white tracking-tighter">{s.val}</p>
                        </div>
                     ))}
                  </div>
               </GlassPanel>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};
