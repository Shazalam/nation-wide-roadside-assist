import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Overview | Nationwide Roadside Assist',
  description: 'Enterprise presentation highlighting Nationwide Roadside Assist as a global roadside infrastructure and mobility operations platform.',
};

export default function ProjectOverviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
