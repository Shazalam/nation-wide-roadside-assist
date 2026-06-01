const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');

const replacements = [
  // 1. SOC 2 Type II Certified / SOC 2
  { regex: /SOC 2 Type II Certified/g, replacement: 'Enterprise-Grade Security' },
  { regex: /SOC 2 Type II/g, replacement: 'Enterprise-Grade Security' },
  { regex: /SOC 2 TYPE II/g, replacement: 'ENTERPRISE-GRADE SECURITY' },
  { regex: /SOC 2/g, replacement: 'Enterprise Security' },
  { regex: /SEC-SOC2/g, replacement: 'SEC-ENTSEC' },

  // 2. ISO 27001 Certified / ISO 27001
  { regex: /ISO 27001 Certified/g, replacement: 'Industry-Standard Security Practices' },
  { regex: /ISO 27001/g, replacement: 'Industry-Standard Security Practices' },

  // 3. PCI-DSS Security / PCI-DSS / PCI_DSS
  { regex: /PCI-DSS Security/g, replacement: 'Secure Payment Processing' },
  { regex: /PCI-DSS Certified/g, replacement: 'Secure Payment Processing' },
  { regex: /PCI-DSS/g, replacement: 'Secure Payment Processing' },
  { regex: /PCI-DSS/g, replacement: 'SECURE PAYMENT' }, // catch-all for uppercase
  { regex: /PCI_DSS/g, replacement: 'SECURE PAYMENT' },
  { regex: /FIN-PCI/g, replacement: 'FIN-PAYSEC' },

  // 4. GDPR Ready Infrastructure / GDPR Ready / GDPR
  { regex: /GDPR Ready Infrastructure/g, replacement: 'Privacy-Focused Systems' },
  { regex: /GDPR READY INFRASTRUCTURE/g, replacement: 'PRIVACY-FOCUSED SYSTEMS' },
  { regex: /GDPR Ready/g, replacement: 'Privacy-Focused' },
  { regex: /GDPR READY/g, replacement: 'PRIVACY-FOCUSED' },
  { regex: /GDPR/g, replacement: 'Privacy Compliance' },

  // 5. CCPA Compliant / CCPA
  { regex: /CCPA Compliant/g, replacement: 'Privacy-Focused Data Handling' },
  { regex: /CCPA/g, replacement: 'Privacy Controls' },

  // 6. Security Verified
  { regex: /Security Verified/g, replacement: 'Secure Operational Infrastructure' }
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  for (const rep of replacements) {
    content = content.replace(rep.regex, rep.replacement);
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

function traverseDirectory(dir) {
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      traverseDirectory(filePath);
    } else if (stat.isFile() && (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css'))) {
      processFile(filePath);
    }
  }
}

console.log('Starting compliance claims replacements...');
traverseDirectory(srcDir);
console.log('Compliance claims replacements finished successfully.');
