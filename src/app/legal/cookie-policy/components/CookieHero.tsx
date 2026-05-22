'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Lock, Globe, ChevronRight, Activity, Database, CheckCircle2 } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Badge } from '@/components/ui/badge';

const trustCards = [
  { label: 'GDPR Ready Consent', desc: 'Enterprise Compliance Mesh', icon: CheckCircle2 },
  { label: 'Cookie Governance', desc: 'Transparent Tracking Standards', icon: Shield },
  { label: 'Secure Analytics', desc: 'Infrastructure Observability', icon: Database },
  { label: 'Preference Controls', desc: 'Real-Time User Sovereignty', icon: Activity }
];

export const CookieHero = () => {
  return (
    <section className="relative min-h-[50vh] lg:min-h-[55vh] pt-32 pb-20 px-6 lg:px-12 overflow-hidden bg-brand-bg flex items-center">
      {/* Background Atmosphere */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2F80FF]/10 blur-[150px] rounded-full -mr-48 -mt-48 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-blue/5 blur-[120px] rounded-full -ml-32 -mb-32 pointer-events-none" />
      
      {/* Telemetry Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--brand-slate) 1px, transparent 0)', backgroundSize: '48px 48px' }} />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-[10px] font-black text-brand-slate uppercase tracking-[0.3em]"
              >
                <span>Legal</span>
                <ChevronRight className="h-3 w-3 text-[#2F80FF]" />
                <span className="text-[#2F80FF]">Cookie Policy</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Badge className="bg-[#2F80FF]/10 text-[#2F80FF] border-[#2F80FF]/30 px-5 py-2 rounded-full flex items-center gap-3 w-fit">
                   <div className="h-1.5 w-1.5 rounded-full bg-[#2F80FF] animate-pulse shadow-[0_0_10px_#2F80FF]" />
                   <span className="text-[10px] font-black uppercase tracking-[0.25em]">Enterprise Consent & Tracking Governance</span>
                </Badge>
              </motion.div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl lg:text-[4rem] font-black tracking-tighter text-foreground dark:text-white leading-[1.05]"
            >
              Enterprise Cookie & <br />
              <span className="text-[#2F80FF]">Consent Management</span> <br />
              Infrastructure
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg lg:text-xl text-brand-slate leading-relaxed max-w-[760px] font-medium"
            >
              Nationwide Roadside Assist uses enterprise-grade consent and tracking technologies to optimize platform reliability, operational analytics, API performance, and user experience while maintaining transparent governance standards.
            </motion.p>
          </div>

          {/* Right Metrics Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
             {trustCards.map((card, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.4 + i * 0.1 }}
               >
                 <GlassPanel className="p-6 border-brand-border bg-card/40 group hover:border-[#2F80FF]/40 transition-all duration-500 hover:-translate-y-1">
                    <div className="h-10 w-10 rounded-lg bg-[#2F80FF]/10 flex items-center justify-center mb-4 border border-[#2F80FF]/20">
                       <card.icon className="h-5 w-5 text-[#2F80FF]" />
                    </div>
                    <p className="text-sm font-black text-foreground dark:text-white uppercase tracking-tight mb-1 leading-tight">{card.label}</p>
                    <p className="text-[9px] font-black text-brand-slate uppercase tracking-widest">{card.desc}</p>
                 </GlassPanel>
               </motion.div>
             ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};
