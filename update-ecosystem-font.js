const fs = require('fs');
const path = 'c:/Users/Shahnawaz Alam/Documents/nrsa-project/nation-wide-roadside-assist/src/app/company/capability-report/page.tsx';
let content = fs.readFileSync(path, 'utf8');

const titleRegex = /<h3 className="text-\[10\.5px\] font-black text-white uppercase tracking-wider mb-2 leading-tight group-hover:text-cyan-300 transition-colors">/g;
content = content.replace(titleRegex, '<h3 className="text-[12px] font-black text-white uppercase tracking-wider mb-2 leading-tight group-hover:text-cyan-300 transition-colors">');

const descRegex = /<p className="text-\[9px\] text-slate-400 leading-relaxed font-medium">/g;
content = content.replace(descRegex, '<p className="text-[10.5px] text-slate-300 leading-relaxed font-medium">');

// Also, the icon might need to be slightly larger to match the font increase
const iconContainerRegex = /<div className="h-8 w-8 rounded-lg bg-slate-900\/50 border border-white\/10 flex items-center justify-center mb-3 group-hover:bg-[#2F80FF]\/20 group-hover:border-[#2F80FF]\/50 transition-all">/g;
content = content.replace(iconContainerRegex, '<div className="h-10 w-10 rounded-lg bg-slate-900/50 border border-white/10 flex items-center justify-center mb-3 group-hover:bg-[#2F80FF]/20 group-hover:border-[#2F80FF]/50 transition-all">');

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully increased ecosystem font sizes');
