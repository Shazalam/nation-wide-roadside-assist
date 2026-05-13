'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Shield, Webhook, Key } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

export const DeveloperSupport = () => {
  return (
    <section className="py-24 bg-[#081120] relative z-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              API & Developer Support
           </h2>
           <p className="text-[#94A3B8] font-medium text-sm">
             Connect with our engineering teams to integrate real-time recovery systems into your fleet software.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           <div className="lg:col-span-4 space-y-4">
              {[
                { title: 'API Documentation', icon: Terminal, desc: 'Comprehensive REST endpoints.' },
                { title: 'Webhook Infrastructure', icon: Webhook, desc: 'Real-time telemetry streams.' },
                { title: 'OAuth Integration Support', icon: Shield, desc: 'Enterprise authentication.' },
                { title: 'Sandbox Environment', icon: Key, desc: 'Test infrastructure safely.' }
              ].map((item, i) => (
                <GlassPanel key={i} className="p-5 border-white/5 bg-white/[0.02] flex items-center gap-4 group">
                   <div className="h-10 w-10 shrink-0 rounded bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#2F80FF]/30 group-hover:bg-[#2F80FF]/10 transition-colors">
                      <item.icon className="h-4 w-4 text-[#2F80FF]" />
                   </div>
                   <div>
                      <h4 className="text-[10px] font-black text-white uppercase tracking-widest">{item.title}</h4>
                      <p className="text-[10px] text-[#94A3B8] mt-1">{item.desc}</p>
                   </div>
                </GlassPanel>
              ))}
           </div>

           <div className="lg:col-span-8">
              <div className="h-full rounded-2xl border border-white/10 bg-[#0A192F]/80 p-1 flex flex-col relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-[#2F80FF]/10 blur-3xl rounded-full" />
                 
                 <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                    <div className="flex gap-1.5">
                       <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                       <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                       <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    </div>
                    <span className="text-[10px] font-mono text-[#94A3B8] ml-2">GET /api/v1/support/status</span>
                 </div>
                 
                 <div className="p-6 flex-1 bg-[#081120]/50 overflow-x-auto">
                    <pre className="font-mono text-[11px] leading-loose text-[#A3B8CC]">
                       <code>
<span className="text-purple-400">const</span> <span className="text-[#2F80FF]">checkSystemStatus</span> = <span className="text-purple-400">async</span> () =&gt; {'{'}
<br/>  <span className="text-purple-400">const</span> response = <span className="text-purple-400">await</span> fetch(<span className="text-emerald-300">'https://api.nationwidetrans.com/v1/status'</span>, {'{'}
<br/>    headers: {'{'}
<br/>      <span className="text-emerald-300">'Authorization'</span>: <span className="text-emerald-300">`Bearer <span className="text-purple-400">$</span>{'{'}process.env.NTI_API_KEY{'}'}`</span>
<br/>    {'}'}
<br/>  {'}'});
<br/>
<br/>  <span className="text-purple-400">return</span> response.json();
<br/>{'}'};
<br/>
<br/><span className="text-[#94A3B8] italic">// Output:</span>
<br/><span className="text-yellow-300">'{'{'}
<br/>  "status": "operational",
<br/>  "dispatchLatency": "42ms",
<br/>  "activeNodes": 1240,
<br/>  "supportTier": "ENTERPRISE"
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
