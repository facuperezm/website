import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="mb-2 font-display text-6xl">404</p>
      <p className="mb-8 text-sm text-muted-foreground">
        This page could not be found.
      </p>
      <Link
        href="/"
        className="text-sm text-muted-foreground underline decoration-border underline-offset-[3px] transition-colors hover:text-foreground hover:decoration-foreground/40"
      >
        Return home
      </Link>
    </div>
  );
}
