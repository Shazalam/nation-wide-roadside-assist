'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Car, Truck, Wrench, CircleDashed, Fuel, ActivitySquare, Battery, Key, Shield, Tent, AlertTriangle, PhoneCall } from 'lucide-react';

const services = [
  { icon: Car, label: "Roadside Assistance" },
  { icon: Truck, label: "Heavy-Duty Towing" },
  { icon: Wrench, label: "Mobile Repairs" },
  { icon: CircleDashed, label: "Tire Change Services" },
  { icon: Fuel, label: "Fuel Delivery" },
  { icon: ActivitySquare, label: "Recovery & Winch-Outs" },
  { icon: Battery, label: "Battery Assistance" },
  { icon: Key, label: "Lockout Services" },
  { icon: Shield, label: "Commercial Fleet Recovery" },
  { icon: Tent, label: "RV & Camper Support" },
  { icon: AlertTriangle, label: "Accident Recovery" },
  { icon: PhoneCall, label: "Emergency Dispatch" }
];

export const ServiceEcosystem = () => {
  return (
    <section className="py-16 border-t border-white/5 bg-[#0A192F]/10">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold text-white mb-10">Service Ecosystem</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#2F80FF]/30 hover:bg-[#2F80FF]/5 transition-all flex flex-col items-center justify-center text-center group cursor-default"
            >
              <service.icon className="h-8 w-8 text-[#94A3B8] mb-3 group-hover:text-[#2F80FF] transition-colors" strokeWidth={1.5} />
              <div className="text-xs font-bold text-white group-hover:text-[#2F80FF] transition-colors leading-tight px-2">{service.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
