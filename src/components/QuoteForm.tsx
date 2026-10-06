"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Phone } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { company } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

type Errors = Partial<Record<"name" | "contact" | "email", string>>;

const input =
  "mt-2 block w-full rounded-xl border border-line bg-white px-4 text-base text-charcoal placeholder:text-slate/70 focus:border-moss focus:outline-none focus:ring-2 focus:ring-moss/30 aria-[invalid=true]:border-red-700";

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
      <label htmlFor={id} className="text-sm font-bold text-charcoal">
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
    <section id="offert" aria-labelledby="offert-rubrik" className="bg-paper py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-5">
          <SectionHeading id="offert-rubrik" title={f.title} lead={f.lead} />
          <Reveal delay={0.1} className="mt-8 grid gap-3">
            {[company.stig, company.ake].map((p) => (
              <a
                key={p.tel}
                href={`tel:${p.tel}`}
                className="flex items-center gap-4 rounded-2xl border border-line bg-white p-4 transition-colors hover:border-charcoal"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-lime text-charcoal">
                  <Phone aria-hidden className="size-5" strokeWidth={2.5} />
                </span>
                <span>
                  <span className="block text-sm text-slate">{p.name}</span>
                  <span className="block text-lg font-bold text-charcoal">{p.display}</span>
                </span>
              </a>
            ))}
          </Reveal>
        </div>

        <Reveal className="lg:col-span-7" delay={0.1}>
          <div className="rounded-3xl border border-line bg-white p-5 sm:p-8">
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
                    <Check aria-hidden className="size-7" strokeWidth={3} />
                  </span>
                  <h3 className="font-wide mt-5 text-2xl font-extrabold">{f.successTitle}</h3>
                  <p className="mx-auto mt-3 max-w-md text-lg text-ink">{f.success}</p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-6 cursor-pointer font-bold text-moss underline underline-offset-4"
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
                  className="grid gap-5 sm:grid-cols-2"
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
                    <legend className="text-sm font-bold text-charcoal">{f.type}</legend>
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
                          <span className="flex h-12 items-center justify-center rounded-xl border border-line px-2 text-center text-sm font-semibold text-ink transition-colors peer-checked:border-charcoal peer-checked:bg-charcoal peer-checked:text-white peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-moss sm:text-base">
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
                    <button
                      type="submit"
                      className="inline-flex h-14 w-full cursor-pointer items-center justify-center rounded-full bg-charcoal px-8 text-lg font-bold text-white transition-colors hover:bg-ink sm:w-auto"
                    >
                      {f.submit}
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
