'use client';

import React from 'react';
import { motion } from 'framer-motion';

const CardVisual = ({ type }: { type: 'visibility' | 'dispatch' | 'api' }) => {
  if (type === 'visibility') {
    return (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {/* Isometric Grid */}
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `linear-gradient(rgba(47, 128, 255, 0.2) 1px, transparent 1px), linear-gradient(90px, rgba(47, 128, 255, 0.2) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            transform: 'perspective(1000px) rotateX(60deg) rotateZ(-30deg) scale(2)',
          }}
        />
        
        {/* Animated Van & Pulse */}
        <div className="relative z-10 translate-y-4">
          <motion.div
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Simple Isometric Van Placeholder using CSS */}
            <div className="w-24 h-12 bg-gradient-to-br from-[#2F80FF]/80 to-[#2F80FF]/40 rounded-lg relative transform skew-x-[-20deg] border border-white/20 shadow-[0_20px_40px_rgba(47,128,255,0.3)]">
              <div className="absolute top-1 left-2 w-10 h-6 bg-white/20 rounded shadow-inner" />
              <div className="absolute -bottom-2 right-4 w-4 h-4 rounded-full bg-black/40 blur-[2px]" />
              <div className="absolute -bottom-2 left-4 w-4 h-4 rounded-full bg-black/40 blur-[2px]" />
            </div>
            
            {/* Pulse Node */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2">
              <div className="relative">
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-[#2F80FF] rounded-full blur-sm"
                />
                <div className="w-3 h-3 bg-[#2F80FF] rounded-full border border-white relative z-10 shadow-[0_0_15px_#2F80FF]" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Data Points */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [-10, 10, -10],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
            className="absolute w-2 h-2 rounded-full bg-[#2F80FF] blur-[1px]"
            style={{
              top: `${20 + i * 20}%`,
              left: `${10 + i * 25}%`,
            }}
          />
        ))}
      </div>
    );
  }

  if (type === 'dispatch') {
    return (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 200 200" className="w-48 h-48 relative z-10">
          <defs>
            <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2F80FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#2F80FF" stopOpacity="0.2" />
            </radialGradient>
            <radialGradient id="orangeGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FF7A1A" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FF7A1A" stopOpacity="0.2" />
            </radialGradient>
          </defs>
          
          {/* Connection Lines */}
          <motion.path
            d="M 100 100 L 40 60 M 100 100 L 160 70 M 100 100 L 140 150 M 100 100 L 50 140"
            stroke="rgba(47, 128, 255, 0.2)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Center Node */}
          <circle cx="100" cy="100" r="12" fill="url(#nodeGradient)" className="animate-pulse" />
          <circle cx="100" cy="100" r="6" fill="#2F80FF" stroke="white" strokeWidth="1" />

          {/* Sub Nodes */}
          <motion.circle 
            animate={{ scale: [1, 1.2, 1] }} 
            transition={{ duration: 3, repeat: Infinity }}
            cx="40" cy="60" r="8" fill="url(#orangeGradient)" 
          />
          <circle cx="160" cy="70" r="8" fill="url(#nodeGradient)" />
          <circle cx="140" cy="150" r="8" fill="url(#orangeGradient)" />
          <circle cx="50" cy="140" r="8" fill="url(#nodeGradient)" />
        </svg>

        {/* Orbital Ring */}
        <div className="absolute w-40 h-40 border border-[#2F80FF]/10 rounded-full animate-[spin_20s_linear_infinite]" />
        <div className="absolute w-56 h-56 border border-[#2F80FF]/5 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[160px] h-[50px] border border-[#2F80FF]/20 rounded-[100%] opacity-50" style={{ transform: 'rotateX(60deg)' }} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100px] h-[30px] border border-[#2F80FF]/40 rounded-[100%] opacity-80 shadow-[0_0_20px_rgba(47,128,255,0.4)]" style={{ transform: 'rotateX(60deg)' }} />

      <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 flex items-center justify-center">
        <div className="absolute w-16 h-16 rounded-full bg-[#2F80FF]/15 animate-ping" />
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0A192F] to-[#081120] border border-[#2F80FF] shadow-[0_0_30px_rgba(47,128,255,0.5)] flex items-center justify-center relative z-20">
          <span className="text-[#2F80FF] font-black text-sm tracking-wider">API</span>
        </div>
      </div>

      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 flex flex-col items-center">
         <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2F80FF]/40 drop-shadow-[0_0_12px_rgba(47,128,255,0.6)]">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
         </svg>
         <div className="w-px h-12 bg-gradient-to-b from-[#2F80FF]/50 to-transparent mt-2" />
      </div>
    </div>
  );
};

const capabilities = [
  {
    title: 'Nationwide Heavy-Duty Network',
    desc: 'Instant access to over 5,000 certified heavy-duty recovery units and rotators capable of handling any Class 8 incident nationwide.',
    type: 'visibility' as const
  },
  {
    title: 'Real-Time Incident Dispatch',
    desc: 'Proprietary dispatch engine that calculates weight-class requirements and matches the most qualified recovery unit within seconds.',
    type: 'dispatch' as const
  },
  {
    title: 'API-Driven Recovery Intelligence',
    desc: 'Programmable recovery infrastructure allowing fleets and insurers to trigger incident workflows and track telemetry via REST/SDKs.',
    type: 'api' as const
  }
];

export const CapabilitiesGrid = () => {
  return (
    <section className="relative z-10 py-24 md:py-32 bg-brand-bg overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#2F80FF]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#FF7A1A]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-foreground dark:text-white mb-6 tracking-tight">
              Mission-Critical <span className="text-[#2F80FF]">Field Intelligence</span>
            </h2>
            <p className="text-brand-slate text-lg md:text-xl leading-relaxed">
              Comprehensive recovery operations engineered for rapid heavy-duty resolution and deep-stack enterprise integration.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {capabilities.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group h-full"
            >
              <div className="relative h-full bg-card/40 backdrop-blur-sm border border-brand-border rounded-2xl p-6 md:p-8 hover:border-[#2F80FF]/40 transition-all duration-500 overflow-hidden">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2F80FF]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Content Container - Split Layout */}
                <div className="relative z-20 flex flex-col h-full">
                  <div className="flex flex-col lg:flex-row gap-6 h-full items-center">
                    {/* Left Side: Text */}
                    <div className="flex-1 text-left">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground dark:text-white mb-3 group-hover:text-[#2F80FF] transition-colors leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-brand-slate text-sm leading-relaxed mb-6">
                        {card.desc}
                      </p>
                    </div>

                    {/* Right Side: Visualization */}
                    <div className="w-full lg:w-[45%] h-[160px] lg:h-full relative shrink-0">
                      <CardVisual type={card.type} />
                    </div>
                  </div>
                </div>

                {/* Subtle Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '24px 24px' }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
