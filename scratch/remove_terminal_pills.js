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
  'src/components/fleet/fleet-api-section.tsx'
];

files.forEach(relPath => {
  const filePath = path.join(__dirname, '..', relPath);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Pattern 1: With closing tag
  content = content.replace(/<div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500\/10 border border-blue-500\/20 rounded-full mb-6">\s*<Terminal className="w-3.5.h-3.5.text-\[#2F80FF\]" \/>\s*<\/div>/g, '');
  
  // Pattern 2: Spaced closing tag
  content = content.replace(/<div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500\/10 border border-blue-500\/20 rounded-full mb-6">\s*<Terminal className="w-3.5.h-3.5.text-\[#2F80FF\]" \/>\s*<\/motion.div>/g, '');
  
  // Pattern 3: Broken closing tag or custom alignment
  content = content.replace(/<div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500\/10 border border-blue-500\/20 rounded-full mb-6">\s*<Terminal className="w-3.5.h-3.5.text-\[#2F80FF\]" \/>\s*/g, '');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Cleaned up empty pill in ${relPath}`);
  } else {
    console.log(`No change for ${relPath}`);
  }
});
