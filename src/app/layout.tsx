import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { RootProvider } from "@/providers/root-provider";
import { Toaster } from 'sonner';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Nationwide Roadside Assist | Enterprise Mobility Infrastructure",
  description: "Enterprise-grade dispatch, nationwide vendor coordination, and API-first technology engineered for insurers, fleets, OEMs, and roadside providers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${ibmPlexMono.variable} antialiased selection:bg-brand-blue/30 selection:text-foreground dark:text-white`}
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
