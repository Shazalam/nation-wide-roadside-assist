'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Shield, Zap, Globe, Clock, ArrowRight, Activity, ChevronRight, Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setPartnershipOpen } from '@/store';

const MOCK_STATS = {
  activeCalls:    156,
  avgHandleTime:  '8:24',
};

export const CallCenterHero = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [stats, setStats] = useState(MOCK_STATS);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        activeCalls: prev.activeCalls + (Math.random() > 0.5 ? 1 : -1),
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen pt-24 pb-12 lg:pt-32 lg:pb-20 flex items-center overflow-hidden bg-[#020617]">

      {/* ─── FULL BLEED BACKGROUND IMAGE ─────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/solutions/call-center-hero.jpg"
          alt="Enterprise 24/7 Call Center Operations Command Room"
          className="w-full h-full object-cover object-center lg:object-right opacity-90"
        />

        {/* Cinematic Gradient Overlays */}
        {/* Cinematic Dimming: Start from 45% */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617] to-transparent lg:via-[45%] lg:to-[100%]"
        />

        {/* Subtle Bottom-to-Top Fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />

        {/* Accent Glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2F80FF]/10 blur-[150px] rounded-full -mr-96 -mt-96 pointer-events-none" />
      </div>

      {/* ─── GRID DOT OVERLAY ────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 0)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* ─── CONTENT ─────────────────────────────────────────────────────── */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl space-y-10">

          {/* Breadcrumb & Badge */}
          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-[10px] font-black text-brand-slate uppercase tracking-[0.3em]"
            >
              <span className="hover:text-white transition-colors cursor-pointer">Operations</span>
              <ChevronRight className="h-3 w-3 text-brand-blue" />
              <span className="text-white">Call Center Operations</span>
            </motion.div>


          </div>

          {/* Heading */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl lg:text-[5.5rem] font-black tracking-tighter text-white leading-[0.9] drop-shadow-2xl"
            >
              Enterprise <span className="text-brand-blue">Call Center</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg lg:text-xl text-brand-slate leading-relaxed max-w-2xl font-medium"
            >
              Mission-critical inbound call orchestration, AI-assisted triage, and real-time agent
              intelligence engineered for nationwide roadside assistance, insurance claim intake,
              and enterprise mobility support operations.
            </motion.p>
          </div>


        </div>
      </div>
    </section>
  );
};
