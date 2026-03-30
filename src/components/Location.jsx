import React, { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Location = () => {
  const mapRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text
      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 85%",
            }
          }
        );
      }

      // Animate map container
      if (mapRef.current) {
        gsap.fromTo(
          mapRef.current,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: mapRef.current,
              start: "top 80%",
            }
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="px-6 md:px-16 lg:px-24 mb-20" id="location">
      <div className="max-w-7xl mx-auto">
        <div ref={textRef} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-sans font-medium text-sm mb-4">
            <MapPin className="w-4 h-4" />
            <span>Our Location</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-dark mt-2 mb-4">
            Visit Our Clinic
          </h2>
          <p className="text-dark/60 font-sans max-w-2xl mx-auto text-lg leading-relaxed">
            Kamala Ark No.3, First floor, Kumar layout 60 Ft. road,<br className="hidden md:block"/> 
            Kanakapura Main Rd, Judicial Layout 2nd Phase,<br className="hidden md:block"/> 
            Talaghattapura, Bengaluru, Karnataka 560109
          </p>
        </div>

        <div 
          ref={mapRef}
          className="w-full h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-dark/5 relative bg-dark/5"
        >
          <iframe 
            src="https://maps.google.com/maps?q=The+Roots+Dentistry,+Talaghattapura,+Bengaluru&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%" 
            height="100%" 
            style={{ border: 0 }}
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="The Roots Dentistry Location"
            className="absolute inset-0 grayscale-[20%] contrast-[1.1]"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;
