const fs = require('fs');
const path = 'c:/Users/Shahnawaz Alam/Documents/nrsa-project/nation-wide-roadside-assist/src/app/company/capability-report/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Typography Replacements
// We map text-[Xpx] and optionally xl:text-[Ypx] to clamp values.
// We'll use regex to match single text-[Xpx] and pairs.

// First, handle the pairs: text-[Xpx] xl:text-[Ypx]
const typographyPairs = [
  { regex: /text-\[4px\] xl:text-\[5px\]/g, replacement: 'text-[clamp(10px,1vw,14px)]' },
  { regex: /text-\[5px\] xl:text-\[6px\]/g, replacement: 'text-[clamp(10px,1vw,14px)]' },
  { regex: /text-\[6px\] xl:text-\[7px\]/g, replacement: 'text-[clamp(12px,1.2vw,16px)]' },
  { regex: /text-\[7px\] xl:text-\[8px\]/g, replacement: 'text-[clamp(12px,1.2vw,16px)]' },
  { regex: /text-\[6px\] xl:text-\[8px\]/g, replacement: 'text-[clamp(12px,1.2vw,18px)]' },
  { regex: /text-\[7px\] xl:text-\[9px\]/g, replacement: 'text-[clamp(12px,1.4vw,18px)]' },
  { regex: /text-\[8px\] xl:text-\[10px\]/g, replacement: 'text-[clamp(14px,1.5vw,20px)]' },
  { regex: /text-\[9px\] xl:text-\[11px\]/g, replacement: 'text-[clamp(14px,1.5vw,20px)]' },
  { regex: /text-\[10px\] xl:text-\[12px\]/g, replacement: 'text-[clamp(16px,2vw,24px)]' },
  { regex: /text-\[12px\] xl:text-\[14px\]/g, replacement: 'text-[clamp(18px,2.5vw,28px)]' },
  { regex: /text-\[14px\] xl:text-\[16px\]/g, replacement: 'text-[clamp(20px,3vw,32px)]' },
];

for (const pair of typographyPairs) {
  content = content.replace(pair.regex, pair.replacement);
}

// Then handle singles that didn't match the pairs
const typographySingles = [
  { regex: /text-\[4px\]/g, replacement: 'text-[clamp(10px,1vw,14px)]' },
  { regex: /text-\[5px\]/g, replacement: 'text-[clamp(10px,1vw,14px)]' },
  { regex: /text-\[6px\]/g, replacement: 'text-[clamp(12px,1.2vw,16px)]' },
  { regex: /text-\[7px\]/g, replacement: 'text-[clamp(12px,1.2vw,16px)]' },
  { regex: /text-\[8px\]/g, replacement: 'text-[clamp(14px,1.5vw,20px)]' },
  { regex: /text-\[9px\]/g, replacement: 'text-[clamp(14px,1.5vw,20px)]' },
  { regex: /text-\[10px\]/g, replacement: 'text-[clamp(16px,2vw,24px)]' },
  { regex: /text-\[11px\]/g, replacement: 'text-[clamp(16px,2vw,24px)]' },
  { regex: /text-[12px]/g, replacement: 'text-[clamp(18px,2.5vw,28px)]' },
  { regex: /text-\[14px\]/g, replacement: 'text-[clamp(20px,3vw,32px)]' },
  { regex: /text-\[15px\]/g, replacement: 'text-[clamp(20px,3vw,32px)]' },
];

for (const single of typographySingles) {
  content = content.replace(single.regex, single.replacement);
}

// 2. Responsive Slide Layouts
// Replace slide wrappers
content = content.replace(/h-screen w-screen snap-start/g, 'min-h-[100dvh] h-auto lg:h-screen w-full snap-start');

// 3. Responsive Grids
// To safely replace grids, we look for grid-cols-X and add lg: prefix, and add grid-cols-1 or appropriate mobile grid.
// E.g., grid-cols-12 -> grid-cols-1 lg:grid-cols-12
content = content.replace(/\bgrid-cols-12\b/g, 'grid-cols-1 lg:grid-cols-12');
content = content.replace(/\bgrid-cols-5\b/g, 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-5');
content = content.replace(/\bgrid-cols-4\b/g, 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4');
content = content.replace(/\bgrid-cols-3\b/g, 'grid-cols-1 md:grid-cols-3');
content = content.replace(/\bgrid-cols-7\b/g, 'grid-cols-1 md:grid-cols-3 lg:grid-cols-7');

// 4. Flex Adjustments for sections
// There are many flex-[0.X] containers inside flex-col wrappers. 
// E.g. flex-[0.35]
// If a mobile layout is h-auto, flex-[X] will just shrink unless we add shrink-0 or min-h
// Let's replace flex-\[(0\.\d+)\] with 'flex-[$1] shrink-0 min-h-[min-content]'
// Actually, it's better to just leave them but ensure they don't squash. We can add shrink-0.
content = content.replace(/flex-\[0\.(\d+)\]/g, 'flex-[0.$1] shrink-0 min-h-min');

// Some flex-row containers need to stack on mobile
// But replacing all flex with flex-col lg:flex-row is dangerous because some flex are meant to be horizontal always (e.g. icon + text).
// We'll target specific large structural flex containers later manually or via targeted regex.
// E.g., `<div className="flex justify-between` -> `<div className="flex flex-col lg:flex-row justify-between`
// Wait, that might break headers. Let's do manual replace for flex directions where needed.

fs.writeFileSync(path, content, 'utf8');
console.log("Refactoring complete.");
