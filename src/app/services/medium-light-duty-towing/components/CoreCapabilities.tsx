'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cloud } from 'lucide-react';

const CardVisual = ({ type }: { type: 'visibility' | 'dispatch' | 'api' | 'map' }) => {
  if (type === 'map') {
    return (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {/* Subtle Map/Grid Base */}
        <div 
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #2F80FF 1px, transparent 0)`,
            backgroundSize: '16px 16px',
          }}
        />

        {/* Connections */}
        <svg viewBox="0 0 200 100" className="absolute inset-0 w-full h-full z-10 opacity-40" preserveAspectRatio="none">
           <motion.path
             d="M 40 50 Q 80 20 120 50 T 180 40"
             stroke="#2F80FF"
             strokeWidth="1.5"
             strokeDasharray="4 4"
             fill="none"
             initial={{ pathLength: 0 }}
             animate={{ pathLength: 1 }}
             transition={{ duration: 3, repeat: Infinity }}
           />
           <motion.path
             d="M 60 70 Q 100 90 140 60"
             stroke="#FF7A1A"
             strokeWidth="1.5"
             strokeDasharray="4 4"
             fill="none"
             initial={{ pathLength: 0 }}
             animate={{ pathLength: 1 }}
             transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
           />
        </svg>

        {/* Nodes */}
        {[
          { top: '40%', left: '20%', color: '#2F80FF' },
          { top: '60%', left: '30%', color: '#FF7A1A' },
          { top: '35%', left: '60%', color: '#2F80FF' },
          { top: '55%', left: '70%', color: '#2F80FF' },
          { top: '30%', left: '90%', color: '#FF7A1A' }
        ].map((node, i) => (
          <div key={i} className="absolute z-20" style={{ top: node.top, left: node.left }}>
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 2, 1], opacity: [0.8, 0, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                className="absolute inset-0 rounded-full blur-[2px]"
                style={{ backgroundColor: node.color }}
              />
              <div 
                className="w-2 h-2 rounded-full relative z-10 border border-white"
                style={{ backgroundColor: node.color, boxShadow: `0 0 10px ${node.color}` }}
              />
            </div>
          </div>
        ))}

        {/* Center Scanner */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] border border-[#2F80FF]/20 rounded-full">
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
             className="w-full h-full rounded-full"
             style={{ background: 'conic-gradient(from 0deg, transparent 0deg, transparent 270deg, rgba(47, 128, 255, 0.2) 360deg)' }}
           />
        </div>
      </div>
    );
  }
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
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none overflow-visible">
      <div className="absolute bottom-[0%] left-1/2 -translate-x-1/2 w-[120px] h-[30px] border border-[#2F80FF]/20 rounded-[100%] rotate-x-60 opacity-50" />
      <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[80px] h-[20px] border border-[#2F80FF]/40 rounded-[100%] rotate-x-60 opacity-80 shadow-[0_0_20px_rgba(47,128,255,0.4)]" />

      <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 flex items-center justify-center">
        <div className="absolute w-12 h-12 rounded-full bg-[#2F80FF]/15 animate-ping" />
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0A192F] to-[#081120] border border-[#2F80FF] shadow-[0_0_30px_rgba(47,128,255,0.5)] flex items-center justify-center relative z-20">
          <span className="text-[#2F80FF] font-black text-[10px] tracking-wider">API</span>
        </div>
      </div>

      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 flex flex-col items-center">
         <Cloud className="w-8 h-8 text-[#2F80FF]/40 drop-shadow-[0_0_12px_rgba(47,128,255,0.6)]" />
         <div className="w-px h-8 bg-gradient-to-b from-[#2F80FF]/50 to-transparent mt-1" />
      </div>
    </div>
  );
};

const cards = [
  {
    title: 'Smart Dispatch',
    desc: 'AI-driven vendor matching based on vehicle class, location, and real-time availability.',
    type: 'dispatch'
  },
  {
    title: 'North American Reach',
    desc: 'Full coverage across USA and Canada with a managed network of 12,000+ verified light-duty vendors.',
    type: 'map'
  },
  {
    title: 'White-Label UX',
    desc: 'Seamlessly integrate roadside assistance into your brand with customizable digital web-apps.',
    type: 'api'
  },
  {
    title: 'Real-time Telemetry',
    desc: 'End-to-end tracking of every dispatch event from request to on-scene arrival.',
    type: 'visibility'
  }
] as const;

export const CoreCapabilities = () => {
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
            <h2 className="text-4xl md:text-5xl font-black text-foreground dark:text-white mt-4 tracking-tight">
              Core Infrastructure <span className="text-[#2F80FF]">Capabilities</span>
            </h2>
            <p className="text-brand-slate text-lg md:text-xl leading-relaxed mt-4">
              Advanced network coordination for seamless medium and light-duty towing recovery.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group h-full"
            >
              <div className="relative h-full bg-card/40 backdrop-blur-sm border border-brand-border rounded-2xl p-6 hover:border-[#2F80FF]/40 transition-all duration-500 overflow-hidden">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2F80FF]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Content Container - Stacked Layout */}
                <div className="relative z-20 flex flex-col h-full">
                  <div className="flex flex-col gap-6 h-full items-start">
                    {/* Top Side: Text */}
                    <div className="flex-1 text-left w-full">
                      <h3 className="text-xl font-bold text-foreground dark:text-white mb-3 group-hover:text-[#2F80FF] transition-colors leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-brand-slate text-sm leading-relaxed">
                        {card.desc}
                      </p>
                    </div>

                    {/* Bottom Side: Visualization */}
                    <div className="w-full h-[140px] relative shrink-0 mt-auto">
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
