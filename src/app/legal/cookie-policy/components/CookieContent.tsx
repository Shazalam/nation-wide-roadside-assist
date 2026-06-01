'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';

const PolicySection = ({ id, title, children }: { id: string, title: string, children: React.ReactNode }) => (
   <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="scroll-mt-40 mb-16"
   >
      <div className="flex items-center gap-3 mb-6">
         <div className="h-px w-8 bg-[#2F80FF]/30" />
         <h2 className="text-2xl font-black text-foreground dark:text-white tracking-tight uppercase">{title}</h2>
      </div>
      <GlassPanel className="p-8 lg:p-10 border-brand-border bg-card/40 space-y-6">
         {children}
      </GlassPanel>
   </motion.section>
);

export const CookieContent = () => {
   return (
      <div className="flex-grow max-w-4xl mx-auto pb-32">
        <PolicySection id="overview" title="Cookie Policy">
          <p className="text-brand-slate text-base leading-relaxed font-medium"><strong>Last updated May 28, 2026</strong></p>
          <p className="text-brand-slate text-base leading-relaxed font-medium">
            This Cookie Policy explains how <strong>Nationwide Roadside Assist</strong> ("Company", "we", "us", and "our") uses cookies and similar technologies to recognize you when you visit our website and mobility operations platform at:
          </p>
          <p className="text-brand-blue font-mono text-sm">
            <a href="https://www.nationwideroadsideassist.com/" className="hover:underline">https://www.nationwideroadsideassist.com/</a>
          </p>
          <p className="text-brand-slate text-base leading-relaxed font-medium">This Cookie Policy explains:</p>
          <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
            <li>What cookies are</li>
            <li>Why we use them</li>
            <li>How we use tracking technologies</li>
            <li>Your rights to control them</li>
            <li>How enterprise operational systems interact with analytics and platform telemetry</li>
          </ul>
          <p className="text-brand-slate text-base leading-relaxed font-medium mt-6">
            By continuing to use our platform, you agree to the use of cookies and related technologies in accordance with this Cookie Policy.
          </p>
        </PolicySection>

        <PolicySection id="what-are-cookies" title="What Are Cookies?">
          <p className="text-brand-slate text-base leading-relaxed font-medium">
            Cookies are small data files stored on your computer, tablet, or mobile device when you visit a website. Cookies are commonly used to make websites operate efficiently, improve user experience, enhance security, and provide analytical reporting.
          </p>
          <p className="text-brand-slate text-base leading-relaxed font-medium mt-6">Cookies may be:</p>
          <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
            <li><strong>First-party cookies</strong> — set directly by Nationwide Roadside Assist</li>
            <li><strong>Third-party cookies</strong> — set by external service providers, analytics vendors, advertising networks, or embedded enterprise tools</li>
          </ul>
          <p className="text-brand-slate text-base leading-relaxed font-medium mt-6">Cookies may collect information related to:</p>
          <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
            <li>Browser type</li>
            <li>Device information</li>
            <li>Geographic region</li>
            <li>Session identifiers</li>
            <li>Operational analytics</li>
            <li>API performance</li>
            <li>Dispatch workflow interactions</li>
            <li>User preferences</li>
          </ul>
        </PolicySection>

        <PolicySection id="why-use-cookies" title="Why Do We Use Cookies?">
          <p className="text-brand-slate text-base leading-relaxed font-medium">Nationwide Roadside Assist uses cookies and tracking technologies to support:</p>
          <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
            <li>Enterprise infrastructure reliability</li>
            <li>Roadside dispatch intelligence systems</li>
            <li>Vendor coordination workflows</li>
            <li>API session management</li>
            <li>Security monitoring</li>
            <li>Fraud prevention</li>
            <li>Performance optimization</li>
            <li>Customer experience enhancements</li>
          </ul>
          <p className="text-brand-slate text-base leading-relaxed font-medium mt-6">Cookies help us:</p>
          <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
            <li>Maintain secure user sessions</li>
            <li>Improve website performance</li>
            <li>Understand user interactions</li>
            <li>Optimize roadside workflows</li>
            <li>Monitor API usage</li>
            <li>Analyze operational telemetry</li>
            <li>Deliver a more efficient platform experience</li>
          </ul>
          <p className="text-brand-slate text-base leading-relaxed font-medium mt-6">
            Some cookies are strictly necessary for the operation of our services and cannot be disabled.
          </p>
        </PolicySection>

        <PolicySection id="types-of-cookies" title="Types of Cookies We Use">
          <h3 className="text-xl font-bold text-foreground dark:text-white mt-4 mb-4">1. ESSENTIAL COOKIES</h3>
          <p className="text-brand-slate text-base leading-relaxed font-medium">These cookies are required for core platform functionality.</p>
          <p className="text-brand-slate text-base leading-relaxed font-medium mt-4">Examples include:</p>
          <ul className="list-disc list-inside text-brand-slate space-y-2 mt-2 ml-4 font-medium">
            <li>Authentication sessions</li>
            <li>Security verification</li>
            <li>Load balancing</li>
            <li>API gateway routing</li>
            <li>Fraud prevention systems</li>
            <li>Enterprise login protection</li>
          </ul>
          <p className="text-brand-slate text-base leading-relaxed font-medium mt-4 mb-8">Without these cookies, portions of the platform may not function properly.</p>

          <div className="h-px w-full bg-brand-border my-8" />

          <h3 className="text-xl font-bold text-foreground dark:text-white mb-4">2. PERFORMANCE & ANALYTICS COOKIES</h3>
          <p className="text-brand-slate text-base leading-relaxed font-medium">These cookies help us understand how users interact with our infrastructure platform.</p>
          <p className="text-brand-slate text-base leading-relaxed font-medium mt-4">Examples include:</p>
          <ul className="list-disc list-inside text-brand-slate space-y-2 mt-2 ml-4 font-medium">
            <li>Page performance tracking</li>
            <li>Dispatch workflow monitoring</li>
            <li>API latency measurements</li>
            <li>User interaction reporting</li>
            <li>Operational analytics</li>
          </ul>
          <p className="text-brand-slate text-base leading-relaxed font-medium mt-4">These analytics help improve:</p>
          <ul className="list-disc list-inside text-brand-slate space-y-2 mt-2 ml-4 font-medium mb-8">
            <li>Operational efficiency</li>
            <li>Platform reliability</li>
            <li>Service performance</li>
          </ul>

          <div className="h-px w-full bg-brand-border my-8" />

          <h3 className="text-xl font-bold text-foreground dark:text-white mb-4">3. FUNCTIONAL COOKIES</h3>
          <p className="text-brand-slate text-base leading-relaxed font-medium">Functional cookies enable enhanced platform experiences such as:</p>
          <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
            <li>Saved preferences</li>
            <li>Dashboard configurations</li>
            <li>Regional settings</li>
            <li>Enterprise onboarding states</li>
            <li>Accessibility options</li>
          </ul>
          <p className="text-brand-slate text-base leading-relaxed font-medium mt-4 mb-8">These cookies improve platform usability and operational continuity.</p>

          <div className="h-px w-full bg-brand-border my-8" />

          <h3 className="text-xl font-bold text-foreground dark:text-white mb-4">4. SECURITY COOKIES</h3>
          <p className="text-brand-slate text-base leading-relaxed font-medium">Security cookies help detect and prevent:</p>
          <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
            <li>Unauthorized access</li>
            <li>Fraud attempts</li>
            <li>Malicious API requests</li>
            <li>Suspicious authentication behavior</li>
            <li>Infrastructure abuse</li>
          </ul>
          <p className="text-brand-slate text-base leading-relaxed font-medium mt-4 mb-8">These cookies support enterprise-grade platform protection and operational governance.</p>

          <div className="h-px w-full bg-brand-border my-8" />

          <h3 className="text-xl font-bold text-foreground dark:text-white mb-4">5. THIRD-PARTY COOKIES</h3>
          <p className="text-brand-slate text-base leading-relaxed font-medium">Certain third-party services integrated into the platform may place cookies for:</p>
          <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
            <li>Analytics</li>
            <li>Infrastructure monitoring</li>
            <li>Customer communication systems</li>
            <li>Embedded enterprise dashboards</li>
            <li>Operational support tools</li>
          </ul>
          <p className="text-brand-slate text-base leading-relaxed font-medium mt-4">Third-party cookies are governed by the privacy policies of their respective providers.</p>
        </PolicySection>

        <PolicySection id="how-to-control" title="How Can You Control Cookies?">
          <p className="text-brand-slate text-base leading-relaxed font-medium">You have the right to decide whether to accept or reject cookies.</p>
          <p className="text-brand-slate text-base leading-relaxed font-medium mt-4">You may control cookie preferences by:</p>
          <ul className="list-disc list-inside text-brand-slate space-y-2 mt-2 ml-4 font-medium">
            <li>Adjusting browser settings</li>
            <li>Using cookie preference banners</li>
            <li>Disabling non-essential cookies</li>
            <li>Configuring tracking permissions directly within your browser</li>
          </ul>
          <p className="text-brand-slate text-base leading-relaxed font-medium mt-6">Please note:</p>
          <p className="text-brand-slate text-base leading-relaxed font-medium mt-2">Disabling certain cookies may affect:</p>
          <ul className="list-disc list-inside text-brand-slate space-y-2 mt-2 ml-4 font-medium">
            <li>Operational functionality</li>
            <li>Authentication systems</li>
            <li>Dashboard performance</li>
            <li>API session continuity</li>
            <li>Enterprise platform features</li>
          </ul>
        </PolicySection>

        <PolicySection id="browser-management" title="Browser Cookie Management">
          <p className="text-brand-slate text-base leading-relaxed font-medium">Most web browsers allow you to control cookies through browser settings.</p>
          <p className="text-brand-slate text-base leading-relaxed font-medium mt-4">Common browser resources include:</p>
          <ul className="list-disc list-inside text-brand-slate space-y-2 mt-2 ml-4 font-medium">
            <li>Google Chrome</li>
            <li>Microsoft Edge</li>
            <li>Mozilla Firefox</li>
            <li>Safari</li>
            <li>Opera</li>
          </ul>
          <p className="text-brand-slate text-base leading-relaxed font-medium mt-6">You may configure your browser to:</p>
          <ul className="list-disc list-inside text-brand-slate space-y-2 mt-2 ml-4 font-medium">
            <li>Block cookies</li>
            <li>Delete existing cookies</li>
            <li>Notify you when cookies are used</li>
            <li>Limit tracking technologies</li>
          </ul>
          <p className="text-brand-slate text-base leading-relaxed font-medium mt-6">Please note that restricting cookies may reduce certain platform capabilities and user experience features.</p>
        </PolicySection>

        <PolicySection id="web-beacons" title="Web Beacons & Tracking Technologies">
          <p className="text-brand-slate text-base leading-relaxed font-medium">In addition to cookies, Nationwide Roadside Assist may use technologies such as:</p>
          <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
            <li>Tracking pixels</li>
            <li>Web beacons</li>
            <li>Telemetry scripts</li>
            <li>API observability tools</li>
            <li>Session analytics systems</li>
            <li>Operational monitoring technologies</li>
          </ul>
          <p className="text-brand-slate text-base leading-relaxed font-medium mt-6">These technologies help us:</p>
          <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
            <li>Measure traffic patterns</li>
            <li>Improve infrastructure performance</li>
            <li>Analyze operational efficiency</li>
            <li>Enhance enterprise reliability</li>
          </ul>
          <p className="text-brand-slate text-base leading-relaxed font-medium mt-6">These systems are used solely to support secure and efficient mobility operations.</p>
        </PolicySection>

        <PolicySection id="targeted-advertising" title="Targeted Advertising">
          <p className="text-brand-slate text-base leading-relaxed font-medium">Certain third-party providers may use cookies and tracking technologies to deliver relevant advertisements or analyze campaign effectiveness.</p>
          <p className="text-brand-slate text-base leading-relaxed font-medium mt-4">These technologies may collect limited information regarding:</p>
          <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
            <li>Browsing behavior</li>
            <li>Device interactions</li>
            <li>Referral sources</li>
            <li>Website engagement</li>
          </ul>
          <p className="text-brand-slate text-base leading-relaxed font-medium mt-6">Nationwide Roadside Assist does not use cookie data to directly identify individual users unless voluntarily provided through platform interactions.</p>
        </PolicySection>

        <PolicySection id="data-retention" title="Data Retention">
          <p className="text-brand-slate text-base leading-relaxed font-medium">Cookies remain stored for varying durations depending on their purpose.</p>
          <p className="text-brand-slate text-base leading-relaxed font-medium mt-4">Retention periods may include:</p>
          <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
            <li>Session-based durations</li>
            <li>Short-term operational storage</li>
            <li>Long-term analytical reporting</li>
          </ul>
          <p className="text-brand-slate text-base leading-relaxed font-medium mt-6">Expired cookies are automatically removed by your browser or system settings.</p>
        </PolicySection>

        <PolicySection id="enterprise-security" title="Enterprise Security & Compliance">
          <p className="text-brand-slate text-base leading-relaxed font-medium">Nationwide Roadside Assist maintains enterprise-grade security and operational governance standards.</p>
          <p className="text-brand-slate text-base leading-relaxed font-medium mt-4">Our infrastructure incorporates practices aligned with:</p>
          <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
            <li>SOC 2 Type II</li>
            <li>GDPR Readiness</li>
            <li>PCI-DSS Security Practices</li>
            <li>ISO 27001 Operational Standards</li>
            <li>Enterprise Access Control Systems</li>
            <li>Encrypted Operational Infrastructure</li>
          </ul>
          <p className="text-brand-slate text-base leading-relaxed font-medium mt-6">Cookies and telemetry systems are used responsibly to support secure operational workflows.</p>
        </PolicySection>

        <PolicySection id="policy-updates" title="Policy Updates">
          <p className="text-brand-slate text-base leading-relaxed font-medium">We may update this Cookie Policy periodically to reflect:</p>
          <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
            <li>Operational changes</li>
            <li>Technology improvements</li>
            <li>Legal requirements</li>
            <li>Infrastructure updates</li>
            <li>Regulatory compliance obligations</li>
          </ul>
          <p className="text-brand-slate text-base leading-relaxed font-medium mt-6">The "Last Updated" date at the top of this Cookie Policy reflects the latest revision.</p>
          <p className="text-brand-slate text-base leading-relaxed font-medium mt-4">We encourage users to review this Cookie Policy regularly.</p>
        </PolicySection>

        <PolicySection id="contact-information" title="Contact Information">
          <p className="text-brand-slate text-base leading-relaxed font-medium mb-6">If you have questions regarding this Cookie Policy or our use of cookies and tracking technologies, you may contact us at:</p>
          
          <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-2xl p-6 space-y-4">
            <h4 className="text-lg font-bold text-foreground dark:text-white">Nationwide Roadside Assist</h4>
            <p className="text-brand-slate text-base leading-relaxed font-medium">
              11727 East End Ave<br />
              Chino, CA 91710<br />
              United States
            </p>
            <div className="pt-4 space-y-2">
              <p className="text-brand-slate text-base font-medium">
                <strong className="text-foreground dark:text-white">Email:</strong> <a href="mailto:kongl@nationwidetransinc.com" className="text-brand-blue hover:underline">kongl@nationwidetransinc.com</a>
              </p>
              <p className="text-brand-slate text-base font-medium">
                <strong className="text-foreground dark:text-white">Website:</strong> <a href="https://www.nationwideroadsideassist.com/" className="text-brand-blue hover:underline">https://www.nationwideroadsideassist.com/</a>
              </p>
              <p className="text-brand-slate text-base font-medium">
                <strong className="text-foreground dark:text-white">Phone:</strong> +1 (855) 613-3131
              </p>
            </div>
          </div>
        </PolicySection>

        <PolicySection id="enterprise-notice" title="Enterprise Notice">
          <p className="text-brand-slate text-base leading-relaxed font-medium">
            Nationwide Roadside Assist operates enterprise roadside assistance infrastructure, dispatch intelligence systems, API integrations, roadside operational networks, fleet support ecosystems, and nationwide vendor coordination platforms.
          </p>
          <p className="text-brand-slate text-base leading-relaxed font-medium mt-4">
            Our use of cookies and related technologies is intended to support secure, reliable, and optimized enterprise mobility operations.
          </p>
        </PolicySection>

      </div>
   );
};
