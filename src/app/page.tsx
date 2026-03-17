import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Download,
  FileText,
  Mail,
} from "lucide-react";

import {
  experienceEntries,
  featuredProjects,
  storiedProofThemes,
} from "@/config/career";
import { siteConfig } from "@/config/site";
import ExperienceCard from "@/components/experience-card";
import Footer from "@/components/footer";
import Profile from "@/components/profile";
import Project from "@/components/project-component";
import Section from "@/components/section-animate";
import SectionHeading from "@/components/section-heading";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
      <Profile />

      <Section id="current-work" delay={0.08}>
        <SectionHeading
          eyebrow="Current Work"
          title="Current work at Storied"
          description="A quick look at the product work, frontend scope, and growth in my current role."
        />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-[2rem] border border-border/80 bg-card/80 p-6 shadow-[0_24px_90px_-56px_rgba(30,22,12,0.55)]">
            <div className="mb-6 space-y-2">
              <div className="space-y-2">
                <p className="text-xs font-semibold tracking-[0.22em] text-muted-foreground uppercase">
                  August 2024 - Present
                </p>
                <h3 className="font-display text-3xl tracking-tight sm:text-4xl">
                  Svitla Systems (for Storied)
                </h3>
                <p className="text-base font-medium text-foreground/90">
                  Senior Frontend Developer
                </p>
              </div>
            </div>

            <p className="max-w-[72ch] text-base leading-7 text-muted-foreground sm:text-lg">
              At Storied, I help ship product UI for a family history platform.
              My work spans frontend modernization, design implementation, and
              performance.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-border/70 bg-background/80 p-4">
                <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                  Core stack
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  React, Next.js, TypeScript, design systems, UI performance,
                  and cross-functional delivery.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-border/70 bg-background/80 p-4">
                <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                  Collaboration
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Product, design, QA, and backend partnership with a strong
                  bias toward clean execution and reliable releases.
                </p>
              </div>
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {storiedProofThemes.map((theme) => (
              <article
                key={theme.title}
                className="rounded-[1.75rem] border border-border/80 bg-card/70 p-5"
              >
                <p className="text-sm font-semibold tracking-tight text-foreground">
                  {theme.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {theme.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section id="selected-projects" delay={0.14}>
        <SectionHeading
          eyebrow="Selected Projects"
          title="Case studies that back up the story"
          description="Projects framed as evidence of product thinking, frontend architecture, and implementation quality."
        />

        <div className="grid gap-6 xl:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Project key={project.title} project={project} index={index} />
          ))}
        </div>
      </Section>

      <Section id="experience" delay={0.2}>
        <SectionHeading
          eyebrow="Experience Snapshot"
          title="Recent experience, compressed to what matters"
          description="Current product work first, with earlier experience supporting the story through customer-facing problem solving and hands-on shipping."
        />

        <div className="grid gap-5 xl:grid-cols-3">
          {experienceEntries.map((entry) => (
            <ExperienceCard key={`${entry.company}-${entry.role}`} entry={entry} />
          ))}
        </div>
      </Section>

      <Section id="resume-and-contact" delay={0.26}>
        <SectionHeading
          eyebrow="Resume and Contact"
          title="Resume, links, and an easy way to reach me"
          description="If the work feels like a fit, you can grab the resume or send me a note."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-[2rem] border border-border/80 bg-card/80 p-6 shadow-[0_24px_90px_-56px_rgba(30,22,12,0.45)]">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-full border border-border/80 bg-background/80 p-2 text-muted-foreground">
                <FileText className="size-4" />
              </div>
              <p className="text-sm font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                Resume
              </p>
            </div>

            <h3 className="font-display text-3xl tracking-tight">
              Grab the latest resume
            </h3>
            <p className="mt-3 max-w-[60ch] text-base leading-7 text-muted-foreground">
              A one-page snapshot of my recent work, focused on Storied,
              product UI, and frontend delivery.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-6">
                <a href={siteConfig.links.resume} download>
                  Download PDF
                  <Download className="size-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-6">
                <Link href="/resume">
                  View Resume
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            </div>
          </article>

          <article className="rounded-[2rem] border border-border/80 bg-card/80 p-6 shadow-[0_24px_90px_-56px_rgba(30,22,12,0.45)]">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-full border border-border/80 bg-background/80 p-2 text-muted-foreground">
                <BriefcaseBusiness className="size-4" />
              </div>
              <p className="text-sm font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                Contact
              </p>
            </div>

            <div className="space-y-4 text-sm leading-6 text-muted-foreground">
              <div>
                <p className="font-medium text-foreground">Email</p>
                <Link
                  href={siteConfig.links.email}
                  className="transition-colors duration-200 hover:text-foreground"
                >
                  facundoperezmontalvo@gmail.com
                </Link>
              </div>

              <div>
                <p className="font-medium text-foreground">LinkedIn</p>
                <Link
                  href={siteConfig.links.linkedin}
                  className="transition-colors duration-200 hover:text-foreground"
                >
                  linkedin.com/in/facuperezm
                </Link>
              </div>

              <div>
                <p className="font-medium text-foreground">GitHub</p>
                <Link
                  href={siteConfig.links.github}
                  className="transition-colors duration-200 hover:text-foreground"
                >
                  github.com/facuperezm
                </Link>
              </div>
            </div>

            <Button
              asChild
              variant="ghost"
              size="lg"
              className="mt-6 w-full rounded-full border border-border/80"
            >
              <Link href={siteConfig.links.email}>
                Send an email
                <Mail className="size-4" />
              </Link>
            </Button>
          </article>
        </div>
      </Section>

      <Footer />
    </>
  );
}
