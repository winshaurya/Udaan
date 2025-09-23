import React, { useEffect, useMemo, useState } from 'react';

/**
 * VerticalMarquee
 * Renders N columns that auto-scroll vertically in alternating directions at different speeds.
 * - items: string[] of image URLs
 * - columns: number of columns to render
 * - speeds: number[] in seconds per column (optional). If not provided, sensible defaults are used.
 * - directions: ("up"|"down")[] per column (optional). If not provided, alternates.
 * - className: extra class names for the section container
 */
export default function VerticalMarquee({
  items = [],
  columns,
  speeds,
  directions,
  className = '',
}) {
  // Responsive columns: default to 3 on small screens, 4 on >= lg (1024px)
  const [cols, setCols] = useState(() => Math.max(1, columns ?? 4));
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const update = () => {
      const w = window.innerWidth;
      const target = columns ?? (w < 1024 ? 3 : 4);
      setCols(target);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [columns]);

  const columnItems = useMemo(() => (
    Array.from({ length: cols }, (_, colIdx) => items.filter((_, i) => i % cols === colIdx))
  ), [items, cols]);

  const getDuration = (i) => {
    if (Array.isArray(speeds) && speeds[i]) return `${speeds[i]}s`;
    // default slow durations varied per column
    const defaults = [38, 46, 52, 42, 58, 50];
    return `${defaults[i % defaults.length]}s`;
  };

  const getDirection = (i) => {
    if (Array.isArray(directions) && directions[i]) return directions[i];
    return i % 2 === 0 ? 'up' : 'down';
  };

  return (
    <section className={`w-full bg-black py-6 sm:py-10 ${className}`} aria-label="Featured visuals">
      <div className="w-full px-2 sm:px-4">
        <div
          className="grid gap-2 sm:gap-3"
          style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
        >
          {columnItems.map((col, idx) => {
            const dir = getDirection(idx);
            const isReverse = dir === 'down';
            const duration = getDuration(idx);
            return (
              <div key={idx} className="marquee-outer h-[84vh] sm:h-[98vh] lg:h-[112vh] xl:h-[126vh] rounded-md overflow-hidden">
                <div
                  className={`marquee-track ${isReverse ? 'marquee-reverse' : ''}`}
                  style={{ animationDuration: duration }}
                >
                  {/* duplicate content for seamless loop */}
                  {[0, 1].map((dup) => (
                    <div key={dup} aria-hidden={dup === 1} className="flex flex-col gap-4 sm:gap-6">
                      {col.map((src, i) => (
                        <figure key={`${dup}-${i}`} className="overflow-hidden rounded-lg">
                          <img
                            src={src}
                            alt="Event visual"
                            loading="lazy"
                            className="block w-full h-auto object-cover select-none"
                          />
                        </figure>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
