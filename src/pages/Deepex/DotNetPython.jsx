import React from 'react';
import { Link } from 'react-router-dom';

const DotNetPython = () => {
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
          .NET <span className="font-light italic text-c2">EMBEDDED</span> PYTHON
        </h1>
        <p className="text-c2 uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs font-bold">
          Cross-Language Architecture & AI Orchestration
        </p>
      </header>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 border-t border-c1 pt-12">
        
        {/* The Integration Section */}
        <section className="space-y-10 md:space-y-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-6">Embedded Environment</h2>
            <div className="border-l-2 border-c1 pl-6">
              <p className="text-base md:text-lg leading-relaxed text-c1 font-light">
                Integrated a fully <span className="font-bold">embedded Python environment</span> directly within .NET applications. This architecture allows the execution of complex Python scripts without requiring a global system installation of Python on the client machine.
              </p>
            </div>
          </div>

          <div className="p-6 md:p-8 bg-c1 text-bg">
            <h3 className="text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4 opacity-70">Strategic Advantage</h3>
            <p className="text-lg md:text-xl leading-snug font-medium italic">
              "Zero-Installation AI deployment for enterprise .NET ecosystems."
            </p>
          </div>
        </section>

        {/* The Ecosystem Section */}
        <section className="md:border-l md:border-c3 md:pl-16 space-y-10 md:space-y-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-6">Library Synergy</h2>
            <div className="border-l-2 border-c2 pl-6">
              <p className="text-base md:text-lg leading-relaxed text-c1 font-light">
                Enabled the application to leverage high-performance AI libraries such as <span className="font-bold">Keras, TensorFlow, and NumPy</span>. 
              </p>
              <p className="text-sm md:text-md leading-relaxed text-c2 mt-4 font-light">
                By managing packages within the .NET project structure, the application maintains a self-contained footprint while accessing the full depth of the Python scientific stack.
              </p>
            </div>
          </div>

          {/* Grid optimized for mobile (2 columns) */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div className="border border-c3 p-3 md:p-4">
              <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-c2 mb-2">Framework</p>
              <p className="text-xs md:text-sm font-bold">.NET Visual Basic</p>
            </div>
            <div className="border border-c3 p-3 md:p-4">
              <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-c2 mb-2">Interpreter</p>
              <p className="text-xs md:text-sm font-bold">Embedded CPython</p>
            </div>
            <div className="border border-c3 p-3 md:p-4">
              <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-c2 mb-2">AI Backend</p>
              <p className="text-xs md:text-sm font-bold">Keras / Scikit</p>
            </div>
            <div className="border border-c3 p-3 md:p-4">
              <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-c2 mb-2">Deployment</p>
              <p className="text-xs md:text-sm font-bold">Portable Runtime</p>
            </div>
          </div>
        </section>
      </div>

      {/* Technical Deep Dive Footer */}
      <footer className="mt-20 md:mt-24 pt-12 border-t border-c3">
        <div className="max-w-2xl">
            <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4 text-c1">The Implementation</h4>
            <p className="text-xs md:text-sm leading-relaxed text-c2">
              Leveraging dynamic link libraries and automated package resolution to ensure that Python-based AI functions execute with the same native performance and reliability expected from the .NET host environment.
            </p>
        </div>
      </footer>
    </main>
  );
};

export default DotNetPython;