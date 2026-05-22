'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Shield, Zap, Lock, Activity, Terminal, AlertCircle, Scale, Globe } from 'lucide-react';

const DocSection = ({ id, title, children }: { id: string, title: string, children: React.ReactNode }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className="scroll-mt-40 mb-16"
  >
    <div className="flex items-center gap-3 mb-6">
       <div className="h-px w-8 bg-[#2F80FF]/30" />
       <h2 className="text-2xl font-black text-foreground dark:text-white tracking-tight uppercase">{title}</h2>
    </div>
    <GlassPanel className="p-8 lg:p-10 border-brand-border bg-card/40 space-y-6">
       {children}
    </GlassPanel>
  </motion.section>
);

export const TermsContent = () => {
  return (
    <div className="flex-grow max-w-4xl pb-32">
      <DocSection id="overview" title="Agreement Overview">
        <p className="text-brand-slate text-base leading-relaxed font-medium">
          These Enterprise Terms of Service ("Agreement") constitute a legally binding agreement between Nationwide Roadside Assist ("Nationwide Roadside Assist") and the entity ("Partner", "Enterprise", or "You") accessing or using our nationwide roadside infrastructure, dispatch intelligence platform, and API-first mobility systems.
        </p>
        <div className="p-5 bg-[#FF7A1A]/5 border border-[#FF7A1A]/20 rounded-2xl flex items-start gap-4">
           <AlertCircle className="h-5 w-5 text-[#FF7A1A] mt-0.5 shrink-0" />
           <p className="text-xs font-medium text-brand-slate leading-relaxed">
             <span className="text-foreground dark:text-white font-bold block mb-1 uppercase tracking-wider">Operational Notice:</span>
             By integrating with Nationwide Roadside Assist infrastructure or utilizing our automated dispatch mesh, you acknowledge that you are an enterprise entity governed by these mission-critical operational standards.
           </p>
        </div>
      </DocSection>

      <DocSection id="services" title="Platform Services">
        <p className="text-brand-slate text-base leading-relaxed font-medium">
          Nationwide Roadside Assist provides a multi-tenant infrastructure platform designed for nationwide mobility operations. Our services include:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
           {[
             { label: 'Automated Dispatch Mesh', icon: Zap },
             { label: 'Real-time Telemetry Processing', icon: Activity },
             { label: 'Nationwide Vendor Routing', icon: Globe },
             { label: 'Infrastructure Analytics', icon: Terminal }
           ].map((item, i) => (
             <div key={i} className="flex items-center gap-3 p-4 bg-white/[0.02] border border-brand-border rounded-xl">
                <item.icon className="h-4 w-4 text-[#2F80FF]" />
                <span className="text-xs font-bold text-foreground dark:text-white uppercase tracking-widest">{item.label}</span>
             </div>
           ))}
        </div>
      </DocSection>

      <DocSection id="dispatch" title="Enterprise Dispatch Operations">
        <div className="space-y-6">
           <p className="text-brand-slate text-base leading-relaxed font-medium">
              Dispatch operations are governed by Nationwide Roadside Assist's automated routing logic and service-level prioritization algorithms.
           </p>
           <ul className="space-y-4">
              {[
                "Dispatch requests must include verified vehicle telemetry and incident metadata.",
                "Service prioritization is determined by Nationwide Roadside Assist's mission-critical response engine.",
                "Real-time event updates are pushed via Nationwide Roadside Assist's webhook architecture.",
                "Partners must maintain active communication nodes for dispatch coordination."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                   <div className="h-5 w-5 rounded-full bg-[#2F80FF]/10 border border-[#2F80FF]/30 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="h-1 w-1 rounded-full bg-[#2F80FF]" />
                   </div>
                   <span className="text-sm text-brand-slate font-medium">{item}</span>
                </li>
              ))}
           </ul>
        </div>
      </DocSection>

      <DocSection id="api-usage" title="API Usage Policies">
        <div className="space-y-6">
           <p className="text-brand-slate text-base leading-relaxed font-medium">
              Access to Nationwide Roadside Assist's infrastructure via API is governed by our developer trust framework and rate-limiting protocols.
           </p>
           <div className="bg-brand-navy border border-brand-border rounded-2xl overflow-hidden font-mono text-[11px]">
              <div className="px-6 py-4 bg-white/[0.03] border-b border-brand-border flex justify-between items-center">
                 <span className="font-black text-brand-blue uppercase tracking-widest">Rate Limit Governance</span>
                 <span className="text-[9px] text-brand-slate opacity-60">HTTP/1.1 429 HANDLING</span>
              </div>
              <div className="p-6">
                 <pre className="text-[#2F80FF]/80 leading-relaxed">
{`{
  "tier": "enterprise_v4",
  "limits": {
    "requests_per_second": 1000,
    "burst_capacity": 2500,
    "webhook_concurrency": 50
  },
  "auth": "OAuth 2.0 + mTLS",
  "sla_backing": "99.9% Uptime Guarantee"
}`}
                 </pre>
              </div>
           </div>
        </div>
      </DocSection>

      <DocSection id="sla" title="SLA Commitments">
        <p className="text-brand-slate text-base leading-relaxed font-medium">
          Our Service Level Agreement (SLA) defines the operational performance standards for Nationwide Roadside Assist's infrastructure.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
           {[
             { label: 'Uptime', val: '99.98%' },
             { label: 'Response', val: '< 15ms' },
             { label: 'Support', val: '24/7/365' }
           ].map((m, i) => (
             <div key={i} className="p-6 bg-white/[0.02] border border-brand-border rounded-2xl text-center">
                <p className="text-2xl font-black text-foreground dark:text-white mb-1">{m.val}</p>
                <p className="text-[9px] font-black text-[#2F80FF] uppercase tracking-widest">{m.label}</p>
             </div>
           ))}
        </div>
      </DocSection>

      <DocSection id="liability" title="Limitation of Liability">
        <div className="space-y-6">
           <p className="text-brand-slate text-base leading-relaxed font-medium italic border-l-2 border-brand-blue/30 pl-6 py-2 bg-brand-blue/5 rounded-r-2xl">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, Nationwide Roadside Assist SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING FROM INFRASTRUCTURE OUTAGES OR DISPATCH LATENCY.
           </p>
           <p className="text-brand-slate text-sm leading-relaxed font-medium">
              Liability is capped at the total fees paid by the partner in the twelve (12) months preceding the claim, specifically as it relates to mission-critical infrastructure delivery.
           </p>
        </div>
      </DocSection>

      <DocSection id="contact" title="Contact Information">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           <div className="space-y-4">
              <h4 className="text-xs font-black text-foreground dark:text-white uppercase tracking-widest flex items-center gap-2">
                 <Scale className="h-3.5 w-3.5 text-[#2F80FF]" />
                 Legal & Governance
              </h4>
              <p className="text-[11px] text-brand-slate font-medium leading-relaxed">
                 Nationwide Roadside Assist<br />
                 Legal Infrastructure Division<br />
                 1200 Enterprise Way<br />
                 San Francisco, CA 94105
              </p>
           </div>
           <div className="space-y-4">
              <h4 className="text-xs font-black text-foreground dark:text-white uppercase tracking-widest flex items-center gap-2">
                 <Shield className="h-3.5 w-3.5 text-[#2F80FF]" />
                 Support Channels
              </h4>
              <div className="space-y-2">
                 <p className="text-[11px] font-mono text-brand-blue">legal@nationwidetrans.com</p>
                 <p className="text-[11px] font-mono text-brand-blue">compliance@nationwidetrans.com</p>
              </div>
           </div>
        </div>
      </DocSection>

    </div>
  );
};
