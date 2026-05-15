'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Activity, Phone, Headphones, Clock } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

export const CallCenterHero = () => {
  return (
    <section className="relative pt-8 pb-16 overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2F80FF]/10 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#2F80FF]/5 blur-[100px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/4" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 text-[11px] font-bold text-[#2F80FF] uppercase tracking-widest mb-6">
                <span>Operations</span>
                <span className="text-foreground dark:text-white/30">{'>'}</span>
                <span>Call Center Operations</span>
              </div>
              
              <div className="text-[10px] font-bold text-brand-slate uppercase tracking-widest mb-4">Enterprise Dispatch Communications Infrastructure</div>
              
              <h1 className="text-4xl lg:text-5xl font-black text-foreground dark:text-white leading-[1.1] tracking-tight mb-6">
                24/7 Enterprise Call Center & <br className="hidden lg:block"/>Dispatch Operations Platform
              </h1>
              
              <p className="text-[15px] text-brand-slate leading-7 max-w-xl">
                AI-assisted roadside communications, SLA-driven incident management, and real-time dispatch coordination engineered for insurers, fleets, OEMs, and enterprise mobility networks.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button className="bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-foreground dark:text-white font-bold h-11 px-6 rounded-xl shadow-[0_0_20px_rgba(47,128,255,0.3)] hover:shadow-[0_0_30px_rgba(47,128,255,0.5)] transition-all">
                Schedule Enterprise Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-brand-border text-foreground dark:text-white hover:bg-white/5 h-11 px-6 rounded-xl font-bold bg-card/50 backdrop-blur-md">
                Explore Dispatch APIs <Code className="ml-2 h-4 w-4 text-brand-slate" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8"
            >
              {[
                { value: "99.1%", label: "Call Resolution Rate", trend: "+2.1%" },
                { value: "2.9M+", label: "Annual Support Events", trend: "National" },
                { value: "24/7", label: "Nationwide Operations", icon: Activity },
                { value: "97.8%", label: "SLA Compliance", trend: "+1.2%" }
              ].map((metric, i) => (
                <div key={i} className="border-l border-brand-border pl-4 relative group">
                  <div className="text-2xl font-black text-foreground dark:text-white mb-1 group-hover:text-[#2F80FF] transition-colors">{metric.value}</div>
                  <div className="text-[11px] text-brand-slate font-bold uppercase tracking-wider">{metric.label}</div>
                  {metric.trend && (
                     <div className="text-[10px] text-emerald-400 mt-1 font-mono">{metric.trend}</div>
                  )}
                  {metric.icon && (
                     <metric.icon className="h-4 w-4 text-[#2F80FF] mt-1" />
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-1/2 w-full"
          >
            <GlassPanel className="p-1 rounded-2xl border-brand-border bg-card/40 overflow-hidden relative">
               <div className="flex items-center justify-between p-4 border-b border-brand-border bg-brand-bg/60">
                  <div className="flex items-center gap-2">
                     <Activity className="h-4 w-4 text-[#2F80FF]" />
                     <span className="text-[11px] font-bold text-foreground dark:text-white uppercase tracking-widest">Live Operations Command Center</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <div className="flex items-center gap-1.5">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] font-mono text-emerald-400">Live</span>
                     </div>
                  </div>
               </div>

               <div className="h-[250px] relative bg-brand-bg overflow-hidden flex items-center justify-center border-b border-brand-border">
                  <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#2F80FF 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  
                  <div className="relative w-[80%] h-[80%] border border-[#2F80FF]/20 rounded-3xl bg-card/50 shadow-[inset_0_0_50px_rgba(47,128,255,0.1)] flex items-center justify-center">
                     <span className="text-[#2F80FF]/30 font-mono text-xs tracking-widest">LIVE ROADSIDE INCIDENTS</span>
                     
                     {[...Array(12)].map((_, i) => (
                        <motion.div
                           key={i}
                           className="absolute h-2 w-2 rounded-full bg-[#2F80FF]"
                           style={{ top: `${Math.random() * 80 + 10}%`, left: `${Math.random() * 80 + 10}%` }}
                           animate={{ scale: [1, 2, 1], opacity: [0.5, 1, 0.5], boxShadow: ['0 0 0 rgba(47,128,255,0)', '0 0 20px rgba(47,128,255,0.8)', '0 0 0 rgba(47,128,255,0)'] }}
                           transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                     ))}
                     {[...Array(6)].map((_, i) => (
                        <motion.div
                           key={`orange-${i}`}
                           className="absolute h-2 w-2 rounded-full bg-[#FF7A1A]"
                           style={{ top: `${Math.random() * 80 + 10}%`, left: `${Math.random() * 80 + 10}%` }}
                           animate={{ scale: [1, 1.5, 1], opacity: [0.8, 1, 0.8] }}
                           transition={{ duration: 1.5 + Math.random(), repeat: Infinity, ease: "easeInOut" }}
                        />
                     ))}
                  </div>
                  
                  <div className="absolute right-4 top-4 bg-card/80 p-3 rounded-lg border border-brand-border">
                    <div className="text-[10px] text-brand-slate font-bold uppercase tracking-wider mb-1">Active Incidents</div>
                    <div className="text-xl font-mono text-foreground dark:text-white">1,278 <span className="text-[10px] text-emerald-400">↑ 8.2%</span></div>
                  </div>
               </div>

               <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
                  <div className="p-4 bg-card/80">
                     <Phone className="h-4 w-4 text-[#2F80FF] mb-2" />
                     <div className="text-[10px] text-brand-slate font-bold uppercase tracking-wider mb-1">Active Calls</div>
                     <div className="text-lg font-mono text-foreground dark:text-white">1,263</div>
                  </div>
                  <div className="p-4 bg-card/80">
                     <Headphones className="h-4 w-4 text-[#2F80FF] mb-2" />
                     <div className="text-[10px] text-brand-slate font-bold uppercase tracking-wider mb-1">Calls Handled</div>
                     <div className="text-lg font-mono text-foreground dark:text-white">8,742</div>
                  </div>
                  <div className="p-4 bg-card/80">
                     <Clock className="h-4 w-4 text-[#2F80FF] mb-2" />
                     <div className="text-[10px] text-brand-slate font-bold uppercase tracking-wider mb-1">Avg. Handle Time</div>
                     <div className="text-lg font-mono text-foreground dark:text-white">04:28</div>
                  </div>
                  <div className="p-4 bg-card/80 flex flex-col justify-center items-center">
                     <div className="text-[10px] text-brand-slate font-bold uppercase tracking-wider mb-2">SLA Compliance</div>
                     <div className="h-12 w-12 rounded-full border-4 border-[#2F80FF]/30 flex items-center justify-center border-t-[#2F80FF]">
                        <span className="text-xs font-bold text-foreground dark:text-white">97.8%</span>
                     </div>
                  </div>
               </div>
            </GlassPanel>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
