import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import Section from "@/components/section-animate";

export default function AboutMeSection() {
  return (
    <Section id="about" delay={0.3}>
      <h2 className="relative mb-3 scroll-m-20 text-2xl font-semibold tracking-tight">
        About me
      </h2>
      <div className="mb-4 max-w-[66ch] text-pretty text-lg text-muted-foreground">
        <p className="leading-7 [&:not(:first-child)]:mt-3">
          Hey! I’m Facundo, a frontend developer with{" "}
          <span className="font-semibold">two years of experience</span>{" "}
          crafting web applications.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-3">
          I enjoy learning new things, solving problems, and paying attention to
          the details that make a difference. There’s always room to grow, and
          I’m committed to improving my skills and delivering meaningful
          solutions.
        </p>
        <p className="leading-7  [&:not(:first-child)]:mt-3">
          I&apos;d love to connect and work on something great together!
        </p>
      </div>
      <div className="flex justify-start gap-2">
        <Button
          variant="default"
          className="relative overflow-hidden rounded px-5 py-2.5 transition-all duration-300 hover:ring-2 hover:ring-primary/90 hover:ring-offset-2"
          asChild
        >
          <Link href={siteConfig.links.linkedin}>
            <Linkedin className="relative mr-2 h-4 w-4 text-lg" /> View Linkedin
          </Link>
        </Button>

        <Button
          variant="secondary"
          className="relative overflow-hidden rounded px-5 py-2.5 transition-all duration-300 hover:ring-2 hover:ring-primary/90 hover:ring-offset-2"
          asChild
        >
          <Link href={siteConfig.links.github}>
            <Github className="relative mr-2 h-4 w-4 text-lg" /> View GitHub
          </Link>
        </Button>
      </div>
    </Section>
  );
}
