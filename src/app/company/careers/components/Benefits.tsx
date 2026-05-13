'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Landmark, Map, Rocket, GraduationCap, Monitor } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const benefits = [
  { title: 'Competitive Compensation', icon: Landmark, desc: 'Top-tier base salary with enterprise equity options.' },
  { title: 'Health & Wellness', icon: Heart, desc: 'Comprehensive medical, dental, and vision coverage.' },
  { title: 'Flexible Operations', icon: Map, desc: 'Remote-first engineering and hybrid command center roles.' },
  { title: 'Modern Infrastructure', icon: Monitor, desc: 'High-end hardware and premium SaaS tool stipends.' },
  { title: 'Professional Growth', icon: GraduationCap, desc: 'Dedicated budget for enterprise certifications.' },
  { title: 'Nationwide Impact', icon: Rocket, desc: 'Build systems that directly power the real-world economy.' }
];

export const Benefits = () => {
  return (
    <section className="py-24 bg-[#081120] relative z-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Enterprise Support & Benefits
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {benefits.map((benefit, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               viewport={{ once: true }}
             >
                <GlassPanel className="p-6 border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group flex flex-col items-start h-full">
                   <div className="h-10 w-10 rounded-lg bg-[#2F80FF]/10 flex items-center justify-center border border-[#2F80FF]/20 group-hover:bg-[#2F80FF]/20 transition-all mb-4">
                      <benefit.icon className="h-4 w-4 text-[#2F80FF]" />
                   </div>
                   <h3 className="text-[11px] font-black text-white uppercase tracking-widest mb-2">{benefit.title}</h3>
                   <p className="text-[10px] text-[#94A3B8] leading-relaxed">
                      {benefit.desc}
                   </p>
                </GlassPanel>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};
