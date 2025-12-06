import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { siteConfig } from "@/config/site";
import Section from "@/components/section-animate";

export default function ProfilePage() {
  return (
    <Section className="mt-12 md:mt-16">
      <div className="mb-6 flex items-center gap-4">
        <Image
          alt="Profile picture of Facundo Perez Montalvo"
          src="/profile.avif"
          className="size-14 rounded-full"
          width={56}
          height={56}
          priority
        />
        <div>
          <h1 className="text-lg font-medium">Facundo Perez Montalvo</h1>
          <p className="text-sm text-muted-foreground">Frontend Developer</p>
        </div>
      </div>
      <p className="mb-4 max-w-[55ch] leading-relaxed text-muted-foreground">
        Crafting interfaces at Storied, a family history platform. I care about
        clean architecture and smooth user experiences. Always exploring
        what&apos;s next.
      </p>
      <div className="flex gap-4 text-sm">
        <Link
          href={siteConfig.links.github}
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          GitHub
          <ArrowUpRight className="mb-0.5 ml-0.5 inline size-3" />
        </Link>
        <Link
          href={siteConfig.links.linkedin}
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          LinkedIn
          <ArrowUpRight className="mb-0.5 ml-0.5 inline size-3" />
        </Link>
        <Link
          href={siteConfig.links.email}
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Email
          <ArrowUpRight className="mb-0.5 ml-0.5 inline size-3" />
        </Link>
      </div>
    </Section>
  );
}
