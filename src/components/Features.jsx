import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Stethoscope, 
  Activity, 
  Search, 
  Scissors, 
  ShieldAlert, 
  HeartPulse, 
  ShieldCheck 
} from 'lucide-react';
import { cn } from './Navbar';

gsap.registerPlugin(ScrollTrigger);

const servicesList = [
  {
    title: "Routine Exams and Cleanings",
    desc: "Regular check-ups (recommended every six months) include a thorough examination of teeth, gums, and mouth. Professional cleanings remove plaque and tartar buildup.",
    icon: <Stethoscope strokeWidth={1.5} className="w-8 h-8 text-primary" />,
    colSpan: "md:col-span-2 lg:col-span-1"
  },
  {
    title: "Dental X-rays",
    desc: "Imaging techniques such as bitewing and panoramic X-rays help diagnose hidden dental problems like decay between teeth, impacted teeth, and bone loss.",
    icon: <Activity strokeWidth={1.5} className="w-8 h-8 text-accent" />,
    colSpan: "md:col-span-1"
  },
  {
    title: "Cavity Detection and Fillings",
    desc: "Early detection of tooth decay followed by treatment with tooth-colored composite fillings to restore damaged teeth beautifully and functionally.",
    icon: <Search strokeWidth={1.5} className="w-8 h-8 text-primary" />,
    colSpan: "md:col-span-1"
  },
  {
    title: "Tooth Extractions",
    desc: "Gentle and safe removal of severely decayed, damaged, or impacted teeth when saving the tooth is no longer possible.",
    icon: <Scissors strokeWidth={1.5} className="w-8 h-8 text-accent" />,
    colSpan: "md:col-span-1"
  },
  {
    title: "Root Canal Therapy",
    desc: "Expert treatment to save infected or inflamed tooth pulp, relieving pain and preventing tooth loss in a soothing environment.",
    icon: <ShieldAlert strokeWidth={1.5} className="w-8 h-8 text-primary" />,
    colSpan: "md:col-span-1 lg:col-span-2"
  },
  {
    title: "Gum Disease Evaluation",
    desc: "Assessment of gum health and expert treatment for gingivitis or periodontitis, including scaling and root planing for deeper cleaning.",
    icon: <HeartPulse strokeWidth={1.5} className="w-8 h-8 text-accent" />,
    colSpan: "md:col-span-1"
  },
  {
    title: "Preventive Treatments",
    desc: "Application of fluoride to strengthen enamel and dental sealants to protect children's and adults' molars from future decay.",
    icon: <ShieldCheck strokeWidth={1.5} className="w-8 h-8 text-primary" />,
    colSpan: "md:col-span-2"
  }
];

const Features = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-background z-20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-16">
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-dark tracking-tight leading-tight">
            Basic Clinic <span className="text-primary tracking-normal">Services.</span>
          </h2>
          <p className="font-sans text-dark/70 text-lg md:text-xl mt-4 max-w-2xl font-light">
            Forming the foundation of preventive and routine oral care, focusing on maintaining long-term dental health.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, idx) => (
            <div 
              key={idx} 
              className={cn(
                "service-card bg-white rounded-3xl p-8 md:p-10 border border-primary/5 shadow-sm hover:shadow-xl hover-lift transition-all flex flex-col group",
                service.colSpan
              )}
            >
              <div className="bg-background w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                {service.icon}
              </div>
              <h3 className="font-sans font-bold text-xl md:text-2xl text-dark mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-dark/65 text-[15px] md:text-base font-sans leading-relaxed flex-grow">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
