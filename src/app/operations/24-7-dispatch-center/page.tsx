import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import { EnterpriseFooter } from '@/app/services/heavy-duty-towing/components/EnterpriseFooter';
import { DispatchHero } from './components/DispatchHero';
import { LiveCommandCenter } from './components/LiveCommandCenter';
import { DispatchInfrastructure } from './components/DispatchInfrastructure';
import { DispatchTechnology } from './components/DispatchTechnology';
import { IncidentManagement } from './components/IncidentManagement';
import { DispatchWorkflow } from './components/DispatchWorkflow';
import { FleetOperations } from './components/FleetOperations';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { DispatchAPIs } from './components/DispatchAPIs';
import { TrustCompliance } from './components/TrustCompliance';
import { OperationalMetrics } from './components/OperationalMetrics';
import { DispatchCTA } from './components/DispatchCTA';

export const metadata: Metadata = {
  title: '24/7 Dispatch Center | Nationwide Trans Inc.',
  description: 'Mission-critical nationwide dispatch infrastructure operating 24/7 for enterprise mobility recovery operations.',
};

export default function DispatchCenterPage() {
  return (
    <main className="bg-[#081120] min-h-screen text-brand-slate selection:bg-brand-blue/30 selection:text-white font-sans overflow-x-hidden">
      <Navbar />
      
      <div className="relative z-10">
        <DispatchHero />
        <LiveCommandCenter />
        <DispatchInfrastructure />
        <DispatchTechnology />
        <IncidentManagement />
        <DispatchWorkflow />
        <FleetOperations />
        <AnalyticsDashboard />
        <DispatchAPIs />
        <TrustCompliance />
        <OperationalMetrics />
        <DispatchCTA />
      </div>

      <EnterpriseFooter />
    </main>
  );
}
