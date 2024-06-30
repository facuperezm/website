import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";

import { Badge } from "@/components/ui/badge";

type ProjectProps = {
  children: string;
  title: string;
  link: string;
  tech?: string[];
  repo: string;
  img: string;
};

function Project({ children, title, link, tech, repo, img }: ProjectProps) {
  return (
    <div className="group flex flex-col space-x-0 space-y-4 md:flex-row md:space-x-8 md:space-y-0">
      <div className="w-full md:w-1/2">
        <div className="relative col-span-6 row-span-5 flex w-full flex-col items-center gap-8 overflow-clip rounded-3xl border border-gray-700 shadow-xl transition duration-500 ease-in-out sm:rounded-xl md:group-hover:shadow-2xl">
          <Image
            width={385}
            height={256}
            src={img}
            alt={title}
            className="h-56 w-full object-cover object-top transition duration-500 sm:h-full sm:border md:scale-110 md:group-hover:scale-105"
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-1 md:w-1/2 md:max-w-lg md:gap-2">
        <div className="flex items-center justify-between">
          <Link href={link}>
            <h3 className="group flex items-center gap-1 text-2xl font-bold transition duration-500 hover:underline">
              {title}{" "}
              <span className="text-foreground/80 transition-transform duration-200 group-hover:translate-x-[1px] group-hover:translate-y-[-1px]">
                <ArrowUpRight className="size-4" />
              </span>
            </h3>
          </Link>
          <Link href={repo}>
            <Github className="size-5 stroke-[1.5] text-gray-400 transition-colors hover:text-foreground" />
          </Link>
        </div>
        <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
          {children}
        </p>
        <div className="mt-auto flex flex-wrap gap-2">
          {tech?.map((tech) => (
            <Badge variant="outline" key={tech} className="truncate">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
