const fs = require('fs');
const file = 'c:/Users/Shahnawaz Alam/Documents/nrsa-project/nation-wide-roadside-assist/src/app/company/capability-report/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const target = `<div className="flex justify-between items-center relative flex-1 px-4">
                      <div className="absolute top-1/2 left-8 right-8 h-[1px] bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 -translate-y-1/2 z-0 opacity-50"></div>
                      {[
                        { icon: Building2, label: "ENTERPRISE\\nPARTNER" },
                        { icon: Headset, label: "24/7 RSA\\nINTAKE" },
                        { icon: BrainCircuit, label: "AI DISPATCH\\nCOORDINATION" },
                        { icon: Users, label: "VENDOR\\nASSIGNMENT" },
                        { icon: MapPin, label: "GPS\\nMONITORING" },
                        { icon: AlertTriangle, label: "ESCALATION\\nMANAGEMENT" },
                        { icon: CheckCircle2, label: "RESOLUTION &\\nREPORTING" }
                      ].map((step, idx) => (
                        <div key={idx} className="flex flex-col items-center z-10">
                          <div className="w-8 h-8 rounded-full border border-blue-500/50 bg-[#020617] flex items-center justify-center mb-1.5 shadow-[0_0_10px_rgba(47,128,255,0.2)]">
                            <step.icon size={12} className="text-cyan-400" />
                          </div>
                          <span className="text-[4px] xl:text-[5px] text-slate-300 font-bold text-center whitespace-pre-line">{step.label}</span>
                        </div>
                      ))}
                    </div>`;

const replacement = `<div className="flex justify-between items-center relative flex-1 px-4 mt-2 pb-2">
                      {/* Primary Pipeline Trace */}
                      <div className="absolute top-5 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-[#2F80FF]/40 to-transparent z-0" />
                      
                      {[
                        { icon: Building2, label: "ENTERPRISE\\nPARTNER", num: '1', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80' },
                        { icon: Headset, label: "24/7 RSA\\nINTAKE", num: '2', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80' },
                        { icon: BrainCircuit, label: "AI DISPATCH\\nCOORDINATION", num: '3', image: 'https://images.unsplash.com/photo-1551288049-bbbda536ad0a?auto=format&fit=crop&q=80' },
                        { icon: Users, label: "VENDOR\\nASSIGNMENT", num: '4', image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80' },
                        { icon: MapPin, label: "GPS\\nMONITORING", num: '5', image: 'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?auto=format&fit=crop&q=80' },
                        { icon: AlertTriangle, label: "ESCALATION\\nMANAGEMENT", num: '6', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80' },
                        { icon: CheckCircle2, label: "RESOLUTION &\\nREPORTING", num: '7', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80' }
                      ].map((step, idx) => (
                        <div key={idx} className="flex flex-col items-center z-10 group relative cursor-default">
                           {/* Floating Visual Preview */}
                           <div className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full w-24 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-30">
                              <div className="relative p-1 bg-slate-900/90 backdrop-blur-md border border-[#2F80FF]/40 rounded-lg shadow-xl overflow-hidden group-hover:-translate-y-1 transition-transform duration-300">
                                 <div className="h-12 w-full rounded-md overflow-hidden relative border border-white/10">
                                    <div className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-70 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundImage: \`url(\${step.image})\` }} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent opacity-80" />
                                 </div>
                              </div>
                              {/* Anchor Arrow */}
                              <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-[#2F80FF]/40 mx-auto" />
                           </div>

                          {/* The Node Bubble */}
                          <div className="relative w-10 h-10 bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center mb-1.5 shadow-[0_4px_15px_rgba(0,0,0,0.3)] group-hover:border-[#2F80FF]/60 group-hover:shadow-[0_0_20px_rgba(47,128,255,0.4)] group-hover:-translate-y-1 transition-all duration-300 z-10">
                            <step.icon size={16} className="text-slate-400 group-hover:text-[#2F80FF] transition-colors" />
                            
                            {/* Step Number */}
                            <div className="absolute -top-1.5 -right-1.5 h-3.5 w-3.5 rounded bg-[#2F80FF] text-white flex items-center justify-center text-[7px] font-black border border-white/20 shadow-md">
                               {step.num}
                            </div>
                            {/* Inner Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#2F80FF]/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>

                          {/* Active Telemetry Dot */}
                          <div className="absolute top-[38px] left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-[#2F80FF]/50 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />

                          <span className="text-[4.5px] xl:text-[5.5px] text-slate-400 font-bold text-center whitespace-pre-line group-hover:text-[#2F80FF] transition-colors mt-1">{step.label}</span>
                        </div>
                      ))}
                    </div>`;

content = content.replace(target, replacement);

fs.writeFileSync(file, content);
console.log('Tier 2 timeline updated');`;
