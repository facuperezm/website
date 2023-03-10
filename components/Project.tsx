import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

type ProjectProps = {
  children: string;
  title: string;
  link: string;
  tech: string[];
};

const Project = ({ children, title, link, tech }: ProjectProps) => {
  return (
    <div className="flex flex-col w-full space-y-2 border rounded-md p-4 border-neutral-600 transition duration-300 ease-out hover:ease-in transform hover:shadow-lg">
      <Link href={link}>
        <h2 className="flex items-center gap-1 text-lg font-sans font-bold hover:underline">
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
