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
          <p className="font-sans text-white/50 max-w-sm mb-8 font-light leading-relaxed">
            Ultra-modern multi-speciality dental clinic providing flawless and soothing dental experiences in Talaghattapura, Bengaluru.
          </p>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://www.instagram.com/therootsdentistry/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center text-white transition-colors duration-300 shadow-md"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        {/* Nav Columns */}
        <div className="md:col-span-3 flex flex-col gap-6">
          <h4 className="font-sans font-bold text-white tracking-wide">Clinic</h4>
          <div className="flex flex-col gap-4">
            <a href="#about" className="font-sans text-white/50 hover:text-accent transition-colors text-sm font-medium">About</a>
            <a href="#features" className="font-sans text-white/50 hover:text-accent transition-colors text-sm font-medium">Why</a>
            <a href="#services" className="font-sans text-white/50 hover:text-accent transition-colors text-sm font-medium">Services</a>
            <a href="#doctors" className="font-sans text-white/50 hover:text-accent transition-colors text-sm font-medium">Doctor</a>
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
            href="tel:09187348684"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex max-w-fit items-center gap-2 px-4 py-2 mt-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-full text-white font-sans text-sm font-bold transition-all"
          >
            Call Us: 09187348684
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
