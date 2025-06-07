import { type Metadata } from "next";

import { PROJECTS } from "@/config/projects";
import Project from "@/components/project-component";
import Section from "@/components/section-animate";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectPage() {
  return (
    <Section delay={0.4}>
      <div className="mb-8">
        <h2 className="mb-2 scroll-m-20 text-2xl font-semibold tracking-tight">
          Projects
        </h2>
        <p className="text-muted-foreground mb-4 text-[1.1rem]">
          Some of the projects that I am currently working on:
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-1">
        {PROJECTS.map((project, index) => {
          return (
            <Project
              key={index}
              title={project.title}
              link={project.link}
              tech={project.tech}
              repo={project.repo}
              img={project.img}
            >
              {project.description}
            </Project>
          );
        })}
      </div>
    </Section>
  );
}
