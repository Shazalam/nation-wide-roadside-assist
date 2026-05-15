'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, FileText, Globe, Truck, FileSearch, Users, Server, DatabaseBackup } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const complianceBadges = [
  { label: 'SOC 2 Type II', icon: Lock },
  { label: 'DOT Certified', icon: Truck },
  { label: 'PCI-DSS Compliant', icon: ShieldCheck },
  { label: 'Nationwide Coverage', icon: Globe },
  { label: 'Heavy-Duty Certified', icon: FileText }
];

export const TrustCompliance = () => {
  return (
    <section className="py-24 relative z-10 border-y border-brand-border bg-brand-bg/50 overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-3xl lg:text-5xl font-black text-foreground dark:text-white tracking-tight leading-tight mb-4">
              Enterprise Trust & Compliance
           </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
           {complianceBadges.map((b, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: i * 0.05 }}
               viewport={{ once: true }}
             >
                <GlassPanel className="p-6 border-brand-border bg-white/[0.02] flex flex-col items-center text-center gap-4 group hover:bg-[#2F80FF]/5 transition-colors">
                   <div className="h-12 w-12 rounded-xl bg-[#2F80FF]/10 flex items-center justify-center border border-[#2F80FF]/20 group-hover:bg-[#2F80FF]/20 transition-all">
                      <b.icon className="h-5 w-5 text-[#2F80FF]" />
                   </div>
                   <span className="text-[9px] font-black text-brand-slate group-hover:text-foreground dark:text-white uppercase tracking-widest leading-tight">{b.label}</span>
                </GlassPanel>
             </motion.div>
           ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { label: 'Audit Logging', icon: FileSearch },
             { label: 'Role-Based Access', icon: Users },
             { label: 'Operational Redundancy', icon: Server },
             { label: 'Disaster Recovery', icon: DatabaseBackup }
           ].map((feature, i) => (
             <div key={i} className="flex items-center gap-3 border-l-2 border-brand-border pl-4 py-2 hover:border-[#2F80FF] transition-colors">
                <feature.icon className="h-4 w-4 text-brand-slate" />
                <span className="text-[10px] font-bold text-foreground dark:text-white uppercase tracking-widest">{feature.label}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
