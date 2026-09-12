import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Accueil', href: '#home' },
    { name: 'Alternance & Profil', href: '#about' },
    { name: 'Parcours', href: '#parcours' },
    { name: 'Projets Vidéo', href: '#projects' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 top-0 sm:top-7 ${
      scrolled 
        ? 'bg-[#0B0C0E]/95 backdrop-blur-md py-3 border-b border-white/10 shadow-2xl' 
        : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent py-4 sm:py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        
        {/* Brand & BTS Status */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="tracking-[0.18em] text-sm sm:text-base font-bold uppercase text-white group-hover:text-white/85 transition-colors">
                ANTONY RAIMBAULT
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E03A3A] group-hover:animate-ping"></span>
            </div>
            <span className="text-[9px] font-mono tracking-wider text-[#E03A3A] uppercase font-semibold">
              BTS Audiovisuel / Montage
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-7 text-xs uppercase tracking-[0.12em] font-medium text-white/70">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors duration-200 hover:scale-105"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Tools & CTAs */}
        <div className="hidden md:flex items-center gap-4">
          
          {/* Subtle Audio Stereo VU-Meter */}
          <div className="hidden xl:flex items-center gap-2 font-mono text-[9px] text-white/40 bg-black/40 px-2.5 py-1.5 rounded-full border border-white/10">
            <span className="text-[8px] tracking-wider text-white/30">AUDIO</span>
            <div className="flex gap-0.5 items-end h-2.5 w-3.5">
              <span className="w-0.5 bg-emerald-500 rounded-xs animate-[pulse_0.7s_infinite] h-[80%]"></span>
              <span className="w-0.5 bg-emerald-500 rounded-xs animate-[pulse_0.5s_infinite] h-[95%]"></span>
              <span className="w-0.5 bg-amber-400 rounded-xs animate-[pulse_0.9s_infinite] h-[65%]"></span>
              <span className="w-0.5 bg-[#E03A3A] rounded-xs animate-[pulse_1.2s_infinite] h-[40%]"></span>
            </div>
            <span className="text-white/60">-12dB</span>
          </div>

          {/* Quick CV Download Button */}
          <a
            href={`${import.meta.env.BASE_URL}CV_Antony_Raimbault.pdf`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-3.5 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 shadow-sm hover:scale-105"
            title="Consulter le CV au format PDF"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span>CV (PDF)</span>
          </a>

          {/* Contact Button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 bg-white text-[#0B0C0E] hover:bg-[#E03A3A] hover:text-white px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 shadow-sm hover:scale-105"
          >
            <span>Me Contacter</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <a
            href={`${import.meta.env.BASE_URL}CV_Antony_Raimbault.pdf`}
            target="_blank"
            rel="noreferrer"
            className="text-[11px] font-mono uppercase bg-white/10 border border-white/20 px-2.5 py-1 rounded text-white"
          >
            CV PDF
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white/80 hover:text-white focus:outline-none"
            aria-label="Menu de navigation"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="4" x2="20" y1="12" y2="12"/>
                <line x1="4" x2="20" y1="6" y2="6"/>
                <line x1="4" x2="20" y1="18" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-[#0B0C0E]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 animate-card-appear">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm uppercase tracking-widest text-white/75 hover:text-[#E03A3A] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href={`${import.meta.env.BASE_URL}CV_Antony_Raimbault.pdf`}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-white/10 hover:bg-white/20 text-white py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase"
            >
              Consulter mon CV (PDF) ↗
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-[#E03A3A] text-white py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase"
            >
              Me Contacter pour une Alternance ↗
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
