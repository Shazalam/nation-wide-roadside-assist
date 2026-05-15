'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Wrench, 
  Zap, 
  Fuel, 
  Lock, 
  HelpCircle,
  Navigation,
  Shield,
  Activity,
  Car,
  Globe,
  Settings
} from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const services = [
  { 
    title: 'Light-Duty Towing', 
    icon: Car, 
    details: 'Precision towing for passenger vehicles, EVs, and light-duty commercial vans with rapid response.',
    response: '22m',
    availability: '99%'
  },
  { 
    title: 'Medium-Duty Towing', 
    icon: Truck, 
    details: 'Specialized flatbed and wheel-lift support for box trucks and delivery units nationwide.',
    response: '28m',
    availability: '98%'
  },
  { 
    title: 'Roadside Assistance', 
    icon: HelpCircle, 
    details: 'Comprehensive on-site support for minor mechanical and electrical failures across all light fleets.',
    response: '18m',
    availability: '97%'
  },
  { 
    title: 'Accidental Recovery', 
    icon: Shield, 
    details: 'Post-collision recovery and scene management for light commercial units with mission-critical dispatch.',
    response: '24m',
    availability: '95%'
  },
  { 
    title: 'Fuel Delivery', 
    icon: Fuel, 
    details: 'Emergency refueling for gas and diesel vehicles to minimize fleet downtime and operational delays.',
    response: '15m',
    availability: '99%'
  },
  { 
    title: 'Tire Change Support', 
    icon: Settings, 
    details: 'Professional roadside tire replacement for all consumer and light commercial units at any location.',
    response: '20m',
    availability: '98%'
  },
  { 
    title: 'Battery Jump Start', 
    icon: Zap, 
    details: 'Rapid response battery diagnostics and jump-start services for light-duty commercial fleets.',
    response: '12m',
    availability: '99%'
  },
  { 
    title: 'Lockout Services', 
    icon: Lock, 
    details: 'Non-destructive vehicle entry for locked drivers with rapid dispatch and security verification.',
    response: '15m',
    availability: '98%'
  },
  { 
    title: 'EV Support', 
    icon: Globe, 
    details: 'Specialized flatbed transport and mobile charging logistics for high-performance electric fleets.',
    response: '30m',
    availability: '94%'
  },
  { 
    title: 'Mobile Diagnostics', 
    icon: Wrench, 
    details: 'On-site basic mechanical diagnostics to determine recovery needs and reduce transport costs.',
    response: '25m',
    availability: '96%'
  },
  { 
    title: 'Winch-Out Services', 
    icon: Navigation, 
    details: 'Light-duty recovery for vehicles stuck in mud, snow, or soft terrain using specialized gear.',
    response: '35m',
    availability: '95%'
  },
  { 
    title: 'Scene Management', 
    icon: Activity, 
    details: 'Operational traffic control and safety coordination at recovery sites to protect your drivers.',
    response: 'Real-time',
    availability: '100%'
  }
];

export const ServicesGrid = () => {
  return (
    <section className="relative py-32 bg-brand-bg overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #94A3B8 1px, transparent 0)`, backgroundSize: '64px 64px' }} />
      
      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        <div className="text-center mb-24 relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-foreground dark:text-white mb-6 tracking-tighter"
          >
            RSA <span className="text-brand-blue">Operational Services</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 120, opacity: 1 }}
            viewport={{ once: true }}
            className="h-[3px] bg-brand-blue mx-auto shadow-[0_0_15px_#2F80FF]"
          />
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
                transition={{ delay: i * 0.05 }}
                className="relative group"
              >
                 {/* Floating Icon Box */}
                 <div className="absolute -top-6 left-8 h-14 w-14 bg-card border border-brand-blue/30 rounded-2xl flex items-center justify-center text-brand-blue shadow-[0_10px_30px_rgba(47,128,255,0.2)] z-20 group-hover:scale-110 group-hover:border-brand-blue transition-all duration-500">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                 </div>

                 <GlassPanel className="p-10 pt-16 border-brand-border bg-card/40 backdrop-blur-2xl rounded-[3rem] hover:bg-card/60 hover:border-brand-blue/40 transition-all duration-500 group-hover:translate-y-[-8px] relative overflow-hidden h-full flex flex-col">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 blur-3xl -mr-16 -mt-16 group-hover:bg-brand-blue/10 transition-colors" />

                    <h3 className="text-2xl font-black text-foreground dark:text-white uppercase tracking-tighter mb-4 group-hover:text-brand-blue transition-colors">
                       {service.title}
                    </h3>
                    
                    <p className="text-brand-slate text-sm leading-relaxed font-medium mb-10 group-hover:text-foreground/80 transition-colors">
                       {service.details}
                    </p>
                    
                    <div className="mt-auto">
                      {/* Divider */}
                      <div className="h-[1px] bg-brand-border w-full mb-8 relative">
                         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                      </div>

                      {/* Operational Stats */}
                      <div className="grid grid-cols-2 gap-8">
                         <div className="space-y-1">
                            <p className="text-[10px] font-black uppercase text-brand-blue tracking-widest opacity-80">Avg Response</p>
                            <p className="text-3xl font-black text-foreground dark:text-white tracking-tighter">{service.response}</p>
                         </div>
                         <div className="space-y-1 text-right">
                            <p className="text-[10px] font-black uppercase text-brand-blue tracking-widest opacity-80">Availability</p>
                            <p className="text-3xl font-black text-emerald-500 tracking-tighter">{service.availability}</p>
                         </div>
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
