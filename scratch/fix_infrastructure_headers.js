const fs = require('fs');
const path = require('path');

const files = [
  'src/app/solutions/rv-camper-support/APIInfrastructure.tsx',
  'src/app/solutions/commercial-vehicle-recovery/APIInfrastructure.tsx',
  'src/app/solutions/enterprise-dispatch-solutions/components/APIInfrastructure.tsx',
  'src/app/services/vendor-coordination/components/APIInfrastructure.tsx',
  'src/app/services/trip-continuation/components/APIInfrastructure.tsx',
  'src/app/services/roadside-assistance/components/AssistanceAPI.tsx',
  'src/app/services/tire-change-assistance/components/TireAPI.tsx',
  'src/app/services/recovery-winchouts/components/APIInfrastructure.tsx',
  'src/components/fleet/fleet-api-section.tsx',
  'src/app/solutions/insurance-programs/components/APIInfrastructure.tsx'
];

files.forEach(relPath => {
  const filePath = path.join(__dirname, '..', relPath);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Let's match the section header block
  const regex = /<div className="max-w-4xl mb-(16|8)">\s*(?:<span[^>]*>[^]*?<\/span>\s*<\/div>\s*)?<h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">([^]*?)<\/h2>\s*<p className="text-brand-slate text-lg max-w-3xl">([^]*?)<\/p>\s*<\/div>/g;

  content = content.replace(regex, (match, mb, h2, p) => {
    return `<div className="max-w-4xl mb-${mb}">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">${h2.trim()}</h2>
          <p className="text-brand-slate text-lg max-w-3xl">${p.trim()}</p>
        </div>`;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Successfully healed header in ${relPath}`);
  } else {
    // Try matching if the span/div was already removed but it still has unmatched tags
    console.log(`No pattern match with regex for ${relPath}, attempting fallback...`);
    
    // Fallback: manually find the text of h2 and p if there's any header-like structure
    const fallbackRegex = /<div className="max-w-4xl mb-(16|8)">\s*<h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">([^]*?)<\/h2>\s*<p className="text-brand-slate text-lg max-w-3xl">([^]*?)<\/p>\s*<\/div>/g;
    content = content.replace(fallbackRegex, (match, mb, h2, p) => {
      return `<div className="max-w-4xl mb-${mb}">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">${h2.trim()}</h2>
          <p className="text-brand-slate text-lg max-w-3xl">${p.trim()}</p>
        </div>`;
    });
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Healed header with fallback in ${relPath}`);
    } else {
      console.log(`Failed to heal header in ${relPath}`);
    }
  }
});
