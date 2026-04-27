import React from 'react';
import { Link } from 'react-router-dom';

const BoringLogs = () => {
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
          Soil <span className="font-light italic text-c2">Profiling</span>
        </h1>
        <p className="text-c2 uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs font-bold leading-relaxed">
          Geotechnical Visualization & Mathematical Modeling
        </p>
      </header>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 border-t border-c1 pt-12">
        
        {/* 3D Interpolation Section */}
        <section className="space-y-8 md:space-y-10">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-c1 text-bg px-3 py-1 text-[10px] font-bold shrink-0">2024</span>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-tight">3D Profile Generation</h2>
            </div>
            <div className="border-l-2 border-c1 pl-5 md:pl-6">
              <p className="text-base md:text-lg leading-relaxed text-c1 font-light mb-8">
                Developed a sophisticated <span className="font-bold text-c1">3D soil profile generation module</span> based on complex boring log data.
              </p>
              <div className="p-6 md:p-8 bg-c1 text-bg overflow-hidden">
                <p className="text-[10px] font-bold uppercase tracking-widest mb-3 text-pressed opacity-80">Methodology</p>
                <p className="text-sm md:text-base uppercase tracking-widest leading-relaxed text-pressed break-words">
                  Utilized <span className="font-bold">Bicubic Interpolation-Extrapolation</span> methods to synthesize sparse data points into a continuous 3D model.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2D Automated Section */}
        <section className="md:border-l md:border-c3 md:pl-16 space-y-8 md:space-y-10">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-c3 text-c1 px-3 py-1 text-[10px] font-bold shrink-0">2021</span>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-tight">Automated 2D Profiling</h2>
            </div>
            <div className="border-l-2 border-c2 pl-5 md:pl-6">
              <p className="text-base md:text-lg leading-relaxed text-c1 font-light">
                Engineered a suite of functions to <span className="font-bold italic">automatically generate 2D soil profiles</span>.
              </p>
              <p className="text-sm md:text-md leading-relaxed text-c2 mt-6 font-light">
                This module translates raw boring log data into standardized geological cross-sections, significantly reducing the manual drafting time for geotechnical engineers.
              </p>
            </div>
          </div>

          {/* Abstract Data Visualizer Placeholder */}
          <div className="relative h-32 md:h-48 w-full border border-c3 overflow-hidden opacity-50 flex items-center justify-center">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,var(--color-c1)_1px,transparent_1px)] [background-size:20px_20px]"></div>
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] text-c2 italic text-center px-4">
              Cross-Sectional Algorithm v2.1
            </p>
          </div>
        </section>
      </div>

      {/* Bottom Summary */}
      <footer className="mt-20 md:mt-24 pt-12 border-t border-c3">
        <div className="max-w-2xl">
          <p className="text-[10px] md:text-sm leading-relaxed text-c2 uppercase tracking-widest font-bold mb-6">Core Competencies Applied</p>
          <div className="flex flex-wrap gap-3 md:gap-4">
            <span className="text-[9px] md:text-[10px] border border-c1 px-3 py-2 uppercase font-medium">Coordinate Geometry</span>
            <span className="text-[9px] md:text-[10px] border border-c1 px-3 py-2 uppercase font-medium">Bicubic Splines</span>
            <span className="text-[9px] md:text-[10px] border border-c1 px-3 py-2 uppercase font-medium">Data Extrapolation</span>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default BoringLogs;