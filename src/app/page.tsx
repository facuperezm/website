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
    <Layout className="mx-auto flex max-w-3xl flex-col justify-center px-4 pt-6">
      <Section className="mt-16 justify-center md:flex-row md:justify-end">
        <Image
          alt="Profile picture of Facundo Perez Montalvo"
          src="https://pub-729f545d27554bb096839c4c4aeb9f51.r2.dev/profile-pic.jpeg"
          className="absolute w-36 scale-150 rounded-full blur-3xl brightness-[5] dark:brightness-75"
          width={144}
          height={144}
          quality={30}
          priority
          aria-hidden
        />
        <TooltipProvider>
          <Tooltip>
            <TooltipContent side="right" className="ml-2">
              <p className="text-lg">🧑‍💻 Open to work!</p>
            </TooltipContent>
            <TooltipTrigger className=" max-w-sm shrink cursor-default rounded-full text-left md:max-w-sm md:shadow-2xl">
              <div className="">
                <Image
                  alt="Profile picture of Facundo Perez Montalvo"
                  src="https://pub-729f545d27554bb096839c4c4aeb9f51.r2.dev/profile-pic.jpeg"
                  className="relative z-10 w-20 rounded-full drop-shadow-2xl md:w-24"
                  width={96}
                  height={96}
                  priority
                />
              </div>
            </TooltipTrigger>
          </Tooltip>
        </TooltipProvider>

        <div className="relative">
          <h1 className="relative z-10 mb-1 mt-2 scroll-m-20 text-2xl font-extrabold tracking-tight md:mt-0 md:text-4xl">
            Facundo Perez Montalvo
          </h1>
          <span className="font-serif text-lg italic tracking-[0.022em] text-muted-foreground">
            Frontend developer based in Argentina {"  "}
          </span>
          {countryCodeEmoji("AR")}
        </div>
      </Section>
      <Section delay={0.3}>
        <h2 className="relative mb-2 scroll-m-20 text-2xl font-semibold tracking-tight">
          About me
        </h2>
        <div className="mb-2 max-w-prose space-y-2 text-pretty text-lg text-muted-foreground">
          <p className="relative leading-7 [&:not(:first-child)]:mt-6">
            Hey! I&apos;m Facundo, a frontend developer specialized in creating
            user-friendly, visually appealing interfaces with great attention to
            detail.
          </p>
          <p className="leading-7">
            If you&apos;re looking for a dedicated frontend developer to join
            your team, I would love to hear from you. Let&apos;s work together
            to create something amazing!
          </p>
        </div>
        <div className="items-center pt-2">
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
        </div>
      </Section>
      <Section delay={0.4}>
        <div className="mb-8">
          <h2 className="mb-2 scroll-m-20 text-2xl font-semibold tracking-tight">
            Projects
          </h2>
          <p className="mb-4 text-lg text-muted-foreground">
            Some of the projects that I am currently working on:
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-1">
          {PROJECTS.map((project, index) => {
            return (
              <Project
                key={index}
                title={project.title}
                link={project.link}
                tech={project.tech}
                repo={project.repo}
                img={project.img}
              >
                {project.description}
              </Project>
            );
          })}
        </div>
      </Section>
      <Section delay={0.5}>
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
    </Layout>
  );
}
