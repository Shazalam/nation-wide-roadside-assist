'use client';

import React from 'react';
import { APIBlock } from '@/components/ui/api-block';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Search, Map, Star, ShieldCheck, Users } from 'lucide-react';

export default function VendorSearchPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <div className="flex items-center gap-3">
           <Search className="h-8 w-8 text-brand-blue" />
           <h1 className="text-4xl font-bold text-white tracking-tight">Vendor Network</h1>
        </div>
        <p className="text-brand-slate text-lg max-w-3xl">
          Access our nationwide network of over 45,000 certified service providers. Query by location, capabilities, and real-time availability to find the perfect partner for any roadside scenario.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <GlassPanel className="p-6 border-white/5 space-y-3">
            <Map className="h-6 w-6 text-brand-blue" />
            <h4 className="text-white font-bold">Geofencing</h4>
            <p className="text-xs text-brand-slate">Search within specific radial boundaries or along a defined route path.</p>
         </GlassPanel>
         <GlassPanel className="p-6 border-white/5 space-y-3">
            <Star className="h-6 w-6 text-amber-400" />
            <h4 className="text-white font-bold">Smart Scoring</h4>
            <p className="text-xs text-brand-slate">Vendors are ranked by historical ETA accuracy and service quality ratings.</p>
         </GlassPanel>
         <GlassPanel className="p-6 border-white/5 space-y-3">
            <ShieldCheck className="h-6 w-6 text-emerald-400" />
            <h4 className="text-white font-bold">Certifications</h4>
            <p className="text-xs text-brand-slate">Filter by HAAS, WreckMaster, or OEM-specific certifications.</p>
         </GlassPanel>
      </div>

      <div className="h-px w-full bg-white/5" />

      {/* GET /vendors/search */}
      <section className="space-y-8">
        <div className="space-y-2">
           <h3 className="text-xl font-bold text-white">Find Available Vendors</h3>
           <p className="text-brand-slate">Search for vendors near a specific coordinate that meet your service requirements.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           <div className="lg:col-span-7">
              <APIBlock 
                method="GET"
                endpoint="/v1/vendors/search"
                code={`curl https://api.nationwidetrans.com/v1/vendors/search \\
  -d "lat=40.7128" \\
  -d "lng=-74.0060" \\
  -d "radius=20" \\
  -d "capabilities=heavy_duty_towing,winching" \\
  -H "Authorization: Bearer <TOKEN>"`}
              />
              
              <div className="mt-6">
                 <h4 className="text-[10px] font-black text-brand-slate uppercase tracking-widest mb-4">Response Sample</h4>
                 <GlassPanel className="p-4 bg-black/40 border-white/5 font-mono text-xs overflow-auto max-h-[400px]">
                    <pre className="text-brand-slate">
{`{
  "count": 2,
  "vendors": [
    {
      "id": "vnd_9021",
      "name": "Midtown Heavy Rescue",
      "distance_miles": 2.4,
      "rating": 4.9,
      "eta_minutes": 18,
      "status": "available",
      "capabilities": ["towing", "heavy_duty", "winching"],
      "location": { "lat": 40.7200, "lng": -73.9900 }
    },
    {
      "id": "vnd_4412",
      "name": "City Towing & Recovery",
      "distance_miles": 4.1,
      "rating": 4.7,
      "eta_minutes": 25,
      "status": "available",
      "capabilities": ["towing", "lockout"],
      "location": { "lat": 40.7300, "lng": -74.0100 }
    }
  ]
}`}
                    </pre>
                 </GlassPanel>
              </div>
           </div>
           
           <div className="lg:col-span-5 space-y-6">
              <GlassPanel className="p-8 border-white/5 bg-brand-bg/40 flex flex-col items-center text-center">
                 <Users className="h-12 w-12 text-brand-blue/30 mb-4" />
                 <h4 className="text-lg font-bold text-white mb-2">Preferred Network</h4>
                 <p className="text-sm text-brand-slate leading-relaxed mb-6">
                    Enterprise clients can define a "Preferred Vendor List" in their account settings. Use the <code className="text-brand-blue">preferred_only=true</code> flag to restrict searches to your vetted partners.
                 </p>
                 <button className="text-[10px] font-bold text-brand-blue border border-brand-blue/30 px-4 py-2 rounded uppercase tracking-widest hover:bg-brand-blue/10 transition-all">
                    Manage Network
                 </button>
              </GlassPanel>

              <div className="space-y-4">
                 <h4 className="text-xs font-black text-white uppercase tracking-widest">Query Parameters</h4>
                 <ul className="space-y-3">
                    <li className="text-xs text-brand-slate border-l-2 border-brand-blue pl-4">
                       <strong className="text-white font-mono">radius</strong>: Search radius in miles. Default: 15, Max: 100.
                    </li>
                    <li className="text-xs text-brand-slate border-l-2 border-brand-blue pl-4">
                       <strong className="text-white font-mono">capabilities</strong>: Comma-separated list of required service types.
                    </li>
                    <li className="text-xs text-brand-slate border-l-2 border-brand-blue pl-4">
                       <strong className="text-white font-mono">min_rating</strong>: Filter by vendor rating (1.0 - 5.0).
                    </li>
                 </ul>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
