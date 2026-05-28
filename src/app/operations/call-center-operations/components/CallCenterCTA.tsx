'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setPartnershipOpen } from '@/store';

export const CallCenterCTA = () => {
  const dispatch = useDispatch();

  return (
    <section className="py-7 bg-brand-bg relative flex items-center justify-center px-4 sm:px-6 lg:px-12 border-t border-brand-border">
      <div className="max-w-[1584px] w-full mx-auto relative z-10">

        {/* Boxed card structure */}
        <div className="relative bg-card border border-brand-border rounded-[20px] shadow-2xl overflow-hidden w-full py-7 lg:py-8 px-8 lg:px-16">

          {/* 1. Ambient lighting */}
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[400px] bg-[#2F80FF]/5 blur-[120px] rounded-full pointer-events-none z-0" />

          {/* 2. Absolute image container */}
          <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block overflow-hidden">
            {/* The call center operations dashboard image */}
            <div className="absolute right-0 top-0 bottom-0 w-[55%] h-full">
              <img
                src="/callcenter_dashboard_premium.png"
                alt="Call Center Operations"
                className="w-full h-full object-cover object-[center_center] opacity-80"
                style={{
                  maskImage: 'linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.05) 8%, rgba(0, 0, 0, 0.25) 20%, rgba(0, 0, 0, 0.65) 45%, black 75%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.05) 8%, rgba(0, 0, 0, 0.25) 20%, rgba(0, 0, 0, 0.65) 45%, black 75%)'
                }}
              />
            </div>

            {/* Ambient blue/cyan glow overlay */}
            <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#2F80FF]/15 via-transparent to-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

            {/* Backdrop blur layers over the image transition zone */}
            <div
              className="absolute inset-y-0 left-[32%] w-[32%] backdrop-blur-[12px] z-10 pointer-events-none"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.3) 70%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.3) 70%, transparent 100%)'
              }}
            />
            <div
              className="absolute inset-y-0 left-[30%] w-[45%] backdrop-blur-[6px] z-10 pointer-events-none"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 20%, rgba(0,0,0,0.15) 75%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 20%, rgba(0,0,0,0.15) 75%, transparent 100%)'
              }}
            />

            {/* Gradient color melts */}
            <div className="absolute inset-y-0 left-[32%] w-[25%] bg-gradient-to-r from-card via-card/60 to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 left-[30%] w-[35%] bg-gradient-to-r from-card via-card/40 to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 left-[30%] w-[45%] bg-gradient-to-r from-transparent via-[#030712]/50 via-card/15 to-transparent mix-blend-multiply z-20 pointer-events-none" />

            {/* Edge vignettes */}
            <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-card via-card/60 to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-card via-card/60 to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-[12%] bg-gradient-to-l from-card to-transparent z-20 pointer-events-none" />

            {/* Soft bloom overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2F80FF]/4 via-transparent to-transparent opacity-20 mix-blend-screen z-20 pointer-events-none" />
          </div>

          {/* 3. Cinematic grid-dot layer */}
          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none z-10"
            style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #94A3B8 1px, transparent 0)`, backgroundSize: '64px 64px' }}
          />

          {/* 4. Text content */}
          <div className="relative z-20 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7 space-y-4 text-left"
              >
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2F80FF] animate-pulse" />
                  <span className="text-[9px] font-black text-[#2F80FF] uppercase tracking-[0.3em] font-mono">Operations Platform</span>
                </div>

                <h2 className="text-3xl lg:text-5xl font-black text-foreground dark:text-white uppercase tracking-tight leading-[1.1]">
                  Modernize Your Enterprise <span className="text-[#2F80FF]">Call Center Operations</span>
                </h2>

                <p className="text-[14px] text-brand-slate leading-relaxed font-medium max-w-xl">
                  Connect with Nationwide Roadside Assist to automate dispatch workflows, optimize communications, and scale nationwide mobility operations.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => dispatch(setPartnershipOpen(true))}
                    className="w-full sm:w-auto px-6 py-3 bg-[#2F80FF] text-foreground dark:text-white rounded-xl font-bold text-xs uppercase tracking-wide flex items-center justify-center gap-3 group shadow-[0_10px_20px_rgba(47,128,255,0.15)] hover:shadow-[0_15px_30px_rgba(47,128,255,0.3)] transition-all hover:-translate-y-0.5 h-12"
                  >
                    Contact Enterprise Team
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-6 py-3 bg-card/40 backdrop-blur-xl border border-brand-border text-foreground dark:text-white rounded-xl font-bold text-xs uppercase tracking-wide flex items-center justify-center gap-3 group shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:border-[#2F80FF]/30 transition-all hover:-translate-y-0.5 h-12"
                  >
                    Request Operational Report
                    <FileText className="w-4 h-4 text-foreground dark:text-white/70" />
                  </motion.button>
                </div>
              </motion.div>

              {/* Right spacer column */}
              <div className="lg:col-span-5 hidden lg:block" />

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
