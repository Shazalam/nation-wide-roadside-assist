'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Globe, CheckCircle2 } from 'lucide-react';

const partners = [
  { name: 'AAA', logo: 'AAA' },
  { name: 'Agero', logo: 'Agero' },
  { name: 'HONK', logo: 'HONK' },
  { name: 'Enterprise', logo: 'Enterprise' },
  { name: 'WEX', logo: 'WEX' },
  { name: 'GEICO', logo: 'GEICO' }
];

const compliance = [
  { label: 'ENTERPRISE-GRADE SECURITY', icon: ShieldCheck },
  { label: 'Industry-Standard Security Practices', icon: Globe },
  { label: 'Secure Payment Processing', icon: Lock },
  { label: 'PRIVACY-FOCUSED', icon: CheckCircle2 }
];

export const TrustBar = () => {
  return (
    <section className="py-16 bg-brand-bg/50 backdrop-blur-md border-y border-brand-border relative z-10">
      <div className="max-w-[1536px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Partners Scroller */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-x-12 gap-y-8 opacity-40 hover:opacity-100 transition-opacity duration-700">
               {partners.map((p, i) => (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="text-lg font-black text-foreground dark:text-white tracking-tighter italic"
                 >
                    {p.name}
                 </motion.div>
               ))}
            </div>
          </div>

          {/* Compliance Badges */}
          <div className="lg:col-span-5 flex flex-wrap lg:justify-end gap-6">
             {compliance.map((c, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.3 + i * 0.1 }}
                 className="flex items-center gap-2 bg-white/[0.03] border border-brand-border px-4 py-2 rounded-xl group hover:border-[#2F80FF]/30 transition-all"
               >
                  <c.icon className="h-4 w-4 text-[#2F80FF] group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-black text-foreground dark:text-white tracking-widest">{c.label}</span>
               </motion.div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
};
