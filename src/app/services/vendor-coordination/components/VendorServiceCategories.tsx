'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Car, Truck, Wrench, Fuel, Key, AlertTriangle, BatteryCharging, Cog, HardHat, Shield } from 'lucide-react';

const categories = [
  { 
    title: 'Roadside Assistance', 
    desc: 'Comprehensive support for light and medium duty vehicles.', 
    icon: Car,
    image: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80'
  },
  { 
    title: 'Heavy-Duty Towing', 
    desc: 'Specialized recovery for Class 7 and 8 commercial assets.', 
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80'
  },
  { 
    title: 'Tire Change Services', 
    desc: 'Rapid deployment of mobile tire repair and replacement.', 
    icon: Cog,
    image: 'https://images.unsplash.com/photo-1591768793355-74d7ca7385da?auto=format&fit=crop&q=80'
  },
  { 
    title: 'Fuel Delivery', 
    desc: 'Emergency refueling for gas, diesel, and mobile EV charging.', 
    icon: Fuel,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80'
  },
  { 
    title: 'Mobile Mechanic', 
    desc: 'On-site diagnostics and repair to minimize asset downtime.', 
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536ad0a?auto=format&fit=crop&q=80'
  },
  { 
    title: 'Winch-Out & Recovery', 
    desc: 'Complex extraction and off-road incident resolution.', 
    icon: HardHat,
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80'
  },
  { 
    title: 'Battery Assistance', 
    desc: 'Jump starts, system testing, and replacement on location.', 
    icon: BatteryCharging,
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80'
  },
  { 
    title: 'Lockout Services', 
    desc: 'Non-destructive entry and key replacement coordination.', 
    icon: Key,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80'
  },
  { 
    title: 'Accident Recovery', 
    desc: 'Multi-vehicle scene management and secure asset transport.', 
    icon: AlertTriangle,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
  },
  { 
    title: 'Mobile Glass Repair', 
    desc: 'On-site windshield and glass replacement for rapid turnaround.', 
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1542282811-943ef1a6477b?auto=format&fit=crop&q=80'
  }
];

export const VendorServiceCategories = () => {
  return (
    <section className="relative z-10 py-32 bg-brand-bg overflow-hidden border-t border-brand-border">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #94A3B8 1px, transparent 0)`, backgroundSize: '64px 64px' }} />
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#2F80FF]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1536px]">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <h2 className="text-4xl lg:text-6xl font-black text-foreground dark:text-white tracking-tighter leading-tight mb-8">
               Vendor Service <br />
               <span className="text-[#2F80FF]">Categories</span>
            </h2>
            <p className="text-brand-slate text-lg font-medium leading-relaxed max-w-2xl mx-auto">
               Our nationwide network covers every type of roadside incident with specialized vendor capabilities, from light-duty assist to heavy commercial recovery.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-16">
          {categories.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group h-full cursor-pointer relative"
              >
                {/* Floating Icon Bubble (50% Overlap) */}
                <div className="absolute top-0 left-10 -translate-y-1/2 z-20">
                   <motion.div
                     whileHover={{ scale: 1.1 }}
                     className="h-16 w-16 bg-card/90 backdrop-blur-2xl border border-brand-border rounded-xl flex items-center justify-center shadow-[0_10px_30px_rgba(47,128,255,0.2)] group-hover:border-[#2F80FF]/40 group-hover:shadow-[0_0_40px_rgba(47,128,255,0.4)] transition-all relative overflow-hidden"
                   >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#2F80FF]/20 to-transparent" />
                      <Icon className="h-7 w-7 text-[#2F80FF] relative z-10 transition-transform group-hover:scale-110" />
                      <div className="absolute inset-0 rounded-xl border-2 border-[#2F80FF]/20 animate-pulse" />
                   </motion.div>
                </div>

                {/* Glassmorphism Card */}
                <div className="relative bg-card/55 backdrop-blur-[24px] border border-white/[0.08] rounded-[28px] pt-16 p-6 h-full flex flex-col transition-all duration-400 group-hover:border-[#2F80FF]/40 group-hover:bg-card/80 group-hover:-translate-y-4 group-hover:scale-[1.03] shadow-[0_15px_50px_rgba(0,0,0,0.5)] group-hover:shadow-[0_40px_80px_rgba(47,128,255,0.25)] overflow-hidden">
                   {/* Background Image Ghost */}
                   <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-10 mix-blend-luminosity transition-opacity duration-700 pointer-events-none scale-110 group-hover:scale-100" 
                        style={{ backgroundImage: `url(${card.image})` }} />
                   
                   <div className="relative z-10 mb-4 pt-2 flex-grow">
                      <h3 className="text-lg font-black text-foreground dark:text-white tracking-tight leading-tight mb-3 group-hover:text-[#2F80FF] transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-xs text-brand-slate font-medium leading-relaxed">
                        {card.desc}
                      </p>
                   </div>

                   {/* Edge Glow Pulse */}
                   <div className="absolute inset-0 rounded-[28px] border-2 border-[#2F80FF]/0 group-hover:border-[#2F80FF]/10 transition-all duration-500 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
