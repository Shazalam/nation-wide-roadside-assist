'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import { useDownloadPdf } from '@/hooks/use-download-pdf';

export default function CTASection() {
  const { isGeneratingPdf, downloadPdf } = useDownloadPdf();
  return (
    <section className="py-24 bg-brand-bg relative flex items-center justify-center px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1440px] w-full mx-auto relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-card border border-brand-border rounded-[20px] shadow-2xl flex flex-col lg:flex-row items-center justify-between p-8 lg:p-12 gap-8 lg:gap-16 overflow-hidden"
        >
          {/* Real Globe Image Background */}
          <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[75%] xl:w-[80%] pointer-events-none flex items-center justify-end z-0">
             
             {/* Atmospheric Bloom & Ambient Lighting Layers */}
             <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2F80FF]/30 blur-[150px] rounded-full mix-blend-screen opacity-0 lg:opacity-100" />
             <div className="absolute right-[15%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00C6FF]/25 blur-[120px] rounded-full mix-blend-screen opacity-0 lg:opacity-100" />
             <div className="absolute right-[0%] bottom-0 w-[400px] h-[400px] bg-[#2F80FF]/15 blur-[100px] rounded-full mix-blend-screen" />
             
             {/* The Globe Image - High Visibility & Cinematic Blending */}
             <div 
               className="relative w-[140%] h-[160%] lg:w-[120%] lg:h-[180%] translate-x-[10%] lg:translate-x-[15%] xl:translate-x-[20%] opacity-100 mix-blend-screen filter contrast-[1.4] brightness-[1.2] saturate-[1.3]"
               style={{
                 maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 45%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0) 100%)',
                 WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 45%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0) 100%)'
               }}
             >
                <img 
                  src="/images/globe-bg.png" 
                  alt="Enterprise Network Globe"
                  className="w-full h-full object-contain object-right object-center"
                />
             </div>
             
             {/* Subtle Ambient Edge Glow */}
             <div className="absolute top-0 right-0 bottom-0 w-48 bg-gradient-to-l from-[#2F80FF]/15 to-transparent pointer-events-none" />
          </div>



          {/* Left Content */}
          <div className="relative z-10 flex-1 max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground dark:text-white mb-3">
              Modernize Your Insurance Roadside Operations Infrastructure
            </h2>
            <p className="text-[13px] md:text-sm text-brand-slate leading-relaxed">
              Connect with Nationwide Roadside Assist to streamline roadside dispatch, automate claims workflows, and improve enterprise mobility operations.
            </p>
          </div>

          {/* Right Buttons */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#2F80FF] text-foreground dark:text-white rounded-lg font-bold text-xs uppercase tracking-wide flex items-center justify-center gap-3 group shadow-[0_0_20px_rgba(47,128,255,0.3)] hover:shadow-[0_0_30px_rgba(47,128,255,0.5)] transition-all"
            >
              Contact Enterprise Team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
              whileTap={{ scale: 0.98 }}
              onClick={downloadPdf}
              disabled={isGeneratingPdf}
              className="w-full sm:w-auto px-6 py-3.5 bg-brand-bg/80 backdrop-blur-md border border-brand-border text-foreground dark:text-white rounded-lg font-bold text-xs uppercase tracking-wide flex items-center justify-center gap-3 group transition-colors disabled:opacity-50"
            >
              {isGeneratingPdf ? 'Generating PDF...' : 'Request Capability Report'}
              <FileText className="w-4 h-4 text-foreground dark:text-white/70" />
            </motion.button>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
