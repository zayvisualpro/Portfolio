import React, { useState } from 'react';

const projectsData = [
  {
    id: 1,
    code: "REEL_01",
    fps: "24 FPS",
    title: "JE SUIS MONTEUR ! 📷",
    category: "Vidéo Portrait / Présentation",
    description: "Vidéo personnelle de présentation percutante mettant en valeur mon style de montage, mon univers créatif et ma signature visuelle.",
    role: "Direction créative, Montage, Étalonnage",
    youtubeId: "a_G3Hx99Kwk",
    thumbnail: `${import.meta.env.BASE_URL}thumbnails/video1.jpg`,
    isShort: false,
    tag: "Présentation"
  },
  {
    id: 2,
    code: "MOTION_02",
    fps: "60 FPS",
    title: "Pourquoi nous ne vivrons jamais sur Mars ?",
    category: "Full Motion Design / Vulgarisation",
    description: "Short immersif et éducatif conçu entièrement en motion design, rythmé avec des animations vectorielles précises et du sound design spatial.",
    role: "After Effects, Motion 2D/3D, Sound FX",
    youtubeId: "8hfBgBFFDIg",
    thumbnail: `${import.meta.env.BASE_URL}thumbnails/video2.jpg`,
    isShort: true,
    tag: "Motion Design"
  },
  {
    id: 3,
    code: "SHORT_03",
    fps: "30 FPS",
    title: "E-Commerce & Stratégie d'Acquisition",
    category: "Format Vertical Business",
    description: "Montage publicitaire ultra-rythmé axé sur la rétention d'audience, intégrant titrages dynamiques, zooms et structure de conversion.",
    role: "Montage rétention, Sous-titrage, Rythme",
    youtubeId: "a5WcmkAlVe0",
    thumbnail: `${import.meta.env.BASE_URL}thumbnails/video3.jpg`,
    isShort: true,
    tag: "Shorts"
  },
  {
    id: 4,
    code: "STREAM_04",
    fps: "60 FPS",
    title: "L'ÉVOLUTION de mon JEU INDÉ ! (Best-Of)",
    category: "Gaming & Divertissement",
    description: "Best-of de stream dynamique avec montage humoristique, découpage rapide, animations et sound design pour une immersion totale.",
    role: "Dérushage, Montage Best-Of, Sound Design",
    youtubeId: "s2YAkoRdJjY",
    thumbnail: `${import.meta.env.BASE_URL}thumbnails/video4.jpg`,
    isShort: false,
    tag: "Gaming"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('Tous');
  const [activeVideo, setActiveVideo] = useState(null);

  const categories = ['Tous', 'Présentation', 'Motion Design', 'Shorts', 'Gaming'];

  const filteredProjects = filter === 'Tous' 
    ? projectsData 
    : projectsData.filter(p => p.tag === filter);

  return (
    <section id="projects" className="py-28 bg-[#0D0F13] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header with Serif Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal-init">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#E03A3A] font-bold inline-block mb-1">
              PORTFOLIO SÉLECTIONNÉ
            </span>
            <h2 className="font-serif italic text-4xl sm:text-6xl text-white mt-1 font-normal">
              Histoires & Réalisations
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-white/50 leading-relaxed font-light">
            Une sélection de projets reflétant la maîtrise du rythme, de l'animation graphique et de la colorimétrie cinématographique.
          </p>
        </div>

        {/* Categories Bar with smooth transitions */}
        <div className="flex flex-wrap gap-2.5 mb-14 border-b border-white/10 pb-6 reveal-init">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setActiveVideo(null);
              }}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider transition-all duration-300 transform active:scale-95 ${
                filter === cat 
                  ? 'bg-white text-black font-semibold shadow-lg shadow-white/10 scale-105' 
                  : 'text-white/50 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredProjects.map((project, index) => (
            <div 
              key={`${filter}-${project.id}`} 
              style={{ animationDelay: `${index * 80}ms` }}
              className="group bg-[#121419] rounded-2xl overflow-hidden border border-white/10 hover:border-[#E03A3A]/40 transition-all duration-500 shadow-2xl hover:shadow-[0_10px_35px_-10px_rgba(224,58,58,0.2)] hover:-translate-y-2 flex flex-col justify-between animate-card-appear"
            >
              <div>
                {/* Media Container with film framing */}
                <div className="relative aspect-video bg-black overflow-hidden">
                  {activeVideo === project.id ? (
                    <iframe 
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1`} 
                      title={project.title}
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div 
                      onClick={() => setActiveVideo(project.id)}
                      className="relative w-full h-full cursor-pointer overflow-hidden group/thumb"
                    >
                      <img 
                        src={project.thumbnail} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform duration-700 ease-out" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent group-hover/thumb:opacity-60 transition-opacity duration-300"></div>
                      
                      {/* Camera Viewfinder Corner Brackets & Center Focus Mark */}
                      <div className="absolute inset-4 pointer-events-none opacity-30 group-hover/thumb:opacity-85 transition-opacity duration-300">
                        <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-1.5 border-l-1.5 border-white/80"></div>
                        <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-1.5 border-r-1.5 border-white/80"></div>
                        <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-1.5 border-l-1.5 border-white/80"></div>
                        <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-1.5 border-r-1.5 border-white/80"></div>
                        
                        {/* Target Crosshair */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center opacity-0 group-hover/thumb:opacity-50 transition-opacity duration-300">
                          <div className="w-full h-[1px] bg-white"></div>
                          <div className="h-full w-[1px] bg-white absolute"></div>
                        </div>
                      </div>

                      {/* Film Meta Tags */}
                      <div className="absolute top-4 left-4 flex items-center gap-2 text-[10px] tracking-widest uppercase font-mono text-white/70 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                        <span>{project.code}</span>
                        <span>•</span>
                        <span>{project.fps}</span>
                      </div>

                      <div className="absolute top-4 right-4">
                        <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded bg-[#E03A3A]/90 text-white shadow-lg">
                          {project.isShort ? '9:16 Short' : '16:9'}
                        </span>
                      </div>

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/95 text-black flex items-center justify-center backdrop-blur-md group-hover/thumb:scale-125 group-hover/thumb:bg-[#E03A3A] group-hover/thumb:text-white transition-all duration-300 shadow-2xl">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="6 3 20 12 6 21 6 3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="p-7">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-[#E03A3A] font-medium mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E03A3A]"></span>
                    <span>{project.category}</span>
                  </div>
                  <h3 className="font-serif italic text-2xl text-white mb-3 group-hover:text-white/90 group-hover:translate-x-1 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-xs leading-relaxed font-light mb-5">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Footer info */}
              <div className="px-7 py-4 border-t border-white/5 flex items-center justify-between text-xs text-white/40 bg-black/20 group-hover:bg-black/30 transition-colors">
                <span className="font-light tracking-wide">{project.role}</span>
                <a 
                  href={project.isShort ? `https://www.youtube.com/shorts/${project.youtubeId}` : `https://www.youtube.com/watch?v=${project.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1 font-medium group/link"
                >
                  <span className="group-hover/link:underline">Visionner</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* YouTube Channel Banner link */}
        <div className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left reveal-init">
          <div>
            <h4 className="font-serif italic text-2xl text-white mb-1">Explorer Davantage de Créations</h4>
            <p className="text-xs text-white/50">Retrouvez la playlist complète et mes autres réalisations sur YouTube.</p>
          </div>
          <a
            href="https://www.youtube.com/playlist?list=PL6zcl_V6SX6pAC6WW5jwMEbRu0CLiV6nD"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black hover:bg-[#E03A3A] hover:text-white px-7 py-3 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:scale-105 shadow-md group"
          >
            <span>Ouvrir la Playlist</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
