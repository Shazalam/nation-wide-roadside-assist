const fs = require('fs');
const file = 'c:/Users/Shahnawaz Alam/Documents/nrsa-project/nation-wide-roadside-assist/src/app/company/capability-report/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// The lines look like:
//   Building2,
//   CheckCircle2,
//   Webhook,
//   Lock,
//   Key,
//   Database
// } from 'lucide-react';

content = content.replace(/  CheckCircle2,\r?\n/, '');
// For Database it's at the end
content = content.replace(/  Key,\r?\n  Database\r?\n\} from 'lucide-react';/, "  Key\n} from 'lucide-react';");

fs.writeFileSync(file, content);
console.log('Fixed duplicate CheckCircle2 and Database imports.');
