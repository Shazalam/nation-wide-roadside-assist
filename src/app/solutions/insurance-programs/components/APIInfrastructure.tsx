'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, Code2, Copy, Check, 
  Braces, Zap, Shield, Box,
  Database, Globe, Server, Command, ChevronRight
} from 'lucide-react';

const apiExamples = {
  dispatch: `curl --request POST \\
  --url https://api.nationwidetrans.com/v1/dispatch \\
  --header 'Authorization: Bearer {token}' \\
  --header 'Content-Type: application/json' \\
  --data '{
    "incidentId": "INC-784512",
    "serviceType": "TOW",
    "location": "I-95 North, Florida",
    "memberId": "MBR-123456",
    "priority": "HIGH"
  }'`,
  claims: `{
  "id": "clm_8k2j3l4m5n",
  "status": "validated",
  "policy": {
    "number": "POL-9921-X",
    "coverage": "premium_roadside",
    "expires": "2027-12-31"
  },
  "member": {
    "name": "Alex Rivera",
    "auth_token": "auth_9l2k3m"
  }
}`,
  webhooks: `{
  "id": "evt_1j2k3l4m5n",
  "type": "dispatch.completed",
  "created": 1715523600,
  "data": {
    "dispatch_id": "dsp_4p5q6r",
    "resolution": "tow_completed",
    "vendor": "Elite Recovery NYC"
  }
}`
};

export default function APIInfrastructure() {
  const [activeTab, setActiveTab] = useState<keyof typeof apiExamples>('dispatch');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(apiExamples[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-32 bg-[#0A192F]/50 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Developer Content */}
          <div className="space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
                <Terminal className="w-3.5 h-3.5 text-[#2F80FF]" />
                <span className="text-[10px] font-bold text-[#2F80FF] uppercase tracking-widest">Developer Ecosystem</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-white mb-8">
                API-First <br />
                <span className="text-[#2F80FF]">Infrastructure.</span>
              </h2>
              <p className="text-[#94A3B8] text-xl leading-relaxed max-w-xl">
                Build powerful integrations with our secure, scalable, and well-documented enterprise APIs. Orchestrate complex roadside claims with a single endpoint.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {[
                 { title: 'RESTful APIs', desc: 'Standardized JSON endpoints for claims & dispatch.', icon: Braces },
                 { title: 'Real-time Webhooks', desc: 'Event-driven architecture for incident updates.', icon: Zap },
                 { title: 'Sandbox Environment', desc: 'Test integration logic in a safe, mirrored node.', icon: Server },
                 { title: 'Enterprise SDKs', desc: 'Native libraries for Node, Go, Python & Java.', icon: Box }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4">
                    <div className="p-3 rounded-xl bg-white/5 h-fit mt-1">
                       <item.icon className="w-5 h-5 text-[#2F80FF]" />
                    </div>
                    <div>
                       <div className="text-sm font-bold text-white mb-1 uppercase tracking-widest">{item.title}</div>
                       <div className="text-[11px] text-[#94A3B8] leading-normal">{item.desc}</div>
                    </div>
                 </div>
               ))}
            </div>

            <div className="flex gap-6 pt-4">
               <button className="px-8 py-4 bg-[#2F80FF] text-white rounded-2xl font-bold text-[11px] uppercase tracking-widest hover:shadow-[0_0_30px_rgba(47,128,255,0.4)] transition-all flex items-center gap-3">
                  Explore API Docs <ArrowRight className="w-4 h-4" />
               </button>
               <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold text-[11px] uppercase tracking-widest hover:bg-white/10 transition-all">
                  Request API Key
               </button>
            </div>
          </div>

          {/* Code Terminal */}
          <div className="relative">
             {/* Glow backdrop */}
             <div className="absolute -inset-10 bg-blue-500/10 blur-[100px] pointer-events-none" />
             
             <div className="relative bg-[#081120] rounded-[2.5rem] border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden">
                {/* Terminal Header */}
                <div className="bg-[#0A192F] px-8 py-6 border-b border-white/5 flex items-center justify-between">
                   <div className="flex items-center gap-8">
                      {(['dispatch', 'claims', 'webhooks'] as const).map(t => (
                        <button 
                          key={t}
                          onClick={() => setActiveTab(t)}
                          className={`text-[11px] font-mono uppercase tracking-widest font-bold transition-colors relative ${
                            activeTab === t ? 'text-[#2F80FF]' : 'text-[#94A3B8] hover:text-white'
                          }`}
                        >
                          {t}.json
                          {activeTab === t && (
                            <motion.div 
                              layoutId="apiTabActive" 
                              className="absolute -bottom-[26px] left-0 right-0 h-[2px] bg-[#2F80FF]" 
                            />
                          )}
                        </button>
                      ))}
                   </div>
                   <button 
                    onClick={handleCopy}
                    className="p-3 hover:bg-white/5 rounded-xl transition-colors text-[#94A3B8] hover:text-white"
                   >
                      {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
                   </button>
                </div>

                {/* Code Area */}
                <div className="p-10 h-[450px] overflow-auto font-mono text-[14px] leading-relaxed no-scrollbar bg-[#081120]">
                   <pre className="text-white/90">
                      <code>{apiExamples[activeTab]}</code>
                   </pre>
                </div>

                {/* Terminal Footer */}
                <div className="bg-[#0A192F]/50 px-8 py-4 border-t border-white/5 flex items-center justify-between">
                   <div className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-widest font-bold">API v1.4.2 // Latency: 24ms</span>
                   </div>
                   <div className="flex gap-4">
                      <div className="text-[10px] font-mono text-blue-400 uppercase font-bold cursor-pointer hover:text-blue-300">System Status</div>
                      <div className="text-[10px] font-mono text-white/20 uppercase font-bold">SHA: 8k2l3m4</div>
                   </div>
                </div>
             </div>

             {/* Webhook Events Sidebar */}
             <motion.div 
               initial={{ x: 20, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               className="absolute top-20 -right-20 bg-[#0A192F]/90 backdrop-blur-3xl border border-white/10 p-6 rounded-3xl w-72 shadow-2xl z-20 hidden xl:block"
             >
                <div className="text-[11px] font-black text-white uppercase tracking-widest mb-6 flex items-center gap-2">
                   <Zap className="w-4 h-4 text-[#2F80FF]" /> Webhook Events
                </div>
                <div className="space-y-4">
                   {[
                     'dispatch.created', 'incident.updated', 'status.changed', 
                     'vendor.assigned', 'dispatch.completed', 'claim.closed'
                   ].map((evt, i) => (
                     <div key={i} className="flex items-center justify-between group cursor-pointer">
                        <span className="text-[10px] font-mono text-[#94A3B8] group-hover:text-white transition-colors">{evt}</span>
                        <ChevronRight className="w-3 h-3 text-white/10 group-hover:text-[#2F80FF] transition-all" />
                     </div>
                   ))}
                </div>
                <button className="w-full mt-8 py-3 text-[9px] font-black text-[#2F80FF] uppercase tracking-widest border border-[#2F80FF]/20 rounded-xl hover:bg-[#2F80FF]/10 transition-colors">
                   View All Events
                </button>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
