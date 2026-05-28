'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Shield, Lock, FileText, Activity, Terminal, AlertCircle } from 'lucide-react';

const DocumentationSection = ({ id, title, children }: { id: string, title: string, children: React.ReactNode }) => (
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

export const LegalContent = () => {
  return (
    <div className="flex-grow max-w-4xl pb-32">
      <DocumentationSection id="overview" title="Overview">
        <p className="text-brand-slate text-base leading-relaxed font-medium">
          At Nationwide Roadside Assist (Nationwide Roadside Assist), privacy is not just a legal requirement; it is a fundamental component of our infrastructure. This Privacy Policy describes how we collect, use, and protect data within our nationwide roadside infrastructure and dispatch ecosystem.
        </p>
        <div className="p-5 bg-brand-blue/5 border border-brand-blue/20 rounded-2xl flex items-start gap-4">
          <AlertCircle className="h-5 w-5 text-brand-blue mt-0.5 shrink-0" />
          <p className="text-xs font-medium text-brand-slate leading-relaxed">
            <span className="text-foreground dark:text-white font-bold block mb-1">Infrastructure Notice:</span>
            This policy applies specifically to enterprise partners, fleet operators, insurance providers, and developers using the Nationwide Roadside Assist platform. Consumer interactions are governed by the respective service provider's privacy terms.
          </p>
        </div>
      </DocumentationSection>

      <DocumentationSection id="collection" title="Information We Collect">
        <p className="text-brand-slate text-base leading-relaxed font-medium mb-6">
          To provide mission-critical mobility services, we collect data across several categories:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: 'Operational Telemetry', desc: 'Real-time GPS coordinates, vehicle speed, and diagnostic data.', icon: Activity },
            { label: 'Fleet Metadata', desc: 'Vehicle ID, class specifications, and maintenance schedules.', icon: Terminal },
            { label: 'Dispatch Records', desc: 'Service request timestamps, routing logs, and resolution data.', icon: FileText },
            { label: 'Identity & Access', desc: 'Encrypted API keys, auth tokens, and verified partner credentials.', icon: Lock }
          ].map((item, i) => (
            <div key={i} className="p-5 bg-white/[0.02] border border-brand-border rounded-xl space-y-3 group hover:border-[#2F80FF]/30 transition-all">
              <item.icon className="h-5 w-5 text-[#2F80FF]" />
              <h4 className="text-sm font-black text-foreground dark:text-white uppercase tracking-widest">{item.label}</h4>
              <p className="text-[11px] text-brand-slate font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </DocumentationSection>

      <DocumentationSection id="usage" title="Operational Data Usage">
        <p className="text-brand-slate text-base leading-relaxed font-medium">
          We use collected data solely to power the nationwide mobility infrastructure. Our usage protocols include:
        </p>
        <ul className="space-y-4">
          {[
            'Real-time dispatch coordination and routing optimization.',
            'Predictive maintenance and downtime risk assessment for enterprise fleets.',
            'Automated claims verification for insurance partners.',
            'Network performance monitoring and SLA enforcement.',
            'Security auditing and infrastructure protection.'
          ].map((text, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="h-5 w-5 rounded-full bg-[#2F80FF]/10 border border-[#2F80FF]/30 flex items-center justify-center shrink-0 mt-0.5">
                <div className="h-1.5 w-1.5 rounded-full bg-[#2F80FF]" />
              </div>
              <span className="text-sm text-brand-slate font-medium">{text}</span>
            </li>
          ))}
        </ul>
      </DocumentationSection>

      <DocumentationSection id="fleet-data" title="Dispatch & Fleet Data">
        <div className="space-y-6">
          <p className="text-brand-slate text-base leading-relaxed font-medium">
            Fleet telemetry and dispatch data are handled with the highest level of sensitivity. Access is restricted to authorized personnel and automated systems necessary for service delivery.
          </p>
          <div className="bg-brand-navy border border-brand-border rounded-2xl overflow-hidden">
            <div className="px-6 py-4 bg-white/[0.03] border-b border-brand-border">
              <span className="text-[10px] font-black text-brand-blue uppercase tracking-widest">Data Segmentation Protocol</span>
            </div>
            <div className="p-6">
              <pre className="font-mono text-[11px] text-[#2F80FF]/80 leading-relaxed">
                {`{
  "protocol": "Infrastructure Isolation",
  "segmentation": "Logical Tenant separation",
  "encryption": "AES-256-GCM at rest",
  "access": "RBAC + JIT Provisioning",
  "retention": "SLA-Defined (Default: 7 Years)"
}`}
              </pre>
            </div>
          </div>
        </div>
      </DocumentationSection>

      <DocumentationSection id="security" title="Security Practices">
        <div className="space-y-8">
          <p className="text-brand-slate text-base leading-relaxed font-medium">
            Our security framework is modeled after the most rigorous enterprise standards, including SOC 2 Type II and ISO 27001.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'End-to-End Encryption', desc: 'TLS 1.3 for data in transit and AES-256 for data at rest.' },
              { title: 'Zero Trust Architecture', desc: 'Every internal service call is authenticated and authorized.' },
              { title: 'Continuous Monitoring', desc: 'Real-time threat detection and automated response protocols.' }
            ].map((item, i) => (
              <div key={i} className="space-y-3">
                <h4 className="text-xs font-black text-foreground dark:text-white uppercase tracking-widest">{item.title}</h4>
                <p className="text-[11px] text-brand-slate font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </DocumentationSection>

      <DocumentationSection id="gdpr" title="GDPR & International Data Rights">
        <p className="text-brand-slate text-base leading-relaxed font-medium">
          While Nationwide Roadside Assist primarily operates in the United States, our data governance framework adheres to GDPR principles for all enterprise users. This includes the right to data portability, the right to erasure, and the right to object to automated processing.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="bg-white/[0.03] border border-brand-border px-5 py-2.5 rounded-xl text-[10px] font-black text-foreground dark:text-white uppercase tracking-widest hover:border-brand-blue transition-all">Download DPA →</button>
          <button className="bg-white/[0.03] border border-brand-border px-5 py-2.5 rounded-xl text-[10px] font-black text-foreground dark:text-white uppercase tracking-widest hover:border-brand-blue transition-all">Privacy Request Portal →</button>
        </div>
      </DocumentationSection>

      <DocumentationSection id="contact" title="Contact Information">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-xs font-black text-foreground dark:text-white uppercase tracking-widest">Legal & Compliance</h4>
            <p className="text-[11px] text-brand-slate font-medium leading-relaxed">
              Nationwide Roadside Assist<br />
              Attn: Legal Department / DPO<br />
              11727 East End Avenue<br />
              Chino, CA 91710
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-black text-foreground dark:text-white uppercase tracking-widest">Inquiries</h4>
            <div className="space-y-2">
              <p className="text-[11px] font-mono text-brand-blue">privacy@nationwidetrans.com</p>
              <p className="text-[11px] font-mono text-brand-blue">legal@nationwidetrans.com</p>
            </div>
          </div>
        </div>
      </DocumentationSection>

    </div>
  );
};
