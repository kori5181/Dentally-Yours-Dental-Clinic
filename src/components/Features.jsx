import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  UserPlus, 
  Settings, 
  MonitorSmartphone, 
  FileText, 
  ShieldCheck, 
  Users
} from 'lucide-react';
import { cn } from './Navbar';

gsap.registerPlugin(ScrollTrigger);

const featuresList = [
  {
    title: "Comfort and Convenience",
    desc: "Your comfort and convenience are our top priorities at The Roots Dentistry. From our warm and inviting office environment to our flexible scheduling options.",
    icon: <UserPlus strokeWidth={1.5} className="w-8 h-8 text-dark" />,
  },
  {
    title: "Customized Treatment Plans",
    desc: "We understand your smile is unique. We take the time to listen to your concerns and goals, crafting a personalized treatment plan to achieve your desired results.",
    icon: <Settings strokeWidth={1.5} className="w-8 h-8 text-dark" />,
  },
  {
    title: "Modern Technology",
    desc: "Modern technology in dentistry has revolutionized patient care through advancements such as digital imaging, which provides precise and detailed visuals.",
    icon: <MonitorSmartphone strokeWidth={1.5} className="w-8 h-8 text-dark" />,
  },
  {
    title: "Affordable Service",
    desc: "We believe high-quality dentistry shouldn't break the bank. We offer competitive rates and transparent pricing, so you can make informed decisions about your oral health.",
    icon: <FileText strokeWidth={1.5} className="w-8 h-8 text-dark" />,
  },
  {
    title: "Premium Dental Care",
    desc: "Experience the difference a healthy smile makes! We use top-of-the-line materials and equipment to deliver exceptional results and a comfortable experience.",
    icon: <ShieldCheck strokeWidth={1.5} className="w-8 h-8 text-dark" />,
  },
  {
    title: "Happy Clients",
    desc: "Our commitment to exceptional care has earned the trust of countless satisfied patients. Join our growing community of happy smiles!",
    icon: <Users strokeWidth={1.5} className="w-8 h-8 text-dark" />,
  }
];

const Features = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".feature-item", { y: 50, opacity: 0 });
      ScrollTrigger.batch(".feature-item", {
        onEnter: (batch) => gsap.to(batch, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out", overwrite: true }),
        start: "top 85%",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="features" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-[#e8f1fb] z-20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-20 text-center items-center">
          <span className="font-bold text-[#63a0d9] uppercase tracking-wider text-sm mb-2">What We Do</span>
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-[#2a68a6] tracking-tight leading-tight">
            Why Choose us?
          </h2>
          <p className="font-sans text-dark/70 text-lg md:text-[17px] mt-6 max-w-3xl font-light leading-relaxed">
            At <strong>The Roots Dentistry</strong>, we believe in providing our patients with treatments which includes their involvement at all times. Our patients are the stars where we have set a standard, in providing a dental care with a feeling of being at home.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {featuresList.map((feature, idx) => (
            <div 
              key={idx} 
              className="feature-item flex flex-col items-start text-left"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                {feature.icon}
              </div>
              <h3 className="font-sans font-bold text-xl text-[#63a0d9] mb-4">{feature.title}</h3>
              <p className="text-dark/80 text-[15px] md:text-base font-sans leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
