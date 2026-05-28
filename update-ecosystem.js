const fs = require('fs');
const path = 'c:/Users/Shahnawaz Alam/Documents/nrsa-project/nation-wide-roadside-assist/src/app/company/capability-report/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Increase height of CORE ROADSIDE SERVICE ECOSYSTEM
content = content.replace(
    'className="shrink-0 flex flex-col border border-white/10 rounded-xl bg-slate-950/20 backdrop-blur-md p-3.5 h-[220px] overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.3)]"',
    'className="shrink-0 flex flex-col border border-white/10 rounded-xl bg-slate-950/20 backdrop-blur-md p-3.5 h-[260px] overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.3)]"'
);

// 2. Remove DISPATCH READY block
const dispatchReadyRegex = /\s*<div className="flex items-center justify-center gap-1\.5 mt-1\.5 text-\[7\.5px\] text-emerald-400 font-mono tracking-widest leading-none pt-1\.5 border-t border-white\/5">\s*<span className="h-1\.5 w-1\.5 rounded-full bg-emerald-400 animate-pulse shadow-\[0_0_4px_#34d399\]" \/>\s*DISPATCH READY\s*<\/div>/g;

content = content.replace(dispatchReadyRegex, '');

// Also increase the text size within the cards to fill the extra height nicely.
// The cards title uses text-[8.5px] or similar, let's find it.
const titleRegex = /<h3 className="text-\[8\.5px\] font-black text-white uppercase tracking-wider mb-1\.5 leading-tight group-hover:text-cyan-300 transition-colors">/g;
content = content.replace(titleRegex, '<h3 className="text-[10.5px] font-black text-white uppercase tracking-wider mb-2 leading-tight group-hover:text-cyan-300 transition-colors">');

const descRegex = /<p className="text-\[7\.5px\] text-slate-400 leading-relaxed font-medium line-clamp-4">/g;
content = content.replace(descRegex, '<p className="text-[9px] text-slate-400 leading-relaxed font-medium">');


fs.writeFileSync(path, content, 'utf8');
console.log('Successfully increased size and removed DISPATCH READY text');
