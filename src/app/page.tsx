"use client";

import Image from "next/image";
import Link from "next/link";
import { countryCodeEmoji } from "country-code-emoji";
import { Github, Linkedin } from "lucide-react";

import { PROJECTS } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ContactForm from "@/components/contact-form";
import Layout from "@/components/main-animate";
import Project from "@/components/project-component";
import Section from "@/components/section-animate";

export default function HomePage() {
  return (
    <Layout className="m-auto flex max-w-3xl flex-col justify-center px-4">
      <Section className="mt-16 flex flex-col-reverse justify-center md:flex-row md:justify-end">
        <div className="grow md:self-center">
          <h1 className="mb-1 mt-2 scroll-m-20 text-2xl font-extrabold tracking-tight md:mt-0 md:text-4xl">
            Facundo Perez Montalvo
          </h1>
          <span className="font-serif italic tracking-[0.020em] text-muted-foreground">
            Frontend developer based in Argentina {"  "}
          </span>
          {countryCodeEmoji("AR")}
        </div>

        <TooltipProvider>
          <Tooltip>
            <TooltipContent side="bottom">
              <p>🔎 Looking for my first developer role</p>
            </TooltipContent>
            <TooltipTrigger className="relative max-w-sm shrink cursor-default rounded-2xl text-left md:max-w-sm md:shadow-2xl">
              <Image
                alt="Profile picture of Facundo Perez Montalvo"
                src="/images/facundo.webp"
                className="w-28 rounded-2xl md:w-56"
                width={224}
                height={224}
                quality={60}
                priority
              />
            </TooltipTrigger>
          </Tooltip>
        </TooltipProvider>
      </Section>
      <Section delay={0.3}>
        <h2 className="mb-3 scroll-m-20 text-xl font-semibold tracking-tight">
          About me
        </h2>
        <div className="mb-2 space-y-2 text-muted-foreground">
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Hey! I&apos;m Facundo, a frontend developer with a self-taught
            background in the React stack. I specialize in creating
            user-friendly, visually appealing interfaces.
          </p>
          <p className="leading-7">
            If you&apos;re looking for a dedicated frontend developer to join
            your team, I would love to hear from you. Let&apos;s work together
            to create something amazing!
          </p>
        </div>
        <div className="items-center pt-1">
          <div className="flex justify-start gap-2">
            <Button
              variant="default"
              className="relative overflow-hidden rounded px-5 py-2.5 transition-all duration-300 hover:ring-2 hover:ring-primary/90 hover:ring-offset-2"
              asChild
            >
              <Link href={siteConfig.links.linkedin}>
                <Linkedin className="relative mr-2 h-4 w-4" /> View Linkedin
              </Link>
            </Button>

            <Button
              variant="secondary"
              className="relative overflow-hidden rounded px-5 py-2.5 transition-all duration-300 hover:ring-2 hover:ring-primary/90 hover:ring-offset-2"
              asChild
            >
              <Link href={siteConfig.links.github}>
                <Github className="relative mr-2 h-4 w-4" /> View GitHub
              </Link>
            </Button>
          </div>
        </div>
      </Section>
      <Section delay={0.4}>
        <h2 className="mb-3 scroll-m-20 text-xl font-semibold tracking-tight">
          Projects
        </h2>
        <p className="mb-4 text-muted-foreground">
          Some of the projects that I am currently working on:
        </p>
        <div className="flex w-full flex-col gap-2">
          {PROJECTS.map((project, index) => {
            return (
              <Project
                key={index}
                title={project.title}
                link={project.link}
                tech={project.tech}
              >
                {project.description}
              </Project>
            );
          })}
        </div>
      </Section>
      <Section delay={0.5}>
        <h2 className="mb-3 scroll-m-20 text-xl font-semibold tracking-tight">
          Contact me
        </h2>
        <p className="mb-4 text-muted-foreground">
          Do you have a job opportunity or idea you&apos;d like to discuss? Feel
          free to send me an email:
        </p>
        <ContactForm />
      </Section>
    </Layout>
  );
}
