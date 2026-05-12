'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Copy, Check, Database, Shield, Globe, Zap, Key, Box, Braces } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const codeExamples = {
  dispatch: `curl -X POST https://api.nationwide.io/v1/dispatch \\
  -H "Authorization: Bearer $API_KEY" \\
  -d '{
    "customer": {
      "id": "CUST-9921",
      "priority": "critical"
    },
    "vehicle": {
      "vin": "1N4AL3AP5KC...",
      "type": "light-duty"
    },
    "location": {
      "lat": 32.7767,
      "lng": -96.7970
    },
    "service": "emergency_recovery"
  }'`,
  telemetry: `// Live telemetry stream via WebSockets
const socket = new WebSocket('wss://telemetry.nationwide.io');

socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log('Incident ID:', data.id);
  console.log('Live GPS:', data.location);
  console.log('ETA Update:', data.eta_minutes);
};`,
  webhooks: `{
  "id": "evt_9l2k3m4n5o6p",
  "type": "dispatch.vendor_assigned",
  "created": 1715523600,
  "data": {
    "dispatch_id": "dsp_1j2k3l4m5n",
    "vendor": {
      "id": "VEND-882",
      "name": "Elite Recovery",
      "eta_min": 14
    }
  }
}`
};

export const APIInfrastructure = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof codeExamples>('dispatch');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExamples[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-32 relative overflow-hidden bg-brand-bg/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Developer Info */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/10 border border-brand-blue/20 rounded-full mb-6">
                <Terminal className="w-3 h-3 text-brand-blue" />
                <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest">Developer Hub</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-white mb-6">
                Dispatch APIs <br />
                <span className="text-brand-blue">For Enterprise.</span>
              </h2>
              <p className="text-brand-slate text-lg leading-relaxed max-w-xl">
                Integrate nationwide dispatch operations directly into your mobility stack. Our API-first infrastructure enables programmatic recovery, real-time telemetry, and automated vendor orchestration.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
               {[
                 { title: 'RESTful APIs', desc: 'Standardized endpoints for full CRUD dispatch ops.', icon: Braces },
                 { title: 'Real-time Webhooks', desc: 'Event-driven architecture for instant updates.', icon: Zap },
                 { title: 'Secure OAuth 2.0', desc: 'Enterprise-grade authentication and scoping.', icon: Shield },
                 { title: 'SDK Ecosystem', desc: 'Native libraries for Node, Go, Python, and Java.', icon: Box }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4">
                    <div className="p-2 rounded-lg bg-white/5 h-fit mt-1">
                       <item.icon className="w-4 h-4 text-brand-blue" />
                    </div>
                    <div>
                       <div className="text-sm font-bold text-white mb-1">{item.title}</div>
                       <div className="text-[10px] text-brand-slate leading-normal">{item.desc}</div>
                    </div>
                 </div>
               ))}
            </div>

            <div className="flex gap-4 pt-4">
               <button className="px-8 py-3 bg-brand-blue text-white rounded-xl font-bold text-[11px] uppercase tracking-widest hover:shadow-[0_0_20px_rgba(47,128,255,0.4)] transition-all hover:scale-[1.03]">
                  Read API Docs
               </button>
               <button className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-[11px] uppercase tracking-widest hover:bg-white/10 transition-all">
                  View SDK Reference
               </button>
            </div>
          </div>

          {/* Right Side: Code Terminal */}
          <div className="relative">
             {/* Ambient glow */}
             <div className="absolute -inset-10 bg-brand-blue/10 blur-[100px] pointer-events-none" />
             
             <GlassPanel className="relative bg-[#081120] rounded-2xl border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden p-0">
                {/* Terminal Header */}
                <div className="bg-[#0A192F] px-6 py-4 border-b border-white/5 flex items-center justify-between">
                   <div className="flex items-center gap-6">
                      {(['dispatch', 'telemetry', 'webhooks'] as const).map(t => (
                        <button 
                          key={t}
                          onClick={() => setActiveTab(t)}
                          className={`text-[10px] font-mono uppercase tracking-widest transition-colors relative pb-1 ${
                            activeTab === t ? 'text-brand-blue' : 'text-brand-slate hover:text-white'
                          }`}
                        >
                          {t}.{t === 'webhooks' ? 'json' : 'ts'}
                          {activeTab === t && <motion.div layoutId="apiTabBorder" className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-blue" />}
                        </button>
                      ))}
                   </div>
                   <button 
                    onClick={handleCopy}
                    className="p-2 hover:bg-white/5 rounded-lg transition-colors text-brand-slate hover:text-white"
                   >
                      {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                   </button>
                </div>

                {/* Code Content */}
                <div className="p-8 h-[400px] overflow-auto font-mono text-[13px] leading-relaxed">
                   <pre className="text-white/90">
                      <code>{codeExamples[activeTab]}</code>
                   </pre>
                </div>

                {/* Terminal Footer */}
                <div className="bg-[#0A192F]/50 px-6 py-3 border-t border-white/5 flex items-center justify-between">
                   <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[9px] font-mono text-brand-slate uppercase">Production Node Active - TX-82</span>
                   </div>
                </div>
             </GlassPanel>
          </div>

        </div>
      </div>
    </section>
  );
};
