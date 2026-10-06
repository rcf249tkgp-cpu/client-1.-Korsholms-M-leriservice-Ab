import { Camera, type LucideIcon } from "lucide-react";

const tones = {
  charcoal: "bg-charcoal",
  ink: "bg-ink",
  moss: "bg-moss",
  slate: "bg-slate",
} as const;

/** Stand-in for a real photo. Clearly labelled so nobody mistakes it for KMS's own work. */
export function Placeholder({
  label,
  tag,
  icon: Icon = Camera,
  tone = "charcoal",
  className = "",
}: {
  label: string;
  tag: string;
  icon?: LucideIcon;
  tone?: keyof typeof tones;
  className?: string;
}) {
  return (
    <figure
      className={`placeholder-texture relative isolate flex overflow-hidden rounded-2xl ${tones[tone]} ${className}`}
    >
      <Icon aria-hidden className="absolute right-5 bottom-5 size-16 text-white/15 sm:size-20" strokeWidth={1.25} />
      <span className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-charcoal">
        {tag}
      </span>
      <figcaption className="mt-auto p-4 text-base font-semibold text-white sm:p-5">{label}</figcaption>
    </figure>
  );
}
