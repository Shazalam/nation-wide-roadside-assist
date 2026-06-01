'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, Truck, Fuel, Lock, Battery, Gauge, Wrench, 
  Wind, Thermometer, ShieldCheck, Activity, Search
} from 'lucide-react';

const services = [
  { 
    title: 'Battery Jump Starts', 
    icon: Battery, 
    desc: 'Advanced voltage diagnostics and emergency jump-start recovery for all vehicle classes.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80'
  },
  { 
    title: 'Tire Change Assistance', 
    icon: Truck, 
    desc: 'Rapid roadside tire changes for passenger and commercial vehicles with heavy-duty capability.',
    image: 'https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?auto=format&fit=crop&q=80'
  },

  { 
    title: 'Fuel Delivery', 
    icon: Fuel, 
    desc: 'Emergency fuel and DEF delivery for passenger cars, RVs, and commercial trucking fleets.',
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80'
  },
  { 
    title: 'Lockout Assistance', 
    icon: Lock, 
    desc: 'Non-destructive vehicle entry for locked-out drivers using specialized enterprise tools.',
    image: 'https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?auto=format&fit=crop&q=80'
  },
  { 
    title: 'Mobile Diagnostics', 
    icon: Search, 
    desc: 'Full-system computer diagnostics and error code clearing at the point of breakdown.',
    image: 'https://images.unsplash.com/photo-1506526177589-32219b675402?auto=format&fit=crop&q=80'
  },
  { 
    title: 'Emergency Repairs', 
    icon: Zap, 
    desc: 'On-site mechanical interventions for starters, alternators, and minor engine components.',
    image: 'https://images.unsplash.com/photo-1486262715619-6708146bc9f5?auto=format&fit=crop&q=80'
  },

  { 
    title: 'Electrical Repairs', 
    icon: Zap, 
    desc: 'Advanced troubleshooting and repair of vehicle electrical systems and wiring.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80'
  },
  { 
    title: 'Cooling System Service', 
    icon: Thermometer, 
    desc: 'Emergency radiator repairs and coolant system pressure testing in the field.',
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80'
  },
  { 
    title: 'Minor Mechanical Repairs', 
    icon: Gauge, 
    desc: 'Broad spectrum on-site mechanical support for non-major failure events.',
    image: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&q=80'
  },
  { 
    title: 'Fleet Maintenance Support', 
    icon: ShieldCheck, 
    desc: 'Scheduled on-site preventive maintenance and inspection for commercial operators.',
    image: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80'
  }
];

export const ServicesGrid = () => {
  return (
    <section className="relative z-10 py-32 bg-brand-bg overflow-hidden border-t border-brand-border">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #94A3B8 1px, transparent 0)`, backgroundSize: '64px 64px' }} />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2F80FF]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1536px]">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-black text-foreground dark:text-white tracking-tighter leading-tight mb-8">
               Comprehensive Mobile <br /><span className="text-[#2F80FF]">Field Solutions</span>
            </h2>
            <p className="text-brand-slate text-lg font-medium leading-relaxed max-w-2xl mx-auto">
               Rapid, on-site mechanical resolution engineered for nationwide fleet resilience and maximum uptime.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-16">
          {services.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group h-full cursor-pointer relative"
              >
                {/* Floating Icon Bubble (50% Overlap) */}
                <div className="absolute top-0 left-10 -translate-y-1/2 z-20">
                   <motion.div
                     whileHover={{ scale: 1.2 }}
                     className="h-14 w-14 bg-card/90 backdrop-blur-2xl border border-brand-border rounded-xl flex items-center justify-center shadow-[0_10px_30px_rgba(47,128,255,0.2)] group-hover:border-[#2F80FF]/40 group-hover:shadow-[0_0_40px_rgba(47,128,255,0.4)] transition-all relative overflow-hidden"
                   >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#2F80FF]/20 to-transparent" />
                      <Icon className="h-6 w-6 text-[#2F80FF] relative z-10 transition-transform group-hover:scale-110" />
                      <div className="absolute inset-0 rounded-xl border-2 border-[#2F80FF]/20 animate-pulse" />
                   </motion.div>
                </div>

                {/* Glassmorphism Card */}
                <div className="relative bg-card/55 backdrop-blur-[24px] border border-white/[0.08] rounded-[28px] pt-14 p-8 h-full flex flex-col transition-all duration-400 group-hover:border-[#2F80FF]/40 group-hover:bg-card/80 group-hover:-translate-y-6 group-hover:scale-[1.08] shadow-[0_15px_50px_rgba(0,0,0,0.5)] group-hover:shadow-[0_40px_80px_rgba(47,128,255,0.25)] overflow-hidden">
                   {/* Background Image Ghost */}
                   <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-5 mix-blend-luminosity transition-opacity duration-700 pointer-events-none scale-110 group-hover:scale-100" 
                        style={{ backgroundImage: `url(${card.image})` }} />
                   
                   <div className="relative z-10 mb-4 pt-4 flex-grow">
                      <h3 className="text-base font-black text-foreground dark:text-white uppercase tracking-tight leading-tight mb-4 group-hover:text-[#2F80FF] transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-[11px] text-brand-slate font-medium leading-relaxed">
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
