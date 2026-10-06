"use client";

import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { company } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const card = "flex flex-col rounded-2xl border border-line bg-white p-5 sm:p-6";
const callLink =
  "mt-4 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-lime px-5 font-bold text-charcoal transition-colors hover:bg-[#7fb534]";

export function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`;
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.mapQuery)}`;

  return (
    <section id="kontakt" aria-labelledby="kontakt-rubrik" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="kontakt-rubrik" title={c.title} lead={c.lead} />

        <Reveal delay={0.1} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[company.stig, company.ake].map((p) => (
            <div key={p.tel} className={card}>
              <h3 className="font-wide text-xl font-extrabold">{p.name}</h3>
              <p className="mt-1 text-slate">{c.mobile}</p>
              <p className="mt-3 text-lg font-semibold">{p.display}</p>
              <a href={`tel:${p.tel}`} className={`${callLink} mt-auto`} aria-label={`${t.call}: ${p.name}, ${p.display}`}>
                <Phone aria-hidden className="size-4" strokeWidth={2.5} />
                {t.call}
              </a>
            </div>
          ))}

          <div className={card}>
            <h3 className="font-wide text-xl font-extrabold">{c.office}</h3>
            <ul className="mt-3 grid gap-3">
              <li>
                <a href={`tel:${company.office.tel}`} className="group flex items-center gap-3">
                  <Phone aria-hidden className="size-5 shrink-0 text-moss" />
                  <span>
                    <span className="block text-sm text-slate">{c.phone}</span>
                    <span className="text-lg font-semibold group-hover:underline">{company.office.display}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="group flex items-center gap-3">
                  <Mail aria-hidden className="size-5 shrink-0 text-moss" />
                  <span>
                    <span className="block text-sm text-slate">{c.email}</span>
                    <span className="text-lg font-semibold group-hover:underline">{company.email}</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className={card}>
            <h3 className="font-wide text-xl font-extrabold">{c.address}</h3>
            <address className="mt-3 flex gap-3 text-lg not-italic">
              <MapPin aria-hidden className="mt-1 size-5 shrink-0 text-moss" />
              <span>
                {company.address}
                <br />
                {company.postal}
              </span>
            </address>
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-1.5 pt-4 font-bold text-moss underline underline-offset-4"
            >
              {c.openMap}
              <ExternalLink aria-hidden className="size-4" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-4 overflow-hidden rounded-2xl border border-line bg-paper">
          <iframe
            title={c.mapTitle}
            src={mapSrc}
            className="block h-80 w-full sm:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}
