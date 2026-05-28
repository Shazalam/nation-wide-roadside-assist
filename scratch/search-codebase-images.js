const fs = require('fs');
const path = require('path');

function searchDir(dir, filesToCheck) {
  const list = fs.readdirSync(dir);
  for (const item of list) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (item !== 'node_modules' && item !== '.next' && item !== '.git') {
        searchDir(fullPath, filesToCheck);
      }
    } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.css'))) {
      const content = fs.readFileSync(fullPath, 'utf8');
      for (const file of filesToCheck) {
        if (content.includes(file)) {
          console.log(`Found reference to ${file} in ${fullPath}`);
        }
      }
    }
  }
}

const publicDir = path.join(__dirname, '..', 'public');
const filesToCheck = fs.readdirSync(publicDir).filter(f => f.endsWith('.png') || f.endsWith('.jpg'));

console.log('Searching codebase for public image references...');
searchDir(path.join(__dirname, '..', 'src'), filesToCheck);
console.log('Done searching.');
