const fs = require('fs');
const babel = require('@babel/parser');

const file = 'c:/Users/Shahnawaz Alam/Documents/nrsa-project/nation-wide-roadside-assist/src/app/company/capability-report/page.tsx';
const content = fs.readFileSync(file, 'utf8');

try {
    babel.parse(content, {
        sourceType: 'module',
        plugins: ['jsx', 'typescript']
    });
    console.log("No syntax errors found by Babel!");
} catch (e) {
    console.error("Syntax Error at line", e.loc?.line, "column", e.loc?.column);
    console.error(e.message);
    
    // Print the lines around the error
    const lines = content.split('\n');
    const start = Math.max(0, (e.loc?.line || 1) - 5);
    const end = Math.min(lines.length, (e.loc?.line || 1) + 5);
    for (let i = start; i < end; i++) {
        console.log(`${i + 1}: ${lines[i]}`);
    }
}
