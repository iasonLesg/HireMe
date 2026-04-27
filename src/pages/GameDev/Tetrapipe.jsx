import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Tactile KeyCap Button with "Push" feedback
const KeyCap = ({ children, className, onClick }) => (
  <button 
    onClick={onClick}
    className={`border-2 border-c1 bg-white rounded-md flex items-center justify-center font-black text-c1 
    active:bg-c1 active:text-bg active:scale-95 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
    active:shadow-none active:translate-y-[2px] active:translate-x-[2px] cursor-pointer ${className}`}
  >
    {children}
  </button>
);

const Tetrapipe = () => {
  const [gameState, setGameState] = useState('standby'); // standby, prompt, loaded

  // Programmatic focus to ensure game receives inputs after button taps
  const focusGame = () => {
    const frame = document.getElementById('tetra-frame');
    if (frame) frame.focus();
  };

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
          Tetra<span className="font-light italic text-c2">pipe</span>
        </h1>
        <p className="text-c2 uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs font-bold leading-relaxed">
          Puzzle Engineering / Mechanics & Systems Development
        </p>
      </header>

      {/* Narrative Section */}
      <section className="mb-16 border-t border-c1 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-pressed mb-4">The Logic</h2>
            <p className="text-c1 font-medium leading-relaxed italic text-sm md:text-base">
              "Classic Tetris meets fluid dynamics. Rotate, place, and connect to keep the system flowing."
            </p>
          </div>
          <div className="md:col-span-2">
            <p className="text-lg md:text-xl leading-relaxed text-c1 font-light">
              Tetrapipe is a reimagining of the classic tile-matching puzzle genre. Instead of simple blocks, players manage a pressurized system of pipes.
            </p>
          </div>
        </div>
      </section>

      {/* --- DYNAMIC GAME SECTION --- */}
      <section className="mb-24 flex flex-col items-center">
        <div 
          className={`relative border-2 border-c1 bg-[#f5f5f5] transition-all duration-700 ease-in-out overflow-hidden flex flex-col
            ${gameState === 'loaded' ? 'w-full max-w-[600px]' : 'w-full max-w-[320px] h-[240px]'}`}
          style={gameState === 'loaded' ? { aspectRatio: '600 / 820' } : {}}
        >
          {/* Top Bar Status */}
          <div className="bg-c1 text-bg text-[9px] uppercase tracking-[0.2em] px-3 py-2 flex justify-between items-center w-full">
            <span>{gameState === 'loaded' ? 'Tetrapipe_Live' : 'System Standby'}</span>
            {gameState === 'loaded' && <span className="animate-pulse text-green-400 font-bold">● Active</span>}
          </div>

          <div className="flex-1 flex items-center justify-center relative bg-[#1a1a1a]">
            
            {/* STATE 1: STANDBY */}
            {gameState === 'standby' && (
              <button 
                onClick={() => setGameState('prompt')}
                className="group w-full h-full flex flex-col items-center justify-center p-6 hover:bg-c1 transition-all"
              >
                <div className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white group-hover:text-bg transition-colors">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-white group-hover:text-bg transition-colors">
                    Load Game
                  </span>
                </div>
              </button>
            )}

            {/* STATE 2: AUDIO PROMPT */}
            {gameState === 'prompt' && (
              <div className="flex flex-col items-center p-6 text-center animate-in zoom-in duration-300">
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/40 mb-4">Audio Configuration</p>
                <h3 className="text-white text-[11px] md:text-sm font-bold uppercase mb-8 tracking-widest leading-relaxed">
                  Experience includes <br/> music & sound effects
                </h3>
                <button 
                  onClick={() => setGameState('loaded')}
                  className="border border-white/20 px-8 py-3 text-[10px] text-white uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                >
                  Enter System
                </button>
                <p className="mt-6 text-[8px] text-white/30 uppercase italic">Initializing WebGL container...</p>
              </div>
            )}

            {/* STATE 3: LOADED */}
            {gameState === 'loaded' && (
              <iframe 
                id="tetra-frame"
                frameBorder="0" 
                src="https://itch.io/embed-upload/9279766?color=333333" 
                allowFullScreen
                width="100%" 
                height="100%"
                title="Tetrapipe"
                className="bg-black"
                allow="autoplay"
              />
            )}
          </div>
        </div>

        {/* INTERACTIVE INSTRUCTIONS / MOBILE BUTTONS */}
        {gameState === 'loaded' && (
          <div className="mt-12 flex flex-col sm:flex-row justify-between items-center w-full max-w-[600px] gap-10 px-2 animate-in slide-in-from-bottom-4 duration-1000">
             
             {/* Rotation Button */}
             <div className="flex flex-col items-center gap-4">
               <KeyCap 
                onClick={focusGame}
                className="w-36 md:w-44 h-14 text-[10px] md:text-xs uppercase tracking-[0.2em]"
               >
                 Space
               </KeyCap>
               <div className="text-center">
                 <span className="block text-[10px] font-bold uppercase tracking-widest text-c1">Rotation</span>
                 <span className="text-[9px] uppercase tracking-widest text-c2">Tap to turn pipe</span>
               </div>
             </div>

             {/* Navigation Buttons */}
             <div className="flex flex-col items-center gap-4">
               <div className="flex gap-4">
                 <KeyCap onClick={focusGame} className="w-16 h-16 text-2xl">←</KeyCap>
                 <KeyCap onClick={focusGame} className="w-16 h-16 text-2xl">→</KeyCap>
               </div>
               <div className="text-center">
                 <span className="block text-[10px] font-bold uppercase tracking-widest text-c1">Navigation</span>
                 <span className="text-[9px] uppercase tracking-widest text-c2">Move selection</span>
               </div>
             </div>

          </div>
        )}
      </section>

      {/* Technical Breakdown Footer */}
      <footer className="mt-20 pt-12 border-t border-c3">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
           <div className="max-w-md">
             <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 text-c1">Systems Engineering</h4>
             <p className="text-xs md:text-sm leading-relaxed text-c2">
               Developed core game loop and persistent save systems using C# and Unity. Built to leverage high-performance tile-matching logic and fluid dynamic metaphors.
             </p>
           </div>
           <a 
              href="https://moure.itch.io/tetrapipe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full md:w-auto px-10 py-4 border-2 border-c1 text-c1 text-[10px] uppercase tracking-[0.2em] font-black text-center hover:bg-c1 hover:text-bg transition-all"
            >
              Itch.io Project Page
            </a>
        </div>
      </footer>
    </main>
  );
};

export default Tetrapipe;