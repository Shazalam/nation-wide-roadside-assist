import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nationwideroadsideassist.com';
  
  const routes = [
    '',
    '/company/overview',
    '/company/capability-report',
    '/company/contact',
    '/solutions/insurance-programs',
    '/solutions/fleet-rental-operations',
    '/solutions/rv-camper-support',
    '/solutions/commercial-vehicle-recovery',
    '/solutions/enterprise-dispatch-solutions',
    '/services/roadside-assistance',
    '/services/heavy-duty-towing',
    '/services/medium-light-duty-towing',
    '/services/tire-change-assistance',
    '/services/mobile-repairs',
    '/services/recovery-winchouts',
    '/services/trip-continuation',
    '/services/vendor-coordination',
    '/operations/24-7-dispatch-center',
    '/operations/vendor-network',
    '/operations/call-center-operations',
    '/legal/privacy-policy',
    '/legal/terms-of-service',
    '/legal/cookie-policy',
    '/legal/trust',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));
}
