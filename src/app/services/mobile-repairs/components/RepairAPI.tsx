'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Copy, Check, Braces, Zap, Shield, Box, Code2 } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Button } from '@/components/ui/button';

const codeExamples = {
  repair: `curl -X POST https://api.nationwidetrans.com/v1/repairs \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "incident_id": "INC-7821",
    "service_type": "tire_repair",
    "priority": "high",
    "location": {
      "lat": 33.7490,
      "lng": -84.3880
    }
  }'`,
  dispatch: `// Real-time dispatch subscription
Nationwide Roadside Assist.repairs.subscribe('INC-7821', (event) => {
  if (event.type === 'technician.assigned') {
    console.log('Assigned Tech:', event.data.tech_name);
    console.log('ETA:', event.data.eta_min);
  }
});`,
  webhooks: `{
  "id": "evt_9l4k8j2",
  "type": "repair.completed",
  "created": 1683902400,
  "data": {
    "incident_id": "INC-7821",
    "technician": "Sarah L.",
    "duration": "24m",
    "billing": {
      "amount": 145.00,
      "currency": "USD"
    }
  }
}`
};

export const RepairAPI = () => {
  const [activeTab, setActiveTab] = useState<'repair' | 'dispatch' | 'webhooks'>('repair');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExamples[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-32 relative z-10 bg-brand-bg/50 border-t border-brand-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
           
           {/* Content */}
           <div className="lg:col-span-5 space-y-12">
              <div>
                 <p className="text-[10px] font-black text-brand-blue uppercase tracking-[0.4em] mb-4">Developer Platform</p>
                 <h2 className="text-4xl lg:text-6xl font-black text-foreground dark:text-white tracking-tight leading-tight mb-8">
                    API-First <br />Infrastructure
                 </h2>
                 <p className="text-lg text-brand-slate leading-relaxed font-medium">
                    Integrate mobile repair operations directly into your systems with our powerful APIs and webhooks. Developer-first tools built for high-scale enterprise mobility.
                 </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                 {[
                   { label: 'Repair APIs', icon: Braces },
                   { label: 'Dispatch APIs', icon: Zap },
                   { label: 'Fleet Tools', icon: Box },
                   { label: 'Webhooks', icon: Shield },
                   { label: 'Fleet APIs', icon: Terminal },
                   { label: 'Real-Time Telemetry', icon: Activity }
                 ].map((feat, i) => (
                   <div key={i} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-brand-blue/40" />
                      <span className="text-[11px] font-bold text-[#E2E8F0] uppercase tracking-widest">{feat.label}</span>
                   </div>
                 ))}
              </div>

              <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-foreground dark:text-white font-black h-14 px-10 rounded-xl shadow-xl flex items-center gap-3 group">
                 View API Documentation <Code2 className="h-4 w-4 group-hover:scale-110 transition-transform" />
              </Button>
           </div>

           {/* Code Panel */}
           <div className="lg:col-span-7">
              <div className="relative">
                 <div className="absolute -inset-10 bg-brand-blue/5 blur-[80px] pointer-events-none" />
                 
                 <GlassPanel className="p-0 border-brand-border bg-brand-bg relative overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
                    {/* Header Tabs */}
                    <div className="px-8 py-5 border-b border-brand-border bg-white/[0.01] flex items-center justify-between">
                       <div className="flex items-center gap-8">
                          {(['repair', 'dispatch', 'webhooks'] as const).map(tab => (
                            <button
                              key={tab}
                              onClick={() => setActiveTab(tab)}
                              className={`text-[11px] font-mono font-bold uppercase tracking-widest transition-colors relative pb-1 ${
                                activeTab === tab ? 'text-brand-blue' : 'text-brand-slate hover:text-foreground dark:text-white'
                              }`}
                            >
                               {tab === 'repair' ? 'repair.sh' : tab === 'dispatch' ? 'dispatch.ts' : 'webhooks.json'}
                               {activeTab === tab && (
                                 <motion.div layoutId="repair-api-tab" className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-brand-blue" />
                               )}
                            </button>
                          ))}
                       </div>
                       <button onClick={handleCopy} suppressHydrationWarning className="text-brand-slate hover:text-foreground dark:text-white transition-colors">
                          {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                       </button>
                    </div>

                    {/* Code Body */}
                    <div className="p-10 h-[450px] overflow-auto font-mono text-[14px] leading-relaxed bg-brand-bg/80">
                       <pre className="text-foreground dark:text-white/80">
                          <code>{codeExamples[activeTab]}</code>
                       </pre>
                    </div>

                    {/* Footer */}
                    <div className="px-8 py-4 border-t border-brand-border bg-white/[0.02] flex items-center justify-between">
                       <div className="flex items-center gap-3">
                          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-[9px] font-mono text-brand-slate uppercase">Production Node Active • v4.2.1</span>
                       </div>
                       <div className="flex gap-6">
                          <span className="text-[9px] font-mono text-brand-slate uppercase cursor-pointer hover:text-brand-blue transition-colors">System Status</span>
                          <span className="text-[9px] font-mono text-foreground dark:text-white/20 uppercase">SECURE SSL</span>
                       </div>
                    </div>
                 </GlassPanel>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};

function Activity(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
}
