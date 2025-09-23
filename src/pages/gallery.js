import { useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import VerticalMarquee from "../components/VerticalMarquee";

export default function Gallery() {
    const router = useRouter();

    // redirect to home - keep file but remove route access
    useEffect(() => {
        if (router && router.replace) router.replace("/");
    }, [router]);

    const images = useMemo(
        () => Array.from({ length: 30 }, (_, i) => `/images/image${i + 1}.jpg`),
        []
    );
    const marqueeItems = useMemo(() => images.slice(0, 20), [images]);

    // Render a minimal fallback while redirecting (keeps file intact)
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-10 sm:pb-14">
            <header className="flex items-end justify-between mb-4 sm:mb-6">
                <h1 className="text-white text-2xl sm:text-3xl font-semibold">Gallery</h1>
                <span className="text-white/50 text-sm">{marqueeItems.length} photos</span>
            </header>
            <VerticalMarquee
                items={marqueeItems}
                className="mt-6 sm:mt-10"
            />
        </section>
    );
}