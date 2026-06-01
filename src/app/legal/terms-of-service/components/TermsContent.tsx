'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';

const DocSection = ({ id, title, children }: { id: string, title: string, children: React.ReactNode }) => (
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

export const TermsContent = () => {
   return (
      <div className="flex-grow max-w-4xl mx-auto pb-32">
         <DocSection id="agreement-overview" title="Agreement to Our Legal Terms">
            <p className="text-brand-slate text-base leading-relaxed font-medium"><strong>Last updated May 28, 2026</strong></p>
            <p className="text-brand-slate text-base leading-relaxed font-medium mt-4">
               We are <strong>Nationwide Roadside Assist</strong> ("Company," "we," "us," or "our"), a company operating enterprise roadside assistance infrastructure, dispatch coordination systems, vendor management networks, and mobility operations services throughout the United States and Canada.
            </p>
            <p className="text-brand-slate text-base leading-relaxed font-medium mt-4">We operate the website:</p>
            <p className="text-brand-blue font-mono text-sm mt-2">
               <a href="https://www.nationwideroadsideassist.com/" className="hover:underline">https://www.nationwideroadsideassist.com/</a>
            </p>
            <p className="text-brand-slate text-base leading-relaxed font-medium mt-4">
               along with related services, APIs, dispatch platforms, enterprise integrations, operational tools, and mobility infrastructure systems (collectively, the "Services").
            </p>
            <p className="text-brand-slate text-base leading-relaxed font-medium mt-4">Our Services support:</p>
            <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
               <li>Roadside assistance operations</li>
               <li>Towing coordination</li>
               <li>Tire change assistance</li>
               <li>Fuel delivery services</li>
               <li>Battery jump-start support</li>
               <li>Vehicle lockout services</li>
               <li>Recovery and winch-out coordination</li>
               <li>Fleet support operations</li>
               <li>Vendor dispatch systems</li>
               <li>Enterprise mobility workflows</li>
               <li>Operational intelligence and reporting systems</li>
            </ul>
            <p className="text-brand-slate text-base leading-relaxed font-medium mt-6">
               By accessing or using the Services, you agree that you have read, understood, and agreed to be bound by these Terms and Conditions ("Legal Terms").
            </p>
            <p className="text-foreground dark:text-white text-base leading-relaxed font-bold mt-4 uppercase tracking-wide">
               IF YOU DO NOT AGREE WITH THESE LEGAL TERMS, YOU MUST NOT ACCESS OR USE THE SERVICES.
            </p>
         </DocSection>

         <DocSection id="table-of-contents" title="Table of Contents">
            <ol className="list-decimal list-inside text-brand-slate space-y-2 ml-4 font-medium">
               <li>Our Services</li>
               <li>Intellectual Property Rights</li>
               <li>User Representations</li>
               <li>User Registration</li>
               <li>Subscriptions & Billing</li>
               <li>Prohibited Activities</li>
               <li>User Generated Contributions</li>
               <li>Contribution License</li>
               <li>Services Management</li>
               <li>Privacy Policy</li>
               <li>Term and Termination</li>
               <li>Modifications and Interruptions</li>
               <li>Governing Law</li>
               <li>Dispute Resolution</li>
               <li>Corrections</li>
               <li>Disclaimer</li>
               <li>Limitation of Liability</li>
               <li>Indemnification</li>
               <li>User Data</li>
               <li>Electronic Communications</li>
               <li>SMS Text Messaging</li>
               <li>California Users and Residents</li>
               <li>Miscellaneous</li>
               <li>Contact Us</li>
            </ol>
         </DocSection>

         <DocSection id="our-services" title="1. Our Services">
            <p className="text-brand-slate text-base leading-relaxed font-medium">
               Nationwide Roadside Assist provides enterprise roadside assistance coordination and dispatch infrastructure throughout the USA and Canada.
            </p>
            <p className="text-brand-slate text-base leading-relaxed font-medium mt-4">Services may include:</p>
            <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
               <li>Towing dispatch</li>
               <li>Heavy-duty recovery coordination</li>
               <li>Tire change assistance</li>
               <li>Fuel delivery</li>
               <li>Mobile mechanic coordination</li>
               <li>Battery jump-start support</li>
               <li>Lockout assistance</li>
               <li>Vendor dispatch management</li>
               <li>Fleet support services</li>
               <li>Enterprise roadside operations</li>
               <li>Dispatch API systems</li>
               <li>Operational reporting platforms</li>
            </ul>
            <p className="text-brand-slate text-base leading-relaxed font-medium mt-6">
               We reserve the right to modify, suspend, or discontinue any aspect of the Services at any time.
            </p>
            <p className="text-brand-slate text-base leading-relaxed font-medium mt-4">
               Services are intended only for lawful business and consumer roadside assistance operations.
            </p>
         </DocSection>

         <DocSection id="intellectual-property" title="2. Intellectual Property Rights">
            <p className="text-brand-slate text-base leading-relaxed font-medium">
               All content, systems, software, APIs, branding, infrastructure designs, dashboards, operational workflows, graphics, text, databases, and platform technologies provided through the Services are owned by or licensed to Nationwide Roadside Assist.
            </p>
            <p className="text-brand-slate text-base leading-relaxed font-medium mt-4">This includes:</p>
            <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
               <li>Website design</li>
               <li>Dispatch systems</li>
               <li>Enterprise dashboards</li>
               <li>API infrastructure</li>
               <li>Vendor management systems</li>
               <li>Telemetry systems</li>
               <li>Visual assets</li>
               <li>Operational workflows</li>
               <li>Company branding and logos</li>
            </ul>
            <p className="text-brand-slate text-base leading-relaxed font-medium mt-6">You may not:</p>
            <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
               <li>reproduce,</li>
               <li>copy,</li>
               <li>distribute,</li>
               <li>sell,</li>
               <li>scrape,</li>
               <li>reverse engineer,</li>
               <li>or commercially exploit</li>
            </ul>
            <p className="text-brand-slate text-base leading-relaxed font-medium mt-6">
               any portion of the Services without prior written permission.
            </p>
         </DocSection>

         <DocSection id="user-representations" title="3. User Representations">
            <p className="text-brand-slate text-base leading-relaxed font-medium">By using the Services, you represent and warrant that:</p>
            <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
               <li>all information you provide is accurate,</li>
               <li>you have legal authority to use the Services,</li>
               <li>you are at least 18 years old,</li>
               <li>you will not use the Services for unlawful purposes,</li>
               <li>and your use of the Services complies with all applicable laws and regulations.</li>
            </ul>
         </DocSection>

         <DocSection id="user-registration" title="4. User Registration">
            <p className="text-brand-slate text-base leading-relaxed font-medium">Certain features may require account registration.</p>
            <p className="text-brand-slate text-base leading-relaxed font-medium mt-4">You are responsible for:</p>
            <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
               <li>maintaining account confidentiality,</li>
               <li>safeguarding login credentials,</li>
               <li>and all activities occurring under your account.</li>
            </ul>
            <p className="text-brand-slate text-base leading-relaxed font-medium mt-6">
               We reserve the right to suspend or terminate accounts at our discretion.
            </p>
         </DocSection>

         <DocSection id="subscriptions-billing" title="5. Subscriptions & Billing">
            <p className="text-brand-slate text-base leading-relaxed font-medium">
               Certain enterprise or operational services may require subscription or contractual billing arrangements.
            </p>
            <p className="text-brand-slate text-base leading-relaxed font-medium mt-4">Billing may include:</p>
            <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
               <li>recurring subscriptions,</li>
               <li>enterprise agreements,</li>
               <li>operational service charges,</li>
               <li>API usage billing,</li>
               <li>or dispatch coordination fees.</li>
            </ul>
            <p className="text-brand-slate text-base leading-relaxed font-medium mt-6">
               We reserve the right to modify pricing structures with reasonable notice.
            </p>
         </DocSection>

         <DocSection id="prohibited-activities" title="6. Prohibited Activities">
            <p className="text-brand-slate text-base leading-relaxed font-medium">You agree NOT to:</p>
            <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
               <li>misuse the Services,</li>
               <li>interfere with platform operations,</li>
               <li>attempt unauthorized access,</li>
               <li>distribute malicious software,</li>
               <li>abuse dispatch systems,</li>
               <li>scrape platform data,</li>
               <li>impersonate other users,</li>
               <li>transmit harmful content,</li>
               <li>overload infrastructure systems,</li>
               <li>violate laws or regulations,</li>
               <li>or disrupt operational workflows.</li>
            </ul>
            <p className="text-brand-slate text-base leading-relaxed font-medium mt-6">
               Unauthorized use of the Services may result in immediate termination and legal action.
            </p>
         </DocSection>

         <DocSection id="user-generated-contributions" title="7. User Generated Contributions">
            <p className="text-brand-slate text-base leading-relaxed font-medium">Users may submit:</p>
            <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
               <li>feedback,</li>
               <li>operational requests,</li>
               <li>contact form submissions,</li>
               <li>partnership inquiries,</li>
               <li>onboarding requests,</li>
               <li>or service-related communications.</li>
            </ul>
            <p className="text-brand-slate text-base leading-relaxed font-medium mt-6">
               You remain responsible for any information you submit through the Services.
            </p>
         </DocSection>

         <DocSection id="contribution-license" title="8. Contribution License">
            <p className="text-brand-slate text-base leading-relaxed font-medium">
               By submitting content or communications through the Services, you grant Nationwide Roadside Assist the right to:
            </p>
            <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
               <li>use,</li>
               <li>process,</li>
               <li>store,</li>
               <li>analyze,</li>
               <li>and operate upon</li>
            </ul>
            <p className="text-brand-slate text-base leading-relaxed font-medium mt-6">
               such submissions for operational, support, legal, and business purposes.
            </p>
         </DocSection>

         <DocSection id="services-management" title="9. Services Management">
            <p className="text-brand-slate text-base leading-relaxed font-medium">We reserve the right, but not the obligation, to:</p>
            <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
               <li>monitor the Services,</li>
               <li>remove harmful content,</li>
               <li>suspend suspicious activity,</li>
               <li>investigate operational misuse,</li>
               <li>enforce these Terms,</li>
               <li>and protect platform integrity.</li>
            </ul>
         </DocSection>

         <DocSection id="privacy-policy" title="10. Privacy Policy">
            <p className="text-brand-slate text-base leading-relaxed font-medium">
               Your use of the Services is also governed by our Privacy Policy available at:
            </p>
            <p className="text-brand-blue font-mono text-sm mt-4">
               <a href="https://www.nationwideroadsideassist.com/legal/privacy-policy" className="hover:underline">https://www.nationwideroadsideassist.com/legal/privacy-policy</a>
            </p>
            <p className="text-brand-slate text-base leading-relaxed font-medium mt-4">
               By using the Services, you consent to our data handling and operational practices described therein.
            </p>
         </DocSection>

         <DocSection id="term-termination" title="11. Term and Termination">
            <p className="text-brand-slate text-base leading-relaxed font-medium">These Legal Terms remain effective while you use the Services.</p>
            <p className="text-brand-slate text-base leading-relaxed font-medium mt-4">We reserve the right to:</p>
            <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
               <li>suspend access,</li>
               <li>terminate accounts,</li>
               <li>restrict platform usage,</li>
               <li>or deny service access</li>
            </ul>
            <p className="text-brand-slate text-base leading-relaxed font-medium mt-6">
               for violations of these Terms or applicable laws.
            </p>
         </DocSection>

         <DocSection id="modifications-interruptions" title="12. Modifications and Interruptions">
            <p className="text-brand-slate text-base leading-relaxed font-medium">
               We reserve the right to modify, update, suspend, or discontinue any portion of the Services at any time without prior notice.
            </p>
            <p className="text-brand-slate text-base leading-relaxed font-medium mt-4">
               We do not guarantee uninterrupted platform availability.
            </p>
            <p className="text-brand-slate text-base leading-relaxed font-medium mt-4">Operational interruptions may occur due to:</p>
            <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
               <li>maintenance,</li>
               <li>infrastructure upgrades,</li>
               <li>system failures,</li>
               <li>vendor outages,</li>
               <li>or external service disruptions.</li>
            </ul>
         </DocSection>

         <DocSection id="governing-law" title="13. Governing Law">
            <p className="text-brand-slate text-base leading-relaxed font-medium">
               These Legal Terms shall be governed by and interpreted under the laws of the State of California, United States, without regard to conflict-of-law principles.
            </p>
         </DocSection>

         <DocSection id="dispute-resolution" title="14. Dispute Resolution">
            <p className="text-brand-slate text-base leading-relaxed font-medium">
               Any dispute relating to the Services shall first attempt to be resolved informally.
            </p>
            <p className="text-brand-slate text-base leading-relaxed font-medium mt-4">
               If unresolved, disputes may be submitted to binding arbitration in California, United States.
            </p>
            <p className="text-brand-slate text-base leading-relaxed font-medium mt-4">
               Users waive participation in class-action lawsuits to the fullest extent permitted by law.
            </p>
         </DocSection>

         <DocSection id="corrections" title="15. Corrections">
            <p className="text-brand-slate text-base leading-relaxed font-medium">The Services may occasionally contain:</p>
            <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
               <li>typographical errors,</li>
               <li>operational inaccuracies,</li>
               <li>pricing errors,</li>
               <li>or outdated information.</li>
            </ul>
            <p className="text-brand-slate text-base leading-relaxed font-medium mt-6">
               We reserve the right to correct such errors at any time.
            </p>
         </DocSection>

         <DocSection id="disclaimer" title="16. Disclaimer">
            <p className="text-foreground dark:text-white text-base leading-relaxed font-bold uppercase mb-4 tracking-wide">
               THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE."
            </p>
            <p className="text-brand-slate text-base leading-relaxed font-medium">
               Nationwide Roadside Assist DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING:
            </p>
            <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
               <li>merchantability,</li>
               <li>fitness for a particular purpose,</li>
               <li>operational continuity,</li>
               <li>non-infringement,</li>
               <li>and uninterrupted availability.</li>
            </ul>
            <p className="text-brand-slate text-base leading-relaxed font-medium mt-6">We do not guarantee:</p>
            <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
               <li>vendor availability,</li>
               <li>towing response times,</li>
               <li>roadside arrival times,</li>
               <li>operational uptime,</li>
               <li>or uninterrupted service performance.</li>
            </ul>
         </DocSection>

         <DocSection id="limitation-of-liability" title="17. Limitation of Liability">
            <p className="text-brand-slate text-base leading-relaxed font-medium">
               To the fullest extent permitted by law, Nationwide Roadside Assist shall not be liable for:
            </p>
            <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
               <li>indirect damages,</li>
               <li>incidental damages,</li>
               <li>operational losses,</li>
               <li>lost profits,</li>
               <li>service interruptions,</li>
               <li>vendor delays,</li>
               <li>towing delays,</li>
               <li>or consequential damages</li>
            </ul>
            <p className="text-brand-slate text-base leading-relaxed font-medium mt-6">
               arising from use of the Services.
            </p>
         </DocSection>

         <DocSection id="indemnification" title="18. Indemnification">
            <p className="text-brand-slate text-base leading-relaxed font-medium">
               You agree to indemnify and hold harmless Nationwide Roadside Assist, its affiliates, partners, employees, and operational vendors from claims, damages, liabilities, losses, or expenses arising from:
            </p>
            <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
               <li>misuse of the Services,</li>
               <li>violation of these Terms,</li>
               <li>unlawful conduct,</li>
               <li>or infringement of third-party rights.</li>
            </ul>
         </DocSection>

         <DocSection id="user-data" title="19. User Data">
            <p className="text-brand-slate text-base leading-relaxed font-medium">We maintain operational and system-related data for:</p>
            <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
               <li>platform management,</li>
               <li>dispatch coordination,</li>
               <li>service optimization,</li>
               <li>analytics,</li>
               <li>fraud prevention,</li>
               <li>and enterprise operational reporting.</li>
            </ul>
            <p className="text-brand-slate text-base leading-relaxed font-medium mt-6">
               You are responsible for the accuracy of information you provide.
            </p>
         </DocSection>

         <DocSection id="electronic-communications" title="20. Electronic Communications">
            <p className="text-brand-slate text-base leading-relaxed font-medium">By using the Services, you consent to receive electronic communications including:</p>
            <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
               <li>emails,</li>
               <li>SMS notifications,</li>
               <li>dispatch updates,</li>
               <li>onboarding communications,</li>
               <li>and operational alerts.</li>
            </ul>
            <p className="text-brand-slate text-base leading-relaxed font-medium mt-6">
               Electronic communications satisfy legal requirements for written communications.
            </p>
         </DocSection>

         <DocSection id="sms-text-messaging" title="21. SMS Text Messaging">
            <h3 className="text-xl font-bold text-foreground dark:text-white mt-4 mb-4">Program Description</h3>
            <p className="text-brand-slate text-base leading-relaxed font-medium">By opting into SMS communications, you consent to receive text messages related to:</p>
            <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium mb-8">
               <li>dispatch updates,</li>
               <li>service confirmations,</li>
               <li>operational notifications,</li>
               <li>appointment reminders,</li>
               <li>and support communications.</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground dark:text-white mb-4">Opt-Out</h3>
            <p className="text-brand-slate text-base leading-relaxed font-medium">You may opt out at any time by replying:</p>
            <p className="text-foreground dark:text-white text-base leading-relaxed font-bold mt-2 mb-4 uppercase">STOP</p>
            <p className="text-brand-slate text-base leading-relaxed font-medium">You may request assistance by replying:</p>
            <p className="text-foreground dark:text-white text-base leading-relaxed font-bold mt-2 mb-8 uppercase">HELP</p>

            <h3 className="text-xl font-bold text-foreground dark:text-white mb-4">Message & Data Rates</h3>
            <p className="text-brand-slate text-base leading-relaxed font-medium">
               Message and data rates may apply depending on your carrier and mobile plan.
            </p>
         </DocSection>

         <DocSection id="california-users" title="22. California Users and Residents">
            <p className="text-brand-slate text-base leading-relaxed font-medium">
               California residents may contact the California Department of Consumer Affairs regarding unresolved complaints.
            </p>
         </DocSection>

         <DocSection id="miscellaneous" title="23. Miscellaneous">
            <p className="text-brand-slate text-base leading-relaxed font-medium">
               These Legal Terms constitute the entire agreement between you and Nationwide Roadside Assist concerning the Services.
            </p>
            <p className="text-brand-slate text-base leading-relaxed font-medium mt-4">
               Failure to enforce any provision shall not constitute a waiver of such rights.
            </p>
            <p className="text-brand-slate text-base leading-relaxed font-medium mt-4">
               If any provision is deemed invalid, remaining provisions shall remain enforceable.
            </p>
         </DocSection>

         <DocSection id="contact-us" title="24. Contact Us">
            <p className="text-brand-slate text-base leading-relaxed font-medium mb-6">If you have questions regarding these Legal Terms, please contact:</p>
            
            <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-2xl p-6 space-y-4">
               <h4 className="text-lg font-bold text-foreground dark:text-white">Nationwide Roadside Assist</h4>
               <p className="text-brand-slate text-base leading-relaxed font-medium">
                 11727 East End Ave<br />
                 Chino, CA 91710<br />
                 United States
               </p>
               <div className="pt-4 space-y-2">
                 <p className="text-brand-slate text-base font-medium">
                   <strong className="text-foreground dark:text-white">Website:</strong> <a href="https://www.nationwideroadsideassist.com/" className="text-brand-blue hover:underline">https://www.nationwideroadsideassist.com/</a>
                 </p>
                 <p className="text-brand-slate text-base font-medium">
                   <strong className="text-foreground dark:text-white">Email:</strong> <a href="mailto:kongl@nationwidetransinc.com" className="text-brand-blue hover:underline">kongl@nationwidetransinc.com</a>
                 </p>
                 <p className="text-brand-slate text-base font-medium">
                   <strong className="text-foreground dark:text-white">Phone:</strong> +1 (855) 613-3131
                 </p>
               </div>
            </div>
         </DocSection>

         <DocSection id="enterprise-notice" title="Enterprise Notice">
            <p className="text-brand-slate text-base leading-relaxed font-medium">
               Nationwide Roadside Assist operates enterprise roadside infrastructure, dispatch ecosystems, operational intelligence systems, fleet support coordination, vendor management networks, and API-driven mobility operations platforms throughout the USA and Canada.
            </p>
         </DocSection>

      </div>
   );
};
