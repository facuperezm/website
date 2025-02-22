import Link from "next/link";

import { ModeToggle } from "../../components/ui/theme-toggle";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 z-52 mx-auto mt-4 flex w-full items-center justify-center">
      <nav className="flex items-center justify-center rounded-full px-3 text-sm font-medium text-gray-600 dark:text-gray-200">
        <Link
          className="hover:text-secondary-foreground dark:hover:text-secondary-foreground relative block p-2 transition"
          href="/#top"
        >
          Home
        </Link>
        <Link
          className="hover:text-secondary-foreground dark:hover:text-secondary-foreground relative block p-2 transition"
          href="/projects"
        >
          Projects
        </Link>
        <Link
          className="hover:text-secondary-foreground dark:hover:text-secondary-foreground relative block p-2 transition"
          href="/#skills"
        >
          Skills
        </Link>
        <Link
          className="hover:text-secondary-foreground dark:hover:text-secondary-foreground relative block p-2 transition"
          href="/#contact"
        >
          Contact me
        </Link>
        <ModeToggle />
      </nav>
    </div>
  );
}
