import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { EnterpriseFooter } from "@/components/landing/enterprise-footer";
import { CallCenterHero } from "./components/CallCenterHero";
import { CapabilitiesGrid } from "./components/CapabilitiesGrid";
import { SupportServices } from "./components/SupportServices";
import { VehicleCoverage } from "./components/VehicleCoverage";
import { ResponseWorkflow } from "./components/ResponseWorkflow";
import { CallCenterCTA } from "./components/CallCenterCTA";

export const metadata: Metadata = {
  title: "Call Center Operations | Nationwide Roadside Assist",
  description: "Enterprise Call Center & Dispatch Operations Platform.",
};

export default function CallCenterOperationsPage() {
  return (
    <main className="bg-brand-bg min-h-screen text-brand-slate selection:bg-brand-blue/30 selection:text-foreground dark:text-white">
      <Navbar />
      
      <div className="relative z-10 pt-24">
        <CallCenterHero />
        <CapabilitiesGrid />
        <SupportServices />
        
        <VehicleCoverage />
        <ResponseWorkflow />

        <CallCenterCTA />
      </div>
      
      <EnterpriseFooter />
    </main>
  );
}
