import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function UdaanPage() {
  const videoRef = useRef(null);
  const [showPlayOverlay, setShowPlayOverlay] = useState(false);

  useEffect(() => {
    // Try to play with sound; if browser blocks autoplay with sound, show overlay to let user start it
    const v = videoRef.current;
    if (!v) return;

    // First try to play muted (most browsers allow this), then unmute
    v.muted = true;
    const tryPlay = v.play();
    if (tryPlay && typeof tryPlay.then === 'function') {
      tryPlay
        .then(() => {
          // attempt to unmute and play with sound
          v.muted = false;
          const p2 = v.play();
          if (p2 && typeof p2.then === 'function') {
            p2.then(() => setShowPlayOverlay(false)).catch(() => setShowPlayOverlay(true));
          }
        })
        .catch(() => setShowPlayOverlay(true));
    }
  }, []);
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background image (SGSITS library image) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-center bg-cover"
        // try local SVG first, then local JPG, then remote JPG
        style={{ backgroundImage: "url('/images/library-main-section.svg'), url('/images/library-main-section.jpg'), url('https://www.sgsits.ac.in/images/speasyimagegallery/albums/10/images/library-main-section.jpg')", backgroundColor: '#000' }}
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-[1]">
  <div className="text-white max-w-[1100px] md:max-w-[50%] px-3 sm:px-4 md:px-6 lg:px-8 pt-20 sm:pt-28 md:pt-36 pb-12 mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-wide">Udaan</h1>
          <div className="mt-4 text-sm sm:text-base leading-relaxed opacity-95 space-y-2">
            <p>प्रमाण पत्र व स्वर्ण पदक वितरण समारोह।</p>
            <p>Certificate and gold‑medal distribution ceremony.</p>
            </div>

          <div className="mt-6 grid md:grid-cols-2 gap-4 items-start">
            {/* Left: At a glance */}
            <section className="col-span-2 md:col-span-1 bg-white/10 backdrop-blur rounded-lg p-4 sm:p-5 w-full">
              <h2 className="text-base sm:text-lg font-semibold">Udaan 2025 — At a glance</h2>
              <ul className="mt-2 text-xs sm:text-sm opacity-95 space-y-2">
                <li><span className="font-semibold">Date & Time:</span> Wednesday, 08 Oct 2025, 2:00 PM</li>
                <li>
                  <p>स्थल: SGSITS, इन्दौर</p>
                  <p><span className="font-semibold">Venue:</span> SGSITS, Indore</p>
                </li>
                <li>
                  <p>पंजीकरण: 20–25 सितंबर, 2025 (रात्रि 10:00 बजे तक)</p>
                  <p><span className="font-semibold">Registration:</span> 20–25 Sept 2025 (till 10:00 PM)</p>
                </li>
              </ul>
            </section>

            {/* Video holder: small on desktop (one column), full width on mobile */}
            <section className="col-span-2 md:col-span-1 bg-white/10 backdrop-blur rounded-lg p-2 flex items-center justify-center">
              <div className="w-full">
                <h2 className="text-sm sm:text-base font-semibold mb-3">Rehearsal of Academic Procession on 8th Sept 2025 — UDAAN-2025</h2>
                <div className="mx-auto w-full">
                  <div className="w-full aspect-video rounded-md overflow-hidden bg-black relative mt-2">
                    {/* videoRef used to try autoplay with sound; fallback overlay shown if autoplay blocked */}
                    <video
                      ref={videoRef}
                      controls
                      autoPlay
                      loop
                      playsInline
                      preload="metadata"
                      poster="/images/qr-placeholder.svg"
                      className="w-full h-full object-cover"
                    >
                      {/* Real video file in public/videos/ */}
                      <source src="/videos/prepvideo.mp4" type="video/mp4" />
                      {/* Optional captions track (create /public/videos/prepvideo.en.vtt if you have captions) */}
                      <track kind="captions" src="/videos/prepvideo.en.vtt" srclang="en" label="English" />
                      <p className="text-sm">Your browser does not support HTML5 video. <a href="/videos/prepvideo.mp4">Download the video</a>.</p>
                    </video>
                    {/* Overlay: shown when autoplay with sound is blocked; user can tap to start with sound */}
                    {showPlayOverlay && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <button
                          onClick={() => {
                            const v = videoRef?.current;
                            if (!v) return;
                            v.muted = false;
                            v.volume = 0.9;
                            const p = v.play();
                            if (p && typeof p.then === 'function') {
                              p.then(() => setShowPlayOverlay(false)).catch(() => setShowPlayOverlay(true));
                            }
                          }}
                          className="px-4 py-2 bg-white text-black rounded-md font-medium shadow-md"
                          aria-label="Play with sound"
                        >
                          Play with sound
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* How to participate - placed below the grid so on mobile it appears after the video */}
          <div className="mt-4">
            <section className="bg-white/10 backdrop-blur rounded-lg p-4 sm:p-5">
              <h2 className="text-lg font-semibold">How to participate</h2>
              <div className="mt-2 text-sm opacity-95">
                <p>कृपया आधिकारिक परिपत्र पढ़ें और पंजीकरण के लिए QR कोड स्कैन करें।</p>
                <p>Please review the official circular and scan the QR code to register.</p>
              </div>
            </section>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/udaan2025/circular" className="px-4 py-2 rounded-md bg-white text-black font-medium hover:bg-gray-200 transition-colors">
              Go to Udaan
            </Link>
            <Link href="/udaan2025" className="px-4 py-2 rounded-md border border-white/50 text-white font-medium hover:bg-white/10 transition-colors">
              All 2025 info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
