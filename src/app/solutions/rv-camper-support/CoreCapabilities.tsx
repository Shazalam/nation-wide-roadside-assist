'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Map, Cpu, Link as LinkIcon, ArrowRight } from 'lucide-react';

export default function CoreCapabilities() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-12 relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[rgba(47,128,255,0.08)] border border-[rgba(47,128,255,0.15)] rounded-full mb-5">
            <span className="text-[9px] font-black text-[#2F80FF] uppercase tracking-[0.3em]">Core Capabilities</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-4">
            Built for the <span className="text-[#2F80FF]">RV Ecosystem</span>
          </h2>
          <p className="text-[#94A3B8] text-lg leading-relaxed">
            Precision-engineered infrastructure for the full spectrum of RV mobility operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Map, title: 'Nationwide RV Vendor Network',
              desc: 'Access a specialized nationwide network of RV recovery providers, mobile technicians, and heavy-duty roadside operators with real-time proximity matching.',
              stat: '50,000+', statLabel: 'Certified Vendors',
              visual: (
                <div className="relative h-44 bg-[#081120] rounded-t-2xl overflow-hidden">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, #2F80FF 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  {[{ t: '30%', l: '20%', d: 0 }, { t: '50%', l: '50%', d: 0.5 }, { t: '25%', l: '70%', d: 1 }, { t: '60%', l: '35%', d: 0.8 }, { t: '40%', l: '80%', d: 0.3 }, { t: '70%', l: '60%', d: 1.2 }].map((dot, i) => (
                    <div key={i} style={{ top: dot.t, left: dot.l }} className="absolute">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2F80FF] opacity-50" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2F80FF] shadow-[0_0_8px_#2F80FF]" />
                      </span>
                    </div>
                  ))}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="relative flex h-5 w-5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF7A1A] opacity-40" />
                      <span className="relative inline-flex h-5 w-5 rounded-full bg-[#FF7A1A] shadow-[0_0_15px_#FF7A1A]" />
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#081120] to-transparent" />
                </div>
              )
            },
            {
              icon: Cpu, title: 'Advanced RV Dispatch Intelligence',
              desc: 'Automate roadside coordination for oversized vehicles, trailers, and motorhomes with SLA-driven dispatch intelligence and predictive routing.',
              stat: '87.5%', statLabel: 'Auto-Dispatch Rate',
              visual: (
                <div className="relative h-44 bg-[#081120] rounded-t-2xl overflow-hidden p-4">
                  <div className="flex items-end gap-1.5 h-28 relative z-10">
                    {[55, 72, 48, 91, 68, 85, 62, 94, 78, 88].map((h, i) => (
                      <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }}
                        transition={{ delay: i * 0.07, duration: 0.6, ease: 'easeOut' }}
                        className="flex-1 rounded-t-sm"
                        style={{ background: i === 3 || i === 7 ? 'linear-gradient(to top, #FF7A1A, #FF9A5A)' : 'linear-gradient(to top, #1a4fa0, #2F80FF)', opacity: 0.85 }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-[9px] font-mono text-[#94A3B8] mt-1 relative z-10">
                    <span>FORECAST</span><span className="text-[#2F80FF]">OPTIMAL ETA</span>
                  </div>
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-[rgba(47,128,255,0.1)] border border-[rgba(47,128,255,0.2)] rounded-lg px-2 py-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2F80FF] animate-pulse" />
                    <span className="text-[8px] font-mono text-[#2F80FF]">AUTO-DISPATCH ON</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#081120] to-transparent" />
                </div>
              )
            },
            {
              icon: LinkIcon, title: 'Connected Mobility APIs',
              desc: 'Integrate roadside operations directly into RV rental platforms, campground ecosystems, insurance systems, and connected mobility apps via RESTful APIs.',
              stat: '99.9%', statLabel: 'API Uptime',
              visual: (
                <div className="relative h-44 bg-[#081120] rounded-t-2xl overflow-hidden p-4 font-mono">
                  <div className="text-[10px] leading-relaxed">
                    <div className="text-[#94A3B8]">POST <span className="text-white">/v1/rv/dispatch</span></div>
                    <div className="mt-1.5"><span className="text-[#2F80FF]">{'{'}</span></div>
                    <div className="pl-4">
                      <div><span className="text-emerald-400">"vehicle_type"</span>: <span className="text-amber-300">"Class A"</span>,</div>
                      <div><span className="text-emerald-400">"length_ft"</span>: <span className="text-pink-400">40</span>,</div>
                      <div><span className="text-emerald-400">"issue"</span>: <span className="text-amber-300">"tire_blowout"</span></div>
                    </div>
                    <div className="text-[#2F80FF]">{'}'}</div>
                    <div className="mt-1.5 flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-emerald-400 text-[9px]">200 OK · 12ms</span>
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <div className="relative w-10 h-10 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full border-2 border-[#2F80FF]/30 animate-ping" />
                      <div className="absolute inset-1 rounded-full border border-[#2F80FF]/50" />
                      <span className="text-[8px] font-black text-[#2F80FF]">API</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#081120] to-transparent" />
                </div>
              )
            },
          ].map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <motion.div key={idx}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: idx * 0.12, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="group bg-[#0A192F]/60 border border-[rgba(255,255,255,0.07)] rounded-2xl overflow-hidden hover:border-[#2F80FF]/40 hover:shadow-[0_0_40px_rgba(47,128,255,0.12)] transition-all duration-300"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F80FF]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {cap.visual}
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2.5 bg-[rgba(47,128,255,0.1)] border border-[rgba(47,128,255,0.2)] rounded-xl shrink-0">
                      <Icon className="w-5 h-5 text-[#2F80FF]" />
                    </div>
                    <h3 className="text-base font-black text-white leading-snug pt-0.5">{cap.title}</h3>
                  </div>
                  <p className="text-[#94A3B8] text-sm leading-relaxed mb-5">{cap.desc}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-[rgba(255,255,255,0.06)]">
                    <div>
                      <div className="text-xl font-black text-white font-mono">{cap.stat}</div>
                      <div className="text-[10px] text-[#94A3B8] mt-0.5">{cap.statLabel}</div>
                    </div>
                    <button className="text-[10px] font-bold text-[#2F80FF] uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
