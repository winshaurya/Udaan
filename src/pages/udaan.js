import Link from "next/link";
import { useState } from "react";

export default function UdaanPage() {
  // YouTube embed setup (poster-first, privacy-enhanced)
  const YT_ID = "XlawpmBt_cI"; // from https://youtu.be/XlawpmBt_cI
  const YT_THUMB = `https://i.ytimg.com/vi/${YT_ID}/hqdefault.jpg`;
  // autoplay=1 and mute=1 so the video will start automatically in most browsers
  const nocookieSrc = `https://www.youtube-nocookie.com/embed/${YT_ID}?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1&playsinline=1`;
  // start with player active so iframe is rendered and autoplays (muted)
  const [playerActive, setPlayerActive] = useState(true);
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
                  <p>पंजीकरण: (विस्तारित) 30 सितंबर, 2025 (रात्रि 10:00 बजे तक)</p>
                  <p><span className="font-semibold">Registration:</span> (extended) 30 Sept 2025 (till 10:00 PM)</p>
                </li>
              </ul>
            </section>

            {/* Video holder: small on desktop (one column), full width on mobile */}
            <section className="col-span-2 md:col-span-1 bg-white/10 backdrop-blur rounded-lg p-2 flex items-center justify-center">
              <div className="w-full">
                <h2 className="text-sm sm:text-base font-semibold mb-3">Rehearsal of Academic Procession on 8th Sept 2025 — UDAAN-2025</h2>
                <div className="mx-auto w-full">
                  <div className="w-full aspect-video rounded-md overflow-hidden bg-black relative mt-2">
                    {/* YouTube iframe: starts muted (autoplay allowed), overlay button will switch to unmuted autoplay */}
                    <div className="w-full h-full relative">
                      {!playerActive ? (
                        <button
                          onClick={() => setPlayerActive(true)}
                          className="w-full h-full block relative focus:outline-none"
                          aria-label="Play video"
                        >
                          <img src={YT_THUMB} alt="Video thumbnail" className="w-full h-full object-cover" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="rounded-full bg-black/60 p-4">
                              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l11-7z"/></svg>
                            </div>
                          </div>
                        </button>
                      ) : (
                        <iframe
                          src={nocookieSrc}
                          title="Rehearsal of Academic Procession"
                          frameBorder="0"
                          allow="autoplay; encrypted-media; fullscreen"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      )}
                      {/* Fallback link for browsers that block iframes */}
                      <noscript className="absolute bottom-2 left-2 text-xs text-white">Watch on <a href={`https://youtu.be/${YT_ID}`} className="underline">YouTube</a></noscript>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* How to participate - placed below the grid so on mobile it appears after the video */}
          <div className="mt-4">
            <section className="bg-white/10 backdrop-blur rounded-lg p-4 sm:p-5">
              <h2 className="text-lg font-semibold">Dress code</h2>
              <div className="mt-2 text-sm opacity-95 space-y-2">
                <p><strong>Boys:</strong> Traditional Kurta and Pyjama / Jeans. Kurta preferably of white or off-white colour.</p>
                <p><strong>Girls:</strong> Salwar kurta / Saree — preferably of white or off-white colour.</p>
                <p>The half-jacket will be provided at the registration desk on the same day itself.</p>
                <hr className="my-2 border-white/10" />
                <p className="text-sm"> लड़कों के लिए कुर्ता-पायजामा/जीन्स। लड़कियों के लिए सलवार-कुर्ता/साड़ी।</p>
              </div>
            </section>

            <section className="mt-4 bg-white/10 backdrop-blur rounded-lg p-4 sm:p-5">
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
