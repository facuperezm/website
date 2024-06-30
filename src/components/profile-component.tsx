"use client";

import Image from "next/image";

import ArgSvg from "./arg";
import Section from "./section-animate";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export default function ProfilePage() {
  return (
    <Section className="mt-16 justify-center md:flex-row md:justify-end">
      <Image
        alt="Profile picture of Facundo Perez Montalvo"
        src="https://pub-729f545d27554bb096839c4c4aeb9f51.r2.dev/profile-pic.jpeg"
        className="absolute w-36 scale-150 rounded-full blur-3xl brightness-[5] dark:brightness-75"
        width={144}
        height={144}
        quality={10}
        priority
        aria-hidden
      />
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipContent side="right" className="ml-2">
            <p className="text-base">🧑‍💻 Open to work!</p>
          </TooltipContent>
          <TooltipTrigger className="max-w-sm shrink cursor-default rounded-full text-left transition-all duration-200 hover:drop-shadow-2xl md:max-w-sm md:shadow-2xl">
            <div className="rounded-full border border-foreground transition-all hover:border-foreground">
              <Image
                alt="Profile picture of Facundo Perez Montalvo"
                src="https://pub-729f545d27554bb096839c4c4aeb9f51.r2.dev/profile-pic.jpeg"
                className="relative z-10 w-20 rounded-full drop-shadow-2xl md:w-24"
                width={150}
                height={150}
                priority
              />
            </div>
          </TooltipTrigger>
        </Tooltip>
      </TooltipProvider>

      <header className="relative">
        <h1 className="relative z-10 my-2 scroll-m-20 text-2xl font-extrabold tracking-tight md:text-4xl">
          Facundo Perez Montalvo
        </h1>
        <span className="w-full gap-2 text-pretty font-serif text-lg italic tracking-[0.022em] text-muted-foreground">
          Frontend developer based in Argentina{" "}
          <ArgSvg className="inline size-[1.3rem] translate-y-[-1px]" />
        </span>
      </header>
    </Section>
  );
}
