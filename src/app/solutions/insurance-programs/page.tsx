import React from 'react';
import HeroSection from './components/HeroSection';
import MarketIntelligence from './components/MarketIntelligence';
import TrustBar from './components/TrustBar';
import CapabilitiesGrid from './components/CapabilitiesGrid';
import TechShowcase from './components/TechShowcase';
import WorkflowTimeline from './components/WorkflowTimeline';
import IndustryEcosystem from './components/IndustryEcosystem';
import APIInfrastructure from './components/APIInfrastructure';
import CTASection from './components/CTASection';
import EnterpriseFooter from '../commercial-vehicle-recovery/EnterpriseFooter';
import { Navbar } from '@/components/layout/navbar';

export const metadata = {
  title: 'Enterprise Insurance Roadside Infrastructure | Nationwide Trans Inc.',
  description: 'Nationwide dispatch intelligence, SLA-driven roadside operations, and API-first claims workflows engineered for insurers, motor clubs, and enterprise mobility providers.',
};

export default function InsuranceProgramsPage() {
  return (
    <main className="min-h-screen bg-[#081120] text-white selection:bg-[#2F80FF]/30 selection:text-[#2F80FF]">
      <Navbar />
      
      <HeroSection />
      <MarketIntelligence />
      <TrustBar />
      <CapabilitiesGrid />
      <TechShowcase />
      <WorkflowTimeline />
      <IndustryEcosystem />
      <APIInfrastructure />
      <CTASection />
      
      <EnterpriseFooter />
    </main>
  );
}
