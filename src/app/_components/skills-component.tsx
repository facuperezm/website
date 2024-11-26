import { backendSkills, frontendSkills } from "@/config/technologies";
import Section from "@/components/section-animate";
import Skill from "@/components/skill";

export default function SkillsSection() {
  return (
    <Section id="skills" delay={0.4}>
      <h2 className="mb-2 scroll-m-20 text-2xl font-semibold tracking-tight">
        Skills
      </h2>
      <div className="mb-4 text-lg text-muted-foreground">
        <p className="mb-4">
          I&apos;m always learning new things and improving my skills. Here are
          the technologies I work with:
        </p>
        <p className="mb-1 font-serif">Frontend:</p>
        <ul className="mb-6 flex flex-row flex-wrap items-center gap-2">
          {frontendSkills.map((skill) => {
            return (
              <Skill
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                type={skill.type}
                bgColor={skill.bgColor}
              />
            );
          })}
        </ul>
        <p className="my-1 font-serif">Backend:</p>
        <ul className="flex flex-row flex-wrap items-center gap-2">
          {backendSkills.map((skill) => {
            return (
              <Skill
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                type={skill.type}
                bgColor={skill.bgColor}
              />
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
