'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, ArrowRight } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Button } from '@/components/ui/button';

const features = [
  "OAuth 2.0 Auth", "Real-time Webhooks", "Idempotent APIs",
  "Multi-region SDKs", "Sandbox Testing", "Event Streams",
];

const apiEndpoints = [
  { method: 'POST', path: '/v2/dispatches', desc: 'Create fleet dispatch event' },
  { method: 'GET', path: '/v2/fleet/:id/telemetry', desc: 'Vehicle telemetry stream' },
  { method: 'POST', path: '/v2/vendors/assign', desc: 'Intelligent vendor routing' },
  { method: 'GET', path: '/v2/analytics/regional', desc: 'Regional performance data' },
  { method: 'POST', path: '/v2/webhooks', desc: 'Register webhook endpoints' },
  { method: 'GET', path: '/v2/vendors/:id/availability', desc: 'Vendor availability check' },
];

export const FleetAPISection = () => {
  return (
    <section className="relative z-10 py-32">
      <div className="container mx-auto px-4">
        <GlassPanel className="bg-[#0A192F]/80 border-white/10 p-8 lg:p-14 xl:p-20 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 xl:gap-20 items-start">
            {/* Left Side */}
            <div className="lg:col-span-5 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/20">
                <Terminal className="h-4 w-4 text-brand-blue" />
                <span className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.2em]">Developer Hub</span>
              </div>
              <h2 className="text-3xl lg:text-5xl xl:text-6xl font-black text-white leading-tight">API-First <br />Fleet Operations</h2>
              <p className="text-brand-slate text-lg leading-relaxed">
                Integrate nationwide recovery and roadside dispatch directly into your fleet management platforms with our robust REST infrastructure.
              </p>

              {/* API Endpoints */}
              <div className="space-y-2">
                <p className="text-[9px] font-bold text-brand-slate uppercase tracking-[0.3em] mb-3">Fleet API Endpoints</p>
                {apiEndpoints.map((ep) => (
                  <motion.div 
                    key={ep.path + ep.method} 
                    whileHover={{ borderColor: 'rgba(47,128,255,0.25)', x: 2 }}
                    className="flex items-center gap-3 p-2.5 rounded-lg bg-white/[0.02] border border-white/5 transition-all group cursor-default"
                  >
                    <span className={`text-[8px] font-bold font-mono px-2 py-0.5 rounded shrink-0 ${ep.method === 'POST' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-brand-blue/10 text-brand-blue'}`}>
                      {ep.method}
                    </span>
                    <span className="text-[10px] font-mono text-white/80 flex-1 truncate">{ep.path}</span>
                    <span className="text-[8px] text-brand-slate hidden sm:block shrink-0">{ep.desc}</span>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-brand-blue shadow-[0_0_6px_#2F80FF]" />
                    <span className="text-[12px] text-white/80 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button className="bg-brand-blue text-white font-bold gap-2 rounded-xl h-13 px-7 hover:shadow-[0_0_30px_rgba(47,128,255,0.4)] transition-all hover:scale-[1.03]">
                  Explore Fleet Documentation <Code className="h-4 w-4" />
                </Button>
                <Button variant="ghost" className="text-brand-blue border border-brand-blue/20 hover:bg-brand-blue/5 font-bold gap-2 rounded-xl h-13 px-7">
                  SDK Reference <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Right Side: Code Block */}
            <div className="lg:col-span-7 space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-[#030812] border border-white/10 shadow-2xl overflow-hidden"
              >
                <div className="flex items-center justify-between px-5 py-3.5 bg-white/[0.03] border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-rose-500/40" />
                    <div className="h-2.5 w-2.5 rounded-full bg-amber-500/40" />
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/40" />
                  </div>
                  <span className="text-[9px] font-mono text-brand-slate uppercase tracking-widest">create_dispatch.ts</span>
                </div>
                <div className="p-6 lg:p-8 font-mono text-[13px] leading-[1.9] overflow-x-auto">
                  <pre className="text-brand-slate">
<span className="text-purple-400">import</span> <span className="text-white">{'{ NationwideTrans }'}</span> <span className="text-purple-400">from</span> <span className="text-emerald-400">&apos;@nwt/sdk&apos;</span>;{'\n'}
{'\n'}
<span className="text-purple-400">const</span> <span className="text-white">nwt</span> = <span className="text-purple-400">new</span> <span className="text-brand-blue">NationwideTrans</span>(process.env.<span className="text-amber-400">NWT_SECRET</span>);{'\n'}
{'\n'}
<span className="text-purple-400">const</span> <span className="text-white">dispatch</span> = <span className="text-purple-400">await</span> nwt.dispatches.<span className="text-amber-400">create</span>({'{'}
{'\n'}  <span className="text-white">fleet_id</span>: <span className="text-emerald-400">&apos;FLEET-8291-TX&apos;</span>,
{'\n'}  <span className="text-white">vehicle</span>: {'{'}
{'\n'}    <span className="text-white">vin</span>: <span className="text-emerald-400">&apos;1N4AL3AP5KC...&apos;</span>,
{'\n'}    <span className="text-white">type</span>: <span className="text-emerald-400">&apos;light-duty&apos;</span>
{'\n'}  {'}'},
{'\n'}  <span className="text-white">location</span>: {'{'}
{'\n'}    <span className="text-white">lat</span>: <span className="text-brand-orange">32.7767</span>,
{'\n'}    <span className="text-white">lng</span>: <span className="text-brand-orange">-96.7970</span>,
{'\n'}    <span className="text-white">address</span>: <span className="text-emerald-400">&apos;Downtown Dallas, TX&apos;</span>
{'\n'}  {'}'},
{'\n'}  <span className="text-white">service_type</span>: <span className="text-emerald-400">&apos;roadside_recovery&apos;</span>,
{'\n'}  <span className="text-white">priority</span>: <span className="text-emerald-400">&apos;high_priority&apos;</span>
{'\n'}{'}'});{'\n'}
{'\n'}
console.<span className="text-amber-400">log</span>(<span className="text-emerald-400">{`\`Dispatch active: \${dispatch.id}\``}</span>);
                  </pre>
                </div>
              </motion.div>

              {/* Response Preview */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="rounded-2xl bg-[#030812] border border-white/5 p-5 font-mono text-xs"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[8px] font-bold bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded">200 OK</span>
                  <span className="text-[8px] text-brand-slate">Response • 42ms</span>
                </div>
                <pre className="text-brand-slate leading-relaxed">
{`{
  "id": "dsp_9x8f7g6h5j4k",
  "status": "dispatched",
  "vendor": {
    "id": "RYDER-TX-1042",
    "eta_minutes": 14,
    "distance_miles": 8.2
  },
  "sla_target": "25min",
  "created_at": "2026-05-12T06:30:00Z"
}`}
                </pre>
              </motion.div>

              {/* Webhook Event */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="rounded-2xl bg-[#030812] border border-white/5 p-5 font-mono text-xs"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[8px] font-bold bg-brand-blue/10 text-brand-blue px-2 py-0.5 rounded">WEBHOOK</span>
                  <span className="text-[8px] text-brand-slate">dispatch.status.updated</span>
                </div>
                <pre className="text-brand-slate leading-relaxed">
{`{
  "event": "dispatch.status.updated",
  "dispatch_id": "dsp_9x8f7g6h5j4k",
  "status": "vendor_en_route",
  "eta_minutes": 12
}`}
                </pre>
              </motion.div>
            </div>
          </div>

          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 blur-[120px] rounded-full -mr-64 -mt-64 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-blue/3 blur-[100px] rounded-full -ml-32 -mb-32 pointer-events-none" />
        </GlassPanel>
      </div>
    </section>
  );
};
