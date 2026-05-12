'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Copy, Check, Database, Shield, Globe, Zap, Key, Box, Braces, ChevronRight } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Button } from '@/components/ui/button';

const codeExamples = {
  recovery: `curl -X POST https://api.nationwidetrans.com/v1/heavy-recovery/dispatch \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "type": "semi_recovery",
    "priority": "critical",
    "vehicle_class": 8,
    "location": {
      "lat": 39.7392,
      "lng": -104.9903,
      "address": "I-70, Denver, CO"
    },
    "requirements": ["rotator", "heavy_wrecker"]
  }'`,
  telemetry: `{
  "incident_id": "INC-7849",
  "status": "on_scene",
  "operator": {
    "name": "Heavy Haul Inc.",
    "truck_id": "RT-402",
    "telemetry": {
      "lat": 39.7412,
      "lng": -104.9885,
      "speed_mph": 0,
      "heading": 215
    }
  }
}`,
  webhooks: `// Recovery Event: recovery.incident.completed
{
  "id": "evt_9l4k8j2",
  "type": "recovery.incident.completed",
  "created": 1683902400,
  "data": {
    "incident_id": "INC-7849",
    "recovery_duration": "42m",
    "resolution": "tractor_recovered",
    "billing_summary": {
      "amount": 2450.00,
      "currency": "USD"
    }
  }
}`
};

export const RecoveryAPI = () => {
  const [activeTab, setActiveTab] = useState<'recovery' | 'telemetry' | 'webhooks'>('recovery');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExamples[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-32 relative z-10 bg-[#0A192F]/50 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* Content */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <p className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.3em] mb-4">Developer Infrastructure</p>
              <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-none mb-10">API-First Recovery <br />Operations</h2>
              <p className="text-lg text-[#94A3B8] leading-relaxed font-medium">
                Seamlessly integrate nationwide heavy-duty recovery orchestration into your existing platforms with our high-performance APIs and SDKs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {[
                 { title: 'Recovery APIs', desc: 'Global JSON endpoints for heavy recovery orchestration.', icon: Braces },
                 { title: 'Fleet Webhooks', desc: 'Real-time event streaming for recovery lifecycle.', icon: Zap },
                 { title: 'Sandbox Mesh', desc: 'Testing environment for operational workflows.', icon: Database },
                 { title: 'Developer SDKs', desc: 'Native libraries for Go, Node.js, and Python.', icon: Box }
               ].map((item, i) => (
                 <div key={i} className="flex gap-5 group cursor-default">
                    <div className="h-12 w-12 shrink-0 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-brand-blue/30 transition-colors">
                       <item.icon className="h-5 w-5 text-brand-blue" />
                    </div>
                    <div>
                       <p className="text-[12px] font-black text-white uppercase tracking-widest mb-1.5">{item.title}</p>
                       <p className="text-[11px] text-[#94A3B8] leading-relaxed font-medium">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>

            <div className="flex flex-wrap gap-5 pt-4">
               <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white font-black h-14 px-10 rounded-2xl shadow-[0_0_25px_rgba(47,128,255,0.3)]">
                  Explore Documentation
               </Button>
               <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 h-14 px-10 rounded-2xl font-bold uppercase tracking-widest text-[11px]">
                  Request API Key
               </Button>
            </div>
          </div>

          {/* Terminal */}
          <div className="lg:col-span-7 relative">
             <div className="absolute -inset-10 bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none" />
             
             <GlassPanel className="p-0 border-white/10 bg-[#081120] shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden">
                {/* Header */}
                <div className="px-10 py-6 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
                   <div className="flex items-center gap-10">
                      {(['recovery', 'telemetry', 'webhooks'] as const).map(t => (
                        <button 
                          key={t}
                          onClick={() => setActiveTab(t)}
                          className={`text-[12px] font-mono font-bold uppercase tracking-[0.2em] transition-colors relative pb-1 ${
                            activeTab === t ? 'text-brand-blue' : 'text-[#94A3B8] hover:text-white'
                          }`}
                        >
                          {t === 'recovery' ? 'dispatch.sh' : t + '.json'}
                          {activeTab === t && (
                            <motion.div layoutId="recoveryApiActive" className="absolute -bottom-7 left-0 right-0 h-[3px] bg-brand-blue" />
                          )}
                        </button>
                      ))}
                   </div>
                   <button onClick={handleCopy} className="text-[#94A3B8] hover:text-white transition-colors group p-2">
                      {copied ? <Check className="h-5 w-5 text-emerald-400" /> : <Copy className="h-5 w-5 group-hover:scale-110 transition-transform" />}
                   </button>
                </div>

                {/* Code Body */}
                <div className="p-12 h-[500px] overflow-auto font-mono text-[14px] leading-relaxed no-scrollbar bg-[#081120]/80">
                   <pre className="text-white/80 whitespace-pre-wrap">
                      <code className="selection:bg-brand-blue/30">{codeExamples[activeTab]}</code>
                   </pre>
                </div>

                {/* Status Bar */}
                <div className="px-10 py-5 border-t border-white/5 bg-white/[0.02] flex items-center justify-between">
                   <div className="flex items-center gap-4">
                      <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[11px] font-mono font-bold text-[#94A3B8] uppercase tracking-widest">API Endpoint: stable-v2.recovery.ops</span>
                   </div>
                   <div className="flex gap-8">
                      <span className="text-[11px] font-mono text-brand-blue font-black cursor-pointer hover:underline">Mesh v4.2.1</span>
                      <span className="text-[11px] font-mono text-white/20 font-black">SSL SECURE</span>
                   </div>
                </div>
             </GlassPanel>

             {/* Animated Events Sidebar Overlay */}
             <motion.div
               initial={{ x: 30, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               className="absolute top-20 -right-24 w-72 bg-[#0A192F]/95 border border-white/10 p-8 rounded-[2rem] shadow-2xl backdrop-blur-3xl hidden xl:block z-20"
             >
                <div className="text-[12px] font-black text-white uppercase tracking-widest mb-8 flex items-center gap-3">
                   <Zap className="h-4 w-4 text-brand-blue" /> Live Webhook Stream
                </div>
                <div className="space-y-6">
                   {[
                     { e: 'recovery.created', t: '2s ago', s: 'bg-brand-blue' },
                     { e: 'vendor.matched', t: '8s ago', s: 'bg-emerald-500' },
                     { e: 'eta.updated', t: '15s ago', s: 'bg-brand-orange' },
                     { e: 'incident.on_scene', t: '22s ago', s: 'bg-purple-500' },
                     { e: 'incident.completed', t: '30s ago', s: 'bg-brand-blue' }
                   ].map((evt, i) => (
                     <div key={i} className="flex items-center justify-between group cursor-pointer border-b border-white/5 pb-4 last:border-0">
                        <div className="flex items-center gap-3">
                           <div className={`h-1.5 w-1.5 rounded-full ${evt.s}`} />
                           <span className="text-[11px] font-mono font-bold text-[#94A3B8] group-hover:text-white transition-colors">{evt.e}</span>
                        </div>
                        <span className="text-[10px] font-mono text-white/20">{evt.t}</span>
                     </div>
                   ))}
                </div>
                <button className="w-full mt-10 py-4 text-[10px] font-black text-brand-blue border border-brand-blue/20 rounded-2xl hover:bg-brand-blue/10 transition-all flex items-center justify-center gap-3 uppercase tracking-widest">
                   Stream Dashboard <ChevronRight className="h-4 w-4" />
                </button>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
