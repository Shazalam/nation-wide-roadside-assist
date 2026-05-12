import React from 'react';

export default function EnterpriseFooter() {
  const footerLinks = [
    {
      title: "Solutions",
      links: ["RV & Camper Support", "Fleet Management", "Commercial Heavy Duty", "Insurance Programs"]
    },
    {
      title: "Services",
      links: ["Dispatch Automation", "Vendor Network", "Mobile Technicians", "Predictive Analytics"]
    },
    {
      title: "Developers",
      links: ["API Documentation", "SDKs", "Webhooks", "System Status"]
    },
    {
      title: "Company",
      links: ["About Us", "Operations", "Careers", "Contact Enterprise"]
    }
  ];

  return (
    <footer className="bg-[#0A192F] border-t border-[rgba(255,255,255,0.08)] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold text-white tracking-tight mb-4">Nationwide Trans Inc.</h3>
            <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
              The mission-critical roadside intelligence platform for the RV and camper mobility ecosystem.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[#94A3B8] hover:text-white cursor-pointer transition-colors">
                {/* placeholder for social icon */}
                <span className="font-mono text-xs">X</span>
              </div>
              <div className="w-8 h-8 rounded bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[#94A3B8] hover:text-white cursor-pointer transition-colors">
                <span className="font-mono text-xs">in</span>
              </div>
            </div>
          </div>
          
          {footerLinks.map((column, idx) => (
            <div key={idx}>
              <h4 className="font-semibold text-white mb-6">{column.title}</h4>
              <ul className="space-y-4">
                {column.links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm text-[#94A3B8] hover:text-[#2F80FF] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-[rgba(255,255,255,0.05)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#94A3B8] text-sm">
            © 2026 Nationwide Trans Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-[#94A3B8] hover:text-white transition-colors">Legal</a>
            <a href="#" className="text-sm text-[#94A3B8] hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-sm text-[#94A3B8] hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
