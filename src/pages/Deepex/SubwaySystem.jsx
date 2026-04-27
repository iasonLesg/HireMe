import React from 'react';
import { Link } from 'react-router-dom';

const SubwaySystem = () => {
  return (
    <main className="px-6 md:px-8 pt-20 md:pt-32 pb-20 animate-in fade-in duration-700 max-w-6xl mx-auto">
      {/* Navigation */}
      <Link 
        to="/projects" 
        className="nav-link text-xs uppercase tracking-widest text-c2 mb-12 block w-fit"
      >
        ← Back to Projects
      </Link>

      {/* Header */}
      <header className="mb-16 md:mb-20">
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tighter text-c1 mb-4 leading-tight md:leading-none uppercase break-words">
          Subway <span className="font-light italic text-c2">Systems</span>
        </h1>
        <p className="text-c2 uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs font-bold leading-relaxed">
          Geospatial Optimization & Urban Infrastructure Logic
        </p>
      </header>

      {/* Section 1: GIS & 2D Alignment */}
      <section className="mb-20 md:mb-24 border-t border-c1 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-pressed mb-4">Spatial Synthesis</h2>
            <p className="text-c1 font-medium leading-relaxed italic text-sm md:text-base">
              "Mapping digital structural data onto real-world geographic coordinates with high-fidelity accuracy."
            </p>
          </div>
          <div className="md:col-span-2">
            <p className="text-lg md:text-xl leading-relaxed text-c1 font-light mb-8">
              Engineered a specialized environment for **Subway Alignment Generation**, bridging the gap between CAD-based engineering and real-time geospatial routing systems.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              <div className="border-l-2 border-c3 pl-5 md:pl-6">
                <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2">Automated Routing</h4>
                <p className="text-xs md:text-sm text-c2">Programmatically generating optimal pathing data derived from building-specific metadata within the project scope.</p>
              </div>
              <div className="border-l-2 border-c3 pl-5 md:pl-6">
                <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2">Alignment Assessment</h4>
                <p className="text-xs md:text-sm text-c2">Strategic path tracing under existing road networks to minimize property impact and optimize urban site plans.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Mathematical Constraints */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 border-t border-c3 pt-12">
        
        {/* Physics & Economy */}
        <section className="space-y-10 md:space-y-12">
          <div>
            <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.3em] text-pressed uppercase mb-8">Heuristic Constraints</h3>
            
            <div className="space-y-10">
              <div className="group">
                <h4 className="text-lg md:text-xl font-bold text-c1 mb-2 uppercase tracking-tighter">Min Turn Radius Dynamics</h4>
                <p className="text-sm md:text-md text-c2 font-light leading-relaxed">
                  Implemented dynamic calculus to determine minimum turn radii, ensuring alignments are structurally viable for specific rolling stock dimensions.
                </p>
              </div>

              <div className="group">
                <h4 className="text-lg md:text-xl font-bold text-c1 mb-2 uppercase tracking-tighter">Volume-Cost Optimization</h4>
                <p className="text-sm md:text-md text-c2 font-light leading-relaxed">
                  Developed "Shortest Excavation" logic—a greedy algorithm designed to find the most economical route based on soil displacement volume.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Station Placement Logic */}
        <section className="md:border-l md:border-c3 md:pl-16">
          <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.3em] text-c1 uppercase mb-8">Station Placement Intelligence</h3>
          <div className="bg-c1 p-6 md:p-8 text-bg">
            <p className="text-xs font-bold uppercase tracking-widest mb-4 opacity-70 italic underline decoration-teal-pressed underline-offset-8">Demand-Centric Logic</p>
            <p className="text-base md:text-lg leading-relaxed font-light mb-6">
              Primary station nodes are identified through a custom **Weighted Population Reach** heuristic:
            </p>
            
            <div className="font-mono text-[10px] md:text-[11px] bg-white/10 p-4 border border-white/20 leading-loose overflow-x-auto whitespace-nowrap">
                Location Score = Avg( (Density × Volume) / Distance )
            </div>
            
            <p className="text-[10px] text-teal-c2 mt-6 uppercase tracking-widest leading-relaxed">
              Synthesized for maximum urban utility vs. operational transit efficiency.
            </p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="mt-20 md:mt-32 pt-8 md:pt-12 border-t border-c3">
        <p className="text-c2 text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em] leading-relaxed">
          Subway Systems Module / C# .NET / Google Maps API
        </p>
      </footer>
    </main>
  );
};

export default SubwaySystem;