import React from 'react';

const PremiereIcon = () => (
  <div className="w-12 h-12 rounded-xl bg-[#00005B] border-2 border-[#9999FF]/80 flex items-center justify-center text-[#9999FF] font-black text-xl tracking-tight shadow-[0_0_20px_rgba(153,153,255,0.25)] group-hover:scale-110 group-hover:border-[#9999FF] group-hover:shadow-[0_0_25px_rgba(153,153,255,0.45)] transition-all duration-300 shrink-0 select-none">
    Pr
  </div>
);

const AfterEffectsIcon = () => (
  <div className="w-12 h-12 rounded-xl bg-[#00005B] border-2 border-[#CF96FD]/80 flex items-center justify-center text-[#CF96FD] font-black text-xl tracking-tight shadow-[0_0_20px_rgba(207,150,253,0.25)] group-hover:scale-110 group-hover:border-[#CF96FD] group-hover:shadow-[0_0_25px_rgba(207,150,253,0.45)] transition-all duration-300 shrink-0 select-none">
    Ae
  </div>
);

const Skills = () => {
  const mainSoftwares = [
    { 
      name: "Adobe Premiere Pro", 
      icon: <PremiereIcon />,
      tag: "Édition Maîtresse", 
      desc: "Dérushage intensif, montages narratifs & multicam, synchronisation sonore, transitions fluides et exports multi-formats optimisés.",
      level: "95%",
      accentColor: "#9999FF"
    },
    { 
      name: "Adobe After Effects", 
      icon: <AfterEffectsIcon />,
      tag: "Motion & FX", 
      desc: "Animations vectorielles 2D/3D, titrage animé, compositing, incrustations, tracking de mouvement et vulgarisation graphique.",
      level: "90%",
      accentColor: "#CF96FD"
    },
  ];

  const expertises = [
    "Montage Rythmique & Storytelling",
    "Color Grading & Étalonnage Cinéma",
    "Sound Design & Mixage Audio",
    "Motion Design & Typographie Animée",
    "Formats Verticaux (Reels, TikTok, Shorts)",
    "Rétention d'Attention & Hook Visuel",
    "Organisation des Chutes & Gestion des Rushs",
    "Workflow Proxy & Optimisation Rendu"
  ];

  return (
    <section id="skills" className="py-28 bg-[#0D0F13] relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-20 reveal-init">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#E03A3A] font-bold inline-block mb-1">
            STACK TECHNIQUE
          </span>
          <h2 className="font-serif italic text-4xl sm:text-5xl text-white mt-1 font-normal">
            Outils & Maîtrise Technique
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-white/50 leading-relaxed font-light">
            Une expertise logicielle poussée pour délivrer des rendus professionnels répondant aux standards actuels de l'industrie.
          </p>
        </div>

        {/* Logiciels Phares */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {mainSoftwares.map((sw, index) => (
            <div 
              key={sw.name}
              style={{ transitionDelay: `${index * 150}ms` }}
              className="p-8 rounded-2xl bg-[#121419] border border-white/10 hover:border-white/30 transition-all duration-500 shadow-xl hover:-translate-y-2 hover:shadow-[0_10px_35px_-10px_rgba(0,0,0,0.5)] relative overflow-hidden group reveal-init"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#E03A3A] px-2.5 py-1 rounded bg-[#E03A3A]/10 border border-[#E03A3A]/20">
                  {sw.tag}
                </span>
                <span className="text-xs font-mono text-white/40 group-hover:text-white transition-colors">{sw.level}</span>
              </div>
              
              {/* Logo + Software Title */}
              <div className="flex items-center gap-4 mb-4">
                {sw.icon}
                <h3 className="font-serif italic text-3xl text-white group-hover:text-white/90 transition-colors">
                  {sw.name}
                </h3>
              </div>

              <p className="text-xs text-white/60 leading-relaxed font-light mb-6">
                {sw.desc}
              </p>
              
              {/* Animated Progress Line with Keyframe Diamond Marker */}
              <div className="relative w-full bg-white/5 h-1.5 rounded-full">
                <div 
                  className="h-full rounded-full transition-all duration-1000 group-hover:brightness-125 relative"
                  style={{ 
                    width: sw.level,
                    backgroundColor: sw.accentColor 
                  }}
                >
                  {/* After Effects Keyframe Diamond Marker */}
                  <span 
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2.5 h-2.5 rotate-45 border border-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                    style={{ backgroundColor: sw.accentColor }}
                    title="Keyframe Marker"
                  ></span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Domaines d'expertise pills with hover interaction */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#121419]/50 border border-white/5 reveal-init">
          <h4 className="text-xs uppercase tracking-[0.2em] text-white/60 font-semibold mb-6 text-center">
            COMPÉTENCES CLÉS EN PRODUCTION
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {expertises.map((item, idx) => (
              <span 
                key={idx}
                className="px-4 py-2 rounded-full bg-black/40 border border-white/10 text-xs text-white/80 font-light hover:border-[#E03A3A] hover:bg-[#E03A3A]/10 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
