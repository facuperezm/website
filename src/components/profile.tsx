import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download, Mail } from "lucide-react";

import { heroHighlights } from "@/config/career";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import Section from "@/components/section-animate";

export default function Profile() {
  return (
    <Section className="border-border/70 bg-card/80 relative mt-8 overflow-hidden rounded-[2.25rem] border px-5 py-8 shadow-[0_32px_120px_-64px_rgba(30,22,12,0.6)] backdrop-blur-sm sm:mt-12 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 right-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(214,177,103,0.22),_transparent_70%)] blur-2xl" />
        <div className="absolute -bottom-8 left-8 h-44 w-44 rounded-full bg-[radial-gradient(circle,_rgba(214,177,103,0.12),_transparent_72%)] blur-2xl" />
        <div className="absolute top-10 left-[38%] h-28 w-28 rounded-full bg-[radial-gradient(circle,_rgba(86,132,255,0.22),_transparent_74%)] blur-2xl" />
        <div className="absolute bottom-16 left-1/3 h-32 w-32 rounded-full bg-[radial-gradient(circle,_rgba(86,132,255,0.1),_transparent_74%)] blur-2xl" />
      </div>

      <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div className="space-y-7">
          <div className="flex items-center gap-4">
            <Image
              alt="Profile picture of Facundo Perez Montalvo"
              src="/profile.avif"
              className="border-border/70 ring-background size-[4.5rem] rounded-full border object-cover shadow-md ring-4 sm:size-20"
              width={80}
              height={80}
              priority
            />
            <div className="space-y-1">
              <p className="text-muted-foreground text-xs font-semibold tracking-[0.22em] uppercase">
                {siteConfig.title}
              </p>
              <h1 className="font-display text-3xl tracking-tight sm:text-4xl">
                Facundo Perez Montalvo
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base">
                Currently building product UI at Storied via Svitla Systems.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="max-w-3xl text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.55rem] lg:leading-[1.02]">
              React, Next.js, and TypeScript developer shipping polished
              interfaces for teams that care about quality.
            </h2>
            <p className="text-muted-foreground max-w-[65ch] text-base leading-7 sm:text-lg">
              I focus on product UI, design systems, and performance. Recent
              work has centered on frontend modernization, scalable interfaces,
              and close collaboration with backend and product teams.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {heroHighlights.map((item) => (
              <span
                key={item}
                className="border-border/80 bg-background/80 text-foreground/85 rounded-full border px-3.5 py-2 text-xs font-medium tracking-wide shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full px-6">
              <a href={siteConfig.links.resume} download>
                Download Resume
                <Download className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-6"
            >
              <Link href="/resume">
                View Resume
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="rounded-full px-5"
            >
              <Link href={siteConfig.links.email}>
                Email Me
                <Mail className="size-4" />
              </Link>
            </Button>
          </div>

          <nav className="text-muted-foreground flex flex-wrap items-center gap-4 text-sm">
            <Link
              href={siteConfig.links.github}
              className="hover:text-foreground transition-colors duration-200"
            >
              GitHub
            </Link>
            <span className="text-border">/</span>
            <Link
              href={siteConfig.links.linkedin}
              className="hover:text-foreground transition-colors duration-200"
            >
              LinkedIn
            </Link>
            <span className="text-border">/</span>
            <Link
              href={siteConfig.links.repo}
              className="hover:text-foreground transition-colors duration-200"
            >
              Portfolio Source
            </Link>
          </nav>
        </div>

        <aside className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          <div className="border-border/80 bg-background/85 rounded-[1.75rem] border p-5">
            <p className="text-muted-foreground text-xs font-semibold tracking-[0.2em] uppercase">
              Open to
            </p>
            <p className="mt-2 text-lg font-medium tracking-tight">
              Senior frontend opportunities
            </p>
            <p className="text-muted-foreground mt-2 text-sm leading-6">
              Best fit: product-focused teams working in React, Next.js, and
              TypeScript.
            </p>
          </div>

          <div className="border-border/80 bg-background/85 rounded-[1.75rem] border p-5">
            <p className="text-muted-foreground text-xs font-semibold tracking-[0.2em] uppercase">
              Strengths
            </p>
            <ul className="text-muted-foreground mt-2 space-y-0 text-sm leading-6">
              <li>Design-system sensibility with product pragmatism</li>
              <li>Strong UI implementation quality</li>
              <li>Comfortable partnering with backend and QA</li>
            </ul>
          </div>

          <div className="border-border/80 bg-background/85 rounded-[1.75rem] border p-5 sm:col-span-2 lg:col-span-1">
            <p className="text-muted-foreground text-xs font-semibold tracking-[0.2em] uppercase">
              Working style
            </p>
            <p className="text-muted-foreground mt-2 text-sm leading-6">
              Based in Argentina and fluent in English, with experience
              collaborating across product, design, QA, and backend.
            </p>
          </div>
        </aside>
      </div>
    </Section>
  );
}
