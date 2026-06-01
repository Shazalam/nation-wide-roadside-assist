'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { EnterpriseTabs } from '@/components/ui/enterprise-tabs';
import { Shield, Truck, Car, Cpu, LayoutGrid, Check } from 'lucide-react';

const solutions = [
  {
    id: 'insurance',
    label: 'Insurance',
    icon: Shield,
    title: 'Claims-Driven Assistance',
    desc: 'Seamless claims experience and cost optimization for high-volume carriers. Integrated tire-change operations into your policy management system.',
    features: ['Instant Policy Verification', 'Automated Claim Creation', 'Fraud Detection Mesh', 'Real-time Cost Recovery'],
    visuals: {
      cards: [
        {
          title: 'Vendor Coordination',
          desc: 'Nationwide provider dispatch infrastructure.',
          glow: 'rgba(6,182,212,0.15)'
        },
        {
          title: 'Fleet Operations',
          desc: 'Enterprise roadside coverage ecosystem.',
          glow: 'rgba(59,130,246,0.15)'
        },
        {
          title: 'Claims Integration',
          desc: 'Connected insurance dispatch workflows.',
          glow: 'rgba(147,51,234,0.15)'
        },
        {
          title: 'Recovery Network',
          desc: 'Tire replacement coordination systems.',
          glow: 'rgba(236,72,153,0.15)'
        }
      ]
    }
  },
  {
    id: 'fleet',
    label: 'Fleet Operations',
    icon: Truck,
    title: 'Asset Uptime Optimization',
    desc: 'Reduce downtime and improve fleet productivity with automated recovery. Maximize fleet utilization with predictive tire maintenance and rapid response.',
    features: ['Multi-tenant Visibility', 'Maintenance Prediction', 'Driver App Integration', 'Cost-per-Mile Analytics'],
    visuals: {
      cards: [
        {
          title: 'Asset Tracking',
          desc: 'Real-time fleet location and utilization tracking.',
          glow: 'rgba(245,158,11,0.15)'
        },
        {
          title: 'Diagnostics Feed',
          desc: 'Predictive maintenance vehicle telemetry alerts.',
          glow: 'rgba(6,182,212,0.15)'
        },
        {
          title: 'Fleet API Mesh',
          desc: 'Instant integration for commercial assets.',
          glow: 'rgba(59,130,246,0.15)'
        },
        {
          title: 'Uptime Systems',
          desc: 'Rapid roadside intervention routing engines.',
          glow: 'rgba(139,92,246,0.15)'
        }
      ]
    }
  },
  {
    id: 'rental',
    label: 'Rental Mobility',
    icon: Car,
    title: 'Keep Rentals Moving',
    desc: 'Keep rental vehicles on the road and customers satisfied nationwide. Instant tire replacement workflows for large rental fleets.',
    features: ['White-Label Branding', 'Customer Portal Link', 'Priority Queue Access', 'Cross-State Support'],
    visuals: {
      cards: [
        {
          title: 'Rental Portal',
          desc: 'Direct driver roadside request dashboard.',
          glow: 'rgba(16,185,129,0.15)'
        },
        {
          title: 'SLA Guarantee',
          desc: 'Strict sub-15 minute response operational nodes.',
          glow: 'rgba(59,130,246,0.15)'
        },
        {
          title: 'Routing Core',
          desc: 'Auto-dispatching rental incident coordinator.',
          glow: 'rgba(139,92,246,0.15)'
        },
        {
          title: 'Benefit Mapping',
          desc: 'Dynamic coverage tier configuration.',
          glow: 'rgba(236,72,153,0.15)'
        }
      ]
    }
  },
  {
    id: 'oem',
    label: 'OEM Connected',
    icon: Cpu,
    title: 'Software-Defined Support',
    desc: 'Integrated roadside assistance for modern software-defined vehicles. Leverage telemetry and connected car data for predictive flat tire resolution.',
    features: ['Vehicle Telemetry Sync', 'Remote Diagnostics', 'Over-The-Air Integration', 'Branded UX'],
    visuals: {
      cards: [
        {
          title: 'Telemetry Feed',
          desc: 'Direct tire pressure monitoring system integration.',
          glow: 'rgba(239,68,68,0.15)'
        },
        {
          title: 'Dash Displays',
          desc: 'In-car infotainment roadside request routing.',
          glow: 'rgba(59,130,246,0.15)'
        },
        {
          title: 'SLA Priority',
          desc: 'Premium branded customer uptime protection.',
          glow: 'rgba(139,92,246,0.15)'
        },
        {
          title: 'Sovereign Security',
          desc: 'Encrypted connected vehicle routing protocols.',
          glow: 'rgba(6,182,212,0.15)'
        }
      ]
    }
  },
  {
    id: 'dispatch',
    label: 'Dispatch Platforms',
    icon: LayoutGrid,
    title: 'Extreme Scale Operations',
    desc: 'API-first infrastructure built for extreme scale and operational reliability. Connect seamlessly into existing dispatch tools and tow management platforms.',
    features: ['API-Based Dispatch', 'Webhook Notifications', 'Multi-Region Operations', 'Vendor Grid Access'],
    visuals: {
      cards: [
        {
          title: 'Scale Architecture',
          desc: 'High-concurrency global API dispatch core.',
          glow: 'rgba(59,130,246,0.15)'
        },
        {
          title: 'Multi-Cloud Nodes',
          desc: 'Dynamic failover deployment across AWS/Azure.',
          glow: 'rgba(6,182,212,0.15)'
        },
        {
          title: 'Active Tracking',
          desc: 'Live coordinate data feeding GPS streams.',
          glow: 'rgba(139,92,246,0.15)'
        },
        {
          title: 'Ecosystem Mesh',
          desc: 'Standardized programmatic roadside interfaces.',
          glow: 'rgba(236,72,153,0.15)'
        }
      ]
    }
  }
];

// Grid Stagger Animation variants
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

// Custom metrics card animations with explicit hover fallbacks
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

export const EcosystemSection = () => {
  const [activeTab, setActiveTab] = useState('insurance');
  const activeSolution = solutions.find(s => s.id === activeTab) || solutions[0];

  return (
    <section className="py-32 bg-brand-bg transition-colors duration-500 relative overflow-hidden border-t border-brand-border">
      
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

      {/* Slow floating ambient background glows */}
      <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-brand-blue/5 blur-[120px] rounded-full animate-float-slow pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[20%] w-[450px] h-[450px] bg-[#FF7A1A]/5 blur-[100px] rounded-full animate-float-slow pointer-events-none z-0" style={{ animationDelay: '-3s' }} />

      {/* Background Telemetry Particles (drifting slowly) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <svg className="w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10%" cy="20%" r="1.2" fill="#3B82F6">
            <animate attributeName="opacity" values="0.1;0.7;0.1" dur="7s" repeatCount="indefinite" />
            <animate attributeName="cy" values="20%;18%;20%" dur="8s" repeatCount="indefinite" />
          </circle>
          <circle cx="85%" cy="15%" r="1" fill="#06B6D4">
            <animate attributeName="opacity" values="0.2;0.8;0.2" dur="6s" repeatCount="indefinite" />
            <animate attributeName="cy" values="15%;17%;15%" dur="9s" repeatCount="indefinite" />
          </circle>
          <circle cx="75%" cy="85%" r="1.5" fill="#8B5CF6">
            <animate attributeName="opacity" values="0.1;0.6;0.1" dur="8s" repeatCount="indefinite" />
            <animate attributeName="cy" values="85%;83%;85%" dur="10s" repeatCount="indefinite" />
          </circle>
          <circle cx="30%" cy="75%" r="1" fill="#EF4444">
            <animate attributeName="opacity" values="0.1;0.5;0.1" dur="9s" repeatCount="indefinite" />
            <animate attributeName="cy" values="75%;77%;75%" dur="7s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-[1536px]">
        <div className="max-w-3xl mb-16 mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-black text-foreground dark:text-white tracking-tighter leading-tight mb-8">
            Powering the <span className="text-[#2F80FF]">Mobility Ecosystem</span>
          </h2>
          <p className="text-brand-slate text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            Nationwide roadside infrastructure engineered for the most demanding enterprise mobility sectors.
          </p>
        </div>

        <div className="flex justify-center mb-16 w-full">
          <EnterpriseTabs 
            activeTab={activeTab} 
            onChange={setActiveTab}
            tabs={solutions.map(s => ({ id: s.id, label: s.label }))}
          />
        </div>

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
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground">{activeSolution.title}</h3>
                  </div>
                  <p className="text-brand-slate text-lg md:text-xl leading-relaxed max-w-4xl font-medium">{activeSolution.desc}</p>
                </div>

                {/* Right side: Key features checklist (4 columns) */}
                <div className="lg:col-span-4 bg-white/[0.02] border border-white/[0.06] rounded-3xl p-6 backdrop-blur-xl relative overflow-hidden">
                  <div className="absolute inset-px rounded-[22px] bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
                  <h4 className="text-xs font-black uppercase tracking-widest text-brand-blue mb-4">Core Capabilities</h4>
                  <div className="space-y-3.5 relative z-10">
                    {activeSolution.features.map(f => (
                      <div key={f} className="flex items-center gap-3 group/item">
                        <div className="h-5 w-5 rounded-md bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0 group-hover/item:border-brand-blue/40 transition-colors">
                          <Check className="h-3 w-3 text-brand-blue" />
                        </div>
                        <span className="text-sm text-foreground font-semibold group-hover/item:text-white transition-colors duration-300">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* BOTTOM ROW: The 4 frosted-glass capability cards, spanning 4 columns */}
              <div className="relative pt-6">
                
                {/* SVG connection line running horizontally behind the 4 cards (hidden on smaller screens) */}
                <svg className="hidden lg:block absolute top-[50%] left-0 w-full h-[10px] pointer-events-none opacity-40 z-0 overflow-visible" viewBox="0 0 100 10" preserveAspectRatio="none" fill="none">
                  <defs>
                    <linearGradient id="line-grad-horizontal" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2F80FF" stopOpacity="0" />
                      <stop offset="15%" stopColor="#2F80FF" stopOpacity="0.4" />
                      <stop offset="50%" stopColor="#06B6D4" stopOpacity="1" />
                      <stop offset="85%" stopColor="#8B5CF6" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Connecting path */}
                  <path d="M 5,5 L 95,5" stroke="url(#line-grad-horizontal)" strokeWidth="0.5" strokeDasharray="1 2" />

                  {/* Pulsing particles traveling horizontally */}
                  <g>
                    <circle r="0.6" fill="#06B6D4" opacity="0.3">
                      <animateMotion path="M 5,5 L 95,5" dur="4s" repeatCount="indefinite" />
                    </circle>
                    <circle r="0.25" fill="#fff">
                      <animateMotion path="M 5,5 L 95,5" dur="4s" repeatCount="indefinite" />
                    </circle>
                  </g>
                  <g>
                    <circle r="0.6" fill="#8B5CF6" opacity="0.3">
                      <animateMotion path="M 95,5 L 5,5" dur="6s" repeatCount="indefinite" />
                    </circle>
                    <circle r="0.25" fill="#fff">
                      <animateMotion path="M 95,5 L 5,5" dur="6s" repeatCount="indefinite" />
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
                  {activeSolution.visuals.cards.map((card, idx) => (
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
                      {/* Card glow overlays */}
                      <div 
                        className="absolute -right-8 -bottom-8 w-20 h-20 rounded-full blur-[25px] opacity-25 group-hover/card:opacity-45 transition-opacity duration-300 pointer-events-none"
                        style={{ backgroundColor: card.glow }}
                      />
                      
                      {/* Card inner highlight reflection */}
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
