import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise Fleet & Rental Mobility Operations | Nationwide Roadside Assist',
  description: 'Real-time roadside intelligence, dispatch automation, and API-driven operational visibility for enterprise fleet and rental providers.',
};

export default function FleetRentalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
