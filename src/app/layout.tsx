import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { RootProvider } from "@/providers/root-provider";
import { Toaster } from 'sonner';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nationwide Roadside Assist | Enterprise Mobility Infrastructure",
  description: "Enterprise-grade dispatch, nationwide vendor coordination, and API-first technology engineered for insurers, fleets, OEMs, and roadside providers.",
  metadataBase: new URL("https://nationwideroadsideassist.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nationwide Roadside Assist | Enterprise Mobility Infrastructure",
    description: "Enterprise-grade dispatch, nationwide vendor coordination, and API-first technology engineered for insurers, fleets, OEMs, and roadside providers.",
    url: "https://nationwideroadsideassist.com",
    siteName: "Nationwide Roadside Assist",
    images: [
      {
        url: "/assets/images/landing/homepage-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Nationwide Roadside Assist - Enterprise Mobility Infrastructure",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nationwide Roadside Assist | Enterprise Mobility Infrastructure",
    description: "Enterprise-grade dispatch, nationwide vendor coordination, and API-first technology engineered for insurers, fleets, OEMs, and roadside providers.",
    images: ["/assets/images/landing/homepage-hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${ibmPlexMono.variable} antialiased selection:bg-brand-blue/30 selection:text-foreground text-white`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-background text-foreground flex flex-col"
        suppressHydrationWarning
      >
        <RootProvider>
          {children}
          <Toaster position="top-right" richColors closeButton />
        </RootProvider>
      </body>
    </html>
  );
}
