'use client';

import React from 'react';
import { APIBlock } from '@/components/ui/api-block';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Globe, ShieldCheck, AlertCircle, RefreshCw, Zap } from 'lucide-react';

export default function WebhooksPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-foreground dark:text-white tracking-tight">Webhooks</h1>
        <p className="text-brand-slate text-lg max-w-3xl">
          Receive real-time notifications when events happen in your Nationwide Roadside Assist account. Automated dispatch updates, vehicle arrivals, and payment confirmations delivered directly to your server.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground dark:text-white">How it works</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="h-8 w-8 rounded-full bg-brand-blue/20 flex items-center justify-center text-xs font-bold text-brand-blue border border-brand-blue/30 shrink-0">1</div>
              <div className="space-y-1">
                <p className="text-foreground dark:text-white font-bold">Configure Endpoint</p>
                <p className="text-sm text-brand-slate">Add your server URL and select which events you want to listen for in the Dashboard.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-8 w-8 rounded-full bg-brand-blue/20 flex items-center justify-center text-xs font-bold text-brand-blue border border-brand-blue/30 shrink-0">2</div>
              <div className="space-y-1">
                <p className="text-foreground dark:text-white font-bold">Receive HTTPS POST</p>
                <p className="text-sm text-brand-slate">Our system sends a POST request with a JSON payload whenever a subscribed event occurs.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-8 w-8 rounded-full bg-brand-blue/20 flex items-center justify-center text-xs font-bold text-brand-blue border border-brand-blue/30 shrink-0">3</div>
              <div className="space-y-1">
                <p className="text-foreground dark:text-white font-bold">Acknowledge Receipt</p>
                <p className="text-sm text-brand-slate">Return a 2xx status code to indicate successful processing. We will retry if your server is unreachable.</p>
              </div>
            </div>
          </div>
        </div>

        <GlassPanel className="p-8 border-brand-border bg-brand-navy/40">
          <h3 className="text-sm font-black text-brand-blue uppercase tracking-[0.2em] mb-6">Webhook Payload</h3>
          <pre className="text-[11px] font-mono text-brand-slate whitespace-pre-wrap leading-relaxed">
{`{
  "id": "evt_01J9X...",
  "object": "event",
  "api_version": "v4.2.0",
  "created": 1715421200,
  "type": "dispatch.arrival_confirmed",
  "data": {
    "dispatch_id": "disp_82391",
    "vendor": "Eagle Towing",
    "eta_minutes": 0,
    "location": {
      "lat": 34.0522,
      "lng": -118.2437
    }
  }
}`}
          </pre>
        </GlassPanel>
      </div>

      <div className="h-px w-full bg-white/5" />

      {/* Signature Verification */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <ShieldCheck className="h-6 w-6 text-emerald-400" />
          <h2 className="text-2xl font-bold text-foreground dark:text-white">Verifying Signatures</h2>
        </div>
        
        <p className="text-brand-slate max-w-3xl">
          Nationwide Roadside Assist signs all webhook events by including a signature in the `X-NT-Signature` header. This allows you to verify that the events were sent by us and not a third party.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <APIBlock 
              method="POST"
              endpoint="Node.js (Express) Example"
              code={`const crypto = require('crypto');
const secret = process.env.WEBHOOK_SECRET;

app.post('/webhooks', (req, res) => {
  const signature = req.headers['x-nt-signature'];
  const body = JSON.stringify(req.body);
  
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(body)
    .digest('hex');

  if (signature === expectedSignature) {
    // Trusted request
    console.log('Event received:', req.body.type);
    res.status(200).send('OK');
  } else {
    res.status(401).send('Invalid signature');
  }
});`}
            />
          </div>
          <div className="lg:col-span-5 space-y-4">
             <GlassPanel className="p-6 border-brand-border space-y-4 h-full">
                <div className="flex items-center gap-2 text-brand-blue">
                   <AlertCircle className="h-4 w-4" />
                   <span className="text-[10px] font-black uppercase tracking-widest">Crucial Note</span>
                </div>
                <p className="text-sm text-brand-slate leading-relaxed">
                   Signatures are generated using <span className="text-foreground dark:text-white font-mono">HMAC-SHA256</span>. The secret key is unique to each webhook endpoint you configure and can be found in the developer settings.
                </p>
                <p className="text-sm text-brand-slate leading-relaxed">
                   Always use a <span className="text-foreground dark:text-white font-mono">raw body</span> for verification to avoid issues with JSON parsing differences.
                </p>
             </GlassPanel>
          </div>
        </div>
      </section>

      {/* Event Types Table */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground dark:text-white">Event Types</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-brand-border">
                <th className="py-4 px-4 text-[10px] font-black text-brand-blue uppercase tracking-widest">Event</th>
                <th className="py-4 px-4 text-[10px] font-black text-brand-blue uppercase tracking-widest">Description</th>
              </tr>
            </thead>
            <tbody className="text-sm text-brand-slate">
              <tr className="border-b border-brand-border hover:bg-white/[0.01]">
                <td className="py-4 px-4 font-mono text-foreground dark:text-white">dispatch.created</td>
                <td className="py-4 px-4">Occurs when a new dispatch request is successfully initialized.</td>
              </tr>
              <tr className="border-b border-brand-border hover:bg-white/[0.01]">
                <td className="py-4 px-4 font-mono text-foreground dark:text-white">dispatch.vendor_assigned</td>
                <td className="py-4 px-4">Occurs when a service provider has accepted the request.</td>
              </tr>
              <tr className="border-b border-brand-border hover:bg-white/[0.01]">
                <td className="py-4 px-4 font-mono text-foreground dark:text-white">dispatch.arrival_confirmed</td>
                <td className="py-4 px-4">Occurs when the vendor confirms arrival at the service location.</td>
              </tr>
              <tr className="border-b border-brand-border hover:bg-white/[0.01]">
                <td className="py-4 px-4 font-mono text-foreground dark:text-white">telemetry.ping</td>
                <td className="py-4 px-4">Periodic heartbeat for high-priority fleet tracking.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Retries */}
      <section className="p-8 rounded-2xl bg-brand-blue/5 border border-brand-blue/10 flex gap-6">
        <RefreshCw className="h-6 w-6 text-brand-blue shrink-0 mt-1" />
        <div className="space-y-2">
           <h4 className="font-bold text-foreground dark:text-white uppercase tracking-wider text-xs">Retry Policy</h4>
           <p className="text-sm text-brand-slate leading-relaxed">
             If your server does not respond with a 2xx status code, we will retry the notification using exponential backoff over the next 24 hours (up to 15 retries). After 24 hours, the event will be marked as failed.
           </p>
        </div>
      </section>
    </div>
  );
}
