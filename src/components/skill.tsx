import Image from "next/image";

import { cn } from "@/lib/utils";

type IconProps = React.HTMLAttributes<SVGElement>;

interface SkillProps {
  icon: string | ((props: IconProps) => JSX.Element) | null;
  name: string;
  bgColor: string;
  type: string;
}

export default function Skill({ icon, name, bgColor, type }: SkillProps) {
  return (
    <li>
      <span
        className={cn(
          "flex items-center gap-x-2 whitespace-nowrap rounded-full px-3 py-1 text-sm text-white",
          bgColor,
        )}
      >
        {type === "img" && icon ? (
          <div className="size-4">
            <Image
              src={icon.toString() || ""}
              width={20}
              height={20}
              className="size-4"
              alt={name}
            />
          </div>
        ) : typeof icon === "function" ? (
          icon({ className: "size-4" })
        ) : null}
        {name}
      </span>
    </li>
  );
}
