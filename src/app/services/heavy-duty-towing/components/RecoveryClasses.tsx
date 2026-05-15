'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Zap, Activity, Info, Maximize2 } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Badge } from '@/components/ui/badge';

const recoveryClasses = [
  { 
    id: 'CLASS 5', 
    range: '16,001–19,500 lbs', 
    category: 'Heavy Duty', 
    type: 'Bucket Trucks, Large Box', 
    image: '/assets/3d/class5.png',
    details: 'Bucket trucks, utility service fleets, and vocational vehicles.',
    specs: { response: '32m', sla: '96%' }
  },
  { 
    id: 'CLASS 6', 
    range: '19,501–26,000 lbs', 
    category: 'Heavy Duty', 
    type: 'School Buses, Rack Trucks', 
    image: '/assets/3d/class6.png',
    details: 'School buses, single-axle tractors, and regional delivery.',
    specs: { response: '38m', sla: '96%' }
  },
  { 
    id: 'CLASS 7', 
    range: '26,001–33,000 lbs', 
    category: 'Super Heavy Duty', 
    type: 'City Transit, Refuse', 
    image: '/assets/3d/class7.png',
    details: 'Multi-axle commercial trucks and city transit buses.',
    specs: { response: '42m', sla: '95%' }
  },
  { 
    id: 'CLASS 8', 
    range: '33,001 lbs or above', 
    category: 'Super Heavy Duty', 
    type: 'Semi-Trucks, Cement', 
    image: '/assets/3d/class8.png',
    details: 'Tractor-trailers, cement mixers, and rotator recovery.',
    specs: { response: '48m', sla: '95%' }
  }
];

export const RecoveryClasses = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-32 bg-brand-bg relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #94A3B8 1px, transparent 0)`, backgroundSize: '64px 64px' }} />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/5 blur-[150px] rounded-full -mr-96 -mt-96 pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-24">
           <motion.div
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex items-center gap-2 mb-4"
           >
              <Badge className="bg-brand-blue/10 text-brand-blue border-brand-blue/20 text-[10px] uppercase font-black tracking-[0.4em] px-6 py-1.5">
                Capability Matrix
              </Badge>
           </motion.div>
           <h2 className="text-4xl lg:text-7xl font-black text-foreground dark:text-white tracking-tighter leading-tight mb-8">
              Heavy-Duty <span className="text-brand-blue">Class Support</span>
           </h2>
           <p className="text-brand-slate font-medium text-lg max-w-2xl leading-relaxed">
              Nationwide recovery capabilities engineered specifically for heavy and super heavy-duty commercial operations.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {recoveryClasses.map((item, i) => (
             <div
               key={item.id}
               className={`relative h-[400px] transition-all duration-300 ${hoveredId === item.id ? 'z-[100]' : 'z-10'}`}
               onMouseEnter={() => setHoveredId(item.id)}
               onMouseLeave={() => setHoveredId(null)}
             >
                <AnimatePresence>
                   {hoveredId !== item.id ? (
                      /* Stable Card State */
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
                                     Support Node {item.id.split(' ')[1]}
                                  </p>
                                  <h3 className="text-xl font-black text-foreground dark:text-white group-hover:text-brand-blue transition-colors">
                                     {item.category}
                                  </h3>
                               </div>
                               <div className="h-8 w-8 rounded-lg bg-card border border-brand-border flex items-center justify-center text-brand-slate">
                                  <Maximize2 className="h-3 w-3" />
                               </div>
                            </div>

                            <div className="flex flex-col items-center gap-4 mb-auto">
                               <div className="relative h-36 w-36 bg-brand-bg/50 rounded-2xl border border-brand-border flex items-center justify-center overflow-hidden">
                                  <img 
                                    src={item.image} 
                                    alt={item.id} 
                                    className="w-24 h-24 object-contain relative z-10 transform group-hover:scale-110 transition-transform duration-500" 
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent" />
                               </div>
                               <div className="text-center">
                                  <p className="text-2xl font-black text-foreground dark:text-white tracking-tighter mb-1">{item.range}</p>
                                  <p className="text-[10px] font-black text-brand-blue uppercase tracking-widest">{item.type}</p>
                               </div>
                            </div>
                         </GlassPanel>
                      </motion.div>
                   ) : (
                      /* Hover Detailed State (Glassmorphism Expansion) */
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
                         <GlassPanel className="min-h-[520px] md:min-h-[650px] h-auto w-full md:w-[105%] md:-left-[2.5%] -top-10 md:-top-40 p-5 md:p-8 border-brand-blue/40 bg-card/80 backdrop-blur-[60px] rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.7),0_0_60px_rgba(47,128,255,0.2)] flex flex-col overflow-visible pointer-events-auto">
                            {/* Operational Status Badge */}
                            <div className="flex items-center justify-between mb-6 md:mb-8">
                               <Badge className="bg-brand-blue/20 text-brand-blue border-brand-blue/30 text-[8px] md:text-[9px] uppercase font-black py-0.5 md:py-1 px-3 md:px-4">
                                  Operational Status: Verified
                               </Badge>
                               <div className="hidden sm:flex gap-1">
                                  {[1,2,3,4,5].map(i => <div key={i} className="h-1 w-4 rounded-full bg-brand-blue" />)}
                               </div>
                            </div>

                            <div className="mb-4 md:mb-6">
                               <h4 className="text-[9px] md:text-[10px] font-black text-brand-blue uppercase tracking-[0.3em] mb-1 md:mb-2">Class Identification</h4>
                               <h2 className="text-3xl md:text-4xl font-black text-foreground dark:text-white tracking-tighter">
                                  {item.id}
                               </h2>
                               <p className="text-xs md:text-sm font-medium text-brand-slate tracking-tight opacity-70">{item.category} Configuration</p>
                            </div>

                            <div className="relative h-32 md:h-44 w-full mb-6 md:mb-8 flex items-center justify-center">
                               <div className="absolute inset-0 bg-brand-blue/10 rounded-full blur-3xl animate-pulse" />
                               <motion.img 
                                 initial={{ scale: 0.8, rotate: -10 }}
                                 animate={{ scale: 1, rotate: 0 }}
                                 src={item.image} 
                                 alt={item.id}
                                 className="w-32 h-32 md:w-48 md:h-48 object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(47,128,255,0.3)]"
                               />
                            </div>

                            <div className="space-y-4 md:space-y-6 mt-auto">
                               <div className="grid grid-cols-2 gap-4 md:gap-6">
                                  <div className="space-y-1">
                                     <p className="text-[8px] md:text-[9px] font-black text-brand-slate uppercase tracking-widest opacity-60 flex items-center gap-2">
                                        <Activity className="h-3 w-3 text-brand-blue" /> ETA
                                     </p>
                                     <p className="text-lg md:text-xl font-black text-foreground dark:text-white">{item.specs.response}</p>
                                  </div>
                                  <div className="space-y-1">
                                     <p className="text-[8px] md:text-[9px] font-black text-brand-slate uppercase tracking-widest opacity-60 flex items-center gap-2">
                                        <Shield className="h-3 w-3 text-brand-blue" /> SLA
                                     </p>
                                     <p className="text-lg md:text-xl font-black text-foreground dark:text-white">{item.specs.sla}</p>
                                  </div>
                               </div>

                               <div className="p-4 md:p-5 bg-brand-bg/40 rounded-2xl border border-brand-border">
                                  <div className="flex items-start gap-3 md:gap-4">
                                     <div className="h-7 w-7 md:h-8 md:w-8 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                                        <Info className="h-3 w-3 md:h-4 md:w-4" />
                                      </div>
                                      <p className="text-[11px] md:text-[12px] text-brand-slate font-medium leading-relaxed">
                                         {item.details}
                                      </p>
                                  </div>
                               </div>

                               <div className="h-12 md:h-14 w-full rounded-2xl bg-brand-blue flex items-center justify-center text-white text-[10px] md:text-[11px] font-black uppercase tracking-widest shadow-lg shadow-brand-blue/20 group/btn overflow-hidden relative">
                                  <span className="relative z-10 flex items-center">
                                    Request Recovery <Zap className="ml-2 h-3 w-3 md:h-4 md:w-4 fill-white group-hover/btn:scale-125 transition-transform" />
                                  </span>
                                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                               </div>
                            </div>

                            {/* Large background number */}
                            <div className="absolute top-[-40px] right-[-20px] text-[10rem] font-black text-brand-blue/5 pointer-events-none select-none -z-10">
                               {item.id.split(' ')[1]}
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
