'use client';

import React, { useState, useEffect } from 'react';
import { LegalHero } from './components/LegalHero';
import { ComplianceBar } from './components/ComplianceBar';
import { LegalContent } from './components/LegalContent';

import { TrustCTA } from './components/TrustCTA';
import { MountedOnly } from '@/components/utils/mounted-only';

export default function PrivacyPolicyPage() {
  const [activeId, setActiveId] = useState('overview');

  useEffect(() => {
    const sections = [
      'overview', 'collection', 'usage', 'fleet-data', 'api-data', 
      'cookies', 'retention', 'security', 'compliance', 'providers', 
      'user-rights', 'gdpr', 'ccpa', 'contact', 'updates'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveId(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Dynamic Background Mesh */}
      <div className="fixed inset-0 z-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, var(--brand-slate) 1px, transparent 0)`, backgroundSize: '48px 48px' }} />
      
      <LegalHero />
      
      <MountedOnly>
        <ComplianceBar />
        
        <div className="max-w-4xl mx-auto px-6 py-20 relative">
           <LegalContent />
        </div>


      </MountedOnly>
      
      <TrustCTA />
    </>
  );
}
