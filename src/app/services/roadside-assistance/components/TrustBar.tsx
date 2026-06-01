'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Globe, Clock } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const partners = [
  'AAA', 'HONK', 'Agero', 'WEX', 'GEICO', 'Enterprise'
];

const compliance = [
  { label: 'Enterprise Security', type: 'Type II', icon: ShieldCheck },
  { label: 'Secure Payment Processing', type: 'Compliant', icon: Lock },
  { label: 'ISO', type: '27001', icon: Globe },
  { label: '24/7', type: 'Operations', icon: Clock }
];

export const TrustBar = () => {
  return (
    <section className="py-12 relative z-10 border-y border-brand-border bg-card/40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Partner Logos */}
          <div className="lg:col-span-7 flex flex-wrap items-center gap-x-12 gap-y-8 opacity-40">
            <span className="text-[10px] font-bold text-brand-slate uppercase tracking-[0.2em] w-full lg:w-auto mb-2 lg:mb-0">Trusted by Industry Leaders</span>
            {partners.map((p, i) => (
              <span key={i} className="text-xl font-black text-foreground dark:text-white italic tracking-tighter hover:opacity-100 transition-opacity cursor-default">{p}</span>
            ))}
          </div>

          {/* Compliance Badges */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-4 gap-4">
            {compliance.map((item, i) => (
              <GlassPanel key={i} className="p-3 py-4 border-brand-border bg-white/[0.01] flex flex-col items-center text-center group hover:bg-white/[0.03] transition-all">
                <item.icon className="h-5 w-5 text-[#2F80FF] mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-[10px] font-black text-foreground dark:text-white uppercase tracking-tight">{item.label}</p>
                <p className="text-[8px] font-bold text-brand-slate uppercase tracking-widest mt-0.5">{item.type}</p>
              </GlassPanel>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
