import Section from "../components/Section";
import Layout from "../components/layouts/articles";
import Project from "../components/Project";
import ContactForm from "../components/Contact";
import { countryCodeEmoji } from "country-code-emoji";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import personalImg from "../public/images/facundo.jpg";
import { Subtitle } from "@/components/Subtitle";
import { m } from "framer-motion";

interface Project {
  title: string;
  link: string;
  tech: string[];
  description: string;
}

const LINKEDIN_URL = "https://www.linkedin.com/in/facundoperezm/";
const GITHUB_URL = "https://github.com/facuperezm";

const PROJECTS = [
  {
    title: "URL Shortening",
    link: "https://url-facundo.vercel.app/",
    tech: ["Vite.js", "Tailwind CSS", "Vercel"],
    description:
      "🔗 URL Shorting is a simple app that allows you to shorten URLs.",
  },
  {
    title: "Loco Heraldo's Menu",
    link: "https://locoheraldo.vercel.app/",
    tech: ["Next.js", "Tailwind CSS", "Vercel", "i18n", "Google Sheets"],
    description: "🍕 Freelance work for a local restaurant.",
  },
  {
    title: "Dictionary",
    link: "https://dictionary-facundo.vercel.app/",
    tech: ["Vite.js", "Tailwind CSS", "Vercel", "React-Query"],
    description:
      "📖 Dictionary is a simple app that allows you to search for words and their definitions.",
  },
  {
    title: "Adviency 2022",
    link: "https://adviency-facundo.vercel.app/",
    tech: ["Next.js", "Tailwind CSS"],
    description:
      "🎄 Adviency is a gift list app that features a budget tracker and uses LocalStorage to store data.",
  },
  {
    title: "e-Store",
    link: "https://ecommerce-store-facundo.vercel.app/",
    tech: ["Vite", "Tailwind CSS", "React-Router-v6", "Fake Store API"],
    description: "🛒 E-commerce store that uses the Fake Store API.",
  },
  {
    title: "Advice App",
    link: "https://advice-generator-facundo.vercel.app/",
    tech: ["Next.js", "Tailwind CSS", "Advice Slip API"],
    description:
      "🏃‍♂️ Advice Generator is a simple app that generates random advice.",
  },
  {
    title: "Blogr Landing Page",
    link: "https://blogr-facundo.netlify.app/",
    tech: ["React", "Tailwind CSS"],
    description: "🖥 Landing page for a fictional blog.",
  },
  {
    title: "Todo App",
    link: "https://todotypes-backend.up.railway.app",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Railway",
      "MongoDB",
      "Express.js",
    ],
    description: "📝 Small fullstack to-do app.",
  },
];

export default function Home() {
  return (
    <Layout>
      <main className="flex flex-col justify-center m-auto align-center max-w-3xl font-serif px-4">
        <div className="flex flex-col-reverse md:flex-row justify-center md:justify-right mt-16">
          <div className="md:self-center flex-grow">
            <h1 className="text-2xl md:text-4xl font-bold font-sans mt-2 text-brand-textTerciary">
              Facundo Perez Montalvo
            </h1>
            <span className="font-newsreader italic">
              Frontend developer based in Argentina {"  "}
            </span>
            {countryCodeEmoji("AR")}
          </div>
          <div className="relative flex-shrink-1 mb-2 text-left max-w-sm rounded-lg md:max-w-sm">
            <Image
              alt="profile picture"
              src={personalImg}
              className="rounded-2xl w-28 md:w-56"
              priority
            />
          </div>
        </div>
        <Section delay={0.2}>
          <Subtitle>About me</Subtitle>
          <div>
            <p className="mb-2">
              Hey! I&apos;m Facundo, a frontend developer with a self-taught
              background in the React stack. I specialize in creating
              user-friendly, visually appealing interfaces.
            </p>
            <p className="mb-2">
              I&apos;m driven to make a positive impact on the world through my
              work and I&apos;m always seeking to learn and improve my skills.
            </p>
            <p className="mb-2">
              If you&apos;re looking for a dedicated frontend developer to join
              your team, I would love to hear from you. Let&apos;s work together
              to create something amazing!
            </p>
          </div>
          <div className="align-center pt-1">
            <div className="flex gap-2 justify-left">
              <Link href={LINKEDIN_URL} target="_blank">
                <button className="flex text-sm gap-2 items-center align-center px-4 py-2 text-white font-medium rounded-md border transition-all hover:text-white hover:bg-neutral-700 hover:border-transparent focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1  duration-300 ease-out hover:ease-in transform hover:shadow-lg">
                  <IoLogoLinkedin /> View Linkedin
                </button>
              </Link>
              <Link href={GITHUB_URL} target="_blank">
                <button className="flex text-sm gap-2 items-center align-center px-4 py-2 text-white font-medium bg-neutral-600 rounded-md transition-all border border-transparent hover:bg-gray-300 hover:text-black hover:border-transparent focus:outline-none focus:ring-1 focus:ring-purple-600 focus:ring-offset-2  duration-300 ease-out hover:ease-in transform hover:shadow-lg">
                  <IoLogoGithub /> View GitHub
                </button>
              </Link>
            </div>
          </div>
        </Section>
        <Section delay={0.2}>
          <Layout>
            <Subtitle>Projects</Subtitle>
            <p className="mb-4 font-serif">
              Some of the projects that I am currently working on:
            </p>
            <div className="grid grid-cols-1 gap-2">
              {PROJECTS.map(
                (project: Project, index: number): React.ReactNode => {
                  return (
                    <Section key={index}>
                      <Project
                        title={project.title}
                        link={project.link}
                        tech={project.tech}
                      >
                        {project.description}
                      </Project>
                    </Section>
                  );
                }
              )}
            </div>
          </Layout>
        </Section>
        <Section delay={0.3}>
          <Subtitle>Contact me</Subtitle>
          <p>
            Do you have a job opportunity or idea you&apos;d like to discuss?
            Feel free to send me an email:
          </p>
          <ContactForm />
        </Section>
      </main>
    </Layout>
  );
}
