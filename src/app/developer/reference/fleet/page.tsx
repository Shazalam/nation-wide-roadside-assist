'use client';

import React from 'react';
import { APIBlock } from '@/components/ui/api-block';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Cpu, Activity, Signal, ShieldCheck, Gauge } from 'lucide-react';

export default function FleetTelemetryPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <div className="flex items-center gap-3">
           <Cpu className="h-8 w-8 text-emerald-400" />
           <h1 className="text-4xl font-bold text-foreground dark:text-white tracking-tight">Fleet Telemetry</h1>
        </div>
        <p className="text-brand-slate text-lg max-w-3xl">
          Monitor your assets with sub-second precision. Our Telemetry API provides access to real-time GPS coordinates, diagnostic trouble codes (DTC), and fuel consumption metrics.
        </p>
      </section>

      {/* Real-time Visualization Teaser */}
      <GlassPanel className="p-1 border-brand-border bg-black/40 overflow-hidden">
         <div className="bg-brand-bg/60 p-8 flex flex-col items-center justify-center min-h-[300px] relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(47,128,255,0.1)_0%,transparent_70%)]" />
            <Activity className="h-16 w-16 text-emerald-500/20 mb-4 animate-pulse" />
            <h3 className="text-xl font-bold text-foreground dark:text-white mb-2">Live Stream Active</h3>
            <p className="text-brand-slate text-sm max-w-md text-center">
               Connect to our WebSocket gateway at <code className="text-emerald-400">wss://telemetry.nationwidetrans.com</code> for continuous asset tracking.
            </p>
            <div className="mt-8 flex gap-8">
               <div className="text-center">
                  <p className="text-xs font-bold text-brand-slate uppercase tracking-widest mb-1">Update Rate</p>
                  <p className="text-lg font-mono text-emerald-400">100ms</p>
               </div>
               <div className="text-center">
                  <p className="text-xs font-bold text-brand-slate uppercase tracking-widest mb-1">Availability</p>
                  <p className="text-lg font-mono text-emerald-400">99.99%</p>
               </div>
            </div>
         </div>
      </GlassPanel>

      <div className="h-px w-full bg-white/5" />

      {/* GET /telemetry */}
      <section className="space-y-6">
        <div className="space-y-2">
           <h3 className="text-xl font-bold text-foreground dark:text-white">Fetch Asset Diagnostics</h3>
           <p className="text-brand-slate">Retrieves the latest snapshot of a vehicle's health and location.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           <div className="lg:col-span-7">
              <APIBlock 
                method="GET"
                endpoint="/v1/fleet/{id}/telemetry"
                code={`curl https://api.nationwidetrans.com/v1/fleet/VEH-8821/telemetry \\
  -H "Authorization: Bearer <TOKEN>"`}
              />
              
              <div className="mt-4">
                 <h4 className="text-[10px] font-black text-brand-slate uppercase tracking-widest mb-4">Response Sample</h4>
                 <GlassPanel className="p-4 bg-black/40 border-brand-border font-mono text-xs">
                    <pre className="text-emerald-400/80">
{`{
  "vehicle_id": "VEH-8821",
  "timestamp": "2024-05-11T20:35:12Z",
  "gps": {
    "lat": 34.0522,
    "lng": -118.2437,
    "speed_mph": 64.2,
    "heading": 182
  },
  "diagnostics": {
    "fuel_level_percent": 82,
    "odometer_miles": 12402.1,
    "battery_voltage": 14.2,
    "active_codes": []
  },
  "status": "in_motion"
}`}
                    </pre>
                 </GlassPanel>
              </div>
           </div>
           
           <div className="lg:col-span-5 space-y-6">
              <GlassPanel className="p-6 border-brand-border bg-brand-navy/40">
                 <div className="flex items-center gap-2 text-brand-blue mb-4">
                    <Signal className="h-4 w-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Signal Quality</span>
                 </div>
                 <p className="text-xs text-brand-slate leading-relaxed mb-4">
                    Data freshness is guaranteed for nodes with `signal_strength` above 60%. Below this threshold, coordinates are extrapolated using dead reckoning.
                 </p>
                 <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-3/4 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                 </div>
              </GlassPanel>

              <div className="grid grid-cols-1 gap-4">
                 <div className="flex items-center gap-3 p-4 rounded-xl border border-brand-border bg-white/5">
                    <Gauge className="h-5 w-5 text-emerald-400" />
                    <div>
                       <p className="text-[10px] font-bold text-foreground dark:text-white uppercase tracking-widest">OBD-II Passthrough</p>
                       <p className="text-[10px] text-brand-slate">Raw CAN bus messages available.</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-3 p-4 rounded-xl border border-brand-border bg-white/5">
                    <ShieldCheck className="h-5 w-5 text-emerald-400" />
                    <div>
                       <p className="text-[10px] font-bold text-foreground dark:text-white uppercase tracking-widest">Tamper Detection</p>
                       <p className="text-[10px] text-brand-slate">Alerts on hardware disconnect.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
