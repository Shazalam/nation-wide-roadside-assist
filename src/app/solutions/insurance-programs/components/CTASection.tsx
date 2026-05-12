'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Shield, Zap, Globe, ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-40 bg-[#081120] relative overflow-hidden">
      {/* Dynamic Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#2F80FF]/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF7A1A]/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-12">
            <Zap className="w-4 h-4 text-[#2F80FF]" />
            <span className="text-[11px] font-bold text-[#2F80FF] uppercase tracking-[0.3em]">Operational Readiness</span>
          </div>
          
          <h2 className="text-5xl lg:text-[5.5rem] font-black tracking-tighter text-white mb-12 leading-[1.1]">
            Modernize Your Insurance <br />
            <span className="bg-gradient-to-r from-[#2F80FF] via-[#00C6FF] to-[#2F80FF] bg-clip-text text-transparent">Roadside Operations.</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-[#94A3B8] mb-16 leading-relaxed max-w-3xl mx-auto">
            Connect with Nationwide Trans Inc. to streamline roadside dispatch, automate claims workflows, and improve enterprise mobility operations at scale.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-24">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 60px rgba(47,128,255,0.5)' }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-6 bg-[#2F80FF] text-white rounded-2xl font-bold text-sm uppercase tracking-widest flex items-center gap-4 group shadow-2xl shadow-blue-500/20"
            >
              Contact Enterprise Team
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.08)' }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-6 bg-transparent border border-white/10 text-white rounded-2xl font-bold text-sm uppercase tracking-widest flex items-center gap-4 group"
            >
              Request Capability Report <Shield className="w-5 h-5 text-[#2F80FF]" />
            </motion.button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto pt-20 border-t border-white/5">
             {[
               { label: 'Integration SLA', val: '99.9%' },
               { label: 'Network Redundancy', val: 'x3 Multi-Node' },
               { label: 'Compliance Tier', val: 'SOC 2 Type II' },
               { label: 'Deployment Time', val: '2-4 Weeks' }
             ].map((stat, i) => (
               <div key={i} className="text-center">
                  <div className="text-2xl font-black text-white font-mono mb-2">{stat.val}</div>
                  <div className="text-[10px] text-[#94A3B8] uppercase tracking-[0.2em] font-bold">{stat.label}</div>
               </div>
             ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Background */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2F80FF]/30 to-transparent" />
    </section>
  );
}
