"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { company } from "@/lib/content";
import { Logo } from "./Logo";
import { LangToggle } from "./LangToggle";

export function Header() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#tjanster", label: t.nav.services },
    { href: "#kyrkor", label: t.nav.churches },
    { href: "#fargrad", label: t.nav.advice },
    { href: "#bilder", label: t.nav.gallery },
    { href: "#om-oss", label: t.nav.about },
    { href: "#kontakt", label: t.nav.contact },
  ];

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/92 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="mr-auto shrink-0" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav aria-label="Huvudmeny" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-md px-3 py-2 text-[0.95rem] font-medium text-ink transition-colors hover:text-moss"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <LangToggle />

        <a
          href={`tel:${company.stig.tel}`}
          className="inline-flex h-10 shrink-0 items-center gap-2 rounded-full bg-lime px-3.5 whitespace-nowrap sm:px-4 text-sm font-bold text-charcoal transition-colors hover:bg-[#7fb534]"
        >
          <Phone aria-hidden className="size-4" strokeWidth={2.5} />
          <span className="sm:hidden">{t.callShort}</span>
          <span className="hidden sm:inline">{t.call}</span>
        </a>

        <button
          type="button"
          className="-mr-2 inline-flex size-11 cursor-pointer items-center justify-center rounded-md text-charcoal lg:hidden"
          aria-expanded={open}
          aria-controls="mobilmeny"
          aria-label={open ? t.menu.close : t.menu.open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden className="size-6" /> : <Menu aria-hidden className="size-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobilmeny"
            key="mobilmeny"
            aria-label="Mobilmeny"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8, transition: { duration: 0.15 } }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="absolute inset-x-0 top-full border-b border-line bg-white shadow-[0_12px_24px_-12px_rgb(31_35_40/0.25)] lg:hidden"
          >
            <ul className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-wide block border-b border-line py-3.5 text-xl font-bold text-charcoal last:border-0"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-4 pb-2">
                <a
                  href="#offert"
                  onClick={() => setOpen(false)}
                  className="flex h-12 items-center justify-center rounded-full bg-charcoal font-bold text-white"
                >
                  {t.quote}
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
