'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, Zap, Globe, Shield } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-32 bg-brand-bg relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2F80FF]/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-10">
            <Zap className="w-3 h-3 text-[#2F80FF]" />
            <span className="text-[10px] font-bold text-[#2F80FF] uppercase tracking-widest">Enterprise Acceleration</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black tracking-tight text-foreground dark:text-white mb-10 leading-tight">
            Modernize Your Commercial <br />
            <span className="bg-gradient-to-r from-[#2F80FF] via-[#00C6FF] to-[#2F80FF] bg-clip-text text-transparent">Recovery Infrastructure.</span>
          </h2>
          
          <p className="text-xl text-brand-slate mb-14 leading-relaxed max-w-2xl mx-auto">
            Connect with Nationwide Roadside Assist to streamline heavy-duty recovery operations, automate dispatch coordination, and optimize enterprise fleet intelligence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(47,128,255,0.4)' }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-[#2F80FF] text-foreground dark:text-white rounded-2xl font-bold text-sm uppercase tracking-widest flex items-center gap-3 group"
            >
              Contact Enterprise Team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.08)' }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-transparent border border-brand-border text-foreground dark:text-white rounded-2xl font-bold text-sm uppercase tracking-widest flex items-center gap-3"
            >
              Request Recovery Capability Report <Shield className="w-4 h-4 text-[#2F80FF]" />
            </motion.button>
          </div>

          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
             {[
               { label: 'Integration Time', val: '2-4 Weeks' },
               { label: 'SLA Guarantee', val: '99.9%' },
               { label: 'Network Reach', val: 'Nationwide' },
               { label: 'Security Standard', val: 'SOC 2 Type II' }
             ].map((stat, i) => (
               <div key={i}>
                  <div className="text-sm font-black text-foreground dark:text-white mb-1">{stat.val}</div>
                  <div className="text-[9px] text-brand-slate uppercase tracking-widest">{stat.label}</div>
               </div>
             ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
