'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Building2, Car, Plane, Zap, Users, BatteryCharging, Network, Briefcase, FileText, Globe, Key } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const services = [
  { id: 'S01', title: 'Rental Vehicle Coordination', icon: Car },
  { id: 'S02', title: 'Hotel & Lodging Assistance', icon: Building2 },
  { id: 'S03', title: 'Ride-Share Dispatch', icon: Users },
  { id: 'S04', title: 'Emergency Transportation', icon: Truck },
  { id: 'S05', title: 'Passenger Relocation', icon: Network },
  { id: 'S06', title: 'Flight & Travel Assistance', icon: Plane },
  { id: 'S07', title: 'EV Charging Assistance', icon: BatteryCharging },
  { id: 'S08', title: 'Travel Concierge', icon: Briefcase },
  { id: 'S09', title: 'Fleet Driver Transportation', icon: Key },
  { id: 'S10', title: 'Family Mobility Support', icon: Users },
  { id: 'S11', title: 'OEM Mobility Services', icon: Globe },
  { id: 'S12', title: 'Insurance Mobility Support', icon: FileText }
];

export const ServicesGrid = () => {
  return (
    <section className="py-32 bg-[#081120] relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
           <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
              Our Trip Continuation Services
           </h2>
           <p className="text-[#94A3B8] font-medium max-w-xl text-sm">
             A comprehensive suite of mobility and continuation services designed to keep drivers and passengers moving safely.
           </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
           {services.map((service, i) => (
             <motion.div
               key={service.id}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: i * 0.05 }}
               viewport={{ once: true }}
             >
                <GlassPanel className="h-full p-8 border-white/5 bg-[#0A192F]/50 hover:bg-[#2F80FF]/10 transition-all group flex flex-col items-center text-center cursor-pointer relative overflow-hidden">
                   {/* Hover Glow */}
                   <div className="absolute inset-0 bg-gradient-to-b from-[#2F80FF]/0 to-[#2F80FF]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                   
                   <div className="h-14 w-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#2F80FF]/50 transition-all z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(47,128,255,0.3)]">
                      <service.icon className="h-6 w-6 text-[#2F80FF]" />
                   </div>
                   
                   <h3 className="text-[11px] font-black text-white uppercase tracking-wider leading-snug z-10">
                      {service.title}
                   </h3>
                </GlassPanel>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};
