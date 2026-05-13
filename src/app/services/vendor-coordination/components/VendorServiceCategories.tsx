'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Car, Truck, Wrench, Fuel, Key, AlertTriangle, ShieldAlert, BatteryCharging, Zap, HardHat, Cog, CheckSquare } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const categories = [
  { title: 'Roadside Assistance', icon: Car },
  { title: 'Heavy-Duty Towing', icon: Truck },
  { title: 'Tire Change Services', icon: Cog },
  { title: 'Fuel Delivery', icon: Fuel },
  { title: 'Mobile Mechanic', icon: Wrench },
  { title: 'Winch-Out & Recovery', icon: HardHat },
  { title: 'Battery Assistance', icon: BatteryCharging },
  { title: 'Lockout Services', icon: Key },
  { title: 'Accident Recovery', icon: AlertTriangle }
];

export const VendorServiceCategories = () => {
  return (
    <section className="py-24 bg-[#0A192F]/20 relative z-10 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-2xl lg:text-4xl font-black text-white tracking-tight leading-tight mb-4">
              Vendor Service Categories
           </h2>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-4">
           {categories.map((cat, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.05 }}
               viewport={{ once: true }}
             >
                <GlassPanel className="h-full p-4 border-white/5 bg-white/[0.01] hover:bg-[#2F80FF]/10 hover:border-[#2F80FF]/30 transition-all group flex flex-col items-center text-center cursor-pointer">
                   <div className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(47,128,255,0.3)]">
                      <cat.icon className="h-5 w-5 text-[#94A3B8] group-hover:text-[#2F80FF] transition-colors" />
                   </div>
                   <h3 className="text-[9px] font-black text-white uppercase tracking-wider leading-snug">
                      {cat.title}
                   </h3>
                </GlassPanel>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};
