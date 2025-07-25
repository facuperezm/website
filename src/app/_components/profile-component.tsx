import Image from "next/image";

import ArgSvg from "../../components/arg-flag";
import Section from "../../components/section-animate";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";

export default function ProfilePage() {
  return (
    <Section className="mt-16 justify-center md:flex-row md:justify-end">
      <Image
        alt="Profile picture of Facundo Perez Montalvo"
        src="/profile.avif"
        className="absolute w-36 scale-150 rounded-full blur-[100px] brightness-5 dark:brightness-75"
        width={144}
        height={144}
        priority
        aria-hidden
      />
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipContent side="right" className="ml-2">
            <p className="text-base">🧑‍💻 Open to work!</p>
          </TooltipContent>
          <TooltipTrigger className="max-w-sm shrink cursor-default rounded-full text-left transition-all duration-200 hover:drop-shadow-2xl md:max-w-sm md:shadow-2xl">
            <div className="border-foreground hover:border-foreground rounded-full border transition-all">
              <Image
                alt="Profile picture of Facundo Perez Montalvo"
                src="/profile.avif"
                className="relative z-10 w-20 rounded-full drop-shadow-2xl md:w-24"
                width={144}
                height={144}
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
        <span className="text-muted-foreground w-full gap-2 font-serif text-lg tracking-[0.022em] text-pretty italic">
          Frontend developer based in Argentina{" "}
          <ArgSvg className="inline size-[1.3rem] translate-y-[-2px]" />
        </span>
      </header>
    </Section>
  );
}
