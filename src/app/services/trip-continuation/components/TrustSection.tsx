'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Globe, CheckCircle2, Zap } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const partners = [
  { name: 'Enterprise', logo: 'ENTERPRISE' },
  { name: 'Hertz', logo: 'Hertz' },
  { name: 'Avis', logo: 'AVIS' },
  { name: 'Uber for Business', logo: 'Uber for Business' },
  { name: 'Lyft Business', logo: 'Lyft Business' },
  { name: 'Agero', logo: 'Agero.' },
  { name: 'Geico', logo: 'GEICO' }
];

const complianceBadges = [
  { label: 'SOC 2 Type II', icon: Lock },
  { label: 'PCI-DSS Compliant', icon: ShieldCheck },
  { label: 'Enterprise Mobility Certified', icon: CheckCircle2 },
  { label: 'Nationwide Coverage', icon: Globe },
  { label: 'OEM Connected Ready', icon: Zap }
];

export const TrustSection = () => {
  return (
    <section className="py-24 relative z-10 border-y border-brand-border bg-brand-bg/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Partners Area */}
          <div className="lg:col-span-7">
             <p className="text-[10px] font-black text-brand-slate uppercase tracking-[0.4em] mb-10">Trusted by Industry Leaders</p>
             <div className="flex flex-wrap items-center gap-x-12 gap-y-8 opacity-40">
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
          <div className="lg:col-span-5">
             <GlassPanel className="p-8 border-brand-border bg-white/[0.02]">
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
                   {complianceBadges.map((b, i) => (
                     <div key={i} className="flex flex-col items-center text-center gap-3 group">
                        <div className="h-10 w-10 rounded-xl bg-[#2F80FF]/10 flex items-center justify-center border border-[#2F80FF]/20 group-hover:bg-[#2F80FF]/20 transition-all">
                           <b.icon className="h-4 w-4 text-[#2F80FF]" />
                        </div>
                        <span className="text-[8px] font-bold text-brand-slate uppercase tracking-widest leading-tight">{b.label}</span>
                     </div>
                   ))}
                </div>
             </GlassPanel>
          </div>

        </div>
      </div>
    </section>
  );
};
