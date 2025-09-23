import Hero from "../components/Hero";
import VerticalMarquee from "../components/VerticalMarquee";
import { useMemo } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Home() {
  const images = useMemo(
    () => Array.from({ length: 30 }, (_, i) => `/images/image${i + 1}.jpg`),
    []
  );
  const marqueeItems = useMemo(() => images.slice(0, 20), [images]);

  return (
    <div>
      <Hero />

      {/* Gallery heading for the moving images section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-6 sm:mt-8">
        <h2 className="text-white text-2xl sm:text-3xl font-semibold">Gallery</h2>
      </div>

      {/* Vertical Roller Section (Gallery) */}
      <VerticalMarquee
        items={marqueeItems}
        className="mt-6 sm:mt-10"
      />
    </div>
  );
}
