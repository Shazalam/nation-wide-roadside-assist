import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import { EnterpriseFooter } from '@/components/landing/enterprise-footer';
import { ContinuationHero } from './components/ContinuationHero';
import { CapabilityGrid } from './components/CapabilityGrid';
import { ServicesGrid } from './components/ServicesGrid';
import { WorkflowTimeline } from './components/WorkflowTimeline';
import { APIInfrastructure } from './components/APIInfrastructure';
import { ContinuationCTA } from './components/ContinuationCTA';

export const metadata: Metadata = {
  title: 'Trip Continuation & Mobility Intelligence | Nationwide Trans Inc.',
  description: 'Enterprise trip continuation systems, real-time mobility coordination, and API-first customer assistance infrastructure.',
};

export default function TripContinuationPage() {
  return (
    <main className="bg-brand-bg min-h-screen text-brand-slate selection:bg-brand-blue/30 selection:text-foreground dark:text-white font-sans overflow-x-hidden">
      <Navbar />
      
      <div className="relative z-10">
        <ContinuationHero />
        <CapabilityGrid />
        <ServicesGrid />
        <WorkflowTimeline />
        <APIInfrastructure />
        <ContinuationCTA />
      </div>

      <EnterpriseFooter />
    </main>
  );
}
