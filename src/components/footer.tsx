import Link from "next/link";

import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-border/50 py-8">
      <div className="flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="font-medium text-foreground">
            Facundo Perez Montalvo
          </p>
          <p>
            Senior Frontend Developer focused on React, Next.js, TypeScript, and
            product UI that feels intentional in production.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs font-medium tracking-wide sm:justify-end">
          <Link
            href={siteConfig.links.linkedin}
            className="transition-colors duration-200 hover:text-foreground"
          >
            LinkedIn
          </Link>
          <Link
            href={siteConfig.links.github}
            className="transition-colors duration-200 hover:text-foreground"
          >
            GitHub
          </Link>
          <Link
            href={siteConfig.links.resume}
            className="transition-colors duration-200 hover:text-foreground"
          >
            Resume
          </Link>
          <Link
            href={siteConfig.links.repo}
            className="transition-colors duration-200 hover:text-foreground"
          >
            Source
          </Link>
          <span>{new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
