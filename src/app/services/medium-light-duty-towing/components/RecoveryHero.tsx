'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Clock, ArrowRight, Activity, MapPin, Search, Star, Truck, Users, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlassPanel } from '@/components/ui/glass-panel';
import { useRecoveryStats } from '../hooks/use-recovery-stats';
import { Badge } from '@/components/ui/badge';

export const RecoveryHero = () => {
  const { stats } = useRecoveryStats();

  return (
    <section className="relative pt-24 pb-12 lg:pt-28 lg:pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden bg-brand-bg min-h-[90vh] lg:min-h-screen flex items-center">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[#2F80FF]/10 blur-[180px] rounded-full -mr-96 -mt-96 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#FF7A1A]/5 blur-[150px] rounded-full -ml-48 -mb-48 pointer-events-none" />

      <div className="max-w-[1536px] mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="lg:col-span-5 space-y-8 flex flex-col">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-xs font-medium text-brand-slate mb-2"
            >
              <span className="hover:text-foreground dark:text-white transition-colors cursor-pointer">Services</span>
              <ArrowRight className="h-3 w-3 text-[#2F80FF]" />
              <span className="text-[#2F80FF]">Medium & Light Duty Towing</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-[3.5rem] xl:text-[4rem] font-bold tracking-tight text-foreground dark:text-white leading-[1.05] mb-2"
            >
              Nationwide <br />
              <span className="bg-gradient-to-r from-[#2F80FF] via-[#FF7A1A] to-[#2F80FF] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-flow">
                Medium & Light
              </span>
              <br />
              <span className="text-foreground dark:text-white italic font-medium opacity-90">Duty Operations</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base lg:text-lg text-brand-slate leading-relaxed max-w-lg font-medium"
            >
              Intelligent roadside assistance, light-duty recovery coordination, and enterprise dispatch infrastructure engineered for consumer fleets and insurance providers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-foreground dark:text-white font-bold h-14 px-8 rounded-xl shadow-[0_0_20px_rgba(47,128,255,0.3)] group">
                Request Assistance <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-brand-border text-foreground dark:text-white hover:bg-white/5 h-14 px-8 rounded-xl group backdrop-blur-sm">
                Enterprise Solutions <span className="ml-2 opacity-30 group-hover:opacity-100 font-mono">/&gt;</span>
              </Button>
            </motion.div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6">
              {[
                { label: 'Avg Response', val: '22 min', icon: Zap, color: 'text-[#2F80FF]' },
                { label: 'Active Units', val: '4,800+', icon: Truck, color: 'text-[#FF7A1A]' },
                { label: 'SLA Status', val: '98.4%', icon: Shield, color: 'text-emerald-400' },
                { label: 'Coverage', val: 'National', icon: Globe, color: 'text-purple-400' }
              ].map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="bg-card/60 backdrop-blur-md border border-brand-border rounded-xl p-3.5 hover:border-[#2F80FF]/40 transition-colors group"
                >
                  <m.icon className={`h-4 w-4 ${m.color} mb-2 group-hover:scale-110 transition-transform`} />
                  <p className="text-lg font-bold text-foreground dark:text-white tracking-tight">{m.val}</p>
                  <p className="text-[9px] font-bold text-brand-slate uppercase tracking-widest mt-1">{m.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Command Dashboard */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <GlassPanel className="p-0 border-brand-border bg-card/90 shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden">
                {/* Header */}
                <div className="px-8 py-5 border-b border-brand-border bg-white/[0.02] flex items-center justify-between">
                   <div className="flex items-center gap-4">
                      <div className="flex flex-col">
                         <span className="text-[10px] font-black text-foreground dark:text-white uppercase tracking-widest">Live Dispatch Intelligence</span>
                         <div className="flex items-center gap-2 mt-0.5">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest">All Regions Active</span>
                         </div>
                      </div>
                   </div>
                   <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-brand-border rounded-lg text-[9px] font-bold text-brand-slate uppercase tracking-widest">
                      Real-time Feed
                   </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-12 h-[550px]">
                   {/* Main Visualization Area */}
                   <div className="xl:col-span-8 relative bg-brand-bg/50 overflow-hidden border-r border-brand-border">
                      {/* Truck Image with Blur Transition */}
                      <div className="absolute inset-0 z-0">
                        <img 
                          src="https://images.unsplash.com/photo-1591768793355-74d7c80efdec?auto=format&fit=crop&q=80&w=1200" 
                          alt="Medium Duty Tow Truck"
                          className="w-full h-full object-cover opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#081120] via-transparent to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#081120] via-transparent to-[#081120]/50" />
                      </div>
                      
                      {/* Telemetry Overlay */}
                      <div className="absolute inset-0 z-10 pointer-events-none opacity-20" style={{ backgroundImage: 'linear-gradient(#2F80FF1A 1px, transparent 1px), linear-gradient(90deg, #2F80FF1A 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                      
                      {/* Animated Incident Points */}
                      {[
                        { x: 40, y: 35, id: 'RSA-128', label: 'Battery Jump' },
                        { x: 75, y: 55, id: 'RSA-442', label: 'Tire Service' },
                        { x: 25, y: 70, id: 'RSA-901', label: 'Light Tow' }
                      ].map((p, i) => (
                        <div key={i} className="absolute z-20" style={{ left: `${p.x}%`, top: `${p.y}%` }}>
                           <motion.div
                             animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                             transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                             className="h-3 w-3 bg-[#2F80FF] rounded-full shadow-[0_0_15px_#2F80FF]"
                           />
                           <div className="absolute left-5 -top-1 w-24">
                              <p className="text-[9px] font-black text-foreground dark:text-white leading-none">{p.id}</p>
                              <p className="text-[7px] font-bold text-[#2F80FF] uppercase tracking-widest mt-0.5">{p.label}</p>
                           </div>
                        </div>
                      ))}
                   </div>

                   {/* Stats Sidebar */}
                   <div className="xl:col-span-4 p-6 space-y-6 flex flex-col justify-between">
                      <div className="space-y-6">
                        {[
                          { label: 'Pending Dispatches', val: '1,247', color: 'text-[#2F80FF]' },
                          { label: 'Assistance Active', val: '864', color: 'text-[#FF7A1A]' },
                          { label: 'Completed Today', val: '3,281', color: 'text-emerald-400' }
                        ].map((item, i) => (
                          <div key={i} className="space-y-2">
                             <span className="text-[9px] font-bold text-brand-slate uppercase tracking-widest">{item.label}</span>
                             <div className="flex items-end gap-3">
                                <span className="text-2xl font-black text-foreground dark:text-white">{item.val}</span>
                                <span className={`text-[10px] font-bold ${item.color}`}>+12%</span>
                             </div>
                             <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                <motion.div initial={{ width: 0 }} animate={{ width: '65%' }} className={`h-full ${item.color.replace('text-', 'bg-')}`} />
                             </div>
                          </div>
                        ))}
                      </div>

                      <div className="bg-white/5 rounded-xl p-4 border border-brand-border">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[9px] font-black text-foreground dark:text-white uppercase tracking-widest">Fleet Load</span>
                          <span className="text-[10px] font-bold text-emerald-400">Optimal</span>
                        </div>
                        <div className="flex items-center gap-1.5 h-16">
                           {[40, 60, 45, 80, 55, 70, 90, 65, 50, 75].map((h, i) => (
                             <motion.div 
                               key={i} 
                               initial={{ height: 0 }} 
                               animate={{ height: `${h}%` }} 
                               transition={{ delay: i * 0.05 }}
                               className="flex-1 bg-[#2F80FF]/30 rounded-t-sm"
                             />
                           ))}
                        </div>
                      </div>
                   </div>
                </div>
              </GlassPanel>

              {/* Floating Alert Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-10 bottom-1/4 z-30 hidden xl:block"
              >
                 <GlassPanel className="p-5 border-brand-border bg-card/95 shadow-2xl w-56">
                    <div className="flex justify-between items-center mb-4">
                       <Badge className="bg-[#FF7A1A]/10 border-[#FF7A1A]/30 text-[#FF7A1A] text-[8px] uppercase font-bold">New RSA Request</Badge>
                       <span className="text-[9px] font-mono text-brand-slate">Just now</span>
                    </div>
                    <p className="text-[10px] font-bold text-foreground dark:text-white mb-3">Tire Change Request <br /><span className="text-brand-slate font-medium">I-95 South, Exit 24</span></p>
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-[#2F80FF]/20 flex items-center justify-center">
                        <Zap className="h-4 w-4 text-[#2F80FF]" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[8px] font-bold text-brand-slate uppercase">Assigned Vendor</span>
                        <span className="text-[10px] font-black text-foreground dark:text-white">Rapid RSA Inc.</span>
                      </div>
                    </div>
                 </GlassPanel>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
