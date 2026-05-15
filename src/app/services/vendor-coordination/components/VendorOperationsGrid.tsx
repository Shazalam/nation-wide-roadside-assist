'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Map, Zap, Code2, ArrowRight } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const capabilities = [
  {
    title: 'Nationwide Vendor Network',
    desc: 'Access a verified network of high-performance tow operators, mobile mechanics, and recovery specialists across the country with real-time availability and capability matching.',
    icon: Map,
    link: 'Learn More'
  },
  {
    title: 'SLA-Driven Dispatch Intelligence',
    desc: 'AI-powered dispatch engine matches the right vendor to the right incident, reduces response times, and maximizes SLA compliance across enterprise fleets.',
    icon: Zap,
    link: 'Learn More'
  },
  {
    title: 'API-First Vendor Coordination',
    desc: 'Seamlessly integrate vendor data, dispatch workflows, telemetry, and reporting through our enterprise APIs and webhooks directly into your platform.',
    icon: Code2,
    link: 'Learn More'
  }
];

export const VendorOperationsGrid = () => {
  return (
    <section className="py-32 bg-brand-bg relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {capabilities.map((cap, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               viewport={{ once: true }}
             >
                <GlassPanel className="h-full p-10 border-brand-border bg-white/[0.01] hover:bg-white/[0.03] transition-all group overflow-hidden relative flex flex-col justify-between">
                   <div className="absolute -right-8 -top-8 h-32 w-32 bg-[#2F80FF]/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                   
                   <div>
                     <h3 className="text-xl font-black text-foreground dark:text-white mb-4 leading-tight">{cap.title}</h3>
                     <p className="text-brand-slate leading-relaxed font-medium text-sm mb-12">
                        {cap.desc}
                     </p>
                   </div>

                   {/* Visual Abstraction Placeholder */}
                   <div className="h-40 w-full mb-10 relative opacity-60 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                     <div className="absolute inset-0 bg-gradient-to-t from-brand-bg to-transparent z-10" />
                     {i === 0 && (
                       <div className="w-full h-full border border-brand-border rounded-xl bg-[url('https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-luminosity" />
                     )}
                     {i === 1 && (
                       <div className="w-full h-full border border-brand-border rounded-xl bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-luminosity" />
                     )}
                     {i === 2 && (
                       <div className="w-full h-full border border-brand-border rounded-xl bg-card bg-opacity-50 border-brand-blue/20" style={{ backgroundImage: 'radial-gradient(circle at center, #2F80FF22 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                     )}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-card border border-[#2F80FF]/30 flex items-center justify-center z-20 shadow-[0_0_20px_rgba(47,128,255,0.4)]">
                        <cap.icon className="h-5 w-5 text-[#2F80FF]" />
                     </div>
                   </div>

                   <button className="flex items-center gap-2 text-[10px] font-bold text-[#2F80FF] uppercase tracking-widest mt-auto group-hover:underline">
                      {cap.link} <ArrowRight className="h-3 w-3" />
                   </button>
                </GlassPanel>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};
