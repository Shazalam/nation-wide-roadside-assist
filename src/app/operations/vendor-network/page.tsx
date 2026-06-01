import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { EnterpriseFooter } from "@/components/landing/enterprise-footer";
import { VendorHero } from "./components/VendorHero";
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
        <ServiceEcosystem />
        
        <VehicleCoverage />
        <DispatchWorkflow />
        <APIInfrastructure />        
        <OperationalMetrics />
        <VendorCTA />
      </div>
      
      <EnterpriseFooter />
    </main>
  );
}
