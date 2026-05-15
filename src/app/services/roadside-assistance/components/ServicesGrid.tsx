'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, HelpCircle, Fuel, Battery, 
  Lock, Wrench, Navigation, CheckCircle, 
  ArrowUpRight 
} from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const services = [
  { label: 'Emergency Towing', icon: Truck, eta: '18m', availability: '98%' },
  { label: 'Tire Change Assistance', icon: HelpCircle, eta: '24m', availability: '94%' },
  { label: 'Fuel Delivery', icon: Fuel, eta: '15m', availability: '99%' },
  { label: 'Battery Jump Start', icon: Battery, eta: '12m', availability: '96%' },
  { label: 'Lockout Services', icon: Lock, eta: '20m', availability: '92%' },
  { label: 'Mobile Mechanic', icon: Wrench, eta: '45m', availability: '88%' },
  { label: 'Winch-Out Recovery', icon: Navigation, eta: '35m', availability: '91%' },
  { label: 'Accident Assistance', icon: CheckCircle, eta: '14m', availability: '97%' }
];

export const ServicesGrid = () => {
  return (
    <section className="py-32 relative z-10 bg-brand-bg/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.3em] mb-4">Service Ecosystem</p>
          <h2 className="text-4xl lg:text-5xl font-black text-foreground dark:text-white mb-8 tracking-tight">Our Roadside Assistance Services</h2>
          <div className="h-1 w-20 bg-brand-blue mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <GlassPanel className="p-8 border-brand-border bg-white/[0.01] hover:bg-brand-blue/5 transition-all group cursor-pointer h-full relative overflow-hidden">
                {/* Background Ambient Glow */}
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-brand-blue/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-2xl bg-brand-navy border border-brand-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                    <service.icon className="h-7 w-7 text-brand-blue" />
                  </div>
                  <h4 className="text-sm font-bold text-foreground dark:text-white mb-6 group-hover:text-brand-blue transition-colors uppercase tracking-widest">{service.label}</h4>
                  
                  <div className="w-full pt-6 border-t border-brand-border grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[8px] font-bold text-brand-slate uppercase mb-1">Avg ETA</p>
                      <p className="text-sm font-black text-foreground dark:text-white">{service.eta}</p>
                    </div>
                    <div>
                      <p className="text-[8px] font-bold text-brand-slate uppercase mb-1">Availability</p>
                      <p className="text-sm font-black text-emerald-400">{service.availability}</p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                   <ArrowUpRight className="h-4 w-4 text-brand-blue" />
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <button className="text-[10px] font-black text-brand-blue uppercase tracking-[0.3em] hover:opacity-70 transition-opacity border-b border-brand-blue/20 pb-1">
             View All Specialist Services
           </button>
        </div>
      </div>
    </section>
  );
};
