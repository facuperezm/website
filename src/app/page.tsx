import { PROJECTS } from "@/config/projects";
import Project from "@/components/project-component";
import Section from "@/components/section-animate";

export default function HomePage() {
  return (
    <Section delay={0.3}>
      <header className="mb-8 flex items-center gap-3">
        <h2 className="text-sm font-medium tracking-wide">Projects</h2>
        <div className="h-px flex-1 bg-border/50" />
      </header>
      <div className="space-y-7">
        {PROJECTS.map((project, index) => (
          <Project key={index} title={project.title} link={project.link}>
            {project.description}
          </Project>
        ))}
      </div>
    </Section>
  );
}
