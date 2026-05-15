'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Shield, Zap, Database, Activity, Lock, Terminal, BarChart3, Globe } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const categories = [
  {
    title: "Essential Infrastructure",
    desc: "Critical indicator nodes for authentication, load balancing, and dispatch mesh stability.",
    icon: Zap,
    status: "MANDATORY",
    retention: "Session to 1 Year",
    compliance: "ISO 27001"
  },
  {
    title: "Operational Analytics",
    desc: "Monitoring regional dispatch latency, response propagation, and infrastructure load.",
    icon: BarChart3,
    status: "GOVERNED",
    retention: "2 Years",
    compliance: "SOC 2 Type II"
  },
  {
    title: "API Session Management",
    desc: "Maintaining secure programmatic states between enterprise client nodes and the NTI mesh.",
    icon: Terminal,
    status: "ENCRYPTED",
    retention: "1 Hour",
    compliance: "PCI-DSS"
  },
  {
    title: "Authentication Tokens",
    desc: "Verified security credentials ensuring authorized access to mission-critical mobility systems.",
    icon: Lock,
    status: "SECURE",
    retention: "Rolling Refresh",
    compliance: "mTLS Backed"
  },
  {
    title: "Fleet Telemetry Preferences",
    desc: "Localized settings for dispatch visualization, mapping overlays, and regional dashboards.",
    icon: Globe,
    status: "LOCAL",
    retention: "Persistent",
    compliance: "GDPR Ready"
  },
  {
    title: "Performance Monitoring",
    desc: "Observability nodes tracking browser performance and error rates for infrastructure scaling.",
    icon: Activity,
    status: "ACTIVE",
    retention: "14 Days",
    compliance: "High Availability"
  }
];

export const CategoriesDashboard = () => {
  return (
    <section className="py-24 relative bg-brand-bg overflow-hidden border-t border-brand-border">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-[1px] w-8 bg-[#2F80FF]" />
            <span className="text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.3em]">Infrastructure Categorization</span>
            <div className="h-[1px] w-8 bg-[#2F80FF]" />
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-black text-foreground dark:text-white tracking-tight leading-tight">
            Enterprise Cookie <br />
            <span className="text-[#2F80FF]">Taxonomy Dashboard</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {categories.map((cat, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
             >
               <GlassPanel className="p-8 h-full flex flex-col group hover:border-[#2F80FF]/30 transition-all duration-500 relative overflow-hidden">
                  <div className="flex justify-between items-start mb-6">
                    <div className="h-10 w-10 rounded-lg bg-white/[0.03] border border-brand-border flex items-center justify-center group-hover:bg-[#2F80FF]/10 transition-all">
                       <cat.icon className="h-5 w-5 text-[#2F80FF]" />
                    </div>
                    <Badge className="bg-white/[0.03] border-brand-border text-brand-slate text-[8px] font-black tracking-widest uppercase px-2 py-0.5">
                       {cat.compliance}
                    </Badge>
                  </div>
                  
                  <h3 className="text-base font-black text-foreground dark:text-white uppercase tracking-tight mb-4">{cat.title}</h3>
                  <p className="text-[11px] text-brand-slate font-medium leading-relaxed mb-8 flex-grow">
                     {cat.desc}
                  </p>
                  
                  <div className="space-y-4 pt-6 border-t border-brand-border">
                     <div className="flex justify-between items-center">
                        <span className="text-[9px] font-black text-brand-slate uppercase tracking-widest">Retention</span>
                        <span className="text-[10px] font-mono text-[#2F80FF] font-bold">{cat.retention}</span>
                     </div>
                     <div className="flex items-center justify-between">
                        <span className="text-[9px] font-black text-brand-slate uppercase tracking-widest">Node Status</span>
                        <div className="flex items-center gap-2">
                           <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                           <span className="text-[9px] font-black text-foreground dark:text-white uppercase tracking-widest">{cat.status}</span>
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
