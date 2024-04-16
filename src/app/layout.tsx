import "@/styles/globals.css";

import type { Metadata, Viewport } from "next";
import PlausibleProvider from "next-plausible";

import { siteConfig } from "@/config/site";
import { fontSans, fontSerif } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/footer-component";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: `${siteConfig.name} - ${siteConfig.title}`,
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Frontend",
    "Web Developer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Vercel",
    "Next.js 14",
  ],
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.name,
    },
  ],
  creator: "facuperezm",
  twitter: {
    title: siteConfig.name,
    card: "summary_large_image",
    images: ["https://i.imgur.com/kuQHDfm.jpg"],
    description: siteConfig.description,
    creator: "@facuperezm",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "es_AR",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "android-chrome-192x192",
      url: "/android-chrome-192x192.png",
    },
  },
  manifest: "/site.webmanifest",
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
    <PlausibleProvider domain="facuperezm.com">
      <html lang="en" suppressHydrationWarning className="bg-background">
        <body
          className={cn(
            "min-h-dvh scroll-smooth font-sans antialiased",
            fontSerif.variable,
            fontSans.variable,
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div
              aria-hidden
              className="pointer-events-none fixed left-0 top-0 z-50 h-12 w-full bg-background to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)]"
            ></div>
            {children}
            <Separator className="mt-6 bg-muted/40" />
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </PlausibleProvider>
  );
}
