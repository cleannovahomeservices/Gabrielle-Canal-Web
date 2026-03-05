import { useEffect, useRef } from "react";

interface FilmPhoto {
  src: string;
  objectPosition?: string;
}

export function FilmstripCarousel({ photos }: { photos: FilmPhoto[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentIndex = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || photos.length <= 1) return;
    const interval = setInterval(() => {
      const itemWidth = container.scrollWidth / photos.length;
      currentIndex.current += 1;
      if (currentIndex.current >= photos.length) {
        currentIndex.current = 0;
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: itemWidth, behavior: "smooth" });
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <div
      ref={containerRef}
      className="flex gap-3 overflow-x-auto scroll-smooth pb-2"
      style={{ scrollSnapType: "x mandatory" }}
    >
      {photos.map((photo, i) => (
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