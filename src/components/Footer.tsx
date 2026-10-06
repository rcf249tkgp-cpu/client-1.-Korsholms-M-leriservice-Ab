"use client";

import { useLang } from "@/lib/i18n";
import { company, dict } from "@/lib/content";
import { Logo } from "./Logo";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="on-dark bg-charcoal text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <Logo onDark />
          <p className="mt-5 font-bold">{dict.sv.companyName}</p>
          <p className="text-white/70">{dict.fi.companyName}</p>
          <p className="mt-3 text-white/70">
            {t.footer.y} {company.y}
          </p>
        </div>
        <address className="not-italic text-white/85">
          <p>{company.address}</p>
          <p>{company.postal}</p>
        </address>
        <div>
          <h2 className="font-bold">{t.footer.contact}</h2>
          <ul className="mt-3 grid gap-2 text-white/85">
            <li>
              <a className="hover:text-lime" href={`tel:${company.office.tel}`}>
                {t.contact.office}: {company.office.display}
              </a>
            </li>
            <li>
              <a className="hover:text-lime" href={`tel:${company.stig.tel}`}>
                {company.stig.name}: {company.stig.display}
              </a>
            </li>
            <li>
              <a className="hover:text-lime" href={`tel:${company.ake.tel}`}>
                {company.ake.name}: {company.ake.display}
              </a>
            </li>
            <li>
              <a className="hover:text-lime" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-sm text-white/60 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {t.companyName}
          </p>
          <p>{t.footer.site}</p>
        </div>
      </div>
    </footer>
  );
}
