const fs = require('fs');
const file = 'c:/Users/Shahnawaz Alam/Documents/nrsa-project/nation-wide-roadside-assist/src/app/company/capability-report/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const slide10Start = content.indexOf('<section\n          id="slide-10"');
const slide10Str = content.substring(slide10Start, content.indexOf('</section>', slide10Start) + 10);

console.log("Slide 10 total length:", slide10Str.length);

let openDivs = 0;
let lastLines = [];

const lines = slide10Str.split('\n');
for (let i=0; i<lines.length; i++) {
    const line = lines[i];
    let pos = 0;
    
    // Count <div (without string/comment awareness, simple heuristic)
    const numOpen = (line.match(/<div/g) || []).length;
    // Count </div
    const numClose = (line.match(/<\/div>/g) || []).length;
    
    openDivs += numOpen;
    openDivs -= numClose;
    
    if (i > lines.length - 10) {
        lastLines.push(line + " // openDivs: " + openDivs);
    }
}

console.log("Final openDivs:", openDivs);
console.log(lastLines.join('\n'));
