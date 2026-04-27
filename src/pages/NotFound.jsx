import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Flat Minimalist KeyCap
const KeyCap = ({ children, className }) => (
  <div className={`border-2 border-c1 bg-white rounded-md flex items-center justify-center font-black text-c1 text-lg transition-colors ${className}`}>
    {children}
  </div>
);

const NotFound = () => {
  const [gameState, setGameState] = useState('standby'); // standby, prompt, loaded

  return (
    <main className="min-h-screen bg-bg flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="stripes-overlay opacity-10 absolute inset-0 pointer-events-none"></div>

      <div className="z-10 text-center flex flex-col items-center w-full max-w-4xl">
        
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-c1 leading-none uppercase">
            Oops <span className="font-light italic text-c2">Wrong Page</span>
          </h1>
          <p className="text-c2 uppercase tracking-[0.3em] text-[10px] mt-4">
            Error 404 // Backup Sub-Routine Initialized
          </p>
        </div>

        {/* The Game Console Interface */}
        <div className="w-full max-w-[600px] group">
          <div className="bg-c1 text-bg text-[9px] uppercase tracking-widest px-4 py-2 flex justify-between items-center border-x-2 border-t-2 border-c1">
            <span>Tetrapipe v1.0.0</span>
            <span className={gameState === 'loaded' ? "animate-pulse" : ""}>
              {gameState === 'loaded' ? "● Live Stream" : "○ Standby"}
            </span>
          </div>

          <div className="relative w-full border-2 border-c1 bg-black overflow-hidden flex flex-col" 
               style={{ aspectRatio: '600 / 820' }}>
            
            <div className="flex-1 flex items-center justify-center relative bg-[#1a1a1a]">
              
              {/* STATE 1: STANDBY */}
              {gameState === 'standby' && (
                <button 
                  onClick={() => setGameState('prompt')}
                  className="group w-full h-full flex flex-col items-center justify-center p-6 hover:bg-c1 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white group-hover:text-bg transition-colors">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    <span className="text-sm font-black uppercase tracking-[0.2em] text-white group-hover:text-bg transition-colors">
                      Initialize Backup Routine
                    </span>
                  </div>
                </button>
              )}

              {/* STATE 2: AUDIO PROMPT */}
              {gameState === 'prompt' && (
                <div className="flex flex-col items-center p-8 text-center animate-in zoom-in duration-300">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">Audio Configuration</p>
                  <h3 className="text-white text-sm font-bold uppercase mb-8 tracking-widest leading-relaxed">
                    Backup procedure includes <br/> music & sound effects
                  </h3>
                  <button 
                    onClick={() => setGameState('loaded')}
                    className="border border-white/20 px-8 py-3 text-[10px] text-white uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                  >
                    Enter System
                  </button>
                </div>
              )}

              {/* STATE 3: LOADED */}
              {gameState === 'loaded' && (
                <iframe 
                  frameBorder="0" 
                  src="https://itch.io/embed-upload/9279766?color=333333" 
                  allowFullScreen
                  width="100%" 
                  height="100%"
                  title="Tetrapipe"
                  className="bg-black"
                  allow="autoplay"
                >
                  <a href="https://moure.itch.io/tetrapipe">Play Tetrapipe on itch.io</a>
                </iframe>
              )}
            </div>
          </div>

          {/* Visual Controls */}
          <div className="mt-10 pt-6 border-t-2 border-dashed border-c3 flex flex-col md:flex-row justify-between items-center gap-8 px-2">
            <div className="flex items-center gap-4 flex-1">
              <KeyCap className="w-40 h-14 text-sm tracking-widest uppercase">Space</KeyCap>
              <div className="flex flex-col items-start text-left">
                <span className="text-[9px] uppercase tracking-widest text-c2">Rotation</span>
                <span className="text-sm font-black text-c1 uppercase">to Turn</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 flex-1 justify-end">
              <div className="flex flex-col items-end text-right">
                <span className="text-[9px] uppercase tracking-widest text-c2">Navigation</span>
                <span className="text-sm font-black text-c1 uppercase">to Move</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <KeyCap className="w-14 h-14">←</KeyCap>
                <KeyCap className="w-14 h-14">→</KeyCap>
              </div>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <Link to="/" className="mt-16 group flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-c2 mb-2 group-hover:text-c1 transition-colors">
            Finished your shift?
          </span>
          <span className="px-10 py-4 border-2 border-c1 text-c1 text-xs uppercase tracking-[0.4em] font-black hover:bg-c1 hover:text-bg transition-all">
            Return to Portfolio
          </span>
        </Link>
      </div>
    </main>
  );
};

export default NotFound;