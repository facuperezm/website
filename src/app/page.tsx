"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/contact-form";
import { Icons } from "@/components/icons";
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
      <Section id="skills" delay={0.4}>
        <h2 className="mb-2 scroll-m-20 text-2xl font-semibold tracking-tight">
          Skills
        </h2>
        <div className="mb-4 text-lg text-muted-foreground">
          <p className="mb-4">
            I&apos;m always learning new things and improving my skills. Here
            are the technologies I work with:
          </p>
          <p className="mb-4">Frontend:</p>
          <ul className="flex flex-row flex-wrap items-center gap-2">
            <li>
              <span className="flex items-center gap-x-2 whitespace-nowrap rounded-full bg-[#003159] px-3 py-1 text-sm text-white ">
                <Icons.react className="size-4" />
                React
              </span>
            </li>
            <li>
              <span className="flex items-center gap-x-2 whitespace-nowrap rounded-full bg-black px-3 py-1 text-sm text-white ">
                <Icons.nextjs className="size-4" />
                Next.js
              </span>
            </li>
            <li>
              <span className="flex items-center gap-x-2 whitespace-nowrap rounded-full bg-sky-950 px-3 py-1 text-sm text-white ">
                <Icons.typescript className="size-4" />
                TypeScript
              </span>
            </li>
            <li>
              <span className="flex items-center gap-x-2 whitespace-nowrap rounded-full bg-sky-700 px-3 py-1 text-sm text-white">
                <Icons.tailwind className="size-4" />
                Tailwind CSS
              </span>
            </li>
            <li>
              <span className="flex items-center gap-x-2 whitespace-nowrap rounded-full bg-green-900 px-3 py-1 text-sm text-white">
                🐻 Zustand
              </span>
            </li>
            <li>
              <span className="flex items-center gap-x-2 whitespace-nowrap rounded-full bg-[#1B1B1F] px-3 py-1 text-sm text-white">
                <Icons.vitest className="size-4" /> Vitest
              </span>
            </li>
            <li>
              <span className="flex items-center gap-x-2 text-nowrap rounded-full bg-[#1B1B1D] px-3 py-1 text-sm text-white ">
                <div className="size-4">
                  {" "}
                  <Image
                    src="/reactesting.png"
                    width={20}
                    height={20}
                    className="size-4"
                    alt="react-testing-library"
                  />
                </div>
                react-testing-library
              </span>
            </li>
            <li>
              <span className="flex items-center gap-x-2 text-wrap rounded-full bg-neutral-950 px-3 py-1 text-sm text-white">
                <Icons.playwright className="size-4" />
                Playwright
              </span>
            </li>
            <li>
              <span className="flex items-center gap-x-2 whitespace-nowrap rounded-full bg-teal-950 px-3 py-1 text-sm text-white">
                💅🏾 Styled Components
              </span>
            </li>
          </ul>
          <p className="my-4">Backend:</p>
          <ul className="flex flex-row flex-wrap items-center gap-2">
            <li>
              <span className="flex items-center gap-x-2 whitespace-nowrap rounded-full bg-[#003159] px-3 py-1 text-sm text-white ">
                <Icons.nodejs className="size-4" />
                Node.js
              </span>
            </li>
            <li>
              <span className="flex items-center gap-x-2 whitespace-nowrap rounded-full bg-black px-3 py-1 text-sm text-white ">
                <Icons.express className="size-4" />
                Express
              </span>
            </li>
            <li>
              <span className="flex items-center gap-x-2 whitespace-nowrap rounded-full bg-sky-950 px-3 py-1 text-sm text-white ">
                <Icons.mongodb className="size-4" />
                MongoDB
              </span>
            </li>
            <li>
              <span className="flex items-center gap-x-2 whitespace-nowrap rounded-full bg-gray-600 px-3 py-1 text-sm text-white">
                <Icons.prisma className="size-4" />
                Prisma
              </span>
            </li>
            <li>
              <span className="flex items-center gap-x-2 whitespace-nowrap rounded-full bg-black px-3 py-1 text-sm text-white">
                <div className="size-4">
                  <Image
                    src="/drizzle.png"
                    alt="drizzle orm logo"
                    height={20}
                    width={20}
                    className="size-4"
                  />
                </div>
                DrizzleORM
              </span>
            </li>
            <li>
              <span className="flex items-center gap-x-2 whitespace-nowrap rounded-full bg-slate-950 px-3 py-1 text-sm text-white">
                <Icons.git className="size-4" />
                Git
              </span>
            </li>
            <li>
              <span className="flex items-center gap-x-2 whitespace-nowrap rounded-full bg-gray-900 px-3 py-1 text-sm text-white">
                <Icons.gitHub className="size-4" />
                GitHub
              </span>
            </li>
          </ul>
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
