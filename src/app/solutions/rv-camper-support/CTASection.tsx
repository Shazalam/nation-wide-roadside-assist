'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-32 px-6 lg:px-12 relative overflow-hidden flex items-center justify-center min-h-[60vh]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-brand-bg z-0" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#2F80FF]/20 blur-[150px] rounded-full mix-blend-screen pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF7A1A]/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none z-0" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
          Modernize Your RV & Camper
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2F80FF] to-[#00C6FF]">
            Support Infrastructure
          </span>
        </h2>
        
        <p className="text-brand-slate text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Connect with Nationwide Roadside Assist to streamline RV roadside operations, automate dispatch coordination, and improve enterprise mobility intelligence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="w-full sm:w-auto px-8 py-4 bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-foreground dark:text-white rounded-lg font-medium transition-all shadow-[0_0_20px_rgba(47,128,255,0.3)] hover:shadow-[0_0_30px_rgba(47,128,255,0.5)] flex items-center justify-center gap-2 group">
            Contact Enterprise Team <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.1)] text-foreground dark:text-white rounded-lg font-medium transition-all">
            Request RV Capability Report
          </button>
        </div>
      </motion.div>
    </section>
  );
}
