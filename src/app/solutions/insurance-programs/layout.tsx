import React from 'react';

export default function InsuranceProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="insurance-programs-route bg-[#081120]">
      {children}
    </div>
  );
}
