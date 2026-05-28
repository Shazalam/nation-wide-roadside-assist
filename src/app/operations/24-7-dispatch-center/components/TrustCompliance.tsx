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
    title: 'SOC 2 Type II Certified',
    code: 'SEC-SOC2',
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
    title: 'PCI-DSS Security',
    code: 'FIN-PCI',
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
    statusColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    metric: 'Active Nodes: 59k+',
  },
  {
    title: 'Heavy-Duty Recovery Certified',
    code: 'OPS-HDR',
    description: 'Commercial recovery coordination systems for Class 1–8 roadside and towing operations.',
    icon: Wrench,
    status: 'CERTIFIED VENDORS',
    statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    metric: 'Classes: 1-8 Heavy',
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
    title: 'Cross-Border Dispatch Coordination',
    description: 'Integrated USA & Canada roadside escalation and mobility routing infrastructure.',
    icon: Compass,
  }
];

export const TrustCompliance = () => {
  return (
    <section className="relative py-28 md:py-36 border-y border-brand-border bg-[#020712] overflow-hidden">
      
      {/* ─── BACKGROUND DECORATIONS ────────────────────────────────────── */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute top-[25%] right-[-10%] w-[550px] h-[550px] bg-[#2F80FF]/8 blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[-10%] w-[450px] h-[450px] bg-purple-500/4 blur-[150px] rounded-full pointer-events-none z-0" />

      {/* Floating Telemetry Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-[#2F80FF]/30"
            style={{
              top: `${15 + i * 15}%`,
              left: `${10 + (i * 23) % 80}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 15, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 7 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* ─── HEADER ────────────────────────────────────────────────────── */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2F80FF]/5 border border-[#2F80FF]/15 backdrop-blur-md mb-6"
          >
            <Activity className="h-3 w-3 text-[#2F80FF] animate-pulse" />
            <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#2F80FF]">
              Operational Trust Framework
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-foreground dark:text-white tracking-tighter leading-[1.05] mb-6"
          >
            Enterprise <span className="bg-gradient-to-r from-[#2F80FF] via-[#00C6FF] to-[#2F80FF] bg-clip-text text-transparent">Trust &amp; Compliance</span> Infrastructure
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

          {/* Glowing Animated Divider */}
          <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-[#2F80FF]/30 to-transparent mt-8 relative">
            <motion.div 
              animate={{ left: ['-50%', '150%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-0 w-12 h-full bg-gradient-to-r from-transparent via-[#00C6FF]/80 to-transparent"
            />
          </div>
        </div>

        {/* ─── GRID LAYOUT: TRUST CARDS ─────────────────────── */}
        <div className="mb-24 md:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustModules.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22, delay: i * 0.1 }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.02,
                    boxShadow: '0 20px 40px rgba(47,128,255,0.08)'
                  }}
                  className="relative bg-white/[0.02] backdrop-blur-3xl border border-white/[0.06] rounded-[2rem] p-8 transition-all duration-300 group hover:border-[#2F80FF]/30 cursor-default"
                >
                  {/* Subtle hover gradient reflection */}
                  <div className="absolute inset-px rounded-[2rem] bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none group-hover:from-white/[0.08] transition-all" />
                  
                  {/* Top row: Icon + Pill */}
                  <div className="flex items-center justify-between gap-4 mb-6 relative z-10">
                    <div className="h-12 w-12 rounded-2xl bg-[#2F80FF]/5 flex items-center justify-center border border-[#2F80FF]/15 group-hover:bg-[#2F80FF]/15 group-hover:border-[#2F80FF]/30 transition-all duration-300">
                      <Icon className="h-5 w-5 text-[#2F80FF] group-hover:drop-shadow-[0_0_8px_rgba(47,128,255,0.6)] transition-all" />
                    </div>
                    
                    <div className={`px-3 py-1 rounded-full text-[9px] font-black border tracking-wider flex items-center gap-1.5 ${m.statusColor}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                      {m.status}
                    </div>
                  </div>

                  {/* Text details */}
                  <div className="relative z-10 space-y-3">
                    <div className="flex items-baseline gap-2.5">
                      <h3 className="text-lg font-black text-foreground dark:text-white tracking-tight">
                        {m.title}
                      </h3>
                      <span className="text-[9px] font-mono text-brand-slate opacity-40">{m.code}</span>
                    </div>

                    <p className="text-xs text-brand-slate leading-relaxed font-medium">
                      {m.description}
                    </p>
                  </div>

                  {/* Footer telemetry tracker */}
                  <div className="mt-6 pt-4 border-t border-white/[0.04] flex justify-between items-center relative z-10 text-[9px] font-mono text-brand-slate">
                    <span>{m.metric}</span>
                    <span className="opacity-40 uppercase">AES-256 Enabled</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ─── BOTTOM CAPABILITIES CHIPS ─────────────────────────────────── */}
        <div className="border-t border-white/[0.05] pt-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
             <span className="text-[10px] font-black text-brand-slate uppercase tracking-[0.3em]">
               Operational Infrastructure Capabilities
             </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  whileHover={{ 
                    x: 6,
                    borderColor: 'rgba(47,128,255,0.4)',
                    backgroundColor: 'rgba(255,255,255,0.03)'
                  }}
                  className="flex items-start gap-4 border-l-2 border-[#2F80FF]/30 pl-6 py-4 bg-white/[0.01] rounded-r-xl border-y border-r border-white/[0.02] transition-all duration-300 group cursor-default"
                >
                  <div className="p-2.5 rounded-lg bg-white/5 group-hover:bg-[#2F80FF]/10 transition-colors">
                    <Icon className="h-4 w-4 text-[#2F80FF]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-foreground dark:text-white uppercase tracking-widest mb-1.5">
                      {c.title}
                    </h4>
                    <p className="text-[10.5px] text-brand-slate leading-relaxed font-medium">
                      {c.description}
                    </p>
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
