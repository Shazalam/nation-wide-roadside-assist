const fs = require('fs');
const file = 'c:/Users/Shahnawaz Alam/Documents/nrsa-project/nation-wide-roadside-assist/src/app/company/capability-report/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Remove the map div completely (Tier 1 right)
const mapDivStart = `              <div className="col-span-6 relative border border-white/10 rounded-xl overflow-hidden bg-slate-900/40 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                 <img src="/network-map.png" alt="Ecosystem" className="w-full h-full object-cover opacity-60 mix-blend-screen" onError={(e) => e.currentTarget.style.display = 'none'} />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>

              </div>`;

// 2. The 6-item grid + header in Tier 2
const tier2LeftStr = `              <div className="text-[7px] xl:text-[8px] text-slate-300 font-bold tracking-widest uppercase absolute -top-2 left-4 bg-[#020617] px-2">ENTERPRISE RSA ECOSYSTEM ARCHITECTURE</div>
              <div className="flex h-full gap-4 pt-2">
                <div className="w-[35%] grid grid-cols-2 grid-rows-3 gap-2">`;

// We'll replace the map div with the new Tier 1 right content
const newTier1Right = `              <div className="col-span-6 border border-white/10 rounded-xl bg-slate-900/40 p-3 relative shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-sm">
                <div className="text-[7px] xl:text-[8px] text-slate-300 font-bold tracking-widest uppercase absolute -top-2 left-4 bg-[#020617] px-2">ENTERPRISE RSA ECOSYSTEM ARCHITECTURE</div>
                <div className="grid grid-cols-2 grid-rows-3 gap-2 h-full pt-1">`;

// Now we need to extract the 6 items. They end at:
// `                  </div>\n                </div>\n                \n                <div className="w-[65%] flex flex-col justify-between">`
// Let's use string operations instead.

const startItemIndex = content.indexOf('<div className="flex items-start gap-1.5 bg-slate-950/60 p-1.5 rounded border border-white/5">');
const endItemStr = `                  </div>
                </div>
                
                <div className="w-[65%] flex flex-col justify-between">`;
const endItemIndex = content.indexOf(endItemStr);

if (startItemIndex > -1 && endItemIndex > -1) {
    const itemsContent = content.substring(startItemIndex, endItemIndex);
    
    // Create new Tier 1 Right
    const completeTier1Right = newTier1Right + '\n' + itemsContent + `                </div>\n              </div>`;
    
    // Replace map div with completeTier1Right
    let newContent = content;
    // Replace the exact map string (normalize newlines just in case)
    const mapRegex = /<div className="col-span-6 relative border border-white\/10 rounded-xl overflow-hidden bg-slate-900\/40 shadow-\[0_0_20px_rgba\(0,0,0,0\.5\)\]">[\s\S]*?<img src="\/network-map.png"[\s\S]*?<div className="absolute inset-0 bg-gradient-to-t from-\[#020617\] via-transparent to-transparent"><\/div>\s*<\/div>/;
    
    newContent = newContent.replace(mapRegex, completeTier1Right);
    
    // Now for Tier 2, we need to remove the extracted items and the w-[65%] wrapper, so it just becomes full width
    const tier2StartRegex = /<div className="flex-\[0\.25\] border border-white\/10 rounded-xl bg-slate-900\/40 p-3 relative shadow-\[0_0_15px_rgba\(0,0,0,0\.5\)\] backdrop-blur-sm">\s*<div className="text-\[7px\] xl:text-\[8px\] text-slate-300 font-bold tracking-widest uppercase absolute -top-2 left-4 bg-\[#020617\] px-2">ENTERPRISE RSA ECOSYSTEM ARCHITECTURE<\/div>\s*<div className="flex h-full gap-4 pt-2">\s*<div className="w-\[35%\] grid grid-cols-2 grid-rows-3 gap-2">/;
    
    // We want to replace from tier2StartRegex to the start of the items with just a wrapper for the End-to-end section.
    // Actually, we can just replace the whole Tier 2 wrapper.
    const tier2EndStr = `                  </div>
                </div>
              </div>
            </div>`;
    
    // Find the end of Tier 2
    // Wait, let's just use string replacement on the exact block.
    const fullTier2Regex = /\{\/\* TIER 2: RSA ECOSYSTEM ARCHITECTURE \(25%\) \*\/\}\s*<div className="flex-\[0\.25\] border border-white\/10 rounded-xl bg-slate-900\/40 p-3 relative shadow-\[0_0_15px_rgba\(0,0,0,0\.5\)\] backdrop-blur-sm">[\s\S]*?<div className="w-\[65%\] flex flex-col justify-between">\s*([\s\S]*?)\s*<\/div>\s*<\/div>\s*<\/div>/;
    
    const match = newContent.match(fullTier2Regex);
    if (match) {
        const endToEndContent = match[1];
        const newTier2 = `{/* TIER 2: RSA ECOSYSTEM ARCHITECTURE (25%) */}
            <div className="flex-[0.25] flex flex-col justify-between">
${endToEndContent}
            </div>`;
        newContent = newContent.replace(fullTier2Regex, newTier2);
        
        fs.writeFileSync(file, newContent);
        console.log("Successfully shifted to right top.");
    } else {
        console.log("Failed to match Tier 2 regex.");
    }
} else {
    console.log("Failed to find items indices.");
}
