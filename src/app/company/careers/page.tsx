import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import { EnterpriseFooter } from '@/components/landing/enterprise-footer';
import { CareersHero } from './components/CareersHero';
import { CompanyCulture } from './components/CompanyCulture';
import { WhyJoinUs } from './components/WhyJoinUs';
import { Departments } from './components/Departments';
import { OpenPositions } from './components/OpenPositions';
import { LifeInside } from './components/LifeInside';
import { TechStack } from './components/TechStack';
import { Benefits } from './components/Benefits';
import { HiringProcess } from './components/HiringProcess';
import { EnterpriseValues } from './components/EnterpriseValues';
import { CareersCTA } from './components/CareersCTA';

export const metadata: Metadata = {
  title: 'Careers | Nationwide Trans Inc.',
  description: 'Join the team building mission-critical recovery infrastructure for the enterprise mobility economy.',
};

export default function CareersPage() {
  return (
    <main className="bg-brand-bg min-h-screen text-brand-slate selection:bg-brand-blue/30 selection:text-foreground dark:text-white font-sans overflow-x-hidden">
      <Navbar />
      
      <div className="relative z-10">
        <CareersHero />
        <CompanyCulture />
        <WhyJoinUs />
        <Departments />
        <OpenPositions />
        <LifeInside />
        <TechStack />
        <Benefits />
        <HiringProcess />
        <EnterpriseValues />
        <CareersCTA />
      </div>

      <EnterpriseFooter />
    </main>
  );
}
