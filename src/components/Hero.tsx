"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Phone } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { company } from "@/lib/content";
import { photoProps } from "@/lib/images";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { t, lang } = useLang();
  const reduce = useReducedMotion();
  const img = photoProps("hero");
  // Always pass initial/animate: the static HTML is rendered with the initial
  // (hidden) state, so dropping them for reduced motion would leave text invisible.
  const enter = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 22 },
    animate: { opacity: 1, y: 0 },
    transition: reduce ? { duration: 0 } : { duration: 0.9, ease, delay },
  });

  return (
    <section id="top" className="relative">
      <div className="mx-auto grid max-w-[90rem] gap-10 px-5 pt-10 pb-16 sm:px-8 sm:pt-14 lg:grid-cols-12 lg:gap-8 lg:px-12 lg:pt-16 lg:pb-24">
        <div className="flex min-w-0 flex-col lg:col-span-7 lg:pt-10 lg:pr-6">
          <motion.h1
            {...enter(0.05)}
            className={`display text-charcoal ${
              lang === "fi" ? "text-[clamp(2.6rem,10.5vw,5.6rem)]" : "text-[clamp(3.2rem,14vw,6.6rem)]"
            } leading-[0.98] tracking-[-0.035em]`}
          >
            {t.hero.title}
          </motion.h1>

          <motion.p {...enter(0.2)} className="mt-8 max-w-[31rem] text-lg leading-[1.7] text-slate sm:text-xl sm:leading-[1.65]">
            {t.hero.lead}
          </motion.p>

          <motion.div {...enter(0.3)} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href={`tel:${company.stig.tel}`} className="btn btn-lime">
              <Phone aria-hidden className="size-[1.1rem]" strokeWidth={2} />
              {t.call}
            </a>
            <a href="#offert" className="btn btn-line">
              {t.quote}
              <ArrowDownRight aria-hidden className="size-[1.1rem]" strokeWidth={1.75} />
            </a>
          </motion.div>
          <motion.p {...enter(0.38)} className="mt-5 text-sm text-slate">
            {t.hero.callNote}
          </motion.p>
        </div>

        <motion.div
          className="photo aspect-[4/5] lg:col-span-5 lg:-mr-12 lg:aspect-auto lg:min-h-[42rem] lg:rounded-r-none"
          initial={reduce ? false : { clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 1.4, ease, delay: 0.15 }}
        >
          <motion.img
            {...{ src: img.src, srcSet: img.srcSet, width: img.width, height: img.height }}
            sizes="(min-width: 1024px) 42vw, 100vw"
            alt={t.images.hero}
            fetchPriority="high"
            initial={reduce ? false : { scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.2, ease, delay: 0.15 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
