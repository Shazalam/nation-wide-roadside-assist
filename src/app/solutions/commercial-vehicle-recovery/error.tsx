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
    console.error('Operational Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col items-center justify-center p-4">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(225,29,72,0.1),transparent_70%)] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-card/80 backdrop-blur-3xl border border-red-500/20 rounded-3xl p-8 text-center relative z-10 shadow-2xl"
      >
        <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-6">
           <AlertCircle className="w-8 h-8 text-red-500" />
        </div>
        
        <h2 className="text-2xl font-black text-foreground dark:text-white uppercase tracking-tight mb-2">Operational Breach</h2>
        <p className="text-sm text-brand-slate leading-relaxed mb-8">
          The system encountered an unexpected disruption in the operational mesh. Error code: <span className="font-mono text-red-400">{error.digest || 'ERR_MESH_DISRUPTION'}</span>
        </p>

        <div className="grid grid-cols-1 gap-3">
          <button
            onClick={() => reset()}
            className="w-full py-4 bg-red-500 text-foreground dark:text-white rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-red-600 transition-all shadow-[0_0_20px_rgba(239,68,68,0.2)]"
          >
            <RefreshCcw className="w-4 h-4" /> Try Again
          </button>
          
          <Link 
            href="/"
            className="w-full py-4 bg-white/5 border border-brand-border text-foreground dark:text-white rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
          >
            <Home className="w-4 h-4" /> Go to Homepage
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
