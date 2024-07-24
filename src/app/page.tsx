import AboutMeSection from "./(components)/about-me-component";
import ContactFormSection from "./(components)/contact-component";
import SkillsSection from "./(components)/skills-component";

export default function HomePage() {
  return (
    <>
      <AboutMeSection />
      <SkillsSection />
      <ContactFormSection />
    </>
  );
}
