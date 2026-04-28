import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full px-4 md:px-8 py-4 md:py-6 flex justify-between items-center z-50 bg-bg/80 backdrop-blur-sm">
      
      {/* Brand Section */}
      <div className="relative group flex flex-col items-center">
        <Link 
          to="/Portfolio/" 
          className="flex items-center gap-2 md:gap-3 text-sm md:text-xl font-bold tracking-widest uppercase text-c1 hover:opacity-70 transition-opacity"
        >
          {/* Logo scales with screen size */}
          <Logo className="h-5 md:h-8 w-auto" />
          
          <span className="whitespace-nowrap">
            Jason<span className="font-light"> Lesgidis</span>
          </span>
        </Link>

        {/* Tooltip Bubble - Hidden on mobile to keep it clean */}
        <span className="absolute top-full mt-2 hidden md:group-hover:block opacity-0 group-hover:opacity-100 transition-all duration-200 bg-c1 text-bg px-2 py-1 text-[9px] uppercase tracking-[0.3em] font-bold pointer-events-none whitespace-nowrap">
          Home
        </span>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-4 md:gap-8 items-center">
        <Link to="/projects" className="nav-link text-[10px] md:text-xs uppercase tracking-widest text-c1 font-bold">
          Projects
        </Link>
        <Link to="/cv" className="nav-link text-[10px] md:text-xs uppercase tracking-widest text-c1 font-bold">
          CV
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;