import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

type ProjectGridProps = {
  children: string;
  title: string;
  link: string;
  tech: string[];
};

const Project = ({ children, title, link, tech }: ProjectGridProps) => {
  return (
    <div className="flex flex-col w-full space-y-2 border rounded-md p-4 border-neutral-600">
      <Link href={link}>
        <h2 className="flex items-center gap-1 text-lg font-sans font-bold hover:underline transition duration-150 ease-out hover:ease-in">
          {title} <FiArrowUpRight />
        </h2>
      </Link>
      <p className="font-serif text-brand-textSecondary">{children}</p>
      <div className="flex gap-1">
        {tech?.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-sm text-brand-textTerciary border truncate bg-neutral-800 border-neutral-700 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Project;
