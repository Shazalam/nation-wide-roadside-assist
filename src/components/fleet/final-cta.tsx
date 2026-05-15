'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const FinalCTA = () => {
  return (
    <section className="relative z-10 py-28 lg:py-36 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative rounded-[2rem] lg:rounded-[3rem] overflow-hidden bg-brand-blue/[0.04] border border-brand-border p-10 lg:p-20 xl:p-24 text-center">
          {/* Background dot grid */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-bg/80" />
          
          {/* Pulsing glow */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.18, 0.08] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] bg-brand-blue/20 blur-[150px] rounded-full pointer-events-none"
          />
          
          {/* Secondary glow */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.12, 0.05] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"
          />

          <div className="relative z-10 max-w-4xl mx-auto space-y-10 lg:space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2"
            >
              <Shield className="h-5 w-5 text-brand-blue" />
              <span className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.3em]">Enterprise Partnership</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-black text-foreground dark:text-white tracking-tight leading-tight"
            >
              Modernize Your Fleet &{' '}
              <span className="bg-gradient-to-r from-brand-blue to-emerald-400 bg-clip-text text-transparent">
                Rental Operations
              </span>
              {' '}Infrastructure
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg lg:text-xl text-brand-slate leading-relaxed max-w-3xl mx-auto"
            >
              Connect with Nationwide Trans Inc. to streamline fleet roadside operations, automate dispatch workflows, and improve enterprise mobility intelligence.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-foreground dark:text-white font-bold h-14 lg:h-16 px-10 lg:px-12 rounded-2xl shadow-[0_0_50px_rgba(47,128,255,0.35)] text-base lg:text-lg transition-all hover:scale-[1.03] hover:shadow-[0_0_70px_rgba(47,128,255,0.5)] w-full sm:w-auto">
                Contact Enterprise Team
              </Button>
              <Button variant="ghost" size="lg" className="text-foreground dark:text-white border border-brand-border hover:bg-white/5 hover:border-white/20 font-bold h-14 lg:h-16 px-10 lg:px-12 rounded-2xl text-base lg:text-lg group w-full sm:w-auto transition-all">
                Request Fleet Capability Report <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
