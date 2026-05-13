'use client';

import React from 'react';
import { Navbar } from '@/components/layout/navbar';
import { RecoveryHero } from './components/RecoveryHero';
import { TrustSection } from './components/TrustSection';
import { CapabilitiesGrid } from './components/CapabilitiesGrid';
import { CommandCenter } from './components/CommandCenter';
import { ServicesGrid } from './components/ServicesGrid';
import { VehicleClassMatrix } from './components/VehicleClassMatrix';
import { RecoveryWorkflow } from './components/RecoveryWorkflow';
import { FleetOperations } from './components/FleetOperations';
import { RecoveryAnalytics } from './components/RecoveryAnalytics';
import { APIInfrastructure } from './components/APIInfrastructure';
import { RecoveryCTA } from './components/RecoveryCTA';
import { EnterpriseFooter } from '../../services/heavy-duty-towing/components/EnterpriseFooter';

export default function RecoveryWinchoutsPage() {
  return (
    <main className="bg-[#081120] min-h-screen text-white selection:bg-[#2F80FF]/30 overflow-x-hidden">
      <Navbar />
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[#2F80FF]/5 blur-[150px] rounded-full -mr-96 -mt-96" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#FF7A1A]/3 blur-[120px] rounded-full -ml-48 -mb-48" />
      </div>

      <div className="relative z-10">
        <RecoveryHero />
        <TrustSection />
        <CapabilitiesGrid />
        <CommandCenter />
        <ServicesGrid />
        <VehicleClassMatrix />
        <RecoveryWorkflow />
        <FleetOperations />
        <RecoveryAnalytics />
        <APIInfrastructure />
        <RecoveryCTA />
        <EnterpriseFooter />
      </div>
    </main>
  );
}
