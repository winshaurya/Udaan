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
      {/* Left: Register + Logo */}
      <div className="flex items-center gap-4">
        <a href="https://forms.gle/xirfNSVTatEpGbf96" target="_blank" rel="noopener noreferrer" className="register-glow inline-flex items-center px-3 py-1 rounded text-white text-sm">Register</a>
        <Link href="/" aria-label="Homepage">
          {/* use the same logo as footer (h-16) */}
          <img src="/images/sgsits_logo.png" alt="SGSITS Logo" className="site-logo relative z-[100001] transition-all duration-200 ease-in-out h-16 w-auto" />
        </Link>
      </div>

      {/* Right: navigation (desktop) */}
      <div className="sm:flex hidden items-center gap-[24px] text-white">
        <Link href="/udaan">Udaan</Link>
        <Link href="/about">About</Link>
      </div>

      <div className="block sm:hidden relative z-[100001]">
        <Squash
          color={`${isOpen ? "#000" : "#fff"}`}
          toggled={isOpen}
          toggle={setOpen}
          easing="ease-in-out"
        />
      </div>

      <div
        className={`${
          isOpen ? "top-0" : "top-[-100vh] delay-[.7s]"
        } flex justify-center flex-col px-[20px] transition-all ease-in-out duration-500 absolute w-screen h-screen bg-white z-[100000] left-0`}
      >
        <div
          className={`${isOpen ? "opacity-1" : "opacity-0 delay-[400ms]"} w-full transition-all ease-in-out duration-200 flex items-center justify-center flex-col`}
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
            } transition-all ease-in-out duration-700 w-full py-[20px] text-[22px] font-semibold border-b-[2px] border-black text-center`}
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
