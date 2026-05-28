const fs = require('fs');
const file = 'c:/Users/Shahnawaz Alam/Documents/nrsa-project/nation-wide-roadside-assist/src/app/company/capability-report/page.tsx';
let content = fs.readFileSync(file, 'utf8');

let counter = 0;
// Re-number id="slide-X"
content = content.replace(/id="slide-\d+"/g, () => `id="slide-${counter++}"`);

// Re-number slides array
let slideCounter = 0;
content = content.replace(/\{\s*id:\s*\d+,\s*title:/g, () => `{ id: ${slideCounter++}, title:`);

fs.writeFileSync(file, content);
console.log('Fixed IDs. Total slides:', counter);
