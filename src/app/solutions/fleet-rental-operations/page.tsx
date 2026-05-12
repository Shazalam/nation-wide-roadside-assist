'use client';

import React from 'react';
import { LandingLayout } from '@/components/layout/landing-layout';
import { FleetHero } from '@/components/fleet/fleet-hero';
import { TrustBar } from '@/components/fleet/trust-bar';
import { CoreCapabilities } from '@/components/fleet/core-capabilities';
import { TechShowcase } from '@/components/fleet/tech-showcase';
import { OperationsWorkflow } from '@/components/fleet/operations-workflow';
import { IndustryEcosystem } from '@/components/fleet/industry-ecosystem';
import { FleetAPISection } from '@/components/fleet/fleet-api-section';
import { AnalyticsSection } from '@/components/fleet/analytics-section';
import { FinalCTA } from '@/components/fleet/final-cta';

export default function FleetRentalOperationsPage() {
  return (
    <LandingLayout>
      <div className="bg-[#081120] text-white min-h-screen overflow-hidden selection:bg-brand-blue/30">
        {/* Grid Background Texture */}
        <div
          className="fixed inset-0 z-0 pointer-events-none animate-grid-pulse"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(47, 128, 255, 0.15) 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }}
        />

        {/* Scanline Effect */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue/10 to-transparent animate-scanline" />
        </div>

        {/* 1. Enterprise Hero */}
        <FleetHero />

        {/* 2. Trust & Enterprise Integrations */}
        <TrustBar />

        {/* 3. Core Capabilities Grid */}
        <CoreCapabilities />

        {/* 4. Enterprise Technology Showcase */}
        <TechShowcase />

        {/* 5. Enterprise Operations Workflow */}
        <OperationsWorkflow />

        {/* 6. Industry Ecosystem */}
        <IndustryEcosystem />

        {/* 7. Fleet API Infrastructure */}
        <FleetAPISection />

        {/* 8. Enterprise Analytics */}
        <AnalyticsSection />

        {/* 9. Final CTA */}
        <FinalCTA />
      </div>
    </LandingLayout>
  );
}
