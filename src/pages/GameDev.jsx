import React from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <main className="px-8 pt-32 pb-20 max-w-6xl mx-auto">
      
   
      <section>
        <div className="mb-20">
          
            <h2 className="text-4xl md:text-5xl font-bold nav-link leading-tight">
              Game Development
            </h2>
            <span className="text-xs text-c2 uppercase tracking-widest whitespace-nowrap italic">
              Independent Creative Work
            </span>
          
        </div>

        <div className="grid gap-12">
          <p className="text-[10px] uppercase tracking-[0.3em] text-c2 font-bold mb-2">Released Titles & Experiments</p>
          
          {/* Example Game Link - Replace with your actual game path */}
          <Link to="/GameDev/CabinInTheWoods" className="group border-b border-c3 pb-4 flex justify-between items-end">
            <span className="text-2xl font-medium nav-link">
             Cabin In The Woods - 3 Weeks Development (2024)
            </span>
            <span className="text-xs text-c2 uppercase tracking-widest">
              Unity / C#
            </span>
          </Link>
  

          {/* Example Game Link - Replace with your actual game path */}
          <Link to="/GameDev/Tetrapipe" className="group border-b border-c3 pb-4 flex justify-between items-end">
            <span className="text-2xl font-medium nav-link">
             Tetrapipe (game-jam 2024)
            </span>
            <span className="text-xs text-c2 uppercase tracking-widest">
              Unity / C#
            </span>
          </Link>
        </div>
      </section>

      {/* Footer Navigation */}
      <Link to="/Projects" className="mt-40 inline-block text-xs uppercase tracking-widest text-c2 hover:text-c1 transition-colors underline underline-offset-8">
        ← Return to Projects
      </Link>
    </main>
  );
}