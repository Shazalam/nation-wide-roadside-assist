import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import { EnterpriseFooter } from '@/components/landing/enterprise-footer';
import { VendorHero } from './components/VendorHero';
import { VendorOperationsGrid } from './components/VendorOperationsGrid';
import { VendorServiceCategories } from './components/VendorServiceCategories';
import { VehicleClassOperations } from './components/VehicleClassOperations';
import { DispatchWorkflowSystem } from './components/DispatchWorkflowSystem';
import { APIInfrastructure } from './components/APIInfrastructure';
import { VendorCTA } from './components/VendorCTA';

export const metadata: Metadata = {
  title: 'Vendor Coordination & Dispatch Intelligence | Nationwide Roadside Assist',
  description: 'Enterprise roadside vendor orchestration, SLA-driven dispatch systems, and API-first coordination infrastructure.',
};

export default function VendorCoordinationPage() {
  return (
    <main className="bg-brand-bg min-h-screen text-brand-slate selection:bg-brand-blue/30 selection:text-foreground dark:text-white font-sans overflow-x-hidden">
      <Navbar />
      
      <div className="relative z-10">
        <VendorHero />
        <VendorOperationsGrid />
        <VendorServiceCategories />
        <VehicleClassOperations />
        <DispatchWorkflowSystem />
        <APIInfrastructure />
        <VendorCTA />
      </div>

      <EnterpriseFooter />
    </main>
  );
}
