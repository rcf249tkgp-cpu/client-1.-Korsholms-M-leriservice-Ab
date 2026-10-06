"use client";

import { motion, useReducedMotion } from "framer-motion";
import { photoProps, ratioClass, type PhotoName } from "@/lib/images";

const ease = [0.22, 1, 0.36, 1] as const;

/** A graded photo in the shared frame. Unveils once, top to bottom, like a fresh coat. */
export function Photo({
  name,
  alt,
  sizes,
  priority = false,
  className = "",
  frameClassName,
}: {
  name: PhotoName;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  /** Override the aspect-ratio class (e.g. to fill a parent). */
  frameClassName?: string;
}) {
  const reduce = useReducedMotion();
  const { src, srcSet, width, height, ratio } = photoProps(name);
  const hidden = reduce ? { clipPath: "inset(0 0 0% 0)" } : { clipPath: "inset(0 0 100% 0)" };

  return (
    <motion.div
      className={`photo ${frameClassName ?? ratioClass[ratio]} ${className}`}
      initial={priority ? false : hidden}
      whileInView={{ clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 1.1, ease }}
    >
      <motion.img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        width={width}
        height={height}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : undefined}
        initial={priority || reduce ? false : { scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "0px 0px -12% 0px" }}
        transition={{ duration: 1.6, ease }}
      />
    </motion.div>
  );
}
