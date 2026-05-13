import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import { EnterpriseFooter } from '@/app/services/heavy-duty-towing/components/EnterpriseFooter';
import { ContactHero } from './components/ContactHero';
import { ContactOptions } from './components/ContactOptions';
import { ContactForm } from './components/ContactForm';
import { OperationsCenter } from './components/OperationsCenter';
import { SupportSystems } from './components/SupportSystems';
import { OperationsMap } from './components/OperationsMap';
import { IndustriesSupported } from './components/IndustriesSupported';
import { TrustComplianceContact } from './components/TrustComplianceContact';
import { DeveloperSupport } from './components/DeveloperSupport';
import { ContactCTA } from './components/ContactCTA';

export const metadata: Metadata = {
  title: 'Enterprise Contact & Support | Nationwide Trans Inc.',
  description: 'Connect with Nationwide Trans Inc. for enterprise recovery operations, dispatch coordination, and API support.',
};

export default function CompanyContactPage() {
  return (
    <main className="bg-[#081120] min-h-screen text-brand-slate selection:bg-brand-blue/30 selection:text-white font-sans overflow-x-hidden">
      <Navbar />
      
      <div className="relative z-10">
        <ContactHero />
        <ContactOptions />
        <ContactForm />
        <OperationsCenter />
        <SupportSystems />
        <OperationsMap />
        <IndustriesSupported />
        <TrustComplianceContact />
        <DeveloperSupport />
        <ContactCTA />
      </div>

      <EnterpriseFooter />
    </main>
  );
}
