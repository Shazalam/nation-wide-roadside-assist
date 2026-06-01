'use client';

import React from 'react';
import { Navbar } from '@/components/layout/navbar';
import { TireChangeHero } from './components/TireChangeHero';
import { CoreCapabilities } from './components/CoreCapabilities';
import { WorkflowTimeline } from './components/WorkflowTimeline';
import { EcosystemSection } from './components/EcosystemSection';
import { TireAPI } from './components/TireAPI';
import { TireCTA } from './components/TireCTA';
import { EnterpriseFooter } from '@/components/landing/enterprise-footer';
import { MountedOnly } from '@/components/utils/mounted-only';

export default function TireChangeAssistancePage() {
  return (
    <div className="min-h-screen bg-brand-bg text-foreground selection:bg-brand-blue/30 transition-colors duration-500">
      <Navbar />
      
      <main>
        {/* Dynamic Background Mesh */}
        <div className="fixed inset-0 z-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(circle at 2px 2px, var(--brand-slate) 1px, transparent 0)`, backgroundSize: '48px 48px' }} />
        
        <TireChangeHero />
        
        <MountedOnly>
          <CoreCapabilities />
          <WorkflowTimeline />
          <EcosystemSection />
          <TireAPI />
        </MountedOnly>
        
        <TireCTA />
      </main>

      <EnterpriseFooter />
    </div>
  );
}
