"use client";

import { Building, Camera, Church, House, PaintRoller, Truck } from "lucide-react";
import { useLang } from "@/lib/i18n";
import type { GalleryKey } from "@/lib/content";
import { Placeholder } from "./Placeholder";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const tiles: {
  key: GalleryKey;
  icon: typeof Camera;
  tone: "charcoal" | "ink" | "moss" | "slate";
  className: string;
}[] = [
  { key: "facade", icon: Building, tone: "ink", className: "col-span-2 aspect-[16/10] md:row-span-2 md:aspect-auto" },
  { key: "church", icon: Church, tone: "moss", className: "aspect-square md:aspect-[4/3]" },
  { key: "lift", icon: Truck, tone: "charcoal", className: "aspect-square md:aspect-[4/3]" },
  { key: "indoor", icon: PaintRoller, tone: "slate", className: "aspect-square md:aspect-[4/3]" },
  { key: "roof", icon: House, tone: "charcoal", className: "aspect-square md:aspect-[4/3]" },
  { key: "wallpaper", icon: Camera, tone: "ink", className: "col-span-2 aspect-[16/9] md:col-span-1 md:aspect-[4/3]" },
];

export function Gallery() {
  const { t } = useLang();
  return (
    <section id="bilder" aria-labelledby="bilder-rubrik" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="bilder-rubrik" title={t.gallery.title} lead={t.gallery.note} />
        <Reveal className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3" delay={0.1}>
          {tiles.map((tile) => (
            <Placeholder
              key={tile.key}
              label={t.gallery.items[tile.key]}
              tag={t.placeholder}
              icon={tile.icon}
              tone={tile.tone}
              className={tile.className}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
