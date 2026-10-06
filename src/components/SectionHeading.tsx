import { Reveal } from "./Reveal";

/** Small numbered chapter marker: "01" and a hairline, plus an optional name. */
export function SectionLabel({ n, name, onDark = false }: { n: string; name?: string; onDark?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-sm ${onDark ? "text-white/60" : "text-slate"}`}>
      <span className={`tabular font-semibold ${onDark ? "text-lime" : "text-moss"}`}>{n}</span>
      <span aria-hidden className={`h-px w-10 ${onDark ? "bg-white/30" : "bg-charcoal/25"}`} />
      {name && <span>{name}</span>}
    </p>
  );
}

export function SectionHeading({
  n,
  name,
  title,
  lead,
  onDark = false,
  id,
  className = "",
}: {
  n: string;
  name?: string;
  title: string;
  lead?: string;
  onDark?: boolean;
  id?: string;
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <SectionLabel n={n} name={name} onDark={onDark} />
      <h2
        id={id}
        className={`display mt-6 text-[clamp(2.4rem,7.2vw,4.75rem)] ${onDark ? "text-white" : "text-charcoal"}`}
      >
        {title}
      </h2>
      {lead && (
        <p className={`mt-6 max-w-[34rem] text-lg leading-[1.7] ${onDark ? "text-white/70" : "text-slate"}`}>{lead}</p>
      )}
    </Reveal>
  );
}
