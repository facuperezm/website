import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

type ProjectProps = {
  children: string;
  title: string;
  link: string;
  tech?: string[];
};

function Project({ children, title, link, tech }: ProjectProps) {
  return (
    <div className="flex flex-col w-full p-4 space-y-2 transition duration-300 ease-out transform border rounded-md hover:ease-in hover:shadow-lg">
      <Link href={link}>
        <h3 className="group flex items-center gap-1 text-lg font-bold hover:underline transition duration-500">
          {title}{" "}
          <span className="text-foreground/80 group-hover:-translate-y-[1px] group-hover:translate-x-[1px] transition-transform duration-200">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </h3>
      </Link>
      <p className="leading-relaxed text-muted-foreground">{children}</p>
      <div className="flex gap-1 flex-wrap">
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
