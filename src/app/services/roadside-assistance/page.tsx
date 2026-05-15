'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/navbar';
import { RoadsideHero } from './components/RoadsideHero';
import { AssistanceCapabilities } from './components/AssistanceCapabilities';
import { ServicesGrid } from './components/ServicesGrid';
import { WorkflowTimeline } from './components/WorkflowTimeline';
import { IndustrySupport } from './components/IndustrySupport';
import { AssistanceAPI } from './components/AssistanceAPI';
import { AssistanceCTA } from './components/AssistanceCTA';
import { EnterpriseFooter } from '@/components/landing/enterprise-footer';
import { MountedOnly } from '@/components/utils/mounted-only';

export default function RoadsideAssistancePage() {
  return (
    <div className="min-h-screen bg-brand-bg text-foreground selection:bg-brand-blue/30 transition-colors duration-500">
      <Navbar />
      
      <main>
        {/* Dynamic Background Mesh */}
        <div className="fixed inset-0 z-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(circle at 2px 2px, var(--brand-slate) 1px, transparent 0)`, backgroundSize: '48px 48px' }} />
        
        <RoadsideHero />
        <AssistanceCapabilities />
        <ServicesGrid />
        
        <MountedOnly>
          <WorkflowTimeline />
          <IndustrySupport />
          <AssistanceAPI />
        </MountedOnly>
        
        <AssistanceCTA />
      </main>

      <EnterpriseFooter />
    </div>
  );
}
