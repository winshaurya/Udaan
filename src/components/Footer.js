import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Left: larger logo + copyright */}
          <div className="flex items-center gap-4">
            <img src="/images/sgsits_logo.png" alt="SGSITS Logo" className="h-16 w-auto" />
            <div className="text-sm text-white/70">© {new Date().getFullYear()} SGSITS</div>
          </div>

          {/* Right: compact nav and social links */}
          <div className="flex items-center gap-4">
            <nav className="hidden sm:flex items-center gap-4 text-sm text-white/80">
              <Link className="hover:text-white" href="/udaan">Udaan</Link>
              <Link className="hover:text-white" href="/about">About</Link>
              <Link className="hover:text-white" href="/docs/brochure.pdf">Brochure</Link>
            </nav>

            <div className="flex items-center gap-3 text-white/80">
              <a href="https://x.com/sgsits_official" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:text-white text-white font-bold text-lg">
                X
              </a>
              <a href="https://www.instagram.com/sgsits.official?igsh=MXRmNmk0cnlhYWo2cw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <path d="M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/sgsits-indore?trk=feed_main-feed-card_feed-actor-name" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-12h4v2.5a4 4 0 014-2.5z" fill="currentColor" />
                  <rect x="2" y="9" width="4" height="12" rx="1" fill="currentColor" />
                  <circle cx="4" cy="5" r="2" fill="currentColor" />
                </svg>
              </a>
              {/* GitHub link removed as requested */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
