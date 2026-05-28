const fs = require('fs');
const file = 'c:/Users/Shahnawaz Alam/Documents/nrsa-project/nation-wide-roadside-assist/src/app/company/capability-report/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Remove the section
content = content.replace(/\s*\{\/\* ==================================================\r?\n\s*SLIDE 5: GLOBAL & NATIONWIDE COVERAGE[\s\S]*?<\/section>/, '');

// Remove { id: 4, title: 'Global Coverage' },
content = content.replace(/\s*\{\s*id:\s*4,\s*title:\s*'Global Coverage'\s*\},\r?\n/, '\n');

// Decrement slides array IDs:
content = content.replace(/\{\s*id:\s*([5-9]|10|11),\s*title:\s*'([^']+)'\s*\}/g, (match, p1, p2) => `{ id: ${parseInt(p1)-1}, title: '${p2}' }`);

// Decrement section IDs:
content = content.replace(/id="slide-([5-9]|10|11)"/g, (match, p1) => `id="slide-${parseInt(p1)-1}"`);

// Decrement SLIDE comments: (e.g. SLIDE 6: -> SLIDE 5:)
content = content.replace(/SLIDE ([6-9]|10|11|12):/g, (match, p1) => `SLIDE ${parseInt(p1)-1}:`);

fs.writeFileSync(file, content);
console.log('done');
