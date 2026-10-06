"use client";

import { ArrowUpRight, Phone } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { company, dict } from "@/lib/content";
import { Logo } from "./Logo";

export function Footer() {
  const { t, lang } = useLang();
  const links = [
    { href: "#tjanster", label: t.nav.services },
    { href: "#kyrkor", label: t.nav.churches },
    { href: "#fargrad", label: t.nav.advice },
    { href: "#bilder", label: t.nav.gallery },
    { href: "#om-oss", label: t.nav.about },
    { href: "#kontakt", label: t.nav.contact },
  ];
  const linkCls = "link-draw text-white/80 transition-colors hover:text-white";

  return (
    <footer className="on-dark grain overflow-hidden bg-coal text-white">
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        {/* Closing call to action */}
        <div className="grid gap-10 border-b border-white/15 py-20 sm:py-28 lg:grid-cols-12 lg:items-end lg:gap-8">
          <p className="display text-[clamp(2.6rem,8vw,6rem)] leading-[0.98] lg:col-span-8">{t.hero.title}</p>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-start">
            <a href={`tel:${company.stig.tel}`} className="btn btn-lime">
              <Phone aria-hidden className="size-[1.1rem]" strokeWidth={2} />
              {t.call} {company.stig.display}
            </a>
            <a href="#offert" className="btn btn-line-light">
              {t.quote}
              <ArrowUpRight aria-hidden className="size-[1.1rem]" strokeWidth={1.75} />
            </a>
          </div>
        </div>

        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo onDark />
            <p className="mt-6 font-semibold">{dict.sv.companyName}</p>
            <p className="text-white/60">{dict.fi.companyName}</p>
            <p className="mt-4 text-sm text-white/60">
              {t.footer.y} {company.y}
            </p>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-sm text-white/50">{t.contact.address}</h2>
            <address className="mt-4 leading-relaxed text-white/80 not-italic">
              {company.address}
              <br />
              {company.postal}
            </address>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-sm text-white/50">{t.footer.contact}</h2>
            <ul className="mt-4 grid gap-2">
              <li>
                <a className={linkCls} href={`tel:${company.office.tel}`}>
                  {t.contact.office}: {company.office.display}
                </a>
              </li>
              <li>
                <a className={linkCls} href={`tel:${company.stig.tel}`}>
                  {company.stig.name}: {company.stig.display}
                </a>
              </li>
              <li>
                <a className={linkCls} href={`tel:${company.ake.tel}`}>
                  {company.ake.name}: {company.ake.display}
                </a>
              </li>
              <li>
                <a className={linkCls} href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </li>
            </ul>
          </div>

          <nav aria-label={lang === "sv" ? "Sidfot" : "Alatunniste"} className="lg:col-span-3">
            <h2 className="text-sm text-white/50">KMS</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 lg:grid-cols-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a className={linkCls} href={l.href}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Oversized wordmark, cropped by the page edge */}
      <p
        aria-hidden
        className="font-xwide pointer-events-none -mb-[0.2em] text-center text-[clamp(7rem,34vw,30rem)] leading-[0.8] font-black tracking-[-0.05em] text-white/[0.045] select-none"
      >
        KMS
      </p>

      <div className="relative border-t border-white/10 bg-coal">
        <div className="mx-auto flex max-w-[90rem] flex-col gap-2 px-5 py-6 text-sm text-white/50 sm:flex-row sm:justify-between sm:px-8 lg:px-12">
          <p>© {t.companyName}</p>
          <p>{t.photoCredit}</p>
          <p>{t.footer.site}</p>
        </div>
      </div>
    </footer>
  );
}
