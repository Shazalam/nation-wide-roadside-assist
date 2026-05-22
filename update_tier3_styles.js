const fs = require('fs');
const file = 'c:/Users/Shahnawaz Alam/Documents/nrsa-project/nation-wide-roadside-assist/src/app/company/capability-report/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const startStr = '{/* TIER 3: OPERATIONAL WORKFLOW & INTEGRATION LAYER (25%) */}';
const startIdx = content.indexOf(startStr);
const endIdx = content.indexOf('</section>', startIdx);

if (startIdx === -1 || endIdx === -1) throw new Error("Could not find Tier 3 bounds");

let tier3 = content.substring(startIdx, endIdx);

// Cards
tier3 = tier3.replace(/className="flex flex-col border border-white\/5 rounded bg-slate-950\/60 p-2"/g, 'className="flex flex-col border border-white/10 rounded-xl bg-slate-900/40 backdrop-blur-md bg-gradient-to-br from-white/5 to-transparent p-3 shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:border-white/20 transition-colors duration-300"');
tier3 = tier3.replace(/className="flex flex-col border border-white\/5 rounded bg-slate-950\/60 p-2 relative overflow-hidden"/g, 'className="flex flex-col border border-white/10 rounded-xl bg-slate-900/40 backdrop-blur-md bg-gradient-to-br from-white/5 to-transparent p-3 relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:border-white/20 transition-colors duration-300"');

// Titles
tier3 = tier3.replace(/text-\[6px\] xl:text-\[7px\]/g, 'text-[8px] xl:text-[10px]');

// Lists
tier3 = tier3.replace(/text-\[5px\] xl:text-\[6px\]/g, 'text-[7px] xl:text-[8px]');

content = content.substring(0, startIdx) + tier3 + content.substring(endIdx);
fs.writeFileSync(file, content);
console.log('Tier 3 updated');
