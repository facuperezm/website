import Link from "next/link";
import * as motion from "motion/react-client";
import { ArrowUpRight } from "lucide-react";

type ProjectProps = {
  children: string;
  title: string;
  link: string;
  index?: number;
};

function Project({ children, title, link, index = 0 }: ProjectProps) {
  return (
    <motion.article
      className="group motion-reduce:transition-none"
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.4 + index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <Link
        href={link}
        className="inline-flex items-center gap-1 font-medium transition-colors motion-reduce:transition-none"
      >
        <span className="underline decoration-border/60 underline-offset-[3px] transition-all duration-200 motion-reduce:transition-none group-hover:decoration-foreground/30">
          {title}
        </span>
        <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform duration-200 motion-reduce:transition-none group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </Link>
      <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">
        {children}
      </p>
    </motion.article>
  );
}

export default Project;
