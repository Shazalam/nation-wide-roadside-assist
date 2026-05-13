import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import { EnterpriseFooter } from '@/app/services/heavy-duty-towing/components/EnterpriseFooter';
import { CompanyHero } from './components/CompanyHero';
import { CompanyOverviewSection } from './components/CompanyOverviewSection';
import { CompanyEvolution } from './components/CompanyEvolution';
import { EnterpriseInfrastructure } from './components/EnterpriseInfrastructure';
import { CoreCapabilities } from './components/CoreCapabilities';
import { TechnologyPlatform } from './components/TechnologyPlatform';
import { IndustriesServed } from './components/IndustriesServed';
import { TrustCompliance } from './components/TrustCompliance';
import { LeadershipOperations } from './components/LeadershipOperations';
import { NationwideOperations } from './components/NationwideOperations';
import { EnterpriseCTA } from './components/EnterpriseCTA';

export const metadata: Metadata = {
  title: 'Company Overview & Enterprise Recovery Infrastructure | Nationwide Trans Inc.',
  description: 'Nationwide Trans Inc. operates mission-critical recovery infrastructure for the enterprise mobility economy. Explore our operations, network, and intelligence platform.',
};

export default function CompanyOverviewPage() {
  return (
    <main className="bg-[#081120] min-h-screen text-brand-slate selection:bg-brand-blue/30 selection:text-white font-sans overflow-x-hidden">
      <Navbar />
      
      <div className="relative z-10">
        <CompanyHero />
        <CompanyOverviewSection />
        <CompanyEvolution />
        <EnterpriseInfrastructure />
        <CoreCapabilities />
        <TechnologyPlatform />
        <IndustriesServed />
        <TrustCompliance />
        <LeadershipOperations />
        <NationwideOperations />
        <EnterpriseCTA />
      </div>

      <EnterpriseFooter />
    </main>
  );
}
