"use client";

import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/contact-form";
import Section from "@/components/section-animate";

export default function HomePage() {
  return (
    <>
      <Section id="about" delay={0.3}>
        <h2 className="relative mb-2 scroll-m-20 text-2xl font-semibold tracking-tight">
          About me
        </h2>
        <div className="mb-4 max-w-[66ch] text-pretty text-lg text-muted-foreground">
          <p className="leading-7 [&:not(:first-child)]:mt-3">
            Hey! I&apos;m Facundo, a self-taught frontend developer with a love
            for learning and taking on new challenges. I enjoy diving into
            things I know nothing about and spending hours figuring them out.
          </p>
          <p className="leading-7  [&:not(:first-child)]:mt-3">
            Learning is something I&apos;ll never stop doing. I&apos;ve only
            just begun to explore what I can do, and I&apos;m excited to see
            what more I can achieve. I want to keep pushing myself and see how
            far I can go with my creativity and skills.
          </p>
          <p className="leading-7  [&:not(:first-child)]:mt-3">
            If you&apos;re looking for a frontend developer who is passionate,
            detail-oriented, and always up for a challenge, I&apos;d love to
            hear from you. Let&apos;s create something awesome together!
          </p>
        </div>
        <div className="flex justify-start gap-2">
          <Button
            variant="default"
            className="relative overflow-hidden rounded px-5 py-2.5 transition-all duration-300 hover:ring-2 hover:ring-primary/90 hover:ring-offset-2"
            asChild
          >
            <Link href={siteConfig.links.linkedin}>
              <Linkedin className="relative mr-2 h-4 w-4 text-lg" /> View
              Linkedin
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
      <Section id="contact" delay={0.5}>
        <div className="mb-8">
          <h2 className="mb-2 scroll-m-20 text-2xl font-semibold tracking-tight">
            Contact me
          </h2>
          <p className="mb-4 text-lg text-muted-foreground">
            Do you have a job opportunity or idea you&apos;d like to discuss?
            Feel free to send me an email:
          </p>
        </div>
        <ContactForm />
      </Section>
    </>
  );
}
