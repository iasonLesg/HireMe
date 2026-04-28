import React from 'react';
import { Link } from 'react-router-dom';

const MedicalAssistant = () => {
  return (
    <main className="px-6 md:px-8 pt-20 md:pt-32 pb-20 animate-in fade-in duration-700 max-w-6xl mx-auto">
      {/* Navigation */}
      <Link 
        to="/Projects" 
        className="text-xs uppercase tracking-widest text-c2 hover:text-c1 mb-12 block transition-colors w-fit"
      >
        ← Return to Projects
      </Link>

      {/* Header */}
      <header className="mb-16 md:mb-20">
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tighter text-c1 mb-4 leading-tight md:leading-none uppercase break-words">
          Medical <span className="font-light italic text-c2">Assistant</span>
        </h1>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <p className="text-c2 uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs font-bold leading-relaxed">
            Local-First Patient Management & Secure Data Encryption
          </p>
          <a 
            href="https://github.com/iasonLesg/MedicalAssistant" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[10px] uppercase tracking-widest text-c1 border-b border-c1 pb-1 hover:opacity-70 transition-opacity w-fit"
          >
            View Repository ↗
          </a>
        </div>
      </header>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 border-t border-c1 pt-12">
        
        {/* Security & Storage Section */}
        <section className="space-y-8 md:space-y-10">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-c1 text-bg px-3 py-1 text-[10px] font-bold shrink-0">v1.0</span>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-tight">Privacy-Centric Core</h2>
            </div>
            <div className="border-l-2 border-c1 pl-5 md:pl-6">
              <p className="text-base md:text-lg leading-relaxed text-c1 font-light mb-8">
                Designed as a <span className="font-bold text-c1">zero-cloud utility</span>, ensuring all sensitive patient records remain exclusively on the user's physical hardware.
              </p>
              <div className="p-6 md:p-8 bg-c1 text-bg overflow-hidden">
                <p className="text-[10px] font-bold uppercase tracking-widest mb-3 text-pressed opacity-80">Security Protocol</p>
                <p className="text-sm md:text-base uppercase tracking-widest leading-relaxed text-pressed break-words">
                  Patient data is <span className="font-bold">Fully Encrypted</span> using a master password. No recovery mechanisms exist, prioritizing absolute data sovereignty.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="md:border-l md:border-c3 md:pl-16 space-y-8 md:space-y-10">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-c3 text-c1 px-3 py-1 text-[10px] font-bold shrink-0">UX</span>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-tight">Clinical Workflow</h2>
            </div>
            <div className="border-l-2 border-c2 pl-5 md:pl-6">
              <p className="text-base md:text-lg leading-relaxed text-c1 font-light">
                Streamlined interface for <span className="font-bold italic">visitation tracking</span> and diagnostic note-taking.
              </p>
              <ul className="text-sm md:text-md leading-relaxed text-c2 mt-6 font-light space-y-2 uppercase tracking-wide">
                <li>• 30+ Language Localizations</li>
                <li>• Local JSON Database Management</li>
                <li>• Medication & Diagnosis Logs</li>
                <li>• Automated Schedule Overview</li>
              </ul>
            </div>
          </div>

          {/* Setup / Technical Note */}
          <div className="relative h-32 md:h-48 w-full border border-c3 overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,var(--color-c1)_1px,transparent_1px)] [background-size:20px_20px]"></div>
            <div className="text-center px-4 z-10">
               <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] text-c2 italic mb-3">
                Source Distribution
              </p>
              <a 
                href="https://github.com/iasonLesg/MedicalAssistant" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[10px] md:text-xs text-c1 font-mono bg-bg px-4 py-2 border border-c1 hover:bg-c1 hover:text-bg transition-all inline-block"
              >
                github.com/iasonLesg/MedicalAssistant
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Bottom Summary */}
      <footer className="mt-20 md:mt-24 pt-12 border-t border-c3">
        <div className="max-w-2xl">
          <p className="text-[10px] md:text-sm leading-relaxed text-c2 uppercase tracking-widest font-bold mb-6">Development Stack & License</p>
          <div className="flex flex-wrap gap-3 md:gap-4">
            <span className="text-[9px] md:text-[10px] border border-c1 px-3 py-2 uppercase font-medium">Local-First Storage</span>
            <span className="text-[9px] md:text-[10px] border border-c1 px-3 py-2 uppercase font-medium">AES Encryption</span>
            <span className="text-[9px] md:text-[10px] border border-c1 px-3 py-2 uppercase font-medium">i18next Multilingual</span>
            <span className="text-[9px] md:text-[10px] border border-c1 px-3 py-2 uppercase font-medium">MIT License</span>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default MedicalAssistant;