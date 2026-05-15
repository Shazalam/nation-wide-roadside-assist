'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Database, Zap, Cpu, Code2 } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

export const DispatchTechnology = () => {
  return (
    <section className="py-24 bg-card/20 relative z-10 border-t border-brand-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-3xl lg:text-5xl font-black text-foreground dark:text-white tracking-tight leading-tight mb-4">
              Dispatch Technology Platform
           </h2>
           <p className="text-brand-slate font-medium text-sm">
             We are a technology-first operational infrastructure provider, engineering the software that coordinates the physical world.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           <div className="lg:col-span-4 space-y-4">
              {[
                { title: 'API-First Dispatch Systems', icon: Code2, desc: 'Programmatic incident creation.' },
                { title: 'Real-Time Telemetry', icon: Zap, desc: 'Sub-second GPS coordination.' },
                { title: 'Dispatch Automation Engine', icon: Cpu, desc: 'Algorithmic vendor matching.' },
                { title: 'Fleet Intelligence', icon: Database, desc: 'Historical operational analytics.' }
              ].map((item, i) => (
                <GlassPanel key={i} className="p-5 border-brand-border bg-white/[0.02] flex items-center gap-4 group">
                   <div className="h-10 w-10 shrink-0 rounded bg-white/5 border border-brand-border flex items-center justify-center group-hover:border-[#2F80FF]/30 group-hover:bg-[#2F80FF]/10 transition-colors">
                      <item.icon className="h-4 w-4 text-[#2F80FF]" />
                   </div>
                   <div>
                      <h4 className="text-[10px] font-black text-foreground dark:text-white uppercase tracking-widest">{item.title}</h4>
                      <p className="text-[10px] text-brand-slate mt-1">{item.desc}</p>
                   </div>
                </GlassPanel>
              ))}
           </div>

           <div className="lg:col-span-8">
              <div className="h-full rounded-2xl border border-[#2F80FF]/20 bg-brand-bg p-1 flex flex-col relative overflow-hidden shadow-[0_0_50px_rgba(47,128,255,0.1)]">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-[#2F80FF]/10 blur-3xl rounded-full" />
                 
                 <div className="flex items-center gap-2 px-4 py-3 border-b border-brand-border bg-card">
                    <div className="flex gap-1.5">
                       <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                       <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                       <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-[10px] font-mono text-brand-slate ml-2">POST /api/v1/dispatch/create</span>
                 </div>
                 
                 <div className="p-6 flex-1 bg-brand-bg overflow-x-auto">
                    <pre className="font-mono text-[11px] leading-loose text-[#A3B8CC]">
                       <code>
<span className="text-purple-400">const</span> payload = {'{'}
<br/>  <span className="text-emerald-300">"fleetId"</span>: <span className="text-emerald-300">"FLT-8829"</span>,
<br/>  <span className="text-emerald-300">"vehicleType"</span>: <span className="text-emerald-300">"CLASS_8_TRACTOR"</span>,
<br/>  <span className="text-emerald-300">"location"</span>: {'{'}
<br/>    <span className="text-emerald-300">"lat"</span>: <span className="text-orange-300">41.8781</span>,
<br/>    <span className="text-emerald-300">"lng"</span>: <span className="text-orange-300">-87.6298</span>
<br/>  {'}'},
<br/>  <span className="text-emerald-300">"incidentType"</span>: <span className="text-emerald-300">"MECHANICAL_FAILURE"</span>,
<br/>  <span className="text-emerald-300">"priority"</span>: <span className="text-emerald-300">"HIGH"</span>
<br/>{'}'};
<br/>
<br/><span className="text-brand-slate italic">// Response:</span>
<br/><span className="text-yellow-300">'{'{'}
<br/>  "dispatchId": "DSP-9042",
<br/>  "status": "ROUTING",
<br/>  "assignedNode": "NA-CENTRAL",
<br/>  "estimatedVendorMatch": "45s"
<br/>{'}'}'</span>
                       </code>
                    </pre>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
