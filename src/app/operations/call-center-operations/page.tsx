import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { EnterpriseFooter } from "@/components/landing/enterprise-footer";
import { CallCenterHero } from "./components/CallCenterHero";
import { TrustScale } from "./components/TrustScale";
import { CapabilitiesGrid } from "./components/CapabilitiesGrid";
import { LiveCommandCenter } from "./components/LiveCommandCenter";
import { SupportServices } from "./components/SupportServices";
import { VehicleCoverage } from "./components/VehicleCoverage";
import { ResponseWorkflow } from "./components/ResponseWorkflow";
import { CallCenterAnalytics } from "./components/CallCenterAnalytics";
import { OperationalMetrics } from "./components/OperationalMetrics";
import { CallCenterCTA } from "./components/CallCenterCTA";

export const metadata: Metadata = {
  title: "Call Center Operations | Nationwide Trans Inc.",
  description: "Enterprise Call Center & Dispatch Operations Platform.",
};

export default function CallCenterOperationsPage() {
  return (
    <main className="bg-brand-bg min-h-screen text-brand-slate selection:bg-brand-blue/30 selection:text-foreground dark:text-white">
      <Navbar />
      
      <div className="relative z-10 pt-24">
        <CallCenterHero />
        <TrustScale />
        <CapabilitiesGrid />
        <LiveCommandCenter />
        <SupportServices />
        
        <div className="grid lg:grid-cols-2 gap-6 container mx-auto px-4 mb-24">
           <VehicleCoverage />
           <ResponseWorkflow />
        </div>

        <CallCenterAnalytics />
        <OperationalMetrics />
        <CallCenterCTA />
      </div>
      
      <EnterpriseFooter />
    </main>
  );
}
