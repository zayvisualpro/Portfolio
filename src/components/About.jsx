import React from 'react';

const About = () => {
  const experiences = [
    {
      role: "Montage & Post-Production Indépendante",
      period: "Depuis 2025",
      desc: "Conception et montage de formats variés : vidéos longues dynamiques, shorts/reels à forte rétention et animations motion design."
    },
    {
      role: "Collaboration Vidéastes & Créateurs",
      period: "Continu",
      desc: "Accompagnement créatif sur YouTube : dérushage, rythme narratif, sound design immersif et habillage graphique."
    },
    {
      role: "Perfectionnement Technique & Post-Prod",
      period: "En cours",
      desc: "Approfondissement continu des techniques de montage avancé, gestion de projets complexes et étalonnage cinéma."
    }
  ];

  return (
    <section id="about" className="py-28 bg-[#0B0C0E] relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Visual Column / Studio Visual */}
          <div className="lg:col-span-5 relative reveal-init">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/5] shadow-2xl bg-[#131519] group hover:border-[#E03A3A]/40 transition-all duration-500">
              <img 
                src="/thumbnails/video1.jpg" 
                alt="Studio de montage Zay" 
                className="w-full h-full object-cover grayscale contrast-125 opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Text & Philosophy Column */}
          <div className="lg:col-span-7 reveal-init" style={{ transitionDelay: '150ms' }}>
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#E03A3A] font-bold inline-block mb-1">
              VISION & DÉMARCHE
            </span>
            <h2 className="font-serif italic text-4xl sm:text-5xl text-white mt-1 mb-6 font-normal leading-tight">
              Zay <span className="text-white/40 text-3xl not-italic">— Monteur & Motion Designer</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-white/70 font-light leading-relaxed mb-10">
              <p>
                Pour moi, le montage ne se résume pas à assembler des plans : c'est l'étape où le récit prend vie. Chaque coupe, chaque transition et chaque nuance sonore ont pour but de susciter une émotion et de maintenir l'attention du spectateur de la première à la dernière seconde.
              </p>
              <p>
                Spécialisé dans le montage dynamique et le full motion design, j'accompagne créateurs et marques pour donner à leurs vidéos une identité visuelle forte, professionnelle et mémorable.
              </p>
            </div>

            {/* Expériences & Savoir-faire */}
            <div className="space-y-6 pt-6 border-t border-white/10">
              <h3 className="text-xs uppercase tracking-[0.2em] text-white/50 font-semibold">
                EXPÉRIENCE & COLLABORATIONS
              </h3>
              
              <div className="space-y-6">
                {experiences.map((item, idx) => (
                  <div key={idx} className="relative pl-6 border-l border-white/10 group hover:border-[#E03A3A] transition-colors">
                    <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-white/30 group-hover:bg-[#E03A3A] group-hover:scale-125 transition-all"></span>
                    <div className="flex items-baseline justify-between gap-4 mb-1">
                      <h4 className="font-serif italic text-xl text-white group-hover:text-white/90">
                        {item.role}
                      </h4>
                      <span className="text-[11px] font-mono text-[#E03A3A] shrink-0 font-medium">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-xs text-white/60 leading-relaxed font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to action direct */}
            <div className="mt-10 pt-6 border-t border-white/10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-black hover:bg-[#E03A3A] hover:text-white px-7 py-3 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:scale-105 shadow-md group"
              >
                <span>Discuter d'un projet</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
