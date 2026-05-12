'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, Code2, Copy, Check, 
  Database, Shield, Globe, Zap,
  Key, Box, Braces
} from 'lucide-react';

const codeExamples = {
  dispatch: `curl -X POST https://api.nationwide.io/v1/recovery/dispatch \\
  -H "Authorization: Bearer $API_KEY" \\
  -d '{
    "vehicle_class": 8,
    "incident_type": "trailer_recovery",
    "location": {
      "lat": 40.7128,
      "lng": -74.0060,
      "address": "I-95 North, Mile Marker 102"
    },
    "priority": "high",
    "metadata": {
      "fleet_id": "TRANS-9921",
      "load_type": "refrigerated"
    }
  }'`,
  tracking: `// Listen for real-time recovery telemetry
socket.on('incident.update', (data) => {
  console.log('Recovery ID:', data.id);
  console.log('Live GPS:', data.location);
  console.log('ETA Update:', data.eta_minutes);
  console.log('Operator Status:', data.status);
});`,
  webhooks: `{
  "id": "evt_9l2k3m4n5o6p",
  "type": "recovery.resolved",
  "created": 1715523600,
  "data": {
    "object": {
      "id": "rec_1j2k3l4m5n",
      "status": "completed",
      "resolution": "on_site_repair",
      "billing_id": "inv_8k2l3m"
    }
  }
}`
};

export default function APIInfrastructure() {
  const [activeTab, setActiveTab] = useState<keyof typeof codeExamples>('dispatch');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExamples[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-32 bg-[#0A192F]/50 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Developer Info */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
                <Terminal className="w-3 h-3 text-[#2F80FF]" />
                <span className="text-[10px] font-bold text-[#2F80FF] uppercase tracking-widest">Developer Ecosystem</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-white mb-6">
                Recovery Infrastructure <br />
                <span className="text-[#2F80FF]">As Code.</span>
              </h2>
              <p className="text-[#94A3B8] text-lg leading-relaxed max-w-xl">
                Integrate nationwide commercial recovery operations into your existing fleet stack. Our API-first architecture enables automated dispatch, real-time telemetry, and programmatic billing.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
               {[
                 { title: 'RESTful APIs', desc: 'Standardized endpoints for full CRUD recovery ops.', icon: Braces },
                 { title: 'Real-time Webhooks', desc: 'Event-driven architecture for instant updates.', icon: Zap },
                 { title: 'Secure OAuth 2.0', desc: 'Enterprise-grade authentication and scoping.', icon: Shield },
                 { title: 'SDK Ecosystem', desc: 'Native libraries for Node, Go, Python, and Java.', icon: Box }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4">
                    <div className="p-2 rounded-lg bg-white/5 h-fit mt-1">
                       <item.icon className="w-4 h-4 text-[#2F80FF]" />
                    </div>
                    <div>
                       <div className="text-sm font-bold text-white mb-1">{item.title}</div>
                       <div className="text-[10px] text-[#94A3B8] leading-normal">{item.desc}</div>
                    </div>
                 </div>
               ))}
            </div>

            <div className="flex gap-4 pt-4">
               <button className="px-6 py-3 bg-[#2F80FF] text-white rounded-xl font-bold text-[11px] uppercase tracking-widest hover:shadow-[0_0_20px_rgba(47,128,255,0.4)] transition-all">
                  Read API Docs
               </button>
               <button className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-[11px] uppercase tracking-widest hover:bg-white/10 transition-all">
                  View SDKs
               </button>
            </div>
          </div>

          {/* Right Side: Code Terminal */}
          <div className="relative">
             {/* Ambient glow */}
             <div className="absolute -inset-10 bg-[#2F80FF]/10 blur-[100px] pointer-events-none" />
             
             <div className="relative bg-[#081120] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                {/* Terminal Header */}
                <div className="bg-[#0A192F] px-6 py-4 border-b border-white/5 flex items-center justify-between">
                   <div className="flex items-center gap-6">
                      {(['dispatch', 'tracking', 'webhooks'] as const).map(t => (
                        <button 
                          key={t}
                          onClick={() => setActiveTab(t)}
                          className={`text-[10px] font-mono uppercase tracking-widest transition-colors ${
                            activeTab === t ? 'text-[#2F80FF] border-b border-[#2F80FF]' : 'text-[#94A3B8] hover:text-white'
                          }`}
                        >
                          {t}.json
                        </button>
                      ))}
                   </div>
                   <button 
                    onClick={handleCopy}
                    className="p-2 hover:bg-white/5 rounded-lg transition-colors text-[#94A3B8] hover:text-white"
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
                      <span className="text-[9px] font-mono text-[#94A3B8] uppercase">Production API v1.4 - Latency: 24ms</span>
                   </div>
                   <div className="flex gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
