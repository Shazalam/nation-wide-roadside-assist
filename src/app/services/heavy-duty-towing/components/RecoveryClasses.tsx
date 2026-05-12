'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Navigation, Activity, Shield } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const classes = [
  { id: 'CLASS 1', weight: '6,000 lbs or less', category: 'Light Duty', color: 'bg-emerald-500' },
  { id: 'CLASS 2', weight: '6,001–10,000 lbs', category: 'Light Duty', color: 'bg-emerald-500' },
  { id: 'CLASS 3', weight: '10,001–14,000 lbs', category: 'Medium Duty', color: 'bg-brand-blue' },
  { id: 'CLASS 4', weight: '14,001–16,000 lbs', category: 'Medium Duty', color: 'bg-brand-blue' },
  { id: 'CLASS 5', weight: '16,001–19,500 lbs', category: 'Heavy Duty', color: 'bg-brand-orange' },
  { id: 'CLASS 6', weight: '19,501–26,000 lbs', category: 'Heavy Duty', color: 'bg-brand-orange' },
  { id: 'CLASS 7', weight: '26,001–33,000 lbs', category: 'Super Heavy Duty', color: 'bg-red-500' },
  { id: 'CLASS 8', weight: '33,001 lbs or above', category: 'Super Heavy Duty', color: 'bg-red-500' }
];

export const RecoveryClasses = () => {
  return (
    <section className="py-32 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.3em] mb-4">Operational Architecture</p>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 tracking-tight">Vehicle Recovery Classes</h2>
          <div className="h-1.5 w-24 bg-brand-blue mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {classes.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <GlassPanel className="p-8 border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all group h-full">
                <div className="flex justify-between items-start mb-8">
                   <div>
                      <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] mb-1">{c.id}</p>
                      <h4 className="text-lg font-black text-white tracking-tight">{c.weight}</h4>
                   </div>
                   <Truck className="h-5 w-5 text-brand-blue opacity-20 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="space-y-6">
                   {/* Simulated Vehicle Graphic */}
                   <div className="h-24 bg-[#081120] rounded-2xl border border-white/5 relative overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#2F80FF 1px, transparent 0)', backgroundSize: '15px 15px' }} />
                      <Truck className={`h-12 w-12 ${c.color.replace('bg-', 'text-')} opacity-20`} />
                   </div>

                   <div className="flex items-center gap-3">
                      <div className={`h-1.5 w-1.5 rounded-full ${c.color}`} />
                      <span className={`text-[10px] font-bold ${c.color.replace('bg-', 'text-')} uppercase tracking-widest`}>{c.category}</span>
                   </div>

                   <div className="pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
                      <div>
                         <p className="text-[8px] font-bold text-brand-slate uppercase mb-1">Coverage</p>
                         <p className="text-xs font-black text-white">Nationwide</p>
                      </div>
                      <div>
                         <p className="text-[8px] font-bold text-brand-slate uppercase mb-1">SLA</p>
                         <p className="text-xs font-black text-emerald-400">98.2%</p>
                      </div>
                   </div>
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
