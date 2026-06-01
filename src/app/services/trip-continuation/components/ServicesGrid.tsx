'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Car, Building2, Users, Truck, Network, Plane, 
  BatteryCharging, Briefcase, Key, Globe, FileText 
} from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1591768793355-74d7ca7385da?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1551288049-bbbda536ad0a?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1454165833762-02ad50e8958d?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1566860299613-76e627747acf?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1507208643033-912c01d4a04d?auto=format&fit=crop&q=80'
];

const services = [
  { 
    title: 'Rental Coordination', 
    icon: Car, 
    details: 'Seamless rental vehicle sourcing and delivery logistics directly to the incident site.',
    response: '28m',
    availability: '99%',
    image: images[0]
  },
  { 
    title: 'Lodging Assistance', 
    icon: Building2, 
    details: 'Premium accommodation booking and management for stranded drivers and passengers.',
    response: '35m',
    availability: '98%',
    image: images[1]
  },
  { 
    title: 'Ride-Share Dispatch', 
    icon: Users, 
    details: 'Instant ride-share vouchers and coordination for rapid passenger transfer and mobility.',
    response: '12m',
    availability: '99%',
    image: images[2]
  },
  { 
    title: 'Emergency Transport', 
    icon: Truck, 
    details: 'Critical vehicle dispatch for priority passengers and high-stakes travel continuation.',
    response: '24m',
    availability: '97%',
    image: images[3]
  },
  { 
    title: 'Passenger Relocation', 
    icon: Network, 
    details: 'High-capacity mobility solutions for group incidents and multi-passenger recovery.',
    response: '42m',
    availability: '95%',
    image: images[4]
  },
  { 
    title: 'Travel Assistance', 
    icon: Plane, 
    details: 'Emergency flight booking and travel itinerary support for long-distance continuation.',
    response: '45m',
    availability: '96%',
    image: images[5]
  },
  { 
    title: 'EV Mobility Support', 
    icon: BatteryCharging, 
    details: 'Specialized mobile charging coordination and flatbed logistics for electric fleets.',
    response: '38m',
    availability: '94%',
    image: images[6]
  },
  { 
    title: 'Travel Concierge', 
    icon: Briefcase, 
    details: 'High-touch support and coordination for complex relocation and concierge needs.',
    response: 'Real-time',
    availability: '100%',
    image: images[7]
  },
  { 
    title: 'Fleet Driver Support', 
    icon: Key, 
    details: 'Dedicated mobility nodes and transportation support for commercial fleet operators.',
    response: '22m',
    availability: '99%',
    image: images[8]
  },
  { 
    title: 'Family Mobility', 
    icon: Users, 
    details: 'Safe and secure transport coordination for families, children, and specialized needs.',
    response: '25m',
    availability: '98%',
    image: images[9]
  },
  { 
    title: 'OEM Mobility', 
    icon: Globe, 
    details: 'White-label mobility support and service integration for automotive vehicle brands.',
    response: 'Client-led',
    availability: 'Active',
    image: images[10]
  },
  { 
    title: 'Insurance Mobility', 
    icon: FileText, 
    details: 'Integrated claims-based trip continuation logic for insurance partners and motor clubs.',
    response: 'API-driven',
    availability: 'Active',
    image: images[11]
  }
];

export const ServicesGrid = () => {
  return (
    <section className="relative z-10 py-32 bg-brand-bg overflow-hidden border-t border-brand-border">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #94A3B8 1px, transparent 0)`, backgroundSize: '64px 64px' }} />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2F80FF]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1536px]">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <h2 className="text-4xl lg:text-6xl font-black text-foreground dark:text-white tracking-tighter leading-tight mb-8">
               Mobility Operational <br />
               <span className="text-[#2F80FF]">Services</span>
            </h2>
            <p className="text-brand-slate text-lg font-medium leading-relaxed max-w-2xl mx-auto">
               Seamless rental coordination, emergency transport, and travel continuity designed to keep enterprise drivers, fleets, and passengers moving without disruption.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-16">
          {services.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group h-full cursor-pointer relative"
              >
                {/* Floating Icon Bubble (50% Overlap) */}
                <div className="absolute top-0 left-10 -translate-y-1/2 z-20">
                   <motion.div
                     whileHover={{ scale: 1.2 }}
                     className="h-14 w-14 bg-card/90 backdrop-blur-2xl border border-brand-border rounded-xl flex items-center justify-center shadow-[0_10px_30px_rgba(47,128,255,0.2)] group-hover:border-[#2F80FF]/40 group-hover:shadow-[0_0_40px_rgba(47,128,255,0.4)] transition-all relative overflow-hidden"
                   >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#2F80FF]/20 to-transparent" />
                      <Icon className="h-6 w-6 text-[#2F80FF] relative z-10 transition-transform group-hover:scale-110" />
                      <div className="absolute inset-0 rounded-xl border-2 border-[#2F80FF]/20 animate-pulse" />
                   </motion.div>
                </div>

                {/* Glassmorphism Card */}
                <div className="relative bg-card/55 backdrop-blur-[24px] border border-white/[0.08] rounded-[28px] pt-14 p-8 h-full flex flex-col transition-all duration-400 group-hover:border-[#2F80FF]/40 group-hover:bg-card/80 group-hover:-translate-y-6 group-hover:scale-[1.08] shadow-[0_15px_50px_rgba(0,0,0,0.5)] group-hover:shadow-[0_40px_80px_rgba(47,128,255,0.25)] overflow-hidden">
                   {/* Background Image Ghost */}
                   <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-5 mix-blend-luminosity transition-opacity duration-700 pointer-events-none scale-110 group-hover:scale-100" 
                        style={{ backgroundImage: `url(${card.image})` }} />
                   
                   <div className="relative z-10 mb-4 pt-4 flex-1">
                      <h3 className="text-base font-black text-foreground dark:text-white uppercase tracking-tight leading-tight mb-4 group-hover:text-[#2F80FF] transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-[11px] text-brand-slate font-medium leading-relaxed">
                        {card.details}
                      </p>
                   </div>



                   {/* Edge Glow Pulse */}
                   <div className="absolute inset-0 rounded-[28px] border-2 border-[#2F80FF]/0 group-hover:border-[#2F80FF]/10 transition-all duration-500 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
