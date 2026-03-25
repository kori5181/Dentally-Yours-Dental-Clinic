import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Phone } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-element",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.2
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[100dvh] w-full overflow-hidden flex items-end">
      {/* Background Image & Gradient overlay */}
      <div className="absolute inset-0 z-0 bg-dark">
        <img 
          src="/assets/homepage pic.png" 
          alt="The Roots Dentistry Clinic" 
          fetchPriority="high"
          className="w-full h-full object-cover object-right md:object-center scale-[1.05] opacity-[0.85]"
        />
        {/* Sleek Dark Overlays for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 pb-20 md:pb-32 pt-32 md:pt-48 flex items-end">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-start gap-6">
          <div className="flex flex-col max-w-3xl">
            <div className="hero-element flex items-center gap-4 mb-6">
              <span className="h-[1px] w-12 bg-accent opacity-80"></span>
              <h1 className="text-accent/90 font-sans font-semibold text-sm md:text-base uppercase tracking-[0.2em]">
                The Roots Dentistry
              </h1>
            </div>
            
            <h2 className="hero-element font-serif font-medium text-white text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight mb-8">
              Best Clinic in <br className="hidden md:block" />Talaghattapura.
            </h2>

            <div className="hero-element flex items-center gap-3 text-white/70 font-sans text-base md:text-lg font-light tracking-wide pl-4 border-l border-white/20">
              <p>Led by <span className="font-semibold text-accent">Dr. Sowndarya H</span></p>
            </div>
          </div>
          
          <a 
            href="https://wa.me/9187348684" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hero-element magnetic-btn mt-6 bg-accent text-white px-10 py-4 rounded-full font-sans text-sm font-semibold uppercase tracking-widest flex items-center justify-center gap-3 hover:shadow-xl hover:-translate-y-1 hover:bg-opacity-90 transition-all duration-300 inline-flex"
          >
            <Phone className="w-5 h-5" /> Book Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
