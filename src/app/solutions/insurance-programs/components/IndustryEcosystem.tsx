'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Shield, Globe, Truck, 
  AppWindow, Activity, BarChart3, Radio, ShieldCheck
} from 'lucide-react';

const ecosystems = [
  {
    title: 'Motor Clubs',
    description: 'Deliver premium roadside experiences at scale.',
    metrics: [
      { label: 'SLA Compliance', val: '98.2%' },
      { label: 'Annual Dispatches', val: '1.2M+' }
    ],
    icon: ShieldCheck,
    color: '#2F80FF'
  },
  {
    title: 'Insurance Carriers',
    description: 'Streamline claims and reduce loss ratios.',
    metrics: [
      { label: 'Faster Resolution', val: '23%' },
      { label: 'Lower Loss Ratio', val: '18%' }
    ],
    icon: BarChart3,
    color: '#FF7A1A'
  },
  {
    title: 'Connected Ecosystems',
    description: 'Power OEM and connected vehicle platforms.',
    metrics: [
      { label: 'API Uptime', val: '99.9%' },
      { label: 'Integrations', val: '200+' }
    ],
    icon: Globe,
    color: '#2F80FF'
  },
  {
    title: 'Fleet Insurance',
    description: 'Reduce downtime and improve fleet performance.',
    metrics: [
      { label: 'Downtime Reduction', val: '31%' },
      { label: 'Fleet Events', val: '2.4M+' }
    ],
    icon: Activity,
    color: '#FF7A1A'
  },
  {
    title: 'Enterprise Platforms',
    description: 'API-first infrastructure for modern mobility operations.',
    metrics: [
      { label: 'API Calls / Year', val: '500M+' },
      { label: 'Support Ops', val: '24/7' }
    ],
    icon: AppWindow,
    color: '#2F80FF'
  }
];

export default function IndustryEcosystem() {
  return (
    <section className="py-12 md:py-16 bg-[#081120] relative border-y border-white/5 flex flex-col justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(47,128,255,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 w-full relative z-10">
        
        {/* Compact Header */}
        <div className="text-center mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-black tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]"
          >
            Built for Every Insurance & Mobility Ecosystem
          </motion.h2>
        </div>

        {/* Compact KPI Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {ecosystems.map((eco, i) => {
            const Icon = eco.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="group relative bg-[#0A192F] border border-white/10 rounded-2xl p-5 hover:border-[#2F80FF]/40 transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_rgba(47,128,255,0.1)] overflow-hidden flex flex-col"
              >
                {/* Subtle Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2F80FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Header: Icon + Title */}
                <div className="flex items-center gap-3 mb-2 relative z-10">
                  <div className="p-1.5 rounded-lg bg-[#081120] border border-white/10 group-hover:bg-[#2F80FF]/10 group-hover:border-[#2F80FF]/30 transition-colors">
                    <Icon className="w-4 h-4 text-[#2F80FF]" />
                  </div>
                  <h3 className="text-sm font-bold text-white tracking-tight leading-none">{eco.title}</h3>
                </div>
                
                {/* Description */}
                <p className="text-[11px] text-[#94A3B8] leading-snug mb-3 line-clamp-2 relative z-10 min-h-[32px]">
                  {eco.description}
                </p>

                {/* Divider */}
                <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent mb-3 relative z-10" />

                {/* Metrics */}
                <div className="flex items-start justify-between mt-auto relative z-10 gap-2">
                   {eco.metrics.map((m, mi) => (
                     <div key={mi} className="flex flex-col">
                        <div className="text-base font-black text-white font-mono tracking-tight group-hover:text-[#2F80FF] transition-colors">{m.val}</div>
                        <div className="text-[9px] font-mono text-[#94A3B8] uppercase tracking-wider leading-tight mt-0.5">{m.label}</div>
                     </div>
                   ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
