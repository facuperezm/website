export type SiteConfig = {
  name: string;
  title: string;
  nickname: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
    linkedin: string;
    repo: string;
    email: string;
    resume: string;
  };
};

export type ProofTheme = {
  title: string;
  description: string;
};

export type FeaturedProject = {
  title: string;
  description: string;
  role: string;
  liveUrl: string;
  repoUrl: string;
  image: string;
  imageAlt: string;
  stack: string[];
  bullets: string[];
  note?: string;
};

export type ExperienceEntry = {
  company: string;
  role: string;
  timeframe: string;
  note?: string;
  summary: string;
  bullets: string[];
};

export type ResumeRole = {
  title: string;
  timeframe: string;
  bullets: string[];
};

export type ResumeExperienceEntry = {
  company: string;
  location: string;
  roles: ResumeRole[];
};
