'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Cpu, Globe, Zap, Shield, BarChart3, Radio, Database } from 'lucide-react';

const capabilities = [
  {
    title: 'Nationwide Recovery Network',
    description: 'Real-time access to the largest certified heavy-duty recovery network in North America, with localized dispatch nodes in every major logistics corridor.',
    icon: Globe,
    stats: '5,000+ Recovery Units',
    features: ['Heavy Recovery Specialists', 'Super-Heavy Rotators', 'Mobile Mechanic Dispatch'],
    color: '#2F80FF',
  },
  {
    title: 'SLA-Driven Dispatch Intelligence',
    description: 'Automated dispatch engine optimized for enterprise service level agreements, ensuring mission-critical response times and operational compliance.',
    icon: Cpu,
    stats: '99.8% SLA Compliance',
    features: ['Automated Class Matching', 'Predictive ETA Analytics', 'Dynamic Vendor Routing'],
    color: '#FF7A1A',
  },
  {
    title: 'Commercial Mobility APIs',
    description: 'Integrate full-stack recovery infrastructure into your own fleet management platforms with our enterprise-grade developer ecosystem.',
    icon: Database,
    stats: '150ms Response Time',
    features: ['Real-time Telemetry Hooks', 'Automated Billing Sync', 'Incident Webhooks'],
    color: '#2F80FF',
  },
];

export default function CoreCapabilities() {
  return (
    <section className="py-24 bg-[#0A192F]/50 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <Radio className="w-3 h-3 text-[#2F80FF] animate-pulse" />
            <span className="text-[10px] font-bold text-[#2F80FF] uppercase tracking-widest">Enterprise Infrastructure</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-white mb-6">
            Mission-Critical Core Capabilities
          </h2>
          <p className="text-[#94A3B8] text-lg leading-relaxed">
            Engineered for the demands of modern logistics, our platform provides the infrastructure needed to maintain mobility across enterprise fleets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-1 rounded-3xl overflow-hidden transition-all hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              >
                {/* Border Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent transition-opacity group-hover:opacity-100 opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#2F80FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative bg-[#081120] rounded-[22px] p-8 lg:p-10 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all duration-500">
                      <Icon className="w-8 h-8 text-white group-hover:text-[#2F80FF]" />
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-widest">Global Metric</div>
                      <div className="text-sm font-black text-white font-mono mt-1">{cap.stats}</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-4 leading-tight group-hover:text-[#2F80FF] transition-colors">
                    {cap.title}
                  </h3>
                  
                  <p className="text-[#94A3B8] text-sm leading-relaxed mb-8 flex-grow">
                    {cap.description}
                  </p>

                  <div className="space-y-3">
                    {cap.features.map((feat, fi) => (
                      <div key={fi} className="flex items-center gap-3">
                        <Zap className="w-3 h-3 text-[#2F80FF]" />
                        <span className="text-[11px] font-medium text-white/70">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-widest">Capabilities Tier 01</span>
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-1 rounded-full bg-[#2F80FF]" />
                      <div className="w-4 h-1 rounded-full bg-[#2F80FF]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Floating background stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-30">
           {[
             { label: 'Uptime', val: '99.99%' },
             { label: 'Nodes', val: '12.4k' },
             { label: 'Requests', val: '1.2B' },
             { label: 'Latency', val: '<40ms' }
           ].map((s, i) => (
             <div key={i} className="text-center py-4 border-r border-white/5 last:border-0">
                <div className="text-xl font-mono font-black text-white">{s.val}</div>
                <div className="text-[9px] uppercase tracking-[0.2em] text-[#94A3B8]">{s.label}</div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
