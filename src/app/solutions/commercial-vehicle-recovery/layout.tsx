import React from 'react';

export default function CommercialRecoveryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="commercial-recovery-route bg-brand-bg">
      {children}
    </div>
  );
}
