import { siteConfig } from "@/config/site";
import Link from "next/link";
import { ModeToggle } from "./ui/heart-theme";

function Footer() {
  return (
    <footer className="py-3 text-center text-sm text-muted-foreground/80">
      Built with <ModeToggle /> by{" "}
      <Link href={siteConfig.links.linkedin} className="hover:underline">
        {siteConfig.nickname}
      </Link>
    </footer>
  );
}

export default Footer;
