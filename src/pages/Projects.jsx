import React from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <main className="px-8 pt-32 pb-20 max-w-6xl mx-auto">
      
      {/* --- SECTION: PROFESSIONAL EXPERIENCE --- */}
      <section>
        <div className="mb-20">
          <Link to="/DeepexWork" className="group border-b border-c3 pb-6 flex flex-col md:flex-row justify-between items-baseline gap-4">
            <h2 className="text-4xl md:text-5xl font-bold nav-link leading-tight">
              Software Engineer at Deep Excavation LLC
            </h2>
            <span className="text-xs text-c2 uppercase tracking-widest whitespace-nowrap">
              2019 — Present
            </span>
          </Link>
        </div>
        
        {/* Sub-Projects List */}
        <div className="grid gap-12">
          <p className="text-[10px] uppercase tracking-[0.3em] text-c2 font-bold mb-2">Technical Specializations</p>
          
          <Link to="/Deepex/aidev" className="group border-b border-c3 pb-4 flex justify-between items-end">
            <span className="text-2xl font-medium nav-link">AI Development</span>
            <span className="text-xs text-c2 uppercase tracking-widest">2025-2026</span>
          </Link>

          <Link to="/Deepex/DotNetPython" className="group border-b border-c3 pb-4 flex justify-between items-end">
            <span className="text-2xl font-medium nav-link">.NET Embedded Python</span>
            <span className="text-xs text-c2 uppercase tracking-widest">2025</span>
          </Link>

          <Link to="/Deepex/BoringLogs" className="group border-b border-c3 pb-4 flex justify-between items-end">
            <span className="text-2xl font-medium nav-link">Soil Profiling</span>
            <span className="text-xs text-c2 uppercase tracking-widest">2021-2024</span>
          </Link>

          <Link to="/Deepex/SubwaySystem" className="group border-b border-c3 pb-4 flex justify-between items-end">
            <span className="text-2xl font-medium nav-link">Subway Systems</span>
            <span className="text-xs text-c2 uppercase tracking-widest">2022-2024</span>
          </Link>

          <Link to="/Deepex/Apis" className="group border-b border-c3 pb-4 flex justify-between items-end">
            <span className="text-2xl font-medium nav-link">APIs & Integration</span>
            <span className="text-xs text-c2 uppercase tracking-widest">2021-now</span>
          </Link>

          <Link to="/Deepex/EnterprisePortal" className="group border-b border-c3 pb-4 flex justify-between items-end">
            <span className="text-2xl font-medium nav-link">Enterprise Portal</span>
            <span className="text-xs text-c2 uppercase tracking-widest">2021-now</span>
          </Link>
        </div>
      </section>

      {/* --- SPACER / DIVIDER --- */}
      <div className="my-20 border-t border-c3 w-24"></div>

      {/* --- SECTION: GAME DEVELOPMENT --- */}
      <section>
        <div className="mb-20">
          <Link to="/GameDev" className="group border-b border-c3 pb-6 flex flex-col md:flex-row justify-between items-baseline gap-4">
            <h2 className="text-4xl md:text-5xl font-bold nav-link leading-tight">
              Game Development
            </h2>
            <span className="text-xs text-c2 uppercase tracking-widest whitespace-nowrap italic">
              Independent Creative Work
            </span>
          </Link>
        </div>

        <div className="grid gap-12">
          <p className="text-[10px] uppercase tracking-[0.3em] text-c2 font-bold mb-2">Released Titles & Experiments</p>
          
          {/* Example Game Link - Replace with your actual game path */}
          <Link to="/GameDev/CabinInTheWoods" className="group border-b border-c3 pb-4 flex justify-between items-end">
            <span className="text-2xl font-medium nav-link">
             Cabin In The Woods  (2024)
            </span>
            <span className="text-xs text-c2 uppercase tracking-widest">
              Unity / C# (3 Weeks jam)
            </span>
          </Link>
  

          {/* Example Game Link - Replace with your actual game path */}
          <Link to="/GameDev/Tetrapipe" className="group border-b border-c3 pb-4 flex justify-between items-end">
            <span className="text-2xl font-medium nav-link">
             Tetrapipe (2024)
            </span>
            <span className="text-xs text-c2 uppercase tracking-widest">
              Unity / C# (3 Days jam)
            </span>
          </Link>
        </div>
      </section>

   <div className="my-20 border-t border-c3 w-24"></div>
         {/* --- SECTION: OpenSource --- */}
      <section>
        <div className="mb-20">
          <Link to="/OpenSource" className="group border-b border-c3 pb-6 flex flex-col md:flex-row justify-between items-baseline gap-4">
            <h2 className="text-4xl md:text-5xl font-bold nav-link leading-tight">
              Open Source Projects
            </h2>
            <span className="text-xs text-c2 uppercase tracking-widest whitespace-nowrap italic">
              Independent Work
            </span>
          </Link>
        </div>

        <div className="grid gap-12">
          <p className="text-[10px] uppercase tracking-[0.3em] text-c2 font-bold mb-2">Released Applications</p>
          
          {/* Example Game Link - Replace with your actual game path */}
          <Link to="/OpenSource/MedicalAssistant" className="group border-b border-c3 pb-4 flex justify-between items-end">
            <span className="text-2xl font-medium nav-link">
             Medical Assistant
            </span>
            <span className="text-xs text-c2 uppercase tracking-widest">
              Visual Basic | Windows Forms
            </span>
          </Link>
  

       
        </div>
      </section>

      {/* Footer Navigation */}
      <Link to="/Portfolio/" className="mt-40 inline-block text-xs uppercase tracking-widest text-c2 hover:text-c1 transition-colors underline underline-offset-8">
        ← Return to Overview
      </Link>
    </main>
  );
}