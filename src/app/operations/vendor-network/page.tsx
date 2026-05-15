import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { EnterpriseFooter } from "@/components/landing/enterprise-footer";
import { VendorHero } from "./components/VendorHero";
import { TrustScale } from "./components/TrustScale";
import { VendorGrid } from "./components/VendorGrid";
import { LiveCommandCenter } from "./components/LiveCommandCenter";
import { ServiceEcosystem } from "./components/ServiceEcosystem";
import { VehicleCoverage } from "./components/VehicleCoverage";
import { DispatchWorkflow } from "./components/DispatchWorkflow";
import { OperationalAnalytics } from "./components/OperationalAnalytics";
import { APIInfrastructure } from "./components/APIInfrastructure";
import { OperationalMetrics } from "./components/OperationalMetrics";
import { VendorCTA } from "./components/VendorCTA";

export const metadata: Metadata = {
  title: "Vendor Network Operations | Nationwide Trans Inc.",
  description: "Enterprise vendor network & dispatch operations platform.",
};

export default function VendorNetworkPage() {
  return (
    <main className="bg-brand-bg min-h-screen text-brand-slate selection:bg-brand-blue/30 selection:text-foreground dark:text-white">
      <Navbar />
      
      <div className="relative z-10 pt-24">
        <VendorHero />
        <TrustScale />
        <VendorGrid />
        <LiveCommandCenter />
        <ServiceEcosystem />
        
        <div className="grid lg:grid-cols-2 gap-6 container mx-auto px-4 mb-24">
           <VehicleCoverage />
           <DispatchWorkflow />
        </div>

        <div className="grid lg:grid-cols-2 gap-6 container mx-auto px-4 mb-24">
           <OperationalAnalytics />
           <APIInfrastructure />
        </div>
        
        <OperationalMetrics />
        <VendorCTA />
      </div>
      
      <EnterpriseFooter />
    </main>
  );
}
