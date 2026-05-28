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
    title: 'Intelligent Dispatch Coordination',
    desc: 'Every roadside request becomes part of a centralized operational stream. From the moment an incident is created, the system routes dispatches instantly, verifies service eligibility automatically, and assigns nearby vendors faster.',
    prompt: 'Dispatch Capabilities',
    features: [
      'Instant dispatch routing',
      'Automatic service verification',
      'Fast nearby vendor assignment',
      'Real-time ETA tracking updates',
      'Minimal manual intervention',
      'Accelerated response times'
    ],
    cards: [
      {
        title: 'Instant Routing',
        desc: 'Dispatches are routed instantly based on proximity and SLA requirements.',
        glow: 'rgba(59,130,246,0.15)'
      },
      {
        title: 'Automatic Verification',
        desc: 'System automatically verifies service coverage and eligibility levels.',
        glow: 'rgba(6,182,212,0.15)'
      },
      {
        title: 'Vendor Matching',
        desc: 'Intelligently assigns nearby vendors to accelerate roadside response times.',
        glow: 'rgba(139,92,246,0.15)'
      },
      {
        title: 'Real-Time ETAs',
        desc: 'Maintains active operational sync with real-time ETA updates.',
        glow: 'rgba(236,72,153,0.15)'
      }
    ]
  },
  {
    id: 'visibility',
    label: 'Visibility',
    icon: Eye,
    title: 'Real-Time Operational Visibility',
    desc: 'Modern enterprises need visibility, not guesswork. API-driven infrastructure provides live incident tracking, real-time dispatch monitoring, and vendor activity visibility.',
    prompt: 'Visibility Framework',
    features: [
      'Live incident tracking feed',
      'Real-time dispatch monitoring',
      'Active vendor activity visibility',
      'Automated status synchronization',
      'Centralized operational reporting',
      'Performance analytics across regions'
    ],
    cards: [
      {
        title: 'Live Tracking',
        desc: 'Track roadside incident coordinates and updates dynamically.',
        glow: 'rgba(245,158,11,0.15)'
      },
      {
        title: 'Vendor Activity',
        desc: 'Provides full visibility of dispatcher and vendor networks.',
        glow: 'rgba(6,182,212,0.15)'
      },
      {
        title: 'Status Sync',
        desc: 'Automates operational updates across every dispatch node.',
        glow: 'rgba(59,130,246,0.15)'
      },
      {
        title: 'Analytics Command',
        desc: 'Command-center view of nationwide roadside operations.',
        glow: 'rgba(139,92,246,0.15)'
      }
    ]
  },
  {
    id: 'claims',
    label: 'Claims & Workflows',
    icon: Activity,
    title: 'Faster Claims & Incident Workflows',
    desc: 'Claims processing becomes dramatically more efficient when operational systems communicate instantly. Automatically generate claims, handle instant roadside updates, and reduce paperwork dependency.',
    prompt: 'Workflow Benefits',
    features: [
      'Automatic claim generation',
      'Instant roadside incident updates',
      'Reduced paperwork dependency',
      'Fewer manual entry errors',
      'Faster claim resolution cycles',
      'Proactive fraud monitoring mesh'
    ],
    cards: [
      {
        title: 'Auto Claim Gen',
        desc: 'Generates structured claims documents directly from incidents.',
        glow: 'rgba(16,185,129,0.15)'
      },
      {
        title: 'Zero Paperwork',
        desc: 'Removes paper dependency using digital event-driven records.',
        glow: 'rgba(59,130,246,0.15)'
      },
      {
        title: 'Fast Resolution',
        desc: 'Reduces resolution cycles through real-time communication.',
        glow: 'rgba(139,92,246,0.15)'
      },
      {
        title: 'Traceability Mesh',
        desc: 'Every roadside event becomes traceable, structured, and measurable.',
        glow: 'rgba(236,72,153,0.15)'
      }
    ]
  },
  {
    id: 'scalability',
    label: 'Scalability',
    icon: Box,
    title: 'Scalability Without Operational Chaos',
    desc: 'As roadside volume grows, manual workflows collapse. API-first infrastructure allows enterprises to scale seamlessly across insurance networks, fleets, and nationwide vendor networks.',
    prompt: 'Scaling Channels',
    features: [
      'Insurance partner networks',
      'Rental fleets deployment',
      'Logistics providers sync',
      'RV mobility platforms coverage',
      'Commercial transport systems',
      'Nationwide vendor scaling'
    ],
    cards: [
      {
        title: 'Volume Stability',
        desc: 'Maintain stable, controlled flows from 100 to 100,000+ incidents.',
        glow: 'rgba(239,68,68,0.15)'
      },
      {
        title: 'Network Fleets',
        desc: 'Seamlessly scale coverage for logistics and rental vehicle fleets.',
        glow: 'rgba(59,130,246,0.15)'
      },
      {
        title: 'Vendor Scaling',
        desc: 'Expand and coordinate nationwide vendor networks programmatically.',
        glow: 'rgba(139,92,246,0.15)'
      },
      {
        title: 'RV & Commercial',
        desc: 'Support commercial transport and RV mobility platforms.',
        glow: 'rgba(6,182,212,0.15)'
      }
    ]
  },
  {
    id: 'security',
    label: 'Security & Architecture',
    icon: ShieldCheck,
    title: 'Secure & Future-Ready Architecture',
    desc: 'Built for enterprise environments where reliability matters. Supports secure authentication, encrypted data transmission, modular integrations, and cloud scalability.',
    prompt: 'Architecture Layers',
    features: [
      'Secure authentication layers',
      'Encrypted data transmission',
      'Modular integrations system',
      'High-availability cloud scalability',
      'Robust server infrastructure',
      'Future-ready system expansion'
    ],
    cards: [
      {
        title: 'Secure Auth',
        desc: 'Enterprise security with robust validation and tokens.',
        glow: 'rgba(139,92,246,0.15)'
      },
      {
        title: 'Data Encryption',
        desc: 'End-to-end encrypted data transmission across all layers.',
        glow: 'rgba(59,130,246,0.15)'
      },
      {
        title: 'Modular Design',
        desc: 'Enables quick additions of integration modules and extensions.',
        glow: 'rgba(6,182,212,0.15)'
      },
      {
        title: 'High Availability',
        desc: 'Cloud-native architecture designed to avoid single failure points.',
        glow: 'rgba(16,185,129,0.15)'
      }
    ]
  },
  {
    id: 'vision',
    label: 'Bigger Vision',
    icon: Sparkles,
    title: 'The Bigger Vision',
    desc: 'This is not simply an API platform. It is a digital roadside infrastructure layer powering mobility continuity, enterprise dispatch intelligence, and nationwide service coordination.',
    prompt: 'Vision Core',
    features: [
      'Mobility continuity focus',
      'Enterprise dispatch intelligence',
      'Nationwide service coordination',
      'Automated roadside ecosystems',
      'Operational resilience systems'
    ],
    cards: [
      {
        title: 'Quiet Orchestration',
        desc: 'Technology orchestrates dispatches and claims in the background.',
        glow: 'rgba(59,130,246,0.15)'
      },
      {
        title: 'Dispatch Intel',
        desc: 'Centralized decision intelligence across roadside events.',
        glow: 'rgba(6,182,212,0.15)'
      },
      {
        title: 'Resilience Layer',
        desc: 'Ensures operational resilience during peak demand periods.',
        glow: 'rgba(139,92,246,0.15)'
      },
      {
        title: 'Single Backbone',
        desc: 'One connected backbone linking customers, vendors, and insurers.',
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

export default function APIInfrastructure() {
  const [activeTab, setActiveTab] = useState('dispatch');
  const activeSolution = solutions.find(s => s.id === activeTab) || solutions[0];

  return (
    <section className="py-12 lg:py-16 bg-brand-bg/30 relative overflow-hidden border-t border-brand-border">
      
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
        <div className="max-w-4xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <Terminal className="w-3.5 h-3.5 text-[#2F80FF]" />
            <span className="text-[10px] font-bold text-[#2F80FF] uppercase tracking-widest">Developer Ecosystem</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            API-First <span className="text-brand-blue">Infrastructure.</span>
          </h2>
          <p className="text-brand-slate text-lg max-w-3xl">
            Build an enterprise-grade roadside ecosystem that moves faster than traffic, thinks smarter than legacy systems, and scales without friction. Our infrastructure transforms fragmented roadside operations into one intelligent, connected mobility network.
          </p>
        </div>

        {/* Why It Matters Callout */}
        <div className="p-8 md:p-10 rounded-[2.5rem] bg-card border border-brand-border relative overflow-hidden group hover:border-[#2F80FF]/30 transition-all duration-300 mb-10">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none" />
          <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
            <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-[#2F80FF]">
              <HelpCircle className="w-8 h-8" />
            </div>
            <div className="space-y-4 max-w-5xl">
              <h3 className="text-lg font-black text-foreground dark:text-white uppercase tracking-wider">Why It Matters</h3>
              <p className="text-brand-slate text-sm leading-relaxed">
                In traditional roadside operations, delays happen because systems do not communicate. Insurance teams work separately from dispatch centers. Vendors operate in disconnected channels. Claims are updated manually. Customers wait in uncertainty.
              </p>
              <div className="h-px bg-brand-border my-2" />
              <p className="text-brand-blue font-bold text-sm leading-relaxed">
                An API-first architecture removes those walls. It creates a living operational backbone where every event flows instantly across your ecosystem.
              </p>
            </div>
          </div>
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

