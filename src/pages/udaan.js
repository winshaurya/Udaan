import Link from "next/link";

export default function UdaanPage() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: "url('/images/image17.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-[1]">
        <div className="text-white max-w-[1100px] xl:px-[80px] lg:px-[50px] px-[30px] pt-[140px] pb-[80px] mx-auto">
          <h1 className="text-3xl sm:text-4xl font-semibold uppercase tracking-wide">Udaan</h1>
          <p className="mt-4 text-sm sm:text-base leading-relaxed opacity-95">
            Udaan is SGSITS Indore’s annual convocation and celebration where provisional degrees, certificates,
            and institute honors are formally conferred. It also recognizes outstanding student achievements in the presence of
            distinguished dignitaries, alumni, faculty, and families.
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <section className="bg-white/10 backdrop-blur rounded-lg p-5">
              <h2 className="text-lg font-semibold">What is Udaan?</h2>
              <p className="mt-2 text-sm opacity-95">
                A formal institute ceremony featuring degree distribution for graduating UG/PG students and felicitation of gold medalists.
                The event is hosted annually as <span className="font-semibold">UdaanYYYY</span> (e.g., Udaan2025, Udaan2026).
              </p>
            </section>
            <section className="bg-white/10 backdrop-blur rounded-lg p-5">
              <h2 className="text-lg font-semibold">Who should attend?</h2>
              <ul className="mt-2 list-disc ml-5 text-sm opacity-95 space-y-1">
                <li>Graduates of the year (UG/PG) receiving provisional degrees and certificates</li>
                <li>Gold medal awardees</li>
                <li>Faculty, staff, family members, and invited alumni</li>
              </ul>
            </section>

            <section className="bg-white/10 backdrop-blur rounded-lg p-5">
              <h2 className="text-lg font-semibold">Udaan 2025 — At a glance</h2>
              <ul className="mt-2 text-sm opacity-95 space-y-1">
                <li><span className="font-semibold">Date & Time:</span> Wednesday, 08 Oct 2025, 2:00 PM</li>
                <li><span className="font-semibold">Venue:</span> SGSITS, Indore</li>
                <li><span className="font-semibold">Registration:</span> 20–25 Sept 2025 (till 10:00 PM)</li>
              </ul>
            </section>
            <section className="bg-white/10 backdrop-blur rounded-lg p-5">
              <h2 className="text-lg font-semibold">How to participate</h2>
              <p className="mt-2 text-sm opacity-95">
                Please review the official circular for detailed instructions and scan the QR code to register within the specified dates.
              </p>
            </section>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
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
