const fs = require('fs');
const file = 'c:/Users/Shahnawaz Alam/Documents/nrsa-project/nation-wide-roadside-assist/src/app/company/capability-report/page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/  Building2,\r?\n  BarChart3,\r?\n  CheckCircle2,/, '  Building2,\n  CheckCircle2,');

fs.writeFileSync(file, content);
console.log('Fixed duplicate import.');
