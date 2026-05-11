'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Shield, Zap, Globe, Cpu } from 'lucide-react';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-48 md:pb-40">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-blue/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-orange/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-6 border-brand-blue/20 bg-brand-blue/5 text-brand-blue px-4 py-1 text-xs font-semibold tracking-wider uppercase">
              Now Integrated with Dispatch Intelligence 2.0
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]"
          >
            Enterprise Mobility <br />
            <span className="bg-gradient-to-r from-brand-blue via-brand-blue/80 to-brand-orange bg-clip-text text-transparent">
              Infrastructure Platform
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-brand-slate mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Real-time dispatch intelligence, nationwide vendor coordination, and API-first operations engineered for fleets, insurers, and roadside providers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 h-12 text-base font-semibold shadow-[0_0_25px_rgba(47,128,255,0.4)] group">
              Start Building 
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-brand-border bg-white/5 hover:bg-white/10 text-white px-8 h-12 text-base font-semibold">
              View API Docs
            </Button>
          </motion.div>
        </div>

        {/* Floating Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-32 max-w-6xl mx-auto">
          {[
            { icon: Zap, title: "120ms Dispatch", desc: "Industry-leading response times powered by proprietary routing algorithms." },
            { icon: Shield, title: "Enterprise Grade", desc: "SOC2 Type II compliant infrastructure with 99.99% uptime SLA." },
            { icon: Globe, title: "Nationwide Mesh", desc: "Access to 50k+ vetted service providers across North America." }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + (i * 0.1) }}
              className="p-8 rounded-2xl border border-brand-border bg-brand-navy/30 backdrop-blur-sm hover:border-brand-blue/50 transition-colors group"
            >
              <div className="h-12 w-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-6 border border-brand-blue/20 group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-brand-slate text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
