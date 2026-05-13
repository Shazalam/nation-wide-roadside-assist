'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 bg-[#081120] relative flex items-center justify-center px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1440px] w-full mx-auto relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#0A192F] border border-white/10 rounded-[20px] shadow-2xl flex flex-col lg:flex-row items-center justify-between p-8 lg:p-12 gap-8 lg:gap-16 overflow-hidden"
        >
          {/* Real Globe Image Background */}
          <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[60%] pointer-events-none flex items-center justify-end z-0">
             
             {/* Enhanced Outer Glow behind the globe */}
             <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#2F80FF]/60 blur-[120px] rounded-full mix-blend-screen" />
             <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#00C6FF]/40 blur-[80px] rounded-full mix-blend-screen" />
             
             {/* The Globe Image - Shifted Left and Full Opacity */}
             <div className="relative w-[150%] h-[150%] md:w-[120%] md:h-[120%] lg:w-[130%] lg:h-[180%] translate-x-[10%] lg:translate-x-[15%] opacity-100 mix-blend-screen filter contrast-125 brightness-110">
                <img 
                  src="/images/globe-bg.png" 
                  alt="Enterprise Network Globe"
                  className="w-full h-full object-contain object-right object-center"
                />
             </div>
             
             {/* Dark Gradient Overlays for Seamless Blending */}
             <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-[#0A192F]/60 to-transparent" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-[#0A192F] opacity-80" />
             <div className="absolute inset-0 bg-gradient-to-l from-[#081120]/10 to-transparent" />
          </div>

          {/* Left Content */}
          <div className="relative z-10 flex-1 max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
              Modernize Your Insurance Roadside Operations Infrastructure
            </h2>
            <p className="text-[13px] md:text-sm text-[#94A3B8] leading-relaxed">
              Connect with Nationwide Trans Inc. to streamline roadside dispatch, automate claims workflows, and improve enterprise mobility operations.
            </p>
          </div>

          {/* Right Buttons */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#2F80FF] text-white rounded-lg font-bold text-xs uppercase tracking-wide flex items-center justify-center gap-3 group shadow-[0_0_20px_rgba(47,128,255,0.3)] hover:shadow-[0_0_30px_rgba(47,128,255,0.5)] transition-all"
            >
              Contact Enterprise Team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#081120]/80 backdrop-blur-md border border-white/10 text-white rounded-lg font-bold text-xs uppercase tracking-wide flex items-center justify-center gap-3 group transition-colors"
            >
              Request Capability Report 
              <FileText className="w-4 h-4 text-white/70" />
            </motion.button>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
