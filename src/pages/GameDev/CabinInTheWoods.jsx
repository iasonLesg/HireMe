import React from 'react';
import { Link } from 'react-router-dom';

const CabinInTheWoods = () => {
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
          Cabin in the <span className="font-light italic text-c2">Woods</span>
        </h1>
        <p className="text-c2 uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs font-bold leading-relaxed">
          Survival Horror / Atmosphere & Narrative Exploration
        </p>
      </header>

      {/* Game Hook Section */}
      <section className="mb-20 md:mb-24 border-t border-c1 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-pressed mb-4">The Narrative</h2>
            <p className="text-c1 font-medium leading-relaxed italic text-sm md:text-base">
              "A mysterious note, a missing friend, and a witch hidden within the vast silence of the forest."
            </p>
          </div>
          <div className="md:col-span-2">
            <p className="text-lg md:text-xl leading-relaxed text-c1 font-light">
              Developed as a survival-horror experience, <span className="font-bold">Cabin in the Woods</span> places the player in a vast, mysterious forest. What begins as a search for a friend quickly evolves into a tense encounter with the supernatural.
            </p>
          </div>
        </div>
      </section>

      {/* Technical & Gameplay Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 border-t border-c3 pt-12">
        
        {/* Gameplay Mechanics */}
        <section className="space-y-10 md:space-y-12">
          <div>
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-8">Atmospheric Survival</h3>
            <div className="border-l-2 border-c1 pl-5 md:pl-6 space-y-8">
              <div className="group">
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-c2 mb-1">Exploration</p>
                <p className="text-sm md:text-md font-medium">Navigate a dense, non-linear forest environment designed to evoke isolation and unease.</p>
              </div>
              <div className="group">
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-c2 mb-1">Horror Elements</p>
                <p className="text-sm md:text-md font-medium">Encounter psychological and survival-horror mechanics, including resource management and environmental storytelling.</p>
              </div>
            </div>
          </div>

          {/* Itch.io Call to Action */}
          <div className="p-6 md:p-8 bg-c1 text-bg">
            <h3 className="text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4 opacity-70">Version 0.7 Pre-Alpha</h3>
            <p className="text-base md:text-lg leading-snug font-medium mb-6">Experience the mystery on Itch.io</p>
            <a 
              href="https://nosasl.itch.io/cabin-in-the-woods" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block border border-white px-5 py-3 text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-c1 transition-all w-full md:w-auto text-center"
            >
              Go to Itch.io Page
            </a>
          </div>
        </section>

        {/* Development Details */}
        <section className="md:border-l md:border-c3 md:pl-16 space-y-10 md:space-y-12">
          <div>
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-8">Technical Foundation</h3>
            <div className="border-l-2 border-c2 pl-5 md:pl-6 space-y-8 md:space-y-10">
              <p className="text-base md:text-lg leading-relaxed text-c1 font-light">
                Built to support cross-platform play, ensuring a consistent atmospheric experience across Windows, macOS, and Linux.
              </p>
              
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="border border-c3 p-3 md:p-4">
                  <p className="text-[8px] md:text-[9px] uppercase tracking-widest text-pressed font-bold">Genre</p>
                  <p className="text-[10px] md:text-xs font-bold">Survival Horror</p>
                </div>
                <div className="border border-c3 p-3 md:p-4">
                  <p className="text-[8px] md:text-[9px] uppercase tracking-widest text-pressed font-bold">Status</p>
                  <p className="text-[10px] md:text-xs font-bold">Pre-Alpha 0.7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack Summary */}
          <div className="mt-8 md:mt-12">
             <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-c2 font-bold mb-6">Core Technologies</p>
             <div className="flex flex-wrap gap-2">
                {['C#', 'Environmental Design', 'Narrative Scripting', 'Multi-Platform Build'].map((tech) => (
                  <span key={tech} className="px-2 py-1 border border-c3 text-[9px] md:text-[10px] uppercase tracking-widest">{tech}</span>
                ))}
             </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default CabinInTheWoods;