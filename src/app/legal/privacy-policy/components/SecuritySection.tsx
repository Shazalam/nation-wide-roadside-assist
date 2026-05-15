'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Shield, Lock, Cpu, Activity, Server, Key } from 'lucide-react';

const securityFeatures = [
  {
    title: "Encryption Architecture",
    desc: "AES-256-GCM for storage and TLS 1.3 for all data transit.",
    icon: Lock,
    accent: "text-[#2F80FF]"
  },
  {
    title: "Access Control Systems",
    desc: "Role-Based Access Control (RBAC) with Just-In-Time provisioning.",
    icon: Key,
    accent: "text-emerald-400"
  },
  {
    title: "Infrastructure Segmentation",
    desc: "VPC isolation with strict network security groups and firewalling.",
    icon: Server,
    accent: "text-purple-400"
  },
  {
    title: "Zero-Trust Mesh",
    desc: "Mutual TLS (mTLS) for all internal service-to-service communication.",
    icon: Cpu,
    accent: "text-[#FF7A1A]"
  }
];

export const SecuritySection = () => {
  return (
    <section className="py-24 relative bg-brand-bg overflow-hidden border-t border-brand-border">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
           <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center justify-center lg:justify-start gap-3"
              >
                <div className="h-[1px] w-8 bg-[#2F80FF]" />
                <span className="text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.3em]">Security Infrastructure</span>
              </motion.div>
              <h2 className="text-4xl lg:text-5xl font-black text-foreground dark:text-white tracking-tight">
                Enterprise <span className="text-[#2F80FF]">Defense-in-Depth</span>
              </h2>
              <p className="text-base lg:text-lg text-brand-slate leading-relaxed font-medium">
                Our infrastructure is engineered with multiple layers of protection to ensure the integrity, availability, and confidentiality of enterprise mobility data.
              </p>
           </div>
           
           <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {securityFeatures.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <GlassPanel className="p-6 h-full flex flex-col items-center text-center border-brand-border bg-card/60 group hover:border-[#2F80FF]/30 transition-all">
                     <f.icon className={`h-8 w-8 ${f.accent} mb-4 group-hover:scale-110 transition-transform`} />
                     <h4 className="text-sm font-black text-foreground dark:text-white mb-2 uppercase tracking-widest">{f.title}</h4>
                     <p className="text-[10px] text-brand-slate font-medium leading-relaxed">{f.desc}</p>
                  </GlassPanel>
                </motion.div>
              ))}
           </div>
        </div>

        {/* Security Pulse Visual */}
        <div className="relative h-[400px] w-full rounded-[2rem] border border-brand-border bg-brand-navy/60 overflow-hidden group">
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                 <motion.div 
                   animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="h-[300px] w-[300px] rounded-full border border-[#2F80FF]/30" 
                 />
                 <motion.div 
                   animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.05, 0.2] }}
                   transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full border border-[#2F80FF]/20" 
                 />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <Shield className="h-16 w-16 text-[#2F80FF] mb-4 animate-pulse" />
                    <span className="text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.4em]">Infrastructure Shield Active</span>
                 </div>
              </div>
           </div>
           
           {/* Telemetry Particles */}
           <div className="absolute bottom-8 left-8 space-y-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center gap-3">
                   <div className="h-1 w-12 bg-[#2F80FF]/20 rounded-full overflow-hidden">
                      <motion.div 
                        animate={{ x: ['-100%', '100%'] }} 
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                        className="h-full w-1/2 bg-[#2F80FF]" 
                      />
                   </div>
                   <span className="text-[8px] font-mono text-brand-slate">SEGMENT_{i}_NOMINAL</span>
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};
