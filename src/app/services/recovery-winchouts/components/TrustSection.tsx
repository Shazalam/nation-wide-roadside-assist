'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Globe, FileText, CheckCircle2 } from 'lucide-react';

const partners = [
  { name: 'Ryder', logo: 'Ryder' },
  { name: 'Penske', logo: 'PENSKE' },
  { name: 'WEX', logo: 'wex' },
  { name: 'Enterprise', logo: 'ENTERPRISE' },
  { name: 'Michelin', logo: 'MICHELIN' },
  { name: 'Geico', logo: 'GEICO' },
  { name: 'Agero', logo: 'Agero.' }
];

const badges = [
  { label: 'Enterprise-Grade Security', icon: Lock },
  { label: 'DOT Certified', icon: FileText },
  { label: 'Secure Payment Processing Compliant', icon: ShieldCheck },
  { label: 'Nationwide Coverage', icon: Globe },
  { label: 'Heavy-Duty Certified', icon: CheckCircle2 }
];

export const TrustSection = () => {
  return (
    <section className="py-24 border-y border-brand-border bg-brand-bg/50 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Partners Marquee Area */}
          <div className="lg:col-span-7">
             <p className="text-[10px] font-black text-brand-slate uppercase tracking-[0.4em] mb-12">Trusted by Logistics Leaders</p>
             <div className="flex flex-wrap items-center gap-x-16 gap-y-12 opacity-40">
                {partners.map((p, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ opacity: 1, scale: 1.05 }}
                    className="text-2xl font-black text-foreground dark:text-white tracking-tighter grayscale hover:grayscale-0 transition-all cursor-default"
                  >
                    {p.logo}
                  </motion.div>
                ))}
             </div>
          </div>

          {/* Compliance Area */}
          <div className="lg:col-span-5 border-l border-brand-border pl-16">
             <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-10">
                {badges.map((b, i) => (
                  <div key={i} className="flex flex-col items-center text-center gap-3 group">
                     <div className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center border border-brand-border group-hover:border-[#2F80FF]/30 transition-all">
                        <b.icon className="h-5 w-5 text-brand-slate group-hover:text-[#2F80FF] transition-colors" />
                     </div>
                     <span className="text-[9px] font-bold text-brand-slate uppercase tracking-widest leading-tight group-hover:text-foreground dark:text-white transition-colors">{b.label}</span>
                  </div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
