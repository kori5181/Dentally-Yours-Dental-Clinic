import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, UserIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".about-element", { y: 50, opacity: 0 });
      ScrollTrigger.batch(".about-element", {
        onEnter: (batch) => gsap.to(batch, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out", overwrite: true }),
        start: "top 85%",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 md:py-32 px-6 md:px-16 lg:px-24 bg-white z-20 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="flex flex-col items-start gap-8">
          <div>
            <span className="about-element font-bold text-accent uppercase tracking-wider text-sm mb-2 block">
              About Our Clinic
            </span>
            <h2 className="about-element font-sans font-bold text-4xl md:text-5xl text-dark tracking-tight leading-tight mb-6">
              Welcome to The Roots Dentistry
            </h2>
            <p className="about-element text-dark/70 text-lg leading-relaxed mb-6">
              Welcome to The Roots Dentistry where your journey to optimal oral health and a confident smile begins. Our team of experienced dentists is committed to providing personalized care in a warm and welcoming environment.
            </p>
          </div>

          <div className="about-element flex flex-col gap-6 w-full">
            <div className="flex items-start gap-4">
              <div className="mt-1 bg-primary/10 p-3 rounded-full text-primary">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-dark mb-2">Expert Care</h3>
                <p className="text-dark/70 leading-relaxed">
                  Our team of skilled dental professionals at The Roots Dentistry is dedicated to providing expert care tailored to your individual needs.
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
                  At The Roots Dentistry, we understand that every patient is unique, which is why we take a personalized approach to your dental care.
                </p>
              </div>
            </div>
          </div>

          <a 
            href="https://wa.me/9187348684" 
            target="_blank" 
            rel="noopener noreferrer"
            className="about-element magnetic-btn mt-6 bg-primary text-white px-8 py-3 rounded-md font-sans font-bold tracking-wide hover:bg-opacity-90 transition-all text-center"
          >
            Call Now
          </a>
        </div>

        {/* Image Content */}
        <div className="about-element relative w-full aspect-square md:aspect-[4/3] lg:aspect-square overflow-hidden rounded-2xl">
          <img 
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=2000" 
            alt="Dental clinic interior" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
