import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const servicesList = [
  {
    title: "Root Canal Treatment",
    desc: "Painless procedures to save your natural teeth.",
    img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Cosmetics & Veneers",
    desc: "Enhance your smile with precision cosmetic solutions.",
    img: "/assets/cosmetics.jpg"
  },
  {
    title: "Restorative Dentistry",
    desc: "Repairing and restoring damaged or missing teeth.",
    img: "/assets/restorative.jpg"
  },
  {
    title: "Orthodontics",
    desc: "Effective treatments to align and straighten your teeth.",
    img: "/assets/orthodontics.jpg"
  },
  {
    title: "Aligners",
    desc: "Straighten your teeth seamlessly and comfortably with clear aligners.",
    img: "/assets/aligners.jpg"
  },
  {
    title: "Implants",
    desc: "Permanent and natural-looking tooth replacements.",
    img: "/assets/Implants.jpg"
  },
  {
    title: "Pediatric Dentistry",
    desc: "Gentle and friendly dental care for children.",
    img: "/assets/pediatric.jpg"
  }
];

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".srv-card", { y: 50, opacity: 0 });
      ScrollTrigger.batch(".srv-card", {
        onEnter: (batch) => gsap.to(batch, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out", overwrite: true }),
        start: "top 85%",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-white z-20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-16 text-center items-center">
          <span className="font-bold text-[#63a0d9] uppercase tracking-wider text-sm mb-2">Services</span>
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-[#2a68a6] tracking-tight leading-tight">
            Our Dental Services
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesList.map((service, idx) => (
            <div 
              key={idx} 
              className="srv-card group relative overflow-hidden rounded-[2.5rem] aspect-[4/5] flex items-end p-6 md:p-8 hover-lift shadow-sm"
            >
              <img 
                src={service.img} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-500 group-hover:opacity-90" />
              
              <div className="relative z-10 w-full flex flex-col items-center text-center gap-2 md:gap-3 translate-y-4 group-hover:-translate-y-2 transition-transform duration-500">
                <h3 className="font-sans font-bold text-2xl md:text-3xl text-white drop-shadow-md">
                  {service.title}
                </h3>
                <p className="text-white/80 font-sans text-sm md:text-base px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
