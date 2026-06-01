'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { EnterpriseTabs } from '@/components/ui/enterprise-tabs';
import {
  Cpu, Eye, Activity, Box, ShieldCheck, Sparkles, Check, HelpCircle, Terminal
} from 'lucide-react';

const solutions = [
  {
    id: 'dispatch',
    label: 'Dispatch',
    icon: Cpu,
    title: 'Enterprise Dispatch API',
    desc: 'Integrate nationwide dispatch operations directly into your mobility stack. Our API-first infrastructure enables automated recovery and vendor orchestration.',
    prompt: 'Dispatch Features',
    features: [
      'Standardized CRUD endpoints',
      'Instant routing engines',
      'Automated dispatch handoffs',
      'Custom metadata payload tags',
      'Service validation limits',
      'Direct fleet integrations'
    ],
    cards: [
      {
        title: 'Emergency Winch',
        desc: 'Enables quick triggering of towing and winchouts based on vehicle stats.',
        glow: 'rgba(59,130,246,0.15)'
      },
      {
        title: 'Policy Checking',
        desc: 'Verifies limits, coverage details, and deductibles automatically.',
        glow: 'rgba(6,182,212,0.15)'
      },
      {
        title: 'Multi-Tenant Grid',
        desc: 'Provides partitioned dispatch capabilities across partner accounts.',
        glow: 'rgba(139,92,246,0.15)'
      },
      {
        title: 'SLA Guard',
        desc: 'Maintains priority queues for high-priority emergency alerts.',
        glow: 'rgba(236,72,153,0.15)'
      }
    ]
  },
  {
    id: 'telemetry',
    label: 'Telemetry',
    icon: Eye,
    title: 'Live GPS & Telemetry Streams',
    desc: 'Capture live vehicle diagnostic alerts, GPS coordinates, and speed parameters via scalable telemetry endpoints.',
    prompt: 'Telemetry Streams',
    features: [
      'Live coordinates mapping',
      'WebSocket event streams',
      'Continuous telemetry data',
      'ETA dynamic calculation',
      'Drift alert warnings',
      'Regional tracking grids'
    ],
    cards: [
      {
        title: 'WebSocket Sync',
        desc: 'Maintains active socket links for real-time status feeds.',
        glow: 'rgba(245,158,11,0.15)'
      },
      {
        title: 'Dynamic ETAs',
        desc: 'Re-calculates estimated arrivals dynamically based on traffic flow.',
        glow: 'rgba(6,182,212,0.15)'
      },
      {
        title: 'Diagnostics Feed',
        desc: 'Monitors fuel status, battery charge, and engine codes.',
        glow: 'rgba(59,130,246,0.15)'
      },
      {
        title: 'Command Nodes',
        desc: 'Centralized telemetry handler for geo-distributed tracking.',
        glow: 'rgba(139,92,246,0.15)'
      }
    ]
  },
  {
    id: 'webhooks',
    label: 'Webhooks',
    icon: Activity,
    title: 'Event-Driven Webhook Broker',
    desc: 'Subscribe to instant event notifications when providers are assigned, en-route, on-scene, or when dispatches are resolved.',
    prompt: 'Webhook Alerts',
    features: [
      'dispatch.created callbacks',
      'vendor.assigned payloads',
      'status.changed notifications',
      'claim.processed events',
      'Secure signed endpoints',
      'Retry buffer mechanism'
    ],
    cards: [
      {
        title: 'Immediate Alerts',
        desc: 'Sends push events to partner systems within milliseconds.',
        glow: 'rgba(16,185,129,0.15)'
      },
      {
        title: 'Payload Customizer',
        desc: 'Allows users to map payloads to standard internal schemas.',
        glow: 'rgba(59,130,246,0.15)'
      },
      {
        title: 'Secure Hash',
        desc: 'Signs payloads using HMAC SHA256 signatures for validation.',
        glow: 'rgba(139,92,246,0.15)'
      },
      {
        title: 'Failover Queue',
        desc: 'Buffers event deliveries during partner service disruptions.',
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
  const [activeTab, setActiveTab] = useState('dispatch');
  const activeSolution = solutions.find(s => s.id === activeTab) || solutions[0];

  return (
    <section className="py-32 bg-brand-bg/30 relative overflow-hidden border-t border-brand-border">
      
      {/* Decorative background grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Floating ambient background glows */}
      <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[20%] w-[450px] h-[450px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Dispatch APIs <span className="text-brand-blue">For Enterprise.</span></h2>
          <p className="text-brand-slate text-lg max-w-3xl">Integrate nationwide dispatch operations directly into your mobility stack. Our API-first infrastructure enables programmatic recovery, real-time telemetry, and automated vendor orchestration.</p>
        </div>

        {/* Interactive Tabs */}
        <EnterpriseTabs 
          activeTab={activeTab} 
          onChange={setActiveTab}
          tabs={solutions.map(s => ({ id: s.id, label: s.label }))}
          className="mb-12"
        />

        {/* Full-width container with synchronized transitions */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 40, y: 10, filter: 'blur(8px)' }}
              animate={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: -40, y: -10, filter: 'blur(8px)' }}
              transition={{ 
                duration: 0.5, 
                ease: [0.25, 1, 0.5, 1] 
              }}
              className="space-y-12"
            >
              {/* TOP ROW: Title, Desc, and features */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left side: Icon, title, and description (8 columns) */}
                <div className="lg:col-span-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center relative overflow-hidden group/icon shadow-[0_0_20px_rgba(47,128,255,0.1)]">
                      <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 to-transparent opacity-0 group-hover/icon:opacity-100 transition-opacity duration-500" />
                      <activeSolution.icon className="h-8 w-8 text-brand-blue relative z-10" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">{activeSolution.title}</h3>
                  </div>
                  <p className="text-brand-slate text-base md:text-lg leading-relaxed max-w-4xl font-medium">{activeSolution.desc}</p>
                </div>

                {/* Right side: Key features checklist (4 columns) */}
                <div className="lg:col-span-4 bg-white/[0.02] border border-white/[0.06] rounded-3xl p-6 backdrop-blur-xl relative overflow-hidden">
                  <div className="absolute inset-px rounded-[22px] bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
                  <h4 className="text-xs font-black uppercase tracking-widest text-brand-blue mb-4">{activeSolution.prompt}</h4>
                  <div className="space-y-3 relative z-10">
                    {activeSolution.features.map(f => (
                      <div key={f} className="flex items-center gap-3 group/item">
                        <div className="h-5 w-5 rounded-md bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0 group-hover/item:border-brand-blue/40 transition-colors">
                          <Check className="h-3 w-3 text-brand-blue" />
                        </div>
                        <span className="text-xs text-foreground font-semibold group-hover/item:text-white transition-colors duration-300">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* BOTTOM ROW: Frog-glass cards */}
              <div className="relative pt-6">
                
                {/* SVG connection line running horizontally */}
                <svg className="hidden lg:block absolute top-[50%] left-0 w-full h-[10px] pointer-events-none opacity-40 z-0 overflow-visible" viewBox="0 0 100 10" preserveAspectRatio="none" fill="none">
                  <defs>
                    <linearGradient id="line-grad-horizontal-api" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2F80FF" stopOpacity="0" />
                      <stop offset="15%" stopColor="#2F80FF" stopOpacity="0.4" />
                      <stop offset="50%" stopColor="#06B6D4" stopOpacity="1" />
                      <stop offset="85%" stopColor="#8B5CF6" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M 5,5 L 95,5" stroke="url(#line-grad-horizontal-api)" strokeWidth="0.5" strokeDasharray="1 2" />
                  <g>
                    <circle r="0.6" fill="#06B6D4" opacity="0.3">
                      <animateMotion path="M 5,5 L 95,5" dur="4s" repeatCount="indefinite" />
                    </circle>
                    <circle r="0.25" fill="#fff">
                      <animateMotion path="M 5,5 L 95,5" dur="4s" repeatCount="indefinite" />
                    </circle>
                  </g>
                </svg>

                {/* Staggered card grid */}
                <motion.div 
                  variants={gridVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
                >
                  {activeSolution.cards.map((card, idx) => (
                    <motion.div
                      key={idx}
                      variants={cardVariants}
                      whileHover={{ 
                        y: -8, 
                        scale: 1.02,
                        borderColor: 'rgba(47, 128, 255, 0.35)',
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        boxShadow: '0 15px 35px rgba(47, 128, 255, 0.15)',
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                      className="relative p-6 rounded-[2rem] border border-white/[0.06] bg-white/[0.02] backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex flex-col justify-between overflow-hidden select-none group/card cursor-default min-h-[140px]"
                    >
                      <div 
                        className="absolute -right-8 -bottom-8 w-20 h-20 rounded-full blur-[25px] opacity-25 group-hover/card:opacity-45 transition-opacity duration-300 pointer-events-none"
                        style={{ backgroundColor: card.glow }}
                      />
                      <div className="absolute inset-px rounded-[1.9rem] bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
                      
                      <div className="relative z-10 space-y-3">
                        <h4 className="text-xs font-black text-white uppercase tracking-wider group-hover/card:text-brand-blue transition-colors duration-300">
                          {card.title}
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed font-medium">
                          {card.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
