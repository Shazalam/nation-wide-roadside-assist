'use client';

import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: 'Direct Line', logo: '🛡️' },
  { name: 'Allianz', logo: '🌍' },
  { name: 'AIG', logo: '🏢' },
  { name: 'Progressive', logo: '🚀' },
  { name: 'Geico', logo: '🦎' },
  { name: 'State Farm', logo: '🏠' }
];

export const TrustNetwork = () => {
  return (
    <section className="py-12 bg-brand-bg border-y border-brand-border relative z-10">
      <div className="max-w-[1536px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-shrink-0">
             <p className="text-[10px] font-black text-brand-slate uppercase tracking-[0.3em] mb-1">Infrastructure Trust</p>
             <h3 className="text-xl font-black text-foreground dark:text-white">Nationwide <span className="text-[#2F80FF]">Partner Network</span></h3>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
             {partners.map((p, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="flex items-center gap-3 group cursor-pointer"
               >
                  <span className="text-2xl group-hover:scale-110 transition-transform">{p.logo}</span>
                  <span className="text-sm font-black text-foreground dark:text-white tracking-tighter uppercase">{p.name}</span>
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};
