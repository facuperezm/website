import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="flex items-center justify-between text-xs tracking-wide text-muted-foreground/70">
        <p>{new Date().getFullYear()}</p>
        <Link
          href="https://github.com/facuperezm/website"
          className="transition-colors duration-200 hover:text-foreground"
        >
          Source
        </Link>
      </div>
    </footer>
  );
}
