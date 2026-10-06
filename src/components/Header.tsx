"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { company } from "@/lib/content";
import { Logo } from "./Logo";
import { LangToggle } from "./LangToggle";

const ease = [0.22, 1, 0.36, 1] as const;

export function Header() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // The menu panel starts where the header ends (the demo banner may still be in view).
  const [menuTop, setMenuTop] = useState(0);
  const headerRef = useRef<HTMLElement>(null);

  const links = [
    { href: "#tjanster", label: t.nav.services },
    { href: "#kyrkor", label: t.nav.churches },
    { href: "#fargrad", label: t.nav.advice },
    { href: "#bilder", label: t.nav.gallery },
    { href: "#om-oss", label: t.nav.about },
    { href: "#kontakt", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    setMenuTop(headerRef.current?.getBoundingClientRect().bottom ?? 0);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      // No backdrop blur while the menu is open: backdrop-filter would make the
      // header the containing block for the fixed menu panel.
      className={`sticky top-0 z-40 transition-[background-color,border-color] duration-300 ${
        open
          ? "border-b border-line bg-paper"
          : scrolled
            ? "border-b border-line bg-paper/95 backdrop-blur-md"
            : "border-b border-transparent bg-paper"
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-[90rem] items-center gap-1 px-5 sm:gap-3 sm:px-8 lg:h-20 lg:px-12">
        <a href="#top" className="mr-auto shrink-0" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav aria-label="Huvudmeny" className="hidden lg:block">
          <ul className="flex items-center gap-7 xl:gap-9">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="link-draw py-1 text-[0.95rem] text-ink transition-colors hover:text-charcoal">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:ml-6">
          <LangToggle />
        </div>

        <a href={`tel:${company.stig.tel}`} className="btn btn-dark hidden min-h-11 px-5 text-[0.95rem] sm:inline-flex">
          <Phone aria-hidden className="size-4" strokeWidth={2} />
          {t.call}
        </a>

        <a
          href={`tel:${company.stig.tel}`}
          aria-label={`${t.call}: ${company.stig.display}`}
          className="inline-flex size-11 items-center justify-center rounded-full bg-lime text-charcoal sm:hidden"
        >
          <Phone aria-hidden className="size-[1.1rem]" strokeWidth={2} />
        </a>

        <button
          type="button"
          className="-mr-2 inline-flex h-11 cursor-pointer items-center gap-3 px-2 text-charcoal lg:hidden"
          aria-expanded={open}
          aria-controls="mobilmeny"
          aria-label={open ? t.menu.close : t.menu.open}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden className="relative block h-3 w-6">
            <span
              className={`absolute left-0 h-px w-6 bg-current transition-transform duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 h-px w-6 bg-current transition-transform duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobilmeny"
            key="mobilmeny"
            aria-label="Mobilmeny"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 0.3, ease }}
            style={{ top: menuTop }}
            className="fixed inset-x-0 bottom-0 overflow-y-auto bg-paper lg:hidden"
          >
            <ul className="px-5 pt-4 pb-10 sm:px-8">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease, delay: 0.04 * i }}
                  className="border-b border-line"
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 py-4 text-charcoal"
                  >
                    <span className="tabular w-6 text-sm text-moss">{String(i + 1).padStart(2, "0")}</span>
                    <span className="display text-[2.1rem] leading-none">{l.label}</span>
                  </a>
                </motion.li>
              ))}
              <li className="mt-8 grid gap-3">
                <a href={`tel:${company.stig.tel}`} className="btn btn-lime w-full">
                  <Phone aria-hidden className="size-4" strokeWidth={2} />
                  {t.call} {company.stig.display}
                </a>
                <a href="#offert" onClick={() => setOpen(false)} className="btn btn-line w-full">
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
