import type {
  ExperienceEntry,
  FeaturedProject,
  ProofTheme,
  ResumeExperienceEntry,
} from "@/types";

export const heroHighlights = [
  "React, Next.js, TypeScript",
  "Product UI, design systems, performance",
  "Currently building at Svitla Systems",
  "Remote from Argentina",
];

export const proofThemes: ProofTheme[] = [
  {
    title: "Migration and architecture",
    description:
      "Helped modernize legacy frontend surfaces with Next.js while resolving architectural and design-system constraints.",
  },
  {
    title: "Design implementation quality",
    description:
      "Turn product and design direction into accessible, production-ready interfaces with strong polish and consistency.",
  },
  {
    title: "Performance and API collaboration",
    description:
      "Partner closely with the backend team to improve performance, API communication, and reliability.",
  },
  {
    title: "Ownership and developer experience",
    description:
      "Contribute frontend patterns and internal tooling that help the team ship with less friction.",
  },
];

export const featuredProjects: FeaturedProject[] = [
  {
    title: "Cartaonline",
    description:
      "Restaurant SaaS for digital menus, product management, and QR-ready storefronts.",
    role:
      "End-to-end build across UX, frontend architecture, forms, auth, and backend integrations.",
    liveUrl: "https://cartaonline.facupm.dev",
    repoUrl: "https://github.com/facuperezm/cartaonline",
    image: "/work/cartaonline.webp",
    imageAlt: "Cartaonline dashboard showing digital menu management and QR storefront features",
    stack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Clerk",
      "Zod",
      "Vercel AI SDK",
    ],
    bullets: [
      "Built flows for store setup, menu management, QR sharing, and AI-assisted menu imports.",
      "Used App Router patterns and typed validation to keep a broad product surface maintainable.",
    ],
    note: "Live demo language: Spanish, aligned with the target market in Argentina.",
  },
  {
    title: "Barbershop Management",
    description:
      "Booking product for service businesses with scheduling, team management, and reservations.",
    role:
      "Full-stack implementation focused on branded UI, booking flows, and predictable scheduling.",
    liveUrl: "https://barbershop.facupm.dev",
    repoUrl: "https://github.com/facuperezm/barberia",
    image: "/work/barbershop.webp",
    imageAlt: "Barbershop management app with scheduling interface and booking flow",
    stack: [
      "Next.js",
      "TypeScript",
      "Drizzle ORM",
      "TanStack Query",
      "shadcn/ui",
      "Zod",
    ],
    bullets: [
      "Created a polished marketing and booking surface that balances branding with practical scheduling needs.",
      "Structured the app around reusable UI patterns, typed validation, and predictable admin flows.",
    ],
  },
  {
    title: "Real Estate Platform",
    description:
      "Content-driven property browsing built for speed, SEO, and easy CMS updates.",
    role:
      "Frontend architecture and CMS integration focused on fast browsing and clear information hierarchy.",
    liveUrl: "https://inmobiliaria.facupm.dev",
    repoUrl: "https://github.com/facuperezm/real-state",
    image: "/work/inmobiliaria.webp",
    imageAlt: "Real estate platform displaying property listings with CMS-powered content",
    stack: ["Astro", "TypeScript", "Tailwind CSS", "Contentful", "SEO"],
    bullets: [
      "Built a CMS-backed property site that stays fast while allowing non-technical content updates.",
      "Prioritized search visibility, responsive browsing, and clean editorial presentation.",
    ],
    note: "Live demo language: Spanish, aligned with the intended customer market.",
  },
];

export const experienceEntries: ExperienceEntry[] = [
  {
    company: "Svitla Systems",
    role: "Senior Frontend Developer",
    timeframe: "January 2025 - Present",
    note: "Transitioned into cross-team leadership — code reviews, frontend standards, and architecture guidance.",
    summary:
      "Build product UI for a family history platform, with work spanning migration support, design implementation, performance, and team-facing frontend patterns.",
    bullets: [
      "Owned end-to-end delivery of complex features including an AI-powered story creation pipeline — full architecture design, technical documentation, and ahead-of-deadline shipping.",
      "Drove a platform-wide Next.js migration, resolving critical architectural constraints and translating Figma designs into accessible, production-ready React components.",
      "Established team-wide coding standards and drove a large-scale legacy code reduction. Grew into cross-team leadership — conducting code reviews, guiding architecture, and partnering with backend and QA on delivery quality.",
    ],
  },
  {
    company: "SupportYourApp",
    role: "Technical Support Consultant & Frontend Developer",
    timeframe: "August 2023 - August 2024",
    summary:
      "Solved technical product issues for end users while combining troubleshooting, communication, and frontend/backend context.",
    bullets: [
      "Maintained an average customer satisfaction score of 95% across support work.",
      "Resolved product issues through a mix of debugging, customer communication, and practical HTML, CSS, and JavaScript fixes.",
    ],
  },
  {
    company: "Freelance",
    role: "Frontend React Developer",
    timeframe: "March 2022 - Present",
    summary:
      "Built client-facing web applications for local businesses with a focus on accessibility, responsive behavior, and maintainable frontend delivery.",
    bullets: [
      "Delivered production sites and app experiences across hospitality, services, and real estate use cases.",
      "Handled the full loop from client requirements and UX decisions to implementation and iteration.",
    ],
  },
];

export const resumeExperienceEntries: ResumeExperienceEntry[] = [
  {
    company: "Svitla Systems Inc.",
    location: "Working remotely",
    roles: [
      {
        title: "Senior Frontend Developer",
        timeframe: "January 2025 — Present",
        bullets: [
          "Owned end-to-end delivery of complex features including an AI-powered story creation pipeline — designed the full architecture (Zustand state machine, dual user flows, feature flags), wrote technical documentation before implementation, and shipped ahead of deadline.",
          "Drove a platform-wide Next.js migration, resolving critical architectural constraints. Translated Figma designs into accessible, production-ready React components with strong attention to design system consistency and performance.",
          "Established team-wide coding standards and drove a large-scale legacy code reduction. Grew into cross-team leadership — conducting code reviews, guiding architecture, and partnering with backend and QA on delivery quality.",
        ],
      },
      {
        title: "Middle Frontend Developer",
        timeframe: "August 2024 — January 2025",
        bullets: [
          "Led the migration of a legacy course platform to a modern React stack, ensuring seamless transition of content, functionality, and user experience.",
          "Collaborated with QA to maintain high standards of design accuracy, functionality, and audio quality throughout the migration.",
          "Built and enhanced internal developer tools, streamlining workflows and improving team productivity.",
        ],
      },
    ],
  },
  {
    company: "SupportYourApp",
    location: "Working remotely",
    roles: [
      {
        title: "Technical Support Consultant & Frontend Developer",
        timeframe: "August 2023 — August 2024",
        bullets: [
          "Resolved complex technical issues for software products, achieving a 95% customer satisfaction score across email and phone support.",
          "Applied HTML, CSS, and JavaScript expertise to debug customer-facing frontend and backend issues, reducing resolution times.",
          "Identified recurring user pain points and communicated findings to product teams, contributing to improved product usability.",
        ],
      },
    ],
  },
  {
    company: "Freelance Activity",
    location: "Argentina",
    roles: [
      {
        title: "Frontend React Developer",
        timeframe: "March 2022 — Present",
        bullets: [
          "Built responsive web applications for local businesses across hospitality, services, and real estate, from requirements through deployment.",
          "Delivered production-ready interfaces using React, Next.js, TypeScript, and Tailwind CSS, prioritizing performance and accessibility.",
        ],
      },
    ],
  },
];

export const resumeSummary =
  "Senior Frontend Developer with a product-minded approach to React, Next.js, and TypeScript. I build polished interfaces, translate design systems into production code, and collaborate across product, QA, and backend to ship reliable user experiences.";

export const resumeStack = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Astro",
    "shadcn/ui",
  ],
  product: ["Design implementation", "Accessibility", "Performance", "SEO"],
  data: ["TanStack Query", "Zustand", "Zod", "React Hook Form", "Prisma", "Drizzle ORM"],
  testing: ["Playwright", "Vitest", "React Testing Library", "Storybook"],
};

export const resumeEducation = [
  "Bachelor's in Business Administration and Management, Universidad Siglo 21 (2017 - 2020)",
  "English: fluent · Spanish: native",
];

export const linkedinDraft = {
  headline:
    "Senior Frontend Developer | React, Next.js, TypeScript | Product UI, design systems, performance | Building at Svitla Systems",
  about:
    "Senior Frontend Developer focused on React, Next.js, and TypeScript. I build polished product interfaces, translate design direction into production-ready UI, and partner with backend, QA, and product teams to ship reliable user experiences. Currently building at Svitla Systems, with recent work across frontend modernization, design implementation, performance, and developer experience.",
};

export const githubProfileDraft = [
  "Senior Frontend Developer specializing in React, Next.js, and TypeScript.",
  "Currently building product UI at Svitla Systems, with recent work across frontend migration, design implementation, performance, and developer experience.",
  "I care about product taste, maintainable code, and interfaces that feel intentional in production.",
];
