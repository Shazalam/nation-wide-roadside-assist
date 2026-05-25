import React from 'react';
import HeroSection from './HeroSection';
import CoreCapabilities from './CoreCapabilities';
import TechShowcase from './TechShowcase';
import Workflow from './Workflow';
import Ecosystem from './Ecosystem';
import APIInfrastructure from './APIInfrastructure';
import CTASection from './CTASection';

export const metadata = {
  title: "RV & Camper Roadside Support | Nationwide Roadside Assist",
  description: "Enterprise roadside intelligence, specialized RV dispatch operations, and API-driven mobility support engineered for motorhomes, travel trailers, campground networks, and insurers.",
};

export default function RVCamperSupportPage() {
  return (
    <div className="bg-brand-bg text-foreground dark:text-white selection:bg-[#2F80FF]/30 overflow-hidden font-sans">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[1000px] h-[500px] bg-[#2F80FF]/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-1/4 right-0 w-[800px] h-[600px] bg-[#FF7A1A]/5 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5" />
      </div>

      <div className="relative z-10">
        <HeroSection />
        <CoreCapabilities />
        <TechShowcase />
        <Workflow />
        <Ecosystem />
        <APIInfrastructure />
        <CTASection />
      </div>
    </div>
  );
}
