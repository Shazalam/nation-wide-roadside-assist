'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Radio, Globe2 } from 'lucide-react';

const partners = [
  { name: 'Good Sam', abbr: 'GS' },
  { name: 'KOA', abbr: 'KOA' },
  { name: 'RVshare', abbr: 'RVS' },
  { name: 'Outdoorsy', abbr: 'OD' },
  { name: 'Camping World', abbr: 'CW' },
  { name: 'GEICO RV', abbr: 'GR' },
  { name: 'Agero', abbr: 'AGR' },
  { name: 'Good Sam', abbr: 'GS' },
  { name: 'KOA', abbr: 'KOA' },
  { name: 'RVshare', abbr: 'RVS' },
  { name: 'Outdoorsy', abbr: 'OD' },
  { name: 'Camping World', abbr: 'CW' },
];

const operationalBadges = [
  { label: 'RV Dispatch Automation', icon: Radio, color: '#2F80FF' },
  { label: 'Mobile Technician Network', icon: Cpu, color: '#2F80FF' },
  { label: 'Nationwide Coverage', icon: Globe2, color: '#2F80FF' },
  { label: 'Connected Vehicle Systems', icon: Radio, color: '#2F80FF' },
];

const complianceBadges = [
  { label: 'SOC 2 Type II', icon: Shield },
  { label: 'PCI-DSS', icon: Shield },
  { label: 'DOT Certified', icon: Shield },
  { label: '24/7 Operations', icon: Radio },
];

export default function TrustBar() {
  return (
    <section className="py-14 border-y border-[rgba(255,255,255,0.06)] bg-card/40 backdrop-blur-sm overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[rgba(255,255,255,0.08)]" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-slate">
            Trusted by the RV &amp; Mobility Ecosystem
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[rgba(255,255,255,0.08)]" />
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden mb-10">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#081120] via-[#081120]/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#081120] via-[#081120]/80 to-transparent z-10 pointer-events-none" />
          <div className="flex animate-marquee items-center gap-14 whitespace-nowrap">
            {[...partners, ...partners].map((p, i) => (
              <div key={i} className="flex items-center gap-3 shrink-0 opacity-40 hover:opacity-80 transition-opacity cursor-default group">
                <div className="w-8 h-8 rounded-lg bg-[rgba(47,128,255,0.1)] border border-[rgba(47,128,255,0.2)] flex items-center justify-center">
                  <span className="text-[8px] font-black text-[#2F80FF]">{p.abbr}</span>
                </div>
                <span className="text-foreground dark:text-white font-bold text-sm tracking-wide">{p.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Badges Row */}
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between pt-6 border-t border-[rgba(255,255,255,0.05)]">
          {/* Operational */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-brand-slate shrink-0">Operational</span>
            {operationalBadges.map((b) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.label}
                  whileHover={{ scale: 1.04, borderColor: 'rgba(47,128,255,0.5)' }}
                  className="flex items-center gap-2 px-3 py-1.5 bg-[rgba(47,128,255,0.08)] border border-[rgba(47,128,255,0.18)] rounded-lg"
                >
                  <Icon className="w-3 h-3 text-[#2F80FF]" />
                  <span className="text-[10px] font-bold text-[#2F80FF] whitespace-nowrap">{b.label}</span>
                </motion.div>
              );
            })}
          </div>

          {/* Compliance */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-brand-slate shrink-0">Compliance</span>
            {complianceBadges.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.label} className="flex items-center gap-2 px-3 py-1.5 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-lg">
                  <Icon className="w-3 h-3 text-brand-slate" />
                  <span className="text-[10px] font-bold text-brand-slate whitespace-nowrap">{b.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
