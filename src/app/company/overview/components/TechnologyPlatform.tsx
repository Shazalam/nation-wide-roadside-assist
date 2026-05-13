'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Shield, Webhook } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

export const TechnologyPlatform = () => {
  return (
    <section className="py-24 bg-[#081120] relative z-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              API-First Platform Architecture
           </h2>
           <p className="text-[#94A3B8] font-medium text-sm">
             We are a technology infrastructure company orchestrating physical recovery assets.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           <div className="lg:col-span-4 space-y-4">
              {[
                { title: 'Recovery APIs', icon: Terminal, desc: 'Programmatic incident creation.' },
                { title: 'Fleet Telemetry Systems', icon: Database, desc: 'Live GPS vehicle tracking.' },
                { title: 'OAuth Infrastructure', icon: Shield, desc: 'Enterprise secure access.' },
                { title: 'Webhook Ecosystem', icon: Webhook, desc: 'Real-time status events.' }
              ].map((item, i) => (
                <GlassPanel key={i} className="p-5 border-white/5 bg-white/[0.02] flex items-center gap-4 group">
                   <div className="h-10 w-10 shrink-0 rounded bg-white/5 border border-white/10 flex items-center justify-center">
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
                    <span className="text-[10px] font-mono text-[#94A3B8] ml-2">POST /api/v1/recovery/dispatch</span>
                 </div>
                 
                 <div className="p-6 flex-1 bg-[#081120]/50 overflow-x-auto">
                    <pre className="font-mono text-[11px] leading-loose text-[#A3B8CC]">
                       <code>
<span className="text-purple-400">const</span> <span className="text-[#2F80FF]">createRecoveryEvent</span> = <span className="text-purple-400">async</span> (incidentDetails) =&gt; {'{'}
<br/>  <span className="text-purple-400">const</span> response = <span className="text-purple-400">await</span> fetch(<span className="text-emerald-300">'https://api.nationwidetrans.com/v1/recovery'</span>, {'{'}
<br/>    method: <span className="text-emerald-300">'POST'</span>,
<br/>    headers: {'{'}
<br/>      <span className="text-emerald-300">'Authorization'</span>: <span className="text-emerald-300">`Bearer <span className="text-purple-400">$</span>{'{'}process.env.NTI_API_KEY{'}'}`</span>,
<br/>      <span className="text-emerald-300">'Content-Type'</span>: <span className="text-emerald-300">'application/json'</span>
<br/>    {'}'},
<br/>    body: JSON.<span className="text-blue-300">stringify</span>({'{'}
<br/>      vehicleClass: <span className="text-emerald-300">"Class_8"</span>,
<br/>      incidentType: <span className="text-emerald-300">"Roll_Over"</span>,
<br/>      coordinates: {'{'} lat: <span className="text-orange-300">34.0522</span>, lng: <span className="text-orange-300">-118.2437</span> {'}'},
<br/>      priority: <span className="text-emerald-300">"CRITICAL"</span>
<br/>    {'}'})
<br/>  {'}'});
<br/>
<br/>  <span className="text-purple-400">return</span> response.json();
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
