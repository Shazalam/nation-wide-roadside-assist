'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Globe, ShieldCheck, CheckCircle, Cpu, Radio, Wifi, Lock } from 'lucide-react';

const brands = ['Enterprise', 'Hertz', 'Penske', 'Ryder', 'WEX', 'Geico', 'Agero'];

const integrationBadges = [
  { label: 'Fleet APIs', icon: Terminal },
  { label: 'Connected Vehicle Systems', icon: Wifi },
  { label: 'Dispatch Automation', icon: Cpu },
  { label: 'Telematics Integrations', icon: Radio },
];

const complianceBadges = [
  { label: 'SOC 2 Type II', icon: ShieldCheck },
  { label: 'ISO 27001', icon: Globe },
  { label: 'PCI-DSS', icon: Lock },
  { label: 'DOT Compliance', icon: CheckCircle },
];

export const TrustBar = () => {
  return (
    <section className="relative z-10 py-14 border-y border-white/5 bg-white/[0.008] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-10">
          {/* Partner Logos Marquee */}
          <div className="overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#081120] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#081120] to-transparent z-10" />
            <div className="flex items-center gap-24 animate-marquee whitespace-nowrap">
              {[...brands, ...brands, ...brands].map((brand, i) => (
                <span key={`${brand}-${i}`} className="text-2xl font-black tracking-tighter text-white/20 hover:text-white/70 transition-colors duration-500 cursor-default select-none">
                  {brand}
                </span>
              ))}
            </div>
          </div>

          {/* Integration + Compliance Badges */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Integrations */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="text-[8px] font-bold text-brand-slate/60 uppercase tracking-[0.3em] mr-3 hidden lg:block">Integrations</span>
              {integrationBadges.map((badge) => (
                <motion.div
                  key={badge.label}
                  whileHover={{ scale: 1.05, borderColor: 'rgba(47,128,255,0.5)' }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-brand-blue/[0.04] border border-brand-blue/10 hover:bg-brand-blue/[0.08] transition-all group cursor-default"
                >
                  <badge.icon className="h-3.5 w-3.5 text-brand-blue group-hover:scale-110 transition-transform" />
                  <span className="text-[9px] font-bold text-white/90 uppercase tracking-widest">{badge.label}</span>
                </motion.div>
              ))}
            </div>
            {/* Compliance */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="text-[8px] font-bold text-brand-slate/60 uppercase tracking-[0.3em] mr-3 hidden lg:block">Compliance</span>
              {complianceBadges.map((badge) => (
                <motion.div
                  key={badge.label}
                  whileHover={{ scale: 1.05, borderColor: 'rgba(16,185,129,0.4)' }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-500/[0.04] border border-emerald-500/10 hover:bg-emerald-500/[0.08] transition-all group cursor-default"
                >
                  <badge.icon className="h-3.5 w-3.5 text-emerald-500 group-hover:scale-110 transition-transform" />
                  <span className="text-[9px] font-bold text-white/90 uppercase tracking-widest">{badge.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
