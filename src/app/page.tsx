"use client";

import ContactForm from "@/components/contact-form";
import Layout from "@/components/main-animate";
import Project from "@/components/project-component";
import Section from "@/components/section-animate";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PROJECTS } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { countryCodeEmoji } from "country-code-emoji";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import personalImg from "../../public/images/facundo.jpg";

export default function HomePage() {
  return (
    <Layout className="align-center m-auto flex max-w-3xl flex-col justify-center px-4">
      <Section className="md:justify-right mt-16 flex flex-col-reverse justify-center md:flex-row">
        <div className="grow md:self-center">
          <h1 className="mb-1 scroll-m-20 text-2xl font-extrabold tracking-tight md:text-4xl">
            Facundo Perez Montalvo
          </h1>
          <span className="font-serif italic tracking-wide text-muted-foreground">
            Frontend developer based in Argentina {"  "}
          </span>
          {countryCodeEmoji("AR")}
        </div>

        <TooltipProvider>
          <Tooltip>
            <TooltipContent side="bottom">
              <p>🔎 Looking for my first developer role</p>
            </TooltipContent>
            <TooltipTrigger className="shrink-1 relative mb-2 max-w-sm cursor-default rounded-2xl text-left md:max-w-sm md:shadow-2xl">
              <Image
                alt="Personal profile picture of Facundo Perez Montalvo"
                src={personalImg}
                className="w-28 rounded-2xl md:w-56"
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
        <h2 className="mb-2 mt-4 scroll-m-20 text-xl font-semibold tracking-tight">
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
        <div className="align-center pt-1">
          <div className="justify-left flex gap-2">
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
        <h2 className="mb-2 mt-4 scroll-m-20 text-xl font-semibold tracking-tight">
          Projects
        </h2>
        <p className="mb-4">
          Some of the projects that I am currently working on:
        </p>
        <div className="flex w-full flex-col gap-2">
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
        <h2 className="mb-2 mt-4 scroll-m-20 text-xl font-semibold tracking-tight">
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
