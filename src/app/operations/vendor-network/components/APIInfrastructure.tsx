'use client';

import React from 'react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Button } from '@/components/ui/button';

export const APIInfrastructure = () => {
  return (
    <GlassPanel className="p-6 border-white/5 bg-[#0A192F]/40 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
         <h3 className="text-lg font-bold text-white">API Infrastructure</h3>
         <div className="flex gap-2">
            <div className="text-[10px] font-bold text-white uppercase px-2 py-1 bg-white/5 rounded">Vendor API</div>
            <div className="text-[10px] font-bold text-[#94A3B8] uppercase px-2 py-1 hover:text-white cursor-pointer">Dispatch API</div>
            <div className="text-[10px] font-bold text-[#94A3B8] uppercase px-2 py-1 hover:text-white cursor-pointer">Webhooks</div>
         </div>
      </div>
      
      <div className="flex-1 bg-[#081120] rounded-xl border border-white/5 p-4 relative overflow-hidden font-mono text-sm group">
         <div className="absolute top-0 left-0 w-1 h-full bg-[#2F80FF]" />
         <pre className="text-[#94A3B8]">
            <span className="text-[#FF7A1A]">curl</span> --request GET \<br/>
            {'  '}--url <span className="text-emerald-400">https://api.nationwidetrans.com/v1/vendors</span> \<br/>
            {'  '}--header <span className="text-[#2F80FF]">'Authorization: Bearer YOUR_API_KEY'</span> \<br/>
            {'  '}--header <span className="text-[#2F80FF]">'Content-Type: application/json'</span>
         </pre>

         <div className="absolute top-4 right-4 text-xs text-[#94A3B8] flex gap-2 items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="hover:text-white">Copy</button>
         </div>

         <div className="absolute bottom-4 right-4">
            <Button className="bg-[#2F80FF]/10 text-[#2F80FF] hover:bg-[#2F80FF]/20 text-xs h-8 px-4 rounded-lg">Try in Sandbox</Button>
         </div>
      </div>
    </GlassPanel>
  );
};
