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
import { Button } from "@/components/ui/button";
import ExperienceCard from "@/components/experience-card";
import Footer from "@/components/footer";
import Profile from "@/components/profile";
import Project from "@/components/project-component";
import Section from "@/components/section-animate";
import SectionHeading from "@/components/section-heading";

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
          <article className="border-border/80 bg-card/80 rounded-[2rem] border p-6 shadow-[0_24px_90px_-56px_rgba(30,22,12,0.55)]">
            <div className="mb-6 space-y-2">
              <div className="space-y-2">
                <p className="text-muted-foreground text-xs font-semibold tracking-[0.22em] uppercase">
                  January 2025 - Present
                </p>
                <h3 className="font-display text-3xl tracking-tight sm:text-4xl">
                  Svitla Systems (for Storied)
                </h3>
                <p className="text-foreground/90 text-base font-medium">
                  Senior Frontend Developer
                </p>
              </div>
            </div>

            <p className="text-muted-foreground max-w-[72ch] text-base leading-7 sm:text-lg">
              At Storied, I help ship product UI for a family history platform.
              My work spans frontend modernization, design implementation, and
              performance.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="border-border/70 bg-background/80 rounded-[1.5rem] border p-4">
                <p className="text-muted-foreground text-xs font-semibold tracking-[0.18em] uppercase">
                  Core stack
                </p>
                <p className="text-muted-foreground mt-2 text-sm leading-6">
                  React, Next.js, TypeScript, design systems, UI performance,
                  and cross-functional delivery.
                </p>
              </div>
              <div className="border-border/70 bg-background/80 rounded-[1.5rem] border p-4">
                <p className="text-muted-foreground text-xs font-semibold tracking-[0.18em] uppercase">
                  Collaboration
                </p>
                <p className="text-muted-foreground mt-2 text-sm leading-6">
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
                className="border-border/80 bg-card/70 rounded-[1.75rem] border p-5"
              >
                <p className="text-foreground text-sm font-semibold tracking-tight">
                  {theme.title}
                </p>
                <p className="text-muted-foreground mt-2 text-sm leading-6">
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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
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
            <ExperienceCard
              key={`${entry.company}-${entry.role}`}
              entry={entry}
            />
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
          <article className="border-border/80 bg-card/80 rounded-[2rem] border p-6 shadow-[0_24px_90px_-56px_rgba(30,22,12,0.45)]">
            <div className="mb-5 flex items-center gap-3">
              <div className="border-border/80 bg-background/80 text-muted-foreground rounded-full border p-2">
                <FileText className="size-4" />
              </div>
              <p className="text-muted-foreground text-sm font-semibold tracking-[0.18em] uppercase">
                Resume
              </p>
            </div>

            <h3 className="font-display text-3xl tracking-tight">
              Grab the latest resume
            </h3>
            <p className="text-muted-foreground mt-3 max-w-[60ch] text-base leading-7">
              A one-page snapshot of my recent work, focused on Storied, product
              UI, and frontend delivery.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-6">
                <a href={siteConfig.links.resume} download>
                  Download PDF
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
            </div>
          </article>

          <article className="border-border/80 bg-card/80 rounded-[2rem] border p-6 shadow-[0_24px_90px_-56px_rgba(30,22,12,0.45)]">
            <div className="mb-5 flex items-center gap-3">
              <div className="border-border/80 bg-background/80 text-muted-foreground rounded-full border p-2">
                <BriefcaseBusiness className="size-4" />
              </div>
              <p className="text-muted-foreground text-sm font-semibold tracking-[0.18em] uppercase">
                Contact
              </p>
            </div>

            <div className="text-muted-foreground space-y-4 text-sm leading-6">
              <div>
                <p className="text-foreground font-medium">Email</p>
                <Link
                  href={siteConfig.links.email}
                  className="hover:text-foreground transition-colors duration-200"
                >
                  facundoperezmontalvo@gmail.com
                </Link>
              </div>

              <div>
                <p className="text-foreground font-medium">LinkedIn</p>
                <Link
                  href={siteConfig.links.linkedin}
                  className="hover:text-foreground transition-colors duration-200"
                >
                  linkedin.com/in/facuperezm
                </Link>
              </div>

              <div>
                <p className="text-foreground font-medium">GitHub</p>
                <Link
                  href={siteConfig.links.github}
                  className="hover:text-foreground transition-colors duration-200"
                >
                  github.com/facuperezm
                </Link>
              </div>
            </div>

            <Button
              asChild
              variant="ghost"
              size="lg"
              className="border-border/80 mt-6 w-full rounded-full border"
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
