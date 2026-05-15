'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe, Lock, CheckCircle2, Award, Zap } from 'lucide-react';

const certifications = [
  { label: 'SOC 2 TYPE II', icon: ShieldCheck },
  { label: 'ISO 27001', icon: Globe },
  { label: 'PCI-DSS', icon: Lock },
  { label: 'GDPR READY', icon: CheckCircle2 },
  { label: 'CCPA COMPLIANT', icon: Award },
  { label: 'SECURITY VERIFIED', icon: Zap }
];

export const ComplianceBar = () => {
  return (
    <section className="bg-brand-bg/80 backdrop-blur-md border-b border-brand-border sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between py-4 overflow-x-auto no-scrollbar gap-12">
           <p className="text-[10px] font-black text-brand-slate uppercase tracking-[0.2em] whitespace-nowrap hidden lg:block">Certifications & Compliance</p>
           
           <div className="flex items-center gap-10">
              {certifications.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-2 group transition-all"
                >
                   <c.icon className="h-4 w-4 text-[#2F80FF] group-hover:scale-110 transition-transform opacity-60 group-hover:opacity-100" />
                   <span className="text-[10px] font-black text-brand-slate group-hover:text-foreground dark:text-white transition-colors tracking-widest whitespace-nowrap">{c.label}</span>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#2F80FF]/30 to-transparent" />
    </section>
  );
};
