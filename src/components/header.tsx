import Link from "next/link";

import { ModeToggle } from "./ui/theme-toggle";

export default function Header() {
  return (
    <div className="fixed left-0 top-0 z-[52] mx-auto mt-4 flex w-full items-center justify-center">
      <nav className="flex items-center justify-center rounded-full px-3 text-sm font-medium text-gray-600 dark:text-gray-200">
        <Link
          className="relative block p-2 transition hover:text-secondary-foreground dark:hover:text-secondary-foreground"
          href="/#top"
        >
          Home
        </Link>
        <Link
          className="relative block p-2 transition hover:text-secondary-foreground dark:hover:text-secondary-foreground"
          href="/projects"
        >
          Projects
        </Link>
        <Link
          className="relative block p-2 transition hover:text-secondary-foreground dark:hover:text-secondary-foreground"
          href="/#skills"
        >
          Skills
        </Link>
        <Link
          className="relative block p-2 transition hover:text-secondary-foreground dark:hover:text-secondary-foreground"
          href="/#contact"
        >
          Contact me
        </Link>
        <ModeToggle />
      </nav>
    </div>
  );
}
