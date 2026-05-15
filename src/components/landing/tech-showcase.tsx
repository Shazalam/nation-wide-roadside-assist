'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';
import { KPIWidget } from '@/components/ui/kpi-widget';
import { TelemetryIndicator } from '@/components/ui/telemetry-indicator';
import { Activity, ShieldCheck, Zap, Cpu } from 'lucide-react';

export const TechShowcase = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20">
              <Cpu className="h-4 w-4 text-brand-blue" />
              <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest">Mesh Infrastructure</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground dark:text-white tracking-tight leading-[1.1]">
              The Operating System for <span className="text-brand-blue">Global Mobility</span>
            </h2>
            <p className="text-brand-slate text-lg max-w-xl">
              Our proprietary mesh network coordinates over 50,000 service nodes with sub-second latency, providing real-time visibility into the world's most complex roadside operations.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-brand-border">
                <p className="text-2xl font-bold text-foreground dark:text-white">99.99%</p>
                <p className="text-[10px] text-brand-slate uppercase tracking-widest mt-1">Uptime SLA</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-brand-border">
                <p className="text-2xl font-bold text-foreground dark:text-white">&lt;120ms</p>
                <p className="text-[10px] text-brand-slate uppercase tracking-widest mt-1">Dispatch Latency</p>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Floating Dashboard Elements */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <GlassPanel className="p-6 bg-brand-navy/80 border-brand-border shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Activity className="h-5 w-5 text-brand-blue" />
                    <span className="text-xs font-bold text-foreground dark:text-white uppercase tracking-widest">Global Telemetry</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <div className="h-1.5 w-1.5 rounded-full bg-white/10" />
                    <div className="h-1.5 w-1.5 rounded-full bg-white/10" />
                  </div>
                </div>
                <div className="space-y-4">
                  <TelemetryIndicator label="Dispatch Load" value={84} status="healthy" animate />
                  <TelemetryIndicator label="Network Saturation" value={42} status="healthy" animate />
                  <TelemetryIndicator label="SLA Compliance" value={98} status="healthy" />
                </div>
              </GlassPanel>
            </motion.div>

            {/* Overlapping KPI Card */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute -bottom-10 -right-10 z-20 w-64 hidden md:block"
            >
              <KPIWidget 
                title="Active Nodes" 
                value="12,842" 
                change={14} 
                trend="up" 
                icon={Zap} 
              />
            </motion.div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-blue/10 blur-[100px] rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
