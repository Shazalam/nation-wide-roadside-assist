'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EnterpriseTabs } from '@/components/ui/enterprise-tabs';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Shield, Truck, Building2, ArrowRight, Users, Package, Network } from 'lucide-react';
import Link from 'next/link';

const solutions = [
  {
    id: 'insurance',
    label: 'Insurance',
    icon: Shield,
    title: 'Claims-Driven Assistance',
    desc: 'Seamlessly integrate roadside operations into your claims workflow. Our API core connects directly to your policy management system for automated eligibility checks and instant dispatch.',
    features: ['Instant Policy Verification', 'Automated Claim Creation', 'Fraud Detection Mesh', 'Real-time Cost Recovery']
  },
  {
    id: 'fleet',
    label: 'Fleet & Rental',
    icon: Truck,
    title: 'Asset Uptime Optimization',
    desc: 'Maximize fleet utilization with predictive maintenance and rapid recovery services. Designed for rental operators and commercial fleets requiring sub-15 minute response times.',
    features: ['Multi-tenant Visibility', 'Maintenance Prediction', 'Driver App Integration', 'Cost-per-Mile Analytics']
  },
  {
    id: 'motor-clubs',
    label: 'Motor Clubs',
    icon: Users,
    title: 'White-Label Operations',
    desc: 'White-label roadside assistance operations for motor clubs and membership organizations.',
    features: ['White-Label Branding', 'Member Portal Link', 'Priority Queue Access', 'Tiered Benefit Mapping']
  },
  {
    id: 'commercial-fleets',
    label: 'Commercial Fleets',
    icon: Network,
    title: 'Enterprise Fleet Mobility',
    desc: 'Enterprise mobility operations designed for logistics, trucking, and commercial fleet support.',
    features: ['Fleet Recovery Coordination', 'Heavy-Duty Dispatch', 'Real-Time Fleet Visibility', 'Nationwide RSA Coverage']
  },
  {
    id: 'logistics-transport',
    label: 'Logistics & Transport',
    icon: Package,
    title: 'Freight Mobility Operations',
    desc: 'Roadside infrastructure for transportation networks and freight mobility operations.',
    features: ['Cargo Recovery Coordination', 'Dispatch Escalation Systems', 'Cross-State Support', 'Fleet Uptime Optimization']
  },
  {
    id: 'enterprise-mobility',
    label: 'Enterprise Mobility',
    icon: Building2,
    title: 'Large-Scale Mobility Networks',
    desc: 'Scalable roadside infrastructure for large-scale enterprise mobility ecosystems.',
    features: ['White-Label RSA Programs', 'API-Based Dispatch', 'AI Claims Integration', 'Multi-Region Operations']
  }
];

export const IndustryTabs = () => {
  const [activeTab, setActiveTab] = useState('insurance');
  const activeSolution = solutions.find(s => s.id === activeTab) || solutions[0];

  return (
    <section className="py-24 bg-brand-bg/30 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Vertical Specific <span className="text-brand-blue">Solutions</span></h2>
          <p className="text-brand-slate text-lg">Engineered to meet the unique demands of global enterprise mobility sectors.</p>
        </div>

        <EnterpriseTabs 
          activeTab={activeTab} 
          onChange={setActiveTab}
          tabs={solutions.map(s => ({ id: s.id, label: s.label }))}
          className="mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center">
                    <activeSolution.icon className="h-8 w-8 text-brand-blue" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">{activeSolution.title}</h3>
                </div>
                <p className="text-brand-slate text-lg leading-relaxed">{activeSolution.desc}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeSolution.features.map(f => (
                    <div key={f} className="flex items-center gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-blue shadow-[0_0_8px_var(--brand-blue)]" />
                      <span className="text-sm text-foreground font-medium">{f}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-8">
                  <Link href={`/solutions/${activeTab}`}>
                    <button className="flex items-center gap-2 text-brand-blue font-bold uppercase tracking-[0.2em] text-[10px] hover:gap-4 transition-all group">
                      Explore Vertical <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="lg:col-span-5 relative">
            <GlassPanel className="p-8 h-full bg-card/40 border-brand-border flex flex-col justify-center shadow-sm dark:shadow-none transition-all duration-500">
               <div className="space-y-6">
                 <div className="p-4 rounded-xl bg-foreground/[0.03] border border-brand-border">
                    <p className="text-[10px] font-bold text-brand-blue uppercase tracking-widest mb-1">Active Integration</p>
                    <p className="text-sm font-bold text-foreground">CORE-V4.API-MESH</p>
                 </div>
                 <div className="h-px w-full bg-brand-border" />
                 <div className="flex justify-between items-center">
                    <span className="text-xs text-brand-slate">Operational Status</span>
                    <span className="text-[10px] font-bold text-emerald-500 uppercase">Optimized</span>
                 </div>
                 <div className="flex justify-between items-center">
                    <span className="text-xs text-brand-slate">Regional Latency</span>
                    <span className="text-[10px] font-bold text-foreground uppercase tracking-widest font-mono">14ms</span>
                 </div>
               </div>
            </GlassPanel>
            <div className="absolute -top-6 -right-6 h-12 w-12 rounded-full bg-brand-blue/10 blur-xl opacity-50 dark:opacity-100" />
          </div>
        </div>
      </div>
    </section>
  );
};
