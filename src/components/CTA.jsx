import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone } from 'lucide-react';

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
        className="max-w-7xl mx-auto rounded-3xl bg-primary text-white p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-xl overflow-hidden relative"
      >
        {/* Decorative elements */}


        <div className="flex relative z-10 flex-col gap-4 text-center md:text-left align-middle justify-center max-w-2xl">
          <div className="flex items-center gap-4 justify-center md:justify-start hidden md:flex">
            <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 21h4c1.6 0 3-1.4 3-3v-2.3c0-1.2.6-2.4 1.7-3 1.2-.7 1.3-2.3 1.3-3.7 0-3.3-2.7-6-6-6s-6 2.7-6 6c0 1.4.1 3 1.3 3.7 1.1.6 1.7 1.8 1.7 3v2.3c0 1.6 1.4 3 3 3z" />
              <path d="M12 21v-4" />
            </svg>
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-white">Book Your Appointment</h2>
          </div>
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-white md:hidden">Book Your Appointment</h2>
          <p className="text-white/80 text-lg md:text-xl font-light">
            Prioritize your oral health with our General Dentistry services. Schedule your appointment today.
          </p>
        </div>

        <a
          href="tel:09187348684"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 magnetic-btn bg-accent text-white px-12 py-5 rounded-full font-sans text-sm font-bold uppercase tracking-widest hover:shadow-2xl hover:-translate-y-1 hover:bg-opacity-90 transition-all duration-300 inline-flex items-center justify-center gap-3 flex-shrink-0"
        >
          <Phone className="w-5 h-5" /> Book Appointment
        </a>
      </div>
    </section>
  );
};

export default CTA;
