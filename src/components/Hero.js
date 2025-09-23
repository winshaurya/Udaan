import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Hero = () => {
  const typedRef = useRef(null);
  const elRef = useRef(null);

  useEffect(() => {
    if (!elRef.current) return;
    const options = {
      strings: ["Udaan 25'", "Udaaan 25'", "Udaaaaaaan 25'", "Udaaaaaaaaaaan 25'", "Udaaaaaaan 25'", "Udaaan 25'", "Udaan 25'"],
      typeSpeed: 90,
      backSpeed: 60,
      backDelay: 900,
      loop: true,
      showCursor: false,
      smartBackspace: true,
    };
    typedRef.current = new Typed(elRef.current, options);
    return () => {
      typedRef.current && typedRef.current.destroy();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/sgsits_background.webp')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight">
          <span ref={elRef} className="inline-block" />
        </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 max-w-2xl mx-auto leading-relaxed">
            आज की सफलता, कल की प्रेरणा<br />Today’s success, tomorrow’s inspiration
          </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="/docs/brochure.pdf" className="inline-block bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg text-base sm:text-lg lg:text-xl transition duration-300 transform hover:scale-105 hover:shadow-lg border border-white/30">
            Brochure
          </a>
          <a href="/docs/schedule.pdf" className="inline-block bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg text-base sm:text-lg lg:text-xl transition duration-300 transform hover:scale-105 hover:shadow-lg border border-white/30">
            Schedule
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;