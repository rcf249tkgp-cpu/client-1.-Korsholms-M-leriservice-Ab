"use client";

import {
  Bath,
  BrickWall,
  Building,
  Droplets,
  Grid2x2,
  Hammer,
  House,
  Layers,
  PaintRoller,
  Paintbrush,
  type LucideIcon,
} from "lucide-react";
import { useLang } from "@/lib/i18n";
import { serviceKeys, type ServiceKey } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons: Record<ServiceKey, LucideIcon> = {
  paint: Paintbrush,
  bath: Bath,
  floor: Layers,
  small: Hammer,
  facade: Building,
  roof: House,
  joints: Grid2x2,
  wash: Droplets,
  chimney: BrickWall,
};

function Group({ title, icon: Icon, keys }: { title: string; icon: LucideIcon; keys: readonly ServiceKey[] }) {
  const { t } = useLang();
  return (
    <div className="rounded-3xl bg-paper p-5 sm:p-8">
      <div className="flex items-center gap-3">
        <span className="flex size-12 items-center justify-center rounded-2xl bg-charcoal text-lime">
          <Icon aria-hidden className="size-6" />
        </span>
        <h3 className="font-wide min-w-0 text-[1.375rem] font-extrabold tracking-[-0.02em] sm:text-3xl">{title}</h3>
      </div>
      <ul className="mt-6 grid gap-3">
        {keys.map((k) => {
          const ItemIcon = icons[k];
          return (
            <li key={k} className="flex items-center gap-4 rounded-2xl border border-line bg-white p-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-lime-soft text-moss">
                <ItemIcon aria-hidden className="size-5" />
              </span>
              <span className="text-lg font-semibold text-charcoal">{t.services.items[k]}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function Services() {
  const { t } = useLang();
  return (
    <section id="tjanster" aria-labelledby="tjanster-rubrik" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="tjanster-rubrik" title={t.services.title} lead={t.services.lead} />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:gap-8">
          <Reveal>
            <Group title={t.services.indoor} icon={PaintRoller} keys={serviceKeys.indoor} />
          </Reveal>
          <Reveal delay={0.1}>
            <Group title={t.services.outdoor} icon={Building} keys={serviceKeys.outdoor} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
