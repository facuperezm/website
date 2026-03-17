type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <header className="mb-8 max-w-3xl space-y-3">
      <p className="text-xs font-semibold tracking-[0.24em] text-muted-foreground uppercase">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      <p className="max-w-[64ch] text-base leading-7 text-muted-foreground sm:text-lg">
        {description}
      </p>
    </header>
  );
}
