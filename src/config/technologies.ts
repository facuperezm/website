import { Icons } from "@/components/icons";

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
  {
    name: "TanStack Query",
    icon: Icons.reactQuery,
    bgColor: "bg-slate-900",
    type: "svg",
  },
  { name: "🐻 Zustand", icon: null, bgColor: "bg-green-900", type: "img" },
  { name: "Vite.js", icon: Icons.vite, bgColor: "bg-slate-800", type: "svg" },
];

const backendSkills = [
  { name: "Node.js", icon: Icons.nodejs, bgColor: "bg-[#003159]", type: "svg" },
  { name: "Express", icon: Icons.express, bgColor: "bg-black", type: "svg" },
  { name: "Fastify", icon: Icons.fastify, bgColor: "bg-black", type: "svg" },
  { name: "MongoDB", icon: Icons.mongodb, bgColor: "bg-sky-950", type: "svg" },
  {
    name: "Supabase",
    icon: Icons.supabase,
    bgColor: "bg-gray-900",
    type: "svg",
  },
];

const toolingSkills = [
  { name: "Prisma", icon: Icons.prisma, bgColor: "bg-gray-600", type: "svg" },
  {
    name: "DrizzleORM",
    icon: "/drizzle.png",
    bgColor: "bg-black",
    type: "img",
  },
  { name: "Vitest", icon: Icons.vitest, bgColor: "bg-[#1B1B1F]", type: "svg" },
  {
    name: "react-testing-library",
    icon: "/reactesting.png",
    bgColor: "bg-[#1B1B1D]",
    type: "img",
  },
  { name: "Git", icon: Icons.git, bgColor: "bg-slate-950", type: "svg" },
  { name: "GitHub", icon: Icons.gitHub, bgColor: "bg-gray-900", type: "svg" },
];

export { frontendSkills, backendSkills, toolingSkills };
