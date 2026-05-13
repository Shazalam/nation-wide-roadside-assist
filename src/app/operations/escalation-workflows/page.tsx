import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { EnterpriseFooter } from "@/components/landing/enterprise-footer";
import { EscalationHero } from "./components/EscalationHero";
import { TrustScale } from "./components/TrustScale";
import { CapabilitiesGrid } from "./components/CapabilitiesGrid";
import { LiveCommandCenter } from "./components/LiveCommandCenter";
import { SupportServices } from "./components/SupportServices";
import { VehicleCoverage } from "./components/VehicleCoverage";
import { EscalationWorkflow } from "./components/EscalationWorkflow";
import { EscalationAnalytics } from "./components/EscalationAnalytics";
import { OperationalMetrics } from "./components/OperationalMetrics";
import { EscalationCTA } from "./components/EscalationCTA";

export const metadata: Metadata = {
  title: "Escalation Workflows | Nationwide Trans Inc.",
  description: "Enterprise Incident Recovery Infrastructure & Escalation Workflows.",
};

export default function EscalationWorkflowsPage() {
  return (
    <main className="bg-[#081120] min-h-screen text-brand-slate selection:bg-brand-blue/30 selection:text-white">
      <Navbar />
      
      <div className="relative z-10 pt-24">
        <EscalationHero />
        <TrustScale />
        <CapabilitiesGrid />
        <LiveCommandCenter />
        <SupportServices />
        
        <div className="grid lg:grid-cols-2 gap-6 container mx-auto px-4 mb-24">
           <VehicleCoverage />
           <EscalationWorkflow />
        </div>

        <EscalationAnalytics />
        <OperationalMetrics />
        <EscalationCTA />
      </div>
      
      <EnterpriseFooter />
    </main>
  );
}
