const fs = require('fs');
const file = 'c:/Users/Shahnawaz Alam/Documents/nrsa-project/nation-wide-roadside-assist/src/app/company/capability-report/page.tsx';
let content = fs.readFileSync(file, 'utf8');
const lines = content.split('\n');

// 1-indexed lines
const startLine = 2601;
const endLine = 2666;

lines.splice(startLine - 1, endLine - startLine + 1);

fs.writeFileSync(file, lines.join('\n'));
console.log('Removed TIER 4 block successfully.');
