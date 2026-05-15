'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Shield, Zap, Lock, Activity, Database, AlertCircle, Info, Server, BarChart3, Globe } from 'lucide-react';

const PolicySection = ({ id, title, children }: { id: string, title: string, children: React.ReactNode }) => (
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

export const CookieContent = () => {
  return (
    <div className="flex-grow max-w-4xl pb-32">
      
      <PolicySection id="overview" title="Overview">
        <p className="text-brand-slate text-base leading-relaxed font-medium">
          Nationwide Trans Inc. ("NTI", "we", "us", or "our") uses cookies and similar tracking technologies to ensure the reliability of our nationwide roadside infrastructure, optimize dispatch intelligence, and provide a secure, high-performance experience for our enterprise partners. This policy explains how we utilize these technologies in alignment with our enterprise governance and data accountability standards.
        </p>
        <div className="p-5 bg-brand-blue/5 border border-brand-blue/20 rounded-2xl flex items-start gap-4">
           <Info className="h-5 w-5 text-[#2F80FF] mt-0.5 shrink-0" />
           <p className="text-xs font-medium text-brand-slate leading-relaxed">
             <span className="text-foreground dark:text-white font-bold block mb-1 uppercase tracking-wider">Governance Notice:</span>
             Our tracking infrastructure is audited annually for compliance with GDPR, CCPA, and SOC 2 Type II security frameworks.
           </p>
        </div>
      </PolicySection>

      <PolicySection id="what-are-cookies" title="What Are Cookies">
        <p className="text-brand-slate text-base leading-relaxed font-medium">
          Cookies are small data packets stored on your device that allow our infrastructure to recognize session states, authenticate users, and gather operational telemetry. We also use "web beacons" and "pixel tags" to monitor dispatch event propagation and API performance across our mobility network.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
           <div className="p-5 bg-white/[0.02] border border-brand-border rounded-xl space-y-3">
              <div className="flex items-center gap-2">
                 <Zap className="h-3.5 w-3.5 text-[#2F80FF]" />
                 <span className="text-[10px] font-black text-foreground dark:text-white uppercase tracking-widest">Session Cookies</span>
              </div>
              <p className="text-[11px] text-brand-slate font-medium leading-relaxed">Temporary indicators that expire once your operational session ends. Used primarily for real-time dispatch state management.</p>
           </div>
           <div className="p-5 bg-white/[0.02] border border-brand-border rounded-xl space-y-3">
              <div className="flex items-center gap-2">
                 <Database className="h-3.5 w-3.5 text-[#2F80FF]" />
                 <span className="text-[10px] font-black text-foreground dark:text-white uppercase tracking-widest">Persistent Cookies</span>
              </div>
              <p className="text-[11px] text-brand-slate font-medium leading-relaxed">Data nodes that remain on your device for a set period. Used for localized preferences and long-term infrastructure analytics.</p>
           </div>
        </div>
      </PolicySection>

      <PolicySection id="essential" title="Essential Infrastructure">
        <div className="space-y-6">
           <p className="text-brand-slate text-base leading-relaxed font-medium">
              These cookies are mission-critical for the operation of the NTI platform. They cannot be disabled through our consent management system as they are required for core infrastructure stability.
           </p>
           <table className="w-full text-left border-collapse">
              <thead>
                 <tr className="border-b border-brand-border">
                    <th className="py-4 text-[10px] font-black text-brand-slate uppercase tracking-widest">Node Name</th>
                    <th className="py-4 text-[10px] font-black text-brand-slate uppercase tracking-widest">Purpose</th>
                    <th className="py-4 text-[10px] font-black text-brand-slate uppercase tracking-widest">Retention</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-brand-border/50">
                 {[
                   { name: 'NTI_AUTH_TOKEN', purpose: 'Enterprise authentication and session mesh', retention: 'Session' },
                   { name: 'DISPATCH_ID_SYNC', purpose: 'Real-time dispatch event coordination', retention: '24 Hours' },
                   { name: 'INFRA_HEALTH_CK', purpose: 'Load balancing and node availability checks', retention: 'Persistent' }
                 ].map((row, i) => (
                   <tr key={i} className="hover:bg-white/[0.01] transition-colors">
                      <td className="py-4 text-[11px] font-mono text-[#2F80FF]">{row.name}</td>
                      <td className="py-4 text-[11px] text-brand-slate font-medium">{row.purpose}</td>
                      <td className="py-4 text-[11px] text-brand-slate font-mono">{row.retention}</td>
                   </tr>
                 ))}
              </tbody>
           </table>
        </div>
      </PolicySection>

      <PolicySection id="analytics" title="Operational Analytics">
        <div className="space-y-6">
           <p className="text-brand-slate text-base leading-relaxed font-medium">
              We utilize analytics cookies to monitor the propagation of roadside events, API latency, and operational efficiency across our nationwide network. This telemetry is anonymized and used strictly for infrastructure optimization.
           </p>
           <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 p-4 bg-white/[0.02] border border-brand-border rounded-2xl">
                 <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                    <BarChart3 className="h-5 w-5 text-emerald-400" />
                 </div>
                 <div>
                    <h4 className="text-xs font-black text-foreground dark:text-white uppercase tracking-widest">Performance Observability</h4>
                    <p className="text-[10px] text-brand-slate font-medium">Monitoring dispatch engine throughput and regional response times.</p>
                 </div>
              </div>
           </div>
        </div>
      </PolicySection>

      <PolicySection id="gdpr-rights" title="GDPR Cookie Rights">
        <div className="space-y-6">
           <p className="text-brand-slate text-base leading-relaxed font-medium">
              Under the General Data Protection Regulation (GDPR), European Union residents have specific rights regarding tracking and consent management.
           </p>
           <ul className="space-y-4">
              {[
                "The right to be informed about how cookies are used in our mobility network.",
                "The right to provide explicit consent before non-essential tracking is initiated.",
                "The right to withdraw consent at any time via our Trust Center.",
                "The right to access and delete your specific consent history nodes."
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
      </PolicySection>

      <PolicySection id="contact" title="Contact Information">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           <div className="space-y-4">
              <h4 className="text-xs font-black text-foreground dark:text-white uppercase tracking-widest flex items-center gap-2">
                 <Globe className="h-3.5 w-3.5 text-[#2F80FF]" />
                 Governance Division
              </h4>
              <p className="text-[11px] text-brand-slate font-medium leading-relaxed">
                 Nationwide Trans Inc.<br />
                 Data Sovereignty & Consent Team<br />
                 1200 Enterprise Way<br />
                 San Francisco, CA 94105
              </p>
           </div>
           <div className="space-y-4">
              <h4 className="text-xs font-black text-foreground dark:text-white uppercase tracking-widest flex items-center gap-2">
                 <Lock className="h-3.5 w-3.5 text-[#2F80FF]" />
                 Consent Support
              </h4>
              <div className="space-y-2">
                 <p className="text-[11px] font-mono text-brand-blue font-bold">privacy@nationwidetrans.com</p>
                 <p className="text-[11px] font-mono text-brand-blue font-bold">consent-ops@nationwidetrans.com</p>
              </div>
           </div>
        </div>
      </PolicySection>

    </div>
  );
};
