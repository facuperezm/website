import "@/styles/globals.css";

import type { Metadata, Viewport } from "next";

import { siteConfig } from "@/config/site";
import { fontSans, fontSerif } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import Layout from "@/components/main-animate";
import { ThemeProvider } from "@/components/theme-provider";

import Footer from "./_components/footer-component";
import Header from "./_components/header-component";
import ProfilePage from "./_components/profile-component";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name + " | " + siteConfig.title,
    template: `${siteConfig.name} | %s `,
  },
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
    images: ["https://facuperezm.com/opengraph-image.png"],
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
    <html
      id="top"
      lang="en"
      suppressHydrationWarning
      className="min-h-dvh scroll-smooth bg-background antialiased"
    >
      <body
        suppressHydrationWarning
        className={cn(
          "font-sans selection:bg-pink-400 selection:text-black",
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
          <Header />
          <Layout className="mx-auto flex max-w-3xl flex-col justify-center px-4 pt-6">
            <ProfilePage />
            {children}
          </Layout>
          <Separator className="mt-6 bg-muted/40" />
          <Footer />
          <div
            aria-hidden
            className="nice-gradient pointer-events-none fixed left-0 top-0 z-50 h-28 w-full"
          ></div>
        </ThemeProvider>
      </body>
    </html>
  );
}
