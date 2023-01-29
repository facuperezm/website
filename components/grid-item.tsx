import Link from "next/link";
import Image, { StaticImageData } from "next/image";

type ProjectGridProps = {
  children: React.ReactNode;
  title: string;
  thumbnail: StaticImageData;
  link: string;
  repo: string;
};

const ProjectGridItem = ({
  children,
  title,
  thumbnail,
  link,
  repo,
}: ProjectGridProps) => {
  return (
    <div className="w-full align-center">
      <Link href={link}>
        <Image src={thumbnail} alt={title} placeholder="blur" />
      </Link>
      <p className="text-2xl mb-2">{title}</p>
      <p className="text-10">{children}</p>
      <div className="mt-3">
        <Link href={link}>
          <button
            className="
          bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Deploy
          </button>
        </Link>
        <Link href={repo}>
          <button
            className="
          bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
        "
          >
            Repo
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectGridItem;
