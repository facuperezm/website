import "@/styles/globals.css";

import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";

import { siteConfig } from "@/config/site";
import { fontDisplay, fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";
import Layout from "@/components/main-animate";
import Profile from "@/components/profile";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  twitter: {
    card: "summary_large_image",
    creator: "@facuperezm",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
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
      <body
        className={cn(
          "font-sans selection:bg-stone-300 selection:text-stone-900 dark:selection:bg-stone-600 dark:selection:text-stone-100",
          fontDisplay.variable,
          fontSans.variable,
        )}
      >
        <Layout className="mx-auto flex min-h-dvh max-w-lg flex-col px-6 md:px-8">
          <main className="flex-1">
            <Profile />
            {children}
          </main>
          <Footer />
        </Layout>
        <Analytics />
      </body>
    </html>
  );
}
