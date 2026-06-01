'use client';

import React from 'react';
import { LandingLayout } from '@/components/layout/landing-layout';
import { FleetHero } from '@/components/fleet/fleet-hero';
import { CoreCapabilities } from '@/components/fleet/core-capabilities';
import { OperationsWorkflow } from '@/components/fleet/operations-workflow';
import { IndustryEcosystem } from '@/components/fleet/industry-ecosystem';
import { FleetAPISection } from '@/components/fleet/fleet-api-section';
import { FinalCTA } from '@/components/fleet/final-cta';

export default function FleetRentalOperationsPage() {
  return (
    <LandingLayout>
      <div className="bg-brand-bg text-foreground min-h-screen overflow-hidden selection:bg-brand-blue/30 transition-colors duration-500">
        {/* Grid Background Texture */}
        <div
          className="fixed inset-0 z-0 pointer-events-none opacity-[0.015] dark:opacity-100"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--brand-blue) 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }}
        />

        {/* Scanline Effect */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-50 dark:opacity-100">
          <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue/10 to-transparent animate-scanline" />
        </div>

        {/* 1. Enterprise Hero */}
        <FleetHero />

        {/* 3. Core Capabilities Grid */}
        <CoreCapabilities />

        {/* 5. Enterprise Operations Workflow */}
        <OperationsWorkflow />

        {/* 6. Industry Ecosystem */}
        <IndustryEcosystem />

        {/* 7. Fleet API Infrastructure */}
        <FleetAPISection />

        {/* 9. Final CTA */}
        <FinalCTA />
      </div>
    </LandingLayout>
  );
}
