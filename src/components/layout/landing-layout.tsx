import React from 'react';
import { Navbar } from './navbar';
import { EnterpriseFooter } from '../landing/enterprise-footer';

export const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen flex flex-col bg-brand-bg">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <EnterpriseFooter />
    </div>
  );
};
