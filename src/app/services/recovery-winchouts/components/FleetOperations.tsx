'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Truck, ShieldCheck, BarChart3, Map, Settings, Clock, Activity, Target } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useDownloadPdf } from '@/hooks/use-download-pdf';

export const FleetOperations = () => {
  const { isGeneratingPdf, downloadPdf } = useDownloadPdf();
  return (
    <section className="py-32 bg-brand-bg/50 relative z-10 border-y border-brand-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           
           {/* Left: Illustration / Interactive Element */}
           <div className="relative">
              <div className="absolute -inset-10 bg-[#2F80FF]/5 blur-[100px] rounded-full" />
              <GlassPanel className="p-10 border-brand-border bg-brand-bg relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
                 <div className="flex items-center justify-between mb-10 pb-6 border-b border-brand-border">
                    <div className="flex items-center gap-3">
                       <div className="h-2 w-2 rounded-full bg-brand-orange animate-pulse" />
                       <span className="text-[11px] font-black text-foreground dark:text-white uppercase tracking-widest leading-none">Fleet Downtime Dashboard</span>
                    </div>
                    <Badge className="bg-[#2F80FF]/10 text-[#2F80FF] border-[#2F80FF]/20 text-[9px] uppercase font-black px-3 py-1">Logistics Active</Badge>
                 </div>

                 <div className="space-y-8">
                    {[
                      { label: 'Fleet Recovery Efficiency', val: '94.2%', trend: '↑ 3.1%', color: '#2F80FF' },
                      { label: 'Avg. Asset Downtime', val: '142m', trend: '↓ 12m', color: '#FF7A1A' },
                      { label: 'SLA Compliance Rate', val: '99.4%', trend: '↑ 0.5%', color: '#22c55e' }
                    ].map((stat, i) => (
                      <div key={i} className="space-y-3">
                         <div className="flex justify-between items-end">
                            <div>
                               <p className="text-[10px] font-bold text-brand-slate uppercase tracking-widest mb-1">{stat.label}</p>
                               <p className="text-3xl font-black text-foreground dark:text-white">{stat.val}</p>
                            </div>
                            <span className="text-[11px] font-black text-emerald-400 mb-1">{stat.trend}</span>
                         </div>
                         <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                               initial={{ width: 0 }}
                               whileInView={{ width: '85%' }}
                               transition={{ delay: 0.5 + (i * 0.1), duration: 1 }}
                               className="h-full" 
                               style={{ backgroundColor: stat.color }}
                            />
                         </div>
                      </div>
                    ))}
                 </div>

                 {/* Interactive Floating Element */}
                 <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute bottom-10 right-10 p-6 bg-brand-navy border border-brand-border rounded-2xl shadow-2xl w-64 z-20"
                 >
                    <div className="flex items-center gap-2 mb-3">
                       <Target className="h-3 w-3 text-[#2F80FF]" />
                       <span className="text-[10px] font-black text-foreground dark:text-white uppercase tracking-widest">Incident Alert</span>
                    </div>
                    <p className="text-[11px] text-brand-slate font-bold mb-3">Multi-Vehicle Incident Detected • Sector 42B</p>
                    <div className="flex -space-x-3 mb-4">
                       {[1,2,3].map(j => (
                         <div key={j} className="h-8 w-8 rounded-full border-2 border-brand-navy bg-white/5 flex items-center justify-center overflow-hidden">
                            <img src={`https://i.pravatar.cc/100?img=${j+20}`} alt="Tech" className="h-full w-full object-cover grayscale" />
                         </div>
                       ))}
                    </div>
                    <Button className="w-full h-10 bg-[#2F80FF] text-foreground dark:text-white font-black text-[9px] uppercase tracking-widest">
                       Initialize Recovery
                    </Button>
                 </motion.div>
              </GlassPanel>
           </div>

           {/* Right: Content */}
           <div className="space-y-12">
              <div>
                 <motion.div
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   className="px-4 py-1.5 rounded-full bg-[#2F80FF]/10 border border-[#2F80FF]/20 text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.3em] mb-8 inline-block"
                 >
                    Logistics & Infrastructure
                 </motion.div>
                 <h2 className="text-4xl lg:text-6xl font-black text-foreground dark:text-white tracking-tight leading-tight mb-8">
                    Fleet & Commercial <br />Operations
                 </h2>
                 <p className="text-xl text-brand-slate leading-relaxed font-medium max-w-xl">
                    Connect your entire commercial logistics fleet to a unified recovery network. Reduce asset downtime with predictive incident intelligence and automated heavy-duty dispatch coordination.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                 {[
                   { title: 'Downtime Reduction', desc: 'Active monitoring and rapid field response to keep assets moving.', icon: Clock },
                   { title: 'SLA Compliance', desc: 'Guaranteed response times across our nationwide certified network.', icon: ShieldCheck },
                   { title: 'Logistics Heatmaps', desc: 'Visualize incident density and unit availability in real-time.', icon: Map },
                   { title: 'Workflows', desc: 'Customizable incident escalation and recovery automation.', icon: Settings }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4 group">
                      <div className="h-12 w-12 shrink-0 rounded-2xl bg-white/5 border border-brand-border flex items-center justify-center group-hover:border-[#2F80FF]/30 transition-all">
                         <item.icon className="h-5 w-5 text-brand-slate group-hover:text-[#2F80FF] transition-colors" />
                      </div>
                      <div>
                         <h4 className="text-sm font-black text-foreground dark:text-white uppercase tracking-widest mb-1.5">{item.title}</h4>
                         <p className="text-[11px] text-brand-slate leading-relaxed font-medium">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>

              <div className="pt-8 flex flex-wrap gap-4">
                  <Button
                     size="lg"
                     onClick={downloadPdf}
                     disabled={isGeneratingPdf}
                     className="bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-foreground dark:text-white font-black h-14 px-10 rounded-2xl shadow-xl"
                  >
                     {isGeneratingPdf ? 'Generating PDF...' : 'Request Fleet Capability Report'}
                  </Button>
                 <Button variant="outline" size="lg" className="border-brand-border text-foreground dark:text-white hover:bg-white/5 h-14 px-10 rounded-2xl text-[11px] font-black uppercase tracking-widest">
                    Enterprise Use Cases
                 </Button>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};
