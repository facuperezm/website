import React from "react";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { ModeToggle } from "@/components/ui/heart-theme";

import { ClientQuote } from "./expandable-component";

export default function FooterContent() {
  return (
    <>
      <footer className="mx-auto flex max-w-3xl flex-col flex-wrap justify-between gap-1 px-4 py-3 text-center text-sm text-muted-foreground md:flex-row">
        <p>
          <Link href={siteConfig.links.repo} className="hover:underline">
            Built
          </Link>{" "}
          with <ModeToggle className="px-2" /> by{" "}
          <Link href={siteConfig.links.linkedin} className="hover:underline">
            {siteConfig.nickname}
          </Link>
          .
        </p>
        <ClientQuote />
      </footer>
    </>
  );
}
