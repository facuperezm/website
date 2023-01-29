import Section from "../components/Section";
import Layout from "../components/layouts/articles";
import ProjectGridItem from "../components/grid-item";
import ContactForm from "../components/Contact";
import { countryCodeEmoji } from "country-code-emoji";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import bloggy from "../public/images/bloggy.jpeg";
import advicegen from "../public/images/advicegen.jpeg";
import landing from "../public/images/landing.jpeg";
import portfolio from "../public/images/portfolio.jpeg";
import estore from "../public/images/e-store.jpeg";
import personalImg from "../public/images/facundo.jpg";
import adviency from "../public/images/adviency.jpeg";
import { Subtitle } from "@/components/Subtitle";

export default function Home() {
  return (
    <main className="flex flex-col justify-center m-auto align-center max-w-3xl font-serif px-4">
      <div className="flex flex-col-reverse md:flex-row justify-center md:justify-right mt-28">
        <div className="md:self-center flex-grow mb-8">
          <h1 className="text-2xl md:text-4xl font-bold font-sans mt-2">
            Facundo Perez Montalvo
          </h1>
          <span className="font-mono">
            Frontend developer based in Argentina {countryCodeEmoji("AR")}
          </span>
        </div>
        <div className="relative flex-shrink-1 mb-2 text-left max-w-sm rounded-lg md:max-w-sm">
          <Image
            alt="profile picture"
            src={personalImg}
            className="rounded-2xl w-28 md:w-56"
          />
        </div>
      </div>
      <Section delay={0.2}>
        <Subtitle>About me</Subtitle>
        <p className="mb-2">
          Hey! I&apos;m Facundo, a frontend developer with a self-taught
          background in the React stack. I specialize in creating user-friendly,
          visually appealing interfaces.
        </p>
        <p className="mb-2">
          I&apos;m driven to make a positive impact on the world through my work
          and I&apos;m always seeking to learn and improve my skills.
        </p>
        <p className="mb-2">
          If you&apos;re looking for a dedicated frontend developer to join your
          team, I would love to hear from you. Let&apos;s work together to
          create something amazing!
        </p>

        <div className="align-center mb-10">
          <div className="flex gap-2 justify-left">
            <Link
              href="https://www.linkedin.com/in/facundoperezm/"
              target="_blank"
            >
              <button className="flex gap-2 items-center align-center px-4 py-2 text-white font-semibold rounded-md border transition-all hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-1 focus:ring-purple-600 focus:ring-offset-2">
                <IoLogoLinkedin /> View Linkedin
              </button>
            </Link>
            <Link href="https://github.com/facuperezm" target="_blank">
              <button className="flex gap-2 items-center align-center px-4 py-2 text-white font-semibold bg-teal-500 rounded-md transition-all border border-transparent hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-1 focus:ring-purple-600 focus:ring-offset-2">
                <IoLogoGithub /> View GitHub
              </button>
            </Link>
          </div>
        </div>
      </Section>
      <Section delay={0.3}>
        <Layout>
          <Subtitle>Projects</Subtitle>
          <p className="mb-4 font-serif">
            Some of the projects that I am currently working on:
          </p>
          <div className="grid grid-cols-4 md:grid-cols-1 gap-4">
            <Section>
              <ProjectGridItem
                title="Adviency 2022"
                thumbnail={adviency}
                link="https://adviency-facundo.vercel.app/"
                repo="https://github.com/facuperezm/adviency"
              >
                🎄 Adviency is a gift list app made during december 2022. Made
                with React, Next.js and TailwindCSS
              </ProjectGridItem>
            </Section>
            <Section>
              <ProjectGridItem
                title="e-Store"
                thumbnail={estore}
                link="https://ecommerce-store-facundo.vercel.app/"
                repo="https://github.com/facuperezm/e-Store"
              >
                🛒 E-commerce app made with React, TailwindCSS using Context and
                Reducer
              </ProjectGridItem>
            </Section>
            <Section>
              <ProjectGridItem
                title="Advice App"
                thumbnail={advicegen}
                link="https://advice-generator-facundo.vercel.app/"
                repo="https://github.com/facuperezm/advice-generator"
              >
                🏃‍♂️ Advice Generator made with React, Next.js and TailwindCSS
              </ProjectGridItem>
            </Section>
            <Section>
              <ProjectGridItem
                title="Blogr Landing Page"
                thumbnail={landing}
                link="https://blogr-facundo.netlify.app/"
                repo="https://github.com/facuperezm/Blogr-LandingPage"
              >
                🖥 Landing Page made with React and TailwindCSS
              </ProjectGridItem>
            </Section>
            <Section>
              <ProjectGridItem
                title="Bloggy"
                thumbnail={bloggy}
                link="https://bloggy-facundo.vercel.app/"
                repo="https://github.com/facuperezm/Bloggy"
              >
                📖 Blog app made with Next.js, TailwindCSS and Firebase
              </ProjectGridItem>
            </Section>
            <Section>
              <ProjectGridItem
                title="Personal Website"
                thumbnail={portfolio}
                link="https://facuperezm.vercel.app/"
                repo="https://github.com/facuperezm/facundo-portfolio"
              >
                🙋‍♂️ Personal website made with Next.js and ChakraUI
              </ProjectGridItem>
            </Section>
          </div>
        </Layout>
      </Section>
      <Section delay={0.4}>
        <Subtitle>Contact me</Subtitle>
        <p className="mb-4">
          Do you have a job opportunity or idea you&apos;d like to discuss? Feel
          free to send me an email:
        </p>
        <ContactForm />
      </Section>
    </main>
  );
}
