import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';

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
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2669&auto=format&fit=crop" 
          alt="Modern dental clinic" 
          className="w-full h-full object-cover scale-[1.02] opacity-40 mix-blend-luminosity"
        />
        {/* Soft Teal to Slate Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-primary/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 pb-20 md:pb-32 flex flex-col items-start gap-6 pt-24 md:pt-0">
        <div className="flex flex-col">
          <h1 className="hero-element text-background font-sans font-bold text-3xl md:text-5xl tracking-tighter leading-[1.1] mb-2">
            The Roots Dentistry
          </h1>
          <h2 className="hero-element font-bold text-white text-4xl md:text-6xl lg:text-8xl leading-[1.1] max-w-4xl">
            Best Clinic in Talaghattapura.
          </h2>
        </div>
        
        <a 
          href="https://wa.me/9187348684" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hero-element magnetic-btn mt-6 bg-accent text-white px-8 py-4 rounded-md font-sans font-bold tracking-wide flex items-center gap-3 hover:bg-opacity-90 transition-all inline-flex"
        >
          Book Appointment
        </a>
      </div>
    </section>
  );
};

export default Hero;
