'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { EnterpriseTabs } from '@/components/ui/enterprise-tabs';
import {
  Cpu, Eye, Activity, Box, ShieldCheck, Sparkles, Check, HelpCircle, Terminal, ExternalLink
} from 'lucide-react';

const solutions = [
  {
    id: 'intake',
    label: 'Request Intake',
    icon: Cpu,
    title: 'Structured RSA Request Intake',
    desc: 'Clients submit roadside assistance requests through API or secure form workflows. Requests include customer details, policy information, service type, vehicle data, pickup location, drop-off location, and priority level.',
    steps: [
      { step: 1, label: 'Client API/Form Request', actor: 'Client Action', color: 'border-brand-blue/30 text-brand-blue bg-brand-blue/5' },
      { step: 2, label: 'Internal Dispatch Dashboard', actor: 'Internal Systems', color: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/5' }
    ],
    cards: [
      {
        title: 'Customer & Policy Details',
        desc: 'Validate client identity and coverage terms dynamically during intake.',
        glow: 'rgba(59,130,246,0.15)'
      },
      {
        title: 'Location Telemetry',
        desc: 'Capture precise pickup and drop-off coordinates for dispatch routing.',
        glow: 'rgba(6,182,212,0.15)'
      },
      {
        title: 'Vehicle & Service Specs',
        desc: 'Identify Class 1–8 profiles and request types for optimal allocation.',
        glow: 'rgba(139,92,246,0.15)'
      },
      {
        title: 'Dashboard Routing',
        desc: 'Route incoming payloads directly to our operations command center.',
        glow: 'rgba(236,72,153,0.15)'
      }
    ]
  },
  {
    id: 'operations',
    label: 'Dispatch Operations',
    icon: Terminal,
    title: 'Internal Dispatch Team Assignment',
    desc: 'Every request is received by our internal backend dispatch team. Our team validates the request, identifies the correct service type, coordinates with the right provider, and manages the roadside operation.',
    steps: [
      { step: 3, label: 'Backend Team Review', actor: 'Operations Command', color: 'border-purple-500/30 text-purple-400 bg-purple-500/5' },
      { step: 4, label: 'Provider Coordination', actor: 'Ops Management', color: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/5' }
    ],
    cards: [
      {
        title: 'Operations Dashboard',
        desc: 'Direct control center ingestion for prompt, professional request review.',
        glow: 'rgba(245,158,11,0.15)'
      },
      {
        title: 'Team Assignment',
        desc: 'Our backend dispatch specialists hand-assign qualified tow and recovery units.',
        glow: 'rgba(6,182,212,0.15)'
      },
      {
        title: 'Provider Coordination',
        desc: 'Our dispatchers coordinate and follow up on the roadside job directly.',
        glow: 'rgba(59,130,246,0.15)'
      },
      {
        title: 'Escalation Systems',
        desc: '24/7 supervisor support for heavy-duty or complex recovery operations.',
        glow: 'rgba(139,92,246,0.15)'
      }
    ]
  },
  {
    id: 'status',
    label: 'Status Updates',
    icon: Activity,
    title: 'Real-Time Job Updates & Completion Flow',
    desc: 'Clients receive operational updates as the service progresses, including request received, dispatch assigned, provider en route, service in progress, completed, and closed.',
    steps: [
      { step: 5, label: 'ETA & Status Updates', actor: 'Real-Time Telemetry', color: 'border-orange-500/30 text-orange-400 bg-orange-500/5' },
      { step: 6, label: 'Job Completion Report', actor: 'Audit & Analytics', color: 'border-indigo-500/30 text-indigo-400 bg-indigo-500/5' }
    ],
    cards: [
      {
        title: 'Booking Alerts',
        desc: 'Instant verification notifies the client that ingestion was successful.',
        glow: 'rgba(16,185,129,0.15)'
      },
      {
        title: 'Progress Tracking',
        desc: 'Live milestone updates from dispatched and en-route to arrival.',
        glow: 'rgba(59,130,246,0.15)'
      },
      {
        title: 'Service Verification',
        desc: 'Direct logging of arrival, completion, and job site parameters.',
        glow: 'rgba(139,92,246,0.15)'
      },
      {
        title: 'Completion Reports',
        desc: 'Export detailed dispatch logs, billing invoices, and SLA reports.',
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
  const [activeTab, setActiveTab] = useState('intake');
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
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            API-First Dispatch <span className="text-brand-blue">Request Core</span>
          </h2>
          <p className="text-brand-slate text-lg max-w-3xl leading-relaxed">
            NationwideRoadsideAssist provides enterprise clients with secure API and form-based request intake. Clients submit roadside assistance requests with customer, policy, vehicle, pickup, and drop-off details. Each request is routed into our internal dispatch system, where our operations team coordinates the appropriate roadside provider and manages the job until completion.
          </p>
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
              {/* TOP ROW: Title, Desc, and workflow tracker */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left side: Icon, title, and description (7 columns) */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center relative overflow-hidden group/icon shadow-[0_0_20px_rgba(47,128,255,0.1)]">
                      <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 to-transparent opacity-0 group-hover/icon:opacity-100 transition-opacity duration-500" />
                      <activeSolution.icon className="h-8 w-8 text-brand-blue relative z-10" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">{activeSolution.title}</h3>
                  </div>
                  <p className="text-brand-slate text-base md:text-lg leading-relaxed max-w-4xl font-medium">{activeSolution.desc}</p>
                </div>

                {/* Right side: Request Flow Panel (5 columns) */}
                <div className="lg:col-span-5 bg-[#0A192F]/65 border border-brand-border rounded-3xl p-6 backdrop-blur-2xl relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-px rounded-[22px] bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
                  <h4 className="text-xs font-black uppercase tracking-widest text-[#2F80FF] mb-6 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2F80FF] animate-pulse" />
                    Request Execution Flow
                  </h4>
                  <div className="relative pl-8 space-y-6 z-10">
                    {/* Vertical connector line */}
                    <div className="absolute left-[15px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-[#2F80FF] via-emerald-500 to-[#8B5CF6] opacity-35" />
                    
                    {activeSolution.steps.map((item, i) => (
                      <div key={i} className="relative flex items-center">
                        {/* Circle bullet on the timeline */}
                        <div className="absolute -left-[32px] h-8 w-8 rounded-xl bg-[#0A192F] border border-white/10 flex items-center justify-center font-mono text-xs font-bold text-white z-10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                          {item.step}
                        </div>
                        
                        {/* Step Card */}
                        <div
                          className={`w-full relative z-10 flex flex-col p-4 border rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-[1.02] bg-[#0A192F]/40 ${item.color}`}
                        >
                          <p className="text-xs font-black uppercase tracking-wide leading-tight">{item.label}</p>
                          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{item.actor}</p>
                        </div>
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
};
