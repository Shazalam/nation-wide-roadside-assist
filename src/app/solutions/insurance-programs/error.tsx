'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, RefreshCcw, Home, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Insurance Operations Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#081120] flex flex-col items-center justify-center p-4">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(225,29,72,0.1),transparent_70%)] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-[#0A192F]/80 backdrop-blur-3xl border border-red-500/20 rounded-3xl p-8 text-center relative z-10 shadow-2xl"
      >
        <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-6">
           <AlertCircle className="w-8 h-8 text-red-500" />
        </div>
        
        <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-2">Network Disruption</h2>
        <p className="text-sm text-[#94A3B8] leading-relaxed mb-8">
          We encountered an issue with the insurance operations mesh. Error: <span className="font-mono text-red-400">{error.digest || 'ERR_INSURANCE_MESH_FAILURE'}</span>
        </p>

        <div className="grid grid-cols-1 gap-3">
          <button
            onClick={() => reset()}
            className="w-full py-4 bg-red-500 text-white rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-red-600 transition-all shadow-[0_0_20px_rgba(239,68,68,0.2)]"
          >
            <RefreshCcw className="w-4 h-4" /> Reset Operations
          </button>
          
          <Link 
            href="/"
            className="w-full py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
          >
            <Home className="w-4 h-4" /> System Dashboard
          </Link>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-center gap-2">
           <MessageSquare className="w-4 h-4 text-[#94A3B8]" />
           <span className="text-[10px] font-mono text-[#94A3B8] uppercase">Trans-Ops Support: 1-888-INSURE-TECH</span>
        </div>
      </motion.div>
    </div>
  );
}
