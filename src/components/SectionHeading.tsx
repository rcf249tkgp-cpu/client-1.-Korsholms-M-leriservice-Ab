import { Reveal } from "./Reveal";

export function SectionHeading({
  title,
  lead,
  onDark = false,
  id,
}: {
  title: string;
  lead?: string;
  onDark?: boolean;
  id?: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      <h2
        id={id}
        className={`font-wide text-[clamp(2rem,6vw,3.25rem)] leading-[1.02] font-black tracking-[-0.025em] text-balance ${
          onDark ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p className={`mt-4 text-lg leading-relaxed ${onDark ? "text-white/75" : "text-ink"}`}>{lead}</p>
      )}
    </Reveal>
  );
}
