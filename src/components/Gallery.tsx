"use client";

import { ArrowDownRight } from "lucide-react";
import { useLang } from "@/lib/i18n";
import type { GalleryKey } from "@/lib/content";
import type { PhotoName } from "@/lib/images";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

// Portraits take 4 of 12 columns and landscapes 8, so each row lines up at ~the same height.
// On phones it is a 2-column grid; `dense` pulls the second portrait up beside the first.
const tiles: { key: GalleryKey; photo: PhotoName; className: string; sizes: string }[] = [
  { key: "facade", photo: "g-facade", className: "md:col-span-4", sizes: "(min-width: 768px) 32vw, 50vw" },
  { key: "lift", photo: "g-lift", className: "col-span-2 md:col-span-8", sizes: "(min-width: 768px) 64vw, 100vw" },
  { key: "wallpaper", photo: "g-wallpaper", className: "col-span-2 md:col-span-8", sizes: "(min-width: 768px) 64vw, 100vw" },
  { key: "church", photo: "g-church", className: "md:col-span-4", sizes: "(min-width: 768px) 32vw, 50vw" },
  { key: "indoor", photo: "g-indoor", className: "md:col-span-4", sizes: "(min-width: 768px) 32vw, 50vw" },
  { key: "roof", photo: "g-roof", className: "md:col-span-4", sizes: "(min-width: 768px) 32vw, 50vw" },
];

export function Gallery() {
  const { t } = useLang();
  return (
    <section id="bilder" aria-labelledby="bilder-rubrik" className="mx-auto max-w-[90rem] px-5 py-24 sm:px-8 sm:py-36 lg:px-12">
      <SectionHeading n="04" name={t.nav.gallery} id="bilder-rubrik" title={t.gallery.title} />

      <ul className="mt-14 grid grid-flow-row-dense grid-cols-2 gap-x-3 gap-y-8 sm:mt-20 sm:gap-x-5 sm:gap-y-12 md:grid-flow-row md:grid-cols-12 md:items-end">
        {tiles.map((tile) => (
          <li key={tile.key} className={tile.className}>
            <figure>
              <Photo name={tile.photo} alt={t.gallery.items[tile.key]} sizes={tile.sizes} />
              <figcaption className="mt-3 text-[0.95rem] text-ink">{t.gallery.items[tile.key]}</figcaption>
            </figure>
          </li>
        ))}
        <li className="col-span-2 self-end md:col-span-4 md:pb-10 md:pl-6">
          <Reveal>
            <p className="max-w-[22rem] text-[0.95rem] leading-relaxed text-slate">{t.gallery.note}</p>
            <a href="#offert" className="btn btn-line mt-6">
              {t.quote}
              <ArrowDownRight aria-hidden className="size-[1.1rem]" strokeWidth={1.75} />
            </a>
          </Reveal>
        </li>
      </ul>
    </section>
  );
}
