'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Zap, Activity, Info, Maximize2, Truck, Car, Cpu, LayoutGrid } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Badge } from '@/components/ui/badge';

const ecosystems = [
  {
    id: '01',
    title: "Insurance Providers",
    desc: "Seamless claims experience and cost optimization for high-volume carriers.",
    icon: Shield,
    image: '/assets/3d/insurance_3d.png',
    specs: { perf: "98.5%", label: "SLA PERFORMANCE" },
    details: "Automated claims intake, real-time vendor dispatch, and predictive cost analysis for national insurance carriers.",
    accent: "text-[#2F80FF]"
  },
  {
    id: '02',
    title: "Fleet Operations",
    desc: "Reduce downtime and improve fleet productivity with automated recovery.",
    icon: Truck,
    image: '/assets/3d/fleet_3d.png',
    specs: { perf: "99.1%", label: "FLEET UPTIME IMPACT" },
    details: "Mission-critical dispatch for commercial fleets, ranging from regional delivery to long-haul logistics.",
    accent: "text-[#FF7A1A]"
  },
  {
    id: '03',
    title: "Rental Mobility",
    desc: "Keep rental vehicles on the road and customers satisfied nationwide.",
    icon: Car,
    image: '/assets/3d/rental_3d.png',
    specs: { perf: "97.8%", label: "CUSTOMER SATISFACTION" },
    details: "Rapid roadside response for rental car customers, integrated directly with rental management systems.",
    accent: "text-emerald-400"
  },
  {
    id: '04',
    title: "OEM Connected",
    desc: "Integrated roadside assistance for modern software-defined vehicles.",
    icon: Cpu,
    image: '/assets/3d/oem_3d.png',
    specs: { perf: "100+", label: "OEM INTEGRATIONS" },
    details: "API-first integration with vehicle head units and mobile apps for seamless owner assistance.",
    accent: "text-purple-400"
  },
  {
    id: '05',
    title: "Dispatch Platforms",
    desc: "API-first infrastructure built for extreme scale and operational reliability.",
    icon: LayoutGrid,
    image: '/assets/3d/dispatch_3d.png',
    specs: { perf: "99.99%", label: "PLATFORM UPTIME" },
    details: "White-label dispatch technology for enterprise platforms requiring high-performance roadside fulfillment.",
    accent: "text-brand-blue"
  }
];

export const EcosystemSection = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-32 bg-brand-bg relative overflow-hidden border-t border-brand-border">
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #94A3B8 1px, transparent 0)`, backgroundSize: '64px 64px' }} />
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#2F80FF]/5 blur-[150px] rounded-full -ml-96 -mt-96 pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-24">
           <motion.div
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex items-center gap-2 mb-4"
           >
              <Badge className="bg-[#2F80FF]/10 text-[#2F80FF] border-[#2F80FF]/20 text-[10px] uppercase font-black tracking-[0.4em] px-6 py-1.5">
                Vertical Solutions
              </Badge>
           </motion.div>
           <h2 className="text-4xl lg:text-7xl font-black text-foreground dark:text-white tracking-tighter leading-tight mb-8">
              Powering the <span className="text-[#2F80FF]">Mobility Ecosystem</span>
           </h2>
           <p className="text-brand-slate font-medium text-lg max-w-2xl leading-relaxed">
              Nationwide roadside infrastructure engineered for the most demanding enterprise mobility sectors.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
           {ecosystems.map((item, i) => (
             <div
               key={item.id}
               className={`relative h-[380px] transition-all duration-300 ${hoveredId === item.id ? 'z-[100]' : 'z-10'}`}
               onMouseEnter={() => setHoveredId(item.id)}
               onMouseLeave={() => setHoveredId(null)}
             >
                <AnimatePresence>
                   {hoveredId !== item.id ? (
                      <motion.div
                        key="stable"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                        className="absolute inset-0 cursor-pointer"
                      >
                         <GlassPanel className="h-full p-6 border-brand-border bg-card/40 backdrop-blur-xl rounded-[2rem] flex flex-col overflow-hidden group">
                            <div className="flex justify-between items-start mb-6">
                               <div>
                                  <p className="text-[9px] font-black text-brand-slate uppercase tracking-widest mb-1 opacity-60">
                                     Sector {item.id}
                                  </p>
                                  <h3 className="text-sm font-black text-foreground dark:text-white group-hover:text-[#2F80FF] transition-colors leading-tight">
                                     {item.title}
                                  </h3>
                                </div>
                                <div className="h-7 w-7 rounded-lg bg-card border border-brand-border flex items-center justify-center text-brand-slate">
                                   <Maximize2 className="h-3 w-3" />
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-4 mb-auto">
                               <div className="relative h-28 w-28 bg-brand-bg/50 rounded-2xl border border-brand-border flex items-center justify-center overflow-hidden">
                                  <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-20 h-20 object-contain relative z-10 transform group-hover:scale-110 transition-transform duration-500" 
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-br from-[#2F80FF]/5 to-transparent" />
                               </div>
                               <div className="text-center px-2">
                                  <p className="text-[10px] text-brand-slate font-medium leading-relaxed line-clamp-2">
                                     {item.desc}
                                  </p>
                               </div>
                            </div>

                            <div className="mt-auto pt-4 border-t border-brand-border/50">
                               <p className="text-[8px] font-black text-brand-slate uppercase tracking-widest mb-1">{item.specs.label}</p>
                               <p className="text-xl font-black text-foreground dark:text-white tracking-tighter">{item.specs.perf}</p>
                            </div>
                         </GlassPanel>
                      </motion.div>
                   ) : (
                      <motion.div
                        key="hover"
                        initial={{ opacity: 0, scale: 0.98, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98, y: 20 }}
                        transition={{ 
                           type: 'spring', 
                           damping: 30, 
                           stiffness: 80,
                           mass: 1.2
                        }}
                        className="absolute inset-0 z-50 pointer-events-none"
                      >
                         <GlassPanel className="min-h-[480px] h-auto w-full md:w-[110%] md:-left-[5%] -top-10 md:-top-20 p-6 border-[#2F80FF]/40 bg-card/90 backdrop-blur-[60px] rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.7),0_0_60px_rgba(47,128,255,0.2)] flex flex-col overflow-visible pointer-events-auto">
                            <div className="flex items-center justify-between mb-6">
                               <Badge className="bg-[#2F80FF]/20 text-[#2F80FF] border-[#2F80FF]/30 text-[9px] uppercase font-black py-1 px-4">
                                  Enterprise Solution Node
                               </Badge>
                               <div className="flex gap-1">
                                  {[1,2,3].map(i => <div key={i} className="h-1 w-3 rounded-full bg-[#2F80FF]" />)}
                               </div>
                            </div>

                            <div className="mb-4">
                               <h4 className="text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.3em] mb-1">Market Segment</h4>
                               <h2 className="text-2xl font-black text-foreground dark:text-white tracking-tighter">
                                  {item.title}
                               </h2>
                            </div>

                            <div className="relative h-32 w-full mb-6 flex items-center justify-center">
                               <div className="absolute inset-0 bg-[#2F80FF]/10 rounded-full blur-3xl animate-pulse" />
                               <motion.img 
                                 initial={{ scale: 0.8, rotate: -5 }}
                                 animate={{ scale: 1, rotate: 0 }}
                                 src={item.image} 
                                 alt={item.title}
                                 className="w-28 h-28 object-contain relative z-10 drop-shadow-[0_20px_40px_rgba(47,128,255,0.3)]"
                               />
                            </div>

                            <div className="space-y-4 mt-auto">
                               <div className="grid grid-cols-2 gap-4">
                                  <div className="space-y-1">
                                     <p className="text-[8px] font-black text-brand-slate uppercase tracking-widest opacity-60 flex items-center gap-2">
                                        <Activity className="h-3 w-3 text-[#2F80FF]" /> {item.specs.label.split(' ')[0]}
                                     </p>
                                     <p className="text-base font-black text-foreground dark:text-white">{item.specs.perf}</p>
                                  </div>
                                  <div className="space-y-1">
                                     <p className="text-[8px] font-black text-brand-slate uppercase tracking-widest opacity-60 flex items-center gap-2">
                                        <Shield className="h-3 w-3 text-[#2F80FF]" /> UPTIME
                                     </p>
                                     <p className="text-base font-black text-foreground dark:text-white">99.9%</p>
                                  </div>
                               </div>

                               <div className="p-4 bg-brand-bg/40 rounded-2xl border border-brand-border">
                                  <div className="flex items-start gap-3">
                                      <div className="h-7 w-7 rounded-lg bg-[#2F80FF]/10 flex items-center justify-center text-[#2F80FF] shrink-0">
                                         <Info className="h-3 w-3" />
                                       </div>
                                       <p className="text-[11px] text-brand-slate font-medium leading-relaxed">
                                          {item.details}
                                       </p>
                                  </div>
                               </div>

                               <div className="h-12 w-full rounded-2xl bg-[#2F80FF] flex items-center justify-center text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-brand-blue/20 group/btn overflow-hidden relative cursor-pointer">
                                  <span className="relative z-10 flex items-center">
                                    Analyze Segment <Zap className="ml-2 h-3 w-3 fill-white group-hover/btn:scale-125 transition-transform" />
                                  </span>
                                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                               </div>
                            </div>

                            <div className="absolute top-[-30px] right-[-10px] text-[8rem] font-black text-brand-blue/5 pointer-events-none select-none -z-10">
                               {item.id}
                            </div>
                         </GlassPanel>
                      </motion.div>
                   )}
                </AnimatePresence>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
