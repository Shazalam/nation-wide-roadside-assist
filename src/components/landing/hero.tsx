'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Globe, Shield, Clock, Users, Building,
  Truck, ShieldCheck, Network, AlertTriangle,
  Navigation, Zap, Map
} from 'lucide-react';
import { Logo } from '@/components/ui/logo';

const FEATURE_CARDS = [
  {
    id: 1,
    title: 'AREAS SERVED',
    subtitle: 'SERVING USA, FULL CANADA & CROSS-BORDER OPERATIONS',
    desc: 'Connected roadside assistance, towing, and recovery operations throughout the United States, Canada, and cross-border mobility routes.',
    icon: Globe,
    glows: ['rgba(6,182,212,0.18)', 'rgba(59,130,246,0.12)'],
  },
  {
    id: 2,
    title: '3000+ VERIFIED VENDORS',
    subtitle: 'TRUSTED SERVICE NETWORK',
    desc: 'Extensive network of towing, roadside assistance, and recovery providers across North America.',
    icon: Users,
    glows: ['rgba(147,51,234,0.18)', 'rgba(59,130,246,0.12)'],
  },
  {
    id: 3,
    title: '24/7 DISPATCH OPERATIONS',
    subtitle: 'ALWAYS-ON RESPONSE CENTER',
    desc: 'Continuous dispatch coordination engineered for enterprise roadside operations.',
    icon: Clock,
    glows: ['rgba(236,72,153,0.18)', 'rgba(147,51,234,0.12)'],
  },
  {
    id: 4,
    title: 'ENTERPRISE RESPONSE TEAMS',
    subtitle: 'TRAINED OPERATIONAL SPECIALISTS',
    desc: 'Dedicated mobility support professionals handling high-priority roadside events.',
    icon: Shield,
    glows: ['rgba(59,130,246,0.18)', 'rgba(147,51,234,0.12)'],
  },
  {
    id: 5,
    title: 'HEAVY-DUTY RECOVERY SUPPORT',
    subtitle: 'CLASS 1–8 VEHICLE COVERAGE',
    desc: 'Commercial recovery coordination for medium-duty and heavy-duty transport operations.',
    icon: Truck,
    glows: ['rgba(236,72,153,0.18)', 'rgba(6,182,212,0.12)'],
  },
  {
    id: 6,
    title: 'INSURANCE OPERATIONS INFRASTRUCTURE',
    subtitle: 'CLAIMS & RSA COORDINATION',
    desc: 'Integrated roadside workflows designed for modern insurance ecosystems.',
    icon: ShieldCheck,
    glows: ['rgba(6,182,212,0.18)', 'rgba(59,130,246,0.12)'],
  },
];

export const Hero = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="relative min-h-screen pt-24 pb-12 lg:pt-28 lg:pb-16 flex flex-col justify-between overflow-hidden bg-[#020712]">

      {/* ─── ATMOSPHERIC BACKGROUND SYSTEM ─────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/landing/homepage-hero.jpg"
          alt="Nationwide RoadsideAssist Platform"
          className="w-full h-full object-cover object-center lg:object-right opacity-90 select-none pointer-events-none"
        />

        {/* Extreme cinematic gradient fade from deep solid blue-black to transparent */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020712] via-[#020712] via-[35%] lg:via-[45%] to-transparent z-[1]" />

        {/* Extra Bottom Dark Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020712] via-[#020712]/40 to-transparent z-[1]" />

        {/* Top Vignette for Navbar readability */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#020712] to-transparent z-[1]" />

        {/* Radial Blue Ambient Lights */}
        <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-[#2F80FF]/15 blur-[150px] rounded-full pointer-events-none z-[1]" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-[#FF7A1A]/5 blur-[180px] rounded-full pointer-events-none z-[1]" />
      </div>

      {/* ─── DIGITAL GRID OVERLAY ────────────────────────────────────────── */}
      <div
        className="absolute inset-0 z-[3] opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* ─── MAIN HERO VIEWPORT ──────────────────────────────────────────── */}
      <div className="w-full max-w-[1650px] mx-auto px-6 lg:px-16 relative z-10 flex-grow flex flex-col justify-center">

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center pt-8 lg:pt-12 pb-8">

          {/* ─── LEFT SIDE CONTENT (7 COLUMNS WIDTH) ───────────────────────── */}
          <div className="xl:col-span-7 flex flex-col space-y-6 lg:space-y-8">

            {/* Logo area */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-6"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-brand-blue/30 rounded-2xl blur-md group-hover:bg-brand-blue/40 transition-colors" />
                <Logo className="relative drop-shadow-[0_0_20px_rgba(47,128,255,0.7)]" size={80} />
              </div>

              <span className="text-[3.8rem] sm:text-[4.8rem] lg:text-[5.5rem] font-black tracking-tighter text-white font-sans select-none leading-none">
                Nationwide
              </span>
            </motion.div>

            {/* Giant Heading */}
            <div className="space-y-1">
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[3.8rem] sm:text-[4.8rem] lg:text-[5.5rem] font-black tracking-tighter text-white leading-[0.85] flex flex-col font-sans select-none"
              >
                <span className="bg-gradient-to-r from-brand-blue via-brand-blue to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(47,128,255,0.35)]">
                  RoadsideAssist
                </span>
              </motion.h1>
            </div>

            {/* Split Tagline exactly like reference image */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl lg:text-3xl font-black tracking-[0.25em] text-white uppercase select-none font-sans leading-snug pt-2"
            >
              <div>POWERING MOBILITY.</div>
              <div className="text-brand-blue drop-shadow-[0_0_12px_rgba(47,128,255,0.4)]">
                DELIVERING RELIABILITY.
              </div>
            </motion.div>

            {/* ─── FEATURE METRIC CARDS NESTED STRICTLY IN LEFT HALF ─────────── */}
            {/* 9 cards rendered in a high-density, wrapping responsive glassmorphic dashboard layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1000px] w-full pt-8">
              {FEATURE_CARDS.map((card) => {
                const Icon = card.icon;

                return (
                  <div key={card.id} className="relative group h-full pt-4">
                    {/* Background Ambient Glow circles (outside card or behind it) */}
                    <div
                      className="absolute -top-8 -left-8 w-32 h-32 rounded-full blur-[40px] opacity-25 group-hover:opacity-45 group-hover:scale-110 transition-all duration-500 pointer-events-none z-0"
                      style={{ backgroundColor: card.glows[0] }}
                    />
                    <div
                      className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-[40px] opacity-20 group-hover:opacity-35 group-hover:scale-110 transition-all duration-500 pointer-events-none z-0"
                      style={{ backgroundColor: card.glows[1] }}
                    />

                    {/* Frosted Glassmorphism Panel */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.03 * card.id }}
                      onMouseEnter={() => setHoveredCard(card.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                      whileHover={{
                        y: -5,
                      }}
                      className="relative z-10 p-5 pt-8 rounded-2xl border border-white/[0.08] hover:border-brand-blue/30 bg-[#071124]/45 backdrop-blur-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col justify-between h-full select-none"
                    >
                      {/* Floating Icon Box overlapping the top border, aligned left */}
                      <div className="absolute -top-[18px] left-5 w-9 h-9 rounded-xl bg-[#020712] border border-brand-blue/30 group-hover:border-brand-blue/60 group-hover:bg-brand-blue/10 flex items-center justify-center transition-all duration-300 z-20 shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                        <Icon className="w-4.5 h-4.5 text-brand-blue group-hover:scale-110 transition-transform duration-300" />
                      </div>

                      {/* Subtle Inner Highlight Border */}
                      <div className="absolute inset-px rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />

                      <div className="flex flex-col h-full justify-between gap-4 relative z-10">
                        <div>
                          <span className="text-[9.5px] font-bold text-slate-400 uppercase tracking-[0.15em] leading-none block mb-1">
                            {card.title}
                          </span>
                          <h3 className="text-[12px] font-extrabold text-white group-hover:text-brand-blue transition-colors duration-300 tracking-tight leading-snug">
                            {card.subtitle}
                          </h3>
                        </div>

                        <p className="text-[11px] text-slate-400 group-hover:text-slate-300 transition-colors duration-300 leading-relaxed font-medium">
                          {card.desc}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>


          </div>

          {/* ─── RIGHT SIDE SKY OVERLAY (5 COLUMNS WIDTH) ─────────────────── */}
          <div className="xl:col-span-5 relative w-full h-[350px] lg:h-[450px] flex items-center justify-center">

          </div>

        </div>

      </div>

    </section>
  );
};
