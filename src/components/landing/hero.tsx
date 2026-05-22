'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Globe, Shield, Clock, Users, Building,
  Truck, ShieldCheck, Network, AlertTriangle
} from 'lucide-react';
import { Logo } from '@/components/ui/logo';

const FEATURE_CARDS = [
  // Original 5
  {
    id: 1,
    title: 'GLOBAL',
    subtitle: 'PRESENCE',
    desc: 'USA • CANADA • EUROPE',
    icon: Globe,
    glowColor: 'rgba(47,128,255,0.3)',
  },
  {
    id: 2,
    title: '5000+',
    subtitle: 'SERVICE PROVIDERS',
    desc: 'STRONG NETWORK',
    icon: Users,
    glowColor: 'rgba(47,128,255,0.3)',
  },
  {
    id: 3,
    title: '24/7',
    subtitle: 'DISPATCH',
    desc: 'ALWAYS ON CALL',
    icon: Clock,
    glowColor: 'rgba(47,128,255,0.3)',
  },
  {
    id: 4,
    title: 'EXPERT',
    subtitle: 'TEAMS',
    desc: 'TRUSTED, DEDICATED.',
    icon: Shield,
    glowColor: 'rgba(47,128,255,0.3)',
  },
  {
    id: 5,
    title: 'ENTERPRISE',
    subtitle: 'SOLUTIONS',
    desc: 'BUILT FOR SCALE',
    icon: Building,
    glowColor: 'rgba(47,128,255,0.3)',
  },
  // Remaining Premium Cards
  {
    id: 6,
    title: 'HEAVY DUTY',
    subtitle: 'RECOVERY',
    desc: 'CLASS 1–8 SUPPORT',
    icon: Truck,
    glowColor: 'rgba(47,128,255,0.3)',
  },
  {
    id: 7,
    title: 'INSURANCE',
    subtitle: 'ECOSYSTEM',
    desc: 'CLAIM SUPPORT',
    icon: ShieldCheck,
    glowColor: 'rgba(47,128,255,0.3)',
  },
  {
    id: 8,
    title: 'FLEET',
    subtitle: 'OPERATIONS',
    desc: 'MOBILITY NETWORK',
    icon: Network,
    glowColor: 'rgba(47,128,255,0.3)',
  },
  {
    id: 9,
    title: 'EMERGENCY',
    subtitle: 'RESPONSE',
    desc: '24/7 RAPID ASSISTANCE',
    icon: AlertTriangle,
    glowColor: 'rgba(47,128,255,0.3)',
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
      <div className="w-full max-w-[1650px] mx-auto px-6 lg:px-16 relative z-10 w-full flex-grow flex flex-col justify-center">

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

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-1.5"
            >
              <h2 className="text-[11px] lg:text-xs font-black tracking-[0.25em] text-[#94A3B8]/95 uppercase leading-relaxed max-w-xl">
                GLOBAL ROADSIDE INFRASTRUCTURE &amp;
              </h2>
              <h2 className="text-[11px] lg:text-xs font-black tracking-[0.25em] text-[#94A3B8]/95 uppercase leading-relaxed max-w-xl">
                ENTERPRISE MOBILITY OPERATIONS PLATFORM
              </h2>
            </motion.div>

            {/* ─── FEATURE METRIC CARDS NESTED STRICTLY IN LEFT HALF ─────────── */}
            {/* Extended to 13 cards rendered in a high-density, wrapping responsive dashboard layout */}
            <div className="grid grid-cols-3 gap-x-3.5 gap-y-6 max-w-[880px] w-full pt-6">
              {FEATURE_CARDS.map((card) => {
                const Icon = card.icon;
                const isHovered = hoveredCard === card.id;

                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.03 * card.id }}
                    onMouseEnter={() => setHoveredCard(card.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    whileHover={{
                      y: -4,
                      scale: 1.02,
                    }}
                    style={{
                      boxShadow: isHovered ? `0 0 20px ${card.glowColor}` : 'none',
                      borderColor: isHovered ? 'rgba(47,128,255,0.7)' : 'rgba(59,130,246,0.25)',
                    }}
                    className="relative pt-8 pb-3.5 px-3.5 rounded-xl border bg-[#050c18]/85 backdrop-blur-xl shadow-lg cursor-pointer transition-all duration-300 group select-none min-h-[104px] flex flex-col justify-end"
                  >
                    {/* Top line reflection card glow effect */}
                    <div className="absolute top-0 left-0 right-0 h-[1.2px] bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent group-hover:via-brand-blue/75 transition-all duration-500" />

                    {/* Premium Icon - Half Inside, Half Outside the Top Border */}
                    <div className="absolute -top-4.5 left-3 w-9.5 h-9.5 flex items-center justify-center rounded-lg bg-[#050c18] border border-brand-blue/30 group-hover:border-brand-blue/60 group-hover:bg-brand-blue/10 transition-all shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                      <Icon className="w-4.5 h-4.5 text-brand-blue group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                    </div>

                    {/* Title / Subtitle split */}
                    <h3 className="text-[11px] font-black text-[#64748B] group-hover:text-white uppercase tracking-[0.12em] transition-colors leading-none mb-0.5">
                      {card.title}
                    </h3>
                    <h3 className="text-[11px] font-black text-[#64748B] group-hover:text-white uppercase tracking-[0.12em] transition-colors leading-none mb-2">
                      {card.subtitle}
                    </h3>

                    {/* Desc */}
                    <p className="text-[9.5px] font-bold text-brand-blue/80 tracking-wide uppercase truncate leading-none">
                      {card.desc}
                    </p>

                  </motion.div>
                );
              })}
            </div>

            {/* Split Tagline exactly like reference image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-2xl lg:text-3xl font-black tracking-[0.25em] text-white uppercase select-none font-sans leading-snug pt-4"
            >
              <div>POWERING MOBILITY.</div>
              <div className="text-brand-blue drop-shadow-[0_0_12px_rgba(47,128,255,0.4)]">
                DELIVERING RELIABILITY.
              </div>
            </motion.div>

          </div>

          {/* ─── RIGHT SIDE SKY OVERLAY (5 COLUMNS WIDTH) ─────────────────── */}
          <div className="xl:col-span-5 relative w-full h-[350px] lg:h-[450px] flex items-center justify-center">

          </div>

        </div>

      </div>

    </section>
  );
};
