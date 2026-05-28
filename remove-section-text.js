const fs = require('fs');
const path = 'c:/Users/Shahnawaz Alam/Documents/nrsa-project/nation-wide-roadside-assist/src/app/company/capability-report/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Remove the bottom slide bar info
//      {/* Bottom slide bar info */}
//      <div className="fixed bottom-6 left-6 z-40 text-[clamp(12px,1.2vw,14px)] font-mono text-slate-500 tracking-widest uppercase hidden md:block">
//        Slide {currentSlide + 1} / {slides.length} - {slides[currentSlide].title}
//      </div>
content = content.replace(/\{\/\* Bottom slide bar info \*\/\}\s*<div[^>]*>[\s\S]*?Slide \{currentSlide \+ 1\}[^<]*<\/div>/g, '');

// 2. Remove isolated SECTION badges and text
// E.g. <span className="bg-[#2F80FF] text-white text-[clamp(8px,0.7vw,10px)] font-bold px-1.5 py-0.5 rounded">SECTION 13</span>
content = content.replace(/<span[^>]*>\s*SECTION\s+\d+\s*<\/span>/g, '');
content = content.replace(/<span[^>]*>\s*Section\s+\d+\s*<\/span>/gi, '');

// Sometimes they are part of a larger text block like:
// <h3 className="...">Section 6   Network Scale & Provider Ecosystem</h3>
content = content.replace(/Section\s+\d+\s*\|?\s*/gi, '');

// Example: SECTION 7 | CORE ROADSIDE SERVICES -> CORE ROADSIDE SERVICES
// Example: SECTION 8 | CLASS 1-8 VEHICLE SUPPORT -> CLASS 1-8 VEHICLE SUPPORT
// Example: Section 6   Network Scale... -> Network Scale...
content = content.replace(/SECTION\s+\d+\s*\|\s*/g, '');
content = content.replace(/SECTION\s+\d+\s*/g, '');

// Write back
fs.writeFileSync(path, content, 'utf8');
console.log("Removed section text and slide numbers.");
