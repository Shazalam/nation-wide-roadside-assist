const fs = require('fs');
const path = 'c:/Users/Shahnawaz Alam/Documents/nrsa-project/nation-wide-roadside-assist/src/app/company/capability-report/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Decrease all clamp() values uniformly
// Currently: 
// clamp(10px,1vw,14px) -> originally text-[4px], text-[5px]
// clamp(12px,1.2vw,16px) -> originally text-[6px], text-[7px]
// clamp(14px,1.5vw,20px) -> originally text-[8px], text-[9px]
// clamp(16px,2vw,24px) -> originally text-[10px], text-[11px]
// clamp(18px,2.5vw,28px) -> originally text-[12px]
// clamp(20px,3vw,32px) -> originally text-[14px], text-[15px]

// We will reduce them significantly to preserve the dashboard feel while keeping them slightly responsive.
// clamp(6px,0.5vw,8px)
// clamp(8px,0.7vw,10px)
// clamp(10px,0.9vw,12px)
// clamp(12px,1.2vw,14px)
// clamp(14px,1.5vw,18px)
// clamp(16px,1.8vw,20px)

content = content.replace(/clamp\(10px,1vw,14px\)/g, 'clamp(6px,0.5vw,8px)');
content = content.replace(/clamp\(12px,1\.2vw,16px\)/g, 'clamp(8px,0.7vw,10px)');
content = content.replace(/clamp\(12px,1\.2vw,18px\)/g, 'clamp(8px,0.7vw,10px)');
content = content.replace(/clamp\(12px,1\.4vw,18px\)/g, 'clamp(8px,0.7vw,10px)');
content = content.replace(/clamp\(14px,1\.5vw,20px\)/g, 'clamp(10px,0.9vw,12px)');
content = content.replace(/clamp\(16px,2vw,24px\)/g, 'clamp(12px,1.2vw,14px)');
content = content.replace(/clamp\(18px,2\.5vw,28px\)/g, 'clamp(14px,1.5vw,18px)');
content = content.replace(/clamp\(20px,3vw,32px\)/g, 'clamp(16px,1.8vw,20px)');

fs.writeFileSync(path, content, 'utf8');
console.log("Decreased font sizes.");
