import React from 'react';
import { Link } from 'react-router-dom';
import Searchbox from '../components/Searchbox';

const Home = () => {
  return (
    <main className="w-full flex flex-col justify-center items-center md:items-start text-center md:text-left animate-in fade-in duration-700">
      
      <div className="flex flex-col items-center md:items-start w-full">
        
        <p className="text-[min(2.5vw,10px)] md:text-xs uppercase tracking-[0.3em] text-c2 mb-4 whitespace-nowrap">
          Electrical & Computer Engineer // System Architect
        </p>
        
        {/* THE FIX: 
          fontSize: 'clamp(1.5rem, 6vw, 5rem)' 
          - 1.5rem: The smallest it will ever get (won't disappear)
          - 6vw: It scales perfectly with the width of the screen
          - 5rem: The largest it will ever get (won't grow forever)
        */}
        <h2 
          className="font-bold tracking-tighter text-c1 mb-8 uppercase leading-[0.95] whitespace-nowrap"
          style={{ fontSize: 'clamp(1.8rem, 5.5vw, 6rem)' }}
        >
          ENGINEERING <br /> 
          <span className="text-c2 italic font-light">INTELLIGENT</span> SYSTEMS
        </h2>

        <p className="max-w-md text-[min(3.5vw,15px)] md:text-base text-c1 font-light leading-relaxed mb-12 opacity-80 uppercase tracking-wide">
          Specializing in Scalable Microservices, <br className="hidden md:block" /> 
          Geotechnical AI, and High-Performance <br className="hidden md:block" /> 
          Full-Stack Environments.
        </p>
        
        <div className="flex flex-col items-center md:items-start w-full">
          <p className="text-[9px] uppercase tracking-widest text-c2 mb-4">
            Search Technical Documentation:
          </p>
          <div className="w-full max-w-[240px] md:max-w-xs">
            <Searchbox />
          </div>
        </div>
      </div>

      <div className="flex gap-6 mt-12">
        <Link 
          to="/projects" 
          className="text-xs border-b border-c1 pb-1 hover:text-c2 transition-all font-bold uppercase tracking-widest"
        >
          Projects →
        </Link>
        <Link 
          to="/cv" 
          className="text-xs border-b border-transparent pb-1 text-c2 hover:border-c2 transition-all font-bold uppercase tracking-widest"
        >
          Technical CV
        </Link>
      </div>
    </main>
  );
};

export default Home;