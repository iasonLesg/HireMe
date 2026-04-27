import React from 'react';
import { Link } from 'react-router-dom';

const EnterprisePortal = () => {
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
          Enterprise <span className="font-light italic text-c2">Portal</span>
        </h1>
        <p className="text-c2 uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs font-bold leading-relaxed">
          Full-Stack Development / Internal Systems / Security Architecture
        </p>
      </header>

      {/* The Narrative Section */}
      <section className="mb-20 md:mb-24 border-t border-c1 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-pressed mb-4">The Work</h2>
            <p className="text-c1 font-medium leading-relaxed italic text-sm md:text-base">
              "Maintaining a stable user-facing environment while centralizing business logic and background operations through parallel services."
            </p>
          </div>
          <div className="md:col-span-2">
            <p className="text-lg md:text-xl leading-relaxed text-c1 font-light">
              I drive the full-stack development of our enterprise portal, overseeing the end-to-end 
              lifecycle of core service operations. My work bridges specialized **Microservices** with the main platform to manage rigorous **user validation**, automated **demo and 
              license distribution**, and complex data processing for real-time 
              **business metrics**.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 border-t border-c3 pt-12">
        
        {/* Left Column: Security & Development */}
        <section className="space-y-12 md:space-y-16">
          <div>
            <h3 className="text-2xl md:text-2xl font-black uppercase tracking-tighter mb-8 text-c1">System Security</h3>
            <div className="border-l-4 border-c1 pl-5 md:pl-6 space-y-6">
              <p className="text-sm md:text-md leading-relaxed text-c1">
                Refactored the authentication framework to enforce stricter enterprise-level access controls across the platform.
              </p>
              <ul className="space-y-4 text-[10px] md:text-[11px] text-c2 uppercase tracking-widest font-bold">
                <li className="flex items-start gap-2"><span>/</span> Mandated Email Verification protocols</li>
                <li className="flex items-start gap-2"><span>/</span> IP-based security filtering</li>
                <li className="flex items-start gap-2"><span>/</span> Automated SSL lifecycle management</li>
              </ul>
            </div>
          </div>

          {/* Development Stack Box */}
          <div className="bg-c3/5 p-6 md:p-8 border border-c1/20">
            <h3 className="text-base md:text-lg font-black uppercase tracking-widest mb-4">Vertical Stack Ownership</h3>
            <p className="text-xs md:text-sm leading-relaxed mb-6 font-normal text-c2">
              Maintaining the full vertical lifecycle—from database schema to the frontend user experience.
            </p>
            <div className="space-y-6 border-t border-c3 pt-6">
              <div>
                <p className="text-[9px] md:text-[10px] font-bold text-pressed uppercase mb-1">Data Layer</p>
                <p className="text-xs md:text-sm font-medium">Microsoft SQL Server / Management</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[9px] md:text-[10px] font-bold text-pressed uppercase mb-1">Backend</p>
                  <p className="text-xs md:text-sm font-medium">C# / .NET / Web API</p>
                </div>
                <div>
                  <p className="text-[9px] md:text-[10px] font-bold text-pressed uppercase mb-1">Frontend</p>
                  <p className="text-xs md:text-sm font-medium">JS / Razor</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Right Column: Intelligence & Infrastructure */}
        <section className="md:border-l md:border-c3 md:pl-16 space-y-12">
          
          <div>
            <h3 className="text-2xl md:text-2xl font-black uppercase tracking-tighter mb-8 text-pressed">Background Operations</h3>
            <div className="border-l-2 border-c2 pl-5 md:pl-6 space-y-8">
              <p className="text-sm md:text-md leading-relaxed text-c1">
                Utilized **Microservices** to decouple operations from the frontend, centralizing notifications and syncing with **Wix/Pipedrive**.
              </p>
              <div className="p-4 border border-c3">
                 <p className="text-[10px] font-bold uppercase tracking-widest text-c2 mb-1">Data Schema</p>
                 <p className="text-xs md:text-sm">Maintained MS SQL Server backups and schema updates for system-wide continuity.</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-c3">
            <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-pressed mb-4">Infrastructure</h3>
            <p className="text-xs md:text-sm leading-relaxed text-c2">
              Supervised physical server migration and ongoing administration of **WHM/cPanel**, DNS, and routing management.
            </p>
          </div>

          {/* Technical Stack Tags */}
          <div className="mt-12 flex flex-wrap gap-2">
            {['C#', 'MSSQL', '.NET', 'Microservices', 'Automation', 'IP Security', 'Migration', 'JavaScript'].map((tech) => (
              <span key={tech} className="px-2 py-1 border border-c3 text-[9px] font-bold uppercase tracking-tighter text-c2">{tech}</span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default EnterprisePortal;