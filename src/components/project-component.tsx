import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type ProjectProps = {
  children: string;
  title: string;
  link: string;
  tech?: string[];
};

function Project({ children, title, link, tech }: ProjectProps) {
  return (
    <div className="flex w-full flex-col space-y-2 rounded-md border p-4 transition duration-300 ease-out hover:shadow-lg hover:ease-in">
      <Link href={link}>
        <h3 className="group flex items-center gap-1 text-lg font-bold transition duration-500 hover:underline">
          {title}{" "}
          <span className="text-foreground/80 transition-transform duration-200 group-hover:translate-x-[1px] group-hover:translate-y-[-1px]">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </h3>
      </Link>
      <p className="leading-relaxed text-muted-foreground">{children}</p>
      <div className="flex flex-wrap gap-1">
        {tech?.map((tech) => (
          <Badge variant="outline" key={tech} className="truncate">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export default Project;
