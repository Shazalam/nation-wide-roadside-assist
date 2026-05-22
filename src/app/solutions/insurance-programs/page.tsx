import React from 'react';
import HeroSection from './components/HeroSection';
import MarketIntelligence from './components/MarketIntelligence';
import TrustBar from './components/TrustBar';
import CapabilitiesGrid from './components/CapabilitiesGrid';
import WorkflowTimeline from './components/WorkflowTimeline';
import IndustryEcosystem from './components/IndustryEcosystem';
import APIInfrastructure from './components/APIInfrastructure';
import CTASection from './components/CTASection';
import { EnterpriseFooter } from '@/components/landing/enterprise-footer';
import { Navbar } from '@/components/layout/navbar';

export const metadata = {
  title: 'Enterprise Insurance Roadside Infrastructure | Nationwide Roadside Assist',
  description: 'Nationwide dispatch intelligence, SLA-driven roadside operations, and API-first claims workflows engineered for insurers, motor clubs, and enterprise mobility providers.',
};

export default function InsuranceProgramsPage() {
  return (
    <main className="min-h-screen bg-brand-bg text-foreground selection:bg-brand-blue/30 transition-colors duration-500">
      <Navbar />
      
      <HeroSection />
      <MarketIntelligence />
      <TrustBar />
      <CapabilitiesGrid />
      <WorkflowTimeline />
      <IndustryEcosystem />
      <APIInfrastructure />
      <CTASection />
      
      <EnterpriseFooter />
    </main>
  );
}
