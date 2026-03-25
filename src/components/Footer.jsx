import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white rounded-t-[4rem] px-6 md:px-16 lg:px-24 pt-24 pb-12 mt-20 relative z-30 overflow-hidden">


      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/10 pb-16 mb-12">
        {/* Brand Column */}
        <div className="md:col-span-5 flex flex-col items-start">
          <div className="mb-6 flex items-center gap-1">
            <img
              src="/assets/throotdentistrylogo .png"
              alt="The Roots Dentistry"
              className="h-24 w-auto object-contain bg-white rounded-3xl p-2 shadow-md"
            />
          </div>
          <p className="font-sans text-white/50 max-w-sm mb-12 font-light leading-relaxed">
            Ultra-modern multi-speciality dental clinic providing flawless and soothing dental experiences in Talaghattapura, Bengaluru.
          </p>

        </div>

        {/* Nav Columns */}
        <div className="md:col-span-3 flex flex-col gap-6">
          <h4 className="font-sans font-bold text-white tracking-wide">Clinic</h4>
          <div className="flex flex-col gap-4">
            <a href="#services" className="font-sans text-white/50 hover:text-accent transition-colors text-sm font-medium">Services</a>
            <a href="#philosophy" className="font-sans text-white/50 hover:text-accent transition-colors text-sm font-medium">Philosophy</a>
            <a href="#protocol" className="font-sans text-white/50 hover:text-accent transition-colors text-sm font-medium">Protocol</a>
            <a href="#doctors" className="font-sans text-white/50 hover:text-accent transition-colors text-sm font-medium">Doctors</a>
          </div>
        </div>

        <div className="md:col-span-4 flex flex-col gap-6">
          <h4 className="font-sans font-bold text-white tracking-wide">Visit</h4>
          <div className="font-sans text-white/50 text-sm leading-relaxed font-medium">
            Kamala Ark No.3, First floor,<br />
            Kumar layout 60 Ft. road,<br />
            Kanakapura Main Rd, Judicial Layout 2nd Phase,<br />
            Talaghattapura, Bengaluru,<br />
            Karnataka 560109
          </div>

          <a
            href="https://wa.me/9187348684"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex max-w-fit items-center gap-2 px-4 py-2 mt-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-full text-white font-sans text-sm font-bold transition-all"
          >
            WhatsApp Us: +91 87348 684
          </a>

          <div className="font-sans text-white/50 text-sm leading-relaxed font-medium mt-2">
            Mon - Sun<br />
            10:00 AM - 02:00 PM<br />
            04:00 PM - 08:00 PM
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-sans text-white/50 font-medium pt-8">
        <div className="text-center md:text-left">
          &copy; {new Date().getFullYear()} The Roots Dentistry. All rights reserved.
        </div>
        <div className="text-center md:text-right">
          Designed by <a href="https://wa.me/917558051709?text=Hey%20Steve.%20Loved%20the%20Roots%20Dentistry.%20Would%20love%20to%20know%20if%20we%20can%20connect%20and%20work%20together." target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-white transition-colors">Steve Koruthu</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
