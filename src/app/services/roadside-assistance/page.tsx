'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/navbar';
import { RoadsideHero } from './components/RoadsideHero';
import { TrustBar } from './components/TrustBar';
import { AssistanceCapabilities } from './components/AssistanceCapabilities';
import { ServicesGrid } from './components/ServicesGrid';
import { OperationsCommandCenter } from './components/OperationsCommandCenter';
import { WorkflowTimeline } from './components/WorkflowTimeline';
import { IndustrySupport } from './components/IndustrySupport';
import { AssistanceAnalytics } from './components/AssistanceAnalytics';
import { AssistanceAPI } from './components/AssistanceAPI';
import { AssistanceMetrics } from './components/AssistanceMetrics';
import { AssistanceCTA } from './components/AssistanceCTA';
import { EnterpriseFooter } from './components/EnterpriseFooter';
import { MountedOnly } from '@/components/utils/mounted-only';

export default function RoadsideAssistancePage() {
  return (
    <div className="min-h-screen bg-[#081120] text-white selection:bg-[#2F80FF]/30">
      <Navbar />
      
      <main>
        {/* Dynamic Background Mesh */}
        <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #94A3B8 1px, transparent 0)`, backgroundSize: '48px 48px' }} />
        
        <RoadsideHero />
        <TrustBar />
        <AssistanceCapabilities />
        <ServicesGrid />
        
        <MountedOnly>
          <OperationsCommandCenter />
          <WorkflowTimeline />
          <IndustrySupport />
          <AssistanceAnalytics />
          <AssistanceAPI />
          <AssistanceMetrics />
        </MountedOnly>
        
        <AssistanceCTA />
      </main>

      <EnterpriseFooter />
    </div>
  );
}
