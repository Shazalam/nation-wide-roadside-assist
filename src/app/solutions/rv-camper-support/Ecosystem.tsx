'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Caravan, TentTree, Shield, Smartphone, Globe2 } from 'lucide-react';

const cards = [
  {
    title: 'RV Rental Providers',
    icon: Caravan, color: '#2F80FF',
    metrics: ['SLA Metrics', 'Route Analytics', 'API Integrations'],
    stat: '98.7%', statLabel: 'Customer Satisfaction',
    desc: 'Enhance customer experience with 24/7 roadside support and connected mobility.',
    image: '🚐',
  },
  {
    title: 'Campground Networks',
    icon: TentTree, color: '#FF7A1A',
    metrics: ['Vendor Intelligence', 'Onsite Repair', 'Coverage Analytics'],
    stat: '2,104+', statLabel: 'Partner Campgrounds',
    desc: 'Offer guests on-site roadside assistance, validate issues, and manage travel routes.',
    image: '⛺',
  },
  {
    title: 'Insurance Providers',
    icon: Shield, color: '#2F80FF',
    metrics: ['Automated Billing', 'Claims Routing', 'SLA Compliance'],
    stat: '34%', statLabel: 'Faster Claims Resolution',
    desc: 'Reduce chain costs and improve response times with intelligent dispatch.',
    image: '🛡️',
  },
  {
    title: 'Connected Mobility Platforms',
    icon: Smartphone, color: '#2F80FF',
    metrics: ['Live Telemetry', 'GPS Tracking', 'Predictive Analytics'],
    stat: '99.9%', statLabel: 'API Uptime',
    desc: 'Seamlessly integrate roadside operations into your mobility and travel platforms.',
    image: '📱',
  },
  {
    title: 'Enterprise Travel Ecosystems',
    icon: Globe2, color: '#FF7A1A',
    metrics: ['Fleet Intelligence', 'Volume Scalability', 'National Coverage'],
    stat: '500M+', statLabel: 'Miles Supported Annually',
    desc: 'Unified infrastructure for RV fleets, tour operators, and travel organizations.',
    image: '🌐',
  },
];

export default function Ecosystem() {
  return (
    <section className="py-24 bg-card/30 border-y border-[rgba(255,255,255,0.06)]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[rgba(47,128,255,0.08)] border border-[rgba(47,128,255,0.15)] rounded-full mb-5">
            <span className="text-[9px] font-black text-[#2F80FF] uppercase tracking-[0.3em]">Ecosystem</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-4">
            Powering the Entire <span className="text-[#2F80FF]">RV &amp; Camper</span> Ecosystem
          </h2>
          <p className="text-brand-slate max-w-2xl mx-auto leading-relaxed">
            A unified operations platform supporting every layer of the modern RV and camper ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.01 }}
                className="group relative bg-brand-bg border border-[rgba(255,255,255,0.07)] rounded-2xl overflow-hidden hover:border-[#2F80FF]/40 hover:shadow-[0_0_30px_rgba(47,128,255,0.12)] transition-all duration-300"
              >
                {/* Top glow accent */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundImage: `linear-gradient(to right, transparent, ${card.color}, transparent)` }} />

                {/* Header area */}
                <div className="p-5 pb-0">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-xl border" style={{ backgroundColor: `${card.color}15`, borderColor: `${card.color}30` }}>
                      <Icon className="w-5 h-5" style={{ color: card.color }} />
                    </div>
                    <span className="text-2xl">{card.image}</span>
                  </div>
                  <h3 className="font-black text-base text-foreground dark:text-white leading-snug mb-2">{card.title}</h3>
                  <p className="text-brand-slate text-xs leading-relaxed mb-4">{card.desc}</p>
                </div>

                {/* Metrics list */}
                <div className="px-5 pb-4">
                  <ul className="space-y-1.5 mb-4">
                    {card.metrics.map(m => (
                      <li key={m} className="flex items-center gap-2 text-xs text-brand-slate">
                        <div className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: card.color }} />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stat footer */}
                <div className="mx-5 mb-5 pt-4 border-t border-[rgba(255,255,255,0.06)]">
                  <div className="text-xl font-black text-foreground dark:text-white font-mono" style={{ color: card.color }}>{card.stat}</div>
                  <div className="text-[9px] text-brand-slate mt-0.5 uppercase tracking-wide">{card.statLabel}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
