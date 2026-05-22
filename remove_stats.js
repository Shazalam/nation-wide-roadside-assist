const fs = require('fs');
const file = 'c:/Users/Shahnawaz Alam/Documents/nrsa-project/nation-wide-roadside-assist/src/app/company/capability-report/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetStr = `                 <div className="absolute bottom-4 left-0 right-0 px-6 grid grid-cols-4 gap-4">
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
                 </div>`;

if (content.includes(targetStr)) {
    content = content.replace(targetStr, '');
    fs.writeFileSync(file, content);
    console.log('Removed stats block successfully.');
} else {
    console.log('Target string not found precisely. Trying a regex approach.');
    const regex = /<div className="absolute bottom-4 left-0 right-0 px-6 grid grid-cols-4 gap-4">[\s\S]*?Operations Coverage<\/div>\s*<\/div>\s*<\/div>/;
    if (regex.test(content)) {
        content = content.replace(regex, '');
        fs.writeFileSync(file, content);
        console.log('Removed stats block via regex.');
    } else {
        console.log('Could not find stats block.');
    }
}
