import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ProjectProps = {
  children: string;
  title: string;
  link: string;
};

function Project({ children, title, link }: ProjectProps) {
  return (
    <article className="group">
      <Link
        href={link}
        className="inline-flex items-center gap-1 font-medium transition-colors"
      >
        <span className="underline decoration-border/60 underline-offset-[3px] transition-all duration-200 group-hover:decoration-foreground/30">
          {title}
        </span>
        <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </Link>
      <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">
        {children}
      </p>
    </article>
  );
}

export default Project;
