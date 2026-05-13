'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Terminal, Code2, Shield, Zap, Database, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const codeExamples = {
  vendor: `curl -X POST https://api.nationwidetrans.com/v1/dispatch \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "incidentId": "INC-7821",
    "serviceType": "towing",
    "vehicleClass": "Class_8",
    "pickupLocation": "Atlanta, GA",
    "dropLocation": "Macon, GA",
    "priority": "high"
  }'`,
  telemetry: `// WebSocket connection for real-time telemetry
const socket = new WebSocket('wss://stream.nationwidetrans.com/vendor-telemetry');

socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  if (data.type === 'VENDOR_ACCEPTED') {
    assignVendor(data.incidentId, data.vendorDetails);
  }
};`
};

export const APIInfrastructure = () => {
  const [activeTab, setActiveTab] = useState<'vendor' | 'telemetry'>('vendor');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExamples[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-[#0A192F]/40 relative z-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Info */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight mb-6">
              API-Infrastructure
            </h2>
            <p className="text-[#94A3B8] font-medium text-sm max-w-md mb-10 leading-relaxed">
              Power your systems with our robust APIs.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
               {[
                 { label: 'Vendor Management API' },
                 { label: 'Dispatch API' },
                 { label: 'Telemetry API' },
                 { label: 'SLA & Analytics API' },
                 { label: 'Webhooks' },
                 { label: 'Real-Time Updates' }
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-[#2F80FF] flex items-center justify-center">
                       <Check className="h-2.5 w-2.5 text-white" />
                    </div>
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">{item.label}</span>
                 </div>
               ))}
            </div>

            <Button size="lg" suppressHydrationWarning className="bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-white font-bold h-10 px-6 rounded-lg text-xs">
               View API Documentation <ArrowRight className="ml-2 h-3 w-3" />
            </Button>
          </div>

          {/* Right: Code Block */}
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-r from-[#2F80FF]/10 to-transparent blur-3xl -z-10 rounded-[3rem]" />
             
             <div className="rounded-xl border border-white/10 bg-[#081120] overflow-hidden shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                   <div className="flex gap-4">
                      <button onClick={() => setActiveTab('vendor')} suppressHydrationWarning className={`text-[9px] font-bold uppercase tracking-widest transition-colors relative pb-3 -mb-3 ${activeTab === 'vendor' ? 'text-white' : 'text-[#94A3B8] hover:text-white'}`}>Vendor API {activeTab==='vendor' && <motion.div layoutId="apitab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2F80FF]" />}</button>
                      <button suppressHydrationWarning className={`text-[9px] font-bold uppercase tracking-widest transition-colors text-[#94A3B8] hover:text-white pb-3 -mb-3`}>Dispatch API</button>
                      <button onClick={() => setActiveTab('telemetry')} suppressHydrationWarning className={`text-[9px] font-bold uppercase tracking-widest transition-colors relative pb-3 -mb-3 ${activeTab === 'telemetry' ? 'text-white' : 'text-[#94A3B8] hover:text-white'}`}>Telemetry API {activeTab==='telemetry' && <motion.div layoutId="apitab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2F80FF]" />}</button>
                      <button suppressHydrationWarning className={`text-[9px] font-bold uppercase tracking-widest transition-colors text-[#94A3B8] hover:text-white pb-3 -mb-3`}>Webhooks</button>
                   </div>
                   <div className="flex items-center gap-3">
                      <select className="bg-white/5 border border-white/10 rounded text-[9px] text-white font-mono px-2 py-1 outline-none">
                         <option>curl</option>
                      </select>
                      <button onClick={handleCopy} suppressHydrationWarning className="text-[#94A3B8] hover:text-white transition-colors">
                         {copied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                      </button>
                   </div>
                </div>

                {/* Code Area */}
                <div className="p-4 overflow-x-auto">
                   <pre className="font-mono text-[10px] leading-relaxed text-[#A3B8CC]">
                      <code>
{activeTab === 'vendor' ? (
<span>
<span className="text-pink-400">curl</span> -X POST https://api.nationwidetrans.com/v1/dispatch \
<br/>  -H <span className="text-emerald-300">"Content-Type: application/json"</span> \
<br/>  -H <span className="text-emerald-300">"Authorization: Bearer YOUR_API_KEY"</span> \
<br/>  -d <span className="text-yellow-300">'{'{'}
<br/>    "incidentId": "INC-7821",
<br/>    "serviceType": "towing",
<br/>    "vehicleClass": "Class_8",
<br/>    "pickupLocation": "Atlanta, GA",
<br/>    "dropLocation": "Macon, GA",
<br/>    "priority": "high"
<br/>  {'}'}'</span>
</span>
) : (
<span>
<span className="text-[#94A3B8] italic">// WebSocket connection for real-time telemetry</span>
<br/><span className="text-purple-400">const</span> socket = <span className="text-purple-400">new</span> <span className="text-[#2F80FF]">WebSocket</span>(<span className="text-emerald-300">'wss://stream.nationwidetrans.com/vendor-telemetry'</span>);
<br/><br/>socket.<span className="text-blue-300">onmessage</span> = (event) =&gt; {'{'}
<br/>  <span className="text-purple-400">const</span> data = JSON.<span className="text-blue-300">parse</span>(event.data);
<br/>  <span className="text-purple-400">if</span> (data.type === <span className="text-emerald-300">'VENDOR_ACCEPTED'</span>) {'{'}
<br/>    <span className="text-blue-300">assignVendor</span>(data.incidentId, data.vendorDetails);
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
