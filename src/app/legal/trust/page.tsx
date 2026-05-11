'use client';

import React from 'react';
import { ShieldCheck, Lock, Globe, FileText, CheckCircle2, ArrowRight } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

export default function TrustCenterPage() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <header className="space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Trust Center</h2>
        <p className="text-brand-slate text-lg leading-relaxed">
          Our commitment to security, compliance, and transparency. Nationwide Trans Inc. is engineered to protect the world's most sensitive mobility data.
        </p>
      </header>

      {/* Trust Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <GlassPanel className="p-8 bg-white/5 border-white/10 hover:border-brand-blue/30 transition-all">
          <Lock className="h-8 w-8 text-brand-blue mb-6" />
          <h3 className="text-xl font-bold text-white mb-4">Encryption Mesh</h3>
          <p className="text-brand-slate text-sm leading-relaxed mb-6">
            Enterprise-grade AES-256 encryption at rest and TLS 1.3 in transit. Every data point in our mesh is cryptographically secured.
          </p>
          <button className="text-[10px] font-bold text-brand-blue uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
            Security Overview <ArrowRight className="h-3 w-3" />
          </button>
        </GlassPanel>

        <GlassPanel className="p-8 bg-white/5 border-white/10 hover:border-emerald-500/30 transition-all">
          <Globe className="h-8 w-8 text-emerald-500 mb-6" />
          <h3 className="text-xl font-bold text-white mb-4">Global Compliance</h3>
          <p className="text-brand-slate text-sm leading-relaxed mb-6">
            Adherence to international data protection standards including GDPR, CCPA, and regional mobility mandates.
          </p>
          <button className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
            View Compliance <ArrowRight className="h-3 w-3" />
          </button>
        </GlassPanel>
      </div>

      {/* Compliance Certificates */}
      <section className="space-y-8">
        <h3 className="text-2xl font-bold text-white border-b border-white/5 pb-4">Standard & Certifications</h3>
        <div className="space-y-4">
           {[
             { name: "SOC 2 Type II", status: "Certified", desc: "Security, Availability, and Confidentiality audited." },
             { name: "ISO/IEC 27001", status: "Certified", desc: "Information security management system standard." },
             { name: "GDPR Sovereign", status: "Compliant", desc: "Localized data residency for European infrastructures." },
             { name: "HIPAA Compatible", status: "Ready", desc: "Infrastructure ready for medical transport coordination." }
           ].map((cert) => (
             <div key={cert.name} className="flex items-center justify-between p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="space-y-1">
                   <h4 className="text-sm font-bold text-white">{cert.name}</h4>
                   <p className="text-xs text-brand-slate">{cert.desc}</p>
                </div>
                <div className="flex items-center gap-2 text-emerald-500">
                   <CheckCircle2 className="h-4 w-4" />
                   <span className="text-[10px] font-bold uppercase tracking-widest">{cert.status}</span>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* Incident Status */}
      <section className="p-8 rounded-3xl bg-brand-blue/5 border border-brand-blue/10 flex flex-col md:flex-row items-center justify-between gap-8">
         <div className="space-y-2">
            <h4 className="text-lg font-bold text-white">System Transparency</h4>
            <p className="text-sm text-brand-slate">View real-time and historical network uptime reports.</p>
         </div>
         <button className="px-6 py-3 rounded-xl bg-brand-blue text-white font-bold text-xs uppercase tracking-widest">
            Network Status Node
         </button>
      </section>
    </div>
  );
}
