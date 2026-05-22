import React from 'react';
import HeroSection from './HeroSection';
import TrustBar from './TrustBar';
import VehicleClassIntelligence from './VehicleClassIntelligence';
import CoreCapabilities from './CoreCapabilities';
import TechShowcase from './TechShowcase';
import Workflow from './Workflow';
import ServicesGrid from './ServicesGrid';
import APIInfrastructure from './APIInfrastructure';
import EnterpriseAnalytics from './EnterpriseAnalytics';
import CTASection from './CTASection';
import { EnterpriseFooter } from '@/components/landing/enterprise-footer';
import { Navbar } from '@/components/layout/navbar';

export const metadata = {
  title: 'Enterprise Commercial Recovery Infrastructure | Nationwide Roadside Assist',
  description: 'Nationwide heavy-duty dispatch intelligence, commercial vehicle recovery operations, and API-first roadside infrastructure engineered for fleets and enterprise mobility ecosystems.',
};

export default function CommercialVehicleRecoveryPage() {
  return (
    <main className="min-h-screen bg-brand-bg text-foreground dark:text-white selection:bg-[#2F80FF]/30 selection:text-[#2F80FF]">
      <Navbar />
      
      <HeroSection />
      <TrustBar />
      <VehicleClassIntelligence />
      <CoreCapabilities />
      <TechShowcase />
      <Workflow />
      <ServicesGrid />
      <APIInfrastructure />
      <EnterpriseAnalytics />
      <CTASection />
      
      <EnterpriseFooter />
    </main>
  );
}
