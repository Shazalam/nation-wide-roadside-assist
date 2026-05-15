'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Shield, Webhook, Key } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

export const DispatchAPIs = () => {
  return (
    <section className="py-24 bg-brand-bg relative z-10 border-t border-brand-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-3xl lg:text-5xl font-black text-foreground dark:text-white tracking-tight leading-tight mb-4">
              API & Developer Infrastructure
           </h2>
           <p className="text-brand-slate font-medium text-sm">
             Integrate directly with our dispatch engine. Build programmatic incident creation and monitor realtime recovery telemetry.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           <div className="lg:col-span-4 space-y-4">
              {[
                { title: 'Dispatch APIs', icon: Terminal, desc: 'Create and manage dispatches.' },
                { title: 'Fleet & Incident APIs', icon: Database, desc: 'Historical operational queries.' },
                { title: 'Webhook Telemetry', icon: Webhook, desc: 'Realtime dispatch events.' },
                { title: 'OAuth & Sandboxing', icon: Key, desc: 'Enterprise authentication.' }
              ].map((item, i) => (
                <GlassPanel key={i} className="p-5 border-brand-border bg-white/[0.02] flex items-center gap-4 group hover:bg-[#2F80FF]/5 transition-colors">
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
              <div className="h-full rounded-2xl border border-brand-border bg-card/80 p-1 flex flex-col relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-[#2F80FF]/10 blur-3xl rounded-full" />
                 
                 <div className="flex items-center gap-2 px-4 py-3 border-b border-brand-border bg-white/[0.02]">
                    <div className="flex gap-1.5">
                       <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                       <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                       <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    </div>
                    <span className="text-[10px] font-mono text-brand-slate ml-2">WebSocket Client</span>
                 </div>
                 
                 <div className="p-6 flex-1 bg-brand-bg/50 overflow-x-auto">
                    <pre className="font-mono text-[11px] leading-loose text-[#A3B8CC]">
                       <code>
<span className="text-brand-slate italic">// Subscribing to live dispatch events</span>
<br/>
<span className="text-purple-400">const</span> socket = <span className="text-purple-400">new</span> <span className="text-[#2F80FF]">WebSocket</span>(<span className="text-emerald-300">'wss://stream.nationwidetrans.com/v1/dispatch'</span>);
<br/>
<br/>socket.<span className="text-blue-300">onmessage</span> = (event) =&gt; {'{'}
<br/>  <span className="text-purple-400">const</span> data = JSON.<span className="text-blue-300">parse</span>(event.data);
<br/>  
<br/>  <span className="text-purple-400">if</span> (data.event === <span className="text-emerald-300">'eta.changed'</span>) {'{'}
<br/>    <span className="text-blue-300">updateFleetDashboard</span>(data.incidentId, data.newEta);
<br/>  {'}'} <span className="text-purple-400">else if</span> (data.event === <span className="text-emerald-300">'escalation.triggered'</span>) {'{'}
<br/>    <span className="text-blue-300">alertOperationsManager</span>(data.details);
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
