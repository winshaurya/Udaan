import Link from "next/link";

export default function UdaanPage() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: "url('/images/sgsits_background.webp')", backgroundColor: '#000' }}
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-[1]">
        <div className="text-white max-w-[1100px] xl:px-[80px] lg:px-[50px] px-[30px] pt-[140px] pb-[80px] mx-auto">
          <h1 className="text-3xl sm:text-4xl font-semibold uppercase tracking-wide">Udaan</h1>
          <div className="mt-4 text-sm sm:text-base leading-relaxed opacity-95 space-y-2">
            <p>प्रमाण पत्र व स्वर्ण पदक वितरण समारोह — उड़ान।</p>
            <p>Certificate and gold‑medal distribution ceremony — Udaan.</p>
            <p>संस्थान द्वारा वर्ष 2025 के स्नातक/स्नातकोत्तर छात्रों को प्रोविज़नल डिग्री व प्रमाण पत्र प्रदान किए जाएंगे।</p>
            <p>Provisional degrees and certificates will be formally distributed to 2025 graduates.</p>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <section className="bg-white/10 backdrop-blur rounded-lg p-5">
              <h2 className="text-lg font-semibold">Who should attend?</h2>
              <ul className="mt-2 list-disc ml-5 text-sm opacity-95 space-y-2">
                <li>
                  <p>स्नातक/स्नातकोत्तर (2025) जिन्हें प्रमाण पत्र मिलेंगे।</p>
                  <p>Graduates (UG/PG, 2025) receiving certificates.</p>
                </li>
                <li>
                  <p>स्वर्ण पदक प्राप्तकर्ता।</p>
                  <p>Gold medal awardees.</p>
                </li>
                <li>
                  <p>शिक्षक, कर्मचारी, परिवार एवं आमंत्रित पूर्व छात्र।</p>
                  <p>Faculty, staff, family members, and invited alumni.</p>
                </li>
              </ul>
            </section>

            <section className="bg-white/10 backdrop-blur rounded-lg p-5">
              <h2 className="text-lg font-semibold">Udaan 2025 — At a glance</h2>
              <ul className="mt-2 text-sm opacity-95 space-y-2">
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
            <section className="bg-white/10 backdrop-blur rounded-lg p-5">
              <h2 className="text-lg font-semibold">How to participate</h2>
              <div className="mt-2 text-sm opacity-95">
                <p>कृपया आधिकारिक परिपत्र पढ़ें और पंजीकरण के लिए QR कोड स्कैन करें।</p>
                <p>Please review the official circular and scan the QR code to register.</p>
              </div>
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
