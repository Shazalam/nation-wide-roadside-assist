'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Shield, ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';

export const FinalCTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-brand-blue/20 via-brand-navy to-brand-bg border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.5)] relative overflow-hidden group"
          >
            {/* Animated Glow in Background */}
            <div className="absolute top-0 right-0 w-full h-full bg-brand-blue/5 blur-[100px] group-hover:bg-brand-blue/10 transition-colors duration-700" />
            
            <div className="relative z-10 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <Shield className="h-4 w-4 text-brand-blue" />
                <span className="text-xs font-bold text-white uppercase tracking-widest">Enterprise Ready</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                Ready to transform your <br />
                <span className="text-brand-blue">Mobility Operations?</span>
              </h2>
              
              <p className="text-brand-slate text-lg max-w-2xl mx-auto">
                Join the world's most advanced mobility platforms. Start building on the Nationwide Trans infrastructure today.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                <Link href="/register">
                  <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold h-14 px-10 rounded-2xl shadow-[0_0_30px_rgba(47,128,255,0.4)] group/btn">
                    Provision Infrastructure <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-white h-14 px-10 rounded-2xl font-bold">
                    Talk to Engineering
                  </Button>
                </Link>
              </div>
              
              <div className="pt-8 flex items-center justify-center gap-8 opacity-40">
                <div className="flex items-center gap-2 text-[10px] font-bold text-brand-slate uppercase tracking-[0.2em]">
                   <Zap className="h-3 w-3 text-brand-blue" /> Instant Setup
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-brand-slate uppercase tracking-[0.2em]">
                   <Shield className="h-3 w-3 text-brand-blue" /> SOC2 Compliant
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[50%] bg-brand-blue/5 blur-[120px] rounded-full -z-10" />
    </section>
  );
};
