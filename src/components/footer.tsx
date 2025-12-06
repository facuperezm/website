import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between py-8 text-sm text-muted-foreground">
      <p>Never stop learning · {new Date().getFullYear()}</p>
      <Link
        href="https://github.com/facuperezm/website"
        className="transition-colors hover:text-foreground"
        aria-label="View source on GitHub"
      >
        <GitHubLogoIcon className="size-4" />
      </Link>
    </footer>
  );
}
