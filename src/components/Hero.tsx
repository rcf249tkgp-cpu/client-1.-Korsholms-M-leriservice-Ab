"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Phone } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { company } from "@/lib/content";
import { Placeholder } from "./Placeholder";

const ease = [0.22, 1, 0.36, 1] as const;

/** A single roller stroke in the logo lime, painted across on load. */
function RollerStroke() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden
      className="mt-5 w-full max-w-[34rem] sm:mt-7"
      initial={reduce ? false : { clipPath: "inset(0 100% 0 0)" }}
      animate={{ clipPath: "inset(0 0% 0 0)" }}
      transition={{ duration: 1.1, ease, delay: 0.35 }}
    >
      <svg viewBox="0 0 600 44" className="block h-auto w-full" preserveAspectRatio="none">
        <path
          d="M6 13 C 90 5, 170 11, 250 8 S 430 3, 530 8 L 594 11 C 598 19, 596 28, 591 34 C 500 38, 400 35, 300 38 S 120 41, 32 37 L 7 33 C 2 26, 3 19, 6 13 Z"
          fill="#8dc63f"
        />
        <path d="M30 17 C 200 13, 380 12, 570 15" stroke="#a6d662" strokeWidth="2" fill="none" opacity="0.8" />
        <path d="M24 29 C 180 31, 400 27, 580 28" stroke="#79ad31" strokeWidth="2" fill="none" opacity="0.7" />
      </svg>
    </motion.div>
  );
}

export function Hero() {
  const { t, lang } = useLang();
  const reduce = useReducedMotion();
  const enter = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease, delay },
        };

  return (
    <section id="top" className="relative">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pt-10 pb-14 sm:px-6 sm:pt-16 lg:grid-cols-12 lg:items-center lg:gap-12 lg:px-8 lg:pt-20 lg:pb-24">
        <div className="min-w-0 lg:col-span-7">
          <motion.h1
            {...enter(0)}
            className={`font-wide ${lang === "fi" ? "text-[clamp(1.75rem,8.6vw,4.75rem)]" : "text-[clamp(2.25rem,10vw,5.25rem)]"} leading-[0.98] font-black tracking-[-0.03em] text-balance text-charcoal`}
          >
            {t.hero.title}
          </motion.h1>
          <RollerStroke />
          <motion.p {...enter(0.15)} className="mt-6 max-w-xl text-lg leading-relaxed text-ink sm:text-xl">
            {t.hero.lead}
          </motion.p>
          <motion.div {...enter(0.25)} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${company.stig.tel}`}
              className="inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-lime px-7 text-lg font-bold text-charcoal transition-colors hover:bg-[#7fb534]"
            >
              <Phone aria-hidden className="size-5" strokeWidth={2.5} />
              {t.call}
            </a>
            <a
              href="#offert"
              className="inline-flex h-14 items-center justify-center rounded-full border-2 border-charcoal px-7 text-lg font-bold text-charcoal transition-colors hover:bg-charcoal hover:text-white"
            >
              {t.quote}
            </a>
          </motion.div>
          <motion.p {...enter(0.3)} className="mt-4 text-sm text-slate">
            {t.hero.callNote}
          </motion.p>
        </div>

        <motion.div {...enter(0.2)} className="min-w-0 lg:col-span-5">
          <Placeholder
            label={t.hero.imageLabel}
            tag={t.placeholder}
            tone="ink"
            className="aspect-[4/3] w-full lg:aspect-[4/5]"
          />
        </motion.div>
      </div>
    </section>
  );
}
