import { PROJECTS } from "@/config/projects";
import Project from "@/components/project-component";
import Section from "@/components/section-animate";

export default function HomePage() {
  return (
    <Section delay={0.3}>
      <h2 className="mb-6 text-lg font-medium">Projects</h2>
      <div className="space-y-6">
        {PROJECTS.map((project, index) => (
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
        ))}
      </div>
    </Section>
  );
}
