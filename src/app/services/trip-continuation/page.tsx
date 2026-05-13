import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import { EnterpriseFooter } from '@/app/services/heavy-duty-towing/components/EnterpriseFooter';
import { ContinuationHero } from './components/ContinuationHero';
import { TrustSection } from './components/TrustSection';
import { CapabilityGrid } from './components/CapabilityGrid';
import { CommandCenter } from './components/CommandCenter';
import { ServicesGrid } from './components/ServicesGrid';
import { WorkflowTimeline } from './components/WorkflowTimeline';
import { EnterpriseAnalytics } from './components/EnterpriseAnalytics';
import { APIInfrastructure } from './components/APIInfrastructure';
import { ContinuationCTA } from './components/ContinuationCTA';

export const metadata: Metadata = {
  title: 'Trip Continuation & Mobility Intelligence | Nationwide Trans Inc.',
  description: 'Enterprise trip continuation systems, real-time mobility coordination, and API-first customer assistance infrastructure.',
};

export default function TripContinuationPage() {
  return (
    <main className="bg-[#081120] min-h-screen text-brand-slate selection:bg-brand-blue/30 selection:text-white font-sans overflow-x-hidden">
      <Navbar />
      
      <div className="relative z-10">
        <ContinuationHero />
        <TrustSection />
        <CapabilityGrid />
        <CommandCenter />
        <ServicesGrid />
        <WorkflowTimeline />
        <EnterpriseAnalytics />
        <APIInfrastructure />
        <ContinuationCTA />
      </div>

      <EnterpriseFooter />
    </main>
  );
}
