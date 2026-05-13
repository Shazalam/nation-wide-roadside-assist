'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, FileText, CheckCircle2, Globe } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const partners = [
  { name: 'Enterprise Fleet', logo: 'ENTERPRISE' },
  { name: 'Ryder', logo: 'Ryder' },
  { name: 'Penske', logo: 'PENSKE' },
  { name: 'Geico', logo: 'GEICO' },
  { name: 'WEX', logo: 'wex' },
  { name: 'Agero', logo: 'Agero.' },
  { name: 'Michelin Fleet', logo: 'MICHELIN' }
];

const badges = [
  { label: 'SOC 2 Type II', icon: Lock },
  { label: 'PCI-DSS Compliant', icon: ShieldCheck },
  { label: 'DOT Certified', icon: FileText },
  { label: 'Fleet Ready', icon: CheckCircle2 },
  { label: 'Nationwide Coverage', icon: Globe }
];

export const TrustSection = () => {
  return (
    <section className="py-24 relative z-10 border-y border-white/5 bg-[#081120]/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Partners Marquee Area */}
          <div className="lg:col-span-7">
             <p className="text-[10px] font-black text-[#94A3B8] uppercase tracking-[0.4em] mb-12">Trusted by Industry Leaders</p>
             <div className="flex flex-wrap items-center gap-x-16 gap-y-10 opacity-40">
                {partners.map((p, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ opacity: 1, scale: 1.05 }}
                    className="text-2xl font-black text-white tracking-tighter grayscale hover:grayscale-0 transition-all cursor-default"
                  >
                    {p.logo}
                  </motion.div>
                ))}
             </div>
          </div>

          {/* Compliance Area */}
          <div className="lg:col-span-5">
             <GlassPanel className="p-10 border-white/10 bg-white/[0.02]">
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
                   {badges.map((b, i) => (
                     <div key={i} className="flex flex-col items-center text-center gap-3 group">
                        <div className="h-12 w-12 rounded-xl bg-brand-blue/10 flex items-center justify-center border border-brand-blue/20 group-hover:bg-brand-blue/20 transition-all">
                           <b.icon className="h-5 w-5 text-brand-blue" />
                        </div>
                        <span className="text-[9px] font-bold text-[#94A3B8] uppercase tracking-widest leading-tight">{b.label}</span>
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
