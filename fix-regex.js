const fs = require('fs');
const path = 'c:/Users/Shahnawaz Alam/Documents/nrsa-project/nation-wide-roadside-assist/src/app/company/capability-report/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Fix the bad regex replacements
// The bad replacement was: text-[12px] -> text-[clamp(18px,2.5vw,28px)]
// This matched text-1, text-2, text-p, text-x.

content = content.replace(/text-\[clamp\(18px,2\.5vw,28px\)\]xl/g, 'text-2xl');
content = content.replace(/text-\[clamp\(18px,2\.5vw,28px\)\]s/g, 'text-xs');
content = content.replace(/text-\[clamp\(18px,2\.5vw,28px\)\]l/g, 'text-xl');
content = content.replace(/text-\[clamp\(18px,2\.5vw,28px\)\]rimary/g, 'text-primary');
content = content.replace(/text-\[clamp\(18px,2\.5vw,28px\)\]urple/g, 'text-purple');
content = content.replace(/text-\[clamp\(18px,2\.5vw,28px\)\]ink/g, 'text-pink');
// wait, text-10px would match text-1? text-[10px] matches correctly because I used /text-\[10px\]/g
// The only broken one was text-[12px] -> text-1, text-2, text-p, text-x
// what if there was a text-x (text-xl)? 
// text-1? Maybe text-100? No tailwind doesn't have text-1. 
// text-2? text-2xl.
// text-p? text-pink-400, text-purple-400, text-primary.

// Also, the grid replacements.
// grid-cols-12 -> grid-cols-1 lg:grid-cols-12
// But if it was run, it became: grid-cols-1 lg:grid-cols-1 lg:grid-cols-12?
// Wait, I did `\bgrid-cols-12\b` which is safe, but then my script added `lg:grid-cols-12`.
// If I ran it once, it's fine. 
// Wait, why did the build fail? Oh, the build PASSED. The problem was just that I saw a bad replacement in the code.
// Wait, if the build passed, maybe the bad Tailwind classes just didn't do anything.

// Let's also fix text-[clamp(18px,2.5vw,28px)] in general if it shouldn't be there.
// If it replaced text-1, wait. Is there text-1? No.
// Let's write this back.
fs.writeFileSync(path, content, 'utf8');
console.log("Fixed regex damage.");
