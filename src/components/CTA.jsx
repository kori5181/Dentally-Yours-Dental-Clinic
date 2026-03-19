import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ctaRef.current,
        { scale: 0.95, opacity: 0, y: 30 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
          }
        }
      );
    }, ctaRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="px-6 md:px-16 lg:px-24 mb-12">
      <div 
        ref={ctaRef}
        className="max-w-7xl mx-auto rounded-3xl bg-[#1c5f9f] text-white p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-xl overflow-hidden relative"
      >
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>

        <div className="flex relative z-10 flex-col gap-4 text-center md:text-left align-middle justify-center max-w-2xl">
          <div className="flex items-center gap-4 justify-center md:justify-start hidden md:flex">
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-white">Book Your Appointment</h2>
          </div>
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-white md:hidden">Book Your Appointment</h2>
          <p className="text-white/80 text-lg md:text-xl font-light">
            Prioritize your oral health with our General Dentistry services. Schedule your appointment today. Our dedicated team is here to ensure your smile stays bright and healthy.
          </p>
        </div>

        <a 
          href="https://wa.me/9187348684" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative z-10 magnetic-btn bg-[#65b263] text-white px-8 py-4 rounded-md font-sans font-bold tracking-wide hover:bg-opacity-90 transition-all inline-block shadow-lg text-lg flex-shrink-0"
        >
          Book Appointment
        </a>
      </div>
    </section>
  );
};

export default CTA;
