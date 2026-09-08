import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Preloader from './components/Preloader';
import TimelineScrubber from './components/TimelineScrubber';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  const [introFinished, setIntroFinished] = useState(false);

  // Initialize intersection observer for smooth scroll reveals
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[#0B0C0E] text-[#EDEDED] font-sans antialiased relative selection:bg-[#E03A3A] selection:text-white overflow-x-hidden">
      {/* Interactive Video Editing Timeline Scrubber (Top of screen) */}
      <TimelineScrubber />

      {/* Cinematic Film Opening Preloader */}
      <Preloader onFinish={() => setIntroFinished(true)} />

      {/* 35mm Analog Film Grain Overlay */}
      <div className="film-grain" aria-hidden="true"></div>

      <Navbar />
      
      <main className={`transition-opacity duration-1000 ${introFinished ? 'opacity-100' : 'opacity-90'}`}>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      
      {/* Editorial Footer */}
      <footer className="py-12 border-t border-white/5 bg-[#0B0C0E] text-center text-xs text-white/40 tracking-wider">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs tracking-[0.25em] font-bold text-white/90 uppercase">
            ZAY
          </div>
          <p className="font-light">
            © {new Date().getFullYear()} Antony Raimbault (Zay) — Tous droits réservés. Portfolio Montage Vidéo & Motion Design.
          </p>
          <a href="#home" className="text-white/60 hover:text-white uppercase tracking-widest text-[11px] transition-colors">
            Haut de page ↑
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
