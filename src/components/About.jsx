import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, UserIcon, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".animate-fade", { y: 30, opacity: 0 });
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: () => gsap.to(".animate-fade", { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", overwrite: true })
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 md:py-32 px-6 md:px-16 lg:px-24 bg-white z-20 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="animate-fade will-animate flex flex-col items-start gap-8">
          <div>
            <span className="font-bold text-accent uppercase tracking-wider text-sm mb-2 block">
              About Our Clinic
            </span>
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-dark tracking-tight leading-tight mb-6">
              Welcome to Dentally Yours Dental Clinic
            </h2>
            <p className="text-dark/70 text-lg leading-relaxed mb-6">
              Welcome to Dentally Yours Dental Clinic, where your journey to optimal oral health and a confident smile begins. Our team of experienced dentists is committed to providing personalized care in a warm and welcoming environment.
            </p>
          </div>

          <div className="flex flex-col gap-6 w-full">
            <div className="flex items-start gap-4">
              <div className="mt-1 bg-primary/10 p-3 rounded-full text-primary">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-dark mb-2">Expert Care</h3>
                <p className="text-dark/70 leading-relaxed">
                  Our team of skilled dental professionals at Dentally Yours Dental Clinic is dedicated to providing expert care tailored to your individual needs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 bg-primary/10 p-3 rounded-full text-primary">
                <UserIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-dark mb-2">Personalized Approach</h3>
                <p className="text-dark/70 leading-relaxed">
                  At Dentally Yours Dental Clinic, we understand that every patient is unique, which is why we take a personalized approach to your dental care.
                </p>
              </div>
            </div>
          </div>

          <a 
            href="tel:09611854058" 
            target="_blank" 
            rel="noopener noreferrer"
            className="magnetic-btn mt-6 bg-primary text-white px-10 py-4 rounded-full font-sans text-sm font-semibold uppercase tracking-widest inline-flex items-center justify-center gap-3 hover:shadow-xl hover:-translate-y-1 hover:bg-opacity-90 transition-all duration-300"
          >
            <Phone className="w-5 h-5" /> Call Now
          </a>
        </div>

        {/* Image Content */}
        <div className="animate-fade will-animate relative w-full aspect-square md:aspect-[4/3] lg:aspect-square overflow-hidden rounded-2xl">
          <img 
            src="/assets/About us - section.jpg" 
            alt="Doctor's Cabin" 
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
