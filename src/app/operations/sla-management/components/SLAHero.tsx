'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Activity, ShieldCheck } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { AreaChart, Area, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';

const chartData = [
  { time: '12am', value: 92 }, { time: '4am', value: 95 }, { time: '8am', value: 98 }, 
  { time: '12pm', value: 97 }, { time: '4pm', value: 96 }, { time: '8pm', value: 99 }
];

const barData = [
  { vendor: 'V1', score: 98 }, { vendor: 'V2', score: 95 }, { vendor: 'V3', score: 91 }, { vendor: 'V4', score: 88 }
];

export const SLAHero = () => {
  return (
    <section className="relative pt-8 pb-16 overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2F80FF]/10 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/4" />

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
                <span className="text-white/30">{'>'}</span>
                <span>SLA Management</span>
              </div>
              
              <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-4">Enterprise Operational Intelligence Infrastructure</div>
              
              <h1 className="text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-6">
                Realtime SLA Intelligence & <br className="hidden lg:block"/>Dispatch Performance Management
              </h1>
              
              <p className="text-[15px] text-[#94A3B8] leading-7 max-w-xl">
                Monitor nationwide dispatch compliance, optimize operational efficiency, and automate SLA intelligence across enterprise roadside ecosystems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button className="bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-white font-bold h-11 px-6 rounded-xl shadow-[0_0_20px_rgba(47,128,255,0.3)] hover:shadow-[0_0_30px_rgba(47,128,255,0.5)] transition-all">
                Schedule Enterprise Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 h-11 px-6 rounded-xl font-bold bg-[#0A192F]/50 backdrop-blur-md">
                Explore SLA APIs <Code className="ml-2 h-4 w-4 text-[#94A3B8]" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8"
            >
              {[
                { value: "97.8%", label: "SLA Compliance", trend: "+1.2%" },
                { value: "2.4M+", label: "Dispatch Events", trend: "Annual" },
                { value: "18.2m", label: "Avg Response Time", trend: "-2.1%" },
                { value: "99.1%", label: "Resolution Accuracy", trend: "+0.8%" }
              ].map((metric, i) => (
                <div key={i} className="border-l border-white/10 pl-4 relative group">
                  <div className="text-2xl font-black text-white mb-1 group-hover:text-[#2F80FF] transition-colors">{metric.value}</div>
                  <div className="text-[11px] text-[#94A3B8] font-bold uppercase tracking-wider">{metric.label}</div>
                  {metric.trend && (
                     <div className="text-[10px] text-emerald-400 mt-1 font-mono">{metric.trend}</div>
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
            <GlassPanel className="p-1 rounded-2xl border-white/10 bg-[#0A192F]/40 overflow-hidden relative">
               <div className="flex items-center justify-between p-4 border-b border-white/5 bg-[#081120]/60">
                  <div className="flex items-center gap-2">
                     <ShieldCheck className="h-4 w-4 text-emerald-500" />
                     <span className="text-[11px] font-bold text-white uppercase tracking-widest">SLA Intelligence Hub</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <div className="flex items-center gap-1.5">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] font-mono text-emerald-400">Live</span>
                     </div>
                  </div>
               </div>

               <div className="grid grid-cols-2 gap-px bg-white/5">
                  <div className="p-4 bg-[#081120] relative h-48">
                    <div className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-wider mb-2 flex justify-between">
                       Network SLA Score <span className="text-emerald-400">97.8%</span>
                    </div>
                    <div className="absolute inset-0 top-10 pb-4 px-4">
                       <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={chartData}>
                             <defs>
                                <linearGradient id="slaColor" x1="0" y1="0" x2="0" y2="1">
                                   <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                                   <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                                </linearGradient>
                             </defs>
                             <Area type="monotone" dataKey="value" stroke="#10B981" fillOpacity={1} fill="url(#slaColor)" strokeWidth={2} />
                          </AreaChart>
                       </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="p-4 bg-[#081120] relative h-48">
                    <div className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-wider mb-2">Vendor Compliance</div>
                    <div className="absolute inset-0 top-10 pb-4 px-4">
                       <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={barData}>
                             <Bar dataKey="score" radius={[4, 4, 0, 0]}>
                                {barData.map((entry, index) => (
                                   <Cell key={`cell-${index}`} fill={entry.score > 90 ? '#2F80FF' : '#FF7A1A'} />
                                ))}
                             </Bar>
                          </BarChart>
                       </ResponsiveContainer>
                    </div>
                  </div>
               </div>

               <div className="grid grid-cols-3 gap-px bg-white/5">
                  <div className="p-4 bg-[#0A192F]/80">
                     <div className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-wider mb-1">Avg Response</div>
                     <div className="text-xl font-mono text-white">18.2m</div>
                  </div>
                  <div className="p-4 bg-[#0A192F]/80">
                     <div className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-wider mb-1">Dispatch Time</div>
                     <div className="text-xl font-mono text-white">4.1m</div>
                  </div>
                  <div className="p-4 bg-[#0A192F]/80">
                     <div className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-wider mb-1">ETA Accuracy</div>
                     <div className="text-xl font-mono text-white">96.4%</div>
                  </div>
               </div>
            </GlassPanel>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
