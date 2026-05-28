'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { EnterpriseTabs } from '@/components/ui/enterprise-tabs';
import {
  Cpu, Eye, Activity, Box, ShieldCheck, Sparkles, Check, HelpCircle, Terminal
} from 'lucide-react';

const solutions = [
  {
    id: 'vendor',
    label: 'Vendor API',
    icon: Cpu,
    title: 'Vendor Directory API',
    desc: 'Retrieve nearby towing, recovery, and mobile repair vendor assets programmatically. Sort by credentials, ratings, response metrics, and capacity.',
    prompt: 'Directory Features',
    features: [
      'State-by-state search filters',
      'Specialized equipment profiling',
      'Real-time availability toggles',
      'Active SLA response tracking',
      'Credentials validation mesh',
      'Bulk directory updates'
    ],
    cards: [
      {
        title: 'Geographic Search',
        desc: 'Sorts towing networks dynamically based on radial proximity.',
        glow: 'rgba(59,130,246,0.15)'
      },
      {
        title: 'Rotator Match',
        desc: 'Filters towing nodes by heavy recovery class capability.',
        glow: 'rgba(6,182,212,0.15)'
      },
      {
        title: 'Historical SLA',
        desc: 'Applies vendor performance scores to dispatch sorting priorities.',
        glow: 'rgba(139,92,246,0.15)'
      },
      {
        title: 'Dynamic Handoff',
        desc: 'Pushes recovery details directly to nearest vendor mobile endpoints.',
        glow: 'rgba(236,72,153,0.15)'
      }
    ]
  },
  {
    id: 'dispatch',
    label: 'Dispatch API',
    icon: Eye,
    title: 'Vendor Dispatch Routing',
    desc: 'Automate job dispatch assignments to your vendor network. Track accepts, en-route milestones, and completions.',
    prompt: 'Dispatch Features',
    features: [
      'Instant job routing streams',
      'Verification check layers',
      'ETA update notifications',
      'Driver coordinates streams',
      'Escalation support routing',
      'Digital signature logging'
    ],
    cards: [
      {
        title: 'Instant Accept',
        desc: 'Measures response latency and auto-reassigns slow jobs.',
        glow: 'rgba(245,158,11,0.15)'
      },
      {
        title: 'Live Tracking',
        desc: 'Streams technician coordinates to traveler status dashboards.',
        glow: 'rgba(6,182,212,0.15)'
      },
      {
        title: 'Milestone Alerts',
        desc: 'Flags en-route, arrived, and resolved events in real time.',
        glow: 'rgba(59,130,246,0.15)'
      },
      {
        title: 'SLA Dashboard',
        desc: 'Centralized telemetry dashboard tracking regional metrics.',
        glow: 'rgba(139,92,246,0.15)'
      }
    ]
  },
  {
    id: 'webhooks',
    label: 'Webhooks',
    icon: Activity,
    title: 'Vendor Lifecycle Webhooks',
    desc: 'Receive immediate push alerts on dispatch state shifts, billing updates, and photo uploads.',
    prompt: 'Webhook Events',
    features: [
      'dispatch.accepted warnings',
      'technician.arrived callbacks',
      'billing.completed updates',
      'HMAC origin signature check',
      'Retry failover system',
      'JSON structured payloads'
    ],
    cards: [
      {
        title: 'Immediate Push',
        desc: 'Streams updates immediately to your partner portal dashboards.',
        glow: 'rgba(16,185,129,0.15)'
      },
      {
        title: 'Billing Payloads',
        desc: 'Generates structured invoice details for direct payment processing.',
        glow: 'rgba(59,130,246,0.15)'
      },
      {
        title: 'HMAC Security',
        desc: 'Authenticates callback requests with secure HMAC SHA256 validation.',
        glow: 'rgba(139,92,246,0.15)'
      },
      {
        title: 'Queue failovers',
        desc: 'Buffers notifications during temporary subscriber disruptions.',
        glow: 'rgba(236,72,153,0.15)'
      }
    ]
  }
];

const gridVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1
    }
  }
};

const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: 25, 
    y: 10, 
    scale: 0.96, 
    filter: 'blur(4px)',
    borderColor: 'rgba(255, 255, 255, 0.06)',
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
  },
  show: { 
    opacity: 1, 
    x: 0, 
    y: 0, 
    scale: 1, 
    filter: 'blur(0px)',
    borderColor: 'rgba(255, 255, 255, 0.06)',
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
    transition: {
      type: 'spring',
      stiffness: 140,
      damping: 18,
      mass: 0.8
    }
  },
  exit: {
    opacity: 0,
    x: -25,
    y: -5,
    filter: 'blur(4px)',
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  }
};

export const APIInfrastructure = () => {
  const [activeTab, setActiveTab] = useState('vendor');
  const activeSolution = solutions.find(s => s.id === activeTab) || solutions[0];

  return (
    <div className="w-full bg-card/25 rounded-[2.5rem] border border-brand-border p-8 md:p-10 relative overflow-hidden backdrop-blur-md">
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0"
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #94A3B8 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative z-10 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-6 border-b border-brand-border">
          <div>
            <h3 className="text-xl md:text-2xl font-black text-foreground dark:text-white uppercase tracking-wider">API Infrastructure</h3>
            <p className="text-xs text-brand-slate mt-1 font-medium">Power your operations using our robust API ecosystem.</p>
          </div>
          <div className="w-full md:w-auto">
            <EnterpriseTabs 
              activeTab={activeTab} 
              onChange={setActiveTab}
              tabs={solutions.map(s => ({ id: s.id, label: s.label }))}
            />
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-10"
          >
            {/* Top row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-4">
                <h4 className="text-lg font-bold text-foreground dark:text-white flex items-center gap-3">
                  <activeSolution.icon className="h-5 w-5 text-[#2F80FF]" />
                  {activeSolution.title}
                </h4>
                <p className="text-xs text-brand-slate leading-relaxed font-medium">{activeSolution.desc}</p>
              </div>
              <div className="lg:col-span-4 bg-white/[0.01] border border-white/[0.04] rounded-2xl p-5 relative overflow-hidden">
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-blue block mb-3">{activeSolution.prompt}</span>
                <div className="space-y-2">
                  {activeSolution.features.map(f => (
                    <div key={f} className="flex items-center gap-2 group/item">
                      <div className="h-4 w-4 rounded bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0">
                        <Check className="h-2.5 w-2.5 text-brand-blue" />
                      </div>
                      <span className="text-[10px] text-foreground font-semibold">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom cards */}
            <motion.div 
              variants={gridVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {activeSolution.cards.map((card, idx) => (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -4, 
                    scale: 1.01,
                    borderColor: 'rgba(47, 128, 255, 0.35)',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    boxShadow: '0 10px 25px rgba(47, 128, 255, 0.12)',
                  }}
                  className="relative p-5 rounded-2xl border border-white/[0.06] bg-white/[0.01] shadow-md flex flex-col justify-between overflow-hidden select-none"
                >
                  <div className="absolute -right-8 -bottom-8 w-16 h-16 rounded-full blur-[20px] opacity-20 pointer-events-none" style={{ backgroundColor: card.glow }} />
                  <div className="relative z-10 space-y-2">
                    <h5 className="text-[10px] font-black text-white uppercase tracking-wider">{card.title}</h5>
                    <p className="text-[10px] text-slate-400 leading-relaxed font-medium">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
