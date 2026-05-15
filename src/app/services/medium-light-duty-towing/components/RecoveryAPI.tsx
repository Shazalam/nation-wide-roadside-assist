'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Globe, Lock, Zap, ArrowRight, CheckCircle2, Terminal } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const apiFeatures = [
  {
    title: 'Automated Dispatch API',
    desc: 'Low-latency REST endpoints for programmatic roadside assistance triggering and vendor assignment.',
    icon: Zap,
    code: 'POST /v1/dispatch/request'
  },
  {
    title: 'Real-time Telemetry Webhooks',
    desc: 'Instant event notifications for dispatch status changes, on-scene arrivals, and job completions.',
    icon: Globe,
    code: 'WEBHOOK: rsa.status.updated'
  },
  {
    title: 'Enterprise Billing Gateway',
    desc: 'Seamless integration with insurance and fleet billing systems for automated financial reconciliation.',
    icon: Lock,
    code: 'GET /v1/billing/reconcile'
  },
  {
    title: 'Vendor Availability Mesh',
    desc: 'Live query engine for real-time light and medium duty vendor density across all US zip codes.',
    icon: Cpu,
    code: 'GET /v1/network/density'
  }
];

export const RecoveryAPI = () => {
  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2F80FF]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.3em]">Developer Infrastructure</span>
              <h2 className="text-3xl md:text-5xl font-black text-foreground dark:text-white tracking-tight leading-tight">
                Roadside Assistance <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F80FF] to-white">API Framework</span>
              </h2>
              <p className="text-brand-slate text-lg font-medium leading-relaxed max-w-xl">
                Integrate nationwide medium and light duty recovery capabilities directly into your fleet management or insurance application.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {apiFeatures.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#2F80FF]/10 rounded-lg">
                      <f.icon className="h-4 w-4 text-[#2F80FF]" />
                    </div>
                    <h4 className="text-sm font-black text-foreground dark:text-white uppercase tracking-wider">{f.title}</h4>
                  </div>
                  <p className="text-xs text-brand-slate font-medium leading-relaxed">{f.desc}</p>
                  <div className="flex items-center gap-2 font-mono text-[9px] text-[#2F80FF]/80 bg-[#2F80FF]/5 p-2 rounded-md border border-[#2F80FF]/10 w-fit">
                    <Terminal className="h-3 w-3" />
                    {f.code}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-6 flex flex-wrap gap-4">
               <button className="px-8 py-4 bg-white text-black font-black text-xs uppercase tracking-widest rounded-xl hover:bg-[#2F80FF] hover:text-foreground dark:text-white transition-all shadow-xl">
                  Documentation Hub
               </button>
               <button className="px-8 py-4 bg-white/5 border border-brand-border text-foreground dark:text-white font-black text-xs uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all">
                  API Playground
               </button>
            </div>
          </div>

          <div className="relative">
            {/* Code Block Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <GlassPanel className="p-0 border-brand-border bg-card/80 shadow-[0_40px_80px_rgba(0,0,0,0.6)] rounded-2xl overflow-hidden">
                <div className="px-6 py-4 border-b border-brand-border bg-white/[0.02] flex items-center justify-between">
                   <div className="flex gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500/50" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                      <div className="h-3 w-3 rounded-full bg-green-500/50" />
                   </div>
                   <span className="text-[10px] font-mono text-brand-slate uppercase tracking-widest">dispatch_request.js</span>
                </div>
                <div className="p-8 font-mono text-sm leading-relaxed overflow-x-auto whitespace-pre text-[#2F80FF]">
{`{
  "api_version": "2026-Q2",
  "operation": "RSA_DISPATCH",
  "parameters": {
    "vehicle_class": "CLASS_2",
    "location": {
      "lat": 34.0522,
      "lng": -118.2437
    },
    "service_type": "TIRE_CHANGE",
    "priority": "URGENT"
  },
  "metadata": {
    "fleet_id": "FL-82910-US",
    "tracking": true
  }
}`}
                </div>
                <div className="p-4 bg-black/40 border-t border-brand-border flex items-center justify-between">
                   <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">200 OK — 142ms</span>
                   </div>
                   <div className="text-[10px] font-mono text-brand-slate">Request ID: rsa_9281...</div>
                </div>
              </GlassPanel>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FF7A1A]/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#2F80FF]/10 blur-[80px] rounded-full pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};
