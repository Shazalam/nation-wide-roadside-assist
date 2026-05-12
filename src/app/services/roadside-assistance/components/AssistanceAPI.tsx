'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Copy, Check, Database, Shield, Globe, Zap, Key, Box, Braces, ChevronRight } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Button } from '@/components/ui/button';

const codeExamples = {
  dispatch: `curl -X POST https://api.nationwidetrans.com/v1/roadside/dispatch \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "type": "towing",
    "priority": "high",
    "location": {
      "lat": 25.7617,
      "lng": -80.1918,
      "address": "I-95 South, Miami, FL"
    },
    "vehicle": {
      "vin": "1HGBH41JXMN054XXX",
      "make": "Honda",
      "model": "Accord"
    }
  }'`,
  incident: `{
  "incident_id": "INC-7849",
  "status": "en_route",
  "vendor": {
    "name": "QuickRescue Towing",
    "id": "VEND-442",
    "eta": "18m"
  },
  "telemetry": {
    "lat": 25.7588,
    "lng": -80.1933,
    "heading": 185
  }
}`,
  webhooks: `// Webhook payload: roadside.incident.completed
{
  "id": "evt_8m2l4k9",
  "type": "roadside.incident.completed",
  "created": 1683902400,
  "data": {
    "incident_id": "INC-7849",
    "resolution": "vehicle_towed",
    "billing_id": "BILL-4822"
  }
}`
};

export const AssistanceAPI = () => {
  const [activeTab, setActiveTab] = useState<'dispatch' | 'incident' | 'webhooks'>('dispatch');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExamples[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-32 relative z-10 bg-[#0A192F]/50 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Content */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <p className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.3em] mb-4">Developer Platform</p>
              <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-8">API-First Assistance Infrastructure</h2>
              <p className="text-lg text-[#94A3B8] leading-relaxed">
                Seamlessly integrate roadside operations into your existing platforms with our robust developer tools, real-time webhooks, and enterprise SDKs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {[
                 { title: 'RESTful APIs', desc: 'Global JSON endpoints for incident orchestration.', icon: Braces },
                 { title: 'Real-time Webhooks', desc: 'Event-driven architecture for live tracking.', icon: Zap },
                 { title: 'Sandbox Environment', desc: 'Mirrored nodes for testing assistance logic.', icon: Database },
                 { title: 'Enterprise SDKs', desc: 'Native libraries for rapid integration.', icon: Box }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4">
                    <div className="h-10 w-10 shrink-0 rounded-xl bg-white/5 flex items-center justify-center">
                       <item.icon className="h-4 w-4 text-brand-blue" />
                    </div>
                    <div>
                       <p className="text-[11px] font-black text-white uppercase tracking-widest mb-1">{item.title}</p>
                       <p className="text-[10px] text-[#94A3B8] leading-normal">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
               <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold h-12 px-8 rounded-xl shadow-[0_0_20px_rgba(47,128,255,0.3)]">
                  Explore API Docs
               </Button>
               <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 h-12 px-8 rounded-xl">
                  Request Sandbox Key
               </Button>
            </div>
          </div>

          {/* Terminal */}
          <div className="lg:col-span-7 relative">
             <div className="absolute -inset-10 bg-brand-blue/10 blur-[100px] rounded-full pointer-events-none" />
             
             <GlassPanel className="p-0 border-white/10 bg-[#081120] shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden">
                {/* Header */}
                <div className="px-8 py-5 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
                   <div className="flex items-center gap-8">
                      {(['dispatch', 'incident', 'webhooks'] as const).map(t => (
                        <button 
                          key={t}
                          onClick={() => setActiveTab(t)}
                          className={`text-[11px] font-mono font-bold uppercase tracking-widest transition-colors relative ${
                            activeTab === t ? 'text-brand-blue' : 'text-[#94A3B8] hover:text-white'
                          }`}
                        >
                          {t === 'dispatch' ? 'dispatch.sh' : t + '.json'}
                          {activeTab === t && (
                            <motion.div layoutId="apiActive" className="absolute -bottom-7 left-0 right-0 h-[2px] bg-brand-blue" />
                          )}
                        </button>
                      ))}
                   </div>
                   <button onClick={handleCopy} className="text-[#94A3B8] hover:text-white transition-colors">
                      {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                   </button>
                </div>

                {/* Code View */}
                <div className="p-10 h-[450px] overflow-auto font-mono text-[13px] leading-relaxed no-scrollbar">
                   <pre className="text-white/80 whitespace-pre-wrap">
                      <code>{codeExamples[activeTab]}</code>
                   </pre>
                </div>

                {/* Footer */}
                <div className="px-8 py-4 border-t border-white/5 bg-white/[0.01] flex items-center justify-between">
                   <div className="flex items-center gap-4">
                      <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-mono text-[#94A3B8] uppercase">System Status: All Nodes Operational</span>
                   </div>
                   <div className="flex gap-6">
                      <span className="text-[10px] font-mono text-brand-blue font-bold cursor-pointer hover:underline">API v2.4</span>
                      <span className="text-[10px] font-mono text-white/20 font-bold">SHA: 8f2l9k4</span>
                   </div>
                </div>
             </GlassPanel>

             {/* Webhook Events Sidebar Simulation */}
             <motion.div
               initial={{ x: 20, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               className="absolute top-20 -right-24 w-64 bg-[#0A192F]/90 border border-white/10 p-6 rounded-3xl shadow-2xl backdrop-blur-3xl hidden xl:block"
             >
                <div className="text-[11px] font-black text-white uppercase tracking-widest mb-6 flex items-center gap-2">
                   <Zap className="h-3 w-3 text-brand-blue" /> Recent Webhook Events
                </div>
                <div className="space-y-4">
                   {[
                     { e: 'incident.created', t: '2 sec ago' },
                     { e: 'vendor.assigned', t: '10 sec ago' },
                     { e: 'dispatch.updated', t: '20 sec ago' },
                     { e: 'eta.changed', t: '25 sec ago' },
                     { e: 'incident.completed', t: '35 sec ago' }
                   ].map((evt, i) => (
                     <div key={i} className="flex items-center justify-between group cursor-pointer">
                        <span className="text-[10px] font-mono text-[#94A3B8] group-hover:text-white transition-colors">{evt.e}</span>
                        <span className="text-[9px] font-mono text-white/20">{evt.t}</span>
                     </div>
                   ))}
                </div>
                <button className="w-full mt-8 py-3 text-[9px] font-black text-brand-blue border border-brand-blue/20 rounded-xl hover:bg-brand-blue/10 transition-all flex items-center justify-center gap-2">
                   View All Events <ChevronRight className="h-3 w-3" />
                </button>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
