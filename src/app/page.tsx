"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight, Activity, Shield, Code,
  MapPin, CheckCircle2, ChevronRight,
  Terminal, Globe2, Clock, Zap,
  BarChart3, Cpu, Network
} from "lucide-react";
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis } from "recharts";

// --- Mock Data ---
const telemetryData = Array.from({ length: 20 }).map((_, i) => ({
  time: i,
  events: Math.floor(Math.random() * 50) + 50 + (i * 2),
}));

// --- Navbar Component ---
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? "bg-brand-navy/80 backdrop-blur-md border-brand-border" : "bg-transparent border-transparent"}`}>
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded bg-brand-blue/20 border border-brand-blue/50 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-brand-blue/20 blur-xl group-hover:bg-brand-blue/40 transition-colors" />
            <span className="font-mono font-bold text-brand-blue relative z-10">NT</span>
          </div>
          <div className="hidden md:flex flex-col">
            <span className="font-bold text-lg leading-tight tracking-tight text-white">Nationwide Trans Inc.</span>
            <span className="text-xs text-brand-slate tracking-wider uppercase font-medium">Operations Infrastructure</span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-brand-slate">
          {["Solutions", "Services", "Operations", "Technology", "About"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <a href="#login" className="text-sm font-medium text-brand-slate hover:text-white hidden md:block transition-colors">
            Partner Login
          </a>
          <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white shadow-[0_0_20px_rgba(47,128,255,0.4)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(47,128,255,0.6)]">
            Partner With Us
          </Button>
        </div>
      </div>
    </header>
  );
};

// --- Hero Section ---
const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-1/4 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <Badge variant="outline" className="border-brand-blue/30 text-brand-blue bg-brand-blue/10 px-4 py-1.5 mb-6 rounded-full text-xs font-mono uppercase tracking-widest flex w-fit items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
              Enterprise Mobility Infrastructure
            </Badge>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Powering the Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-blue to-brand-blue/70">
                Mobility & Roadside Infrastructure.
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-brand-slate mb-10 leading-relaxed max-w-xl">
              Enterprise-grade dispatch, nationwide vendor coordination, and API-first technology engineered for insurers, fleets, OEMs, and roadside providers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 text-base bg-white text-brand-navy hover:bg-gray-100 font-semibold group transition-all">
                Explore Enterprise Solutions
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base border-brand-border hover:bg-brand-blue/10 hover:text-brand-blue font-semibold transition-all">
                <Terminal className="mr-2 w-5 h-5" />
                View API Documentation
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center lg:justify-end perspective-[2000px]"
          >
            {/* Dashboard Mockup */}
            <div className="relative w-full max-w-lg aspect-square lg:aspect-auto lg:h-[500px] bg-brand-navy/40 backdrop-blur-xl border border-brand-border rounded-2xl p-6 shadow-2xl transform rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out">

              <div className="flex items-center justify-between mb-8 pb-4 border-b border-brand-border">
                <div className="flex items-center gap-3">
                  <Activity className="text-brand-blue" />
                  <span className="font-mono font-semibold text-white">Live Operations</span>
                </div>
                <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">System Nominal</Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-brand-navy/60 border border-brand-border rounded-xl p-4 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p className="text-brand-slate text-sm mb-1">SLA Compliance</p>
                  <p className="text-3xl font-bold text-white">97.8%</p>
                  <div className="mt-2 text-xs text-emerald-400 flex items-center gap-1">
                    <Activity className="w-3 h-3" /> +0.4% from last month
                  </div>
                </div>
                <div className="bg-brand-navy/60 border border-brand-border rounded-xl p-4">
                  <p className="text-brand-slate text-sm mb-1">Dispatch Events</p>
                  <p className="text-3xl font-bold text-white">2.4M+</p>
                  <div className="mt-2 text-xs text-brand-blue flex items-center gap-1">
                    <Globe2 className="w-3 h-3" /> Nationwide Coverage
                  </div>
                </div>
              </div>

              <div className="h-40 w-full">
                <p className="text-sm text-brand-slate mb-4">Event Telemetry (Real-time)</p>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={telemetryData}>
                    <defs>
                      <linearGradient id="colorEvents" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--color-brand-blue)" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="var(--color-brand-blue)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="events" stroke="var(--color-brand-blue)" fillOpacity={1} fill="url(#colorEvents)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Floating Element */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-12 top-20 bg-brand-navy/80 backdrop-blur-xl border border-brand-border rounded-xl p-4 shadow-xl hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center border border-brand-orange/20">
                    <Clock className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Avg Response ETA</p>
                    <p className="text-lg font-bold text-brand-orange">18.4 mins</p>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Trust Bar Section ---
const TrustBar = () => {
  return (
    <section className="py-10 border-y border-brand-border bg-brand-navy/20 backdrop-blur-sm overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {/* Logos Placeholder */}
            {["AAA", "HONK", "WEX", "Enterprise", "Agero", "Geico"].map((logo) => (
              <span key={logo} className="text-xl font-bold font-mono tracking-widest">{logo}</span>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {["SOC 2 Type II", "ISO 27001", "PCI-DSS"].map((cert) => (
              <Badge key={cert} variant="outline" className="bg-brand-navy text-brand-slate border-brand-border/50">
                <Shield className="w-3 h-3 mr-1" /> {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Capabilities Section ---
const CapabilitiesSection = () => {
  const cards = [
    {
      title: "Unmatched Network Density",
      desc: "Nationwide connectivity linking thousands of nodes. Intelligent routing ensures the closest, most capable vendor is dispatched.",
      icon: Network,
      color: "text-brand-blue",
      bg: "bg-brand-blue/10",
      borderColor: "border-brand-blue/20"
    },
    {
      title: "SLA-Driven Operations",
      desc: "Automated compliance monitoring, dynamic ETA forecasting, and penalty avoidance systems keep performance in the top percentile.",
      icon: Shield,
      color: "text-brand-orange",
      bg: "bg-brand-orange/10",
      borderColor: "border-brand-orange/20"
    },
    {
      title: "API-First Architecture",
      desc: "Integrate core roadside operations directly into your platform. RESTful endpoints, native webhooks, and robust SDKs.",
      icon: Code,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      borderColor: "border-purple-500/20"
    }
  ];

  return (
    <section className="py-24 relative" id="operations">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Core Capabilities</h2>
          <p className="text-lg text-brand-slate max-w-2xl mx-auto">
            Our infrastructure is built to handle massive scale while maintaining rigorous operational standards across the country.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <Card key={i} className="bg-brand-navy/30 backdrop-blur-sm border-brand-border hover:bg-brand-navy/50 transition-all duration-300 group overflow-hidden">
              <CardContent className="p-8 relative">
                <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full ${card.bg}`} />
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 border transition-colors duration-300 ${card.bg} ${card.color} ${card.borderColor}`}>
                  <card.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-brand-slate leading-relaxed">{card.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Technology Showcase Section ---
const TechnologySection = () => {
  return (
    <section className="py-24 bg-brand-navy/20 border-y border-brand-border" id="technology">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Deep Operational Telemetry</h2>
            <p className="text-lg text-brand-slate mb-8">
              Gain unparalleled visibility into your roadside operations. Our dashboard aggregates live GPS, AI dispatch routing, and predictive analytics into a single pane of glass.
            </p>

            <div className="space-y-4">
              {[
                "Live Telemetry & Heatmaps",
                "Automated Algorithmic Dispatch",
                "Predictive Vendor ETA & Status Tracking"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-brand-navy/40 border border-brand-border hover:border-brand-blue/50 transition-colors cursor-pointer group">
                  <CheckCircle2 className="text-brand-blue w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Dark Cinematic Dashboard Visual */}
            <div className="absolute inset-0 bg-brand-blue/10 blur-[100px] rounded-full" />
            <div className="relative bg-[#0A192F] border border-brand-border rounded-xl p-2 shadow-2xl overflow-hidden aspect-[4/3]">
              <div className="absolute top-0 left-0 right-0 h-10 border-b border-brand-border flex items-center px-4 gap-2 bg-[#0A192F]/80">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <div className="ml-4 text-xs font-mono text-brand-slate flex-1 text-center pr-12">operations.nationwidetrans.com</div>
              </div>
              <div className="pt-12 p-4 h-full flex flex-col gap-4">
                <div className="flex gap-4 h-1/2">
                  <div className="flex-1 bg-brand-bg rounded-lg border border-brand-border p-4 relative overflow-hidden">
                    <div className="text-xs text-brand-slate uppercase font-mono mb-2">Live Map</div>
                    {/* Faux Map Elements */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                    <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-brand-blue/20 rounded-full blur-xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                    <MapPin className="absolute top-1/2 left-1/2 text-brand-blue w-6 h-6 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <div className="w-1/3 bg-brand-bg rounded-lg border border-brand-border p-4">
                    <div className="text-xs text-brand-slate uppercase font-mono mb-2">Active Jobs</div>
                    <div className="space-y-2 mt-4">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="h-8 rounded bg-brand-border/50 w-full animate-pulse" style={{ animationDelay: `\${i*0.2}s` }} />
                      ))}

                    </div>
                  </div>
                </div>
                <div className="flex-1 bg-brand-bg rounded-lg border border-brand-border p-4">
                  <div className="text-xs text-brand-slate uppercase font-mono mb-2">Network Load</div>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={telemetryData.slice(0, 10)}>
                      <Area type="step" dataKey="events" stroke="var(--color-brand-blue)" fill="var(--color-brand-blue)" fillOpacity={0.1} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Industry Solutions ---
const IndustrySolutions = () => {
  return (
    <section className="py-24 relative" id="solutions">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Engineered for Your Industry</h2>
          <p className="text-lg text-brand-slate max-w-2xl mx-auto">
            Configurable mobility solutions designed for the specific demands of your sector.
          </p>
        </div>

        <Tabs defaultValue="insurance" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 bg-brand-navy/50 p-1 rounded-xl">
            <TabsTrigger value="insurance" className="rounded-lg data-[state=active]:bg-brand-blue data-[state=active]:text-white">Insurance & Motor Clubs</TabsTrigger>
            <TabsTrigger value="commercial" className="rounded-lg data-[state=active]:bg-brand-blue data-[state=active]:text-white">Commercial & Fleet</TabsTrigger>
            <TabsTrigger value="rental" className="rounded-lg data-[state=active]:bg-brand-blue data-[state=active]:text-white">Rental & OEM</TabsTrigger>
          </TabsList>
          <div className="mt-8">
            {["insurance", "commercial", "rental"].map((tab) => (
              <TabsContent key={tab} value={tab} className="outline-none">
                <Card className="bg-brand-navy/30 border-brand-border border">
                  <CardContent className="p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-4 capitalize">{tab} Infrastructure</h3>
                      <p className="text-brand-slate mb-6 leading-relaxed">
                        Deploy our robust API to offer seamless roadside assistance directly within your app. Leverage our nationwide network to guarantee fast response times, strict SLA adherence, and transparent pricing for your policyholders or drivers.
                      </p>
                      <Button variant="outline" className="border-brand-blue/50 text-white hover:bg-brand-blue/10">
                        View Capability Report
                      </Button>
                    </div>
                    <div className="w-full md:w-1/2 aspect-video bg-brand-bg rounded-xl border border-brand-border relative overflow-hidden flex items-center justify-center group">
                      <div className="absolute inset-0 bg-brand-blue/5 group-hover:bg-brand-blue/10 transition-colors" />
                      <Cpu className="w-16 h-16 text-brand-slate/50 group-hover:text-brand-blue/50 transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

// --- Footer Section ---
const Footer = () => {
  return (
    <footer className="bg-brand-bg border-t border-brand-border pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded bg-brand-blue flex items-center justify-center">
                <span className="font-mono font-bold text-white text-xs">NT</span>
              </div>
              <span className="font-bold text-white">Nationwide Trans Inc.</span>
            </div>
            <p className="text-sm text-brand-slate leading-relaxed">
              Nationwide roadside operations infrastructure and enterprise mobility platform.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Solutions</h4>
            <ul className="space-y-3 text-sm text-brand-slate">
              {["Insurance Providers", "Commercial Fleets", "Rental Agencies", "OEM Integrations"].map(link => (
                <li key={link}><a href="#" className="hover:text-brand-blue transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Technology</h4>
            <ul className="space-y-3 text-sm text-brand-slate">
              {["API Documentation", "System Status", "Developer Portal", "Security (SOC2)"].map(link => (
                <li key={link}><a href="#" className="hover:text-brand-blue transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-brand-slate">
              {["About Us", "Careers", "Contact Sales", "Partner Network"].map(link => (
                <li key={link}><a href="#" className="hover:text-brand-blue transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-brand-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-slate">
            &copy; {new Date().getFullYear()} Nationwide Trans Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-brand-slate">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Final CTA Section ---
const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-blue/5" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-brand-navy/60 backdrop-blur-xl border border-brand-border rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-brand-blue/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-brand-orange/10 blur-3xl rounded-full" />

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
            Ready to modernize your roadside operations infrastructure?
          </h2>
          <p className="text-lg text-brand-slate mb-10 relative z-10 max-w-2xl mx-auto">
            Join the leading enterprises powering their mobility operations through Nationwide Trans Inc.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Button size="lg" className="h-14 px-8 text-base bg-brand-blue hover:bg-brand-blue/90 text-white w-full sm:w-auto shadow-[0_0_20px_rgba(47,128,255,0.4)]">
              Contact Enterprise Team
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base border-brand-border hover:bg-brand-navy w-full sm:w-auto">
              Get Capability Report
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};


export default function HomePage() {
  return (
    <div className="min-h-screen bg-brand-bg font-sans selection:bg-brand-blue/30 text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <CapabilitiesSection />
        <TechnologySection />
        <IndustrySolutions />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
