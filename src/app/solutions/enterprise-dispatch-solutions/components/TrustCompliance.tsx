'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Globe, FileCheck } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const logos = [
  'Agero', 'WEX', 'HONK', 'Enterprise Fleet', 'Penske', 'Ryder'
];

const badges = [
  { label: 'SOC 2 Type II', icon: ShieldCheck, desc: 'Enterprise data security' },
  { label: 'PCI-DSS', icon: Lock, desc: 'Secure payment orchestration' },
  { label: 'ISO 27001', icon: Globe, desc: 'Global compliance standards' },
  { label: 'DOT Certified', icon: FileCheck, desc: 'Verified recovery network' }
];

export const TrustCompliance = () => {
  return (
    <section className="py-24 relative z-10 border-y border-brand-border bg-card/40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Partners */}
          <div className="lg:col-span-7">
            <p className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.3em] mb-10">Trusted By Industry Leaders</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
               {logos.map((logo, i) => (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="flex items-center justify-start grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                 >
                    <span className="text-xl font-black text-foreground dark:text-white/40 tracking-tighter italic">{logo}</span>
                 </motion.div>
               ))}
            </div>
          </div>

          {/* Compliance */}
          <div className="lg:col-span-5">
             <GlassPanel className="p-10 border-brand-border bg-white/[0.02]">
                <p className="text-[10px] font-bold text-brand-blue uppercase tracking-widest mb-8 text-center">Enterprise-Grade Compliance</p>
                <div className="grid grid-cols-2 gap-8">
                   {badges.map((b, i) => (
                     <div key={i} className="flex flex-col items-center text-center group">
                        <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-brand-blue/10 transition-colors">
                           <b.icon className="h-6 w-6 text-brand-blue group-hover:scale-110 transition-transform" />
                        </div>
                        <p className="text-[11px] font-bold text-foreground dark:text-white mb-1">{b.label}</p>
                        <p className="text-[8px] text-brand-slate uppercase tracking-wider">{b.desc}</p>
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
