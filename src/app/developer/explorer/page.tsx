'use client';

import React, { useState } from 'react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { 
  Terminal, 
  Search, 
  ChevronRight, 
  ChevronDown, 
  Play, 
  Code2, 
  FileJson, 
  Database,
  Link as LinkIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const endpoints = [
  {
    group: "Dispatch Operations",
    items: [
      { id: "create_dispatch", method: "POST", path: "/v1/dispatch", description: "Create a new emergency roadside service request." },
      { id: "get_dispatch", method: "GET", path: "/v1/dispatch/{id}", description: "Retrieve the current status and details of a specific dispatch." },
      { id: "cancel_dispatch", method: "DELETE", path: "/v1/dispatch/{id}", description: "Cancel an active dispatch request." },
      { id: "update_dispatch", method: "PATCH", path: "/v1/dispatch/{id}", description: "Update location or priority of an active request." }
    ]
  },
  {
    group: "Fleet Management",
    items: [
      { id: "list_vehicles", method: "GET", path: "/v1/fleet/vehicles", description: "List all vehicles currently registered in your fleet." },
      { id: "get_telemetry", method: "GET", path: "/v1/fleet/{id}/telemetry", description: "Retrieve real-time GPS and diagnostics for a vehicle." }
    ]
  },
  {
    group: "Vendor Network",
    items: [
      { id: "search_vendors", method: "GET", path: "/v1/vendors/search", description: "Query the nearest available service providers by location." }
    ]
  }
];

export default function APIExplorerPage() {
  const [selectedId, setSelectedId] = useState("create_dispatch");
  const [searchQuery, setSearchQuery] = useState("");

  const selectedEndpoint = endpoints.flatMap(g => g.items).find(i => i.id === selectedId);

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-4xl font-bold text-white tracking-tight">API Explorer</h1>
        <p className="text-brand-slate text-lg">Interactive OpenAPI reference for the Nationwide Trans Mesh.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[700px]">
        {/* Sidebar: Navigation */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="relative">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-slate" />
             <input 
               type="text" 
               placeholder="Filter endpoints..."
               className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm text-white placeholder:text-brand-slate focus:outline-none focus:border-brand-blue/50 transition-all font-mono"
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
             />
          </div>

          <GlassPanel className="flex-1 p-2 overflow-y-auto border-white/10 bg-brand-bg/40">
            <div className="space-y-6">
               {endpoints.map((group) => (
                 <div key={group.group}>
                    <h3 className="text-[10px] font-black text-brand-slate uppercase tracking-widest px-3 mb-2">{group.group}</h3>
                    <div className="space-y-1">
                       {group.items.map((item) => (
                         <button
                           key={item.id}
                           onClick={() => setSelectedId(item.id)}
                           className={cn(
                             "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs transition-all group",
                             selectedId === item.id 
                               ? "bg-brand-blue/10 text-white border border-brand-blue/20" 
                               : "text-brand-slate hover:text-white hover:bg-white/5"
                           )}
                         >
                           <span className={cn(
                             "text-[8px] font-bold px-1.5 py-0.5 rounded border min-w-[45px] text-center",
                             item.method === 'GET' ? 'text-emerald-400 border-emerald-400/20 bg-emerald-400/5' :
                             item.method === 'POST' ? 'text-brand-blue border-brand-blue/20 bg-brand-blue/5' :
                             item.method === 'DELETE' ? 'text-rose-400 border-rose-400/20 bg-rose-400/5' :
                             'text-amber-400 border-amber-400/20 bg-amber-400/5'
                           )}>
                             {item.method}
                           </span>
                           <span className="truncate font-mono">{item.path}</span>
                         </button>
                       ))}
                    </div>
                 </div>
               ))}
            </div>
          </GlassPanel>
          
          <Button variant="outline" className="border-white/5 bg-white/5 text-brand-slate text-[10px] font-bold uppercase tracking-widest hover:text-white">
             <FileJson className="h-3 w-3 mr-2" /> Download OpenAPI Spec (JSON)
          </Button>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-8 flex flex-col gap-6">
           {selectedEndpoint && (
             <>
               <GlassPanel className="p-8 border-white/5 bg-brand-bg/60 space-y-6">
                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <span className={cn(
                          "text-xs font-bold px-3 py-1 rounded border",
                          selectedEndpoint.method === 'GET' ? 'text-emerald-400 border-emerald-400/20 bg-emerald-400/5' :
                          selectedEndpoint.method === 'POST' ? 'text-brand-blue border-brand-blue/20 bg-brand-blue/5' :
                          'text-amber-400 border-amber-400/20 bg-amber-400/5'
                        )}>
                          {selectedEndpoint.method}
                        </span>
                        <h2 className="text-xl font-mono text-white">{selectedEndpoint.path}</h2>
                     </div>
                     <Button className="bg-brand-blue text-white text-[10px] font-bold h-8 px-4 uppercase tracking-widest">
                        <Play className="h-3 w-3 mr-2" /> Try it in Sandbox
                     </Button>
                  </div>
                  
                  <p className="text-brand-slate text-sm leading-relaxed">{selectedEndpoint.description}</p>

                  <div className="h-px w-full bg-white/5" />

                  <div className="space-y-4">
                     <h4 className="text-xs font-black text-white uppercase tracking-widest">Parameters</h4>
                     <div className="space-y-3">
                        <div className="grid grid-cols-12 gap-4 items-center p-3 rounded-lg bg-white/[0.02] border border-white/5">
                           <div className="col-span-3">
                              <p className="text-xs font-mono text-brand-blue">id</p>
                              <p className="text-[10px] text-brand-slate">path • string</p>
                           </div>
                           <div className="col-span-9">
                              <p className="text-xs text-brand-slate italic">Required. The unique identifier of the dispatch record.</p>
                           </div>
                        </div>
                        <div className="grid grid-cols-12 gap-4 items-center p-3 rounded-lg bg-white/[0.02] border border-white/5">
                           <div className="col-span-3">
                              <p className="text-xs font-mono text-brand-blue">fields</p>
                              <p className="text-[10px] text-brand-slate">query • array</p>
                           </div>
                           <div className="col-span-9">
                              <p className="text-xs text-brand-slate italic">Optional. Comma-separated list of fields to include in the response.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </GlassPanel>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                     <h4 className="text-[10px] font-black text-brand-slate uppercase tracking-widest flex items-center gap-2">
                        <Code2 className="h-3 w-3" /> Sample Request
                     </h4>
                     <GlassPanel className="p-4 bg-black/40 border-white/5 font-mono text-xs overflow-auto h-[300px]">
                        <pre className="text-brand-slate">
{`curl -X ${selectedEndpoint.method} "https://api.nationwidetrans.com${selectedEndpoint.path.replace('{id}', 'disp_9281')}" \\
  -H "Authorization: Bearer <TOKEN>" \\
  -H "Content-Type: application/json"`}
                        </pre>
                     </GlassPanel>
                  </div>
                  <div className="space-y-3">
                     <h4 className="text-[10px] font-black text-brand-slate uppercase tracking-widest flex items-center gap-2">
                        <FileJson className="h-3 w-3" /> Response Model
                     </h4>
                     <GlassPanel className="p-4 bg-black/40 border-white/5 font-mono text-xs overflow-auto h-[300px]">
                        <pre className="text-emerald-400/80">
{`{
  "id": "disp_9281",
  "status": "active",
  "created_at": "2024-05-11T20:30:00Z",
  "vehicle": {
    "vin": "1A2B3C...",
    "status": "assigned"
  },
  "location": {
    "lat": 40.7128,
    "lng": -74.0060
  }
}`}
                        </pre>
                     </GlassPanel>
                  </div>
               </div>
             </>
           )}
        </div>
      </div>
    </div>
  );
}
