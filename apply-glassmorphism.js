const fs = require('fs');
const path = 'c:/Users/Shahnawaz Alam/Documents/nrsa-project/nation-wide-roadside-assist/src/app/company/capability-report/page.tsx';
let content = fs.readFileSync(path, 'utf8');

const targetContentStart = `{/* Connected Flowchart Row & Column Layout */}`;
const targetContentEnd = `{/* ── BOTTOM ROW: CORE ROADSIDE SERVICE ECOSYSTEM ── */}`;

const originalSection = content.substring(
    content.indexOf(targetContentStart),
    content.indexOf(targetContentEnd)
);

const newSection = `{/* Connected Flowchart Row & Column Layout (Glassmorphic) */}
            <div className="flex-1 flex flex-col justify-center py-2 min-h-0 relative">
              {/* Background Connector Line */}
              <div className="absolute top-[40px] left-[6%] right-[6%] h-px bg-gradient-to-r from-transparent via-[#2F80FF]/30 to-transparent z-0 hidden lg:block" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 gap-4 px-2 lg:px-6 relative z-10">
                {[
                  { icon: <AlertTriangle size={20} />, title: "ROADSIDE INCIDENT", desc: "Event triggered across fleet or customer network", theme: "orange" },
                  { icon: <Headphones size={20} />, title: "24/7 RSA INTAKE", desc: "Live intake and incident classification", theme: "cyan" },
                  { icon: <Cpu size={20} />, title: "AI DISPATCH COORDINATION", desc: "AI-powered routing and provider optimization", theme: "cyan" },
                  { icon: <UserCheck size={20} />, title: "NEAREST VENDOR ASSIGNMENT", desc: "Intelligent vendor matching based on location & skills", theme: "cyan" },
                  { icon: <Navigation size={20} />, title: "SERVICE TYPE ROUTING", desc: "Service-specific workflow and resource routing", theme: "cyan" },
                  { icon: <MapPin size={20} />, title: "GPS TRACKING & MONITORING", desc: "Live tracking and operational monitoring", theme: "cyan" },
                  { icon: <ShieldAlert size={20} />, title: "ESCALATION MANAGEMENT", desc: "Priority handling for critical incidents and recovery", theme: "cyan" },
                  { icon: <FileCheck size={20} />, title: "RESOLUTION & REPORTING", desc: "Service completion, reporting, and operational closure", theme: "emerald" }
                ].map((step, idx) => {
                  const isOrange = step.theme === 'orange';
                  const isEmerald = step.theme === 'emerald';
                  const themeColor = isOrange ? '#F97316' : isEmerald ? '#10B981' : '#2F80FF';
                  const themeClass = isOrange ? 'text-orange-400 group-hover:text-orange-400' : isEmerald ? 'text-emerald-400 group-hover:text-emerald-400' : 'text-slate-400 group-hover:text-[#2F80FF]';
                  const shadowColor = isOrange ? 'rgba(249,115,22,0.3)' : isEmerald ? 'rgba(16,185,129,0.3)' : 'rgba(47,128,255,0.3)';
                  
                  return (
                    <div key={idx} className="flex flex-col items-center text-center group relative">
                      
                      {/* Connection Indicator (To next) */}
                      {idx < 7 && (
                        <div className="absolute top-[28px] left-[50%] w-full h-px bg-white/5 hidden lg:block overflow-hidden z-0">
                           <div 
                              className="h-full w-1/2 bg-gradient-to-r from-transparent to-transparent animate-[slideRight_2.5s_linear_infinite]"
                              style={{ backgroundImage: \`linear-gradient(to right, transparent, \${themeColor}, transparent)\`, animationDelay: \`\${idx * 0.4}s\` }}
                           />
                        </div>
                      )}

                      {/* Glassmorphic Node */}
                      <div 
                        className="relative h-14 w-14 mb-4 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.4)] group-hover:-translate-y-1.5 transition-all duration-500 z-10"
                        style={{ '--hover-border': themeColor, '--hover-shadow': shadowColor }}
                      >
                        {/* Hover Styles applied via injected class or style */}
                        <div className={\`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-transparent\`} style={{ borderColor: themeColor, boxShadow: \`0 0 20px \${shadowColor}\` }} />
                        
                        <div className={\`relative z-10 transition-colors duration-500 \${themeClass}\`}>
                          {step.icon}
                        </div>
                        
                        {/* Step Number Badge */}
                        <div 
                          className="absolute -top-2 -right-2 h-5 w-5 rounded-md text-[9px] font-black flex items-center justify-center border shadow-lg"
                          style={{ backgroundColor: themeColor, borderColor: 'rgba(255,255,255,0.2)', color: '#fff', boxShadow: \`0 4px 10px \${shadowColor}\` }}
                        >
                           0{idx + 1}
                        </div>

                        {/* Inner Glow */}
                        <div 
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                          style={{ background: \`radial-gradient(circle at center, \${themeColor}20 0%, transparent 70%)\` }} 
                        />
                      </div>

                      {/* Active Telemetry Dot */}
                      <div 
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full animate-ping opacity-70"
                        style={{ backgroundColor: themeColor, animationDelay: \`\${idx * 0.3}s\` }}
                      />

                      {/* Text Content */}
                      <div className="px-1 flex flex-col h-[70px]">
                        <h3 className={\`text-[clamp(8px,0.7vw,10px)] font-black uppercase tracking-wider mb-1.5 transition-colors duration-300 leading-tight \${themeClass}\`}>
                          {step.title}
                        </h3>
                        <p className="text-[clamp(7px,0.6vw,9px)] text-slate-400/80 font-medium leading-relaxed group-hover:text-slate-300 transition-colors line-clamp-3">
                          {step.desc}
                        </p>
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          `;

content = content.replace(originalSection, newSection);

fs.writeFileSync(path, content, 'utf8');
console.log("Replaced with glassmorphic design.");
