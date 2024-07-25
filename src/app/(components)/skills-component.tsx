import Image from "next/image";

import { Icons } from "@/components/icons";
import Section from "@/components/section-animate";
import Skill from "@/components/skill";

const frontendSkills = [
  { name: "React", icon: Icons.react, bgColor: "bg-[#003159]", type: "svg" },
  { name: "Next.js", icon: Icons.nextjs, bgColor: "bg-black", type: "svg" },
  {
    name: "TypeScript",
    icon: Icons.typescript,
    bgColor: "bg-sky-950",
    type: "svg",
  },
  {
    name: "Tailwind CSS",
    icon: Icons.tailwind,
    bgColor: "bg-sky-700",
    type: "svg",
  },
  { name: "🐻 Zustand", icon: null, bgColor: "bg-green-900", type: "img" },
  { name: "Vitest", icon: Icons.vitest, bgColor: "bg-[#1B1B1F]", type: "svg" },
  {
    name: "react-testing-library",
    icon: "/reactesting.png",
    bgColor: "bg-[#1B1B1D]",
    type: "img",
  },
];

export default function SkillsSection() {
  return (
    <Section id="skills" delay={0.4}>
      <h2 className="mb-2 scroll-m-20 text-2xl font-semibold tracking-tight">
        Skills
      </h2>
      <div className="mb-4 text-lg text-muted-foreground">
        <p className="mb-4">
          I&apos;m always learning new things and improving my skills. Here are
          the technologies I work with:
        </p>
        <p className="mb-4">Frontend:</p>
        <ul className="flex flex-row flex-wrap items-center gap-2">
          {frontendSkills.map((skill) => {
            return (
              <Skill
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                type={skill.type}
                bgColor={skill.bgColor}
              />
            );
          })}
        </ul>
        <p className="my-4">Backend:</p>
        <ul className="flex flex-row flex-wrap items-center gap-2">
          <li>
            <span className="flex items-center gap-x-2 whitespace-nowrap rounded-full bg-[#003159] px-3 py-1 text-sm text-white ">
              <Icons.nodejs className="size-4" />
              Node.js
            </span>
          </li>
          <li>
            <span className="flex items-center gap-x-2 whitespace-nowrap rounded-full bg-black px-3 py-1 text-sm text-white ">
              <Icons.express className="size-4" />
              Express
            </span>
          </li>
          <li>
            <span className="flex items-center gap-x-2 whitespace-nowrap rounded-full bg-sky-950 px-3 py-1 text-sm text-white ">
              <Icons.mongodb className="size-4" />
              MongoDB
            </span>
          </li>
          <li>
            <span className="flex items-center gap-x-2 whitespace-nowrap rounded-full bg-gray-600 px-3 py-1 text-sm text-white">
              <Icons.prisma className="size-4" />
              Prisma
            </span>
          </li>
          <li>
            <span className="flex items-center gap-x-2 whitespace-nowrap rounded-full bg-black px-3 py-1 text-sm text-white">
              <div className="size-4">
                <Image
                  src="/drizzle.png"
                  alt="drizzle orm logo"
                  height={20}
                  width={20}
                  className="size-4"
                />
              </div>
              DrizzleORM
            </span>
          </li>
          <li>
            <span className="flex items-center gap-x-2 whitespace-nowrap rounded-full bg-slate-950 px-3 py-1 text-sm text-white">
              <Icons.git className="size-4" />
              Git
            </span>
          </li>
          <li>
            <span className="flex items-center gap-x-2 whitespace-nowrap rounded-full bg-gray-900 px-3 py-1 text-sm text-white">
              <Icons.gitHub className="size-4" />
              GitHub
            </span>
          </li>
        </ul>
      </div>
    </Section>
  );
}
