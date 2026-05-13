'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, ShieldCheck, Activity, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlassPanel } from '@/components/ui/glass-panel';

export const ContactHero = () => {
  return (
    <section className="relative pt-32 lg:pt-44 pb-20 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[#081120] z-0" />
      <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-[#2F80FF]/10 blur-[200px] rounded-full -mr-[400px] -mt-[400px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#FF7A1A]/5 blur-[150px] rounded-full -ml-[200px] -mb-[200px] pointer-events-none z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="lg:col-span-5 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-[10px] font-bold text-[#2F80FF] uppercase tracking-[0.3em]"
            >
              <div className="h-4 w-4 rounded-full border border-brand-blue/30 flex items-center justify-center">
                 <div className="h-1.5 w-1.5 rounded-full bg-brand-blue animate-pulse" />
              </div>
              <span>Enterprise Recovery Operations Contact</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="text-5xl lg:text-[4.5rem] font-black leading-[0.95] tracking-tight mb-6 text-white">
                Connect With <span className="text-[#2F80FF]">Nationwide</span><br />
                Recovery Infrastructure <br />
                Specialists
              </h1>
              <p className="text-lg lg:text-xl text-[#94A3B8] leading-relaxed max-w-xl font-medium">
                Enterprise fleets, insurers, logistics operators, OEM mobility providers, and roadside partners can connect with us for operational coordination and recovery intelligence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" suppressHydrationWarning className="bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-white font-bold h-14 px-8 rounded-xl shadow-[0_0_30px_rgba(47,128,255,0.4)] group">
                Contact Recovery Operations <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" suppressHydrationWarning className="border-white/10 text-white hover:bg-white/5 h-14 px-8 rounded-xl group font-mono text-[11px] uppercase tracking-widest">
                Request Capability Report
              </Button>
            </motion.div>

            {/* Metric Cards Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8"
            >
              {[
                { label: 'Nationwide Operations', val: '24/7', icon: Activity, color: 'text-[#2F80FF]' },
                { label: 'Coverage Infrastructure', val: '99.1%', icon: Globe, color: 'text-[#FF7A1A]' },
                { label: 'Annual Recovery Events', val: '3.2M+', icon: ShieldCheck, color: 'text-purple-400' },
                { label: 'Dispatch Coordination', val: 'Live', icon: Cpu, color: 'text-emerald-400' }
              ].map((m, i) => (
                <div key={i} className="space-y-2 border-l border-white/10 pl-4">
                  <div className={`h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center ${m.color}`}>
                    <m.icon className="h-4 w-4" />
                  </div>
                  <p className="text-xl font-black text-white tracking-tight">{m.val}</p>
                  <p className="text-[9px] font-bold text-[#94A3B8] uppercase tracking-widest leading-tight pr-4">{m.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side: Massive Enterprise Dashboard */}
          <div className="lg:col-span-7 relative h-[700px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <GlassPanel className="w-full h-full p-0 border-white/10 bg-[#0A192F]/80 backdrop-blur-2xl shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/80 to-transparent" />
                 
                 {/* Header */}
                 <div className="px-6 py-4 border-b border-white/5 bg-white/[0.02] flex items-center justify-between shrink-0 relative z-10">
                    <div className="flex items-center gap-3">
                       <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                       </div>
                       <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest ml-4">Support Infrastructure <span className="text-emerald-400 ml-2 font-black">ONLINE</span></span>
                    </div>
                 </div>

                 <div className="flex-1 p-6 relative z-10 flex flex-col gap-6">
                    <div className="grid grid-cols-2 gap-4">
                       <div className="bg-[#081120]/90 border border-white/10 rounded-xl p-5 backdrop-blur-md">
                          <p className="text-[10px] font-black text-[#94A3B8] uppercase tracking-widest mb-1">Support SLA</p>
                          <div className="flex items-end gap-3">
                             <span className="text-3xl font-black text-white">1.2m</span>
                             <span className="text-[9px] font-bold text-emerald-400 mb-1">Avg Response</span>
                          </div>
                          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden mt-4">
                             <div className="h-full w-full bg-gradient-to-r from-emerald-400 to-[#2F80FF]" />
                          </div>
                       </div>
                       
                       <div className="bg-[#081120]/90 border border-white/10 rounded-xl p-5 backdrop-blur-md relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF7A1A]/10 blur-xl rounded-full" />
                          <p className="text-[10px] font-black text-[#94A3B8] uppercase tracking-widest mb-1">Live Incidents</p>
                          <div className="flex items-end gap-3">
                             <span className="text-3xl font-black text-white">8,242</span>
                             <span className="text-[9px] font-bold text-[#FF7A1A] mb-1">Being Managed</span>
                          </div>
                          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden mt-4">
                             <div className="h-full w-[85%] bg-[#FF7A1A]" />
                          </div>
                       </div>
                    </div>

                    <div className="flex-1 border border-white/10 rounded-xl bg-[#081120]/60 backdrop-blur-md overflow-hidden relative">
                       <div className="absolute inset-0 bg-[#2F80FF]/5" />
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                          <div className="w-16 h-16 rounded-full border border-[#2F80FF]/30 flex items-center justify-center relative">
                             <div className="absolute inset-0 rounded-full border border-[#2F80FF] animate-ping opacity-20" />
                             <Globe className="h-8 w-8 text-[#2F80FF]" />
                          </div>
                          <p className="text-[10px] font-mono text-[#2F80FF] mt-4 uppercase tracking-widest">Routing Connection...</p>
                       </div>
                    </div>
                 </div>

              </GlassPanel>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
