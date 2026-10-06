"use client";

import { useLang } from "@/lib/i18n";
import { serviceKeys, type ServiceKey } from "@/lib/content";
import type { PhotoName } from "@/lib/images";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionHeading";

function Group({
  title,
  keys,
  photo,
  alt,
  className = "",
  photoClass = "",
}: {
  title: string;
  keys: readonly ServiceKey[];
  photo: PhotoName;
  alt: string;
  className?: string;
  photoClass?: string;
}) {
  const { t } = useLang();
  return (
    <div className={className}>
      <Photo name={photo} alt={alt} sizes="(min-width: 1024px) 40vw, 85vw" className={photoClass} />
      <Reveal>
        <h3 className="display mt-8 text-[2rem] sm:text-[2.4rem]">{title}</h3>
        <ul className="mt-5 border-t border-charcoal/80">
          {keys.map((k) => (
            <li key={k} className="border-b border-line py-4 text-[1.0625rem] text-ink">
              {t.services.items[k]}
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}

export function Services() {
  const { t } = useLang();
  return (
    <section
      id="tjanster"
      aria-labelledby="tjanster-rubrik"
      className="mx-auto max-w-[90rem] px-5 pt-24 pb-28 sm:px-8 sm:pt-36 sm:pb-40 lg:px-12"
    >
      <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
        <div className="lg:col-span-7">
          <SectionLabel n="01" name={t.nav.services} />
          <h2 id="tjanster-rubrik" className="display mt-6 text-[clamp(2.4rem,7.2vw,4.75rem)]">
            {t.services.title}
          </h2>
        </div>
        <p className="max-w-[30rem] text-lg leading-[1.7] text-slate lg:col-span-4 lg:col-start-9 lg:pb-3">
          {t.services.lead}
        </p>
      </Reveal>

      <div className="mt-16 grid gap-20 sm:mt-24 lg:grid-cols-12 lg:gap-8">
        <Group
          title={t.services.indoor}
          keys={serviceKeys.indoor}
          photo="indoor"
          alt={t.images.indoor}
          className="lg:col-span-5"
          photoClass="w-[88%] lg:w-full"
        />
        <Group
          title={t.services.outdoor}
          keys={serviceKeys.outdoor}
          photo="outdoor"
          alt={t.images.outdoor}
          className="lg:col-span-5 lg:col-start-8 lg:mt-48"
          photoClass="ml-auto w-[88%] lg:w-full"
        />
      </div>
    </section>
  );
}
