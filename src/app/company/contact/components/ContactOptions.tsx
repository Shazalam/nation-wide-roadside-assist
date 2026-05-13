'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Terminal, ShieldAlert, GitMerge, Settings, Network, HardHat } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const options = [
  { title: 'Enterprise Sales', icon: ShieldAlert, email: 'enterprise@nationwidetrans.com', phone: '1-800-NTI-CORP', sla: 'Same Day Response', status: 'Online' },
  { title: 'Recovery Operations Center', icon: Phone, email: 'dispatch@nationwidetrans.com', phone: '1-800-NTI-TOWS', sla: 'Immediate (24/7)', status: 'Live' },
  { title: 'Fleet Coordination', icon: GitMerge, email: 'fleets@nationwidetrans.com', phone: '1-800-NTI-FLTS', sla: 'Priority Routing', status: 'Online' },
  { title: 'API & Developer Support', icon: Terminal, email: 'api-support@nationwidetrans.com', phone: 'Via Developer Portal', sla: '24 Hour SLA', status: 'Systems Nominal' },
  { title: 'Insurance Coordination', icon: Settings, email: 'insurance@nationwidetrans.com', phone: '1-800-NTI-CLMS', sla: 'Same Day Response', status: 'Online' },
  { title: 'Vendor Network Ops', icon: Network, email: 'vendors@nationwidetrans.com', phone: '1-800-NTI-VNDR', sla: 'Compliance Check', status: 'Online' }
];

export const ContactOptions = () => {
  return (
    <section className="py-24 bg-[#0A192F]/20 relative z-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Enterprise Operations Divisions
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {options.map((opt, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               viewport={{ once: true }}
             >
                <GlassPanel className="h-full p-6 border-white/5 bg-white/[0.01] hover:bg-[#2F80FF]/5 hover:border-[#2F80FF]/30 transition-all group relative overflow-hidden flex flex-col justify-between">
                   <div className="absolute inset-0 bg-gradient-to-br from-[#2F80FF]/0 to-[#2F80FF]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                   
                   <div className="flex justify-between items-start mb-8 relative z-10">
                      <div className="h-10 w-10 rounded-xl bg-[#081120] border border-white/10 flex items-center justify-center group-hover:border-[#2F80FF]/50 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.3)]">
                         <opt.icon className="h-4 w-4 text-[#2F80FF]" />
                      </div>
                      <div className="flex items-center gap-2">
                         <span className="relative flex h-2 w-2">
                           <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                           <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                         </span>
                         <span className="text-[9px] font-bold text-white uppercase tracking-widest">{opt.status}</span>
                      </div>
                   </div>
                   
                   <div className="relative z-10">
                      <h3 className="text-sm font-black text-white uppercase tracking-wider mb-4">
                         {opt.title}
                      </h3>
                      
                      <div className="space-y-3">
                         <div className="flex items-center gap-3">
                            <Mail className="h-3 w-3 text-[#94A3B8]" />
                            <a href={`mailto:${opt.email}`} className="text-[11px] font-medium text-[#94A3B8] hover:text-white transition-colors">{opt.email}</a>
                         </div>
                         <div className="flex items-center gap-3">
                            <Phone className="h-3 w-3 text-[#94A3B8]" />
                            <span className="text-[11px] font-medium text-[#94A3B8]">{opt.phone}</span>
                         </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-white/5">
                         <p className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-400/10 px-2 py-1 rounded inline-block">SLA: {opt.sla}</p>
                      </div>
                   </div>
                </GlassPanel>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};
