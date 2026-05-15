'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Globe, FileText, Zap, Shield, Eye, Database } from 'lucide-react';

const complianceItems = [
  { label: 'GDPR Ready', icon: ShieldCheck },
  { label: 'CCPA Compliant', icon: Shield },
  { label: 'SOC 2 Type II', icon: Lock },
  { label: 'ISO 27001', icon: Globe },
  { label: 'Secure Consent', icon: Database },
  { label: 'Privacy Controls', icon: Eye }
];

export const ComplianceBar = () => {
  return (
    <div className="sticky top-16 z-40 bg-brand-bg/80 backdrop-blur-xl border-y border-brand-border py-4 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-8 md:gap-4">
           {complianceItems.map((item, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.05 }}
               className="flex items-center gap-2.5 group"
             >
                <item.icon className="h-4 w-4 text-[#2F80FF] group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-black text-brand-slate group-hover:text-foreground dark:text-white uppercase tracking-[0.2em] transition-colors">
                  {item.label}
                </span>
             </motion.div>
           ))}
        </div>
      </div>
      
      {/* Dynamic Glow Overlay */}
      <div className="absolute top-0 left-1/4 w-1/2 h-full bg-[#2F80FF]/5 blur-[60px] pointer-events-none" />
    </div>
  );
};
