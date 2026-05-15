'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Truck, Car, CheckCircle2, ArrowRight } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Button } from '@/components/ui/button';

const industries = [
  {
    id: 'insurance',
    label: 'Insurance & Motor Clubs',
    icon: Shield,
    features: [
      'White-label dispatch infrastructure',
      'Real-time customer experience tracking',
      'Direct claims coordination APIs',
      'Member roadside operations mesh'
    ],
    kpi: '99.2% Satisfaction Score',
    color: 'from-blue-500/20'
  },
  {
    id: 'commercial',
    label: 'Commercial & Fleet',
    icon: Truck,
    features: [
      'Heavy-duty recovery coordination',
      'Fleet downtime reduction analytics',
      'DOT-certified dispatch workflows',
      'Commercial vendor routing mesh'
    ],
    kpi: '22.4% Downtime Reduction',
    color: 'from-emerald-500/20'
  },
  {
    id: 'rental',
    label: 'Rental & OEM',
    icon: Car,
    features: [
      'Connected-car dispatch integration',
      'Trip continuation logistics',
      'Digital roadside experience workflows',
      'Vehicle telemetry-triggered dispatch'
    ],
    kpi: '14.2m Avg Dispatch ETA',
    color: 'from-purple-500/20'
  }
];

export const IndustrySolutions = () => {
  const [activeTab, setActiveTab] = useState('insurance');

  return (
    <section className="py-32 relative z-10 bg-brand-bg/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.3em] mb-4">Ecosystem Alignment</p>
          <h2 className="text-4xl lg:text-5xl font-black text-foreground dark:text-white mb-6">Built for Every Fleet</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tabs */}
          <div className="lg:w-1/3 space-y-4">
            {industries.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                className={`w-full flex items-center gap-5 px-8 py-7 rounded-3xl transition-all relative overflow-hidden text-left ${
                  activeTab === ind.id 
                    ? 'bg-brand-blue/10 border-brand-blue/30 border shadow-2xl' 
                    : 'bg-white/[0.02] border-brand-border border hover:bg-white/[0.04]'
                }`}
              >
                <div className={`h-12 w-12 rounded-2xl flex items-center justify-center ${activeTab === ind.id ? 'bg-brand-blue text-foreground dark:text-white' : 'bg-white/5 text-brand-slate'}`}>
                   <ind.icon className="h-6 w-6" />
                </div>
                <div>
                   <h4 className={`text-lg font-bold tracking-tight ${activeTab === ind.id ? 'text-foreground dark:text-white' : 'text-brand-slate'}`}>{ind.label}</h4>
                   {activeTab === ind.id && <motion.p layoutId="tabDesc" className="text-[10px] text-brand-blue font-bold uppercase tracking-widest mt-1">Active Intelligence</motion.p>}
                </div>
                {activeTab === ind.id && (
                  <motion.div layoutId="indTabIndicator" className="absolute right-6 top-1/2 -translate-y-1/2">
                    <ArrowRight className="h-5 w-5 text-brand-blue" />
                  </motion.div>
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              {industries.map((ind) => ind.id === activeTab && (
                <motion.div
                  key={ind.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="h-full"
                >
                  <GlassPanel className="p-10 lg:p-16 h-full border-brand-border bg-card/40 relative overflow-hidden">
                    {/* Background Glow */}
                    <div className={`absolute -right-24 -top-24 w-96 h-96 bg-gradient-to-br ${ind.color} to-transparent blur-[100px] rounded-full opacity-50`} />
                    
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">
                       <div className="space-y-8">
                          <h3 className="text-3xl lg:text-4xl font-black text-foreground dark:text-white leading-tight">{ind.label} Dispatch Operations</h3>
                          <div className="space-y-4">
                             {ind.features.map((f, i) => (
                               <div key={i} className="flex items-start gap-4">
                                  <div className="mt-1 h-5 w-5 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                                     <CheckCircle2 className="h-3 w-3 text-brand-blue" />
                                  </div>
                                  <p className="text-brand-slate text-sm leading-relaxed">{f}</p>
                               </div>
                             ))}
                          </div>
                          <Button className="bg-brand-blue text-foreground dark:text-white font-bold h-12 px-8 rounded-xl">Download Sector Report</Button>
                       </div>

                       <div className="flex flex-col gap-6">
                          <GlassPanel className="p-8 bg-brand-navy/90 border-brand-blue/20">
                             <p className="text-[10px] font-bold text-brand-blue uppercase tracking-widest mb-2">Performance Benchmark</p>
                             <p className="text-3xl font-black text-foreground dark:text-white">{ind.kpi}</p>
                             <p className="text-[11px] text-brand-slate mt-2 italic">Based on enterprise network telemetry 2026</p>
                          </GlassPanel>
                          
                          <div className="grid grid-cols-2 gap-4">
                             {[
                               { l: 'Network Nodes', v: '14.2k' },
                               { l: 'API Uptime', v: '99.99%' }
                             ].map((s, i) => (
                               <GlassPanel key={i} className="p-5 bg-white/[0.02] border-brand-border">
                                  <p className="text-xl font-bold text-foreground dark:text-white tracking-tight">{s.v}</p>
                                  <p className="text-[8px] font-bold text-brand-slate uppercase tracking-widest">{s.l}</p>
                               </GlassPanel>
                             ))}
                          </div>
                       </div>
                    </div>
                  </GlassPanel>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
