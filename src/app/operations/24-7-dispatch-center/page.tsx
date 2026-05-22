import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import { EnterpriseFooter } from '@/components/landing/enterprise-footer';
import { DispatchHero } from './components/DispatchHero';
import { DispatchInfrastructure } from './components/DispatchInfrastructure';
import { IncidentManagement } from './components/IncidentManagement';
import { DispatchWorkflow } from './components/DispatchWorkflow';
import { FleetOperations } from './components/FleetOperations';
import { DispatchAPIs } from './components/DispatchAPIs';
import { TrustCompliance } from './components/TrustCompliance';
import { OperationalMetrics } from './components/OperationalMetrics';
import { DispatchCTA } from './components/DispatchCTA';

export const metadata: Metadata = {
  title: '24/7 Dispatch Center | Nationwide Roadside Assist',
  description: 'Mission-critical nationwide dispatch infrastructure operating 24/7 for enterprise mobility recovery operations.',
};

export default function DispatchCenterPage() {
  return (
    <main className="bg-brand-bg min-h-screen text-brand-slate selection:bg-brand-blue/30 selection:text-foreground dark:text-white font-sans overflow-x-hidden">
      <Navbar />
      
      <div className="relative z-10">
        <DispatchHero />
        <DispatchInfrastructure />
        <IncidentManagement />
        <DispatchWorkflow />
        <FleetOperations />
        <DispatchAPIs />
        <TrustCompliance />
        <OperationalMetrics />
        <DispatchCTA />
      </div>

      <EnterpriseFooter />
    </main>
  );
}
