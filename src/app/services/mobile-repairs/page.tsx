import React from 'react';
import { Navbar } from '@/components/layout/navbar';
import { RepairHero } from './components/RepairHero';
import { TrustSection } from './components/TrustSection';
import { RepairCapabilities } from './components/RepairCapabilities';
import { RepairOperationsCenter } from './components/RepairOperationsCenter';
import { ServicesGrid } from './components/ServicesGrid';
import { RepairWorkflow } from './components/RepairWorkflow';
import { FleetSupport } from './components/FleetSupport';
import { RepairAnalytics } from './components/RepairAnalytics';
import { RepairAPI } from './components/RepairAPI';
import { RepairCTA } from './components/RepairCTA';
import { EnterpriseFooter } from '../heavy-duty-towing/components/EnterpriseFooter'; // Reusing the high-end footer

export const metadata = {
  title: 'Mobile Repair Operations | Nationwide Trans Inc.',
  description: 'Enterprise mobile repair infrastructure, nationwide mechanic dispatch, and real-time roadside intelligence engineered for fleets and mobility providers.',
};

export default function MobileRepairsPage() {
  return (
    <main className="bg-[#081120] min-h-screen text-white selection:bg-brand-blue/30 overflow-x-hidden">
      <Navbar />
      
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[1000px] h-[600px] bg-brand-blue/5 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-brand-orange/5 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
      </div>

      <div className="relative z-10">
        <RepairHero />
        <TrustSection />
        <RepairCapabilities />
        <RepairOperationsCenter />
        <ServicesGrid />
        <RepairWorkflow />
        <FleetSupport />
        <RepairAnalytics />
        <RepairAPI />
        <RepairCTA />
        <EnterpriseFooter />
      </div>
    </main>
  );
}
