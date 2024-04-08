export type Project = {
  title: string;
  link: string;
  tech: string[];
  description: string;
  repo: string;
};

export const PROJECTS = [
  {
    title: "cartaonline.",
    link: "https://cartaonline.facupm.dev",
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
    repo: "https://github.com/facuperezm/cartaonline",
  },
  {
    title: "Basement. Challenge",
    description: "🏴‍☠️ This is my solution to the Basement Frontend Challenge.",
    link: "https://basement.facupm.dev",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Radix UI"],
    repo: "https://github.com/facuperezm/basement-challenge",
  },
  {
    title: "Inmobiliaria App",
    link: "https://inmobiliaria.facupm.dev",
    tech: ["Astro", "Tailwind CSS", "ShadcnUI", "Contenful CMS"],
    description: "🏠 Real estate app with a CMS",
    repo: "https://github.com/facuperezm/inmobiliaria",
  },
  {
    title: "URL Shortening",
    link: "https://url.facupm.dev",
    tech: ["Vite.js", "Tailwind CSS", "Vercel"],
    description:
      "🔗 URL Shorting is a simple app that allows you to shorten URLs.",
    repo: "https://github.com/facuperezm/url-shortening",
  },
  {
    title: "Uizard Challenge",
    link: "https://uizard.facupm.dev",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    description:
      "📚 The application is a HackerNews clone that highlights the top 10 stories using an <iframe/> component.",
    repo: "https://github.com/facuperezm/uizard-challenge",
  },
  {
    title: "e-Store",
    link: "https://store.facupm.dev",
    tech: ["Vite.js", "Tailwind CSS", "React-Router-v6", "Fake Store API"],
    description: "🛒 E-commerce store that uses the Fake Store API.",
    repo: "https://github.com/facuperezm/ecommerce-platform",
  },
  {
    title: "Image Uploader",
    link: "https://uploader.facupm.dev",
    tech: ["React", "Tailwind CSS", "Firebase"],
    description: "📷 Image uploader app with drag & drop area",
    repo: "https://github.com/facuperezm/image-uploader",
  },
] as Project[];
