import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ProjectProps = {
  children: string;
  title: string;
  link: string;
  tech?: string[];
  repo: string;
  img: string;
};

function Project({ children, title, link, tech }: ProjectProps) {
  return (
    <article className="group relative">
      <div className="flex items-baseline justify-between gap-4">
        <Link
          href={link}
          className="inline-flex items-center gap-1 font-medium transition-colors"
        >
          <span className="decoration-border/60 group-hover:decoration-foreground/30 underline underline-offset-[3px] transition-all duration-200">
            {title}
          </span>
          <ArrowUpRight className="text-muted-foreground size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
        {tech && tech.length > 0 && (
          <span className="text-muted-foreground/60 hidden text-xs tracking-wide sm:block">
            {tech.slice(0, 2).join(" · ")}
          </span>
        )}
      </div>
      <p className="text-muted-foreground mt-1.5 text-[15px] leading-relaxed">
        {children}
      </p>
    </article>
  );
}

export default Project;
