'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, LifeBuoy, Fuel, Wrench, Battery, 
  Lock, Settings, Shield, AlertCircle, 
  Activity, Clock
} from 'lucide-react';

const services = [
  {
    title: 'Heavy-Duty Towing',
    description: 'Specialized recovery for Class 7 & 8 vehicles, including semi-trucks, buses, and heavy machinery.',
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80'
  },
  {
    title: 'Tire Change Services',
    description: 'Commercial-grade tire solutions for heavy-duty axles and multi-tire configurations.',
    icon: Settings,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80'
  },
  {
    title: 'Fuel Delivery',
    description: 'Emergency diesel and DEF delivery to keep your fleet moving and avoid costly delays.',
    icon: Fuel,
    image: 'https://images.unsplash.com/photo-1591768793355-74d7ca7385da?auto=format&fit=crop&q=80'
  },
  {
    title: 'Mobile Mechanic',
    description: 'On-site diagnostics and minor repairs to get vehicles back in service without a tow.',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80'
  },
  {
    title: 'Battery Service',
    description: 'Heavy-duty jump starts and battery testing for commercial electrical systems.',
    icon: Battery,
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536ad0a?auto=format&fit=crop&q=80'
  },
  {
    title: 'Lockout Assistance',
    description: 'Professional entry services for all commercial vehicle makes and models.',
    icon: Lock,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80'
  },
  {
    title: 'Winch-Out Recovery',
    description: 'Advanced extraction for vehicles stuck off-road or in challenging environments.',
    icon: LifeBuoy,
    image: 'https://images.unsplash.com/photo-1454165833762-02ad50e8958d?auto=format&fit=crop&q=80'
  },
  {
    title: 'Accident Recovery',
    description: 'Full-service site clearance and vehicle recovery for complex accident scenes.',
    icon: AlertCircle,
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80'
  },
  {
    title: 'Trailer Recovery',
    description: 'Specific handling and recovery for all trailer types, including loaded refrigerated units.',
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1566860299613-76e627747acf?auto=format&fit=crop&q=80'
  },
  {
    title: 'Mobile Repairs',
    description: 'On-road structural and mechanical repairs by certified fleet technicians.',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
  },
];

export default function ServicesGrid() {
  return (
    <section className="relative z-10 py-32 bg-brand-bg overflow-hidden">
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
               Full-Spectrum <span className="text-[#2F80FF]">Recovery</span> Services
            </h2>
            <p className="text-brand-slate text-lg font-medium leading-relaxed max-w-2xl mx-auto">
               Our infrastructure supports every aspect of commercial roadside operations, from simple lockouts to complex super-heavy recoveries.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-16">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 5) * 0.1 }}
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
                   <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-15 mix-blend-luminosity transition-opacity duration-700 pointer-events-none scale-110 group-hover:scale-100" 
                        style={{ backgroundImage: `url(${service.image})` }} />
                   
                   <div className="relative z-10 h-full flex flex-col">
                      <h3 className="text-base font-black text-foreground dark:text-white uppercase tracking-tight leading-tight mb-4 group-hover:text-[#2F80FF] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-[11px] text-brand-slate font-medium leading-relaxed mb-6">
                        {service.description}
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
}
