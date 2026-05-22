'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Code, Terminal, Zap, Shield, Copy, Check, Activity, Globe, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useTireStats } from '../hooks/use-tire-stats';

const tabs = [
  { id: 'json', label: 'JSON', icon: Terminal },
  { id: 'rest', label: 'REST API', icon: Code },
  { id: 'webhooks', label: 'Webhooks', icon: Zap },
  { id: 'sdks', label: 'SDKs', icon: Cpu },
  { id: 'monitor', label: 'API Monitoring', icon: Activity }
];

export const TireAPI = () => {
  const [activeTab, setActiveTab] = useState('json');
  const [copied, setCopied] = useState(false);
  const { stats } = useTireStats();

  const codeSnippets: Record<string, string> = {
    json: `{
  "service_type": "tire_change_assistance",
  "customer": {
    "name": "John Doe",
    "phone": "+1-555-123-4567"
  },
  "location": {
    "lat": 40.7128,
    "lng": -74.0060,
    "vehicle_id": "9a8b7"
  }
}`,
    rest: `curl --request POST \\
  --url https://api.nationwidetrans.com/v1/tire-assistance \\
  --header 'Authorization: Bearer {YOUR_API_KEY}' \\
  --header 'Content-Type: application/json' \\
  --data '{
    "service_type": "tire_change_assistance",
    "customer": {
      "name": "John Doe",
      "phone": "+1-555-123-4567"
    },
    "location": {
      "lat": 40.7128,
      "lng": -74.0060
    }
  }'`,
    webhooks: `{
  "event": "tire.assistance.requested",
  "created": 1625097600,
  "data": {
    "id": "T-9214",
    "status": "pending",
    "location": { "lat": 40.7128, "lng": -74.0060 }
  }
}`,
    sdks: `import { NTIClient } from '@Nationwide Roadside Assist/sdk';

const client = new NTIClient('YOUR_API_KEY');

const dispatch = await client.dispatch.requestTireService({
  lat: 40.7128,
  lng: -74.0060,
  customerName: 'John Doe'
});`,
    monitor: `// Live Monitoring Status
{
  "uptime": "99.99%",
  "avg_latency": "186ms",
  "total_requests_24h": 12400,
  "status": "operational"
}`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 relative bg-brand-bg overflow-hidden border-t border-brand-border">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="h-[1px] w-8 bg-[#2F80FF]" />
                <span className="text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.3em]">Developer Infrastructure</span>
              </motion.div>
              <h2 className="text-4xl lg:text-5xl font-black text-foreground dark:text-white tracking-tight leading-tight">
                Developer <span className="text-[#2F80FF]">API Infrastructure</span>
              </h2>
              <p className="text-base lg:text-lg text-brand-slate leading-relaxed font-medium">
                The Nationwide Roadside Assist API-first core allows you to programmatically request and track tire assistance services directly within your own ERP, fleet management, or claim portal.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
               <div className="p-4 bg-white/[0.03] border border-brand-border rounded-xl">
                  <p className="text-[9px] font-black text-brand-slate uppercase tracking-widest mb-2">Requests (24h)</p>
                  <p className="text-2xl font-black text-foreground dark:text-white font-mono">12.4K</p>
                  <p className="text-[9px] font-bold text-emerald-400 mt-1 font-mono">+16.6%</p>
               </div>
               <div className="p-4 bg-white/[0.03] border border-brand-border rounded-xl">
                  <p className="text-[9px] font-black text-brand-slate uppercase tracking-widest mb-2">Success Rate</p>
                  <p className="text-2xl font-black text-foreground dark:text-white font-mono">99.6%</p>
                  <p className="text-[9px] font-bold text-emerald-400 mt-1 font-mono">+0.8%</p>
               </div>
               <div className="p-4 bg-white/[0.03] border border-brand-border rounded-xl">
                  <p className="text-[9px] font-black text-brand-slate uppercase tracking-widest mb-2">Avg Response</p>
                  <p className="text-2xl font-black text-foreground dark:text-white font-mono">186ms</p>
                  <p className="text-[9px] font-bold text-[#2F80FF] mt-1 font-mono">-12.4%</p>
               </div>
               <div className="p-4 bg-white/[0.03] border border-brand-border rounded-xl">
                  <p className="text-[9px] font-black text-brand-slate uppercase tracking-widest mb-2">Active Integrations</p>
                  <p className="text-2xl font-black text-foreground dark:text-white font-mono">512</p>
                  <p className="text-[9px] font-bold text-[#2F80FF] mt-1 font-mono">+32</p>
               </div>
            </div>

            <div className="space-y-4">
               <p className="text-[10px] font-black text-brand-slate uppercase tracking-widest">Recent Webhook Events</p>
               <div className="space-y-2">
                  {[
                    { event: 'tire.assistance.requested', time: '2 sec ago' },
                    { event: 'technician.assigned', time: '8 sec ago' },
                    { event: 'technician.enroute', time: '1 min ago' },
                    { event: 'service.completed', time: '3 min ago' }
                  ].map((e, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-white/[0.02] border border-brand-border rounded-lg">
                       <div className="flex items-center gap-3">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#2F80FF] shadow-[0_0_5px_#2F80FF]" />
                          <span className="text-[10px] font-mono text-foreground dark:text-white">{e.event}</span>
                       </div>
                       <span className="text-[9px] font-mono text-brand-slate">{e.time}</span>
                    </div>
                  ))}
               </div>
               <Button variant="link" className="text-[#2F80FF] p-0 h-auto text-[10px] font-black uppercase tracking-widest hover:text-[#2F80FF]/80">View All Events</Button>
            </div>
          </div>

          {/* Right Code Panel */}
          <div className="lg:col-span-7">
             <GlassPanel className="p-0 border-brand-border bg-brand-navy shadow-2xl overflow-hidden min-h-[550px] flex flex-col">
                <div className="px-6 py-4 bg-white/[0.02] border-b border-brand-border flex items-center justify-between">
                   <div className="flex gap-4">
                      {tabs.map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${
                            activeTab === tab.id 
                              ? 'bg-[#2F80FF]/10 text-[#2F80FF] border border-[#2F80FF]/30' 
                              : 'text-brand-slate hover:text-foreground dark:text-white'
                          }`}
                        >
                          <tab.icon className="h-3 w-3" />
                          {tab.label}
                        </button>
                      ))}
                   </div>
                   <button 
                     onClick={handleCopy}
                     className="p-2 hover:bg-white/5 rounded-lg text-brand-slate transition-colors"
                   >
                      {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                   </button>
                </div>
                
                <div className="p-8 flex-grow relative overflow-auto">
                   <pre className="font-mono text-[13px] leading-relaxed text-[#2F80FF]/80">
                      <code>{codeSnippets[activeTab]}</code>
                   </pre>
                   
                   {/* HUD Decoration */}
                   <div className="absolute top-4 right-4 opacity-10">
                      <Terminal className="h-32 w-32" />
                   </div>
                </div>

                <div className="px-8 py-4 bg-white/[0.02] border-t border-brand-border flex items-center justify-between">
                   <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="h-6 w-6 rounded-full border-2 border-brand-navy bg-brand-bg flex items-center justify-center text-[8px] font-black">
                            {['JS', 'PY', 'GO'][i-1]}
                          </div>
                        ))}
                      </div>
                      <span className="text-[9px] font-bold text-brand-slate uppercase tracking-widest">Multi-language SDKs Ready</span>
                   </div>
                   <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30 text-[9px] font-black tracking-widest">STABLE v1.4.2</Badge>
                </div>
             </GlassPanel>
          </div>

        </div>
      </div>
    </section>
  );
};
