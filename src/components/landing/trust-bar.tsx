'use client';

import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  "STATE FARM", "GEICO", "LIBERTY MUTUAL", "ALLSTATE", "PROGRESSIVE", "USA CLUB", "HERTZ", "ENTERPRISE"
];

export const TrustBar = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-brand-bg/50">
      <div className="container mx-auto px-4">
        <p className="text-[10px] font-bold text-brand-slate uppercase tracking-[0.4em] text-center mb-8">
          Trusted by the world's largest mobility infrastructures
        </p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner) => (
            <span key={partner} className="text-sm font-black text-white tracking-widest">{partner}</span>
          ))}
        </div>
      </div>
    </section>
  );
};
