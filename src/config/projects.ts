export type Project = {
  title: string;
  link: string;
  tech: string[];
  description: string;
};

export const PROJECTS = [
  {
    title: "cartaonline.",
    link: "https://github.com/facuperezm/frontend-cartaonline-next",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Vercel",
      "Radix UI",
      "Clerk",
      "UploadThing",
      "Zod",
      "Prisma",
      "MySQL",
    ],
    description:
      "🍕 Cartaonline is an app that allows you to create and manage your own online menu.",
  },
  {
    title: "Basement. Challenge",
    description: "🏴‍☠️ This is my solution to the Basement Frontend Challenge.",
    link: "https://basement.facupm.dev",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Radix UI"],
  },
  {
    title: "Uizard Challenge",
    link: "https://uizard.facupm.dev",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    description:
      "📚 The application is a HackerNews clone that highlights the top 10 stories using an <iframe/> component.",
  },
  {
    title: "URL Shortening",
    link: "https://url.facupm.dev",
    tech: ["Vite.js", "Tailwind CSS", "Vercel"],
    description:
      "🔗 URL Shorting is a simple app that allows you to shorten URLs.",
  },
  {
    title: "Password Generator",
    link: "https://password.facupm.dev/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    description:
      "🔐 Password Generator is a simple app that generates a random password based on the user's input.",
  },
  {
    title: "e-Store",
    link: "https://store.facupm.dev",
    tech: ["Vite.js", "Tailwind CSS", "React-Router-v6", "Fake Store API"],
    description: "🛒 E-commerce store that uses the Fake Store API.",
  },
  {
    title: "Image Uploader",
    link: "https://uploader.facupm.dev",
    tech: ["React", "Tailwind CSS", "Firebase"],
    description: "📷 Image uploader app with drag & drop area",
  },
] as Project[];
