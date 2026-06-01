'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Network, Activity, Terminal, Zap, Cloud } from 'lucide-react';

export const CapabilityGrid = () => {
  return (
    <section className="py-12 lg:py-16 bg-brand-bg relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#2F80FF]/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black tracking-tight text-foreground dark:text-white mb-6"
          >
             Enterprise <span className="text-[#2F80FF]">Mobility Infrastructure</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-slate text-lg leading-relaxed max-w-2xl mx-auto"
          >
            A scalable, API-first continuation platform designed to coordinate nationwide logistics and provide seamless support for large-scale mobility needs.
          </motion.p>
        </div>

        {/* Cards Grid - 3 Core Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          
          {/* Card 1: Nationwide Mobility Coordination */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative bg-card border border-brand-border rounded-[24px] p-6 lg:p-8 flex flex-col lg:flex-row items-center gap-6 hover:border-[#2F80FF]/50 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#2F80FF]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            {/* Left Content Area */}
            <div className="flex-1 flex flex-col w-full h-full relative z-10 justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2F80FF]/20 to-transparent border border-[#2F80FF]/30 flex items-center justify-center shrink-0">
                  <Network className="w-5 h-5 text-[#2F80FF]" />
                </div>
                <h3 className="text-lg font-bold text-foreground dark:text-white leading-snug">
                  Nationwide<br/>Coordination
                </h3>
              </div>
              <p className="text-[13px] text-brand-slate leading-relaxed mb-4">
                Access our nationwide network of transportation providers, hotels, rental partners, and mobility solutions.
              </p>
              <button className="text-[10px] font-bold text-[#2F80FF] uppercase tracking-widest hover:underline mt-auto self-start text-left">
                Learn More &rarr;
              </button>
            </div>

            {/* Visual Area */}
            <div className="flex-1 relative h-[250px] w-full flex items-center justify-center mt-6 lg:mt-0 pointer-events-none overflow-visible">
              <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[220px] h-[80px] border border-[#2F80FF]/20 rounded-[100%] rotate-x-60 opacity-50" />
              <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[140px] h-[40px] border border-[#2F80FF]/30 rounded-[100%] rotate-x-60 opacity-80 shadow-[0_0_30px_rgba(47,128,255,0.4)]" />
              
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute right-0 top-6 w-36 h-24 bg-brand-bg/80 backdrop-blur-md border border-brand-border rounded-xl shadow-2xl p-2.5 transform perspective-1000 rotate-y-[-15deg] rotate-x-[5deg]"
              >
                <div className="flex gap-1.5 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
                </div>
                <div className="w-1/2 h-1 bg-white/10 rounded mb-3" />
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full border-2 border-[#2F80FF]/40 border-t-[#2F80FF]" />
                  <div className="flex-1 space-y-1.5 pt-1">
                    <div className="w-full h-1 bg-white/10 rounded" />
                    <div className="w-2/3 h-1 bg-white/10 rounded" />
                    <div className="w-4/5 h-1 bg-[#2F80FF]/40 rounded" />
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute left-2 bottom-4 w-20 h-36 bg-card border-4 border-[#081120] rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col"
              >
                <div className="bg-[#2F80FF] h-8 w-full flex items-center justify-center">
                  <div className="w-6 h-1 bg-white/30 rounded-full" />
                </div>
                <div className="p-2 space-y-2 flex-1">
                  <div className="w-full h-12 bg-[#2F80FF]/10 rounded-lg flex items-center justify-center border border-[#2F80FF]/20">
                    <div className="w-4 h-4 rounded-full bg-[#2F80FF]/40 animate-pulse" />
                  </div>
                  <div className="w-3/4 h-1 bg-white/10 rounded" />
                  <div className="w-1/2 h-1 bg-white/10 rounded" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Card 2: Real-Time Assistance Intelligence */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative bg-card border border-brand-border rounded-[24px] p-6 lg:p-8 flex flex-col lg:flex-row items-center gap-6 hover:border-[#2F80FF]/50 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#2F80FF]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            {/* Left Content Area */}
            <div className="flex-1 flex flex-col w-full h-full relative z-10 justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2F80FF]/20 to-transparent border border-[#2F80FF]/30 flex items-center justify-center shrink-0">
                  <Activity className="w-5 h-5 text-[#2F80FF]" />
                </div>
                <h3 className="text-lg font-bold text-foreground dark:text-white leading-snug">
                  Assistance<br/>Intelligence
                </h3>
              </div>
              <p className="text-[13px] text-brand-slate leading-relaxed mb-4">
                AI-powered dispatch, smart routing, and real-time visibility ensure the right mobility solution reaches the right person.
              </p>
              <button className="text-[10px] font-bold text-[#2F80FF] uppercase tracking-widest hover:underline mt-auto self-start text-left">
                Learn More &rarr;
              </button>
            </div>

            <div className="flex-1 relative h-[250px] w-full flex items-center justify-center mt-6 lg:mt-0 pointer-events-none overflow-visible">
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 300 200">
                <path d="M50,100 Q100,50 150,100 T250,100" fill="none" stroke="#2F80FF" strokeWidth="1" strokeDasharray="4" />
                <path d="M50,150 Q100,100 150,150 T250,150" fill="none" stroke="#2F80FF" strokeWidth="1" strokeDasharray="4" />
                <circle cx="150" cy="100" r="3" fill="#2F80FF" />
                <circle cx="200" cy="100" r="2" fill="#FF7A1A" />
                <circle cx="100" cy="150" r="2" fill="#2F80FF" />
              </svg>

              <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[180px] h-[60px] border border-brand-border rounded-[100%] rotate-x-60" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100px] h-[30px] border border-[#2F80FF]/30 rounded-[100%] rotate-x-60 shadow-[0_0_20px_rgba(47,128,255,0.3)]" />

              <div className="absolute bottom-[20%] left-[45%]">
                 <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-[#2F80FF]/20 animate-ping absolute inset-0" />
                    <div className="w-10 h-10 rounded-full bg-[#2F80FF] shadow-[0_0_30px_#2F80FF] flex items-center justify-center relative z-10 border-2 border-white/20">
                       <Zap className="w-4 h-4 text-foreground dark:text-white" />
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: API-Driven Continuation Systems */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative bg-card border border-brand-border rounded-[24px] p-6 lg:p-8 flex flex-col lg:flex-row items-center gap-6 hover:border-[#2F80FF]/50 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#2F80FF]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            {/* Left Content Area */}
            <div className="flex-1 flex flex-col w-full h-full relative z-10 justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2F80FF]/20 to-transparent border border-[#2F80FF]/30 flex items-center justify-center shrink-0">
                  <Terminal className="w-5 h-5 text-[#2F80FF]" />
                </div>
                <h3 className="text-lg font-bold text-foreground dark:text-white leading-snug">
                  API-Driven<br/>Systems
                </h3>
              </div>
              <p className="text-[13px] text-brand-slate leading-relaxed mb-4">
                Seamlessly integrate trip continuation APIs into your platforms, workflows, and claims systems.
              </p>
              <button className="text-[10px] font-bold text-[#2F80FF] uppercase tracking-widest hover:underline mt-auto self-start text-left">
                Learn More &rarr;
              </button>
            </div>

            <div className="flex-1 relative h-[250px] w-full flex items-center justify-center mt-6 lg:mt-0 pointer-events-none overflow-visible">
              <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[160px] h-[50px] border border-[#2F80FF]/20 rounded-[100%] rotate-x-60 opacity-50" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100px] h-[30px] border border-[#2F80FF]/40 rounded-[100%] rotate-x-60 opacity-80 shadow-[0_0_20px_rgba(47,128,255,0.4)]" />

              <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 flex items-center justify-center">
                <div className="absolute w-16 h-16 rounded-full bg-[#2F80FF]/15 animate-ping" />
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0A192F] to-[#081120] border border-[#2F80FF] shadow-[0_0_30px_rgba(47,128,255,0.5)] flex items-center justify-center relative z-20">
                  <span className="text-[#2F80FF] font-black text-sm tracking-wider">API</span>
                </div>
              </div>

              <div className="absolute top-[10%] left-1/2 -translate-x-1/2">
                 <Cloud className="w-10 h-10 text-[#2F80FF]/40 drop-shadow-[0_0_12px_rgba(47,128,255,0.6)]" />
                 <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-[#2F80FF]/50 to-transparent" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
