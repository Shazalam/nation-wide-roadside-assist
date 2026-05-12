'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Box, Globe, Cpu, Activity, ArrowRight, TrendingDown, Clock, Wifi } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Button } from '@/components/ui/button';

const ecosystemCards = [
  {
    title: "Rental Providers",
    kpi: "15m",
    label: "Avg Dispatch ETA",
    icon: Layout,
    desc: "End-to-end vehicle recovery and roadside dispatch for rental fleets nationwide.",
    sla: "99.4%",
    downtime: "-32%",
    color: "brand-blue"
  },
  {
    title: "Logistics Fleets",
    kpi: "99.8%",
    label: "Delivery Uptime",
    icon: Box,
    desc: "Real-time fleet monitoring and predictive maintenance for logistics operations.",
    sla: "99.8%",
    downtime: "-28%",
    color: "emerald-500"
  },
  {
    title: "Commercial Transportation",
    kpi: "40k+",
    label: "Service Nodes",
    icon: Globe,
    desc: "Heavy-duty recovery coordination across commercial transport corridors.",
    sla: "98.9%",
    downtime: "-41%",
    color: "brand-orange"
  },
  {
    title: "Connected Mobility Platforms",
    kpi: "< 2s",
    label: "API Latency",
    icon: Cpu,
    desc: "Telematics-integrated dispatch for connected vehicle platforms and OEM systems.",
    sla: "99.9%",
    downtime: "-22%",
    color: "purple-500"
  },
  {
    title: "Enterprise Fleet Operations",
    kpi: "84%",
    label: "Ops Automation",
    icon: Activity,
    desc: "Fully automated dispatch workflows and SLA intelligence dashboards.",
    sla: "99.2%",
    downtime: "-36%",
    color: "brand-blue"
  },
];

export const IndustryEcosystem = () => {
  return (
    <section className="relative z-10 py-32 bg-white/[0.01]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.3em] mb-4">Ecosystem Network</p>
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 tracking-tight">The Mobility Infrastructure Ecosystem</h2>
            <p className="text-brand-slate text-lg">Specialized operational nodes for every segment of the enterprise transportation landscape.</p>
          </motion.div>
          <Button variant="ghost" className="text-brand-blue font-bold gap-2 hover:bg-brand-blue/5 shrink-0">
            View Full Ecosystem Mesh <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {ecosystemCards.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <GlassPanel className="p-6 border-white/5 bg-brand-navy/40 hover:border-brand-blue/30 transition-all group flex flex-col h-full relative overflow-hidden">
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="h-10 w-10 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-brand-blue/15 transition-all">
                    <item.icon className="h-5 w-5 text-brand-blue" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-[11px] text-brand-slate leading-relaxed mb-5 flex-1">{item.desc}</p>
                  
                  {/* KPI */}
                  <div className="space-y-1 mb-5">
                    <p className="text-3xl font-black text-white">{item.kpi}</p>
                    <p className="text-[9px] font-bold text-brand-slate uppercase tracking-[0.2em]">{item.label}</p>
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3 w-3 text-brand-blue/60" />
                      <div>
                        <p className="text-[8px] text-brand-slate uppercase">SLA</p>
                        <p className="text-[10px] font-bold text-white">{item.sla}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <TrendingDown className="h-3 w-3 text-emerald-500/60" />
                      <div>
                        <p className="text-[8px] text-brand-slate uppercase">Downtime</p>
                        <p className="text-[10px] font-bold text-emerald-400">{item.downtime}</p>
                      </div>
                    </div>
                  </div>

                  {/* API Connectivity */}
                  <div className="pt-4 border-t border-white/5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Wifi className="h-3 w-3 text-brand-blue/50" />
                        <span className="text-[8px] text-brand-slate uppercase tracking-wider">API Connected</span>
                      </div>
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_4px_rgba(16,185,129,0.6)]" />
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden mt-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1.5, delay: i * 0.1 }}
                        className="h-full bg-brand-blue/50"
                      />
                    </div>
                  </div>
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
