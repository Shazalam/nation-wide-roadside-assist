'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Network, Database, ShieldAlert } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

export const CompanyCulture = () => {
  return (
    <section className="py-32 bg-card/20 relative z-10 border-t border-brand-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
           
           <div className="lg:col-span-5">
              <h2 className="text-3xl lg:text-5xl font-black text-foreground dark:text-white tracking-tight leading-tight mb-8">
                 Operationally Focused. <br />
                 <span className="text-brand-slate">Infrastructure Driven.</span>
              </h2>
              <div className="space-y-6 text-brand-slate font-medium leading-relaxed text-sm md:text-base mb-10">
                 <p>
                    Our culture is defined by mission-critical execution. We don't build generic SaaS; we architect the real-time operational networks that keep the nationwide mobility economy moving. 
                 </p>
                 <p>
                    From engineering teams deploying low-latency telemetry to operational specialists managing complex commercial fleet recoveries, we operate with discipline, extreme ownership, and enterprise accountability.
                 </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {[
                   { title: 'Real-Time Collaboration', desc: 'Cross-functional teams solving immediate operational challenges.' },
                   { title: 'Infrastructure Ownership', desc: 'End-to-end accountability for enterprise systems.' }
                 ].map((item, i) => (
                   <div key={i} className="border-l-2 border-[#2F80FF]/50 pl-4">
                      <h4 className="text-[11px] font-black text-foreground dark:text-white uppercase tracking-widest mb-2">{item.title}</h4>
                      <p className="text-[10px] text-brand-slate leading-relaxed">{item.desc}</p>
                   </div>
                 ))}
              </div>
           </div>

           <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {[
                   { title: 'Enterprise Mindset', icon: Database, bg: "bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80')]" },
                   { title: 'Fleet Operations', icon: Network, bg: "bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')]" },
                   { title: 'Nationwide Teamwork', icon: ShieldAlert, bg: "bg-[url('https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80')]" }
                 ].map((card, i) => (
                   <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: i * 0.1 }}
                     viewport={{ once: true }}
                     className={i === 1 ? 'sm:mt-12' : i === 2 ? 'sm:col-span-2' : ''}
                   >
                      <GlassPanel className="p-0 border-brand-border overflow-hidden group h-64 relative">
                         <div className={`absolute inset-0 ${card.bg} bg-cover bg-center opacity-30 mix-blend-luminosity group-hover:opacity-50 group-hover:scale-105 transition-all duration-700`} />
                         <div className="absolute inset-0 bg-gradient-to-t from-[#081120] via-[#081120]/80 to-transparent" />
                         
                         <div className="absolute bottom-6 left-6 right-6">
                            <div className="h-10 w-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4">
                               <card.icon className="h-5 w-5 text-foreground dark:text-white" />
                            </div>
                            <h3 className="text-lg font-black text-foreground dark:text-white uppercase tracking-wider">{card.title}</h3>
                         </div>
                      </GlassPanel>
                   </motion.div>
                 ))}
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};
