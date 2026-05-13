'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const LifeInside = () => {
  return (
    <section className="py-24 bg-[#081120] relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Life Inside Operations
           </h2>
           <p className="text-[#94A3B8] font-medium text-sm">
             Mission-critical environments designed for real-time collaboration.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[600px]">
           {/* Big Image */}
           <div className="md:col-span-8 rounded-3xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-[#0A192F] opacity-50 mix-blend-multiply z-10 group-hover:opacity-30 transition-opacity duration-700" />
              <img 
                 src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" 
                 alt="Command Center" 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 z-20">
                 <p className="text-[10px] font-black text-white uppercase tracking-widest bg-black/50 px-3 py-1 rounded backdrop-blur-md border border-white/10">National Command Center</p>
              </div>
           </div>

           <div className="md:col-span-4 flex flex-col gap-4">
              <div className="flex-1 rounded-3xl overflow-hidden relative group">
                 <div className="absolute inset-0 bg-[#0A192F] opacity-50 mix-blend-multiply z-10 group-hover:opacity-30 transition-opacity duration-700" />
                 <img 
                    src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80" 
                    alt="Dispatch Operations" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                 />
                 <div className="absolute bottom-6 left-6 z-20">
                    <p className="text-[10px] font-black text-white uppercase tracking-widest bg-black/50 px-3 py-1 rounded backdrop-blur-md border border-white/10">Fleet Dispatch</p>
                 </div>
              </div>
              <div className="flex-1 rounded-3xl overflow-hidden relative group">
                 <div className="absolute inset-0 bg-[#0A192F] opacity-50 mix-blend-multiply z-10 group-hover:opacity-30 transition-opacity duration-700" />
                 <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80" 
                    alt="Engineering Infrastructure" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                 />
                 <div className="absolute bottom-6 left-6 z-20">
                    <p className="text-[10px] font-black text-white uppercase tracking-widest bg-black/50 px-3 py-1 rounded backdrop-blur-md border border-white/10">Platform Engineering</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
