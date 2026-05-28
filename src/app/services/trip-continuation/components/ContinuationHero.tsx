'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Clock, ArrowRight, Activity, MapPin, ChevronRight, Truck, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setPartnershipOpen } from '@/store';

export const ContinuationHero = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen pt-24 pb-12 lg:pt-32 lg:pb-20 flex items-center overflow-hidden bg-[#020617]">
      {/* FULL BLEED BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/images/services/trip-continuation-hero.png" 
          alt="Nationwide Trip Continuation & Mobility Operation"
          className="w-full h-full object-cover object-center lg:object-right opacity-90"
        />
        {/* Cinematic Gradient Overlays */}
        {/* Cinematic Dimming: Start from 45% */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617] to-transparent lg:via-[45%] lg:to-[100%]" 
        />
        
        {/* Subtle Bottom-to-Top Fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />
        
        {/* Accent Glows */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2F80FF]/10 blur-[150px] rounded-full -mr-96 -mt-96 pointer-events-none" />
      </div>

      {/* Grid Overlay for Technical Feel */}
      <div className="absolute inset-0 z-[1] opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 0)', backgroundSize: '48px 48px' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl space-y-10">
          
          {/* Breadcrumb & Badge Area */}
          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-[10px] font-black text-brand-slate uppercase tracking-[0.3em]"
            >
              <span className="hover:text-white transition-colors cursor-pointer">Services</span>
              <ChevronRight className="h-3 w-3 text-brand-blue" />
              <span className="text-white">Trip Continuation</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-brand-blue/5 border border-brand-blue/20 backdrop-blur-md">
                <div className="h-2 w-2 rounded-full bg-brand-blue animate-pulse shadow-[0_0_10px_var(--brand-blue)]" />
                <span className="text-[9px] font-black text-white uppercase tracking-[0.25em]">Tier-1 Mobility Assistance Network</span>
              </div>
            </motion.div>
          </div>

          {/* Heading Section */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl lg:text-[5.5rem] font-black tracking-tighter text-white leading-[0.9] drop-shadow-2xl"
            >
              Enterprise <span className="text-brand-blue">Trip Continuation</span> <br />
              & Mobility Infrastructure
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg lg:text-xl text-brand-slate leading-relaxed max-w-2xl font-medium"
            >
              Real-time mobility coordination, nationwide customer assistance infrastructure, and API-first trip continuation systems engineered for insurers, fleets, and enterprise providers.
            </motion.p>
          </div>



          {/* KPI Analytics Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-12">
            {[
              { label: 'Resolution Rate', val: '98.7%', icon: Shield, color: 'text-brand-blue' },
              { label: 'Annual Assistance', val: '1.9M+', icon: Activity, color: 'text-brand-orange' },
              { label: 'Mobility Network', val: 'Nationwide', icon: Globe, color: 'text-purple-400' },
              { label: 'Operations', val: '24/7', icon: Clock, color: 'text-emerald-400' }
            ].map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-xl hover:bg-white/[0.05] transition-all group overflow-hidden relative"
              >
                <div className={`absolute top-4 right-4 opacity-20 ${m.color}`}>
                   <m.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-3xl font-black text-white tracking-tighter">{m.val}</p>
                  <p className="text-[10px] font-black text-brand-slate uppercase tracking-widest mt-2 leading-tight">{m.label}</p>
                </div>
                {/* Subtle Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5">
                   <motion.div 
                     initial={{ width: 0 }}
                     animate={{ width: '65%' }}
                     className={`h-full ${m.color.replace('text-', 'bg-')}/40`}
                   />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Operational HUD */}
    </section>
  );
};
