import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import { EnterpriseFooter } from '@/components/landing/enterprise-footer';
import { DispatchHero } from './components/DispatchHero';
import { DispatchInfrastructure } from './components/DispatchInfrastructure';
import { DispatchWorkflow } from './components/DispatchWorkflow';
import { FleetOperations } from './components/FleetOperations';
import { DispatchAPIs } from './components/DispatchAPIs';
import { OperationalCapabilities } from './components/OperationalCapabilities';
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

        <DispatchWorkflow />
        <FleetOperations />
        <DispatchAPIs />
        <OperationalCapabilities />
        <DispatchCTA />
      </div>

      <EnterpriseFooter />
    </main>
  );
}
