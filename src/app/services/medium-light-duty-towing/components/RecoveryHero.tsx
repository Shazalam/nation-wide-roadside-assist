'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Clock, ArrowRight, Activity, MapPin, Search, Star, Truck, Users, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Badge } from '@/components/ui/badge';

export const RecoveryHero = () => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen pt-24 pb-12 lg:pt-32 lg:pb-20 flex items-center overflow-hidden bg-[#020617]">
      {/* FULL BLEED BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/images/services/light-duty-hero.png" 
          alt="Nationwide Medium & Light Duty Recovery Operation"
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
              <span className="text-white">Medium & Light Duty</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-brand-blue/5 border border-brand-blue/20 backdrop-blur-md">
                <div className="h-2 w-2 rounded-full bg-brand-blue animate-pulse shadow-[0_0_10px_var(--brand-blue)]" />
                <span className="text-[9px] font-black text-white uppercase tracking-[0.25em]">Tier-1 Consumer Assistance Network</span>
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
              Nationwide <span className="text-brand-blue">Medium & Light</span> <br />
              Duty Operations
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg lg:text-xl text-brand-slate leading-relaxed max-w-2xl font-medium"
            >
              Intelligent roadside assistance, light-duty recovery coordination, and enterprise dispatch infrastructure engineered for consumer fleets and insurance providers.
            </motion.p>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-5"
          >
            <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white font-black h-16 px-10 rounded-2xl shadow-[0_20px_50px_var(--brand-glow)] transition-all hover:-translate-y-1.5 active:scale-95 group">
              Request RSA Support <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1.5 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/10 bg-white/5 text-white hover:bg-white/10 h-16 px-10 rounded-2xl font-black backdrop-blur-xl transition-all hover:border-brand-blue/40 group flex items-center gap-3">
               <span className="opacity-40 group-hover:opacity-100 font-mono transition-opacity">{'</>'}</span>
               Enterprise Solutions
            </Button>
          </motion.div>

          {/* KPI Analytics Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-12">
            {[
              { label: 'Avg Response', val: '22 min', icon: Zap, color: 'text-brand-blue' },
              { label: 'Active Units', val: '4,800+', icon: Truck, color: 'text-brand-orange' },
              { label: 'SLA Status', val: '98.4%', icon: Shield, color: 'text-emerald-400' },
              { label: 'Coverage', val: 'National', icon: Globe, color: 'text-purple-400' }
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
