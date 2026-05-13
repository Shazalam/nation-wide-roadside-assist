'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Box, Shield, Car, Factory, Building2, Flame, Map } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const industries = [
  { title: 'Commercial Trucking', icon: Truck, desc: 'Downtime reduction and specialized Class 8 recovery optimization.' },
  { title: 'Logistics Fleets', icon: Box, desc: 'Incident response acceleration for time-sensitive cargo networks.' },
  { title: 'Insurance Operations', icon: Shield, desc: 'API-integrated recovery coordination efficiency and claims support.' },
  { title: 'Enterprise Mobility', icon: Car, desc: 'Nationwide roadside infrastructure for rental and shared fleets.' },
  { title: 'OEM Platforms', icon: Factory, desc: 'Embedded operational visibility and brand-compliant recovery.' },
  { title: 'Fleet Management', icon: Map, desc: 'Centralized recovery coordination for FMC portfolios.' },
  { title: 'Government Transportation', icon: Building2, desc: 'Secure, compliant heavy-duty recovery for municipal assets.' },
  { title: 'Emergency Operations', icon: Flame, desc: 'Rapid deployment infrastructure for critical hazard zones.' }
];

export const IndustriesSupported = () => {
  return (
    <section className="py-24 bg-brand-bg relative z-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Industries We Support
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
           {industries.map((ind, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.05 }}
               viewport={{ once: true }}
             >
                <GlassPanel className="h-full p-6 border-white/5 bg-[#0A192F]/40 hover:bg-[#2F80FF]/10 transition-colors group cursor-default">
                   <div className="flex items-center gap-3 mb-4">
                      <div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#2F80FF]/30 group-hover:bg-[#2F80FF]/10 transition-colors">
                         <ind.icon className="h-4 w-4 text-[#94A3B8] group-hover:text-[#2F80FF] transition-colors" />
                      </div>
                      <h3 className="text-[10px] font-black text-white uppercase tracking-widest leading-tight">{ind.title}</h3>
                   </div>
                   <p className="text-[10px] text-[#94A3B8] font-medium leading-relaxed">
                      {ind.desc}
                   </p>
                </GlassPanel>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};
