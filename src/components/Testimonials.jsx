import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    author: "Rahul S.",
    date: "A week ago",
    content: "Excellent service! The procedure was totally painless and the doctors are very professional and welcoming. Highly recommend to everyone in the neighborhood.",
    rating: 5,
  },
  {
    author: "Priya Menon",
    date: "1 month ago",
    content: "Best dental clinic in Talaghattapura. They have state-of-the-art equipment and Dr. Sharma explained everything perfectly before starting the treatment. Clean and hygienic.",
    rating: 5,
  },
  {
    author: "Arun Kumar",
    date: "2 months ago",
    content: "Affordable and transparent pricing. I got my root canal done here and there was zero discomfort. The staff is polite and very accommodating with appointments.",
    rating: 5,
  }
];

const Testimonials = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        ".testimonials-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          }
        }
      );

      // Cards animation (staggered)
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-6 md:px-16 lg:px-24 mb-24 bg-dark/5 py-16 md:py-24 rounded-[3rem]" id="reviews">
      <div className="max-w-7xl mx-auto">
        <div className="testimonials-header text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-sans font-medium text-sm mb-4">
            <Star className="w-4 h-4 fill-accent" />
            <span>Patient Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-dark mt-2 mb-6">
            Loved By Our Patients
          </h2>
          <div className="flex items-center justify-center gap-3">
            <span className="text-4xl font-sans font-bold text-dark">5.0</span>
            <div className="flex text-[#FBBC04]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
          </div>
          <p className="font-sans text-dark/60 mt-2">Based on Google Reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              ref={el => cardsRef.current[index] = el}
              className="bg-white rounded-3xl p-8 shadow-xl shadow-dark/5 border border-dark/5 flex flex-col items-start hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold font-sans text-xl">
                  {review.author[0]}
                </div>
                <div>
                  <h4 className="font-sans font-bold text-dark">{review.author}</h4>
                  <div className="flex items-center gap-1 mt-1 text-[#FBBC04]">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                    <span className="text-dark/40 text-xs font-sans ml-2">{review.date}</span>
                  </div>
                </div>
                <div className="ml-auto">
                    <svg className="w-6 h-6" viewBox="0 0 48 48">
                      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                      <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                      <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                      <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                    </svg>
                </div>
              </div>
              <p className="font-sans text-dark/70 leading-relaxed italic">
                "{review.content}"
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/place/The+Roots+Dentistry/@12.8663339,77.5327929,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae4194e35c35e5:0x6d046e9d75708d15!8m2!3d12.8663339!4d77.5353678!16s%2Fg%2F11y_tw0s50?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans font-bold text-accent hover:text-accent/80 transition-colors uppercase tracking-widest text-sm"
          >
            Read All Google Reviews
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
