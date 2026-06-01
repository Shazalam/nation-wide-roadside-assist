'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Globe, FileText, Zap, Shield } from 'lucide-react';

const certifications = [
  { label: 'Enterprise-Grade Security', icon: ShieldCheck },
  { label: 'Industry-Standard Security Practices', icon: Globe },
  { label: 'Secure Payment Processing', icon: Lock },
  { label: 'Privacy-Focused', icon: Shield },
  { label: 'Enterprise SLA', icon: Zap },
  { label: 'Secure API', icon: FileText }
];

export const ComplianceStrip = () => {
  return (
    <div className="sticky top-16 z-40 bg-brand-bg/80 backdrop-blur-xl border-y border-brand-border py-4 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-8 md:gap-4">
           {certifications.map((cert, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.05 }}
               className="flex items-center gap-2.5 group"
             >
                <cert.icon className="h-4 w-4 text-[#2F80FF] group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-black text-brand-slate group-hover:text-foreground dark:text-white uppercase tracking-[0.2em] transition-colors">
                  {cert.label}
                </span>
             </motion.div>
           ))}
        </div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-brand-blue/5 blur-[40px] pointer-events-none" />
    </div>
  );
};
