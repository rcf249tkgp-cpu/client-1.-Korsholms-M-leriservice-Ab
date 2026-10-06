export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <span className="inline-flex flex-col items-start leading-none" aria-label="KMS – maalausmåleri">
      <span aria-hidden className="font-xwide text-[1.6rem] font-black tracking-[-0.03em] text-lime">
        KMS
      </span>
      <span
        aria-hidden
        className={`mt-1 text-[0.62rem] font-medium tracking-[0.04em] ${onDark ? "text-white/60" : "text-slate"}`}
      >
        maalausmåleri
      </span>
    </span>
  );
}
