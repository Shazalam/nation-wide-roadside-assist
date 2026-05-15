'use client';

import React from 'react';
import { Navbar } from '@/components/layout/navbar';
import { FleetHero } from './components/FleetHero';
import { TrustBar } from './components/TrustBar';
import { CapabilitiesGrid } from './components/CapabilitiesGrid';
import { FleetDashboard } from './components/FleetDashboard';
import { WorkflowTimeline } from './components/WorkflowTimeline';
import { SupportMatrix } from './components/SupportMatrix';
import { AnalyticsSection } from './components/AnalyticsSection';
import { EcosystemGrid } from './components/EcosystemGrid';
import { APISection } from './components/APISection';
import { EnterpriseCTA } from './components/EnterpriseCTA';
import { EnterpriseFooter } from '@/components/landing/enterprise-footer';
import { MountedOnly } from '@/components/utils/mounted-only';

export default function FleetSupportPage() {
  return (
    <div className="min-h-screen bg-brand-bg text-foreground selection:bg-brand-blue/30 transition-colors duration-500">
      <Navbar />
      
      <main>
        {/* Dynamic Background Mesh */}
        <div className="fixed inset-0 z-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(circle at 2px 2px, var(--brand-slate) 1px, transparent 0)`, backgroundSize: '48px 48px' }} />
        
        <FleetHero />
        
        <MountedOnly>
          <TrustBar />
          <CapabilitiesGrid />
          <FleetDashboard />
          <WorkflowTimeline />
          <SupportMatrix />
          <AnalyticsSection />
          <EcosystemGrid />
          <APISection />
        </MountedOnly>
        
        <EnterpriseCTA />
      </main>

      <EnterpriseFooter />
    </div>
  );
}
