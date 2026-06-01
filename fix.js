const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('c:/Users/Shahnawaz Alam/Documents/nrsa-project/nation-wide-roadside-assist/src', function(filePath) {
  if (filePath.endsWith('CTA.tsx') || filePath.endsWith('CTASection.tsx') || filePath.endsWith('final-cta.tsx') || filePath.endsWith('CallCenterCTA.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Replace the first button text variations with 'CONTACT OUR TEAM'
    content = content.replace(/Contact (Enterprise Team|Recovery Team|Dispatch Operations|our Team|Enterprise Operations)/gi, 'CONTACT OUR TEAM');

    // Replace Request Capability Report text
    content = content.replace(/'Request Capability Report'/g, "'REQUEST CAPABILITY REPORT'");
    content = content.replace(/>Request Capability Report</g, '>REQUEST CAPABILITY REPORT<');
    
    // Check if both buttons are now using an arrow icon or >_
    // In the screenshot, the second button uses `>_`. We can replace FileText/Server with `>_` text instead of an icon,
    // but the user requested "THEN ARROW". ArrowRight is safest.
    content = content.replace(/<FileText className/g, '<ArrowRight className');
    content = content.replace(/<Server className/g, '<ArrowRight className');

    // Ensure ArrowRight is imported if we just replaced something with it
    if (original !== content && !content.includes('ArrowRight')) {
        content = content.replace(/import \{ ([^}]+) \} from 'lucide-react';/, (match, p1) => {
            return `import { ${p1}, ArrowRight } from 'lucide-react';`;
        });
    }

    if (original !== content) {
      fs.writeFileSync(filePath, content);
      console.log('Updated', filePath);
    }
  }
});
