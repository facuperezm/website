import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import Section from "@/components/section-animate";

export default function ProfilePage() {
  return (
    <Section className="mt-16 md:mt-24">
      <div className="mb-8 flex items-center gap-5">
        <Image
          alt="Profile picture of Facundo Perez Montalvo"
          src="/profile.avif"
          className="ring-border/50 size-16 rounded-full ring-1"
          width={64}
          height={64}
          priority
        />
        <div className="space-y-0.5">
          <h1 className="font-display text-2xl tracking-tight">
            Facundo Perez Montalvo
          </h1>
          <p className="text-muted-foreground text-sm tracking-wide">
            Frontend Developer
          </p>
        </div>
      </div>

      <p className="text-muted-foreground mb-8 max-w-[52ch] text-[15px] leading-[1.7]">
        Crafting interfaces at Storied, a family history platform. I care about
        clean architecture and smooth user experiences. Always exploring
        what&apos;s next.
      </p>

      <nav className="flex items-center gap-6 text-sm">
        <Link
          href={siteConfig.links.github}
          className="text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          GitHub
        </Link>
        <span className="text-border">/</span>
        <Link
          href={siteConfig.links.linkedin}
          className="text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          LinkedIn
        </Link>
        <span className="text-border">/</span>
        <Link
          href={siteConfig.links.email}
          className="text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          Email
        </Link>
      </nav>
    </Section>
  );
}
