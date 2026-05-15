'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Zap, Code2, ArrowRight } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const capabilities = [
  {
    title: 'Nationwide Assistance Network',
    desc: 'Access a vetted network of professional providers across the country, ensuring fast response times and reliable service wherever you are.',
    icon: Globe,
    graphic: 'map'
  },
  {
    title: 'SLA-Driven Dispatch Operations',
    icon: Zap,
    desc: 'AI-powered dispatching, real-time routing, and SLA monitoring ensure every customer gets the right help at the right time.',
    graphic: 'dashboard'
  },
  {
    title: 'API-First Assistance Infrastructure',
    icon: Code2,
    desc: 'Seamlessly integrate roadside assistance into your platforms with our robust APIs, webhooks, and real-time event infrastructure.',
    graphic: 'code'
  }
];

export const AssistanceCapabilities = () => {
  return (
    <section className="py-32 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassPanel className="p-10 border-brand-border bg-white/[0.01] hover:bg-white/[0.03] transition-all group h-full flex flex-col">
                <div className="flex-1">
                  <div className="h-14 w-14 rounded-2xl bg-[#2F80FF]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    <cap.icon className="h-7 w-7 text-[#2F80FF]" />
                  </div>
                  <h4 className="text-2xl font-black text-foreground dark:text-white mb-4 tracking-tight leading-tight">{cap.title}</h4>
                  <p className="text-brand-slate text-sm leading-relaxed mb-10">{cap.desc}</p>
                </div>

                {/* Simulated Graphic Placeholder */}
                <div className="relative h-40 bg-brand-bg rounded-2xl border border-brand-border overflow-hidden mb-8">
                   <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#2F80FF 1px, transparent 0)', backgroundSize: '20px 20px' }} />
                   {cap.graphic === 'map' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="h-20 w-32 border border-[#2F80FF]/30 rounded-lg relative">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-2 w-2 bg-[#2F80FF] rounded-full animate-pulse shadow-[0_0_10px_#2F80FF]" />
                         </div>
                      </div>
                   )}
                   {cap.graphic === 'dashboard' && (
                      <div className="absolute inset-0 p-4 space-y-3">
                         <div className="h-2 w-3/4 bg-white/5 rounded-full" />
                         <div className="h-2 w-1/2 bg-white/5 rounded-full" />
                         <div className="h-8 w-full bg-[#2F80FF]/10 rounded-lg border border-[#2F80FF]/20" />
                      </div>
                   )}
                   {cap.graphic === 'code' && (
                      <div className="absolute inset-0 p-4 font-mono text-[10px] text-[#2F80FF]/60">
                         <div>{`{`}</div>
                         <div className="ml-4">{`"status": "dispatched",`}</div>
                         <div className="ml-4">{`"eta": "12m"`}</div>
                         <div>{`}`}</div>
                      </div>
                   )}
                </div>

                <button className="flex items-center gap-2 text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.2em] group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="h-3 w-3" />
                </button>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
