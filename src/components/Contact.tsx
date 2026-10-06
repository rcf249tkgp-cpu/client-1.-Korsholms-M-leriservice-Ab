"use client";

import { ArrowUpRight, Phone } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { company } from "@/lib/content";
import { Reveal } from "./Reveal";

const cell = "flex flex-col border-b border-line py-8 sm:px-8 lg:border-b-0 lg:border-l lg:first:border-l-0 lg:first:pl-0";

export function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`;
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.mapQuery)}`;

  return (
    <section id="kontakt" aria-labelledby="kontakt-rubrik" className="mx-auto max-w-[90rem] px-5 pb-24 sm:px-8 sm:pb-36 lg:px-12">
      <Reveal className="grid gap-4 border-t border-charcoal/80 pt-10 lg:grid-cols-12 lg:items-end lg:gap-8">
        <h2 id="kontakt-rubrik" className="display text-[clamp(2.4rem,7.2vw,4.75rem)] lg:col-span-6">
          {c.title}
        </h2>
        <p className="text-lg leading-[1.7] text-slate lg:col-span-5 lg:col-start-8 lg:pb-3">{c.lead}</p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4">
        {[company.stig, company.ake].map((p) => (
          <div key={p.tel} className={`${cell} sm:odd:pl-0`}>
            <h3 className="text-sm text-slate">
              {p.name}, {c.mobile.toLowerCase()}
            </h3>
            <p className="display mt-2 text-[1.75rem] leading-tight">{p.display}</p>
            <a
              href={`tel:${p.tel}`}
              className="btn btn-lime mt-6 min-h-11 self-start px-5 text-[0.95rem]"
              aria-label={`${t.call}: ${p.name}, ${p.display}`}
            >
              <Phone aria-hidden className="size-4" strokeWidth={2} />
              {t.call}
            </a>
          </div>
        ))}

        <div className={`${cell} sm:pl-0 lg:pl-8`}>
          <h3 className="text-sm text-slate">{c.office}</h3>
          <a href={`tel:${company.office.tel}`} className="display mt-2 self-start text-[1.75rem] leading-tight">
            <span className="link-draw">{company.office.display}</span>
          </a>
          <p className="mt-5 text-sm text-slate">{c.email}</p>
          <a href={`mailto:${company.email}`} className="mt-1 self-start text-lg text-charcoal">
            <span className="link-draw">{company.email}</span>
          </a>
        </div>

        <div className={cell}>
          <h3 className="text-sm text-slate">{c.address}</h3>
          <address className="display mt-2 text-[1.75rem] leading-tight not-italic">
            {company.address}
            <br />
            {company.postal}
          </address>
          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 self-start font-semibold text-moss"
          >
            <span className="link-draw">{c.openMap}</span>
            <ArrowUpRight aria-hidden className="size-4" />
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.15} className="photo mt-10 lg:mt-14">
        <iframe
          title={c.mapTitle}
          src={mapSrc}
          className="block h-80 w-full grayscale-[0.85] contrast-[0.95] sm:h-[28rem]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Reveal>
    </section>
  );
}
