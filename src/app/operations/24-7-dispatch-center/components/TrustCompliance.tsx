'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Lock, CreditCard, Globe, Wrench, 
  FileSearch, Users, Server, DatabaseBackup, CheckCircle2, 
  Radio, Compass, Activity
} from 'lucide-react';

const trustModules = [
  {
    title: 'Enterprise-Grade Security',
    code: 'SEC-ENTSEC',
    description: 'Enterprise operational controls designed for secure dispatch workflows and protected infrastructure access.',
    icon: Lock,
    status: 'AUDITED & ACTIVE',
    statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    metric: 'Uptime: 100%',
  },
  {
    title: 'DOT Certified Network',
    code: 'COMP-DOT',
    description: 'Roadside coordination systems aligned with commercial transportation operational standards.',
    icon: ShieldCheck,
    status: 'FULLY COMPLIANT',
    statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    metric: 'SLA Match: 99.8%',
  },
  {
    title: 'Secure Payment Processing',
    code: 'FIN-PAYSEC',
    description: 'Secure payment handling infrastructure for roadside transactions and fleet operations.',
    icon: CreditCard,
    status: 'COMPLIANT v4.0',
    statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    metric: 'Encryption: AES-256',
  },
  {
    title: 'Nationwide Dispatch Operations',
    code: 'OPS-247',
    description: '24/7 dispatch infrastructure supporting large-scale roadside coordination across North America.',
    icon: Globe,
    status: 'ONLINE',
    statusColor: 'text-[#2F80FF] bg-[#2F80FF]/10 border-[#2F80FF]/20',
    metric: 'Active Nodes: 59k+',
  },
  {
    title: 'Heavy-Duty Recovery',
    code: 'OPS-HDR',
    description: 'Commercial recovery coordination systems for Class 1–8 roadside and towing operations.',
    icon: Wrench,
    status: 'CERTIFIED VENDORS',
    statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    metric: 'Classes: 1-8 Heavy',
  },
  {
    title: 'Cross-Border Dispatch',
    code: 'OPS-INT',
    description: 'Integrated USA & Canada roadside escalation and mobility routing infrastructure.',
    icon: Compass,
    status: 'MULTI-REGION',
    statusColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    metric: 'Regions: USA/CAN',
  }
];

const capabilities = [
  {
    title: 'Audit Logging',
    description: 'Centralized operational event logging for dispatch traceability and enterprise oversight.',
    icon: FileSearch,
  },
  {
    title: 'Role-Based Access',
    description: 'Granular permission systems controlling operational visibility and dispatch management.',
    icon: Users,
  },
  {
    title: 'Operational Redundancy',
    description: 'High-availability infrastructure ensuring uninterrupted roadside dispatch continuity.',
    icon: Server,
  },
  {
    title: 'Disaster Recovery Systems',
    description: 'Failover architecture designed to maintain operational uptime during critical incidents.',
    icon: DatabaseBackup,
  },
  {
    title: 'Vendor Verification Workflows',
    description: 'Structured provider validation systems for secure roadside vendor coordination.',
    icon: CheckCircle2,
  },
  {
    title: 'Emergency Comm Networks',
    description: 'Priority routing for municipal and critical response fleet integrations.',
    icon: Radio,
  }
];

export const TrustCompliance = () => {
  return (
    <section className="relative py-28 md:py-36 border-y border-brand-border bg-brand-bg overflow-hidden">
      
      {/* ─── BACKGROUND DECORATIONS ────────────────────────────────────── */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #94A3B8 1px, transparent 0)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="absolute top-[25%] right-[-10%] w-[600px] h-[600px] bg-[#2F80FF]/5 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-[#00C6FF]/5 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 max-w-[1536px]">
        
        {/* ─── HEADER ────────────────────────────────────────────────────── */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-28">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground dark:text-white tracking-tighter leading-tight mb-8"
          >
            Enterprise <span className="text-[#2F80FF]">Trust &amp; Compliance</span> <br className="hidden md:block"/> Infrastructure
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-lg text-brand-slate max-w-2xl leading-relaxed font-medium"
          >
            Mission-critical roadside dispatch infrastructure engineered for secure, scalable, and enterprise-grade mobility operations.
          </motion.p>
        </div>

        {/* ─── GRID LAYOUT: TRUST CARDS ─────────────────────── */}
        <div className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {trustModules.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group h-full cursor-pointer relative"
                >
                  {/* Floating Icon Bubble */}
                  <div className="absolute top-0 left-8 -translate-y-1/2 z-20">
                     <motion.div
                       whileHover={{ scale: 1.1 }}
                       className="h-16 w-16 bg-card/90 backdrop-blur-2xl border border-brand-border rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(47,128,255,0.15)] group-hover:border-[#2F80FF]/40 group-hover:shadow-[0_0_40px_rgba(47,128,255,0.3)] transition-all relative overflow-hidden"
                     >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#2F80FF]/20 to-transparent" />
                        <Icon className="h-7 w-7 text-[#2F80FF] relative z-10 transition-transform group-hover:scale-110" />
                        <div className="absolute inset-0 rounded-2xl border-2 border-[#2F80FF]/20 animate-pulse" />
                     </motion.div>
                  </div>

                  {/* Glassmorphism Card */}
                  <div className="relative bg-card/55 backdrop-blur-[24px] border border-white/[0.08] rounded-[28px] pt-16 p-8 h-full flex flex-col transition-all duration-500 group-hover:border-[#2F80FF]/40 group-hover:bg-card/80 group-hover:-translate-y-4 shadow-lg group-hover:shadow-[0_30px_60px_rgba(47,128,255,0.15)] overflow-hidden">
                     {/* Background Glow */}
                     <div className="absolute top-0 right-0 w-32 h-32 bg-[#2F80FF]/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                     
                     <div className="relative z-10 flex-grow">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-black text-foreground dark:text-white tracking-tight leading-tight group-hover:text-[#2F80FF] transition-colors">
                            {m.title}
                          </h3>
                        </div>

                        <p className="text-sm text-brand-slate leading-relaxed font-medium mb-6">
                          {m.description}
                        </p>
                     </div>

                     <div className="relative z-10 pt-4 border-t border-brand-border/50 flex flex-col gap-3">
                        <div className={`self-start px-3 py-1 rounded-full text-[10px] font-black border tracking-wider flex items-center gap-2 ${m.statusColor}`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                          {m.status}
                        </div>
                        <div className="flex justify-between items-center text-[10px] font-mono text-brand-slate uppercase tracking-wider">
                          <span>{m.metric}</span>
                          <span className="opacity-50">{m.code}</span>
                        </div>
                     </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>



      </div>
    </section>
  );
};
