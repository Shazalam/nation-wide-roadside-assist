const fs = require('fs');
const file = 'c:/Users/Shahnawaz Alam/Documents/nrsa-project/nation-wide-roadside-assist/src/app/company/capability-report/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Card 1
const card1Target = `<div className="text-[8px] xl:text-[10px] text-white font-bold uppercase mb-2 text-center">FULL RSA WORKFLOW<br/>MANAGEMENT</div>
                  <div className="flex flex-col gap-1.5 flex-1 justify-center">`;
const card1Replace = `<div className="text-[8px] xl:text-[10px] text-white font-bold uppercase mb-2 text-center">FULL RSA WORKFLOW<br/>MANAGEMENT</div>
                  <img src="/workflow-management.png" className="w-full h-12 object-cover rounded opacity-80 mb-2 border border-white/10" onError={(e) => e.currentTarget.style.display = 'none'} />
                  <div className="flex flex-col gap-1.5 flex-1 mt-auto">`;

// Card 3
const card3Target = `<div className="text-[8px] xl:text-[10px] text-white font-bold uppercase mb-2 text-center z-10 relative">DISPATCH<br/>COORDINATION</div>
                  <div className="absolute inset-0 opacity-20 bg-[url('/map-us.png')] bg-cover bg-center mix-blend-screen" />
                  <div className="flex flex-col gap-1 mt-auto z-10 relative">`;
const card3Replace = `<div className="text-[8px] xl:text-[10px] text-white font-bold uppercase mb-2 text-center">DISPATCH<br/>COORDINATION</div>
                  <img src="/dispatch-coordination-map.png" className="w-full h-12 object-cover rounded opacity-80 mb-2 border border-white/10" onError={(e) => e.currentTarget.style.display = 'none'} />
                  <div className="flex flex-col gap-1 mt-auto">`;

// Card 4
const card4Target = `<div className="text-[8px] xl:text-[10px] text-white font-bold uppercase mb-2 text-center">ESCALATION<br/>MANAGEMENT</div>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="w-10 h-10 border border-red-500/30 rounded-full flex items-center justify-center bg-red-500/10 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                      <AlertTriangle size={16} className="text-red-500" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 mt-auto">`;
const card4Replace = `<div className="text-[8px] xl:text-[10px] text-white font-bold uppercase mb-2 text-center">ESCALATION<br/>MANAGEMENT</div>
                  <img src="/escalation-management.png" className="w-full h-12 object-cover rounded opacity-80 mb-2 border border-white/10" onError={(e) => e.currentTarget.style.display = 'none'} />
                  <div className="flex flex-col gap-1 mt-auto">`;

content = content.replace(card1Target, card1Replace);
content = content.replace(card3Target, card3Replace);
content = content.replace(card4Target, card4Replace);

content = content.replace(
  'p-3 relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:border-white/20 transition-colors duration-300"',
  'p-3 shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:border-white/20 transition-colors duration-300"'
);

fs.writeFileSync(file, content);
console.log('Tier 3 updated with images');
