import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isRec, setIsRec] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    // Smoothly toggle between ALTERNANCE and REC every 3.2 seconds
    const interval = setInterval(() => {
      setIsRec((prev) => !prev);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  // Parallax displacement based on cursor position (-20px to +20px)
  const parallaxX = (mousePos.x - 0.5) * -35;
  const parallaxY = (mousePos.y - 0.5) * -35;

  return (
    <section 
      id="home" 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#0B0C0E] py-24 sm:py-32"
    >
      {/* Background Image with Cursor-driven Parallax & Subtle Zoom */}
      <div 
        className="absolute inset-[-40px] pointer-events-none overflow-hidden transition-transform duration-200 ease-out will-change-transform z-0"
        style={{ 
          transform: `translate3d(${parallaxX}px, ${parallaxY}px, 0) scale(1.06)`
        }}
      >
        <img 
          src={`${import.meta.env.BASE_URL}hero-bg.jpg`} 
          alt="Cinematic Background" 
          className="w-full h-full object-cover object-center opacity-60 filter brightness-85 contrast-110"
        />
        {/* Gradients to guarantee text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-[#0B0C0E]/50 to-[#0B0C0E]/80"></div>
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, transparent 30%, rgba(11, 12, 14, 0.75) 100%)'
          }}
        ></div>
      </div>

      {/* Interactive Cursor Spotlight / Projector Beam */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(750px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(224, 58, 58, 0.16), rgba(255, 255, 255, 0.03) 30%, transparent 65%)`
        }}
      ></div>

      {/* Ambient Moving Glow Light following cursor */}
      <div 
        className="absolute pointer-events-none z-0 rounded-full blur-[110px] bg-[#E03A3A]/15 w-[420px] h-[420px] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out"
        style={{
          left: `${mousePos.x * 100}%`,
          top: `${mousePos.y * 100}%`
        }}
      ></div>

      {/* Spacer for navbar */}
      <div className="h-14 sm:h-20"></div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 text-center my-auto py-8 relative z-10">
        
        {/* Top Alternance Badge */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4 py-2 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[11px] sm:text-[12px] text-white/90 mb-8 shadow-2xl hover:border-[#E03A3A]/40 transition-all duration-300 select-none">
          
          {/* Morphing In-place Pill */}
          <div className="bg-[#E03A3A] text-white font-bold text-[10px] uppercase py-1 px-3 rounded-full tracking-wider flex items-center justify-center transition-all duration-500 min-w-[88px] h-6 shadow-[0_0_12px_rgba(224,58,58,0.4)]">
            <div className="relative flex items-center justify-center w-full">
              {/* State 1: ALTERNANCE */}
              <span 
                className={`transition-all duration-500 absolute whitespace-nowrap ${
                  isRec ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'
                }`}
              >
                ALTERNANCE
              </span>
              
              {/* State 2: REC (Cinema Camera Look) */}
              <span 
                className={`transition-all duration-500 flex items-center gap-1.5 whitespace-nowrap ${
                  isRec ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
                }`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-90"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                REC
              </span>
            </div>
          </div>

          <span className="font-light tracking-wide text-white/90">
            BTS Audiovisuel Montage & Post-production • Rythme 2j école / 3j entreprise
          </span>
        </div>

        {/* Headline with Cormorant Garamond Serif Italic */}
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.35em] text-[#E03A3A] font-semibold mb-3">
            Antony Raimbault
          </p>
          <h1 className="font-serif italic font-normal text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.12]">
            Monteur Vidéo & Post-Production <br />
            <span className="neon-broken not-italic font-serif italic cursor-default select-none">
              À la Recherche d'une Alternance
            </span>
          </h1>
        </div>

        {/* Subtitle / Pitch */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/80 font-light leading-relaxed tracking-wide mb-8">
          Étudiant de 18 ans en BTS Audiovisuel (option Montage et Post-production). Alliant sens narratif, maîtrise technique d'<strong>Adobe Premiere Pro</strong> et d'<strong>After Effects</strong> et rigueur de production, je recherche une alternance en Île-de-France pour contribuer activement à vos projets vidéo.
        </p>

        {/* Quick parameters badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 text-[11px] font-mono text-white/60">
          <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/85">
            📅 Rythme : 2j École / 3j Entreprise
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/85">
            📍 Localisation : Île-de-France (78 / Paris)
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/85">
            🎬 Contrat : Apprentissage / Pro
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* Primary CTA: Download CV */}
          <a
            href={`${import.meta.env.BASE_URL}CV_Antony_Raimbault.pdf`}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#E03A3A] hover:bg-[#c92a2a] text-white px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.15em] font-semibold transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(224,58,58,0.4)] group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-0.5 transition-transform">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span>Télécharger mon CV (PDF)</span>
          </a>

          {/* Secondary CTA: Projects */}
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/25 px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 hover:scale-105 shadow-xl group"
          >
            <span>Explorer mes Projets</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>

          {/* Tertiary CTA: Contact */}
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white/75 hover:text-white px-6 py-3.5 rounded-full text-xs uppercase tracking-[0.15em] font-medium transition-all hover:bg-white/5"
          >
            <span>Me Contacter</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Hero;
