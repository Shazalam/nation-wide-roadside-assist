'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Shield, Globe, Truck, 
  AppWindow, Activity, BarChart3, Radio 
} from 'lucide-react';

const ecosystems = [
  {
    title: 'Motor Clubs',
    description: 'Deliver premium roadside experiences at scale with automated dispatch and member intelligence.',
    metrics: [
      { label: 'SLA Compliance', val: '98.2%' },
      { label: 'Annual Dispatches', val: '1.2M+' }
    ],
    icon: Users,
    color: '#2F80FF'
  },
  {
    title: 'Insurance Carriers',
    description: 'Streamline claims and reduce loss ratios with integrated roadside infrastructure.',
    metrics: [
      { label: 'Faster Resolution', val: '23%' },
      { label: 'Lower Loss Ratio', val: '18%' }
    ],
    icon: Shield,
    color: '#FF7A1A'
  },
  {
    title: 'Connected Ecosystems',
    description: 'Power OEM and connected vehicle platforms with native roadside API integration.',
    metrics: [
      { label: 'API Uptime', val: '99.9%' },
      { label: 'Integrations', val: '200+' }
    ],
    icon: Globe,
    color: '#2F80FF'
  },
  {
    title: 'Fleet Insurance',
    description: 'Reduce downtime and improve fleet performance with heavy-duty recovery dispatch.',
    metrics: [
      { label: 'Downtime Reduction', val: '31%' },
      { label: 'Fleet Events', val: '2.4M+' }
    ],
    icon: Truck,
    color: '#FF7A1A'
  },
  {
    title: 'Enterprise Platforms',
    description: 'API-first infrastructure for modern mobility and logistics platforms.',
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
    <section className="py-32 bg-[#081120] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <Globe className="w-3.5 h-3.5 text-[#2F80FF]" />
            <span className="text-[10px] font-bold text-[#2F80FF] uppercase tracking-widest">Industry Ecosystem</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-white mb-8">
            Built for Every Insurance & Mobility Ecosystem
          </h2>
          <p className="text-[#94A3B8] text-xl leading-relaxed">
            From global carriers to emerging mobility platforms, our infrastructure is the backbone of modern roadside operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {ecosystems.map((eco, i) => {
            const Icon = eco.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative bg-[#0A192F]/60 backdrop-blur-3xl border border-white/5 rounded-3xl p-8 flex flex-col hover:border-[#2F80FF]/30 transition-all duration-500"
              >
                <div className="p-4 rounded-2xl bg-[#081120] border border-white/5 w-fit mb-8 group-hover:bg-[#2F80FF] transition-all duration-500">
                  <Icon className="w-6 h-6 text-[#2F80FF] group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-lg font-black text-white mb-4 group-hover:text-[#2F80FF] transition-colors">{eco.title}</h3>
                <p className="text-[11px] text-[#94A3B8] leading-relaxed mb-10 opacity-70 group-hover:opacity-100 transition-opacity">
                  {eco.description}
                </p>

                <div className="mt-auto pt-8 border-t border-white/5 space-y-6">
                   {eco.metrics.map((m, mi) => (
                     <div key={mi}>
                        <div className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-widest mb-1">{m.label}</div>
                        <div className="text-xl font-black text-white font-mono">{m.val}</div>
                     </div>
                   ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Live Operational Stats Strip */}
        <div className="mt-20 p-8 bg-[#0A192F]/80 backdrop-blur-xl border border-white/5 rounded-[2.5rem] flex flex-wrap justify-between items-center gap-8">
           <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                 <span className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-[0.2em]">Network Integration: Online</span>
              </div>
              <div className="h-4 w-[1px] bg-white/10" />
              <div className="flex items-center gap-3">
                 <Radio className="w-4 h-4 text-blue-400" />
                 <span className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-[0.2em]">Telemetry Nodes: 14.2k</span>
              </div>
           </div>
           <div className="flex gap-4">
              {[Activity, BarChart3, Globe].map((Icon, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-blue-500/10 transition-colors cursor-pointer">
                   <Icon className="w-4 h-4 text-white/40 hover:text-blue-400 transition-colors" />
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}
