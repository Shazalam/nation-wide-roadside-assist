'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Globe, CheckCircle2, Truck } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const partners = [
  { name: 'Agero', logo: 'Agero.' },
  { name: 'HONK', logo: 'HONK' },
  { name: 'WEX', logo: 'wex' },
  { name: 'Geico', logo: 'GEICO' },
  { name: 'Enterprise', logo: 'ENTERPRISE' },
  { name: 'FleetNet America', logo: 'FLEETNET' }
];

const complianceBadges = [
  { label: 'SOC 2 Type II', icon: Lock },
  { label: 'DOT Compliant', icon: Truck },
  { label: 'PCI-DSS Compliant', icon: ShieldCheck },
  { label: 'Nationwide Coverage', icon: Globe },
  { label: 'Enterprise Vendor Certified', icon: CheckCircle2 }
];

export const TrustSection = () => {
  return (
    <section className="py-24 relative z-10 border-y border-white/5 bg-[#081120]/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Partners Area */}
          <div className="lg:col-span-7">
             <p className="text-[10px] font-black text-[#94A3B8] uppercase tracking-[0.4em] mb-10">Trusted by Industry Leaders</p>
             <div className="flex flex-wrap items-center gap-x-12 gap-y-8 opacity-40">
                {partners.map((p, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ opacity: 1, scale: 1.05 }}
                    className="text-2xl md:text-3xl font-black text-white tracking-tighter grayscale hover:grayscale-0 transition-all cursor-default"
                  >
                    {p.logo}
                  </motion.div>
                ))}
             </div>
          </div>

          {/* Compliance Area */}
          <div className="lg:col-span-5">
             <GlassPanel className="p-8 border-white/10 bg-white/[0.02]">
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
                   {complianceBadges.map((b, i) => (
                     <div key={i} className="flex flex-col items-center text-center gap-3 group">
                        <div className="h-10 w-10 rounded-xl bg-[#2F80FF]/10 flex items-center justify-center border border-[#2F80FF]/20 group-hover:bg-[#2F80FF]/20 transition-all">
                           <b.icon className="h-4 w-4 text-[#2F80FF]" />
                        </div>
                        <span className="text-[8px] font-bold text-[#94A3B8] uppercase tracking-widest leading-tight">{b.label}</span>
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
