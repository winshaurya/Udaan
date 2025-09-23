import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-3">
          {/* Logo + title */}
          <div className="flex items-center gap-3">
            <img src="/images/sgsits_logo.png" alt="SGSITS Logo" className="h-16 w-auto" />
            <div className="hidden sm:block text-sm text-white/80">© {new Date().getFullYear()} SGSITS</div>
          </div>

          {/* Inline nav links */}
          <nav className="flex items-center gap-3 text-sm">
            <Link className="text-white/80 hover:text-white" href="/udaan">Udaan</Link>
            <span className="opacity-30">•</span>
            <Link className="text-white/80 hover:text-white" href="/about">About</Link>
            <span className="opacity-30">•</span>
            <Link className="text-white/80 hover:text-white" href="/docs/brochure.pdf">Brochure</Link>
          </nav>

          {/* Social + small links */}
          <div className="flex items-center gap-3">
            <div className="text-sm text-white/80 hidden sm:flex items-center gap-2">
              <a className="hover:text-white" href="https://x.com/sgsits_official" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">X</a>
              <a className="hover:text-white" href="https://www.instagram.com/sgsits.official?igsh=MXRmNmk0cnlhYWo2cw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
              <a className="hover:text-white" href="https://www.linkedin.com/company/sgsits-indore?trk=feed_main-feed-card_feed-actor-name" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
              <a className="hover:text-white" href="https://www.facebook.com/sgsits" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook</a>
            </div>
            {/* privacy/terms removed as requested */}
          </div>
        </div>

        {/* Mobile copyright row */}
        <div className="mt-3 sm:hidden text-xs text-white/50 text-center">© {new Date().getFullYear()} SGSITS. All rights reserved.</div>
      </div>
    </footer>
  );
}
