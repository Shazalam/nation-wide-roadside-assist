'use client';

import React, { useEffect, useRef, useState } from 'react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { StatusIndicator } from '@/components/ui/status-indicator';
import { Badge } from '@/components/ui/badge';
import { MapPin, Navigation, Crosshair, ZoomIn, ZoomOut } from 'lucide-react';
import { motion } from 'framer-motion';

export const LiveMap = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => setIsLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[600px] rounded-2xl overflow-hidden border border-brand-border bg-brand-navy/20">
      {/* Mock Map Background */}
      <div className="absolute inset-0 bg-[#0A192F] overflow-hidden">
        {/* Grid lines for "Technical" look */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #2F80FF 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Animated Map Points (Mock Data) */}
        {isLoaded && (
          <>
            <MapPoint x="30%" y="40%" status="online" label="NT-NODE-NY1" />
            <MapPoint x="45%" y="55%" status="online" label="NT-NODE-PA" />
            <MapPoint x="20%" y="70%" status="alert" label="NT-INC-921" />
            <MapPoint x="60%" y="30%" status="busy" label="NT-FLT-TX" />
          </>
        )}
      </div>

      {/* Map Overlay Controls */}
      <div className="absolute top-6 left-6 z-10 space-y-4">
        <GlassPanel className="p-2 flex flex-col gap-2 bg-brand-navy/80 border-white/10">
          <button className="p-2 text-brand-slate hover:text-white transition-colors"><ZoomIn className="h-5 w-5" /></button>
          <div className="h-px w-full bg-brand-border" />
          <button className="p-2 text-brand-slate hover:text-white transition-colors"><ZoomOut className="h-5 w-5" /></button>
        </GlassPanel>
        
        <GlassPanel className="p-2 bg-brand-navy/80 border-white/10">
          <button className="p-2 text-brand-blue"><Crosshair className="h-5 w-5" /></button>
        </GlassPanel>
      </div>

      <div className="absolute top-6 right-6 z-10">
        <GlassPanel className="px-4 py-3 bg-brand-navy/80 border-white/10 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10B981]" />
            <span className="text-[10px] font-bold text-white uppercase tracking-widest">Global Link Active</span>
          </div>
          <div className="h-4 w-[1px] bg-brand-border" />
          <div className="text-[10px] text-brand-slate font-mono">LAT: 40.7128 | LON: -74.0060</div>
        </GlassPanel>
      </div>

      {/* Loading Overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand-bg/90 z-20">
          <div className="h-16 w-16 rounded-full border-2 border-brand-blue/20 border-t-brand-blue animate-spin mb-4" />
          <p className="text-sm font-bold text-brand-blue uppercase tracking-widest animate-pulse">Initializing Mesh Network...</p>
        </div>
      )}
    </div>
  );
};

const MapPoint = ({ x, y, status, label }: any) => (
  <motion.div 
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ type: "spring", duration: 1 }}
    style={{ left: x, top: y }}
    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
  >
    <div className="relative">
      <StatusIndicator status={status} pulse />
      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <GlassPanel className="px-2 py-1 whitespace-nowrap bg-brand-navy/90 border-white/10">
          <span className="text-[8px] font-bold text-white uppercase tracking-tighter">{label}</span>
        </GlassPanel>
      </div>
    </div>
  </motion.div>
);
