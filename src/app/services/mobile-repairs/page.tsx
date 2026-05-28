import React from 'react';
import { Navbar } from '@/components/layout/navbar';
import { RepairHero } from './components/RepairHero';
import { TrustSection } from './components/TrustSection';
import { RepairCapabilities } from './components/RepairCapabilities';
import { ServicesGrid } from './components/ServicesGrid';
import { RepairWorkflow } from './components/RepairWorkflow';
import { RepairAPI } from './components/RepairAPI';
import { RepairCTA } from './components/RepairCTA';
import { EnterpriseFooter } from '@/components/landing/enterprise-footer';

export const metadata = {
  title: 'Mobile Repair Operations | Nationwide Roadside Assist',
  description: 'Enterprise mobile repair infrastructure, nationwide mechanic dispatch, and real-time roadside intelligence engineered for fleets and mobility providers.',
};

export default function MobileRepairsPage() {
  return (
    <main className="bg-brand-bg min-h-screen text-foreground selection:bg-brand-blue/30 overflow-x-hidden transition-colors duration-500">
      <Navbar />
      
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[1000px] h-[600px] bg-brand-blue/5 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-50 dark:opacity-100" />
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-brand-orange/5 blur-[150px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-50 dark:opacity-100" />
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" 
             style={{ backgroundImage: `radial-gradient(circle at 2px 2px, var(--brand-slate) 1px, transparent 0)`, backgroundSize: '48px 48px' }} />
      </div>

      <div className="relative z-10">
        <RepairHero />
        <TrustSection />
        <RepairCapabilities />
        <ServicesGrid />
        <RepairWorkflow />
        <RepairAPI />
        <RepairCTA />
        <EnterpriseFooter />
      </div>
    </main>
  );
}
