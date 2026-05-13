'use client';

import React from 'react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Terminal } from 'lucide-react';

const codeSnippet = `// Initialize SLA Telemetry SDK
import { SLAMonitor } from '@nationwide-trans/sla';

const monitor = new SLAMonitor({
  apiKey: 'nt_prod_x89f2...',
  environment: 'production',
  region: 'us-east'
});

// Stream real-time compliance events
monitor.on('sla.breach_warning', (event) => {
  console.log('High Risk Detected:', event.riskScore);
  
  if (event.riskScore > 0.85) {
    escalateIncident(event.incidentId);
  }
});`;

export const APIInfrastructure = () => {
  return (
    <GlassPanel className="p-0 border-white/5 bg-[#0A192F]/40 h-full flex flex-col overflow-hidden">
      <div className="p-6 border-b border-white/5">
         <h3 className="text-lg font-bold text-white mb-2">API Infrastructure</h3>
         <p className="text-sm text-[#94A3B8]">
            Integrate our SLA APIs, Dispatch Webhooks, and Vendor Analytics directly into your existing enterprise systems via our robust OAuth-secured SDKs.
         </p>
      </div>
      
      <div className="flex-1 bg-[#081120] p-6 relative">
         <div className="absolute top-4 right-4 text-[10px] text-[#94A3B8] font-mono flex items-center gap-2">
            <Terminal className="h-3 w-3" /> TypeScript
         </div>
         <pre className="text-[11px] md:text-xs font-mono text-[#94A3B8] leading-relaxed overflow-x-auto pt-4 custom-scrollbar">
            <code>
               {codeSnippet.split('\n').map((line, i) => (
                  <div key={i} className="table-row">
                     <span className="table-cell text-white/20 select-none pr-4 text-right border-r border-white/5">{i + 1}</span>
                     <span className="table-cell pl-4 text-[#2F80FF]">{line}</span>
                  </div>
               ))}
            </code>
         </pre>
      </div>
    </GlassPanel>
  );
};
