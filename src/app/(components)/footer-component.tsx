"use client";

import React from "react";
import Link from "next/link";

import { siteConfig } from "@/config/site";

import { ModeToggle } from "../../components/ui/heart-theme";
import { Separator } from "../../components/ui/separator";

function Footer() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <>
      <footer className="mx-auto flex max-w-4xl flex-col justify-between gap-1 px-4 py-3 text-center text-sm text-muted-foreground md:flex-row">
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
        <p
          onClick={() => setIsOpen(!isOpen)}
          className="font-serif italic tracking-[0.020em]"
        >
          Dream big, work hard, stay focused.
        </p>
      </footer>
      {isOpen && (
        <>
          <Separator className="bg-muted/40" />
          <div className="relative mx-auto max-w-3xl px-4 py-8 font-serif italic tracking-[0.020em] text-muted-foreground">
            <p className="text-pretty">
              My life is guided by the principle of pursuing my passions and
              delivering excellence in everything I do. I know that by doing
              what I love, I am making a positive impact in the world.
            </p>
          </div>
        </>
      )}
    </>
  );
}

export default Footer;
