'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navigation, Zap, Code } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const cards = [
  {
    title: "Real-Time Fleet Visibility",
    desc: "Track fleet operations, roadside events, and vehicle availability in real-time across nationwide enterprise networks.",
    icon: Navigation,
    color: 'brand-blue',
    viz: (
      <div className="absolute bottom-0 right-0 left-0 h-36 bg-brand-blue/5 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(47,128,255,0.3) 1px, transparent 0)`,
          backgroundSize: '16px 16px'
        }} />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 h-20 w-20 bg-brand-blue/20 blur-2xl rounded-full"
        />
        <div className="absolute inset-0 p-4 flex flex-col justify-end gap-2">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="h-1 w-full bg-brand-blue/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${50 + i * 8}%` }}
                transition={{ duration: 1.2, delay: i * 0.08 }}
                className="h-full bg-brand-blue/60 rounded-full"
              />
            </div>
          ))}
        </div>
        {/* GPS dots */}
        {[{ x: 20, y: 15 }, { x: 60, y: 40 }, { x: 120, y: 25 }, { x: 180, y: 55 }].map((p, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
            style={{ left: p.x, top: p.y }}
            className="absolute h-1.5 w-1.5 rounded-full bg-brand-blue shadow-[0_0_6px_rgba(47,128,255,0.8)]"
          />
        ))}
      </div>
    )
  },
  {
    title: "Intelligent Dispatch Automation",
    desc: "Automate vendor assignments using proximity intelligence, fleet priorities, and SLA-based routing systems.",
    icon: Zap,
    color: 'brand-orange',
    viz: (
      <div className="absolute bottom-0 right-0 left-0 h-36 bg-brand-orange/5 border-t border-white/5 p-4 flex flex-col justify-end space-y-2.5">
        {[
          { label: 'Vendor Match', val: '98%' },
          { label: 'SLA Compliance', val: '99.4%' },
          { label: 'Auto-Assign', val: '92%' },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <motion.div
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
              className="h-1.5 w-1.5 rounded-full bg-brand-orange shrink-0"
            />
            <span className="text-[9px] font-bold text-brand-slate uppercase w-24 shrink-0">{item.label}</span>
            <div className="h-1.5 flex-1 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: item.val }}
                transition={{ duration: 1.5, delay: 0.3 + i * 0.15 }}
                className="h-full bg-brand-orange/60 rounded-full"
              />
            </div>
            <span className="text-[9px] font-bold text-brand-orange w-10 text-right">{item.val}</span>
          </div>
        ))}
      </div>
    )
  },
  {
    title: "Unified Fleet Operations APIs",
    desc: "Integrate roadside operations directly into fleet management platforms, rental systems, and enterprise mobility ecosystems.",
    icon: Code,
    color: 'brand-blue',
    viz: (
      <div className="absolute bottom-0 right-0 left-0 h-36 bg-brand-blue/5 border-t border-white/5 p-4 font-mono text-[10px] text-brand-blue/70 leading-relaxed overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p><span className="text-purple-400">const</span> dispatch = <span className="text-emerald-400">await</span></p>
          <p className="ml-2">nwt.dispatches.<span className="text-amber-400">create</span>{'({'}</p>
          <p className="ml-4"><span className="text-brand-slate">fleet_id</span>: <span className="text-emerald-400">&apos;FLEET-8291&apos;</span>,</p>
          <p className="ml-4"><span className="text-brand-slate">priority</span>: <span className="text-emerald-400">&apos;high&apos;</span>,</p>
          <p className="ml-4"><span className="text-brand-slate">service</span>: <span className="text-emerald-400">&apos;recovery&apos;</span></p>
          <p className="ml-2">{'}'});</p>
        </motion.div>
      </div>
    )
  }
];

export const CoreCapabilities = () => {
  return (
    <section className="relative z-10 py-32 bg-brand-bg">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.3em] mb-4">Core Infrastructure</p>
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">Mission-Critical Fleet Infrastructure</h2>
            <p className="text-brand-slate text-lg">Engineered for the demands of high-volume rental operations and nationwide logistics networks.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="group"
            >
              <GlassPanel className="p-8 h-[440px] border-white/5 hover:border-brand-blue/30 transition-all group relative overflow-hidden flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand-blue/10 transition-all duration-300">
                    <card.icon className="h-7 w-7 text-brand-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                  <p className="text-brand-slate text-sm leading-relaxed">{card.desc}</p>
                </div>
                <div className="mt-auto relative z-0">
                  {card.viz}
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
