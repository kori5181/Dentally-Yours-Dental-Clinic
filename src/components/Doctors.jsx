import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Doctors = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".doc-container", { y: 30, opacity: 0 });
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: () => gsap.to(".doc-container", { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", overwrite: true })
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="doctors" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-background z-20 relative">
      <div className="doc-container will-animate max-w-6xl mx-auto flex flex-col items-center">
        <div className="flex flex-col mb-16 text-center items-center">
          <span className="font-bold text-accent uppercase tracking-wider text-sm mb-2">Team</span>
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-primary tracking-tight leading-tight">
            Our Team
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full max-w-4xl">
          <div className="aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl drop-shadow-sm border border-primary/5">
            <img
              src="https://images.unsplash.com/photo-1594824436951-7f12bc502f9d?q=80&w=800&auto=format&fit=crop"
              alt="Dr. Sowndarya"
              loading="lazy"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="flex flex-col items-start text-left gap-6">
            <div>
              <h3 className="font-sans font-bold text-3xl md:text-4xl text-dark mb-2">Dr. Sowndarya</h3>
              <p className="text-accent font-bold text-lg">Chief Dentist</p>
            </div>

            <p className="text-dark/70 leading-relaxed text-lg">
              Dr. Sowndarya is a passionate and experienced dentist dedicated to providing the highest quality of care to her patients. With a gentle touch and a friendly demeanor, she ensures every visit is comfortable and stress-free.
            </p>
            <p className="text-dark/70 leading-relaxed text-lg mb-4">
              Her expertise spans across various fields of dentistry, ensuring that you receive comprehensive treatment tailored to your specific needs.
            </p>

            <a
              href="tel:09187348684"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn bg-primary text-white px-10 py-4 rounded-full font-sans text-sm font-semibold uppercase tracking-widest hover:shadow-xl hover:-translate-y-1 hover:bg-opacity-90 transition-all duration-300 inline-flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5" /> Book a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
