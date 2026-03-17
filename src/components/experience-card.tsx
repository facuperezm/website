import type { ExperienceEntry } from "@/types";

type ExperienceCardProps = {
  entry: ExperienceEntry;
};

export default function ExperienceCard({ entry }: ExperienceCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-border/80 bg-card/80 p-6 shadow-[0_18px_70px_-48px_rgba(30,22,12,0.45)]">
      <div className="mb-4 space-y-2">
        <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
          {entry.timeframe}
        </p>
        <div className="space-y-1">
          <h3 className="font-display text-2xl tracking-tight">
            {entry.company}
          </h3>
          <p className="text-sm font-medium text-foreground/90">{entry.role}</p>
        </div>
        {entry.note ? (
          <p className="text-sm leading-6 text-muted-foreground">{entry.note}</p>
        ) : null}
      </div>

      <p className="mb-4 text-sm leading-6 text-muted-foreground">
        {entry.summary}
      </p>

      <ul className="space-y-2.5">
        {entry.bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex gap-3 text-sm leading-6 text-muted-foreground"
          >
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/70" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
