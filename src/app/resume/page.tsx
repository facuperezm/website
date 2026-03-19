import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, Mail } from "lucide-react";

import type { ResumeExperienceEntry } from "@/types";
import {
  resumeEducation,
  resumeExperienceEntries,
  resumeStack,
  resumeSummary,
} from "@/config/career";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

function ExperienceBlock({ entry }: { entry: ResumeExperienceEntry }) {
  return (
    <section style={{ breakInside: "avoid" }}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-lg font-semibold tracking-tight text-foreground print:text-[13px]">
          {entry.company}
        </h3>
        <p className="text-sm text-muted-foreground print:text-[10.5px]">
          {entry.location}
        </p>
      </div>

      <div className="mt-2 space-y-4 print:space-y-2">
        {entry.roles.map((role) => (
          <div key={role.title}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <p className="text-sm font-medium italic text-foreground/85 print:text-[11px]">
                {role.title}
              </p>
              <p className="text-sm text-muted-foreground print:text-[10.5px]">
                {role.timeframe}
              </p>
            </div>

            <ul className="mt-1.5 space-y-1.5 text-sm leading-6 text-muted-foreground print:mt-1 print:space-y-1 print:text-[10.5px] print:leading-[1.5]">
              {role.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="mt-1.5 size-1 shrink-0 rounded-full bg-foreground/75" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export const metadata: Metadata = {
  title: "Resume",
  description:
    "One-page resume for Facundo Perez Montalvo, Senior Frontend Developer. Covers React, Next.js, TypeScript expertise and product UI work at Storied.",
  alternates: {
    canonical: `${siteConfig.url}/resume`,
  },
  openGraph: {
    url: `${siteConfig.url}/resume`,
  },
};

const stackSections = [
  { title: "Frontend", items: resumeStack.frontend },
  { title: "Product", items: resumeStack.product },
  { title: "Data and forms", items: resumeStack.data },
  { title: "Testing", items: resumeStack.testing },
];

export default function ResumePage() {
  return (
    <>
      <style>{`
        @page {
          size: A4;
          margin: 0;
        }
        @media print {
          html, body { background: white !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      `}</style>

      <div className="mx-auto w-full max-w-[880px] py-8 print:py-0 sm:py-10">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <Button asChild variant="ghost" className="rounded-full">
            <Link href="/">
              <ArrowLeft className="size-4" />
              Back to portfolio
            </Link>
          </Button>

          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline" className="rounded-full">
              <Link href={siteConfig.links.email}>
                Contact
                <Mail className="size-4" />
              </Link>
            </Button>
            <Button asChild className="rounded-full">
              <a href={siteConfig.links.resume} download>
                Download PDF
                <Download className="size-4" />
              </a>
            </Button>
          </div>
        </div>

        <article className="rounded-[2rem] border border-border/80 bg-card px-5 py-6 shadow-[0_28px_100px_-64px_rgba(30,22,12,0.55)] print:rounded-none print:border-none print:bg-transparent print:px-[18mm] print:py-[15mm] print:shadow-none print:text-stone-800 print:tracking-[0.008em] sm:px-8 sm:py-8">
          <header className="border-b border-border/70 pb-4 print:pb-3">
            <div className="space-y-2 print:space-y-1.5">
              <p className="text-[11px] font-semibold tracking-[0.24em] text-muted-foreground uppercase">
                Senior Frontend Developer
              </p>
              <h1 className="font-display text-4xl tracking-tight sm:text-5xl print:text-[28px]">
                Facundo Perez Montalvo
              </h1>
              <p className="text-xs text-muted-foreground print:hidden">
                By Facundo Perez Montalvo · Last updated March 2026
              </p>
            </div>

            <p className="mt-3 max-w-[76ch] text-sm leading-6 text-muted-foreground print:mt-2 print:text-[10.5px] print:leading-[1.5]">
              {resumeSummary}
            </p>

            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground print:mt-2 print:text-[11px]">
              <Link href={siteConfig.links.email}>facundoperezmontalvo@gmail.com</Link>
              <span>www.facuperezm.com</span>
              <Link href={siteConfig.links.github}>github.com/facuperezm</Link>
              <Link href={siteConfig.links.linkedin}>linkedin.com/in/facuperezm</Link>
              <span>Argentina · Remote</span>
            </div>
          </header>

          {/* Both web and print: Experience → Core Stack | Education */}
          <div className="space-y-8 pt-6 print:space-y-4 print:pt-3">
            <section>
              <h2 className="text-[11px] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
                Experience
              </h2>

              <div className="mt-4 space-y-5 print:mt-2 print:space-y-3">
                {resumeExperienceEntries.map((entry) => (
                  <ExperienceBlock key={entry.company} entry={entry} />
                ))}
              </div>
            </section>

            <div className="grid grid-cols-2 gap-8 print:gap-6">
              <section style={{ breakInside: "avoid" }}>
                <h2 className="text-[11px] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
                  Core Stack
                </h2>

                <div className="mt-4 space-y-3 print:mt-2 print:space-y-2">
                  {stackSections.map((section) => (
                    <div key={section.title}>
                      <h3 className="text-sm font-semibold text-foreground print:text-[11px]">
                        {section.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground print:text-[10.5px] print:leading-[1.5]">
                        {section.items.join(" · ")}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section style={{ breakInside: "avoid" }}>
                <h2 className="text-[11px] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
                  Education and Languages
                </h2>
                <ul className="mt-4 space-y-1.5 text-sm leading-6 text-muted-foreground print:mt-2 print:text-[10.5px] print:leading-[1.5]">
                  {resumeEducation.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
