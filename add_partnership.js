const fs = require('fs');
const file = 'c:/Users/Shahnawaz Alam/Documents/nrsa-project/nation-wide-roadside-assist/src/app/company/capability-report/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const newSlide = `
        {/* ==================================================
            SLIDE 10: PARTNERSHIP OPPORTUNITIES
            ================================================== */}
        <section
          id="slide-10"
          className="h-screen w-screen snap-start flex items-center relative overflow-hidden bg-[#020617] px-4 pt-16 pb-4"
        >
          <div className="w-full flex-1 flex flex-col gap-3 h-full max-w-[1800px] mx-auto">
            {/* TIER 1: STRATEGIC PARTNERSHIP HERO (35%) */}
            <div className="flex-[0.35] grid grid-cols-12 gap-4">
              <div className="col-span-6 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-[#2F80FF] text-white text-[7px] font-bold px-1.5 py-0.5 rounded">SECTION 13</span>
                  <span className="text-slate-400 text-[7px] tracking-widest uppercase">PARTNERSHIP OPPORTUNITIES</span>
                </div>
                <h2 className="text-4xl xl:text-6xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-3">
                  STRATEGIC RSA<br/>
                  <span className="text-[#2F80FF]">PARTNERSHIP</span><br/>
                  ECOSYSTEM
                </h2>
                <p className="text-[10px] xl:text-[12px] text-cyan-400 font-medium leading-relaxed max-w-lg mb-6">
                  NationwideRoadsideAssist enables enterprise organizations to outsource and scale roadside operations through centralized dispatch infrastructure, intelligent workflow coordination, and nationwide provider ecosystems.
                </p>
                <div className="grid grid-cols-3 gap-2">
                  <div className="border border-white/10 rounded-lg p-2 bg-slate-900/40 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.3)]">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Globe size={14} className="text-[#2F80FF]" />
                      <span className="text-[6px] xl:text-[7px] text-white font-bold uppercase">NATIONWIDE INFRASTRUCTURE</span>
                    </div>
                    <span className="text-[5px] xl:text-[6px] text-slate-400">Coast-to-Coast Coverage</span>
                  </div>
                  <div className="border border-white/10 rounded-lg p-2 bg-slate-900/40 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.3)]">
                    <div className="flex items-center gap-2 mb-1.5">
                      <ShieldCheck size={14} className="text-emerald-400" />
                      <span className="text-[6px] xl:text-[7px] text-white font-bold uppercase">ENTERPRISE GRADE SECURITY</span>
                    </div>
                    <span className="text-[5px] xl:text-[6px] text-slate-400">ISO 27001 Certified & SOC 2</span>
                  </div>
                  <div className="border border-white/10 rounded-lg p-2 bg-slate-900/40 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.3)]">
                    <div className="flex items-center gap-2 mb-1.5">
                      <BrainCircuit size={14} className="text-cyan-400" />
                      <span className="text-[6px] xl:text-[7px] text-white font-bold uppercase">AI-POWERED DISPATCH</span>
                    </div>
                    <span className="text-[5px] xl:text-[6px] text-slate-400">Real-Time Routing Intelligence</span>
                  </div>
                </div>
              </div>
              <div className="col-span-6 relative border border-white/10 rounded-xl overflow-hidden bg-slate-900/40 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                 <img src="/network-map.png" alt="Ecosystem" className="w-full h-full object-cover opacity-60 mix-blend-screen" onError={(e) => e.currentTarget.style.display = 'none'} />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
                 <div className="absolute bottom-4 left-0 right-0 px-6 grid grid-cols-4 gap-4">
                   <div className="text-center">
                     <div className="text-2xl font-black text-white leading-none">50M+</div>
                     <div className="text-[6px] text-slate-400 uppercase mt-1">Members Supported</div>
                   </div>
                   <div className="text-center">
                     <div className="text-2xl font-black text-[#2F80FF] leading-none">250K+</div>
                     <div className="text-[6px] text-slate-400 uppercase mt-1">Events Managed Monthly</div>
                   </div>
                   <div className="text-center">
                     <div className="text-2xl font-black text-cyan-400 leading-none">65K+</div>
                     <div className="text-[6px] text-slate-400 uppercase mt-1">Vetted Providers</div>
                   </div>
                   <div className="text-center">
                     <div className="text-2xl font-black text-emerald-400 leading-none">24/7</div>
                     <div className="text-[6px] text-slate-400 uppercase mt-1">Operations Coverage</div>
                   </div>
                 </div>
              </div>
            </div>

            {/* TIER 2: RSA ECOSYSTEM ARCHITECTURE (25%) */}
            <div className="flex-[0.25] border border-white/10 rounded-xl bg-slate-900/40 p-3 relative shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-sm">
              <div className="text-[7px] xl:text-[8px] text-slate-300 font-bold tracking-widest uppercase absolute -top-2 left-4 bg-[#020617] px-2">ENTERPRISE RSA ECOSYSTEM ARCHITECTURE</div>
              <div className="flex h-full gap-4 pt-2">
                <div className="w-[35%] grid grid-cols-2 grid-rows-3 gap-2">
                  <div className="flex items-start gap-1.5 bg-slate-950/60 p-1.5 rounded border border-white/5">
                    <div className="text-blue-400"><Layers size={10} /></div>
                    <div>
                      <div className="text-[5px] xl:text-[6px] text-white font-bold uppercase mb-0.5">WHITE-LABEL RSA PROGRAMS</div>
                      <div className="text-[4px] xl:text-[5px] text-slate-400 leading-tight">Branded infrastructure & workflows</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-1.5 bg-slate-950/60 p-1.5 rounded border border-white/5">
                    <div className="text-cyan-400"><Truck size={10} /></div>
                    <div>
                      <div className="text-[5px] xl:text-[6px] text-white font-bold uppercase mb-0.5">FLEET PARTNERSHIPS</div>
                      <div className="text-[4px] xl:text-[5px] text-slate-400 leading-tight">Mobility continuity ecosystems</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-1.5 bg-slate-950/60 p-1.5 rounded border border-white/5">
                    <div className="text-emerald-400"><Activity size={10} /></div>
                    <div>
                      <div className="text-[5px] xl:text-[6px] text-white font-bold uppercase mb-0.5">DISPATCH OUTSOURCING</div>
                      <div className="text-[4px] xl:text-[5px] text-slate-400 leading-tight">Centralized dispatch routing</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-1.5 bg-slate-950/60 p-1.5 rounded border border-white/5">
                    <div className="text-purple-400"><Headphones size={10} /></div>
                    <div>
                      <div className="text-[5px] xl:text-[6px] text-white font-bold uppercase mb-0.5">CALL CENTER OPERATIONS</div>
                      <div className="text-[4px] xl:text-[5px] text-slate-400 leading-tight">24/7 intake & support</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-1.5 bg-slate-950/60 p-1.5 rounded border border-white/5">
                    <div className="text-orange-400"><Users size={10} /></div>
                    <div>
                      <div className="text-[5px] xl:text-[6px] text-white font-bold uppercase mb-0.5">VENDOR COORDINATION</div>
                      <div className="text-[4px] xl:text-[5px] text-slate-400 leading-tight">Provider network orchestration</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-1.5 bg-slate-950/60 p-1.5 rounded border border-white/5">
                    <div className="text-pink-400"><BarChart3 size={10} /></div>
                    <div>
                      <div className="text-[5px] xl:text-[6px] text-white font-bold uppercase mb-0.5">REPORTING & VISIBILITY</div>
                      <div className="text-[4px] xl:text-[5px] text-slate-400 leading-tight">Real-time enterprise analytics</div>
                    </div>
                  </div>
                </div>
                
                <div className="w-[65%] flex flex-col justify-between">
                  <div className="flex-1 border border-white/5 bg-slate-950/60 rounded p-2 relative flex flex-col">
                    <div className="text-[5px] xl:text-[6px] text-slate-400 font-bold uppercase mb-2 text-center tracking-widest">END-TO-END RSA WORKFLOW INFRASTRUCTURE</div>
                    <div className="flex justify-between items-center relative flex-1 px-4">
                      <div className="absolute top-1/2 left-8 right-8 h-[1px] bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 -translate-y-1/2 z-0 opacity-50"></div>
                      {[
                        { icon: Building2, label: "ENTERPRISE\nPARTNER" },
                        { icon: Headset, label: "24/7 RSA\nINTAKE" },
                        { icon: BrainCircuit, label: "AI DISPATCH\nCOORDINATION" },
                        { icon: Users, label: "VENDOR\nASSIGNMENT" },
                        { icon: MapPin, label: "GPS\nMONITORING" },
                        { icon: AlertTriangle, label: "ESCALATION\nMANAGEMENT" },
                        { icon: CheckCircle2, label: "RESOLUTION &\nREPORTING" }
                      ].map((step, idx) => (
                        <div key={idx} className="flex flex-col items-center z-10">
                          <div className="w-8 h-8 rounded-full border border-blue-500/50 bg-[#020617] flex items-center justify-center mb-1.5 shadow-[0_0_10px_rgba(47,128,255,0.2)]">
                            <step.icon size={12} className="text-cyan-400" />
                          </div>
                          <span className="text-[4px] xl:text-[5px] text-slate-300 font-bold text-center whitespace-pre-line">{step.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="h-10 mt-2 grid grid-cols-5 gap-2">
                    <div className="border border-white/5 bg-slate-950/60 rounded flex items-center justify-center gap-1.5 px-2">
                      <Webhook size={10} className="text-emerald-400" /><span className="text-[5px] text-white font-medium uppercase">API-FIRST<br/>INFRASTRUCTURE</span>
                    </div>
                    <div className="border border-white/5 bg-slate-950/60 rounded flex items-center justify-center gap-1.5 px-2">
                      <Lock size={10} className="text-blue-400" /><span className="text-[5px] text-white font-medium uppercase">SECURE DATA<br/>EXCHANGE</span>
                    </div>
                    <div className="border border-white/5 bg-slate-950/60 rounded flex items-center justify-center gap-1.5 px-2">
                      <Radio size={10} className="text-cyan-400" /><span className="text-[5px] text-white font-medium uppercase">REAL-TIME<br/>WEBHOOKS</span>
                    </div>
                    <div className="border border-white/5 bg-slate-950/60 rounded flex items-center justify-center gap-1.5 px-2">
                      <Key size={10} className="text-purple-400" /><span className="text-[5px] text-white font-medium uppercase">SSO & IAM<br/>INTEGRATION</span>
                    </div>
                    <div className="border border-white/5 bg-slate-950/60 rounded flex items-center justify-center gap-1.5 px-2">
                      <Database size={10} className="text-orange-400" /><span className="text-[5px] text-white font-medium uppercase">ENTERPRISE<br/>DATA LAKE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TIER 3: OPERATIONAL WORKFLOW & INTEGRATION LAYER (25%) */}
            <div className="flex-[0.25] border border-white/10 rounded-xl bg-slate-900/40 p-3 relative shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-sm">
              <div className="text-[7px] xl:text-[8px] text-slate-300 font-bold tracking-widest uppercase absolute -top-2 left-4 bg-[#020617] px-2">OPERATIONAL WORKFLOW & INTEGRATION LAYER</div>
              
              <div className="grid grid-cols-5 gap-3 h-full pt-2">
                <div className="flex flex-col border border-white/5 rounded bg-slate-950/60 p-2">
                  <div className="text-[6px] xl:text-[7px] text-white font-bold uppercase mb-2 text-center">FULL RSA WORKFLOW<br/>MANAGEMENT</div>
                  <div className="flex flex-col gap-1.5 flex-1 justify-center">
                    {["Roadside Event Intake", "Customer Coordination", "AI Dispatch Assignment", "Provider Orchestration", "Escalation Management", "Resolution Tracking", "Operational Reporting"].map((t, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <CheckCircle size={8} className="text-emerald-400" />
                        <span className="text-[5px] xl:text-[6px] text-slate-300">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col border border-white/5 rounded bg-slate-950/60 p-2">
                  <div className="text-[6px] xl:text-[7px] text-white font-bold uppercase mb-2 text-center">CALL CENTER<br/>OPERATIONS</div>
                  <img src="/callcenter-dashboard.png" className="w-full h-12 object-cover rounded opacity-80 mb-2 border border-white/10" onError={(e) => e.currentTarget.style.display = 'none'} />
                  <div className="flex flex-col gap-1 mt-auto">
                    {["24/7 Mobility Support", "Intake & Verification", "Customer Communication", "Incident Coordination"].map((t, i) => (
                      <div key={i} className="text-[5px] xl:text-[6px] text-slate-400 flex items-center gap-1"><span className="text-[#2F80FF]">{'>'}</span> {t}</div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col border border-white/5 rounded bg-slate-950/60 p-2 relative overflow-hidden">
                  <div className="text-[6px] xl:text-[7px] text-white font-bold uppercase mb-2 text-center z-10 relative">DISPATCH<br/>COORDINATION</div>
                  <div className="absolute inset-0 opacity-20 bg-[url('/map-us.png')] bg-cover bg-center mix-blend-screen" />
                  <div className="flex flex-col gap-1 mt-auto z-10 relative">
                    {["AI-Powered Routing", "Provider Matching", "Real-Time GPS Tracking", "ETAs & Status Updates"].map((t, i) => (
                      <div key={i} className="text-[5px] xl:text-[6px] text-slate-400 flex items-center gap-1"><span className="text-cyan-400">{'>'}</span> {t}</div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col border border-white/5 rounded bg-slate-950/60 p-2">
                  <div className="text-[6px] xl:text-[7px] text-white font-bold uppercase mb-2 text-center">ESCALATION<br/>MANAGEMENT</div>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="w-10 h-10 border border-red-500/30 rounded-full flex items-center justify-center bg-red-500/10 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                      <AlertTriangle size={16} className="text-red-500" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 mt-auto">
                    {["High-Priority Incidents", "Critical Event Handling", "Recovery Coordination", "Executive Escalations"].map((t, i) => (
                      <div key={i} className="text-[5px] xl:text-[6px] text-slate-400 flex items-center gap-1"><span className="text-orange-400">{'>'}</span> {t}</div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col border border-white/5 rounded bg-slate-950/60 p-2">
                  <div className="text-[6px] xl:text-[7px] text-white font-bold uppercase mb-2 text-center">REAL-TIME OPERATIONAL<br/>INTELLIGENCE</div>
                  <img src="/dashboard-charts.png" className="w-full h-12 object-cover rounded opacity-80 mb-2 border border-white/10" onError={(e) => e.currentTarget.style.display = 'none'} />
                  <div className="flex flex-col gap-1 mt-auto">
                    {["Live Event Monitoring", "Performance Analytics", "SLA & KPI Reporting", "Enterprise Dashboards"].map((t, i) => (
                      <div key={i} className="text-[5px] xl:text-[6px] text-slate-400 flex items-center gap-1"><span className="text-emerald-400">{'>'}</span> {t}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* TIER 4: DASHBOARD & KPI (15%) */}
            <div className="flex-[0.15] border border-white/10 rounded-xl bg-slate-900/40 p-3 relative shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-sm flex flex-col justify-between">
              <div className="text-[7px] xl:text-[8px] text-slate-300 font-bold tracking-widest uppercase absolute -top-2 left-4 bg-[#020617] px-2">PARTNERSHIP INTELLIGENCE DASHBOARD SYSTEM</div>
              
              <div className="grid grid-cols-6 gap-4 pt-1">
                <div>
                  <div className="text-[5px] xl:text-[6px] text-slate-500 uppercase font-bold mb-1">RSA EVENTS OVERVIEW</div>
                  <div className="text-xl xl:text-2xl font-black text-white leading-none">128,540</div>
                  <div className="text-[5px] text-emerald-400 mt-1 mb-2">+18.6% vs last month</div>
                  <div className="flex justify-between border-t border-white/10 pt-1">
                    <span className="text-[5px] text-slate-400">Completed <span className="text-white font-bold block">112,450</span></span>
                    <span className="text-[5px] text-slate-400 text-right">In Progress <span className="text-[#2F80FF] font-bold block">16,090</span></span>
                  </div>
                </div>
                <div>
                  <div className="text-[5px] xl:text-[6px] text-slate-500 uppercase font-bold mb-1">DISPATCH PERFORMANCE</div>
                  <div className="text-xl xl:text-2xl font-black text-white leading-none">02:47 <span className="text-[8px] text-slate-500">MIN</span></div>
                  <div className="text-[5px] text-emerald-400 mt-1 mb-2">-15.3% vs last month</div>
                  <div className="flex justify-between border-t border-white/10 pt-1">
                    <span className="text-[5px] text-slate-400">On-Time Arrival <span className="text-white font-bold block">95.6%</span></span>
                    <span className="text-[5px] text-slate-400 text-right">First Contact Res. <span className="text-cyan-400 font-bold block">98.2%</span></span>
                  </div>
                </div>
                <div>
                  <div className="text-[5px] xl:text-[6px] text-slate-500 uppercase font-bold mb-1">PROVIDER NETWORK</div>
                  <div className="text-xl xl:text-2xl font-black text-white leading-none">65,842</div>
                  <div className="text-[5px] text-emerald-400 mt-1 mb-2">+7.2% vs last month</div>
                  <div className="flex justify-between border-t border-white/10 pt-1">
                    <span className="text-[5px] text-slate-400">Coverage States <span className="text-white font-bold block">50</span></span>
                    <span className="text-[5px] text-slate-400 text-right">Coverage Cities <span className="text-white font-bold block">19,400+</span></span>
                  </div>
                </div>
                <div>
                  <div className="text-[5px] xl:text-[6px] text-slate-500 uppercase font-bold mb-1">ESCALATION TRACKING</div>
                  <div className="text-xl xl:text-2xl font-black text-white leading-none">2,340</div>
                  <div className="text-[5px] text-emerald-400 mt-1 mb-2">-9.8% vs last month</div>
                  <div className="flex justify-between border-t border-white/10 pt-1">
                    <span className="text-[5px] text-slate-400">Critical Events <span className="text-white font-bold block">312</span></span>
                    <span className="text-[5px] text-slate-400 text-right">Resolution Rate <span className="text-emerald-400 font-bold block">97.1%</span></span>
                  </div>
                </div>
                <div>
                  <div className="text-[5px] xl:text-[6px] text-slate-500 uppercase font-bold mb-1">CUSTOMER EXPERIENCE</div>
                  <div className="text-xl xl:text-2xl font-black text-white leading-none">4.8 <span className="text-sm text-slate-500">/ 5</span></div>
                  <div className="text-[5px] text-emerald-400 mt-1 mb-2">+0.3 vs last month</div>
                  <div className="flex justify-between border-t border-white/10 pt-1">
                    <span className="text-[5px] text-slate-400">NPS Score <span className="text-white font-bold block">78</span></span>
                    <span className="text-[5px] text-slate-400 text-right">Repeat Users <span className="text-white font-bold block">86.3%</span></span>
                  </div>
                </div>
                <div>
                  <div className="text-[5px] xl:text-[6px] text-slate-500 uppercase font-bold mb-1">MOBILITY CONTINUITY</div>
                  <div className="text-xl xl:text-2xl font-black text-[#2F80FF] leading-none">99.42%</div>
                  <div className="text-[5px] text-emerald-400 mt-1 mb-2">+0.62% vs last month</div>
                  <div className="flex justify-between border-t border-white/10 pt-1">
                    <span className="text-[5px] text-slate-400">Events Prevented <span className="text-white font-bold block">18,760</span></span>
                    <span className="text-[5px] text-slate-400 text-right">Cost Savings <span className="text-white font-bold block">$24.3M</span></span>
                  </div>
                </div>
              </div>
              
              <div className="mt-auto flex flex-col items-center">
                <div className="text-[7px] xl:text-[8px] text-slate-300 font-bold tracking-[0.2em] uppercase mb-0.5">YOUR STRATEGIC RSA OPERATIONS PARTNER</div>
                <div className="text-[5px] xl:text-[6px] text-slate-500 max-w-lg text-center">We operate as an extension of your organization, delivering enterprise-grade roadside infrastructure, operational excellence, and mobility continuity at scale.</div>
              </div>
            </div>

          </div>
        </section>
`;

let targetRegex = /<\/div>\s*\{\/\* Side dot navigation indicators \*\/\}/;
if (targetRegex.test(content)) {
    content = content.replace(targetRegex, newSlide + '      </div>\n\n      {/* Side dot navigation indicators */}');
    
    // Add to slides array
    // Find the last item in the slides array and append
    content = content.replace(
        /\{ id: 9, title: 'Advanced Recovery & Contact' \}\r?\n\];/,
        "{ id: 9, title: 'Advanced Recovery & Contact' },\n  { id: 10, title: 'Partnerships' }\n];"
    );
    
    fs.writeFileSync(file, content);
    console.log('Slide 10 added successfully');
} else {
    console.log('Could not find insert index');
}
