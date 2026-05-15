'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, 
  Code, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  Globe, 
  ShieldCheck, 
  Cpu, 
  Zap,
  Copy
} from 'lucide-react';

const tabs = [
  { id: 'fleet', label: 'Fleet API' },
  { id: 'dispatch', label: 'Dispatch API' },
  { id: 'telemetry', label: 'Telemetry API' },
  { id: 'webhooks', label: 'Webhook Events' },
];

const codeSamples = {
  fleet: {
    method: 'GET',
    path: '/v1/fleet/VH-782910',
    code: `{
  "id": "VH-782910",
  "status": "active",
  "type": "box-truck",
  "location": {
    "lat": 33.7490,
    "lng": -84.3880
  },
  "telemetry": {
    "speed": 65,
    "fuel": 82
  }
}`
  },
  dispatch: {
    method: 'POST',
    path: '/v1/dispatch',
    code: `{
  "vehicleId": "VH-782910",
  "incidentType": "Tire Service",
  "location": {
    "lat": 33.7490,
    "lng": -84.3880
  },
  "priority": "High",
  "customerRef": "RNT-99821"
}`
  },
  telemetry: {
    method: 'GET',
    path: '/v1/telemetry/stream',
    code: `{
  "event": "telemetry.pulse",
  "timestamp": "2026-05-13T09:48:00Z",
  "data": {
    "coordinates": [33.74, -84.38],
    "velocity": 42.5,
    "heading": 182
  }
}`
  },
  webhooks: {
    method: 'POST',
    path: '/v1/webhooks',
    code: `{
  "url": "https://api.yourdomain.com/hooks",
  "events": [
    "dispatch.created",
    "dispatch.completed"
  ]
}`
  }
};

const webhookEvents = [
  { id: '1', name: 'dispatch.created', active: true },
  { id: '2', name: 'dispatch.assigned', active: true },
  { id: '3', name: 'dispatch.enroute', active: false },
  { id: '4', name: 'dispatch.completed', active: false },
  { id: '5', name: 'incident.updated', active: false },
  { id: '6', name: 'vendor.status', active: false },
];

export const FleetAPISection = () => {
  const [activeTab, setActiveTab] = useState('dispatch');

  return (
    <section className="relative z-10 py-24 md:py-32 bg-brand-bg overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1450px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ── LEFT COLUMN: VALUE PROP ────────────────────── */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-6 tracking-tight">
                API Infrastructure
              </h2>
              <p className="text-brand-slate text-lg leading-relaxed mb-8">
                Powerful, secure, and scalable APIs that integrate fleet operations, dispatch workflows, and telemetry directly into your systems.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  'RESTful APIs', 
                  'Webhook Events', 
                  'Real-time Telemetry', 
                  'Sandbox Environment', 
                  'SDKs & Libraries'
                ].map((feature, i) => (
                  <motion.div 
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#2F80FF]" />
                    <span className="text-foreground dark:text-white/90 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <button className="px-8 py-4 bg-[#2F80FF] hover:bg-[#1E4BA3] text-foreground dark:text-white font-bold rounded-xl transition-all shadow-[0_0_30px_rgba(47,128,255,0.3)] flex items-center gap-2 group">
                View API Docs
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>

          {/* ── CENTER PANEL: API EXPLORER ──────────────────── */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#030812] border border-brand-border rounded-2xl overflow-hidden shadow-2xl relative z-10"
            >
              {/* Tab Header */}
              <div className="flex bg-white/5 border-b border-brand-border overflow-x-auto no-scrollbar">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-5 py-4 text-xs font-bold transition-all whitespace-nowrap relative ${
                      activeTab === tab.id ? 'text-[#2F80FF]' : 'text-brand-slate hover:text-foreground dark:text-white'
                    }`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div 
                        layoutId="activeTab" 
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2F80FF]" 
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Code Area */}
              <div className="p-6 font-mono">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      codeSamples[activeTab as keyof typeof codeSamples].method === 'POST' 
                        ? 'bg-emerald-500/10 text-emerald-400' 
                        : 'bg-[#2F80FF]/10 text-[#2F80FF]'
                    }`}>
                      {codeSamples[activeTab as keyof typeof codeSamples].method}
                    </span>
                    <span className="text-xs text-foreground dark:text-white/50">
                      {codeSamples[activeTab as keyof typeof codeSamples].path}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="px-2 py-1 rounded bg-white/5 text-[9px] text-foreground dark:text-white/40 border border-brand-border flex items-center gap-1 cursor-pointer hover:bg-white/10 transition-colors">
                      curl <ChevronRight className="w-2.5 h-2.5 rotate-90" />
                    </div>
                    <Copy className="w-3.5 h-3.5 text-foreground dark:text-white/30 hover:text-foreground dark:text-white transition-colors cursor-pointer" />
                  </div>
                </div>

                <div className="text-[13px] leading-relaxed overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.pre
                      key={activeTab}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="text-brand-slate"
                    >
                      {codeSamples[activeTab as keyof typeof codeSamples].code.split('\n').map((line, i) => (
                        <div key={i} className="flex">
                          <span className="w-6 shrink-0 text-foreground dark:text-white/10 text-[10px] select-none">{i + 1}</span>
                          <span dangerouslySetInnerHTML={{ 
                            __html: line
                              .replace(/"([^"]+)":/g, '<span class="text-foreground dark:text-white">$1</span>:')
                              .replace(/: "([^"]+)"/g, ': <span class="text-emerald-400">"$1"</span>')
                              .replace(/: ([\d.-]+)/g, ': <span class="text-[#FF7A1A]">$1</span>')
                          }} />
                        </div>
                      ))}
                    </motion.pre>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#2F80FF]/5 blur-[100px] rounded-full pointer-events-none" />
          </div>

          {/* ── RIGHT PANEL: WEBHOOK EVENTS ─────────────────── */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#030812]/50 border border-brand-border rounded-2xl p-6 shadow-xl relative"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-bold text-foreground dark:text-white">Webhook Events</h3>
                <div className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[9px] font-bold border border-emerald-500/20">
                  LIVE
                </div>
              </div>

              <div className="space-y-3">
                {webhookEvents.map((event, i) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between group cursor-default"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className={`w-1.5 h-1.5 rounded-full ${event.active ? 'bg-emerald-500 shadow-[0_0_8px_#10B981]' : 'bg-white/10'}`} />
                        {event.active && (
                          <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping opacity-50" />
                        )}
                      </div>
                      <span className="text-[11px] font-mono text-brand-slate group-hover:text-foreground dark:text-white transition-colors">
                        {event.name}
                      </span>
                    </div>
                    <ChevronRight className="w-3 h-3 text-foreground dark:text-white/10 group-hover:text-[#2F80FF] transition-colors" />
                  </motion.div>
                ))}
              </div>

              <button className="w-full mt-8 py-2.5 rounded-lg border border-brand-border hover:border-[#2F80FF]/40 text-[10px] font-bold text-brand-slate hover:text-foreground dark:text-white transition-all flex items-center justify-center gap-2 group">
                View All Events
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Grid Texture Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '32px 32px' }} />
    </section>
  );
};
