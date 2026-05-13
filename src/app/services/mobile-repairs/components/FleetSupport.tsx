'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, ShieldCheck, BarChart3, Map, 
  Settings, Clock, Activity, AlertTriangle 
} from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const FleetSupport = () => {
  return (
    <section className="py-32 relative z-10 bg-brand-bg/50 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           
           {/* Left Side: Fleet Dashboard Illustration */}
           <div className="relative">
              <div className="absolute -inset-10 bg-brand-blue/5 blur-[100px] rounded-full" />
              
              <GlassPanel className="p-8 border-white/10 bg-[#081120] relative overflow-hidden">
                 <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
                    <div className="flex items-center gap-3">
                       <Truck className="h-5 w-5 text-brand-blue" />
                       <span className="text-xs font-black text-white uppercase tracking-widest">Fleet Operations Control</span>
                    </div>
                    <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-[8px] uppercase font-black">All Units Connected</Badge>
                 </div>

                 <div className="space-y-6">
                    {[
                      { label: 'Fleet Downtime Reduction', val: '24.2%', trend: '↑ 3.1%', color: 'text-brand-blue' },
                      { label: 'Avg. Repair Completion', val: '42m', trend: '↓ 5m', color: 'text-brand-orange' },
                      { label: 'SLA Compliance Rate', val: '99.1%', trend: '↑ 0.4%', color: 'text-purple-400' }
                    ].map((stat, i) => (
                      <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 relative overflow-hidden group">
                         <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-blue/20" />
                         <div className="flex justify-between items-end">
                            <div>
                               <p className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest mb-2">{stat.label}</p>
                               <p className="text-3xl font-black text-white">{stat.val}</p>
                            </div>
                            <span className="text-[10px] font-bold text-emerald-400 mb-1">{stat.trend}</span>
                         </div>
                         <div className="mt-4 h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                               initial={{ width: 0 }}
                               whileInView={{ width: '80%' }}
                               transition={{ delay: 0.5, duration: 1 }}
                               className="h-full bg-brand-blue" 
                            />
                         </div>
                      </div>
                    ))}
                 </div>

                 {/* Floating Alert Overlay */}
                 <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute bottom-10 right-10 p-6 bg-brand-navy border border-brand-orange/30 rounded-2xl shadow-2xl w-64"
                 >
                    <div className="flex items-center gap-2 text-brand-orange mb-3">
                       <AlertTriangle className="h-3 w-3" />
                       <span className="text-[9px] font-black uppercase tracking-widest">Predictive Alert</span>
                    </div>
                    <p className="text-[11px] text-white font-bold mb-2">Unit FL-882: Potential Cooling Failure</p>
                    <p className="text-[9px] text-[#94A3B8] leading-relaxed">Scheduled preventive technician dispatch for nearest terminal stop.</p>
                 </motion.div>
              </GlassPanel>
           </div>

           {/* Right Side: Content */}
           <div className="space-y-10">
              <div>
                 <p className="text-[10px] font-black text-brand-blue uppercase tracking-[0.4em] mb-4">Commercial Mobility</p>
                 <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-8">
                    Enterprise Fleet <br />Repair Infrastructure
                 </h2>
                 <p className="text-lg text-[#94A3B8] leading-relaxed font-medium max-w-xl">
                    Connect your entire commercial fleet to a unified mobile repair network. Reduce downtime with predictive field service intelligence and automated dispatch coordination.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {[
                   { title: 'Downtime Reduction', desc: 'Active monitoring and rapid field response to keep assets moving.', icon: Clock },
                   { title: 'SLA Compliance', desc: 'Guaranteed response times across our nationwide technician network.', icon: ShieldCheck },
                   { title: 'Regional Heatmaps', desc: 'Visualize service density and technician availability in real-time.', icon: Map },
                   { title: 'Automated Dispatch', desc: 'Trigger repairs programmatically based on vehicle telemetry.', icon: Settings }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4 group">
                      <div className="h-10 w-10 shrink-0 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:border-brand-blue/30 transition-all">
                         <item.icon className="h-4 w-4 text-brand-blue" />
                      </div>
                      <div>
                         <h4 className="text-sm font-black text-white uppercase tracking-widest mb-1.5">{item.title}</h4>
                         <p className="text-[11px] text-[#94A3B8] leading-relaxed font-medium">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-6">
                 <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold h-14 px-8 rounded-xl shadow-xl">
                    Request Fleet Capability Report
                 </Button>
                 <Button variant="outline" size="lg" className="border-white/10 text-white hover:bg-white/5 h-14 px-8 rounded-xl font-bold uppercase tracking-widest text-[11px]">
                    Industry Use Cases
                 </Button>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};
