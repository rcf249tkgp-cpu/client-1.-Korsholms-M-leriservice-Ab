"use client";

import { useEffect, useRef, type CSSProperties } from "react";

/*
 * Looping "wall being painted" backdrop for the hero, drawn in SVG.
 * Each stroke is a wide roller band plus a soft halo and thin bristle streaks
 * that share one stroke-dashoffset reveal, so the edges read as real paint.
 * Only stroke-dashoffset, opacity and transform are animated (see globals.css);
 * with prefers-reduced-motion the CSS animations are off and the fully painted
 * still is shown instead.
 */

const LOOP = 14; // seconds — one full cycle of the wall

type Tone = { base: string; light: string; dark: string };

const lime: Tone = { base: "#8dc63f", light: "#b2dc74", dark: "#6f9f2c" };
const chalk: Tone = { base: "#ece9e1", light: "#ffffff", dark: "#cfcabd" };
const coal: Tone = { base: "#121417", light: "#30363d", dark: "#08090a" };

type Stroke = { d: string; w: number; tone: Tone; axis: "x" | "y" };

// Painted in this order, alternating direction like a roller going back and forth.
const strokes: Stroke[] = [
  { d: "M-120 190 C 300 120, 720 250, 1100 175 S 1560 135, 1740 205", w: 190, tone: lime, axis: "y" },
  { d: "M1740 400 C 1310 345, 900 470, 500 405 S -40 370, -140 430", w: 230, tone: chalk, axis: "y" },
  { d: "M1480 -120 C 1330 260, 1270 590, 1130 1030", w: 210, tone: coal, axis: "x" },
  { d: "M-120 640 C 380 570, 820 700, 1210 615 S 1590 585, 1740 645", w: 240, tone: coal, axis: "y" },
  { d: "M1740 815 C 1260 770, 810 870, 330 800 S -40 780, -140 830", w: 200, tone: lime, axis: "y" },
  { d: "M260 -120 C 430 240, 640 520, 860 1030", w: 170, tone: chalk, axis: "x" },
];

// Bristle streaks: offset across the stroke (fraction of width), width fraction, shade, opacity.
const bristles = [
  { at: -0.42, lag: 34, w: 0.04, shade: "dark", o: 0.6 },
  { at: -0.31, lag: -18, w: 0.1, shade: "light", o: 0.3 },
  { at: -0.15, lag: 52, w: 0.03, shade: "dark", o: 0.35 },
  { at: -0.04, lag: 8, w: 0.07, shade: "light", o: 0.18 },
  { at: 0.12, lag: -40, w: 0.13, shade: "light", o: 0.2 },
  { at: 0.27, lag: 22, w: 0.035, shade: "dark", o: 0.45 },
  { at: 0.36, lag: -6, w: 0.05, shade: "light", o: 0.28 },
  { at: 0.45, lag: 46, w: 0.04, shade: "dark", o: 0.5 },
] as const;

const splatters = [
  { x: 1180, y: 300, r: 9, fill: lime.base, delay: 3 },
  { x: 1215, y: 322, r: 4, fill: lime.base, delay: 3 },
  { x: 1158, y: 334, r: 3, fill: lime.base, delay: 3 },
  { x: 560, y: 720, r: 8, fill: chalk.base, delay: 9 },
  { x: 590, y: 700, r: 3.5, fill: chalk.base, delay: 9 },
  { x: 532, y: 745, r: 2.5, fill: chalk.base, delay: 9 },
];

function PaintStroke({ s, index }: { s: Stroke; index: number }) {
  const delay = -(LOOP - (index * LOOP) / strokes.length);
  const style = { "--paint-delay": `${delay}s` } as CSSProperties;
  // Offset across the band, plus a small lag along it so the bristle ends are ragged.
  const shift = (f: number, lag: number) =>
    s.axis === "y" ? `translate(${lag} ${f * s.w})` : `translate(${f * s.w} ${lag})`;

  return (
    <g className="paint-life" style={style}>
      {/* soft, feathered edge */}
      <path className="paint-draw" d={s.d} pathLength={1} stroke={s.tone.base} strokeWidth={s.w * 1.12} opacity={0.28} />
      {/* main roller band */}
      <path className="paint-draw" d={s.d} pathLength={1} stroke={s.tone.base} strokeWidth={s.w} opacity={0.94} />
      {bristles.map((b) => (
        <path
          key={b.at}
          className="paint-draw"
          d={s.d}
          pathLength={1}
          transform={shift(b.at, b.lag)}
          stroke={s.tone[b.shade]}
          strokeWidth={s.w * b.w}
          opacity={b.o}
        />
      ))}
    </g>
  );
}

export function PaintBackdrop({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  // Pause the loop while the hero is off screen to save battery.
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([entry]) => {
      el.toggleAttribute("data-paused", !entry.isIntersecting);
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} aria-hidden className={`paint-backdrop pointer-events-none overflow-hidden bg-charcoal ${className}`}>
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        fill="none"
        strokeLinecap="butt"
        strokeLinejoin="round"
      >
        {strokes.map((s, i) => (
          <PaintStroke key={i} s={s} index={i} />
        ))}

        {/* a faint drip running from the first lime stroke */}
        <path
          className="paint-drip"
          d="M905 262 C 903 300, 907 330, 905 372"
          stroke={lime.base}
          strokeWidth={9}
          strokeLinecap="round"
        />
        {splatters.map((p, i) => (
          <circle
            key={i}
            className="paint-splat"
            cx={p.x}
            cy={p.y}
            r={p.r}
            fill={p.fill}
            style={{ "--paint-delay": `${p.delay}s` } as CSSProperties}
          />
        ))}
      </svg>
      {/* static paper/plaster grain over the paint */}
      <div className="paint-grain absolute inset-0" />
    </div>
  );
}
