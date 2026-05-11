'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';
import { APIBlock } from '@/components/ui/api-block';
import { Terminal, ShieldCheck, Zap, Copy, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const APIInfrastructure = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <GlassPanel className="p-0 overflow-hidden bg-[#0A192F]/80 border-white/10 shadow-2xl">
                <div className="bg-white/[0.03] px-6 py-3 border-b border-white/5 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-rose-500/20 border border-rose-500/40" />
                    <div className="h-3 w-3 rounded-full bg-amber-500/20 border border-amber-500/40" />
                    <div className="h-3 w-3 rounded-full bg-emerald-500/20 border border-emerald-500/40" />
                  </div>
                  <div className="text-[10px] font-mono text-brand-slate uppercase tracking-widest">dispatch.v1.post</div>
                </div>
                <div className="p-6">
                  <APIBlock 
                    method="POST"
                    endpoint="/api/v1/dispatch"
                    code={`{
  "incident_type": "heavy_recovery",
  "priority": "critical",
  "telemetry": {
    "lat": 40.7128,
    "lng": -74.0060,
    "vin": "1A2B3C..."
  },
  "constraints": {
    "eta_limit": 15,
    "vendor_role": "tier_1"
  }
}`}
                  />
                </div>
              </GlassPanel>
              
              {/* Floating Response Card */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-12 -right-8 w-64"
              >
                <GlassPanel className="p-4 bg-brand-navy border-brand-blue/30 shadow-2xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="h-3 w-3 text-brand-blue" />
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">Mesh Response</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px]">
                      <span className="text-brand-slate">Dispatch ID</span>
                      <span className="text-white font-mono">INC-9214</span>
                    </div>
                    <div className="flex justify-between text-[10px]">
                      <span className="text-brand-slate">ETA</span>
                      <span className="text-emerald-400 font-mono">11m 42s</span>
                    </div>
                  </div>
                </GlassPanel>
              </motion.div>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20">
              <Terminal className="h-4 w-4 text-brand-blue" />
              <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest">API-First Core</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Built for <span className="text-brand-blue">Engineers</span>, Engineered for Scale.
            </h2>
            <p className="text-brand-slate text-lg leading-relaxed">
              Nationwide Trans is a purely programmatic infrastructure. No complex portals required. Integrate directly into your existing claim or fleet systems using our high-performance REST and GraphQL APIs.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/5">
                  <ShieldCheck className="h-5 w-5 text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">OAuth 2.0 Security</h4>
                  <p className="text-[10px] text-brand-slate uppercase tracking-widest">Enterprise Auth Mesh</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/5">
                  <Zap className="h-5 w-5 text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Real-time Webhooks</h4>
                  <p className="text-[10px] text-brand-slate uppercase tracking-widest">HTTP Push Architecture</p>
                </div>
              </div>
            </div>
            <div className="pt-4 flex gap-4">
              <Link href="/api-docs">
                <Button className="bg-brand-blue text-white font-bold h-12 px-8 uppercase tracking-widest">Documentation</Button>
              </Link>
              <Button variant="outline" className="border-white/10 text-white h-12 px-8 uppercase tracking-widest">Get API Key</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
