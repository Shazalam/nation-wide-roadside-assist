'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Lock, Globe, ChevronRight } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Badge } from '@/components/ui/badge';

const trustMetrics = [
  { label: 'Platform Availability', val: '99.98%', desc: 'Guaranteed Enterprise Uptime' },
  { label: 'Operational Monitoring', val: '24/7/365', desc: 'Active Network Surveillance' },
  { label: 'SLA Governance', val: 'Tier 1', desc: 'Mission-Critical Protection' },
  { label: 'API Infrastructure', val: 'Encrypted', desc: 'Secure Data Orchestration' }
];

export const TermsHero = () => {
  return (
    <section className="relative min-h-[55vh] pt-32 pb-20 px-6 lg:px-12 overflow-hidden bg-brand-bg flex items-center">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2F80FF]/10 blur-[150px] rounded-full -mr-48 -mt-48 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-blue/5 blur-[120px] rounded-full -ml-32 -mb-32 pointer-events-none" />
      
      {/* Animated Grid Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-2/3 space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-[10px] font-black text-brand-slate uppercase tracking-[0.3em]"
              >
                <span>Legal</span>
                <ChevronRight className="h-3 w-3 text-[#2F80FF]" />
                <span className="text-[#2F80FF]">Terms of Service</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Badge className="bg-[#2F80FF]/10 text-[#2F80FF] border-[#2F80FF]/30 px-5 py-2 rounded-full flex items-center gap-3 w-fit">
                   <div className="h-1.5 w-1.5 rounded-full bg-[#2F80FF] animate-pulse shadow-[0_0_10px_#2F80FF]" />
                   <span className="text-[10px] font-black uppercase tracking-[0.25em]">Enterprise Service Governance</span>
                </Badge>
              </motion.div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl lg:text-[4rem] font-black tracking-tighter text-foreground dark:text-white leading-[1.05]"
            >
              Enterprise Terms of Service <br />
              <span className="text-[#2F80FF]">& Operational Governance</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg lg:text-xl text-brand-slate leading-relaxed max-w-[760px] font-medium"
            >
              Nationwide Trans Inc. provides enterprise-grade mobility infrastructure, dispatch intelligence, API services, and operational support systems governed through transparent service agreements and compliance standards.
            </motion.p>
          </div>

          <div className="lg:w-1/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
             {trustMetrics.map((m, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.4 + i * 0.1 }}
               >
                 <GlassPanel className="p-5 border-brand-border bg-card/40 group hover:border-[#2F80FF]/40 transition-all duration-500">
                    <p className="text-2xl font-black text-foreground dark:text-white tracking-tighter mb-1">{m.val}</p>
                    <p className="text-[9px] font-black text-[#2F80FF] uppercase tracking-widest mb-1">{m.label}</p>
                    <p className="text-[8px] text-brand-slate font-medium uppercase tracking-tight">{m.desc}</p>
                 </GlassPanel>
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};
