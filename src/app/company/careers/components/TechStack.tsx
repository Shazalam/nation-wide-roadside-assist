'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Database, Zap, GitBranch, Cpu, Webhook } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

export const TechStack = () => {
  return (
    <section className="py-24 bg-card/20 relative z-10 border-t border-brand-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
           
           <div className="lg:col-span-5 space-y-8">
              <h2 className="text-3xl lg:text-4xl font-black text-foreground dark:text-white tracking-tight leading-tight">
                 Build On Modern <br />Infrastructure
              </h2>
              <p className="text-brand-slate font-medium text-sm leading-relaxed max-w-md">
                 Our engineering teams operate at the intersection of bits and atoms, building the API-first dispatch systems and WebSocket telemetry engines that orchestrate physical heavy-duty assets nationwide.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                 {[
                   { title: 'API-First Systems', icon: GitBranch },
                   { title: 'Real-Time Telemetry', icon: Zap },
                   { title: 'WebSocket Ops', icon: Webhook },
                   { title: 'Data Pipelines', icon: Database }
                 ].map((tech, i) => (
                   <div key={i} className="flex items-center gap-3 bg-white/[0.02] border border-brand-border p-3 rounded-lg">
                      <tech.icon className="h-4 w-4 text-[#2F80FF]" />
                      <span className="text-[10px] font-bold text-foreground dark:text-white uppercase tracking-widest">{tech.title}</span>
                   </div>
                 ))}
              </div>
           </div>

           <div className="lg:col-span-7">
              <div className="h-full rounded-2xl border border-brand-border bg-brand-bg p-1 flex flex-col relative overflow-hidden shadow-2xl">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-[#2F80FF]/10 blur-3xl rounded-full" />
                 
                 <div className="flex items-center justify-between px-4 py-3 border-b border-brand-border bg-white/[0.02]">
                    <div className="flex gap-1.5">
                       <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                       <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                       <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-[10px] font-mono text-brand-slate">WebSocket Connection</span>
                 </div>
                 
                 <div className="p-6 flex-1 bg-card/30 overflow-x-auto relative">
                    <pre className="font-mono text-[11px] leading-loose text-[#A3B8CC]">
                       <code>
<span className="text-brand-slate italic">// Telemetry subscription for live dispatch</span>
<br/>
<span className="text-purple-400">const</span> ws = <span className="text-purple-400">new</span> <span className="text-[#2F80FF]">WebSocket</span>(<span className="text-emerald-300">'wss://stream.nationwidetrans.com/dispatch'</span>);
<br/>
<br/>ws.<span className="text-blue-300">onmessage</span> = (event) =&gt; {'{'}
<br/>  <span className="text-purple-400">const</span> payload = JSON.<span className="text-blue-300">parse</span>(event.data);
<br/>  
<br/>  <span className="text-purple-400">if</span> (payload.type === <span className="text-emerald-300">'VENDOR_ASSIGNED'</span>) {'{'}
<br/>    <span className="text-blue-300">updateCommandCenter</span>({'{'}
<br/>      incidentId: payload.incidentId,
<br/>      vendorEta: payload.eta,
<br/>      status: <span className="text-emerald-300">'EN_ROUTE'</span>
<br/>    {'}'});
<br/>  {'}'}
<br/>{'}'};
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
