'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Radio } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#081120] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#2F80FF]/10 blur-[120px] rounded-full" />
      
      <div className="relative z-10 flex flex-col items-center">
         <motion.div
           animate={{ 
             scale: [1, 1.1, 1],
             rotate: [0, 90, 180, 270, 360]
           }}
           transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
           className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(47,128,255,0.2)]"
         >
            <Activity className="w-8 h-8 text-[#2F80FF]" />
         </motion.div>
         
         <div className="text-center">
            <h2 className="text-xl font-black text-white uppercase tracking-[0.3em] mb-2">Initializing Mesh</h2>
            <div className="flex items-center gap-2 justify-center text-[10px] font-mono text-[#94A3B8]">
               <Radio className="w-3 h-3 animate-pulse" />
               <span>ESTABLISHING SECURE OPERATIONAL LINK...</span>
            </div>
         </div>
         
         {/* Progress Bar */}
         <div className="w-48 h-1 bg-white/5 rounded-full mt-10 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="h-full bg-[#2F80FF] shadow-[0_0_10px_#2F80FF]"
            />
         </div>
      </div>
    </div>
  );
}
