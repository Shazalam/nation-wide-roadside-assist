'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Shield, Zap, Lock, Activity, Globe, Scale } from 'lucide-react';

const governanceItems = [
  {
    title: "Dispatch Data Security",
    desc: "End-to-end encryption for all dispatch coordination and routing data.",
    icon: Zap,
    status: "Verified"
  },
  {
    title: "Fleet Telemetry Privacy",
    desc: "Anonymized telemetry processing for fleet performance optimization.",
    icon: Activity,
    status: "Encrypted"
  },
  {
    title: "Vendor Network Compliance",
    desc: "Strict data handling standards for all partners in the roadside network.",
    icon: Globe,
    status: "Audited"
  },
  {
    title: "API Infrastructure Protection",
    desc: "Rate limiting, auth validation, and segmentation for all API endpoints.",
    icon: Lock,
    status: "Secured"
  },
  {
    title: "Operational Governance",
    desc: "Rigorous internal auditing of operational data access and usage.",
    icon: Scale,
    status: "Governance"
  },
  {
    title: "Incident Data Handling",
    desc: "Secure storage and processing of roadside incident and claims data.",
    icon: Shield,
    status: "Compliant"
  }
];

export const GovernanceCards = () => {
  return (
    <section className="py-24 relative bg-brand-bg overflow-hidden border-t border-brand-border">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-[1px] w-8 bg-[#2F80FF]" />
            <span className="text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.3em]">Data Architecture</span>
            <div className="h-[1px] w-8 bg-[#2F80FF]" />
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-black text-foreground dark:text-white tracking-tight">
            Enterprise Data <span className="text-[#2F80FF]">Governance Pillars</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {governanceItems.map((item, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
             >
               <GlassPanel className="p-8 h-full group hover:border-[#2F80FF]/30 transition-all duration-500 relative overflow-hidden flex flex-col">
                  <div className="h-10 w-10 rounded-lg bg-white/[0.03] flex items-center justify-center mb-6 border border-brand-border group-hover:bg-[#2F80FF]/10 transition-all">
                     <item.icon className="h-5 w-5 text-[#2F80FF]" />
                  </div>
                  
                  <h3 className="text-base font-black text-foreground dark:text-white mb-4 leading-tight">{item.title}</h3>
                  <p className="text-[11px] text-brand-slate font-medium leading-relaxed mb-8 flex-grow">
                     {item.desc}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-brand-border">
                     <div className="flex items-center gap-2">
                        <div className="h-1 w-1 rounded-full bg-[#2F80FF]" />
                        <span className="text-[9px] font-black text-brand-slate uppercase tracking-widest">{item.status}</span>
                     </div>
                     <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                  </div>
               </GlassPanel>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};
