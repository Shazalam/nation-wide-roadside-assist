'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Clock, CheckCircle, Lock } from 'lucide-react';

const partners = [
  { name: 'WEX', logo: 'WEX' },
  { name: 'Penske', logo: 'Penske' },
  { name: 'Ryder', logo: 'Ryder' },
  { name: 'Enterprise Fleet', logo: 'Enterprise' },
  { name: 'Geico Commercial', logo: 'GEICO' },
  { name: 'Agero', logo: 'Agero' },
  { name: 'FleetPride', logo: 'FleetPride' },
];

export default function TrustBar() {
  return (
    <section className="relative py-12 border-y border-brand-border bg-card/50 backdrop-blur-sm overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col gap-10">
          
          {/* Logo Marquee-style Trust Bar */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            <div className="text-[10px] font-black text-brand-slate uppercase tracking-[0.3em] whitespace-nowrap opacity-50">
              Enterprise Recovery Partners
            </div>
            <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 lg:gap-12 flex-1">
              {partners.map((partner) => (
                <div key={partner.name} className="text-xl font-black text-foreground dark:text-white/20 hover:text-foreground dark:text-white/60 transition-colors cursor-default select-none tracking-tighter">
                  {partner.logo}
                </div>
              ))}
            </div>
          </div>

          {/* Operational Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              { label: 'DOT Compliant', icon: Shield },
              { label: 'Nationwide Fleet', icon: Globe },
              { label: '24/7 Dispatch', icon: Clock },
              { label: 'Heavy Certified', icon: Zap },
              { label: 'SOC 2 Type II', icon: Lock },
              { label: 'PCI-DSS', icon: Shield },
              { label: 'SLA Guaranteed', icon: CheckCircle },
              { label: 'API-First', icon: Zap },
            ].map((badge, i) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-brand-border"
                >
                  <Icon className="w-3 h-3 text-[#2F80FF]" />
                  <span className="text-[9px] font-bold text-brand-slate uppercase tracking-wider whitespace-nowrap">{badge.label}</span>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
      
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-y-1/2" />
    </section>
  );
}
