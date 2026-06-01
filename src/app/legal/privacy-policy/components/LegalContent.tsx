'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';

const DocumentationSection = ({ id, title, children }: { id: string, title: string, children: React.ReactNode }) => (
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

export const LegalContent = () => {
  return (
    <div className="flex-grow max-w-4xl mx-auto pb-32">
      
      <DocumentationSection id="privacy-notice" title="Privacy Notice">
         <p className="text-brand-slate text-base leading-relaxed font-medium"><strong>Last updated May 28, 2026</strong></p>
         <p className="text-brand-slate text-base leading-relaxed font-medium mt-4">
            This Privacy Notice for <strong>Nationwide Roadside Assist</strong> ("Company," "we," "us," or "our") describes how and why we may access, collect, store, use, and/or share ("process") your personal information when you use our Services, including when you:
         </p>
         <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
            <li>Visit our website at <a href="https://www.nationwideroadsideassist.com/" className="text-brand-blue hover:underline">https://www.nationwideroadsideassist.com/</a></li>
            <li>Submit roadside assistance requests</li>
            <li>Contact our dispatch teams</li>
            <li>Request fleet or enterprise support</li>
            <li>Use our operational platforms or APIs</li>
            <li>Submit forms or partnership inquiries</li>
            <li>Communicate with our support teams</li>
         </ul>
         <p className="text-brand-slate text-base leading-relaxed font-medium mt-6">
            If you do not agree with this Privacy Notice, please do not use our Services.
         </p>
      </DocumentationSection>

      <DocumentationSection id="summary-of-key-points" title="Summary of Key Points">
         <p className="text-brand-slate text-base leading-relaxed font-medium mb-6">
            This summary provides key points from our Privacy Notice.
         </p>
         
         <h3 className="text-xl font-bold text-foreground dark:text-white mb-4">What personal information do we process?</h3>
         <p className="text-brand-slate text-base leading-relaxed font-medium">
            We may process personal information depending on how you interact with our Services, including:
         </p>
         <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium mb-8">
            <li>name,</li>
            <li>email address,</li>
            <li>phone number,</li>
            <li>company details,</li>
            <li>service requests,</li>
            <li>location information,</li>
            <li>dispatch-related information,</li>
            <li>and operational communications.</li>
         </ul>

         <h3 className="text-xl font-bold text-foreground dark:text-white mb-4">Do we process sensitive personal information?</h3>
         <p className="text-brand-slate text-base leading-relaxed font-medium mb-8">We do not intentionally process sensitive personal information.</p>

         <h3 className="text-xl font-bold text-foreground dark:text-white mb-4">Do we collect information from third parties?</h3>
         <p className="text-brand-slate text-base leading-relaxed font-medium">We may receive information from:</p>
         <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium mb-8">
            <li>operational vendors,</li>
            <li>roadside providers,</li>
            <li>enterprise partners,</li>
            <li>analytics providers,</li>
            <li>and public business sources.</li>
         </ul>

         <h3 className="text-xl font-bold text-foreground dark:text-white mb-4">How do we process your information?</h3>
         <p className="text-brand-slate text-base leading-relaxed font-medium">We process information to:</p>
         <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium mb-8">
            <li>provide roadside services,</li>
            <li>coordinate dispatch operations,</li>
            <li>improve operational workflows,</li>
            <li>maintain platform security,</li>
            <li>communicate with users,</li>
            <li>prevent fraud,</li>
            <li>and comply with legal obligations.</li>
         </ul>

         <h3 className="text-xl font-bold text-foreground dark:text-white mb-4">When and with whom do we share personal information?</h3>
         <p className="text-brand-slate text-base leading-relaxed font-medium">We may share information with:</p>
         <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
            <li>roadside vendors,</li>
            <li>operational partners,</li>
            <li>dispatch providers,</li>
            <li>analytics services,</li>
            <li>payment processors,</li>
            <li>and enterprise clients where necessary for service delivery.</li>
         </ul>
      </DocumentationSection>

      <DocumentationSection id="table-of-contents" title="Table of Contents">
         <ol className="list-decimal list-inside text-brand-slate space-y-2 ml-4 font-medium">
            <li>What Information Do We Collect?</li>
            <li>How Do We Process Your Information?</li>
            <li>When and With Whom Do We Share Your Information?</li>
            <li>Do We Use Cookies and Tracking Technologies?</li>
            <li>Is Your Information Transferred Internationally?</li>
            <li>How Long Do We Keep Your Information?</li>
            <li>Do We Collect Information From Minors?</li>
            <li>What Are Your Privacy Rights?</li>
            <li>Controls for Do-Not-Track Features</li>
            <li>Updates to This Notice</li>
            <li>Contact Us</li>
            <li>How Can You Review or Delete Your Data?</li>
         </ol>
      </DocumentationSection>

      <DocumentationSection id="what-info-collect" title="1. What Information Do We Collect?">
         <h3 className="text-xl font-bold text-foreground dark:text-white mt-4 mb-4">Personal Information You Disclose to Us</h3>
         <p className="text-brand-slate text-base leading-relaxed font-medium">We collect personal information that you voluntarily provide to us when you:</p>
         <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
            <li>request roadside assistance,</li>
            <li>contact dispatch teams,</li>
            <li>submit partnership inquiries,</li>
            <li>register for operational services,</li>
            <li>communicate with support teams,</li>
            <li>or use our enterprise platforms.</li>
         </ul>
         <p className="text-brand-slate text-base leading-relaxed font-medium mt-6">This information may include:</p>
         <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium mb-8">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Company name</li>
            <li>Vehicle information</li>
            <li>Dispatch location</li>
            <li>Service request details</li>
            <li>Billing information</li>
            <li>Operational notes</li>
         </ul>

         <h3 className="text-xl font-bold text-foreground dark:text-white mb-4">Information Automatically Collected</h3>
         <p className="text-brand-slate text-base leading-relaxed font-medium">We may automatically collect certain technical information including:</p>
         <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device information</li>
            <li>Operating system</li>
            <li>Geographic region</li>
            <li>Usage analytics</li>
            <li>Session identifiers</li>
            <li>API activity logs</li>
         </ul>
         <p className="text-brand-slate text-base leading-relaxed font-medium mt-6">
            This information helps maintain platform performance, security, and operational reliability.
         </p>
      </DocumentationSection>

      <DocumentationSection id="how-process-info" title="2. How Do We Process Your Information?">
         <p className="text-brand-slate text-base leading-relaxed font-medium">We process your information to:</p>
         <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
            <li>provide roadside assistance services,</li>
            <li>coordinate towing and recovery operations,</li>
            <li>dispatch roadside vendors,</li>
            <li>communicate service updates,</li>
            <li>improve operational systems,</li>
            <li>maintain security,</li>
            <li>prevent fraud,</li>
            <li>and comply with legal obligations.</li>
         </ul>
         <p className="text-brand-slate text-base leading-relaxed font-medium mt-6">We may also use information for:</p>
         <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
            <li>analytics,</li>
            <li>operational reporting,</li>
            <li>infrastructure optimization,</li>
            <li>and customer support improvements.</li>
         </ul>
      </DocumentationSection>

      <DocumentationSection id="when-with-whom-share" title="3. When and With Whom Do We Share Your Information?">
         <p className="text-brand-slate text-base leading-relaxed font-medium mb-6">We may share your information in the following situations:</p>
         
         <h3 className="text-xl font-bold text-foreground dark:text-white mb-4">Operational Vendors</h3>
         <p className="text-brand-slate text-base leading-relaxed font-medium mb-8">
            We may share service request details with roadside providers and operational vendors necessary to complete roadside assistance services.
         </p>

         <h3 className="text-xl font-bold text-foreground dark:text-white mb-4">Enterprise Partners</h3>
         <p className="text-brand-slate text-base leading-relaxed font-medium mb-8">
            We may share limited operational data with enterprise clients, fleets, insurers, or mobility partners supporting service delivery.
         </p>

         <h3 className="text-xl font-bold text-foreground dark:text-white mb-4">Service Providers</h3>
         <p className="text-brand-slate text-base leading-relaxed font-medium">We may share information with third-party providers supporting:</p>
         <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium mb-8">
            <li>analytics,</li>
            <li>cloud infrastructure,</li>
            <li>communications,</li>
            <li>dispatch systems,</li>
            <li>or payment processing.</li>
         </ul>

         <h3 className="text-xl font-bold text-foreground dark:text-white mb-4">Business Transfers</h3>
         <p className="text-brand-slate text-base leading-relaxed font-medium">
            Information may be transferred during mergers, acquisitions, or operational restructuring.
         </p>
      </DocumentationSection>

      <DocumentationSection id="cookies-tracking" title="4. Do We Use Cookies and Tracking Technologies?">
         <p className="text-brand-slate text-base leading-relaxed font-medium">Yes.</p>
         <p className="text-brand-slate text-base leading-relaxed font-medium mt-4">We may use:</p>
         <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
            <li>cookies,</li>
            <li>analytics tools,</li>
            <li>tracking pixels,</li>
            <li>telemetry systems,</li>
            <li>and operational monitoring technologies.</li>
         </ul>
         <p className="text-brand-slate text-base leading-relaxed font-medium mt-6">These technologies help us:</p>
         <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
            <li>improve performance,</li>
            <li>maintain security,</li>
            <li>monitor infrastructure,</li>
            <li>and optimize user experience.</li>
         </ul>
         <p className="text-brand-slate text-base leading-relaxed font-medium mt-6">
            Additional details are available in our Cookie Policy.
         </p>
      </DocumentationSection>

      <DocumentationSection id="international-transfer" title="5. Is Your Information Transferred Internationally?">
         <p className="text-brand-slate text-base leading-relaxed font-medium">
            Our operational infrastructure may process information in countries other than your own.
         </p>
         <p className="text-brand-slate text-base leading-relaxed font-medium mt-4">
            By using our Services, you acknowledge that information may be transferred to servers and service providers located in the United States or other regions where we operate.
         </p>
         <p className="text-brand-slate text-base leading-relaxed font-medium mt-4">
            We implement reasonable safeguards to protect your information.
         </p>
      </DocumentationSection>

      <DocumentationSection id="retention" title="6. How Long Do We Keep Your Information?">
         <p className="text-brand-slate text-base leading-relaxed font-medium">We retain personal information only as long as necessary to:</p>
         <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
            <li>provide Services,</li>
            <li>maintain operational records,</li>
            <li>comply with legal obligations,</li>
            <li>resolve disputes,</li>
            <li>and enforce agreements.</li>
         </ul>
         <p className="text-brand-slate text-base leading-relaxed font-medium mt-6">
            When information is no longer required, we securely delete or anonymize it.
         </p>
      </DocumentationSection>

      <DocumentationSection id="minors" title="7. Do We Collect Information From Minors?">
         <p className="text-brand-slate text-base leading-relaxed font-medium">No.</p>
         <p className="text-brand-slate text-base leading-relaxed font-medium mt-4">
            Our Services are not intended for individuals under 18 years of age.
         </p>
         <p className="text-brand-slate text-base leading-relaxed font-medium mt-4">
            We do not knowingly collect personal information from minors.
         </p>
      </DocumentationSection>

      <DocumentationSection id="privacy-rights" title="8. What Are Your Privacy Rights?">
         <p className="text-brand-slate text-base leading-relaxed font-medium">Depending on your jurisdiction, you may have rights to:</p>
         <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
            <li>access your data,</li>
            <li>correct inaccurate information,</li>
            <li>request deletion,</li>
            <li>withdraw consent,</li>
            <li>object to certain processing,</li>
            <li>or request data portability.</li>
         </ul>
         <p className="text-brand-slate text-base leading-relaxed font-medium mt-6">
            To exercise your rights, please contact us using the information below.
         </p>
      </DocumentationSection>

      <DocumentationSection id="dnt" title="9. Controls for Do-Not-Track Features">
         <p className="text-brand-slate text-base leading-relaxed font-medium">
            Most browsers include Do-Not-Track ("DNT") settings.
         </p>
         <p className="text-brand-slate text-base leading-relaxed font-medium mt-4">
            Because no uniform technology standard exists, we currently do not respond to DNT signals.
         </p>
      </DocumentationSection>

      <DocumentationSection id="updates" title="10. Updates to This Privacy Notice">
         <p className="text-brand-slate text-base leading-relaxed font-medium">We may update this Privacy Notice periodically to reflect:</p>
         <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
            <li>legal changes,</li>
            <li>operational updates,</li>
            <li>infrastructure modifications,</li>
            <li>or platform improvements.</li>
         </ul>
         <p className="text-brand-slate text-base leading-relaxed font-medium mt-6">
            The updated date at the top indicates the latest revision.
         </p>
      </DocumentationSection>

      <DocumentationSection id="contact-us" title="11. Contact Us">
         <p className="text-brand-slate text-base leading-relaxed font-medium mb-6">If you have questions regarding this Privacy Notice, you may contact us at:</p>
         
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
      </DocumentationSection>

      <DocumentationSection id="review-delete" title="12. How Can You Review, Update, or Delete Your Data?">
         <p className="text-brand-slate text-base leading-relaxed font-medium">You may request to:</p>
         <ul className="list-disc list-inside text-brand-slate space-y-2 mt-4 ml-4 font-medium">
            <li>review your information,</li>
            <li>update inaccurate data,</li>
            <li>or request deletion of personal information</li>
         </ul>
         <p className="text-brand-slate text-base leading-relaxed font-medium mt-6">
            by contacting us directly using the contact information provided above.
         </p>
         <p className="text-brand-slate text-base leading-relaxed font-medium mt-4">
            We will process requests in accordance with applicable privacy laws.
         </p>
      </DocumentationSection>

      <DocumentationSection id="enterprise-notice" title="Enterprise Notice">
         <p className="text-brand-slate text-base leading-relaxed font-medium">
            Nationwide Roadside Assist operates enterprise-grade roadside assistance infrastructure, dispatch coordination systems, operational intelligence platforms, vendor management networks, fleet support services, and mobility operations throughout the USA and Canada.
         </p>
      </DocumentationSection>

    </div>
  );
};
