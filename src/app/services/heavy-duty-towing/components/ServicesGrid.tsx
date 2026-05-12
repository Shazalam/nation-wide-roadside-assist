'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, HelpCircle, Fuel, Battery, 
  Lock, Wrench, Navigation, CheckCircle, 
  ArrowUpRight, Bus, Anchor
} from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const Shield = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
);

const services = [
  { label: 'Heavy-Duty Towing', icon: Truck, eta: '28m', availability: '99%' },
  { label: 'Semi Truck Recovery', icon: Navigation, eta: '35m', availability: '97%' },
  { label: 'Winch-Out Operations', icon: Anchor, eta: '42m', availability: '94%' },
  { label: 'Accident Recovery', icon: Shield, iconAlt: true, eta: '24m', availability: '98%' },
  { label: 'Trailer Recovery', icon: Truck, iconAlt: true, eta: '32m', availability: '96%' },
  { label: 'Tire Change Assistance', icon: HelpCircle, eta: '24m', availability: '94%' },
  { label: 'Fuel Delivery', icon: Fuel, eta: '18m', availability: '99%' },
  { label: 'Mobile Mechanic', icon: Wrench, eta: '55m', availability: '88%' },
  { label: 'Battery Jump Start', icon: Battery, eta: '15m', availability: '96%' },
  { label: 'Lockout Services', icon: Lock, eta: '22m', availability: '92%' }
];

export const ServicesGrid = () => {
  return (
    <section className="py-32 relative z-10 bg-brand-bg/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <p className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.3em] mb-4">Service Ecosystem</p>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 tracking-tight">Our Heavy-Duty Towing & Recovery Services</h2>
          <div className="h-1.5 w-24 bg-brand-blue mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <GlassPanel className="p-8 border-white/5 bg-white/[0.01] hover:bg-brand-blue/5 transition-all group cursor-pointer h-full relative overflow-hidden flex flex-col items-center text-center">
                {/* Background Glow */}
                <div className="absolute -right-10 -top-10 w-24 h-24 bg-brand-blue/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="h-16 w-16 rounded-2xl bg-brand-navy border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                   <service.icon className="h-7 w-7 text-brand-blue" />
                </div>
                
                <h4 className="text-[11px] font-black text-white mb-8 group-hover:text-brand-blue transition-colors uppercase tracking-widest leading-tight">{service.label}</h4>
                
                <div className="mt-auto w-full pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
                   <div>
                      <p className="text-[8px] font-bold text-brand-slate uppercase mb-1.5 tracking-tighter">Avg ETA</p>
                      <p className="text-xs font-black text-white">{service.eta}</p>
                   </div>
                   <div>
                      <p className="text-[8px] font-bold text-brand-slate uppercase mb-1.5 tracking-tighter">Availability</p>
                      <p className="text-xs font-black text-emerald-400">{service.availability}</p>
                   </div>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0">
                   <ArrowUpRight className="h-4 w-4 text-brand-blue" />
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <button className="text-[11px] font-black text-brand-blue uppercase tracking-[0.4em] hover:opacity-70 transition-opacity border-b border-brand-blue/20 pb-2">
             View All Specialist Recovery Services
           </button>
        </div>
      </div>
    </section>
  );
};
