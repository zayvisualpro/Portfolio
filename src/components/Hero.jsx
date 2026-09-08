import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isRec, setIsRec] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    // Smoothly toggle between PORTFOLIO and REC every 3.2 seconds
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
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#0B0C0E] py-24"
    >
      {/* Background Image with Cursor-driven Parallax & Subtle Zoom */}
      <div 
        className="absolute inset-[-40px] pointer-events-none overflow-hidden transition-transform duration-200 ease-out will-change-transform z-0"
        style={{ 
          transform: `translate3d(${parallaxX}px, ${parallaxY}px, 0) scale(1.06)`
        }}
      >
        <img 
          src="/hero-bg.jpg" 
          alt="Cinematic Urban Background" 
          className="w-full h-full object-cover object-center opacity-65 filter brightness-90 contrast-105"
        />
        {/* Gradients to darken edges and guarantee text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-[#0B0C0E]/40 to-[#0B0C0E]/70"></div>
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, transparent 35%, rgba(11, 12, 14, 0.7) 100%)'
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
      <div className="h-16"></div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 text-center my-auto py-12 relative z-10">
        
        {/* Pill Badge with Smooth Morphing PORTFOLIO / ● REC Animation */}
        <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] sm:text-[12px] text-white/90 mb-8 shadow-2xl hover:border-[#E03A3A]/40 transition-all duration-300 select-none">
          
          {/* Morphing In-place Pill */}
          <div className="bg-[#E03A3A] text-white font-bold text-[10px] uppercase py-1 px-3 rounded-full tracking-wider flex items-center justify-center transition-all duration-500 min-w-[76px] h-6 shadow-[0_0_12px_rgba(224,58,58,0.35)]">
            <div className="relative flex items-center justify-center w-full">
              {/* State 1: PORTFOLIO */}
              <span 
                className={`transition-all duration-500 absolute whitespace-nowrap ${
                  isRec ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'
                }`}
              >
                PORTFOLIO
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

          <span className="font-light tracking-wide text-white/85">
            Monteur Vidéo & Motion Designer — Disponible pour projets
          </span>
        </div>

        {/* Headline with Cormorant Garamond Serif Italic */}
        <h1 className="font-serif italic font-normal text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white leading-[1.08] mb-6">
          Sublimer Vos Récits <br />
          <span className="neon-broken not-italic font-serif italic cursor-default select-none">
            À Travers Chaque Frame
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/75 font-light leading-relaxed tracking-wide mb-10">
          <strong>Zay</strong> — Monteur Vidéo & Motion Designer. Direction de rythme, découpage chirurgical, colorimétrie cinématographique et storytelling immersif pour sublimer chaque projet.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-[#E03A3A] hover:border-[#E03A3A] backdrop-blur-md text-white border border-white/25 px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 hover:scale-105 shadow-xl group"
          >
            <span>Explorer les Projets</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>

          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 text-white/90 hover:text-white px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.15em] font-medium transition-all group hover:bg-white/5"
          >
            <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 group-hover:bg-[#E03A3A] group-hover:text-white transition-all shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="6 3 20 12 6 21 6 3"></polygon>
              </svg>
            </span>
            <span>Voir Mes Vidéos</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
