const fs = require('fs');
const file = 'c:/Users/Shahnawaz Alam/Documents/nrsa-project/nation-wide-roadside-assist/src/app/company/capability-report/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Match starting from the comment for SLIDE 9: RSA CALL HANDLING up to the section end before SLIDE 9: FLEET
const startRegex = /\s*\{\/\* ==================================================\r?\n\s*SLIDE 9: RSA CALL HANDLING & COORDINATION[\s\S]*?(?=\{\/\* ==================================================\r?\n\s*SLIDE 9: FLEET & ENTERPRISE SUPPORT)/;

const match = content.match(startRegex);
if (match) {
    content = content.replace(startRegex, '\n        ');
    console.log("Removed section text.");
} else {
    console.log("Could not find start string regex match.");
}

// Check if `{ id: 8, title: 'End-to-End Workflows' }` exists
if (content.includes("'End-to-End Workflows'")) {
    content = content.replace(/\s*\{\s*id:\s*8,\s*title:\s*'End-to-End Workflows'\s*\},?\r?\n/, '\n');

    // Decrement slides array IDs: 9 -> 8, 10 -> 9
    content = content.replace(/\{\s*id:\s*([9]|10|11),\s*title:\s*'([^']+)'\s*\}/g, (m, p1, p2) => `{ id: ${parseInt(p1)-1}, title: '${p2}' }`);

    // Decrement section IDs: slide-8 -> slide-7, slide-9 -> slide-8, slide-10 -> slide-9
    // Wait, the next section is currently `id="slide-8"` because I didn't decrement properly, or wait, it's slide-8.
    // Let me check. The current slide was id="slide-8".
    // So the next one should also be id="slide-8" in the file right now because they were both slide-8?
    // Let's use a function to decrement all slide-X where X >= 8.
    console.log("Updated slides array.");
} else {
    console.log("Slides array already updated or missing.");
}

// Let's decrement any id="slide-X" where X >= 8
content = content.replace(/id="slide-([8-9]|10|11)"/g, (m, p1) => `id="slide-${parseInt(p1)-1}"`);

// Decrement SLIDE comments: (e.g. SLIDE 9: FLEET -> SLIDE 8: FLEET)
// Only decrement those >= 9
content = content.replace(/SLIDE ([9]|10|11):/g, (m, p1) => {
    let num = parseInt(p1);
    return `SLIDE ${num-1}:`;
});

fs.writeFileSync(file, content);
console.log('done');
