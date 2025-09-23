import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />

      {/* One-liner headline under the hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 text-center">
        <h2 className="text-xl sm:text-2xl font-semibold">Celebrating achievement and excellence — certificates & medals for outstanding students.</h2>
      </div>

      {/* Redesigned section below hero: responsive 3-column cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* QR Card */}
          <article className="flex items-stretch">
            <a href="https://forms.gle/xirfNSVTatEpGbf96" target="_blank" rel="noopener noreferrer" className="group w-full block rounded-xl overflow-hidden shadow-lg bg-white/5 border border-white/10 hover:scale-[1.01] transform transition">
              <div className="p-6 flex flex-col items-center">
                <div className="w-60 h-60 bg-white rounded-md overflow-hidden flex items-center justify-center">
                  <img src="/images/qr.png" alt="Register: QR code to open registration form" onError={(e)=>{e.currentTarget.onerror=null; e.currentTarget.src='/images/qr-placeholder.svg'}} className="w-full h-full object-contain" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-white">Register for Udaan</h3>
                <p className="mt-2 text-sm text-white/70 text-center">Scan the QR or click the card to open the registration form.</p>
                <span className="mt-4 inline-flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-md text-sm">Open form</span>
              </div>
            </a>
          </article>

          {/* Event Details Card */}
          <article className="flex items-stretch">
            <div className="w-full rounded-xl overflow-hidden shadow-lg bg-white/5 border border-white/10 p-6 flex flex-col">
              <h3 className="text-xl font-semibold text-white">Event Details</h3>
              <p className="mt-3 text-sm text-white/80">Udaan — Certificate and medal distribution ceremony.</p>
              <dl className="mt-4 text-sm text-white/70 space-y-2">
                <div>
                  <dt className="font-medium">Date</dt>
                  <dd>April 26, 2025</dd>
                </div>
                <div>
                  <dt className="font-medium">Time</dt>
                  <dd>10:00 AM — 1:00 PM</dd>
                </div>
                <div>
                  <dt className="font-medium">Location</dt>
                  <dd>SGSITS Auditorium</dd>
                </div>
              </dl>
              <div className="mt-auto pt-4">
                <a href="/docs/brochure.pdf" className="inline-block px-4 py-2 mr-3 bg-transparent border border-white/20 text-white rounded-md text-sm hover:bg-white/5">Brochure</a>
                <a href="/udaan" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md text-sm">Learn more</a>
              </div>
            </div>
          </article>

          {/* Resources Card */}
          <article className="flex items-stretch">
            <div className="w-full rounded-xl overflow-hidden shadow-lg bg-white/5 border border-white/10 p-6 flex flex-col">
              <h3 className="text-xl font-semibold text-white">Quick Resources</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li><a href="/docs/brochure.pdf" className="text-white/90 hover:underline">Download brochure (PDF)</a></li>
                <li><a href="/docs/schedule.pdf" className="text-white/90 hover:underline">View schedule (PDF)</a></li>
                <li><a href="/gallery" className="text-white/90 hover:underline">Photo gallery</a></li>
                <li><a href="/udaan2025/circular" className="text-white/90 hover:underline">Circular & guidelines</a></li>
              </ul>
              <p className="mt-4 text-sm text-white/70">Need the QR sized for print? <a href="/images/qr.png" className="text-indigo-400 hover:underline">Download high-res QR</a>.</p>
            </div>
          </article>
        </div>
      </section>

    </div>
  );
}
