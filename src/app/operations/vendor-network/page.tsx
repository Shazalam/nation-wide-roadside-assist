import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { EnterpriseFooter } from "@/components/landing/enterprise-footer";
import { VendorHero } from "./components/VendorHero";
import { TrustScale } from "./components/TrustScale";
import { VendorGrid } from "./components/VendorGrid";
import { ServiceEcosystem } from "./components/ServiceEcosystem";
import { VehicleCoverage } from "./components/VehicleCoverage";
import { DispatchWorkflow } from "./components/DispatchWorkflow";
import { APIInfrastructure } from "./components/APIInfrastructure";
import { OperationalMetrics } from "./components/OperationalMetrics";
import { VendorCTA } from "./components/VendorCTA";

export const metadata: Metadata = {
  title: "Vendor Network Operations | Nationwide Roadside Assist",
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
        <ServiceEcosystem />
        
        <div className="grid lg:grid-cols-2 gap-6 container mx-auto px-4 mb-24">
           <VehicleCoverage />
           <DispatchWorkflow />
        </div>

        <div className="max-w-4xl mx-auto px-4 mb-24">
           <APIInfrastructure />
        </div>
        
        <OperationalMetrics />
        <VendorCTA />
      </div>
      
      <EnterpriseFooter />
    </main>
  );
}
