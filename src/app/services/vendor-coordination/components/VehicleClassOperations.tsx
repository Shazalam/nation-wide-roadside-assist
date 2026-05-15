'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Truck } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const classes = [
  { class: '1', weight: '6,000 lbs or less', type: 'Light Duty', color: 'text-emerald-400', bg: 'bg-emerald-400' },
  { class: '2', weight: '6,001 - 10,000 lbs', type: 'Light Duty', color: 'text-emerald-400', bg: 'bg-emerald-400' },
  { class: '3', weight: '10,001 - 14,000 lbs', type: 'Medium Duty', color: 'text-[#2F80FF]', bg: 'bg-[#2F80FF]' },
  { class: '4', weight: '14,001 - 16,000 lbs', type: 'Medium Duty', color: 'text-[#2F80FF]', bg: 'bg-[#2F80FF]' },
  { class: '5', weight: '16,001 - 19,500 lbs', type: 'Heavy Duty', color: 'text-[#FF7A1A]', bg: 'bg-[#FF7A1A]' },
  { class: '6', weight: '19,501 - 26,000 lbs', type: 'Heavy Duty', color: 'text-[#FF7A1A]', bg: 'bg-[#FF7A1A]' },
  { class: '7', weight: '26,001 - 33,000 lbs', type: 'Super Heavy Duty', color: 'text-red-500', bg: 'bg-red-500' },
  { class: '8', weight: '33,001 lbs and above', type: 'Super Heavy Duty', color: 'text-red-500', bg: 'bg-red-500' }
];

export const VehicleClassOperations = () => {
  return (
    <section className="py-24 bg-brand-bg relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-3xl lg:text-4xl font-black text-foreground dark:text-white tracking-tight leading-tight mb-4">
              Vehicle Class Support
           </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
           {classes.map((cls, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.05 }}
               viewport={{ once: true }}
             >
                <GlassPanel className="h-full p-4 border-brand-border bg-card/50 flex flex-col items-center text-center relative overflow-hidden group">
                   <div className={`absolute top-0 left-0 right-0 h-1 ${cls.bg} opacity-50`} />
                   
                   <h3 className={`text-[11px] font-black uppercase tracking-widest mt-2 ${i >= 6 ? 'text-[#FF7A1A]' : 'text-foreground dark:text-white'}`}>Class {cls.class}</h3>
                   <p className="text-[9px] text-brand-slate font-bold uppercase tracking-widest my-2">{cls.weight}</p>
                   
                   {/* Truck Visualization Placeholder */}
                   <div className="h-16 w-full relative my-4 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-110 duration-300">
                      <Truck className={`h-8 w-8 ${cls.color}`} />
                   </div>

                   <div className={`mt-auto text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded border ${
                      cls.type === 'Light Duty' ? 'text-emerald-400 border-emerald-400/20 bg-emerald-400/10' :
                      cls.type === 'Medium Duty' ? 'text-[#2F80FF] border-[#2F80FF]/20 bg-[#2F80FF]/10' :
                      cls.type === 'Heavy Duty' ? 'text-[#FF7A1A] border-[#FF7A1A]/20 bg-[#FF7A1A]/10' :
                      'text-red-500 border-red-500/20 bg-red-500/10'
                   }`}>
                      {cls.type}
                   </div>
                </GlassPanel>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};
