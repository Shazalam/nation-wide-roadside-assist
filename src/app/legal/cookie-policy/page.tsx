'use client';

import React, { useState, useEffect } from 'react';
import { CookieHero } from './components/CookieHero';
import { ComplianceBar } from './components/ComplianceBar';
import { CookieContent } from './components/CookieContent';
import { CategoriesDashboard } from './components/CategoriesDashboard';
import { ConsentManager } from './components/ConsentManager';
import { AnalyticsInfrastructure } from './components/AnalyticsInfrastructure';
import { VersionTimeline } from './components/VersionTimeline';
import { PrivacyControls } from './components/PrivacyControls';
import { TrustCTA } from './components/TrustCTA';
import { MountedOnly } from '@/components/utils/mounted-only';

export default function CookiePolicyPage() {
  const [activeId, setActiveId] = useState('overview');

  useEffect(() => {
    const sections = [
      'overview', 'what-are-cookies', 'essential', 'analytics', 'performance', 
      'functional', 'marketing', 'third-party', 'consent-preferences', 
      'retention', 'browser-controls', 'gdpr-rights', 'ccpa-rights', 
      'infrastructure', 'updates', 'contact'
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
      {/* Background Mesh Overlay */}
      <div className="fixed inset-0 z-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, var(--brand-slate) 1px, transparent 0)`, backgroundSize: '48px 48px' }} />
      
      <CookieHero />
      
      <MountedOnly>
        <ComplianceBar />
        
        <div className="max-w-4xl mx-auto px-6 py-20 relative">
           <CookieContent />
        </div>

        <CategoriesDashboard />
        <ConsentManager />
        <AnalyticsInfrastructure />
        <VersionTimeline />
        <PrivacyControls />
      </MountedOnly>
      
      <TrustCTA />
    </>
  );
}
