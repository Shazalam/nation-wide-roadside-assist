'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/navbar';
import { RecoveryHero } from './components/RecoveryHero';
import { TrustNetwork } from './components/TrustNetwork';
import { RecoveryClasses } from './components/RecoveryClasses';
import { CoreCapabilities } from './components/CoreCapabilities';
import { RecoveryCommandCenter } from './components/RecoveryCommandCenter';
import { WorkflowTimeline } from './components/WorkflowTimeline';
import { ServicesGrid } from './components/ServicesGrid';
import { RecoveryAnalytics } from './components/RecoveryAnalytics';
import { RecoveryAPI } from './components/RecoveryAPI';
import { RecoveryMetrics } from './components/RecoveryMetrics';
import { RecoveryCTA } from './components/RecoveryCTA';
import { EnterpriseFooter } from './components/EnterpriseFooter';
import { MountedOnly } from '@/components/utils/mounted-only';

export default function HeavyDutyTowingPage() {
  return (
    <div className="min-h-screen bg-[#081120] text-white selection:bg-[#2F80FF]/30">
      <Navbar />
      
      <main>
        {/* Dynamic Background Mesh */}
        <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #94A3B8 1px, transparent 0)`, backgroundSize: '48px 48px' }} />
        
        <RecoveryHero />
        <TrustNetwork />
        <RecoveryClasses />
        <CoreCapabilities />
        
        <MountedOnly>
          <RecoveryCommandCenter />
          <WorkflowTimeline />
          <ServicesGrid />
          <RecoveryAnalytics />
          <RecoveryAPI />
          <RecoveryMetrics />
        </MountedOnly>
        
        <RecoveryCTA />
      </main>

      <EnterpriseFooter />
    </div>
  );
}
