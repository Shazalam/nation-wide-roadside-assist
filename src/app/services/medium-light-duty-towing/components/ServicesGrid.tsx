'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, Wrench, Zap, Fuel, Lock, 
  HelpCircle, Navigation, Shield, 
  Activity, Car, Globe, Settings
} from 'lucide-react';

const services = [
  { 
    title: 'Light-Duty Towing', 
    desc: 'Precision towing for passenger vehicles, EVs, and light-duty commercial vans with rapid response.',
    icon: Car, 
    image: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80'
  },
  { 
    title: 'Medium-Duty Towing', 
    desc: 'Specialized flatbed and wheel-lift support for box trucks and delivery units nationwide.',
    icon: Truck, 
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80'
  },
  { 
    title: 'Roadside Assistance', 
    desc: 'Comprehensive on-site support for minor mechanical and electrical failures across all light fleets.',
    icon: HelpCircle, 
    image: 'https://images.unsplash.com/photo-1581403217032-48a58a645fb9?auto=format&fit=crop&q=80'
  },
  { 
    title: 'Accidental Recovery', 
    desc: 'Post-collision recovery and scene management for light commercial units with mission-critical dispatch.',
    icon: Shield, 
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
  },
  { 
    title: 'Fuel Delivery', 
    desc: 'Emergency refueling for gas and diesel vehicles to minimize fleet downtime and operational delays.',
    icon: Fuel, 
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80'
  },
  { 
    title: 'Tire Change Support', 
    desc: 'Professional roadside tire replacement for all consumer and light commercial units at any location.',
    icon: Settings, 
    image: 'https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?auto=format&fit=crop&q=80'
  },
  { 
    title: 'Battery Jump Start', 
    desc: 'Rapid response battery diagnostics and jump-start services for light-duty commercial fleets.',
    icon: Zap, 
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80'
  },
  { 
    title: 'Lockout Services', 
    desc: 'Non-destructive vehicle entry for locked drivers with rapid dispatch and security verification.',
    icon: Lock, 
    image: 'https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?auto=format&fit=crop&q=80'
  },
  { 
    title: 'EV Support', 
    desc: 'Specialized flatbed transport and mobile charging logistics for high-performance electric fleets.',
    icon: Globe, 
    image: 'https://images.unsplash.com/photo-1586191552066-d52cd8eac85a?auto=format&fit=crop&q=80'
  },
  { 
    title: 'Mobile Diagnostics', 
    desc: 'On-site basic mechanical diagnostics to determine recovery needs and reduce transport costs.',
    icon: Wrench, 
    image: 'https://images.unsplash.com/photo-1506526177589-32219b675402?auto=format&fit=crop&q=80'
  },
  { 
    title: 'Winch-Out Services', 
    desc: 'Light-duty recovery for vehicles stuck in mud, snow, or soft terrain using specialized gear.',
    icon: Navigation, 
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80'
  },
  { 
    title: 'Scene Management', 
    desc: 'Operational traffic control and safety coordination at recovery sites to protect your drivers.',
    icon: Activity, 
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80'
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
               RSA <span className="text-[#2F80FF]">Operational Services</span>
            </h2>
            <p className="text-brand-slate text-lg font-medium leading-relaxed max-w-2xl mx-auto">
               Comprehensive on-demand recovery capabilities powered by our nationwide network of certified dispatch vendors.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-16">
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
