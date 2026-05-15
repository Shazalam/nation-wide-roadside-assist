'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Copy, Check, Braces, Zap, Shield, Box, Code2 } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Button } from '@/components/ui/button';

const codeExamples = {
  recovery: `curl -X POST https://api.nationwidetrans.com/v1/recovery \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "incident_type": "rollover",
    "vehicle_class": "class_8",
    "location": {
      "lat": 33.7490,
      "lng": -84.3880
    },
    "priority": "high",
    "equipment_needed": ["rotator", "air_cushion"]
  }'`,
  dispatch: `// Real-time dispatch subscription
nti.recovery.subscribe('INC-7821', (event) => {
  if (event.type === 'unit.dispatched') {
    console.log('Unit ID:', event.data.unit_id);
    console.log('Rotator ETA:', event.data.eta_min);
  }
});`,
  webhooks: `{
  "id": "evt_9l2k3m4",
  "type": "recovery.completed",
  "created": 1683902400,
  "data": {
    "incident_id": "INC-7821",
    "duration": "142m",
    "photos_uploaded": 12,
    "billing": {
      "total": 2450.00,
      "currency": "USD"
    }
  }
}`
};

export const APIInfrastructure = () => {
  const [activeTab, setActiveTab] = useState<'recovery' | 'dispatch' | 'webhooks'>('recovery');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExamples[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-32 bg-brand-bg/50 relative z-10 border-t border-brand-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
           
           {/* Left: Content */}
           <div className="lg:col-span-5 space-y-12">
              <div>
                 <motion.div
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   className="px-4 py-1.5 rounded-full bg-[#2F80FF]/10 border border-[#2F80FF]/20 text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.3em] mb-8 inline-block"
                 >
                    Developer Portal
                 </motion.div>
                 <h2 className="text-4xl lg:text-6xl font-black text-foreground dark:text-white tracking-tight leading-tight mb-8">
                    API-First <br />Infrastructure
                 </h2>
                 <p className="text-lg text-brand-slate leading-relaxed font-medium">
                    Powerful APIs and real-time webhooks to integrate recovery operations directly into your logistics, fleet, or insurance platforms.
                 </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                 {[
                   { label: 'Recovery APIs', icon: Braces },
                   { label: 'Dispatch APIs', icon: Zap },
                   { label: 'Incident APIs', icon: Shield },
                   { label: 'Webhooks', icon: Code2 },
                   { label: 'Fleet APIs', icon: Box },
                   { label: 'Tow Unit APIs', icon: Terminal }
                 ].map((feat, i) => (
                   <div key={i} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-[#2F80FF]" />
                      <span className="text-[11px] font-bold text-[#E2E8F0] uppercase tracking-widest">{feat.label}</span>
                   </div>
                 ))}
              </div>

              <Button size="lg" className="bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-foreground dark:text-white font-black h-16 px-10 rounded-2xl shadow-xl flex items-center gap-3">
                 View API Documentation <Code2 className="h-4 w-4" />
              </Button>
           </div>

           {/* Right: Code Terminal */}
           <div className="lg:col-span-7">
              <div className="relative">
                 {/* Glow Effect */}
                 <div className="absolute -inset-10 bg-[#2F80FF]/5 blur-[100px] pointer-events-none" />
                 
                 <GlassPanel className="p-0 border-brand-border bg-brand-bg relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
                    {/* Terminal Header */}
                    <div className="px-8 py-5 border-b border-brand-border bg-white/[0.01] flex items-center justify-between">
                       <div className="flex items-center gap-8">
                          {(['recovery', 'dispatch', 'webhooks'] as const).map(tab => (
                            <button
                              key={tab}
                              onClick={() => setActiveTab(tab)}
                              suppressHydrationWarning
                              className={`text-[11px] font-mono font-bold uppercase tracking-widest transition-colors relative pb-1 ${
                                activeTab === tab ? 'text-[#2F80FF]' : 'text-brand-slate hover:text-foreground dark:text-white'
                              }`}
                            >
                               {tab}.{tab === 'webhooks' ? 'json' : tab === 'dispatch' ? 'ts' : 'sh'}
                               {activeTab === tab && (
                                 <motion.div layoutId="api-tab-active" className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-[#2F80FF]" />
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

                    {/* Terminal Footer */}
                    <div className="px-8 py-4 border-t border-brand-border bg-white/[0.02] flex items-center justify-between">
                       <div className="flex items-center gap-3">
                          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-[9px] font-mono text-brand-slate uppercase tracking-widest">Production Node Active • v4.2.0</span>
                       </div>
                       <div className="flex gap-6">
                          <span className="text-[9px] font-mono text-brand-slate uppercase tracking-widest cursor-pointer hover:text-[#2F80FF] transition-colors">System Status</span>
                          <span className="text-[9px] font-mono text-brand-slate uppercase tracking-widest opacity-20">Secure Link Enabled</span>
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
