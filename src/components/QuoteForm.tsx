"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, Phone } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { company } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

type Errors = Partial<Record<"name" | "contact" | "email", string>>;

const input =
  "mt-2 block w-full rounded-[3px] border border-stone bg-white px-4 text-base text-charcoal transition-colors placeholder:text-slate/70 hover:border-slate focus:border-charcoal focus:outline-none focus:ring-1 focus:ring-charcoal aria-[invalid=true]:border-red-700";

function Field({
  id,
  label,
  error,
  hint,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-charcoal">
        {label}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1.5 text-sm text-slate">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm font-semibold text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

export function QuoteForm() {
  const { t } = useLang();
  const f = t.form;
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();

    const next: Errors = {};
    if (!name) next.name = f.errName;
    if (!phone && !email) next.contact = f.errContact;
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = f.errEmail;
    setErrors(next);

    if (Object.keys(next).length) {
      const first = next.name ? "name" : next.contact ? "phone" : "email";
      formRef.current?.querySelector<HTMLElement>(`#q-${first}`)?.focus();
      return;
    }
    // Front-end only for the demo: nothing is sent anywhere.
    setSent(true);
  }

  return (
    <section id="offert" aria-labelledby="offert-rubrik" className="mx-auto max-w-[90rem] px-5 py-24 sm:px-8 sm:py-36 lg:px-12">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <SectionHeading n="06" name={t.nav.contact} id="offert-rubrik" title={f.title} lead={f.lead} />
          <Reveal delay={0.1} className="mt-12 border-t border-charcoal/80">
            {[company.stig, company.ake].map((p) => (
              <a
                key={p.tel}
                href={`tel:${p.tel}`}
                className="group flex items-center justify-between gap-4 border-b border-line py-5"
              >
                <span>
                  <span className="block text-sm text-slate">{p.name}</span>
                  <span className="display mt-1 block text-[1.75rem] leading-none text-charcoal">{p.display}</span>
                </span>
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-stone text-charcoal transition-colors duration-300 group-hover:border-lime group-hover:bg-lime">
                  <Phone aria-hidden className="size-[1.1rem]" strokeWidth={1.75} />
                </span>
              </a>
            ))}
          </Reveal>
        </div>

        <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
          <div className="rounded-md border border-line bg-white p-6 sm:p-10">
            <AnimatePresence mode="wait" initial={false}>
              {sent ? (
                <motion.div
                  key="tack"
                  role="status"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="py-10 text-center"
                >
                  <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-lime text-charcoal">
                    <Check aria-hidden className="size-6" strokeWidth={2} />
                  </span>
                  <h3 className="display mt-6 text-[2rem]">{f.successTitle}</h3>
                  <p className="mx-auto mt-3 max-w-md text-lg text-ink">{f.success}</p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-6 cursor-pointer font-semibold text-moss underline underline-offset-4"
                  >
                    {f.again}
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  ref={formRef}
                  noValidate
                  onSubmit={onSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.15 } }}
                  className="grid gap-6 sm:grid-cols-2"
                >
                  <div className="sm:col-span-2">
                    <Field id="q-name" label={`${f.name} *`} error={errors.name}>
                      <input
                        id="q-name"
                        name="name"
                        autoComplete="name"
                        className={`${input} h-12`}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "q-name-error" : undefined}
                      />
                    </Field>
                  </div>
                  <Field id="q-phone" label={f.phone} error={errors.contact} hint={f.contactHint}>
                    <input
                      id="q-phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      className={`${input} h-12`}
                      aria-invalid={!!errors.contact}
                      aria-describedby={errors.contact ? "q-phone-error" : "q-phone-hint"}
                    />
                  </Field>
                  <Field id="q-email" label={f.email} error={errors.email}>
                    <input
                      id="q-email"
                      name="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      className={`${input} h-12`}
                      aria-invalid={!!errors.email || !!errors.contact}
                      aria-describedby={errors.email ? "q-email-error" : undefined}
                    />
                  </Field>
                  <div className="sm:col-span-2">
                    <Field id="q-location" label={f.location}>
                      <input
                        id="q-location"
                        name="location"
                        autoComplete="address-level2"
                        className={`${input} h-12`}
                      />
                    </Field>
                  </div>
                  <fieldset className="sm:col-span-2">
                    <legend className="text-sm font-semibold text-charcoal">{f.type}</legend>
                    <div className="mt-2 grid grid-cols-3 gap-2">
                      {(["indoor", "outdoor", "both"] as const).map((v, i) => (
                        <label key={v} className="relative cursor-pointer">
                          <input
                            type="radio"
                            name="type"
                            value={v}
                            defaultChecked={i === 2}
                            className="peer sr-only"
                          />
                          <span className="flex h-12 items-center justify-center rounded-[3px] border border-stone px-2 text-center text-sm font-medium text-ink transition-colors hover:border-slate peer-checked:border-charcoal peer-checked:bg-charcoal peer-checked:text-white peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-moss sm:text-base">
                            {f.types[v]}
                          </span>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                  <div className="sm:col-span-2">
                    <Field id="q-message" label={f.message} hint={f.messageHint}>
                      <textarea
                        id="q-message"
                        name="message"
                        rows={5}
                        className={`${input} py-3`}
                        aria-describedby="q-message-hint"
                      />
                    </Field>
                  </div>
                  <div className="sm:col-span-2">
                    <button type="submit" className="btn btn-dark w-full sm:w-auto">
                      {f.submit}
                      <ArrowUpRight aria-hidden className="size-[1.1rem]" strokeWidth={1.75} />
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
