import React from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <main className="px-8 pt-32 pb-20 max-w-6xl mx-auto">
   

         {/* --- SECTION: OpenSource --- */}
      <section>
        <div className="mb-20">
          
            <h2 className="text-4xl md:text-5xl font-bold  leading-tight">
              Open Source Projects
            </h2>
            <span className="text-xs text-c2 uppercase tracking-widest whitespace-nowrap italic">
              Independent Work
            </span>
         
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

         {/* Optional: Add a simple Back link */}
            <Link to="/Projects" className="mt-20 inline-block text-xs uppercase tracking-widest text-c2 hover:text-c1 transition-colors">
              ← Back to Projects
            </Link>
          </main>
  );
}