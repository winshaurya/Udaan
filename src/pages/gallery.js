import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Gallery() {
    const images = Array.from({ length: 30 }, (_, i) => `/images/image${i + 1}.jpg`);
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-10 sm:pb-14">
            <header className="flex items-end justify-between mb-4 sm:mb-6">
                <h1 className="text-white text-2xl sm:text-3xl font-semibold">Gallery</h1>
                <span className="text-white/50 text-sm">{images.length} photos</span>
            </header>
                    <ResponsiveMasonry columnsCountBreakPoints={{ 0: 3, 1024: 4 }}>
                <Masonry gutter="12px">
                    {images.map((src, i) => (
                        <figure key={i} className="group relative overflow-hidden rounded-lg">
                            <img
                                src={src}
                                alt={`Gallery photo ${i + 1}`}
                                loading="lazy"
                                className="masonry-img brightness-95 transition-transform duration-500 group-hover:scale-[1.03]"
                            />
                            <figcaption className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></figcaption>
                        </figure>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </section>
    );
}