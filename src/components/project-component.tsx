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

function Project({ children, title, link }: ProjectProps) {
  return (
    <article>
      <Link
        href={link}
        className="group font-medium underline-offset-4 hover:underline"
      >
        {title}
        <ArrowUpRight className="text-muted-foreground mb-0.5 ml-0.5 inline size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
      <p className="text-muted-foreground mt-1">{children}</p>
    </article>
  );
}

export default Project;
