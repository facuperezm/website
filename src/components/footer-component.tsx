import { siteConfig } from "@/config/site";
import Link from "next/link";
import { ModeToggle } from "./ui/heart-theme";

function Footer() {
  return (
    <footer className="container flex max-w-3xl flex-col justify-between gap-1 py-3 text-center text-sm text-muted-foreground md:flex-row">
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
      <p className="font-serif tracking-[0.020em]">
        Dream big, work hard, stay focused.
      </p>
    </footer>
  );
}

export default Footer;
