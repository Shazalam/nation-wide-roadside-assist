'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, Box, Shield, Car, Factory, Building2, Map, Flame, Maximize2, Activity, Info, Zap } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Badge } from '@/components/ui/badge';

const industries = [
  { 
    id: '01',
    title: 'Commercial Trucking', 
    icon: Truck, 
    image: '/assets/3d/cement_truck.png',
    bgImage: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800',
    category: 'Logistics',
    desc: 'Downtime reduction and specialized Cement Truck & Class 8 recovery optimization for national carriers.',
    specs: { response: '28m', sla: '99%' }
  },
  { 
    id: '02',
    title: 'Logistics Fleets', 
    icon: Box, 
    image: '/assets/3d/cargo_truck.png',
    bgImage: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800',
    category: 'Distribution',
    desc: 'Incident response acceleration for time-sensitive Cargo Trucks and last-mile delivery networks.',
    specs: { response: '32m', sla: '98%' }
  },
  { 
    id: '03',
    title: 'Insurance Ops', 
    icon: Shield, 
    image: '/assets/3d/insurance_shield.png',
    bgImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800',
    category: 'Enterprise',
    desc: 'API-integrated recovery coordination efficiency and claims support for top-tier providers.',
    specs: { response: 'API-Sync', sla: '100%' }
  },
  { 
    id: '04',
    title: 'Enterprise Mobility', 
    icon: Car, 
    image: '/assets/3d/luxury_suv.png',
    bgImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
    category: 'Shared Assets',
    desc: 'Nationwide roadside infrastructure for rental, ride-share, and managed vehicle fleets.',
    specs: { response: '18m', sla: '99%' }
  },
  { 
    id: '05',
    title: 'OEM Platforms', 
    icon: Factory, 
    image: '/assets/3d/oem_platform.png',
    bgImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    category: 'Automotive',
    desc: 'Embedded operational visibility and brand-compliant recovery for automotive manufacturers.',
    specs: { response: 'Client-Led', sla: 'Active' }
  },
  { 
    id: '06',
    title: 'Government Assets', 
    icon: Building2, 
    image: '/assets/3d/govt_truck.png',
    bgImage: 'https://images.unsplash.com/photo-1589330694653-9993202e0c9e?auto=format&fit=crop&q=80&w=800',
    category: 'Public Sector',
    desc: 'Secure, compliant heavy-duty recovery for Army Trucks, municipal, and defense fleets.',
    specs: { response: 'Priority', sla: '99.9%' }
  },
  { 
    id: '07',
    title: 'Fleet Management', 
    icon: Map, 
    image: '/assets/3d/fleet_dashboard.png',
    bgImage: 'https://images.unsplash.com/photo-1551288049-bbbda536ad0a?auto=format&fit=crop&q=80&w=800',
    category: 'Managed Services',
    desc: 'Centralized recovery coordination for large-scale FMC portfolios and logistics hubs.',
    specs: { response: '24m', sla: '97%' }
  },
  { 
    id: '08',
    title: 'Emergency Response', 
    icon: Flame, 
    image: '/assets/3d/emergency_beacon.png',
    bgImage: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800',
    category: 'Critical Infrastructure',
    desc: 'Rapid deployment infrastructure for critical hazard zones and multi-agency coordination.',
    specs: { response: 'Immediate', sla: 'Active' }
  }
];

export const IndustriesServed = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-40 bg-brand-bg relative z-10 border-t border-brand-border overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #94A3B8 1px, transparent 0)`, backgroundSize: '64px 64px' }} />
      
      <div className="container mx-auto px-6 max-w-[1600px]">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-24">
           <motion.div
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex items-center gap-2 mb-4"
           >
              <Badge className="bg-brand-blue/10 text-brand-blue border-brand-blue/20 text-[10px] uppercase font-black tracking-[0.4em] px-6 py-1.5">
                Market Verticals
              </Badge>
           </motion.div>
           <h2 className="text-4xl lg:text-7xl font-black text-foreground dark:text-white tracking-tighter leading-tight">
              Enterprise <span className="text-brand-blue">Industries</span>
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {industries.map((item, i) => (
             <div
               key={item.id}
               className={`relative h-[400px] transition-all duration-300 ${hoveredId === item.id ? 'z-[100]' : 'z-10'}`}
               onMouseEnter={() => setHoveredId(item.id)}
               onMouseLeave={() => setHoveredId(null)}
             >
                <AnimatePresence mode="wait">
                   {hoveredId !== item.id ? (
                      /* Stable Card State */
                      <motion.div
                        key="stable"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                        className="absolute inset-0 cursor-pointer"
                      >
                         <GlassPanel className="h-full p-8 border-brand-border bg-card/40 backdrop-blur-xl rounded-[2.5rem] flex flex-col overflow-hidden group">
                            <div className="flex justify-between items-start mb-6">
                               <div>
                                  <p className="text-[9px] font-black text-brand-slate uppercase tracking-widest mb-1 opacity-60">
                                     Sector {item.id}
                                  </p>
                                  <h3 className="text-xl font-black text-foreground dark:text-white group-hover:text-brand-blue transition-colors">
                                     {item.title}
                                  </h3>
                               </div>
                               <div className="h-8 w-8 rounded-lg bg-card border border-brand-border flex items-center justify-center text-brand-slate">
                                  <Maximize2 className="h-3 w-3" />
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-6 mb-auto">
                               <div className="relative h-40 w-40 bg-brand-bg/50 rounded-3xl border border-brand-border flex items-center justify-center overflow-hidden">
                                  <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-28 h-28 object-contain relative z-10 transform group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]" 
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent" />
                               </div>
                               <div className="text-center">
                                  <p className="text-[10px] font-black text-brand-blue uppercase tracking-[0.2em]">{item.category}</p>
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
                         <GlassPanel className="min-h-[550px] w-full md:w-[105%] md:-left-[2.5%] -top-10 md:-top-40 p-8 border-brand-blue/40 bg-card/85 backdrop-blur-[60px] rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.7),0_0_60px_rgba(47,128,255,0.2)] flex flex-col overflow-hidden pointer-events-auto relative">
                            {/* Background Image Ghost */}
                            <div className="absolute inset-0 bg-cover bg-center opacity-[0.08] mix-blend-luminosity pointer-events-none" 
                                 style={{ backgroundImage: `url(${item.bgImage})` }} />
                            <div className="absolute inset-0 bg-gradient-to-b from-card/90 via-transparent to-card/90 pointer-events-none" />
                            
                            {/* Operational Status Badge */}
                            <div className="flex items-center justify-between mb-8 relative z-10">
                               <Badge className="bg-brand-blue/20 text-brand-blue border-brand-blue/30 text-[9px] uppercase font-black py-1 px-4">
                                  Network Status: Verified
                               </Badge>
                               <div className="flex gap-1">
                                  {[1,2,3,4,5].map(i => <div key={i} className="h-1 w-4 rounded-full bg-brand-blue" />)}
                               </div>
                            </div>

                            <div className="mb-6 relative z-10">
                               <h4 className="text-[10px] font-black text-brand-blue uppercase tracking-[0.3em] mb-2">Market Segment</h4>
                               <h2 className="text-3xl font-black text-foreground dark:text-white tracking-tighter">
                                  {item.title}
                               </h2>
                               <p className="text-sm font-medium text-brand-slate tracking-tight opacity-70">{item.category} Configuration</p>
                            </div>

                            <div className="relative h-44 w-full mb-8 flex items-center justify-center z-10">
                               <div className="absolute inset-0 bg-brand-blue/10 rounded-full blur-3xl animate-pulse" />
                               <motion.img 
                                 initial={{ scale: 0.8, rotate: -10 }}
                                 animate={{ scale: 1, rotate: 0 }}
                                 src={item.image} 
                                 alt={item.title}
                                 className="w-48 h-48 object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(47,128,255,0.5)]"
                               />
                            </div>

                            <div className="space-y-6 mt-auto relative z-10">
                               <div className="grid grid-cols-2 gap-6">
                                  <div className="space-y-1">
                                     <p className="text-[9px] font-black text-brand-slate uppercase tracking-widest opacity-60 flex items-center gap-2">
                                        <Activity className="h-3 w-3 text-brand-blue" /> RESPONSE
                                     </p>
                                     <p className="text-xl font-black text-foreground dark:text-white">{item.specs.response}</p>
                                  </div>
                                  <div className="space-y-1">
                                     <p className="text-[9px] font-black text-brand-slate uppercase tracking-widest opacity-60 flex items-center gap-2">
                                        <Shield className="h-3 w-3 text-brand-blue" /> UPTIME
                                     </p>
                                     <p className="text-xl font-black text-foreground dark:text-white">{item.specs.sla}</p>
                                  </div>
                               </div>

                               <div className="p-5 bg-brand-bg/60 rounded-2xl border border-brand-border backdrop-blur-md">
                                  <div className="flex items-start gap-4">
                                     <div className="h-8 w-8 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                                        <Info className="h-4 w-4" />
                                      </div>
                                      <p className="text-[12px] text-brand-slate font-medium leading-relaxed">
                                         {item.desc}
                                      </p>
                                  </div>
                               </div>

                               <div className="h-14 w-full rounded-2xl bg-brand-blue flex items-center justify-center text-white text-[11px] font-black uppercase tracking-widest shadow-lg shadow-brand-blue/20 group/btn overflow-hidden relative">
                                  <span className="relative z-10 flex items-center">
                                    Analyze Segment <Zap className="ml-2 h-4 w-4 fill-white group-hover/btn:scale-125 transition-transform" />
                                  </span>
                                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                               </div>
                            </div>

                            {/* Large background number */}
                            <div className="absolute top-[-40px] right-[-20px] text-[10rem] font-black text-brand-blue/5 pointer-events-none select-none z-0">
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
