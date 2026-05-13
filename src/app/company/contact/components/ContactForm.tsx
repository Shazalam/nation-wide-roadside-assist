'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Terminal, Loader2, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlassPanel } from '@/components/ui/glass-panel';

export const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call to backend
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section className="py-24 bg-[#081120] relative z-10 border-t border-white/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
           
           <div className="lg:col-span-5 space-y-8">
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                 Enterprise Inquiry <br />Dispatch System
              </h2>
              <p className="text-[#94A3B8] font-medium text-sm leading-relaxed max-w-md">
                 Submit your operational requirements. Our enterprise systems will automatically route your request to the appropriate strategic response team.
              </p>

              <div className="p-6 bg-[#0A192F]/50 rounded-xl border border-[#2F80FF]/20 relative overflow-hidden">
                 <div className="absolute inset-0 bg-[#2F80FF]/5" />
                 <h4 className="text-[10px] font-black text-white uppercase tracking-widest mb-4 relative z-10">System Routing Protocol</h4>
                 
                 <div className="space-y-4 relative z-10">
                    <div className="flex justify-between items-center text-[10px] font-mono">
                       <span className="text-[#94A3B8]">Data Encryption:</span>
                       <span className="text-emerald-400">Active (AES-256)</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-mono">
                       <span className="text-[#94A3B8]">Routing SLA:</span>
                       <span className="text-[#2F80FF]">&lt; 500ms</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-mono">
                       <span className="text-[#94A3B8]">Escalation Level:</span>
                       <span className="text-[#FF7A1A]">Enterprise Priority</span>
                    </div>
                 </div>
              </div>
           </div>

           <div className="lg:col-span-7">
              <GlassPanel className="p-8 border-white/10 bg-[#0A192F]/80 shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2F80FF] via-purple-500 to-[#FF7A1A]" />
                 
                 {status === 'success' ? (
                   <motion.div 
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     className="flex flex-col items-center justify-center py-16 text-center"
                   >
                      <div className="h-20 w-20 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center mb-6">
                         <CheckCircle2 className="h-10 w-10 text-emerald-400" />
                      </div>
                      <h3 className="text-2xl font-black text-white mb-2">Request Routed Successfully</h3>
                      <p className="text-[#94A3B8] text-sm max-w-sm">
                         Your payload has been received. Our enterprise operations team will respond within the defined SLA.
                      </p>
                      <Button onClick={() => setStatus('idle')} variant="outline" className="mt-8 border-white/10 text-white font-bold text-[10px] uppercase tracking-widest">
                         Submit Another Request
                      </Button>
                   </motion.div>
                 ) : (
                   <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="space-y-2">
                            <label className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest">Full Name</label>
                            <input required type="text" className="w-full bg-[#081120] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#2F80FF] transition-colors" placeholder="John Doe" />
                         </div>
                         <div className="space-y-2">
                            <label className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest">Company</label>
                            <input required type="text" className="w-full bg-[#081120] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#2F80FF] transition-colors" placeholder="Acme Logistics" />
                         </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="space-y-2">
                            <label className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest">Business Email</label>
                            <input required type="email" className="w-full bg-[#081120] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#2F80FF] transition-colors" placeholder="john@acme.com" />
                         </div>
                         <div className="space-y-2">
                            <label className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest">Phone Number</label>
                            <input required type="tel" className="w-full bg-[#081120] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#2F80FF] transition-colors" placeholder="+1 (555) 000-0000" />
                         </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="space-y-2">
                            <label className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest">Inquiry Type</label>
                            <select className="w-full bg-[#081120] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#2F80FF] transition-colors appearance-none">
                               <option>Fleet Recovery Operations</option>
                               <option>Enterprise Dispatch Solutions</option>
                               <option>API & Technology Integrations</option>
                               <option>Vendor Network Partnerships</option>
                               <option>Other</option>
                            </select>
                         </div>
                         <div className="space-y-2">
                            <label className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest">Fleet Size (If Applicable)</label>
                            <select className="w-full bg-[#081120] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#2F80FF] transition-colors appearance-none">
                               <option>1-50 Vehicles</option>
                               <option>51-250 Vehicles</option>
                               <option>251-1000 Vehicles</option>
                               <option>1000+ Vehicles</option>
                               <option>N/A</option>
                            </select>
                         </div>
                      </div>

                      <div className="space-y-2">
                         <label className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest">Operational Message</label>
                         <textarea required rows={4} className="w-full bg-[#081120] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#2F80FF] transition-colors resize-none" placeholder="Describe your operational requirements..."></textarea>
                      </div>

                      <div className="pt-4 flex justify-end">
                         <Button type="submit" disabled={status === 'submitting'} className="bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-white font-bold h-12 px-8 rounded-lg shadow-[0_10px_30px_rgba(47,128,255,0.3)] w-full md:w-auto flex items-center justify-center gap-2">
                            {status === 'submitting' ? (
                               <><Loader2 className="h-4 w-4 animate-spin" /> Executing Routing...</>
                            ) : (
                               <><Send className="h-4 w-4" /> Transmit Payload</>
                            )}
                         </Button>
                      </div>
                   </form>
                 )}
              </GlassPanel>
           </div>

        </div>
      </div>
    </section>
  );
};
