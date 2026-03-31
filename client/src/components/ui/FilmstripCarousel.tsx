import { useEffect, useMemo, useRef } from "react";

interface FilmPhoto {
  src: string;
  objectPosition?: string;
}

export function FilmstripCarousel({ photos }: { photos: FilmPhoto[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentIndex = useRef(0);
  const stepRef = useRef(0);
  const uniquePhotos = useMemo(() => {
    const seen = new Set<string>();
    const out: FilmPhoto[] = [];
    for (const p of photos) {
      if (seen.has(p.src)) continue;
      seen.add(p.src);
      out.push(p);
    }
    return out;
  }, [photos]);
  const loopPhotos = useMemo(() => {
    // Duplicate once to create an infinite loop without visual repetition glitches.
    // We always keep scrollLeft within the first "lap" range.
    return [...uniquePhotos, ...uniquePhotos];
  }, [uniquePhotos]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || uniquePhotos.length <= 1) return;

    const computeStep = () => {
      const first = container.children.item(0) as HTMLElement | null;
      if (!first) return 0;
      const second = container.children.item(1) as HTMLElement | null;
      if (second) {
        const delta = second.offsetLeft - first.offsetLeft;
        if (delta > 0) return delta;
      }
      return first.getBoundingClientRect().width;
    };

    const syncStep = () => {
      stepRef.current = computeStep();
    };

    // Always restart from the first image when the list changes.
    currentIndex.current = 0;
    container.scrollTo({ left: 0 });
    syncStep();

    const onResize = () => {
      // Recompute step and snap to the current index so it stays aligned.
      syncStep();
      const step = stepRef.current;
      if (!step) return;
      container.scrollTo({ left: step * currentIndex.current });
    };
    window.addEventListener("resize", onResize);

    const interval = setInterval(() => {
      const step = stepRef.current || computeStep();
      if (!step) return;

      currentIndex.current += 1;

      // When we reach the end of the first lap, jump back seamlessly (no animation)
      // and continue smoothly. This creates a true infinite loop effect.
      if (currentIndex.current >= uniquePhotos.length) {
        currentIndex.current = 0;
        container.scrollTo({ left: 0, behavior: "auto" });
      }

      // Always scroll one item at a time.
      container.scrollTo({ left: step * currentIndex.current, behavior: "smooth" });
    }, 3500);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", onResize);
    };
  }, [uniquePhotos.length]);

  return (
    <div
      ref={containerRef}
      className="flex gap-3 overflow-hidden scroll-smooth pb-2 select-none"
      style={{ scrollSnapType: "x mandatory", touchAction: "none" }}
      onWheel={(e) => e.preventDefault()}
      onTouchMove={(e) => e.preventDefault()}
    >
      {loopPhotos.map((photo, i) => (
        <div
          key={i}
          className="flex-shrink-0 w-[240px] md:w-[280px] h-[180px] md:h-[220px] rounded-2xl overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          <img
            src={photo.src}
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: photo.objectPosition ?? "center" }}
          />
        </div>
      ))}
    </div>
  );
}