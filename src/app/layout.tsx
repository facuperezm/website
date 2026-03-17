import "@/styles/globals.css";

import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

import { siteConfig } from "@/config/site";
import { fontDisplay, fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ConsoleMessage } from "@/components/console-message";
import Layout from "@/components/main-animate";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  keywords: [
    "Senior Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Design Systems",
    "Product UI",
    "Performance",
    "Storied",
  ],
  twitter: {
    card: "summary_large_image",
    creator: "@facuperezm",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        alt: `${siteConfig.name} - ${siteConfig.title}`,
      },
    ],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Facundo Perez Montalvo",
  url: siteConfig.url,
  description: siteConfig.description,
  jobTitle: "Senior Frontend Developer",
  worksFor: {
    "@type": "Organization",
    name: "Storied",
  },
  sameAs: [
    siteConfig.links.github,
    siteConfig.links.linkedin,
    siteConfig.links.twitter,
  ],
  knowsAbout: [
    "JavaScript",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Vercel AI SDK",
    "Frontend Development",
  ],
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      id="top"
      lang="en"
      suppressHydrationWarning
      className="bg-background min-h-dvh scroll-smooth antialiased"
    >
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(jsonLd)}
        </Script>
      </head>
      <body
        className={cn(
          "font-sans selection:bg-stone-300 selection:text-stone-900 dark:selection:bg-stone-600 dark:selection:text-stone-100",
          fontDisplay.variable,
          fontSans.variable,
        )}
      >
        <Layout className="mx-auto flex min-h-dvh w-full max-w-6xl flex-col px-4 sm:px-6 lg:px-8">
          <main className="flex-1">{children}</main>
        </Layout>
        <Analytics />
        <ConsoleMessage />
      </body>
    </html>
  );
}
