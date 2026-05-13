'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Terminal, Code2, Shield, Zap, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';

const codeExamples = {
  mobility: `curl -X POST https://api.nationwidetrans.com/v1/mobility \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "incidentId": "INC-7824",
    "serviceType": "rental_vehicle",
    "pickupLocation": "Orlando, FL",
    "dropoffLocation": "Miami, FL",
    "vehicleType": "standard",
    "customerId": "CUST-45678",
    "priority": "high"
  }'`,
  telemetry: `// WebSocket connection for real-time telemetry
const socket = new WebSocket('wss://stream.nationwidetrans.com/telemetry');

socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  if (data.type === 'ETA_UPDATE') {
    updateDashboard(data.incidentId, data.newEta);
  }
};`
};

export const APIInfrastructure = () => {
  const [activeTab, setActiveTab] = useState<'mobility' | 'telemetry'>('mobility');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExamples[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-brand-bg relative z-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Info */}
          <div>
            <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
              API-First <br />Infrastructure
            </h2>
            <p className="text-[#94A3B8] font-medium text-lg max-w-lg mb-10 leading-relaxed">
              Powerful APIs and real-time webhooks to integrate mobility continuation into your platforms, workflows, and claims systems.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-10">
               {[
                 { label: 'Mobility APIs', icon: Terminal },
                 { label: 'Transportation APIs', icon: Truck },
                 { label: 'Customer APIs', icon: Code2 },
                 { label: 'Webhooks', icon: Zap },
                 { label: 'Authentication', icon: Shield },
                 { label: 'Sandbox Environment', icon: Database }
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded bg-[#2F80FF]/10 flex items-center justify-center border border-[#2F80FF]/20">
                       <Check className="h-3 w-3 text-[#2F80FF]" />
                    </div>
                    <span className="text-[11px] font-bold text-white uppercase tracking-wider">{item.label}</span>
                 </div>
               ))}
            </div>

            <Button size="lg" className="bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-white font-bold px-8 h-12 rounded-xl">
               View API Documentation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Right: Code Block */}
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-r from-[#2F80FF]/20 to-purple-500/20 blur-3xl -z-10 rounded-[3rem]" />
             
             <div className="rounded-2xl border border-white/10 bg-[#0A192F]/90 backdrop-blur-xl overflow-hidden shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
                   <div className="flex gap-4">
                      {(['mobility', 'telemetry'] as const).map(tab => (
                        <button 
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          suppressHydrationWarning
                          className={`text-[11px] font-mono font-bold uppercase tracking-widest transition-colors relative pb-4 -mb-4 ${
                            activeTab === tab ? 'text-[#2F80FF]' : 'text-[#94A3B8] hover:text-white'
                          }`}
                        >
                           {tab === 'mobility' ? 'POST /mobility' : 'WSS /telemetry'}
                           {activeTab === tab && (
                             <motion.div layoutId="api-tab" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2F80FF]" />
                           )}
                        </button>
                      ))}
                   </div>
                   <div className="flex items-center gap-4">
                      <select className="bg-white/5 border border-white/10 rounded-md text-[10px] text-white font-mono px-2 py-1 outline-none">
                         <option>cURL</option>
                         <option>Node.js</option>
                         <option>Python</option>
                      </select>
                      <button onClick={handleCopy} suppressHydrationWarning className="text-[#94A3B8] hover:text-white transition-colors">
                         {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                      </button>
                   </div>
                </div>

                {/* Code Area */}
                <div className="p-6 overflow-x-auto">
                   <pre className="font-mono text-xs leading-relaxed text-[#A3B8CC]">
                      <code>
{activeTab === 'mobility' ? (
<span>
<span className="text-pink-400">curl</span> -X POST https://api.nationwidetrans.com/v1/mobility \
<br/>  -H <span className="text-emerald-300">"Authorization: Bearer YOUR_API_KEY"</span> \
<br/>  -H <span className="text-emerald-300">"Content-Type: application/json"</span> \
<br/>  -d <span className="text-yellow-300">'{'{'}
<br/>    "incidentId": "INC-7824",
<br/>    "serviceType": "rental_vehicle",
<br/>    "pickupLocation": "Orlando, FL",
<br/>    "dropoffLocation": "Miami, FL",
<br/>    "vehicleType": "standard",
<br/>    "customerId": "CUST-45678",
<br/>    "priority": "high"
<br/>  {'}'}'</span>
</span>
) : (
<span>
<span className="text-[#94A3B8] italic">// WebSocket connection for real-time telemetry</span>
<br/><span className="text-purple-400">const</span> socket = <span className="text-purple-400">new</span> <span className="text-[#2F80FF]">WebSocket</span>(<span className="text-emerald-300">'wss://stream.nationwidetrans.com/telemetry'</span>);
<br/><br/>socket.<span className="text-blue-300">onmessage</span> = (event) =&gt; {'{'}
<br/>  <span className="text-purple-400">const</span> data = JSON.<span className="text-blue-300">parse</span>(event.data);
<br/>  <span className="text-purple-400">if</span> (data.type === <span className="text-emerald-300">'ETA_UPDATE'</span>) {'{'}
<br/>    <span className="text-blue-300">updateDashboard</span>(data.incidentId, data.newEta);
<br/>  {'}'}
<br/>{'}'};
</span>
)}
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

// Also adding ArrowRight import that was missing
import { ArrowRight, Truck } from 'lucide-react';
