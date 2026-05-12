'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Copy, CheckCircle2, Clock } from 'lucide-react';

const apiTabs = ['Dispatch API', 'Telemetry API', 'Vendor API', 'Webhook Events'];

const webhookEvents = [
  { event: 'dispatch.created', time: '2 sec ago' },
  { event: 'vendor.assigned', time: '8 sec ago' },
  { event: 'rv.status_updated', time: '18 sec ago' },
  { event: 'eta.recalculated', time: '32 sec ago' },
  { event: 'service.completed', time: '2 min ago' },
];

const codeSnippets: Record<string, { lang: string; code: string }> = {
  'Dispatch API': {
    lang: 'typescript',
    code: `// Initialize RV Dispatch Operation
const response = await fetch(
  'https://api.nationwidetrans.com/v1/rv/dispatch',
  {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      vehicle: {
        type: 'class_a_motorhome',
        length_ft: 40,
        weight_lbs: 32000,
      },
      incident: {
        type: 'tire_blowout',
        priority: 'high',
        location: { lat: 44.4279, lng: -110.5884 },
      },
      webhook_url: 'https://api.partner.com/rv/webhooks',
    }),
  }
);
// { id: "rv_disp_9fa82b4", status: "dispatched", eta: 35 }`,
  },
  'Telemetry API': {
    lang: 'typescript',
    code: `// Stream live RV telemetry events
const stream = nti.telemetry.subscribe({
  vehicle_ids: ['RV-7821', 'RV-4162'],
  events: ['location', 'speed', 'diagnostics'],
  interval_ms: 5000,
});

stream.on('data', (event) => {
  console.log(event.vehicle_id, event.location);
  // { lat: 44.6, lng: -110.3, speed: 62, fuel: 0.4 }
});

stream.on('alert', (alert) => {
  // Trigger automated dispatch on breakdown
  if (alert.type === 'engine_derate') {
    nti.dispatch.create({ vehicle_id: alert.vehicle_id });
  }
});`,
  },
  'Vendor API': {
    lang: 'typescript',
    code: `// Find nearest certified RV vendors
const vendors = await nti.vendors.search({
  location: { lat: 44.4279, lng: -110.5884 },
  radius_miles: 50,
  capabilities: ['heavy_duty_tow', 'rv_recovery'],
  vehicle_class: 'class_a',
  available_now: true,
});

// Returns sorted by proximity + rating
vendors.results.forEach((vendor) => {
  console.log(vendor.name, vendor.eta_minutes);
  // "Rocky Mtn Recovery", 22
});`,
  },
  'Webhook Events': {
    lang: 'json',
    code: `// Webhook payload — dispatch.created
{
  "event": "dispatch.created",
  "timestamp": "2024-06-12T18:32:00Z",
  "data": {
    "dispatch_id": "rv_disp_9fa82b4",
    "vehicle_type": "class_a_motorhome",
    "incident_type": "tire_blowout",
    "vendor": {
      "id": "vnd_82hf93",
      "name": "Rocky Mountain Recovery",
      "eta_minutes": 22
    },
    "status": "dispatched",
    "priority": "high"
  }
}`,
  },
};

const features = [
  'RESTful APIs', 'Sandbox Environment', 'Webhook Events',
  'SDKs & Libraries', 'Real-time Telemetry', 'OAuth 2.0 Authentication',
];

export default function APIInfrastructure() {
  const [activeTab, setActiveTab] = useState('Dispatch API');
  const [copied, setCopied] = useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const snippet = codeSnippets[activeTab];

  const highlightCode = (code: string) => {
    return code.split('\n').map((line, i) => {
      const isComment = line.trim().startsWith('//') || line.trim().startsWith('*') || line.trim().startsWith('/*');
      if (isComment) {
        return { 
          lineNumber: i + 1, 
          html: `<span class="text-[#94A3B8] italic">${line}</span>` 
        };
      }

      // Simple highlight logic that avoids re-processing tags
      let styled = line
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

      // Now apply styling to the escaped text
      styled = styled
        .replace(/\b(const|let|var|await|async|return|new|if|else|forEach|on)\b/g, '<span class="text-[#FF7A1A]">$1</span>')
        .replace(/\b(fetch|subscribe|search|create|nti\.\w+)\b/g, '<span class="text-[#2F80FF]">$1</span>')
        .replace(/&quot;([^&]*)&quot;/g, '<span class="text-amber-300">&quot;$1&quot;</span>')
        .replace(/&#039;([^&]*)&#039;/g, '<span class="text-amber-300">&#039;$1&#039;</span>')
        .replace(/\b(\d+)\b/g, '<span class="text-pink-400">$1</span>')
        .replace(/\b(true|false|null)\b/g, '<span class="text-purple-400">$1</span>');

      return { lineNumber: i + 1, html: styled };
    });
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-12 border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[rgba(47,128,255,0.08)] border border-[rgba(47,128,255,0.15)] rounded-full mb-6">
              <span className="text-[9px] font-black text-[#2F80FF] uppercase tracking-[0.3em]">Developer Platform</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-5 leading-tight">
              RV &amp; Camper <span className="text-[#2F80FF]">Support APIs</span>
            </h2>
            <p className="text-[#94A3B8] text-lg leading-relaxed mb-8">
              Powerful, secure, and scalable APIs to integrate RV operations into your systems. Developer-first with enterprise-grade reliability.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {features.map(f => (
                <div key={f} className="flex items-center gap-2 text-sm text-[#E2E8F0]">
                  <CheckCircle2 className="w-4 h-4 text-[#2F80FF] shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(47,128,255,0.15)' }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3.5 bg-[rgba(47,128,255,0.08)] border border-[rgba(47,128,255,0.25)] text-[#2F80FF] rounded-xl font-bold text-sm flex items-center gap-2 transition-all"
            >
              <Terminal className="w-4 h-4" /> View API Documentation
            </motion.button>

            {/* Webhook events feed */}
            <div className="mt-10">
              <div className="text-[10px] font-black text-[#94A3B8] uppercase tracking-[0.3em] mb-4">Recent Webhook Events</div>
              <div className="space-y-2">
                {webhookEvents.map((ev, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between bg-[#0A192F]/60 border border-[rgba(255,255,255,0.06)] rounded-lg px-4 py-2.5">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-mono text-xs text-white">{ev.event}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-[#94A3B8]">
                      <Clock className="w-3 h-3" />{ev.time}
                    </div>
                  </motion.div>
                ))}
              </div>
              <button className="mt-3 text-[10px] font-bold text-[#2F80FF] uppercase tracking-widest">
                → View All Events
              </button>
            </div>
          </div>

          {/* Right: code panel */}
          <div className="relative group">
            <div className="absolute -inset-3 bg-gradient-to-br from-[#2F80FF]/15 to-[#FF7A1A]/10 blur-2xl opacity-60 rounded-3xl group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-[#0A192F] border border-[rgba(255,255,255,0.08)] rounded-2xl overflow-hidden shadow-2xl">
              {/* Tab bar */}
              <div className="bg-[#081120] border-b border-[rgba(255,255,255,0.06)] px-4 py-2 flex items-center gap-1 overflow-x-auto">
                <div className="flex gap-1.5 mr-4 shrink-0">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                {apiTabs.map(tab => (
                  <button key={tab} onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1.5 rounded-md text-[10px] font-bold whitespace-nowrap transition-all ${activeTab === tab
                      ? 'bg-[#2F80FF]/15 text-[#2F80FF] border border-[#2F80FF]/30'
                      : 'text-[#94A3B8] hover:text-white'
                    }`}>
                    {tab}
                  </button>
                ))}
                <button onClick={handleCopy} className="ml-auto shrink-0 text-[#94A3B8] hover:text-white transition-colors">
                  {copied
                    ? <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    : <Copy className="w-4 h-4" />
                  }
                </button>
              </div>

              {/* Code area */}
              <AnimatePresence mode="wait">
                <motion.div key={activeTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="p-5 overflow-x-auto font-mono text-xs leading-relaxed max-h-96 overflow-y-auto min-h-[300px]">
                  {isMounted ? (
                    <pre className="text-[#E2E8F0]">
                      {highlightCode(snippet.code).map((line, i) => (
                        <div key={i} className="flex">
                          <span className="select-none text-[#94A3B8]/40 pr-4 w-8 text-right shrink-0">{line.lineNumber}</span>
                          <span dangerouslySetInnerHTML={{ __html: line.html }} />
                        </div>
                      ))}
                    </pre>
                  ) : (
                    <div className="flex items-center justify-center h-full text-[#94A3B8] font-mono text-[10px] uppercase tracking-widest animate-pulse">
                      Initializing Terminal...
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Footer status bar */}
              <div className="bg-[#081120] border-t border-[rgba(255,255,255,0.05)] px-5 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[9px] font-mono text-emerald-400">API v4.2 · Healthy</span>
                </div>
                <span className="text-[9px] font-mono text-[#94A3B8]">99.97% uptime · last 90d</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
