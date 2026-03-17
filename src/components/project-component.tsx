import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import { ArrowUpRight, Github } from "lucide-react";

import type { FeaturedProject } from "@/types";

type ProjectProps = {
  project: FeaturedProject;
  index?: number;
};

function Project({ project, index = 0 }: ProjectProps) {
  return (
    <motion.article
      className="group overflow-hidden rounded-[2rem] border border-border/80 bg-card/80 shadow-[0_20px_80px_-48px_rgba(30,22,12,0.55)] backdrop-blur-sm"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.55,
        delay: 0.1 + index * 0.08,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border/70 bg-secondary/70">
        <Image
          alt={project.imageAlt}
          src={project.image}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
          priority={index < 2}
        />
        <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent" />
      </div>

      <div className="space-y-5 p-6">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-2xl tracking-tight">{project.title}</h3>

            <div className="hidden shrink-0 rounded-full border border-border/80 bg-background/90 px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase sm:block">
              Case Study
            </div>
          </div>

          <p className="max-w-[36ch] text-sm leading-6 text-muted-foreground">
            {project.description}
          </p>

          <p className="text-sm leading-6 text-foreground/90">
            <span className="font-medium text-foreground">Role:</span>{" "}
            {project.role}
          </p>
        </div>

        <ul className="space-y-2.5">
          {project.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex gap-3 text-sm leading-6 text-muted-foreground"
            >
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/70" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border/80 bg-background/80 px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-1">
          <Link
            href={project.liveUrl}
            aria-label={`Live demo of ${project.title}`}
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform duration-200 hover:-translate-y-0.5"
          >
            Live Demo
            <ArrowUpRight className="size-4" />
          </Link>
          <Link
            href={project.repoUrl}
            aria-label={`Source code for ${project.title}`}
            className="inline-flex items-center gap-2 rounded-full border border-border/80 px-4 py-2 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-secondary"
          >
            Source
            <Github className="size-4" />
          </Link>
        </div>

        {project.note ? (
          <p className="rounded-2xl border border-dashed border-border/80 bg-secondary/60 px-4 py-3 text-xs leading-5 text-muted-foreground">
            {project.note}
          </p>
        ) : null}
      </div>
    </motion.article>
  );
}

export default Project;
