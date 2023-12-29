export type Project = {
  title: string;
  link: string;
  tech: string[];
  description: string;
};

export const PROJECTS = [
  {
    title: "Password Generator",
    link: "https://password.facupm.dev/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    description:
      "🔐 Password Generator is a simple app that generates a random password based on the user's input.",
  },
  {
    title: "URL Shortening",
    link: "https://url.facupm.dev",
    tech: ["Vite.js", "Tailwind CSS", "Vercel"],
    description:
      "🔗 URL Shorting is a simple app that allows you to shorten URLs.",
  },
  {
    title: "Dictionary",
    link: "https://dictionary.facupm.dev",
    tech: ["Vite.js", "Tailwind CSS", "Vercel", "React-Query"],
    description:
      "📖 Dictionary is a simple app that allows you to search for words and their definitions.",
  },
  {
    title: "Cartaonline [Work in progress...]",
    link: "https://github.com/facuperezm/frontend-cartaonline-next",
    tech: ["Next.js", "Tailwind CSS", "Vercel", "Radix UI", "Clerk"],
    description:
      "🍕 Cartaonline is a web app that allows you to create your own online menu.",
  },
  {
    title: "Loco Heraldo's Menu",
    link: "https://locoheraldo.vercel.app/",
    tech: ["Next.js", "Tailwind CSS", "Vercel", "i18n", "Google Sheets"],
    description: "🍕 Freelance work for a local restaurant.",
  },
  {
    title: "e-Store",
    link: "https://store.facupm.dev",
    tech: ["Vite.js", "Tailwind CSS", "React-Router-v6", "Fake Store API"],
    description: "🛒 E-commerce store that uses the Fake Store API.",
  },
  {
    title: "Advice App",
    link: "https://advice.facupm.dev",
    tech: ["Next.js", "Tailwind CSS", "Advice Slip API"],
    description:
      "🏃‍♂️ Advice Generator is a simple app that generates random advice.",
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
    title: "Adviency 2022",
    link: "https://adviency2022.facupm.dev",
    tech: ["Next.js", "Tailwind CSS"],
    description:
      "🎄 Adviency is a gift list app that features a budget tracker and uses LocalStorage to store data.",
  },

  {
    title: "Blogr Landing Page",
    link: "https://blogr-facundo.netlify.app/",
    tech: ["React", "Tailwind CSS"],
    description: "🖥 Landing page for a fictional blog.",
  },
  {
    title: "Image Uploader",
    link: "https://uploader.facupm.dev",
    tech: ["React", "Tailwind CSS", "Firebase"],
    description: "📷 Image uploader app with drag & drop area",
  },
] as Project[];
