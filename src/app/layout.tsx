import "@/styles/globals.css";
import Footer from "@/components/footer-component";
import { ThemeProvider } from "@/components/theme-provider";
import TopBlur from "@/components/top-blur";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import { fontSans, fontSerif } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Vercel",
    "Next.js 13",
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
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen scroll-smooth font-sans antialiased",
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
          <TopBlur />
          {children}
          <Separator className="mt-6 bg-muted/40" />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
