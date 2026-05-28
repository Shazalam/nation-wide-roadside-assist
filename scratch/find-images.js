const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'app', 'solutions', 'project-overview', 'page.tsx');
if (!fs.existsSync(filePath)) {
  console.log('File not found:', filePath);
  process.exit(1);
}

const content = fs.readFileSync(filePath, 'utf8');
const regex = /["']\/[a-zA-Z0-9_\-\.]+\.(png|jpg|svg)["']/g;
const matches = content.match(regex);

if (matches) {
  const unique = Array.from(new Set(matches));
  console.log('Found images in page.tsx:');
  unique.forEach(img => console.log(img));
} else {
  console.log('No images found in page.tsx matching regex');
}
