'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Navigation, 
  Anchor, 
  Shield, 
  Container, 
  CircleDot, 
  Fuel, 
  Wrench, 
  Zap, 
  Lock,
  Globe,
  Settings
} from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const services = [
  { 
    title: 'Heavy-Duty Recovery', 
    icon: Truck, 
    details: 'Rotator and heavy wrecker services for Class 8 commercial vehicles and complex incident scenes.',
    response: '32m',
    availability: '98%'
  },
  { 
    title: 'Winch-Out Operations', 
    icon: Zap, 
    details: 'Precision extraction from ditches, mud, snow, or difficult terrain using advanced winch technology.',
    response: '24m',
    availability: '95%'
  },
  { 
    title: 'Accident Recovery', 
    icon: Activity, 
    details: 'Safe and efficient clearance of multi-vehicle accident sites, rollovers, and complex wreckage.',
    response: '22m',
    availability: '99%'
  },
  { 
    title: 'Tractor-Trailer Recovery', 
    icon: Container, 
    details: 'Specialized support for heavy tractors, trailers, and cargo in mission-critical scenarios.',
    response: '35m',
    availability: '97%'
  },
  { 
    title: 'RV & Camper Recovery', 
    icon: Globe, 
    details: 'Expert recovery and towing for Class A motorhomes, buses, and large recreational vehicles.',
    response: '28m',
    availability: '96%'
  },
  { 
    title: 'Cargo Recovery', 
    icon: CircleDot, 
    details: 'Load shifts, spills, and cargo transfer recovery for high-value logistics and supply chain protection.',
    response: '42m',
    availability: '94%'
  },
  { 
    title: 'Rotator Services', 
    icon: Shield, 
    details: '360° heavy lift and recovery capability for the most challenging and high-stakes incidents.',
    response: '45m',
    availability: '99%'
  },
  { 
    title: 'Off-Road Recovery', 
    icon: Navigation, 
    details: 'Specialized 4x4 recovery for vehicles in off-road, deep mud, or remote wilderness recovery sites.',
    response: '55m',
    availability: '92%'
  }
];

import { Activity } from 'lucide-react';

export const ServicesGrid = () => {
  return (
    <section className="relative py-32 bg-brand-bg overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #94A3B8 1px, transparent 0)`, backgroundSize: '64px 64px' }} />
      
      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-brand-blue/5 border border-brand-blue/20 w-fit mx-auto backdrop-blur-xl">
              <div className="h-2 w-2 rounded-full bg-brand-blue animate-pulse shadow-[0_0_10px_var(--brand-blue)]" />
              <span className="text-[11px] font-black text-brand-blue uppercase tracking-[0.3em]">Service Portfolio</span>
            </div>
            
            <h2 className="text-5xl lg:text-[5rem] font-black text-white tracking-tighter leading-[0.9] drop-shadow-2xl uppercase italic">
              Recovery <span className="text-brand-blue tracking-normal">Solutions</span>
            </h2>
            
            <p className="text-xl text-brand-slate leading-relaxed max-w-3xl mx-auto font-medium">
              Specialized heavy-duty towing and incident management services for every commercial operational scenario.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
           {services.map((service, i) => {
             const Icon = service.icon;
             return (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="relative group"
               >
                  {/* Floating Icon Box */}
                  <div className="absolute -top-6 left-8 h-14 w-14 bg-card border border-brand-blue/30 rounded-2xl flex items-center justify-center text-brand-blue shadow-[0_10px_30px_rgba(47,128,255,0.2)] z-20 group-hover:scale-110 group-hover:border-brand-blue transition-all duration-500">
                     <Icon className="h-6 w-6" strokeWidth={2} />
                  </div>

                  <GlassPanel className="p-10 pt-16 border-brand-border bg-card/40 backdrop-blur-2xl rounded-[3rem] hover:bg-card/60 hover:border-brand-blue/40 transition-all duration-500 group-hover:translate-y-[-8px] relative overflow-hidden">
                     {/* Background Glow */}
                     <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 blur-3xl -mr-16 -mt-16 group-hover:bg-brand-blue/10 transition-colors" />

                     <h3 className="text-3xl font-black text-foreground dark:text-white uppercase tracking-tighter mb-6 group-hover:text-brand-blue transition-colors">
                        {service.title}
                     </h3>
                     
                     <p className="text-brand-slate text-base leading-relaxed font-medium mb-12 h-20 line-clamp-3 group-hover:text-foreground/80 transition-colors">
                        {service.details}
                     </p>
                     
                     {/* Divider */}
                     <div className="h-[1px] bg-brand-border w-full mb-8 relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                     </div>

                     {/* Operational Stats */}
                     <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-1">
                           <p className="text-[10px] font-black uppercase text-brand-blue tracking-widest opacity-80">Avg Response</p>
                           <p className="text-4xl font-black text-foreground dark:text-white tracking-tighter">{service.response}</p>
                        </div>
                        <div className="space-y-1 text-right">
                           <p className="text-[10px] font-black uppercase text-brand-blue tracking-widest opacity-80">Availability</p>
                           <p className="text-4xl font-black text-emerald-500 tracking-tighter">{service.availability}</p>
                        </div>
                     </div>
                  </GlassPanel>
               </motion.div>
             );
           })}
        </div>
      </div>
    </section>
  );
};
