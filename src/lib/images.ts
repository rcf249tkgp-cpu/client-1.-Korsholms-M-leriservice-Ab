// Graded stock photos in /public/images (Pexels, free licence). Every photo is
// cropped to one of two ratios so the set reads as one series; `band` is the
// only full-bleed exception. Each has a full-size and a "-sm" variant.

export type Ratio = "portrait" | "landscape" | "wide";

export const photos = {
  hero: { ratio: "portrait", w: [800, 1600] },
  band: { ratio: "wide", w: [1200, 2400] },
  indoor: { ratio: "portrait", w: [640, 1200] },
  outdoor: { ratio: "portrait", w: [640, 1200] },
  church: { ratio: "portrait", w: [640, 1200] },
  advice: { ratio: "portrait", w: [640, 1200] },
  about: { ratio: "portrait", w: [640, 1200] },
  "g-facade": { ratio: "portrait", w: [640, 1200] },
  "g-church": { ratio: "portrait", w: [640, 1200] },
  "g-indoor": { ratio: "portrait", w: [640, 1200] },
  "g-roof": { ratio: "portrait", w: [640, 1200] },
  "g-lift": { ratio: "landscape", w: [800, 1600] },
  "g-wallpaper": { ratio: "landscape", w: [800, 1600] },
} as const satisfies Record<string, { ratio: Ratio; w: readonly [number, number] }>;

export type PhotoName = keyof typeof photos;

export const ratioClass: Record<Ratio, string> = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[3/2]",
  wide: "aspect-[4/3] sm:aspect-[2/1]",
};

const heightFor = (r: Ratio, w: number) => Math.round(r === "portrait" ? (w * 5) / 4 : r === "landscape" ? (w * 2) / 3 : w / 2);

export function photoProps(name: PhotoName) {
  const { ratio, w } = photos[name];
  return {
    src: `/images/${name}.webp`,
    srcSet: `/images/${name}-sm.webp ${w[0]}w, /images/${name}.webp ${w[1]}w`,
    width: w[1],
    height: heightFor(ratio, w[1]),
    ratio,
  };
}
