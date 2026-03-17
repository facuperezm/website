import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for facuperezm.com. Learn how this portfolio site handles your data and privacy.",
  alternates: {
    canonical: `${siteConfig.url}/privacy`,
  },
  openGraph: {
    url: `${siteConfig.url}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto w-full max-w-[880px] py-8 sm:py-10">
      <div className="mb-6 print:hidden">
        <Button asChild variant="ghost" className="rounded-full">
          <Link href="/">
            <ArrowLeft className="size-4" />
            Back to portfolio
          </Link>
        </Button>
      </div>

      <article className="rounded-[2rem] border border-border/80 bg-card px-5 py-6 shadow-[0_28px_100px_-64px_rgba(30,22,12,0.55)] sm:px-8 sm:py-8">
        <header className="border-b border-border/70 pb-4">
          <h1 className="font-display text-4xl tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Last updated: August 2025
          </p>
        </header>

        <div className="prose prose-sm max-w-none pt-6 text-muted-foreground [&_h2]:mt-6 [&_h2]:mb-3 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground [&_p]:mb-4 [&_p]:leading-7 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-1">
          <h2>Overview</h2>
          <p>
            This website (facuperezm.com) is a personal portfolio site for
            Facundo Perez Montalvo. Your privacy matters, and this site is
            designed to collect as little data as possible.
          </p>

          <h2>Analytics</h2>
          <p>
            This site uses Vercel Analytics to understand general traffic
            patterns. Vercel Analytics is privacy-friendly and does not use
            cookies. It collects anonymous, aggregated data such as page views,
            referrer information, and general geographic region. No personally
            identifiable information is collected through analytics.
          </p>

          <h2>Cookies</h2>
          <p>
            This site does not use cookies or any client-side tracking
            technologies.
          </p>

          <h2>Data collection</h2>
          <p>
            This site does not collect, store, or process any personal data. There
            are no forms, accounts, or user-generated content on this site.
          </p>

          <h2>Third-party services</h2>
          <p>This site is hosted on Vercel. External links on this site may
            direct you to third-party websites (such as GitHub and LinkedIn) that
            have their own privacy policies. This privacy policy applies only to
            facuperezm.com.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about this privacy policy, you can reach me at{" "}
            <Link
              href={siteConfig.links.email}
              className="text-foreground underline underline-offset-4 transition-colors hover:text-foreground/80"
            >
              facundoperezmontalvo@gmail.com
            </Link>
            .
          </p>
        </div>
      </article>
    </div>
  );
}
