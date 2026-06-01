'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import { useDownloadPdf } from '@/hooks/use-download-pdf';

export const RepairCTA = () => {
  const { isGeneratingPdf, downloadPdf } = useDownloadPdf();
  return (
    <section className="py-7 bg-brand-bg relative flex items-center justify-center px-4 sm:px-6 lg:px-12 border-t border-brand-border">
      <div className="max-w-[1584px] w-full mx-auto relative z-10">

        {/* Boxed card structure — same sizing as VendorCTA / CTASection / RecoveryCTA */}
        <div className="relative bg-card border border-brand-border rounded-[20px] shadow-2xl overflow-hidden w-full py-7 lg:py-8 px-8 lg:px-16">

          {/* 1. Ambient lighting behind the sections (rendered at z-0) */}
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[400px] bg-[#2F80FF]/5 blur-[120px] rounded-full pointer-events-none z-0" />

          {/* 2. Absolute image container spanning full card — seamless cinematic blend */}
          <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block overflow-hidden">

            {/* Mobile repair mechanic night image aligned to the right */}
            <div className="absolute right-0 top-0 bottom-0 w-[55%] h-full">
              <img
                src="/mobile_repair_night.jpg"
                alt="Mobile Repair Infrastructure"
                className="w-full h-full object-cover object-[40%_center] opacity-85"
                style={{
                  maskImage: 'linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.05) 8%, rgba(0, 0, 0, 0.25) 20%, rgba(0, 0, 0, 0.65) 45%, black 75%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.05) 8%, rgba(0, 0, 0, 0.25) 20%, rgba(0, 0, 0, 0.65) 45%, black 75%)'
                }}
              />
            </div>

            {/* Ambient glow behind the mechanic scene */}
            <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#2F80FF]/15 via-transparent to-[#10B981]/5 blur-[100px] rounded-full pointer-events-none" />

            {/* Backdrop blur layers over the image transition zone (ultra-soft wide transition) */}
            <div
              className="absolute inset-y-0 left-[32%] w-[32%] backdrop-blur-[12px] z-10 pointer-events-none"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.8) 30%, rgba(0, 0, 0, 0.3) 70%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.8) 30%, rgba(0, 0, 0, 0.3) 70%, transparent 100%)'
              }}
            />
            <div
              className="absolute inset-y-0 left-[30%] w-[45%] backdrop-blur-[6px] z-10 pointer-events-none"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 20%, rgba(0, 0, 0, 0.15) 75%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 20%, rgba(0, 0, 0, 0.15) 75%, transparent 100%)'
              }}
            />

            {/* Solid background color melt (wide soft blend) */}
            <div className="absolute inset-y-0 left-[32%] w-[25%] bg-gradient-to-r from-card via-card/60 to-transparent z-20 pointer-events-none" />

            {/* Layered deep navy-to-transparent shadow mask */}
            <div className="absolute inset-y-0 left-[30%] w-[35%] bg-gradient-to-r from-card via-card/40 to-transparent z-20 pointer-events-none" />

            {/* Deep atmospheric vignette shadow */}
            <div
              className="absolute inset-y-0 left-[30%] w-[45%] bg-gradient-to-r from-transparent via-[#030712]/50 via-card/15 to-transparent mix-blend-multiply z-20 pointer-events-none"
            />

            {/* Surrounding edge vignettes to dissolve top, bottom, and right borders */}
            <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-card via-card/60 to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-card via-card/60 to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-[12%] bg-gradient-to-l from-card to-transparent z-20 pointer-events-none" />

            {/* Soft bloom simulation overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2F80FF]/4 via-transparent to-transparent opacity-20 mix-blend-screen z-20 pointer-events-none" />
          </div>

          {/* 3. Cinematic grid-dot layer */}
          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none z-10"
            style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #94A3B8 1px, transparent 0)`, backgroundSize: '64px 64px' }}
          />

          {/* 4. Text content container */}
          <div className="relative z-20 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Left Text Column */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7 space-y-4 text-left"
              >

                <h2 className="text-3xl lg:text-5xl font-black text-foreground dark:text-white uppercase tracking-tight leading-[1.1]">
                  Modernize Your <span className="text-[#2F80FF]">Mobile Repair</span> Infrastructure
                </h2>

                <p className="text-[14px] text-brand-slate leading-relaxed font-medium max-w-xl">
                  Connect with Nationwide Roadside Assist to streamline mobile roadside repairs, automate dispatch operations, and optimize enterprise mobility support.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-6 py-3 bg-[#2F80FF] text-foreground dark:text-white rounded-xl font-bold text-xs uppercase tracking-wide flex items-center justify-center gap-3 group shadow-[0_10px_20px_rgba(47,128,255,0.15)] hover:shadow-[0_15px_30px_rgba(47,128,255,0.3)] transition-all hover:-translate-y-0.5 h-12"
                  >
                    CONTACT OUR TEAM
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
                    whileTap={{ scale: 0.98 }}
                    onClick={downloadPdf}
                    disabled={isGeneratingPdf}
                    className="w-full sm:w-auto px-6 py-3 bg-card/40 backdrop-blur-xl border border-brand-border text-foreground dark:text-white rounded-xl font-bold text-xs uppercase tracking-wide flex items-center justify-center gap-3 group shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:border-[#2F80FF]/30 transition-all hover:-translate-y-0.5 h-12 disabled:opacity-50"
                  >
                    {isGeneratingPdf ? 'Generating PDF...' : 'REQUEST CAPABILITY REPORT'}
                    <ArrowRight className="w-4 h-4 text-foreground dark:text-white/70" />
                  </motion.button>
                </div>
              </motion.div>

              {/* Right empty column for spacing on large screens */}
              <div className="lg:col-span-5 hidden lg:block" />

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
