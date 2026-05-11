'use client';

import { LandingLayout } from "@/components/layout/landing-layout";
import { Hero } from "@/components/landing/hero";
import { TrustBar } from "@/components/landing/trust-bar";
import { Features } from "@/components/landing/features";
import { AdvancedTechShowcase } from "@/components/landing/advanced-tech-showcase";
import { IndustryTabs } from "@/components/landing/industry-tabs";
import { APIInfrastructure } from "@/components/landing/api-infrastructure";
import { FinalCTA } from "@/components/landing/final-cta";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <LandingLayout>
      {/* Cinematic Entry Section */}
      <div className="relative">
        <Hero />
        <TrustBar />
      </div>

      {/* Capabilities Section */}
      <Features />

      {/* Futuristic Deep Tech Section */}
      <AdvancedTechShowcase />

      {/* Vertical Solutions */}
      <IndustryTabs />

      {/* Developer Experience */}
      <APIInfrastructure />

      {/* Enterprise Metrics Section (Injected as part of a larger story) */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="p-12 rounded-[2.5rem] bg-brand-navy/30 border border-white/5 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent" />
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div className="space-y-2">
                  <h3 className="text-5xl font-black text-white tracking-tighter">$14.2B</h3>
                  <p className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.3em]">Operational Value Secured</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-5xl font-black text-white tracking-tighter">12ms</h3>
                  <p className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.3em]">Network Propagation</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-5xl font-black text-white tracking-tighter">50k+</h3>
                  <p className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.3em]">Verified Service Nodes</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Final Conversion Path */}
      <FinalCTA />
    </LandingLayout>
  );
}
