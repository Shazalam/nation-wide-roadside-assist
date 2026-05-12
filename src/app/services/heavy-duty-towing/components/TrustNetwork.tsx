'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Globe, Clock, CheckCircle2 } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const partners = [
  'PENSKE', 'Ryder', 'wex', 'Enterprise', 'GEICO', 'Agero'
];

const compliance = [
  { label: 'DOT', type: 'Certified', icon: ShieldCheck },
  { label: 'SOC 2', type: 'Type II', icon: Lock },
  { label: 'PCI-DSS', type: 'Compliant', icon: Globe },
  { label: 'ISO', type: '27001', icon: Clock },
  { label: 'Heavy Recovery', type: 'Certified', icon: CheckCircle2 }
];

export const TrustNetwork = () => {
  return (
    <section className="py-12 relative z-10 border-y border-white/5 bg-[#0A192F]/40 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Partner Logos */}
          <div className="lg:col-span-7 flex flex-wrap items-center gap-x-12 gap-y-8 opacity-40">
            <span className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-[0.2em] w-full lg:w-auto mb-2 lg:mb-0">Trusted by Industry Leaders</span>
            {partners.map((p, i) => (
              <span key={i} className="text-2xl font-black text-white italic tracking-tighter hover:opacity-100 transition-opacity cursor-default">{p}</span>
            ))}
          </div>

          {/* Compliance Badges */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-5 gap-4">
            {compliance.map((item, i) => (
              <GlassPanel key={i} className="p-3 py-5 border-white/5 bg-white/[0.01] flex flex-col items-center text-center group hover:bg-white/[0.03] transition-all">
                <item.icon className="h-5 w-5 text-[#2F80FF] mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-[10px] font-black text-white uppercase tracking-tight">{item.label}</p>
                <p className="text-[8px] font-bold text-[#94A3B8] uppercase tracking-widest mt-0.5">{item.type}</p>
              </GlassPanel>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
