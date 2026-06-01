'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/navbar';
import { HeroSection } from './components/HeroSection';
import { DispatchOverview } from './components/DispatchOverview';
import { DispatchWorkflow } from './components/DispatchWorkflow';
import { IndustrySolutions } from './components/IndustrySolutions';
import { APIInfrastructure } from './components/APIInfrastructure';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { MountedOnly } from '@/components/utils/mounted-only';

export default function EnterpriseDispatchPage() {
  return (
    <div className="min-h-screen bg-brand-bg text-foreground dark:text-white selection:bg-[#2F80FF]/30">
      <Navbar />
      
      <main>
        {/* Cinematic Grid Background */}
        <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #94A3B8 1px, transparent 0)`, backgroundSize: '48px 48px' }} />
        
        {/* Hero Section */}
        <HeroSection />

        {/* 2. Enterprise Dispatch Overview */}
        <DispatchOverview />

        <MountedOnly>
          {/* 5. Enterprise Dispatch Workflow */}
          <DispatchWorkflow />

          {/* 6. Industry Dispatch Solutions */}
          <IndustrySolutions />

          {/* 8. API-First Infrastructure */}
          <APIInfrastructure />
        </MountedOnly>

        {/* 11. Final CTA Section */}
        <CTASection />
      </main>

      {/* 12. Enterprise Footer */}
      <Footer />
    </div>
  );
}
