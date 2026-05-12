'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, LifeBuoy, Fuel, Wrench, Battery, 
  Lock, Settings, Shield, AlertCircle, 
  ArrowUpRight, Activity, Clock
} from 'lucide-react';

const services = [
  {
    title: 'Heavy-Duty Towing',
    description: 'Specialized recovery for Class 7 & 8 vehicles, including semi-trucks, buses, and heavy machinery.',
    icon: Truck,
    metrics: { eta: '28m', coverage: 'Nationwide' },
  },
  {
    title: 'Tire Change Services',
    description: 'Commercial-grade tire solutions for heavy-duty axles and multi-tire configurations.',
    icon: Settings,
    metrics: { eta: '35m', coverage: 'All Routes' },
  },
  {
    title: 'Fuel Delivery',
    description: 'Emergency diesel and DEF delivery to keep your fleet moving and avoid costly delays.',
    icon: Fuel,
    metrics: { eta: '22m', coverage: '24/7' },
  },
  {
    title: 'Mobile Mechanic',
    description: 'On-site diagnostics and minor repairs to get vehicles back in service without a tow.',
    icon: Wrench,
    metrics: { eta: '45m', coverage: 'Certified' },
  },
  {
    title: 'Battery Service',
    description: 'Heavy-duty jump starts and battery testing for commercial electrical systems.',
    icon: Battery,
    metrics: { eta: '20m', coverage: 'Instant' },
  },
  {
    title: 'Lockout Assistance',
    description: 'Professional entry services for all commercial vehicle makes and models.',
    icon: Lock,
    metrics: { eta: '18m', coverage: 'Global' },
  },
  {
    title: 'Winch-Out Recovery',
    description: 'Advanced extraction for vehicles stuck off-road or in challenging environments.',
    icon: LifeBuoy,
    metrics: { eta: '40m', coverage: 'Heavy' },
  },
  {
    title: 'Accident Recovery',
    description: 'Full-service site clearance and vehicle recovery for complex accident scenes.',
    icon: AlertCircle,
    metrics: { eta: 'Priority', coverage: 'Site' },
  },
  {
    title: 'Trailer Recovery',
    description: 'Specific handling and recovery for all trailer types, including loaded refrigerated units.',
    icon: Truck,
    metrics: { eta: '32m', coverage: 'Spec' },
  },
  {
    title: 'Mobile Repairs',
    description: 'On-road structural and mechanical repairs by certified fleet technicians.',
    icon: Shield,
    metrics: { eta: '48m', coverage: 'Elite' },
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-32 bg-[#081120]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-white mb-6">
              Full-Spectrum Recovery Services
            </h2>
            <p className="text-[#94A3B8] text-lg leading-relaxed">
              Our infrastructure supports every aspect of commercial roadside operations, from simple lockouts to complex super-heavy recoveries.
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/5 rounded-xl">
             <Activity className="w-4 h-4 text-[#2F80FF]" />
             <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">Live Service Availability Matrix</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative bg-[#0A192F]/50 backdrop-blur-xl border border-white/5 rounded-2xl p-6 flex flex-col hover:border-[#2F80FF]/50 transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
              >
                <div className="mb-6 flex justify-between items-start">
                   <div className="p-3 rounded-xl bg-[#081120] border border-white/5 group-hover:bg-[#2F80FF] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5 text-[#2F80FF] group-hover:text-white transition-colors" />
                   </div>
                   <ArrowUpRight className="w-4 h-4 text-[#94A3B8] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="text-sm font-black text-white uppercase tracking-wider mb-3 group-hover:text-[#2F80FF] transition-colors">{service.title}</h3>
                <p className="text-[10px] text-[#94A3B8] leading-relaxed mb-6 flex-grow">{service.description}</p>

                <div className="pt-4 border-t border-white/5 grid grid-cols-2 gap-2">
                   <div>
                      <div className="text-[8px] text-[#94A3B8] uppercase tracking-widest flex items-center gap-1 mb-1">
                        <Clock className="w-2.5 h-2.5" /> Avg ETA
                      </div>
                      <div className="text-[10px] font-black text-white font-mono">{service.metrics.eta}</div>
                   </div>
                   <div>
                      <div className="text-[8px] text-[#94A3B8] uppercase tracking-widest flex items-center gap-1 mb-1">
                        <Shield className="w-2.5 h-2.5" /> Tier
                      </div>
                      <div className="text-[10px] font-black text-white font-mono uppercase">{service.metrics.coverage}</div>
                   </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
