'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Truck, Car, CheckCircle2, ArrowRight } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Button } from '@/components/ui/button';

const industries = [
  {
    id: 'insurance',
    title: 'Insurance & Motor Clubs',
    icon: Shield,
    features: [
      'White-label roadside operations',
      'Claims integration',
      'Member roadside workflows',
      'Customer experience analytics'
    ],
    desc: 'Empower your members with a seamless, branded roadside experience integrated directly into your claims infrastructure.'
  },
  {
    id: 'fleet',
    title: 'Commercial & Fleet',
    icon: Truck,
    features: [
      'Fleet roadside coordination',
      'Downtime reduction',
      'Heavy-duty support',
      'DOT operational workflows'
    ],
    desc: 'Minimize asset downtime and optimize driver safety with commercial-grade assistance coordination and fleet telemetry.'
  },
  {
    id: 'oem',
    title: 'Rental & OEM',
    icon: Car,
    features: [
      'Connected-car assistance',
      'Trip continuation',
      'Digital roadside requests',
      'Vehicle telemetry integration'
    ],
    desc: 'Integrate roadside intelligence directly into vehicle hardware and rental management systems for a future-ready support ecosystem.'
  }
];

export const IndustrySupport = () => {
  const [activeId, setActiveId] = useState('insurance');
  const activeIndustry = industries.find(i => i.id === activeId)!;

  return (
    <section className="py-32 relative z-10 bg-white/[0.01]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <p className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.3em] mb-4">Market Verticals</p>
          <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight">Industry Support Solutions</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {industries.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActiveId(ind.id)}
                className={`px-8 py-4 rounded-2xl font-bold text-[11px] uppercase tracking-widest transition-all border ${
                  activeId === ind.id 
                    ? 'bg-brand-blue text-white border-brand-blue shadow-[0_0_30px_rgba(47,128,255,0.3)]' 
                    : 'bg-white/5 text-[#94A3B8] border-white/5 hover:bg-white/10 hover:border-white/10'
                }`}
              >
                {ind.title}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <GlassPanel className="p-12 lg:p-20 border-white/10 bg-[#0A192F]/60 shadow-2xl">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                       <div className="h-16 w-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-8">
                          <activeIndustry.icon className="h-8 w-8 text-brand-blue" />
                       </div>
                       <h3 className="text-3xl lg:text-4xl font-black text-white mb-6 tracking-tight">{activeIndustry.title}</h3>
                       <p className="text-lg text-[#94A3B8] leading-relaxed mb-10">
                          {activeIndustry.desc}
                       </p>
                       <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold h-14 px-10 rounded-xl group">
                          View Case Studies <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                       </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       {activeIndustry.features.map((feat, i) => (
                         <div key={i} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] transition-all group">
                            <CheckCircle2 className="h-6 w-6 text-emerald-400 mb-6 opacity-40 group-hover:opacity-100 transition-opacity" />
                            <p className="text-sm font-bold text-white tracking-tight leading-snug">{feat}</p>
                         </div>
                       ))}
                    </div>
                 </div>
              </GlassPanel>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
