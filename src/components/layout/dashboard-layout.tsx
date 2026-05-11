import React from 'react';
import { Navbar } from './navbar';
import { Sidebar } from './sidebar';

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen bg-brand-bg">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-grow pl-64 pt-6">
          <div className="container mx-auto px-6 py-4">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
