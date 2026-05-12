'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Globe, CheckCircle } from 'lucide-react';

const partners = [
  { name: 'AAA', logo: 'AAA' },
  { name: 'Agero', logo: 'Agero.' },
  { name: 'HONK', logo: 'HONK' },
  { name: 'GEICO', logo: 'GEICO' },
  { name: 'Enterprise', logo: 'enterprise' },
  { name: 'WEX', logo: 'wex' },
];

const compliance = [
  { label: 'SOC 2 TYPE II', icon: Shield },
  { label: 'ISO 27001', icon: Lock },
  { label: 'PCI-DSS', icon: Shield },
  { label: 'GDPR READY', icon: CheckCircle },
];

export default function TrustBar() {
  return (
    <section className="relative py-14 border-y border-white/5 bg-[#0A192F]/40 backdrop-blur-sm overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Logo Section */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 flex-1">
            <div className="text-[11px] font-black text-[#94A3B8] uppercase tracking-[0.3em] whitespace-nowrap opacity-60">
              Trusted by the World's Leading Organizations
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-between items-center gap-10 lg:gap-16">
              {partners.map((p) => (
                <motion.div 
                  key={p.name}
                  whileHover={{ opacity: 1, scale: 1.05 }}
                  className="text-2xl font-black text-white/30 transition-all cursor-default select-none tracking-tighter hover:text-white/70"
                >
                  {p.logo}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="h-10 w-[1px] bg-white/10 hidden lg:block" />

          {/* Compliance Section */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="text-[11px] font-black text-[#94A3B8] uppercase tracking-[0.3em] opacity-60">
              Enterprise-Grade Compliance
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {compliance.map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#2F80FF]" />
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">{c.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
      
      {/* Background Accent Line */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-y-1/2" />
    </section>
  );
}
