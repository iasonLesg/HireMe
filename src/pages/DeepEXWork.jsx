import React from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <main className="px-8 pt-32 pb-20 max-w-6xl mx-auto">
      {/* Experience Header Link */}
      <div className="mb-20">
        
          <h2 className="text-4xl md:text-5xl font-bold nav-link leading-tight">
            Software Engineer at Deep Excavation LLC
          </h2>
          <span className="text-xs text-c2 uppercase tracking-widest whitespace-nowrap">
            2019 — Present
          </span>
        
      </div>
      
      {/* Sub-Projects List */}
      <div className="grid gap-12">
        <p className="text-[10px] uppercase tracking-[0.3em] text-c2 font-bold mb-2">Project Specializations</p>
        
        {/* AI Development */}
        <Link to="/Deepex/aidev" className="group border-b border-c3 pb-4 flex justify-between items-end">
          <span className="text-2xl font-medium nav-link">
            AI Development
          </span>
          <span className="text-xs text-c2 uppercase tracking-widest">
            2025-2026
          </span>
        </Link>

        {/* Embedded Python */}
        <Link to="/Deepex/DotNetPython" className="group border-b border-c3 pb-4 flex justify-between items-end">
          <span className="text-2xl font-medium nav-link">
            Embedded Python Development
          </span>
          <span className="text-xs text-c2 uppercase tracking-widest">
            2025
          </span>
        </Link>




        
        {/* Boring Logs */}
        <Link to="/Deepex/BoringLogs" className="group border-b border-c3 pb-4 flex justify-between items-end">
          <span className="text-2xl font-medium nav-link">
            Soil Profiling
          </span>
          <span className="text-xs text-c2 uppercase tracking-widest">
            2021-2024
          </span>
        </Link>


      {/* Boring Logs */}
        <Link to="/Deepex/SubwaySystem" className="group border-b border-c3 pb-4 flex justify-between items-end">
          <span className="text-2xl font-medium nav-link">
            Subway Systems
          </span>
          <span className="text-xs text-c2 uppercase tracking-widest">
            2022-2024
          </span>
        </Link>


      {/* Boring Logs */}
        <Link to="/Deepex/Apis" className="group border-b border-c3 pb-4 flex justify-between items-end">
          <span className="text-2xl font-medium nav-link">
            APIs & Intergration
          </span>
          <span className="text-xs text-c2 uppercase tracking-widest">
            2021-now
          </span>
        </Link>


            {/* EnterprisePortal Logs */}
        <Link to="/Deepex/EnterprisePortal" className="group border-b border-c3 pb-4 flex justify-between items-end">
          <span className="text-2xl font-medium nav-link">
            Enterprise Portal
          </span>
          <span className="text-xs text-c2 uppercase tracking-widest">
            2021-now
          </span>
        </Link>
      </div>



      
     

      {/* Optional: Add a simple Back link */}
      <Link to="/Projects" className="mt-20 inline-block text-xs uppercase tracking-widest text-c2 hover:text-c1 transition-colors">
        ← Back to Projects
      </Link>
    </main>
  );
}   