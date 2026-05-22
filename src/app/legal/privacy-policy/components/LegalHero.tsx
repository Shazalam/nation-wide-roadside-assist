'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Activity, Globe, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const LegalHero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden bg-brand-bg min-h-[55vh] flex items-center border-b border-brand-border">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[#2F80FF]/10 blur-[150px] rounded-full -mt-48 pointer-events-none" />
      
      {/* Telemetry Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          
          <div className="space-y-4 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-xs font-medium text-brand-slate uppercase tracking-widest"
            >
              <span className="hover:text-foreground dark:text-white transition-colors cursor-pointer">Legal</span>
              <ChevronRight className="h-3 w-3 text-[#2F80FF]" />
              <span className="text-[#2F80FF]">Privacy Policy</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Badge className="bg-[#2F80FF]/10 text-[#2F80FF] border-[#2F80FF]/30 px-5 py-2 rounded-full flex items-center gap-2.5">
                <div className="h-1.5 w-1.5 rounded-full bg-[#2F80FF] animate-pulse shadow-[0_0_8px_#2F80FF]" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em]">Enterprise Trust & Data Governance</span>
              </Badge>
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl lg:text-[4rem] font-black tracking-tighter text-foreground dark:text-white leading-[1.05]"
          >
            Enterprise <br />
            <span className="text-[#2F80FF]">Privacy & Data Protection</span>
            <br />
            Infrastructure
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg lg:text-xl text-brand-slate leading-relaxed max-w-3xl font-medium"
          >
            Nationwide Roadside Assist maintains enterprise-grade privacy, compliance, and data governance standards engineered for insurers, fleets, OEMs, mobility providers, and operational dispatch ecosystems.
          </motion.p>

          {/* Trust Metric Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full pt-8">
            {[
              { label: 'SOC 2 Type II Certified', icon: Shield },
              { label: 'GDPR Ready Infrastructure', icon: Globe },
              { label: '256-bit Encryption Standards', icon: Lock },
              { label: '24/7 Security Monitoring', icon: Activity }
            ].map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="bg-card/40 backdrop-blur-xl border border-brand-border rounded-2xl p-4 flex flex-col items-center gap-3 group hover:border-[#2F80FF]/40 transition-all duration-500"
              >
                <m.icon className="h-5 w-5 text-[#2F80FF] group-hover:scale-110 transition-transform" />
                <p className="text-[10px] font-black text-foreground dark:text-white uppercase tracking-widest text-center leading-tight">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
