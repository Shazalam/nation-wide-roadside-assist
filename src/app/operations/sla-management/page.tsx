import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { EnterpriseFooter } from "@/components/landing/enterprise-footer";
import { SLAHero } from "./components/SLAHero";
import { TrustScale } from "./components/TrustScale";
import { CapabilitiesGrid } from "./components/CapabilitiesGrid";
import { LiveCommandCenter } from "./components/LiveCommandCenter";
import { OperationalPerformance } from "./components/OperationalPerformance";
import { VehicleCoverage } from "./components/VehicleCoverage";
import { EnterpriseWorkflow } from "./components/EnterpriseWorkflow";
import { SLAAnalytics } from "./components/SLAAnalytics";
import { APIInfrastructure } from "./components/APIInfrastructure";
import { OperationalMetrics } from "./components/OperationalMetrics";
import { SLACTA } from "./components/SLACTA";

export const metadata: Metadata = {
  title: "SLA Management | Nationwide Trans Inc.",
  description: "Enterprise SLA Intelligence & Dispatch Performance Management.",
};

export default function SLAManagementPage() {
  return (
    <main className="bg-[#081120] min-h-screen text-brand-slate selection:bg-brand-blue/30 selection:text-white">
      <Navbar />
      
      <div className="relative z-10 pt-24">
        <SLAHero />
        <TrustScale />
        <CapabilitiesGrid />
        <LiveCommandCenter />
        <OperationalPerformance />
        
        <div className="grid lg:grid-cols-2 gap-6 container mx-auto px-4 mb-24">
           <VehicleCoverage />
           <EnterpriseWorkflow />
        </div>

        <div className="grid lg:grid-cols-2 gap-6 container mx-auto px-4 mb-24">
           <SLAAnalytics />
           <APIInfrastructure />
        </div>
        
        <OperationalMetrics />
        <SLACTA />
      </div>
      
      <EnterpriseFooter />
    </main>
  );
}
