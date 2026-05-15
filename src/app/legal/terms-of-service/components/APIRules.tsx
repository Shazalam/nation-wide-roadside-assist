'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Terminal, Shield, Lock, Key, Activity, Code, Webhook, Cpu } from 'lucide-react';

const apiPolicies = [
  { label: 'OAuth 2.0 Security', desc: 'Mandatory token-based authentication for all infrastructure nodes.', icon: Key },
  { label: 'Webhook Verification', desc: 'Cryptographic signature validation for all dispatch event pushes.', icon: Webhook },
  { label: 'Rate Limit Governance', desc: 'Dynamic throttling based on enterprise tier and operational load.', icon: Activity },
  { label: 'mTLS Enforcement', desc: 'Mutual TLS for mission-critical service-to-service communication.', icon: Cpu }
];

export const APIRules = () => {
  return (
    <section className="py-24 relative bg-brand-bg overflow-hidden border-t border-brand-border">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
           <div className="lg:w-1/2 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3"
              >
                <div className="h-[1px] w-8 bg-[#2F80FF]" />
                <span className="text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.3em]">API Platform Governance</span>
              </motion.div>
              <h2 className="text-4xl lg:text-5xl font-black text-foreground dark:text-white tracking-tight leading-tight">
                Developer & <br />
                <span className="text-[#2F80FF]">Infrastructure Rules</span>
              </h2>
              <p className="text-base lg:text-lg text-brand-slate leading-relaxed font-medium">
                Our API platform is the backbone of our nationwide operations. These rules ensure the stability, security, and performance of the dispatch mesh for all partners.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                 {apiPolicies.map((p, i) => (
                   <div key={i} className="p-4 bg-white/[0.02] border border-brand-border rounded-xl space-y-2">
                      <p className="text-[10px] font-black text-foreground dark:text-white uppercase tracking-widest flex items-center gap-2">
                         <p.icon className="h-3 w-3 text-[#2F80FF]" />
                         {p.label}
                      </p>
                      <p className="text-[10px] text-brand-slate font-medium leading-relaxed">{p.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
           
           <div className="lg:w-1/2">
              <GlassPanel className="p-0 border-brand-border bg-brand-navy/60 overflow-hidden shadow-2xl">
                 <div className="bg-foreground/[0.03] px-6 py-4 border-b border-brand-border flex items-center justify-between">
                    <div className="flex gap-2">
                       <div className="h-2 w-2 rounded-full bg-red-500/30" />
                       <div className="h-2 w-2 rounded-full bg-amber-500/30" />
                       <div className="h-2 w-2 rounded-full bg-emerald-500/30" />
                    </div>
                    <span className="text-[9px] font-mono text-brand-slate uppercase tracking-[0.2em]">PLATFORM_GOVERNANCE_v4.2</span>
                 </div>
                 <div className="p-8 font-mono text-[11px] leading-relaxed">
                    <pre className="text-[#2F80FF]">
{`/* 
 * API GOVERNANCE ENFORCEMENT 
 */

const GovernancePolicy = {
  version: "2026.1",
  security: {
    auth: "OIDC_COMPLIANT",
    encryption: "TLS_1_3",
    mtls: "REQUIRED_ON_NODES"
  },
  monitoring: {
    telemetry: "REALTIME",
    audit_log: "ENABLED",
    retention: "7_YEARS"
  },
  compliance: [
    "SOC2_TYPE_2",
    "ISO_27001",
    "GDPR"
  ]
};`}
                    </pre>
                 </div>
                 <div className="px-8 py-4 bg-white/[0.01] border-t border-brand-border flex items-center justify-between">
                    <div className="flex items-center gap-2">
                       <Shield className="h-3.5 w-3.5 text-[#2F80FF]" />
                       <span className="text-[9px] font-black text-brand-slate uppercase tracking-widest">Signed Compliance Mesh</span>
                    </div>
                    <Lock className="h-3 w-3 text-brand-slate opacity-40" />
                 </div>
              </GlassPanel>
           </div>
        </div>
      </div>
    </section>
  );
};
