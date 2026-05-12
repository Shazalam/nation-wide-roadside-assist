'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Search, Users, Radio, Wrench, FileText } from 'lucide-react';

const steps = [
  {
    num: '01', icon: AlertTriangle, title: 'RV Incident Reported',
    desc: 'Incident submitted via mobile app, voice agent, or connected system.',
    color: '#FF7A1A',
  },
  {
    num: '02', icon: Search, title: 'Diagnostics Validation',
    desc: 'Remote or on-site diagnostics validate issue, vehicle type and service requirements.',
    color: '#2F80FF',
  },
  {
    num: '03', icon: Users, title: 'Vendor Assignment',
    desc: 'AI matches the best vendor based on location, capacity &amp; expertise.',
    color: '#2F80FF',
  },
  {
    num: '04', icon: Radio, title: 'Dispatch Coordination',
    desc: 'Live coordination with vendor based on location and ETA tracking.',
    color: '#2F80FF',
  },
  {
    num: '05', icon: Wrench, title: 'Roadside Resolution',
    desc: 'Onsite repair, towing, or recovery with real-time status updates.',
    color: '#FF7A1A',
  },
  {
    num: '06', icon: FileText, title: 'Automated Reporting',
    desc: 'Reports, billing, and analytics reports automatically generated.',
    color: '#2F80FF',
  },
];

export default function Workflow() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[#0A192F]/10 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[rgba(47,128,255,0.08)] border border-[rgba(47,128,255,0.15)] rounded-full mb-5">
            <span className="text-[9px] font-black text-[#2F80FF] uppercase tracking-[0.3em]">Operations</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-4">
            RV Roadside Operations <span className="text-[#2F80FF]">Workflow</span>
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
            A seamless, automated sequence from the moment an incident is reported to final resolution and analytics logging.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop connector line */}
          <div className="hidden lg:block absolute top-10 left-[calc(8.33%+16px)] right-[calc(8.33%+16px)] h-px bg-[rgba(255,255,255,0.05)] z-0" />
          <motion.div
            className="hidden lg:block absolute top-10 left-[calc(8.33%+16px)] h-px z-0 bg-gradient-to-r from-[#2F80FF] via-[#00C6FF] to-[#FF7A1A]"
            initial={{ width: 0 }}
            whileInView={{ width: 'calc(100% - 16.66% - 32px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  className="flex flex-col items-center lg:items-start"
                >
                  {/* Circle node */}
                  <div className="relative mb-6">
                    <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(47,128,255,0.4)]"
                      style={{ borderColor: step.color, backgroundColor: `${step.color}15` }}>
                      <Icon className="w-4 h-4" style={{ color: step.color }} />
                    </div>
                    {/* Pulse ring */}
                    <div className="absolute inset-0 rounded-full animate-ping opacity-20"
                      style={{ backgroundColor: step.color, animationDuration: `${2 + idx * 0.3}s` }} />
                  </div>

                  <div className="bg-[#0A192F]/60 backdrop-blur-sm border border-[rgba(255,255,255,0.07)] p-5 rounded-xl w-full hover:border-[#2F80FF]/30 transition-colors group">
                    <span className="font-mono text-[10px] block mb-2 font-black" style={{ color: step.color }}>{step.num}</span>
                    <h4 className="font-black text-sm text-white mb-2 leading-snug">{step.title}</h4>
                    <p className="text-[#94A3B8] text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { val: '< 90s', label: 'Avg. Dispatch Time' },
            { val: '98.7%', label: 'Workflow Completion' },
            { val: '4.8★', label: 'Customer Satisfaction' },
            { val: '0 Touch', label: 'Automated Resolution' },
          ].map((s, i) => (
            <div key={i} className="bg-[#0A192F]/40 border border-[rgba(255,255,255,0.06)] rounded-xl p-5 text-center">
              <div className="text-2xl font-black text-white font-mono mb-1">{s.val}</div>
              <div className="text-[10px] text-[#94A3B8] uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
