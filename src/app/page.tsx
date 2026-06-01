'use client';

import { LandingLayout } from "@/components/layout/landing-layout";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { IndustryTabs } from "@/components/landing/industry-tabs";
import { APIInfrastructure } from "@/components/landing/api-infrastructure";
import { FinalCTA } from "@/components/landing/final-cta";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <LandingLayout>
      <title>Nationwide Roadside Assist | Enterprise Mobility Infrastructure</title>
      <meta name="description" content="Enterprise-grade dispatch, nationwide vendor coordination, and API-first technology engineered for insurers, fleets, OEMs, and roadside providers." />
      {/* Cinematic Entry Section */}
      <div className="relative">
        <Hero />
      </div>

      {/* Capabilities Section */}
      <Features />

      {/* Vertical Solutions */}
      <IndustryTabs />

      {/* Developer Experience */}
      <APIInfrastructure />


      {/* Final Conversion Path */}
      <FinalCTA />
    </LandingLayout>
  );
}
