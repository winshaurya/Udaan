import Link from "next/link";
import { Squash as Squash } from "hamburger-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setOpen(!isOpen);
    }
  }, [router.asPath]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const original = document.documentElement.style.overflow;
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = original || "";
    }
    return () => {
      document.documentElement.style.overflow = original || "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 z-[100001] flex items-center justify-between w-full xl:px-[80px] lg:px-[50px] px-[30px] py-[14px] transition-colors duration-300 ${
        scrolled || isOpen ? "backdrop-blur-sm bg-black/40" : "bg-transparent"
      }`}
    >
      {/* Left: Logo only */}
      <div className="flex items-center gap-4">
        <Link href="/" aria-label="Homepage">
          {/* Use the provided PNG and ensure it loads with a fallback */}
          <img
            src="/images/sgsits_logo.png"
            alt="Shri G.S. Institute of Technology & Science, Indore"
            className="site-logo relative z-[100001] transition-all duration-200 ease-in-out h-16 w-auto"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/images/sgsits_logo.png';
            }}
          />
        </Link>
      </div>

      {/* Right: navigation (desktop) */}
      <div className="sm:flex hidden items-center gap-[24px] text-white">
        <Link href="/udaan">Udaan</Link>
        <Link href="/about">About</Link>
        {/* Register link: text-only, bright white with glow, no padding */}
        <a
          href="https://forms.gle/xirfNSVTatEpGbf96"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-semibold drop-shadow-[0_0_8px_rgba(255,255,255,0.85)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] transition"
        >
          Register
        </a>
      </div>

      <div className="sm:hidden flex items-center gap-3 relative z-[100001]">
        {/* Mobile Register: bright white text, subtle glow, no padding, vertically centered */}
        <a
          href="https://forms.gle/xirfNSVTatEpGbf96"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-semibold drop-shadow-[0_0_8px_rgba(255,255,255,0.85)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] transition flex items-center h-10"
          style={{lineHeight: '1', display: 'flex', alignItems: 'center'}}
        >
          Register
        </a>
        <div className="flex items-center h-10">
          <Squash
            color={`${isOpen ? "#000" : "#fff"}`}
            toggled={isOpen}
            toggle={setOpen}
            easing="ease-in-out"
          />
        </div>
      </div>

      <div
        className={`${
          isOpen ? "top-0" : "top-[-100vh] delay-[.7s]"
        } flex justify-center flex-col px-[20px] transition-all ease-in-out duration-500 absolute w-screen h-screen bg-white z-[100000] left-0`}
      >
        <div
          className={`${isOpen ? "opacity-100" : "opacity-0 delay-[400ms]"} w-full transition-all ease-in-out duration-200 flex items-center justify-center flex-col`}
        >
          
          <Link
            className={`${
              isOpen ? "translate-x-0 delay-[320ms]" : "translate-x-[120%] delay-[320ms]"
            } transition-all ease-in-out duration-700 relative after:text-[30px] after:transform after:rotate-[-45deg] w-full after:content-['→'] after:absolute after:right-0 after:top-[12px] py-[20px] text-[22px] font-semibold border-b-[2px] border-black`}
            href="/udaan"
          >
            Udaan
          </Link>
          <Link
            className={`${
              isOpen ? "translate-x-0 delay-[440ms]" : "translate-x-[120%] delay-[200ms]"
            } transition-all ease-in-out duration-700 relative after:text-[30px] after:transform after:rotate-[-45deg] w-full after:content-['→'] after:absolute after:right-0 after:top-[12px] py-[20px] text-[22px] font-semibold border-b-[2px] border-black`}
            href="/about"
          >
            About
          </Link>
          <a
            className={`${
              isOpen ? "translate-x-0 delay-[520ms]" : "translate-x-[120%] delay-[120ms]"
            } transition-all ease-in-out duration-700 relative after:text-[30px] after:transform after:rotate-[-45deg] w-full after:content-['→'] after:absolute after:right-0 after:top-[12px] py-[20px] text-[22px] font-semibold border-b-[2px] border-black`}
            href="https://forms.gle/xirfNSVTatEpGbf96"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
}
