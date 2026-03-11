import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax Background
      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Text Reveal
      gsap.fromTo(
        ".phil-text",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="philosophy" className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden bg-dark">
      {/* Background Parallax */}
      <div ref={bgRef} className="absolute -top-[20%] -bottom-[20%] left-0 right-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2670&auto=format&fit=crop" 
          alt="Comfortable clinic environment" 
          className="w-full h-full object-cover opacity-25 mix-blend-overlay"
        />
      </div>

      <div ref={textRef} className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-10">
        <p className="phil-text text-background/60 font-sans text-lg md:text-2xl font-light tracking-wide mt-10">
          Your peace of mind is our priority.
        </p>
        
        <h2 className="phil-text font-serif italic text-background text-5xl md:text-7xl lg:text-8xl leading-[1.1]">
          We focus on:<br/> <span className="text-accent underline decoration-accent/40 underline-offset-[12px]">making you feel safe</span>.
        </h2>
      </div>
    </section>
  );
};

export default Philosophy;
