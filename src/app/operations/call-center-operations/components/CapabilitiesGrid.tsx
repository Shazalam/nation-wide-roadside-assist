'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Headphones, Shield, MessageSquare, Activity, Cloud
} from 'lucide-react';

const CardVisual = ({ type }: { type: 'routing' | 'sla' | 'comms' }) => {
  if (type === 'routing') {
    return (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[180px] h-[60px] border border-[#2F80FF]/20 rounded-[100%] opacity-50" style={{ transform: 'rotateX(60deg)' }} />
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[120px] h-[30px] border border-[#2F80FF]/30 rounded-[100%] opacity-80 shadow-[0_0_30px_rgba(47,128,255,0.4)]" style={{ transform: 'rotateX(60deg)' }} />
        
        <motion.div 
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-4 top-6 w-32 h-20 bg-brand-bg/80 backdrop-blur-md border border-brand-border rounded-xl shadow-2xl p-2 transform"
          style={{ transform: 'perspective(1000px) rotateY(-15deg) rotateX(5deg)' }}
        >
          <div className="flex gap-1.5 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
          </div>
          <div className="w-1/2 h-1 bg-white/10 rounded mb-3" />
          <div className="flex gap-2">
            <div className="w-6 h-6 rounded-full border-2 border-[#2F80FF]/40 border-t-[#2F80FF] flex items-center justify-center"><Activity className="w-2 h-2 text-[#2F80FF]" /></div>
            <div className="flex-1 space-y-1 pt-0.5">
              <div className="w-full h-1 bg-white/10 rounded" />
              <div className="w-2/3 h-1 bg-white/10 rounded" />
              <div className="w-4/5 h-1 bg-[#2F80FF]/40 rounded" />
            </div>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute left-4 bottom-8 w-16 h-28 bg-card border-2 border-[#081120] rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col"
        >
          <div className="bg-[#2F80FF] h-6 w-full flex items-center justify-center">
            <div className="w-4 h-0.5 bg-white/30 rounded-full" />
          </div>
          <div className="p-1.5 space-y-1.5 flex-1">
            <div className="w-full h-10 bg-[#2F80FF]/10 rounded-md flex items-center justify-center border border-[#2F80FF]/20">
              <Headphones className="w-3 h-3 text-[#2F80FF]/60" />
            </div>
            <div className="w-3/4 h-1 bg-white/10 rounded" />
            <div className="w-1/2 h-1 bg-white/10 rounded" />
          </div>
        </motion.div>
      </div>
    );
  }

  if (type === 'sla') {
    return (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 160">
          <path d="M30,80 Q70,40 100,80 T170,80" fill="none" stroke="#2F80FF" strokeWidth="1" strokeDasharray="4" />
          <path d="M30,120 Q70,80 100,120 T170,120" fill="none" stroke="#2F80FF" strokeWidth="1" strokeDasharray="4" />
          <circle cx="100" cy="80" r="3" fill="#2F80FF" />
          <circle cx="140" cy="80" r="2" fill="#FF7A1A" />
          <circle cx="70" cy="120" r="2" fill="#2F80FF" />
        </svg>

        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[140px] h-[40px] border border-brand-border rounded-[100%]" style={{ transform: 'rotateX(60deg)' }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80px] h-[20px] border border-[#2F80FF]/30 rounded-[100%] shadow-[0_0_20px_rgba(47,128,255,0.3)]" style={{ transform: 'rotateX(60deg)' }} />

        <div className="absolute bottom-[20%] left-[45%]">
           <div className="relative">
              <div className="w-10 h-10 rounded-full bg-[#2F80FF]/20 animate-ping absolute inset-0" />
              <div className="w-10 h-10 rounded-full bg-[#2F80FF] shadow-[0_0_30px_#2F80FF] flex items-center justify-center relative z-10 border-2 border-white/20">
                 <Shield className="w-4 h-4 text-foreground dark:text-white" />
              </div>
           </div>
        </div>
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
          <span className="text-[#2F80FF] font-black text-sm tracking-wider">SMS</span>
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

const cards = [
  {
    title: "AI-Assisted Call Routing",
    desc: "Intelligent call classification, priority scoring, and automated dispatch routing based on live network density.",
    type: "routing",
    icon: Headphones,
  },
  {
    title: "SLA-Driven Dispatch",
    desc: "Real-time SLA tracking, escalation management, and performance monitoring for high-priority emergency events.",
    type: "sla",
    icon: Shield,
  },
  {
    title: "Real-Time Mobility Comms",
    desc: "Live ETA updates, proactive driver notifications, and automated multi-channel communication infrastructure.",
    type: "comms",
    icon: MessageSquare,
  }
] as const;

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
              Platform <span className="text-[#2F80FF]">Capabilities</span>
            </h2>
            <p className="text-brand-slate text-lg md:text-xl leading-relaxed">
              Our platform provides the infrastructure needed to modernize roadside claims, improve loss ratios, and elevate member satisfaction at scale.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, i) => (
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
