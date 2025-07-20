import AboutMeSection from "./_components/about-me-component";
import ContactFormSection from "./_components/contact-component";
import SkillsSection from "./_components/skills-component";
import GitHubContributions from "@/components/github-contributions";

export default function HomePage() {
  return (
    <>
      <AboutMeSection />
      <SkillsSection />
      <GitHubContributions />
      <ContactFormSection />
    </>
  );
}
