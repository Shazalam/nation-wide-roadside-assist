'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, Zap, Activity, Globe, Box, Target, 
  ArrowUpRight, Navigation, Compass, Shield
} from 'lucide-react';

const recoveryServices = [
  {
    title: 'Heavy-Duty Recovery',
    desc: 'Rotator and heavy wrecker services for Class 8 commercial vehicles and complex incident scenes.',
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800',
    stats: { eta: '32m', availability: '98%', trend: '+4.2%' }
  },
  {
    title: 'Winch-Out Operations',
    desc: 'Precision extraction from ditches, mud, snow, or difficult terrain using advanced winch technology.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1599422315624-998f4019a770?auto=format&fit=crop&q=80&w=800',
    stats: { eta: '24m', availability: '95%', trend: '+2.8%' }
  },
  {
    title: 'Accident Recovery',
    desc: 'Safe and efficient clearance of multi-vehicle accident sites, rollovers, and complex wreckage.',
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800',
    stats: { eta: '22m', availability: '99%', trend: '+5.1%' }
  },
  {
    title: 'Tractor-Trailer Recovery',
    desc: 'Specialized recovery for semi-trucks, trailers, and intermodal transport units in any scenario.',
    icon: Box,
    image: 'https://images.unsplash.com/photo-1591768793355-74d7ca7385da?auto=format&fit=crop&q=80&w=800',
    stats: { eta: '35m', availability: '97%', trend: '+1.4%' }
  },
  {
    title: 'RV & Camper Recovery',
    desc: 'Expert recovery and towing for Class A motorhomes, buses, and large recreational vehicles.',
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=800',
    stats: { eta: '42m', availability: '94%', trend: 'Stable' }
  },
  {
    title: 'Cargo Recovery',
    desc: 'Load shifts, spills, and cargo transfer recovery for high-value logistics and supply chain protection.',
    icon: Target,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    stats: { eta: '45m', availability: '92%', trend: '+0.5%' }
  },
  {
    title: 'Rotator Services',
    desc: '360° heavy lift and recovery capability for the most challenging and high-stakes incidents.',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1566860299613-76e627747acf?auto=format&fit=crop&q=80&w=800',
    stats: { eta: '30m', availability: '88%', trend: '+3.2%' }
  },
  {
    title: 'Off-Road Extraction',
    desc: 'Specialized equipment and techniques for off-road, construction, and remote area recovery.',
    icon: Compass,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
    stats: { eta: '55m', availability: '91%', trend: '+2.1%' }
  }
];

export const ServicesGrid = () => {
  return (
    <section className="py-32 relative bg-brand-bg overflow-hidden border-t border-brand-border">
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #94A3B8 1px, transparent 0)`, backgroundSize: '64px 64px' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
           <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-[#2F80FF]" />
                <span className="text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.4em]">Service Capabilities</span>
              </motion.div>
              <h2 className="text-4xl lg:text-6xl font-black text-foreground dark:text-white tracking-tighter leading-tight">
                 Our Recovery & <br />
                 <span className="text-[#2F80FF]">Winch-Out</span> Services
              </h2>
           </div>
           <button className="px-6 py-3 bg-white/5 border border-brand-border rounded-xl text-[10px] font-black text-foreground dark:text-white uppercase tracking-widest hover:bg-[#2F80FF] hover:border-[#2F80FF] transition-all flex items-center gap-3 group">
              View All Services <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
           </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
           {recoveryServices.map((service, i) => {
             const Icon = service.icon;
             return (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.05 }}
                 className="relative group h-full cursor-pointer"
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
                          style={{ backgroundImage: `url(${service.image})` }} />
                     
                     <div className="relative z-10 mb-8 pt-4">
                        <h3 className="text-xl font-black text-foreground dark:text-white uppercase tracking-tight leading-tight mb-4 group-hover:text-[#2F80FF] transition-colors">
                           {service.title}
                        </h3>
                        <p className="text-[13px] text-brand-slate font-medium leading-relaxed">
                           {service.desc}
                        </p>
                     </div>
                     
                     {/* Operational Telemetry */}
                     <div className="mt-auto relative z-10 pt-6 border-t border-brand-border grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                           <p className="text-[9px] font-black text-[#2F80FF] uppercase tracking-widest">Avg Response</p>
                           <p className="text-xl font-black text-foreground dark:text-white font-mono tracking-tighter">{service.stats.eta}</p>
                        </div>
                        <div className="space-y-1 text-right">
                           <p className="text-[9px] font-black text-[#2F80FF] uppercase tracking-widest">Availability</p>
                           <div className="flex items-center justify-end gap-1.5">
                              <span className="text-xl font-black text-emerald-400 font-mono tracking-tighter">{service.stats.availability}</span>
                           </div>
                        </div>
                     </div>

                     {/* Progress Indicator */}
                     <div className="mt-4 h-0.5 w-full bg-white/5 rounded-full overflow-hidden relative">
                        <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: '100%' }}
                           transition={{ duration: 1, ease: 'easeOut' }}
                           className="h-full bg-[#2F80FF]/40"
                        />
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
