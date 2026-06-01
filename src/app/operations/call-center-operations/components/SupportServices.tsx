'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Car, 
  Truck, 
  Disc, 
  Fuel, 
  Battery, 
  Wrench, 
  Waves, 
  Key, 
  ShieldAlert, 
  Mountain, 
  Shield, 
  Zap
} from 'lucide-react';

const services = [
  { 
    icon: Car, 
    label: "Tow Dispatch",
    desc: "Managed roadside towing orchestration for light-duty passenger vehicles.",
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80'
  },
  { 
    icon: Truck, 
    label: "Heavy-Duty Towing",
    desc: "Specialized Class 8 recovery and long-haul transport logistics.",
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80'
  },
  { 
    icon: Disc, 
    label: "Tire Change",
    desc: "Rapid on-site tire replacement and inflation services nationwide.",
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80'
  },
  { 
    icon: Fuel, 
    label: "Fuel Delivery",
    desc: "Emergency refueling services for gas and diesel commercial units.",
    image: 'https://images.unsplash.com/photo-1565251670894-399580b067d5?auto=format&fit=crop&q=80'
  },
  { 
    icon: Battery, 
    label: "Battery Jumpstart",
    desc: "Mobile battery diagnostics and high-amp jumpstart support.",
    image: 'https://images.unsplash.com/photo-1597816654005-77983eb05c6d?auto=format&fit=crop&q=80'
  },
  { 
    icon: Wrench, 
    label: "Mobile Mechanic",
    desc: "Basic mechanical diagnostics and roadside repair coordination.",
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80'
  },
  { 
    icon: Waves, 
    label: "Recovery & Winch-Outs",
    desc: "Technical off-road recovery for vehicles stuck in mud, snow, or sand.",
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80'
  },
  { 
    icon: Key, 
    label: "Lockout Assistance",
    desc: "Non-destructive vehicle entry for locked-out drivers and fleets.",
    image: 'https://images.unsplash.com/photo-1517520287167-4bda64282b54?auto=format&fit=crop&q=80'
  },
  { 
    icon: ShieldAlert, 
    label: "Accident Recovery",
    desc: "Post-collision scene management and secure asset recovery.",
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80'
  },
  { 
    icon: Mountain, 
    label: "RV & Camper Support",
    desc: "Specialized recovery for oversized recreational vehicles and campers.",
    image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80'
  },
  { 
    icon: Shield, 
    label: "Commercial Fleet Recovery",
    desc: "Enterprise-grade recovery infrastructure for nationwide delivery fleets.",
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80'
  },
  { 
    icon: Zap, 
    label: "Emergency Roadside",
    desc: "24/7 mission-critical emergency support and dispatch coordination.",
    image: 'https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?auto=format&fit=crop&q=80'
  }
];

export const SupportServices = () => {
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
               Enterprise Support <br />
               <span className="text-[#2F80FF]">Services</span>
            </h2>
            <p className="text-brand-slate text-lg font-medium leading-relaxed max-w-2xl mx-auto">
               Realtime roadside support systems engineered for enterprise mobility operations and nationwide fleet coordination.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-16">
          {services.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
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
                   
                   <div className="relative z-10 mb-4 pt-4">
                      <h3 className="text-base font-black text-foreground dark:text-white uppercase tracking-tight leading-tight mb-4 group-hover:text-[#2F80FF] transition-colors">
                        {card.label}
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
