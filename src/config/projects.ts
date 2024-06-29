export type Project = {
  title: string;
  link: string;
  tech: string[];
  description: string;
  repo: string;
  img: string;
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
      "Postgres",
    ],
    description:
      "🍕 Cartaonline is an app that allows you to create and manage your own online menu.",
    repo: "https://github.com/facuperezm/cartaonline",
    img: "/projects/cartaonline.png",
  },
  {
    title: "CSV Challenge",
    link: "https://csv-challenge.vercel.app",
    tech: [
      "React",
      "Vite.js",
      "Node.js",
      "Express.js",
      "Playwright",
      "Vitest",
      "testing-library",
      "Papaparse",
      "TanStack Query",
      "Tailwind CSS",
      "Vercel",
    ],
    description:
      "👨🏻‍🏫 Fullstack Challenge using Node.js and React to handle CSV file uploads and provide search functionality.",
    repo: "https://github.com/facuperezm/csv-challenge",
    img: "/projects/csv.png",
  },
  {
    title: "Basement. Challenge",
    description:
      "🏴‍☠️ This project is my approach to the Basement. Frontend Challenge, emphasizing performance and code clarity. It was developed over a 48-hour period, showcasing my ability to deliver quality work under tight deadlines.",
    link: "https://basement.facupm.dev",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Radix UI"],
    repo: "https://github.com/facuperezm/basement-challenge",
    img: "/projects/basement.png",
  },
  {
    title: "PollyGlot Translator",
    link: "https://github.com/facuperezm/pollyglot",
    tech: ["HTML", "CSS", "JavaScript", "OpenAI API", "Astro"],
    description:
      "🦜 PollyGlot is a simple web app that uses the OpenAI API to translate text into different languages.",
    repo: "https://github.com/facuperezm/pollyglot",
    img: "/projects/pollyglot.png",
  },
  {
    title: "Inmobiliaria App",
    link: "https://inmobiliaria.facupm.dev",
    tech: ["Astro", "Tailwind CSS", "ShadcnUI", "Contenful CMS"],
    description:
      "🏠 Real estate app with a CMS for easy content managment. MVP built for a small company in my city.",
    repo: "https://github.com/facuperezm/inmobiliaria",
    img: "/projects/inmobiliaria.png",
  },
  {
    title: "URL Shortening",
    link: "https://url.facupm.dev",
    tech: ["Vite.js", "Tailwind CSS", "Vercel"],
    description:
      "🔗 URL Shorting is a simple app that allows you to shorten URLs. Done following Figma design.",
    repo: "https://github.com/facuperezm/url-shortening",
    img: "/projects/shortly.png",
  },
  {
    title: "Uizard Challenge",
    link: "https://uizard.facupm.dev",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    description:
      "📚 The application is a HackerNews clone that highlights the top 10 stories using an <iframe/> component.",
    repo: "https://github.com/facuperezm/uizard-challenge",
    img: "/projects/uizard.png",
  },
  {
    title: "e-Store",
    link: "https://store.facupm.dev",
    tech: ["Vite.js", "Tailwind CSS", "React-Router-v6", "Fake Store API"],
    description:
      "🛒 E-commerce store that uses the Fake Store API. One of the firsts projects I've ever built.",
    repo: "https://github.com/facuperezm/ecommerce-platform",
    img: "/projects/e-store.png",
  },
] as Project[];
