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
  Zap,
  Activity,
  Globe,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const services = [
  { 
    icon: Car, 
    label: "Tow Dispatch",
    desc: "Managed roadside towing orchestration for light-duty passenger vehicles.",
    metrics: { eta: "22m", avail: "98%", status: "Active" },
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80'
  },
  { 
    icon: Truck, 
    label: "Heavy-Duty Towing",
    desc: "Specialized Class 8 recovery and long-haul transport logistics.",
    metrics: { eta: "45m", avail: "92%", status: "Active" },
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80'
  },
  { 
    icon: Disc, 
    label: "Tire Change",
    desc: "Rapid on-site tire replacement and inflation services nationwide.",
    metrics: { eta: "18m", avail: "99%", status: "Live" },
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80'
  },
  { 
    icon: Fuel, 
    label: "Fuel Delivery",
    desc: "Emergency refueling services for gas and diesel commercial units.",
    metrics: { eta: "15m", avail: "100%", status: "Active" },
    image: 'https://images.unsplash.com/photo-1565251670894-399580b067d5?auto=format&fit=crop&q=80'
  },
  { 
    icon: Battery, 
    label: "Battery Jumpstart",
    desc: "Mobile battery diagnostics and high-amp jumpstart support.",
    metrics: { eta: "12m", avail: "99%", status: "Ready" },
    image: 'https://images.unsplash.com/photo-1597816654005-77983eb05c6d?auto=format&fit=crop&q=80'
  },
  { 
    icon: Wrench, 
    label: "Mobile Mechanic",
    desc: "Basic mechanical diagnostics and roadside repair coordination.",
    metrics: { eta: "35m", avail: "88%", status: "Active" },
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80'
  },
  { 
    icon: Waves, 
    label: "Recovery & Winch-Outs",
    desc: "Technical off-road recovery for vehicles stuck in mud, snow, or sand.",
    metrics: { eta: "40m", avail: "85%", status: "Live" },
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80'
  },
  { 
    icon: Key, 
    label: "Lockout Assistance",
    desc: "Non-destructive vehicle entry for locked-out drivers and fleets.",
    metrics: { eta: "20m", avail: "97%", status: "Ready" },
    image: 'https://images.unsplash.com/photo-1517520287167-4bda64282b54?auto=format&fit=crop&q=80'
  },
  { 
    icon: ShieldAlert, 
    label: "Accident Recovery",
    desc: "Post-collision scene management and secure asset recovery.",
    metrics: { eta: "25m", avail: "94%", status: "Urgent" },
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80'
  },
  { 
    icon: Mountain, 
    label: "RV & Camper Support",
    desc: "Specialized recovery for oversized recreational vehicles and campers.",
    metrics: { eta: "55m", avail: "82%", status: "Active" },
    image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80'
  },
  { 
    icon: Shield, 
    label: "Commercial Fleet Recovery",
    desc: "Enterprise-grade recovery infrastructure for nationwide delivery fleets.",
    metrics: { eta: "30m", avail: "96%", status: "Active" },
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80'
  },
  { 
    icon: Zap, 
    label: "Emergency Roadside",
    desc: "24/7 mission-critical emergency support and dispatch coordination.",
    metrics: { eta: "10m", avail: "100%", status: "Ready" },
    image: 'https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?auto=format&fit=crop&q=80'
  }
];

export const SupportServices = () => {
  return (
    <section className="py-32 bg-brand-bg relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #94A3B8 1px, transparent 0)`, backgroundSize: '48px 48px' }} />
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#2F80FF]/5 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-24 space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
             <div className="h-px w-12 bg-[#2F80FF]" />
             <span className="text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.4em]">Operational Support</span>
          </motion.div>
          
          <div className="relative">
             <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#2F80FF]/10 blur-[60px] rounded-full pointer-events-none" />
             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-4xl md:text-6xl font-black text-foreground dark:text-white tracking-tighter"
             >
               Enterprise Support <span className="text-[#2F80FF]">Services</span>
             </motion.h2>
             <motion.p
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-lg text-brand-slate font-medium max-w-2xl mt-4 leading-relaxed"
             >
               Realtime roadside support systems engineered for enterprise mobility operations and nationwide fleet coordination.
             </motion.p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-16">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative group h-full"
              >
                {/* Floating Icon Bubble */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                   <motion.div
                     whileHover={{ scale: 1.2 }}
                     className="h-16 w-16 bg-card/80 backdrop-blur-xl border border-brand-border rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(47,128,255,0.2)] group-hover:border-[#2F80FF]/40 group-hover:shadow-[0_0_30px_rgba(47,128,255,0.4)] transition-all relative overflow-hidden"
                   >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#2F80FF]/20 to-transparent" />
                      <Icon className="h-7 w-7 text-[#2F80FF] relative z-10 transition-transform group-hover:scale-110" />
                      {/* Pulse Ring */}
                      <div className="absolute inset-0 rounded-full border-2 border-[#2F80FF]/20 animate-pulse" />
                   </motion.div>
                </div>

                {/* Glassmorphism Card */}
                <div className="relative bg-card/55 backdrop-blur-[18px] border border-white/[0.08] rounded-[24px] pt-14 p-6 flex flex-col h-full transition-all duration-400 group-hover:border-[#2F80FF]/40 group-hover:bg-card/80 group-hover:-translate-y-6 group-hover:scale-[1.08] shadow-[0_10px_40px_rgba(0,0,0,0.4)] group-hover:shadow-[0_40px_80px_rgba(47,128,255,0.25)] overflow-hidden">
                   {/* Background Image Ghost */}
                   <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-5 mix-blend-luminosity transition-opacity duration-700 pointer-events-none scale-110 group-hover:scale-100" 
                        style={{ backgroundImage: `url(${service.image})` }} />
                   
                   {/* Inner Glass Highlight */}
                   <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                   
                   <div className="text-center mb-6">
                      <h3 className="text-[15px] font-black text-foreground dark:text-white uppercase tracking-tight group-hover:text-[#2F80FF] transition-colors mb-2">
                        {service.label}
                      </h3>
                      <p className="text-[12px] text-brand-slate font-medium leading-relaxed px-1">
                        {service.desc}
                      </p>
                   </div>

                   {/* Live Telemetry (Reveals on Hover) */}
                   <div className="mt-auto space-y-5">
                      <div className="grid grid-cols-2 gap-2 pt-5 border-t border-brand-border opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                         <div className="space-y-1">
                            <span className="text-[9px] font-black text-[#2F80FF] uppercase tracking-widest">Avg ETA</span>
                            <p className="text-[12px] font-bold text-foreground dark:text-white font-mono">{service.metrics.eta}</p>
                         </div>
                         <div className="space-y-1 text-right">
                            <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest">Avail</span>
                            <p className="text-[12px] font-bold text-foreground dark:text-white font-mono">{service.metrics.avail}</p>
                         </div>
                      </div>

                      {/* Status Indicator */}
                      <div className="flex items-center justify-between px-1">
                         <div className="flex items-center gap-2">
                            <div className={`h-2 w-2 rounded-full ${service.metrics.status === 'Urgent' ? 'bg-red-500' : 'bg-[#2F80FF]'} animate-pulse`} />
                            <span className="text-[10px] font-black text-foreground dark:text-white/40 uppercase tracking-[0.2em] group-hover:text-foreground dark:text-white/60 transition-colors">
                               {service.metrics.status}
                            </span>
                         </div>
                         <CheckCircle2 className="h-4 w-4 text-foreground dark:text-white/10 group-hover:text-[#2F80FF] transition-colors" />
                      </div>
                   </div>

                   {/* Border Glow Pulse */}
                   <div className="absolute inset-0 rounded-[24px] border-2 border-[#2F80FF]/0 group-hover:border-[#2F80FF]/10 transition-all duration-500 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
