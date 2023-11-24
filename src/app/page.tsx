"use client";
import Link from "next/link";
import Image from "next/image";
import { Newsreader } from "next/font/google";

import { countryCodeEmoji } from "country-code-emoji";
import { cn } from "@/lib/utils";

import personalImg from "../../public/images/facundo.jpg";

import Section from "@/components/section-animate";
import Layout from "@/components/main-animate";
import Project from "@/components/project-component";
import ContactForm from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { PROJECTS } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { Github, Linkedin } from "lucide-react";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["italic"],
});

export default function HomePage() {
  return (
    <Layout className="flex flex-col justify-center max-w-3xl px-4 m-auto align-center">
      <Section className="flex flex-col-reverse justify-center mt-16 md:flex-row md:justify-right">
        <div className="flex-grow md:self-center">
          <h1 className="mb-1 text-2xl font-extrabold md:text-4xl scroll-m-20 tracking-tight">
            Facundo Perez Montalvo
          </h1>
          <span
            className={cn(
              newsreader.className,
              "italic tracking-wide text-muted-foreground"
            )}
          >
            Frontend developer based in Argentina {"  "}
          </span>
          {countryCodeEmoji("AR")}
        </div>

        <TooltipProvider>
          <Tooltip>
            <TooltipContent side="bottom">
              <p>🔎 Looking for my first developer role</p>
            </TooltipContent>
            <TooltipTrigger className="cursor-default relative max-w-sm mb-2 rounded-2xl text-left flex-shrink-1 md:max-w-sm shadow-2xl">
              <Image
                alt="Personal profile picture of Facundo Perez Montalvo"
                src={personalImg}
                className="rounded-2xl w-28 md:w-56"
                width={250}
                height={250}
                quality={70}
                priority
                placeholder="blur"
              />
            </TooltipTrigger>
          </Tooltip>
        </TooltipProvider>
      </Section>
      <Section delay={0.3}>
        <h2 className="scroll-m-20 text-xl font-semibold tracking-tight mt-4 mb-2">
          About me
        </h2>
        <div className="mb-2">
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
        <div className="pt-1 align-center">
          <div className="flex gap-2 justify-left">
            <Button variant="default" asChild>
              <Link href={siteConfig.links.linkedin}>
                <Linkedin className="mr-2 h-4 w-4" /> View Linkedin
              </Link>
            </Button>

            <Button variant="secondary" asChild>
              <Link href={siteConfig.links.github}>
                <Github className="mr-2 h-4 w-4" /> View GitHub
              </Link>
            </Button>
          </div>
        </div>
      </Section>
      <Section delay={0.4}>
        <h2 className="scroll-m-20 text-xl font-semibold tracking-tight mt-4 mb-2">
          Projects
        </h2>
        <p className="mb-4">
          Some of the projects that I am currently working on:
        </p>
        <div className="flex flex-col w-full gap-2">
          {PROJECTS.map((project, index) => {
            return (
              <Section key={index}>
                <Project
                  title={project.title}
                  link={project.link}
                  tech={project.tech}
                >
                  {project.description}
                </Project>
              </Section>
            );
          })}
        </div>
      </Section>
      <Section delay={0.5}>
        <h2 className="scroll-m-20 text-xl font-semibold tracking-tight mt-4 mb-2">
          Contact me
        </h2>
        <p className="mb-4">
          Do you have a job opportunity or idea you&apos;d like to discuss? Feel
          free to send me an email:
        </p>
        <ContactForm />
      </Section>
    </Layout>
  );
}
