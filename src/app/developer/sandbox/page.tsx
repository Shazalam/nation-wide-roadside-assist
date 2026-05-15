'use client';

import React, { useState } from 'react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Terminal, Send, Play, RefreshCw, ChevronRight, Box } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function SandboxPage() {
  const [method, setMethod] = useState('POST');
  const [endpoint, setEndpoint] = useState('/v1/dispatch');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<any>(null);

  const handleRun = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setResponse({
        status: 201,
        statusText: "Created",
        headers: {
          "Content-Type": "application/json",
          "X-Request-Id": "req_8829103"
        },
        data: {
          id: "disp_90231",
          status: "pending",
          type: "towing_truck",
          location: { lat: 40.7128, lng: -74.0060 },
          eta: "14 minutes",
          vendor: null
        }
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-foreground dark:text-white tracking-tight">API Sandbox</h1>
        <p className="text-brand-slate text-lg max-w-3xl">
          Test your integration in a safe environment without affecting live data. All requests made in sandbox mode are simulated.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[600px]">
        {/* Request Side */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-black text-brand-blue uppercase tracking-widest">Request Explorer</h3>
            <div className="flex items-center gap-2">
               <span className="text-[10px] text-emerald-400 font-bold bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">TEST MODE</span>
            </div>
          </div>

          <GlassPanel className="flex-1 p-0 overflow-hidden flex flex-col border-brand-border">
            {/* Address Bar */}
            <div className="flex items-center gap-2 p-3 bg-white/[0.03] border-b border-brand-border">
              <select 
                value={method} 
                onChange={(e) => setMethod(e.target.value)}
                className="bg-brand-blue/20 text-brand-blue text-xs font-bold px-2 py-1.5 rounded border border-brand-blue/30 focus:outline-none"
              >
                <option>GET</option>
                <option>POST</option>
                <option>PUT</option>
                <option>DELETE</option>
              </select>
              <div className="flex-1 flex items-center bg-black/40 border border-brand-border rounded px-3 py-1.5 font-mono text-xs text-brand-slate">
                <span className="opacity-50">https://api.nationwidetrans.com</span>
                <input 
                  type="text" 
                  value={endpoint}
                  onChange={(e) => setEndpoint(e.target.value)}
                  className="bg-transparent border-none focus:ring-0 p-0 ml-1 text-foreground dark:text-white flex-1"
                />
              </div>
              <Button 
                onClick={handleRun} 
                disabled={isLoading}
                className="h-8 px-4 bg-brand-blue hover:bg-brand-blue/90 text-foreground dark:text-white text-[10px] font-bold uppercase tracking-widest"
              >
                {isLoading ? <RefreshCw className="h-3 w-3 animate-spin" /> : <Play className="h-3 w-3 mr-2" />}
                {isLoading ? 'Sending' : 'Run'}
              </Button>
            </div>

            {/* Request Body/Headers */}
            <div className="flex-1 flex flex-col bg-brand-bg/40">
               <div className="flex border-b border-brand-border">
                  <button className="px-4 py-2 text-[10px] font-bold text-foreground dark:text-white border-b-2 border-brand-blue uppercase tracking-widest bg-white/5">Body</button>
                  <button className="px-4 py-2 text-[10px] font-bold text-brand-slate hover:text-foreground dark:text-white uppercase tracking-widest">Headers</button>
                  <button className="px-4 py-2 text-[10px] font-bold text-brand-slate hover:text-foreground dark:text-white uppercase tracking-widest">Auth</button>
               </div>
               <div className="p-4 flex-1 font-mono text-xs">
                  <textarea 
                    className="w-full h-full bg-transparent border-none focus:ring-0 text-brand-slate resize-none leading-relaxed"
                    spellCheck={false}
                    defaultValue={`{
  "type": "towing_truck",
  "location": {
    "lat": 40.7128,
    "lng": -74.0060,
    "address": "Manhattan, NY"
  },
  "priority": "normal",
  "metadata": {
    "user_id": "usr_442"
  }
}`}
                  />
               </div>
            </div>
          </GlassPanel>
        </div>

        {/* Response Side */}
        <div className="lg:col-span-6 flex flex-col gap-4">
           <h3 className="text-xs font-black text-brand-slate uppercase tracking-widest">Response Output</h3>
           
           <GlassPanel className="flex-1 p-0 overflow-hidden flex flex-col border-brand-border bg-black/60 font-mono">
              {!response && !isLoading && (
                <div className="flex-1 flex flex-col items-center justify-center text-brand-slate/40 text-center p-12">
                   <Terminal className="h-12 w-12 mb-4 opacity-10" />
                   <p className="text-sm">Click 'Run' to execute the request and see the response here.</p>
                </div>
              )}

              {isLoading && (
                 <div className="flex-1 flex items-center justify-center">
                    <RefreshCw className="h-8 w-8 text-brand-blue animate-spin opacity-50" />
                 </div>
              )}

              {response && !isLoading && (
                 <>
                   <div className="flex items-center justify-between p-3 bg-white/[0.03] border-b border-brand-border">
                      <div className="flex items-center gap-4 text-[10px] font-bold">
                         <span className={cn(
                           "px-2 py-0.5 rounded",
                           response.status < 300 ? "text-emerald-400 bg-emerald-400/10" : "text-rose-400 bg-rose-400/10"
                         )}>
                           {response.status} {response.statusText}
                         </span>
                         <span className="text-brand-slate">342ms</span>
                      </div>
                      <button className="text-[10px] text-brand-slate hover:text-foreground dark:text-white flex items-center gap-1 uppercase tracking-widest">
                         <Box className="h-3 w-3" /> Save Result
                      </button>
                   </div>
                   <div className="p-4 flex-1 overflow-auto">
                      <pre className="text-emerald-400/90 text-xs leading-relaxed">
                         {JSON.stringify(response.data, null, 2)}
                      </pre>
                   </div>
                 </>
              )}
           </GlassPanel>
        </div>
      </div>

      {/* Sandbox Stats */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
         {[
           { label: 'Sandbox Requests', value: '1,204' },
           { label: 'Success Rate', value: '98.2%' },
           { label: 'Avg Latency', value: '112ms' },
           { label: 'API Version', value: 'v4.2.0' },
         ].map((stat) => (
           <div key={stat.label} className="p-4 rounded-xl bg-white/5 border border-brand-border text-center">
              <p className="text-[10px] font-bold text-brand-slate uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-xl font-bold text-foreground dark:text-white">{stat.value}</p>
           </div>
         ))}
      </section>
    </div>
  );
}
