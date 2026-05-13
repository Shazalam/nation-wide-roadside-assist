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
  // We duplicate the array multiple times to ensure it fills the screen width easily
  const marqueeItems = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="relative h-[140px] md:h-[160px] lg:h-[180px] border-y border-white/5 bg-[#081120] overflow-hidden flex flex-col justify-center">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(47,128,255,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02] pointer-events-none" />
      
      {/* Edge Fades for Marquee */}
      <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-[#081120] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-[#081120] to-transparent z-20 pointer-events-none" />
      
      {/* Animated Telemetry Particles */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <motion.div
          animate={{ x: ['-100vw', '100vw'] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[30%] left-0 w-[40vw] h-[1px] bg-gradient-to-r from-transparent via-[#2F80FF]/60 to-transparent"
        />
        <motion.div
          animate={{ x: ['100vw', '-100vw'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-[30%] right-0 w-[30vw] h-[1px] bg-gradient-to-l from-transparent via-emerald-500/40 to-transparent"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 w-full relative z-10 flex flex-col gap-6 md:gap-8">
        
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 md:gap-8">
          <div className="text-[10px] md:text-[11px] font-bold text-[#94A3B8] font-mono tracking-[0.2em] uppercase shrink-0">
            Trusted By The World's Leading Organizations
          </div>
          
          <div className="hidden md:block flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#2F80FF]/30 to-transparent" />
          
          <div className="flex items-center gap-3 md:gap-4 flex-wrap justify-center shrink-0">
            <span className="hidden xl:block text-[10px] font-bold text-[#94A3B8] font-mono tracking-[0.2em] uppercase mr-2">
              Enterprise-Grade Compliance
            </span>
            {compliance.map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A192F]/50 border border-white/10 hover:border-[#2F80FF]/50 hover:bg-[#2F80FF]/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_4px_20px_rgba(47,128,255,0.15)] transition-all duration-300 group cursor-default backdrop-blur-md"
                >
                  <Icon className="w-3.5 h-3.5 text-[#2F80FF] group-hover:drop-shadow-[0_0_8px_rgba(47,128,255,0.8)] transition-all" />
                  <span className="text-[9px] font-bold text-white uppercase tracking-widest">{c.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Infinite Logo Marquee */}
        <div className="relative w-full flex items-center overflow-hidden">
          <div className="flex items-center whitespace-nowrap animate-marquee w-max">
            {marqueeItems.map((p, i) => (
              <div key={i} className="flex items-center">
                <div className="px-10 md:px-14 lg:px-16 text-2xl md:text-3xl font-black text-[#94A3B8]/40 hover:text-white transition-all duration-300 cursor-default select-none tracking-tighter filter grayscale hover:grayscale-0 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                  {p.logo}
                </div>
                {/* Glowing Separator Dot */}
                <div className="w-1.5 h-1.5 rounded-full bg-[#2F80FF]/20 shadow-[0_0_10px_rgba(47,128,255,0.4)]" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
