'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const logos = [
  "agero.", "HONK", "wex", "GEICO", "enterprise", "FleetNet", "Insurance Networks", "OEM Support Systems"
];

const badges = [
  { title: "SOC 2 Type II", subtitle: "Certified" },
  { title: "PCI-DSS", subtitle: "Compliant" },
  { title: "DOT", subtitle: "Compliant" },
  { title: "Enterprise", subtitle: "Certified" }
];

export const TrustScale = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-[#0A192F]/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          
          <div className="lg:w-2/3">
            <h3 className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest mb-6">Trusted By Enterprise Leaders</h3>
            <div className="flex flex-wrap items-center gap-x-12 gap-y-8">
              {logos.map((logo, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-lg font-black text-[#94A3B8] hover:text-white transition-colors cursor-default tracking-tighter"
                >
                  {logo}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/3">
             <h3 className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest mb-6">Compliance & Certifications</h3>
             <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4">
               {badges.map((badge, i) => (
                  <GlassPanel key={i} className="p-3 text-center border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors cursor-default group">
                     <Shield className="h-5 w-5 text-[#2F80FF] mx-auto mb-2 opacity-80 group-hover:opacity-100 transition-opacity" />
                     <div className="text-[10px] font-bold text-white uppercase tracking-wider">{badge.title}</div>
                     <div className="text-[9px] text-[#94A3B8]">{badge.subtitle}</div>
                  </GlassPanel>
               ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
