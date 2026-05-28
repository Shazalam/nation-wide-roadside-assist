const fs = require('fs');
const file = 'c:/Users/Shahnawaz Alam/Documents/nrsa-project/nation-wide-roadside-assist/src/app/company/capability-report/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace the end of the lucide-react import list
const target = `  Search
} from 'lucide-react';`;

const replacement = `  Search,
  Building2,
  BarChart3,
  CheckCircle2,
  Webhook,
  Lock,
  Key,
  Database
} from 'lucide-react';`;

if (content.includes(target)) {
    content = content.replace(target, replacement);
    fs.writeFileSync(file, content);
    console.log('Fixed imports.');
} else {
    // try with \r\n
    const target2 = `  Search\r\n} from 'lucide-react';`;
    const replacement2 = `  Search,\r\n  Building2,\r\n  BarChart3,\r\n  CheckCircle2,\r\n  Webhook,\r\n  Lock,\r\n  Key,\r\n  Database\r\n} from 'lucide-react';`;
    if (content.includes(target2)) {
        content = content.replace(target2, replacement2);
        fs.writeFileSync(file, content);
        console.log('Fixed imports with CRLF.');
    } else {
        console.log('Could not find import statement to replace.');
    }
}
