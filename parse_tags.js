const fs = require('fs');
const file = 'c:/Users/Shahnawaz Alam/Documents/nrsa-project/nation-wide-roadside-assist/src/app/company/capability-report/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const lines = content.split('\n');
let openTags = [];

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Simplistic parser: find all <tag> and </tag> and <tag />
    const tagRegex = /<\/?([a-zA-Z0-9]+)[^>]*>/g;
    let match;
    while ((match = tagRegex.exec(line)) !== null) {
        const fullTag = match[0];
        const tagName = match[1];
        
        // Skip self-closing tags
        if (fullTag.endsWith('/>')) {
            continue;
        }
        
        // Skip img, input, br, hr, etc which are usually self-closing
        if (['img', 'input', 'br', 'hr', 'source', 'link', 'meta'].includes(tagName.toLowerCase())) {
            continue;
        }
        
        if (fullTag.startsWith('</')) {
            if (openTags.length > 0 && openTags[openTags.length - 1].name === tagName) {
                openTags.pop();
            } else {
                console.log(`Line ${i + 1}: Found closing tag </${tagName}> but expected </${openTags.length > 0 ? openTags[openTags.length - 1].name : 'NOTHING'}>`);
            }
        } else {
            openTags.push({name: tagName, line: i + 1});
        }
    }
}

console.log("Unclosed tags remaining:");
console.log(openTags);
