'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  AppWindow, Cpu, Code2, Shield, 
  ChevronRight, Zap, Globe, Activity 
} from 'lucide-react';

const capabilities = [
  {
    title: 'White-Label Roadside Operations',
    description: 'Deliver seamless branded roadside experiences integrated directly into your insurance ecosystem. Total control over member interaction and service delivery.',
    icon: AppWindow,
    stats: '100% Brand Control',
    features: ['Custom Mobile Apps', 'Branded Dispatch Portals', 'Member SMS Tracking'],
    color: '#2F80FF',
  },
  {
    title: 'Claims & Dispatch Intelligence',
    description: 'Automated dispatch orchestration and intelligent escalation systems designed for enterprise roadside efficiency. SLA-driven routing logic.',
    icon: Cpu,
    stats: '97.8% SLA Match',
    features: ['AI-Driven Vendor Routing', 'Predictive ETA Logic', 'Fraud Detection Mesh'],
    color: '#FF7A1A',
  },
  {
    title: 'API-Driven Integrations',
    description: 'Integrate roadside workflows directly into policy systems, claims infrastructure, and mobility platforms via our enterprise developer ecosystem.',
    icon: Code2,
    stats: '24ms Response Time',
    features: ['Claims Lifecycle APIs', 'Real-time Webhooks', 'Secure OAuth 2.0 Auth'],
    color: '#2F80FF',
  },
];

export default function CapabilitiesGrid() {
  return (
    <section className="py-32 bg-[#081120] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <Shield className="w-3.5 h-3.5 text-[#2F80FF]" />
            <span className="text-[10px] font-bold text-[#2F80FF] uppercase tracking-widest">Enterprise Core Capabilities</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-white mb-8">
            Engineered for Modern Insurance Operations
          </h2>
          <p className="text-[#94A3B8] text-xl leading-relaxed">
            Our platform provides the infrastructure needed to modernize roadside claims, improve loss ratios, and elevate member satisfaction at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative h-full"
              >
                {/* Outer Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2F80FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem] blur-2xl -z-10" />
                
                <div className="relative bg-[#0A192F]/60 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-10 h-full flex flex-col hover:border-[#2F80FF]/40 transition-all duration-500 shadow-2xl">
                  {/* Icon & Meta Row */}
                  <div className="flex justify-between items-start mb-10">
                    <div className="p-5 rounded-2xl bg-[#081120] border border-white/5 group-hover:bg-[#2F80FF] group-hover:border-[#2F80FF] group-hover:text-white transition-all duration-500">
                      <Icon className="w-10 h-10 text-[#2F80FF] group-hover:text-white transition-colors" />
                    </div>
                    <div className="text-right">
                       <div className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-widest mb-1">Infrastructure Metric</div>
                       <div className="text-lg font-black text-white font-mono">{cap.stats}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-black text-white mb-6 group-hover:text-[#2F80FF] transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed mb-10 flex-grow">
                    {cap.description}
                  </p>

                  {/* Feature Tags */}
                  <div className="space-y-4 mb-10">
                    {cap.features.map((feat, fi) => (
                      <div key={fi} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#2F80FF]" />
                        <span className="text-[11px] font-bold text-white/70 uppercase tracking-widest">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full py-5 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white/10 transition-all flex items-center justify-center gap-2 group/btn">
                    Explore Capabilities <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Floating background stats */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8 opacity-40">
           {[
             { label: 'System Uptime', val: '99.99%' },
             { label: 'Dispatch Latency', val: '< 18s' },
             { label: 'Claims Sync', val: 'Real-time' },
             { label: 'Global Coverage', val: '100%' }
           ].map((s, i) => (
             <div key={i} className="text-center py-6 border-r border-white/5 last:border-0">
                <div className="text-2xl font-black text-white font-mono">{s.val}</div>
                <div className="text-[10px] text-[#94A3B8] uppercase tracking-[0.2em] mt-2">{s.label}</div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
