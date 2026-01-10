"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type CarouselItem =
  | string
  | {
      src: string;
      alt?: string;
      caption?: string;
    };

export default function Carousel({
  items,
  ariaLabel = "Image carousel",
}: {
  items: CarouselItem[];
  ariaLabel?: string;
}) {
  const slides = useMemo(
    () =>
      items.map((it) =>
        typeof it === "string"
          ? { src: it, alt: "Project screenshot" }
          : { src: it.src, alt: it.alt ?? "Project screenshot", caption: it.caption }
      ),
    [items]
  );

  const [i, setI] = useState(0);

  function prev() {
    setI((cur) => (cur - 1 + slides.length) % slides.length);
  }

  function next() {
    setI((cur) => (cur + 1) % slides.length);
  }

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slides.length]);

  if (!slides.length) return null;

  const slide = slides[i];

  return (
    <div className="overflow-hidden rounded-xl border bg-white" aria-label={ariaLabel}>
      <div className="relative aspect-[16/9] w-full">
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          //className="object-cover"
          className = "object-contain bg-zinc-50"
          priority={i === 0}
        />
      </div>

      <div className="flex items-center justify-between gap-3 p-3">
        <button
          type="button"
          onClick={prev}
          className="rounded-lg border bg-white px-3 py-1 text-sm text-zinc-900 hover:bg-zinc-50"
          aria-label="Previous image"
        >
          ← Prev
        </button>

        <div className="flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setI(idx)}
              className={`h-2.5 w-2.5 rounded-full border ${
                idx === i ? "bg-zinc-900" : "bg-white"
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          className="rounded-lg border bg-white px-3 py-1 text-sm text-zinc-900 hover:bg-zinc-50"
          aria-label="Next image"
        >
          Next →
        </button>
      </div>

      {slide.caption ? (
        <div className="border-t bg-white px-4 py-3 text-sm text-zinc-900">
          {slide.caption}
        </div>
      ) : null}
    </div>
  );
}
