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
    { name: 'Projets', href: '#projects' },
    { name: 'À propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 top-0 sm:top-7 ${
      scrolled 
        ? 'bg-[#0B0C0E]/90 backdrop-blur-md py-3.5 border-b border-white/10 shadow-2xl' 
        : 'bg-gradient-to-b from-black/80 via-black/30 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Logo ZAY + Rec Dot */}
        <a href="#home" className="flex items-center gap-2 tracking-[0.25em] text-base font-bold uppercase text-white hover:text-white/80 transition-colors group">
          <span>ZAY</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#E03A3A] group-hover:animate-ping"></span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-9 text-xs uppercase tracking-[0.15em] font-medium text-white/70">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Tools: Audio VU-Meter & CTA */}
        <div className="hidden md:flex items-center gap-6">
          
          {/* Subtle Audio Stereo VU-Meter */}
          <div className="flex items-center gap-2 font-mono text-[9px] text-white/40 bg-black/40 px-3 py-1.5 rounded-full border border-white/10">
            <span className="text-[8px] tracking-wider text-white/30">AUDIO</span>
            <div className="flex gap-0.5 items-end h-2.5 w-4">
              <span className="w-0.5 bg-emerald-500 rounded-xs animate-[pulse_0.7s_infinite] h-[80%]"></span>
              <span className="w-0.5 bg-emerald-500 rounded-xs animate-[pulse_0.5s_infinite] h-[95%]"></span>
              <span className="w-0.5 bg-amber-400 rounded-xs animate-[pulse_0.9s_infinite] h-[65%]"></span>
              <span className="w-0.5 bg-[#E03A3A] rounded-xs animate-[pulse_1.2s_infinite] h-[40%]"></span>
            </div>
            <span className="text-white/60">-12dB</span>
          </div>

          {/* Right CTA Button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 bg-white text-[#0B0C0E] hover:bg-[#E03A3A] hover:text-white px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 shadow-sm hover:scale-105"
          >
            <span>Me Contacter</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white/80 hover:text-white focus:outline-none"
            aria-label="Menu"
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
        <div className="md:hidden bg-[#0B0C0E]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm uppercase tracking-widest text-white/70 hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-[#E03A3A] text-white py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase mt-4"
          >
            Me Contacter ↗
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
