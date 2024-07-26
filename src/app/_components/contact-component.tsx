import ContactForm from "@/components/contact-form";
import Section from "@/components/section-animate";

export default function ContactFormSection() {
  return (
    <Section id="contact" delay={0.5}>
      <div className="mb-8">
        <h2 className="mb-2 scroll-m-20 text-2xl font-semibold tracking-tight">
          Contact me
        </h2>
        <p className="mb-4 text-lg text-muted-foreground">
          Do you have a job opportunity or idea you&apos;d like to discuss? Feel
          free to send me an email:
        </p>
      </div>
      <ContactForm />
    </Section>
  );
}
