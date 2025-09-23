import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo-white.png" alt="Logo" className="h-8 w-auto" />
              <span className="font-semibold">Udaan</span>
            </div>
            <p className="text-sm text-white/70 max-w-xs">Discover amazing events and create unforgettable memories.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Explore</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link className="hover:text-white" href="/">Events</Link></li>
              <li><Link className="hover:text-white" href="/gallery">Gallery</Link></li>
              <li><Link className="hover:text-white" href="/about">About</Link></li>
              {/* Contact page removed */}
            </ul>
          </div>
          {/* Contact column removed */}
          <div>
            <h3 className="font-semibold mb-3">Follow</h3>
            <div className="flex items-center gap-3 text-sm text-white/80">
              <a className="hover:text-white" href="#" aria-label="Instagram">Instagram</a>
              <span className="opacity-30">•</span>
              <a className="hover:text-white" href="#" aria-label="Facebook">Facebook</a>
              <span className="opacity-30">•</span>
              <a className="hover:text-white" href="#" aria-label="Twitter">Twitter</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-6 text-xs text-white/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Udaan. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link className="hover:text-white" href="#">Privacy</Link>
            <Link className="hover:text-white" href="#">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
