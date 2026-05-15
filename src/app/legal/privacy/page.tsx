'use client';

import React from 'react';
import { History, ShieldCheck, Download } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <header className="space-y-6">
        <div className="flex items-center gap-2 text-brand-blue">
          <History className="h-4 w-4" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Last Updated: May 11, 2026</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-white tracking-tight">Privacy Policy</h2>
        <p className="text-brand-slate text-lg leading-relaxed">
          At Nationwide Trans Inc., we take a "Privacy-by-Design" approach to mobility infrastructure. This policy outlines how we handle data within our mesh network.
        </p>
        <div className="flex gap-4">
           <button className="text-[10px] font-bold text-foreground dark:text-white uppercase tracking-widest flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-brand-border hover:bg-white/10 transition-all">
             <Download className="h-3 w-3" /> Download PDF
           </button>
           <button className="text-[10px] font-bold text-brand-blue uppercase tracking-widest flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-blue/5 border border-brand-blue/10 hover:bg-brand-blue/10 transition-all">
             <History className="h-3 w-3" /> Change Log
           </button>
        </div>
      </header>

      <div className="h-px w-full bg-white/5" />

      {/* Content Sections */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-foreground dark:text-white">1. Data Sovereignty</h3>
        <p className="text-brand-slate leading-relaxed">
          We maintain localized data residency nodes for all enterprise clients. Telemetry data generated within the European Economic Area (EEA) is processed and stored on dedicated clusters within the region, ensuring full compliance with local mandates.
        </p>
        <div className="p-6 rounded-2xl bg-brand-blue/5 border border-brand-blue/10 space-y-4">
           <h4 className="text-sm font-bold text-foreground dark:text-white flex items-center gap-2">
             <ShieldCheck className="h-4 w-4 text-brand-blue" />
             Infrastructure Encryption
           </h4>
           <p className="text-xs text-brand-slate leading-relaxed">
             All PII (Personally Identifiable Information) is encrypted at rest using AES-256 and in transit using TLS 1.3. We utilize hardware security modules (HSM) for cryptographic key management.
           </p>
        </div>
      </section>

      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-foreground dark:text-white">2. Asset Telemetry</h3>
        <p className="text-brand-slate leading-relaxed">
          To provide sub-15 minute roadside response times, our mesh network collects real-time GPS and vehicle diagnostic data. This data is anonymized for network optimization and only decrypted for active dispatch events.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
           {[
             "Coordinates & Heading",
             "VIN & Odometer State",
             "Battery & Fuel Level",
             "Diagnostic Trouble Codes"
           ].map((item) => (
             <li key={item} className="flex items-center gap-3 text-sm text-brand-slate">
                <div className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                {item}
             </li>
           ))}
        </ul>
      </section>

      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-foreground dark:text-white">3. Third-Party Nodes</h3>
        <p className="text-brand-slate leading-relaxed">
          Dispatch requests are broadcast to our certified vendor network. These partners only receive the minimum viable dataset required to complete the service request.
        </p>
      </section>

      <footer className="pt-12 border-t border-brand-border">
         <p className="text-xs text-brand-slate">
           Questions regarding this policy should be directed to our Data Protection Officer at <span className="text-brand-blue">privacy@nationwidetrans.com</span>
         </p>
      </footer>
    </div>
  );
}
