'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, Zap, Activity, Globe, Box, Target, 
  AlertTriangle, Shield, Thermometer, Wind, 
  Compass, Navigation 
} from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const recoveryServices = [
  {
    title: 'Heavy-Duty Recovery',
    desc: 'Rotator and heavy wrecker services for Class 8 commercial vehicles and complex incident scenes.',
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800',
    stats: { eta: '32m', availability: '98%' }
  },
  {
    title: 'Winch-Out Operations',
    desc: 'Precision extraction from ditches, mud, snow, or difficult terrain using advanced winch technology.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1599422315624-998f4019a770?auto=format&fit=crop&q=80&w=800',
    stats: { eta: '24m', availability: '95%' }
  },
  {
    title: 'Accident Recovery',
    desc: 'Safe and efficient clearance of multi-vehicle accident sites, rollovers, and complex wreckage.',
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800',
    stats: { eta: '22m', availability: '99%' }
  },
  {
    title: 'Tractor-Trailer Recovery',
    desc: 'Specialized recovery for semi-trucks, trailers, and intermodal transport units in any scenario.',
    icon: Box,
    image: 'https://images.unsplash.com/photo-1591768793355-74d7ca7385da?auto=format&fit=crop&q=80&w=800',
    stats: { eta: '35m', availability: '97%' }
  },
  {
    title: 'RV & Camper Recovery',
    desc: 'Expert recovery and towing for Class A motorhomes, buses, and large recreational vehicles.',
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=800',
    stats: { eta: '42m', availability: '94%' }
  },
  {
    title: 'Cargo Recovery',
    desc: 'Load shifts, spills, and cargo transfer recovery for high-value logistics and supply chain protection.',
    icon: Target,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    stats: { eta: '45m', availability: '92%' }
  },
  {
    title: 'Rotator Services',
    desc: '360° heavy lift and recovery capability for the most challenging and high-stakes incidents.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1566860299613-76e627747acf?auto=format&fit=crop&q=80&w=800',
    stats: { eta: '30m', availability: '88%' }
  },
  {
    title: 'Off-Road Extraction',
    desc: 'Specialized equipment and techniques for off-road, construction, and remote area recovery.',
    icon: Compass,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
    stats: { eta: '55m', availability: '91%' }
  }
];

export const ServicesGrid = () => {
  return (
    <section className="py-32 bg-brand-bg relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-16">
           <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight">Our Recovery & Winch-Out Services</h2>
              <p className="text-[#94A3B8] font-medium max-w-2xl">Nationwide coverage for every recovery scenario, from class-8 rollovers to off-road extractions.</p>
           </div>
           <Button variant="ghost" className="text-[#2F80FF] font-black uppercase tracking-widest text-[11px] gap-2 hover:bg-[#2F80FF]/10">
              View All Services <Navigation className="h-3 w-3 rotate-90" />
           </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {recoveryServices.map((service, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: i * 0.05 }}
               viewport={{ once: true }}
             >
                <GlassPanel className="h-full p-0 border-white/10 bg-[#0A192F]/40 hover:bg-[#0A192F]/80 transition-all group overflow-hidden flex flex-col">
                   {/* Service Image */}
                   <div className="h-48 w-full relative overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-6">
                         <div className="h-10 w-10 rounded-xl bg-brand-navy/90 backdrop-blur border border-white/10 flex items-center justify-center">
                            <service.icon className="h-5 w-5 text-[#2F80FF]" />
                         </div>
                      </div>
                   </div>

                   {/* Service Content */}
                   <div className="p-8 flex-1 flex flex-col">
                      <h3 className="text-xl font-black text-white mb-4 leading-tight">{service.title}</h3>
                      <p className="text-[13px] text-[#94A3B8] leading-relaxed font-medium mb-10 flex-1">
                         {service.desc}
                      </p>

                      <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                         <div>
                            <p className="text-[9px] font-bold text-[#94A3B8] uppercase tracking-widest mb-1">Avg. Response</p>
                            <p className="text-sm font-black text-white">{service.stats.eta}</p>
                         </div>
                         <div className="text-right">
                            <p className="text-[9px] font-bold text-[#94A3B8] uppercase tracking-widest mb-1">Availability</p>
                            <p className="text-sm font-black text-emerald-400">{service.stats.availability}</p>
                         </div>
                      </div>
                   </div>
                </GlassPanel>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};
