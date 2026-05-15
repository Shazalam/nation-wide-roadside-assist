import React from 'react';

export default function InsuranceProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="insurance-programs-route bg-brand-bg">
      {children}
    </div>
  );
}
