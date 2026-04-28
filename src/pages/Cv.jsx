import React from 'react';
import { Link } from 'react-router-dom';

const Cv = () => {
  return (
    <main className="px-6 md:px-8 pt-20 md:pt-32 pb-20 max-w-4xl mx-auto font-sans">
      {/* Navigation */}
      <Link 
        to="/Portfolio/" 
        className="nav-link text-xs uppercase tracking-widest text-c2 mb-12 block w-fit"
      >
        ← Back to Overview
      </Link>

      {/* Title Section */}
      <header className="border-b-4 border-c1 pb-8 mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-c1 uppercase leading-none break-words">
          Jason <span className="font-light italic text-c2">Lesgidis</span>
        </h1>
        
        {/* Contact info optimized for wrapping on mobile */}
        <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-4 text-[9px] md:text-[10px] uppercase tracking-widest text-c2 font-bold">
          <a href="mailto:iasonlesgidis@gmail.com" className="hover:text-c1">iasonlesgidis@gmail.com</a>
          <span className="hidden md:inline opacity-30">|</span>
          <a href="https://www.linkedin.com/in/iasonlesgidis/" target="_blank" rel="noreferrer" className="hover:text-c1">LinkedIn</a>
          <span className="hidden md:inline opacity-30">|</span>
          <span>Thessaloniki, GR</span>
          <span className="hidden md:inline opacity-30">|</span>
          <span className="text-c1">Born 1994</span>
        </div>
      </header>

      {/* Education Section */}
      <section className="mb-12">
        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-pressed mb-6 border-b border-c3 pb-2">Education</h2>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-2 gap-1">
          <h3 className="text-base md:text-lg font-bold text-c1 uppercase tracking-tight leading-tight">
            Electrical & Computer Engineering (Int. Master)
          </h3>
          <span className="text-[9px] md:text-[10px] text-c2 uppercase font-bold shrink-0">Thessaloniki, GR</span>
        </div>
        <p className="text-xs md:text-sm text-c2 uppercase tracking-widest mb-4">Aristotle University of Thessaloniki</p>
        
        <Link to="/Thesis" className="block group"> 
          <div className="bg-c3/10 p-4 border-l-2 border-c1 group-hover:bg-c3/20 transition-colors">
            <p className="text-xs leading-relaxed text-c1">
              <span className="font-bold uppercase tracking-tighter mr-2 text-[10px]">Thesis:</span> 
              Retrieving article data and calculating validity through real-time AI and scraping algorithms via custom Chrome Extensions.
            </p>
          </div>
        </Link>
      </section>

      {/* Experience Section */}
      <section className="mb-12">
        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-pressed mb-6 border-b border-c3 pb-2">Experience</h2>
        
        {/* Software Engineer Role */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-2 gap-1">
            <h3 className="text-lg md:text-xl font-black text-c1 uppercase tracking-tighter">Deep Excavation LLC</h3>
            <span className="text-[9px] md:text-[10px] text-c2 uppercase font-bold shrink-0">Aug 2022 — Present</span>
          </div>
          <p className="text-[10px] md:text-xs font-bold text-c2 uppercase tracking-widest mb-4 italic">Software Engineer / System Architect</p>
          <ul className="space-y-4">
            {[
              "Architected a scalable Microservices ecosystem to decouple high-intensity chart calculations and third-party API connectivity.",
              "Engineered an RNN-powered (GRU) module for project displacement analysis using .NET and Python integration.",
              "Led server migration (VM to Physical), managing WHM, cPanel, and DNS integrity.",
              "Integrated OpenAI’s API for natural language function calls and RAG search.",
              "Refactored legacy ASP.NET monoliths into modern RESTful environments.",
              "Developed a geospatial Subway Alignment module utilizing Google Maps API."
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-c1 font-light">
                <span className="text-pressed font-bold mt-1">/</span> <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Junior Role */}
        <div className="mb-10 opacity-80">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-2 gap-1">
            <h3 className="text-lg md:text-xl font-black text-c1 uppercase tracking-tighter">Deep Excavation LLC</h3>
            <span className="text-[9px] md:text-[10px] text-c2 uppercase font-bold shrink-0">Nov 2019 — Nov 2021</span>
          </div>
          <p className="text-[10px] md:text-xs font-bold text-c2 uppercase tracking-widest mb-4 italic">Junior Software Engineer</p>
          <ul className="space-y-4">
            {[
              "Built IoT backend clients using MQTT (Mosquitto) to retrieve real-time sensor data.",
              "Applied multithreading techniques to optimize engineering functions.",
              "Developed UI modules for 2D/3D tunnel modeling and data visualization tools."
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-c1 font-light">
                <span className="text-c3 font-bold mt-1">/</span> <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Military */}
        <div className="flex justify-between items-center py-4 border-y border-dashed border-c3 mb-12">
          <span className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold">Military Service (Greece)</span>
          <span className="text-[9px] md:text-[10px] text-c2">2021 — 2022</span>
        </div>
      </section>

      {/* Projects & Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Projects Column */}
        <section>
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-pressed mb-6 border-b border-c3 pb-2">Projects</h2>
          <div className="space-y-6">
            {[
              { name: "Tetrapipe", desc: "Puzzle engineering game with Unity/C#." },
              { name: "True News App V.2", desc: "TypeScript and Python-based news validator." },
              { name: "Medical Assistant", desc: "C# and VB.NET based patient management interface." }
            ].map((p, i) => (
              <div key={i}>
                <h4 className="text-sm font-bold uppercase text-c1">{p.name}</h4>
                <p className="text-xs text-c2 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Column */}
        <section>
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-pressed mb-6 border-b border-c3 pb-2">Skills</h2>
          <div className="space-y-6">
            <div>
              <h4 className="text-[9px] uppercase tracking-[0.2em] text-c2 mb-1">Languages</h4>
              <p className="text-xs font-bold uppercase leading-relaxed">C#, VB.NET, MSSQL, Python, JS, React, C++</p>
            </div>
            <div>
              <h4 className="text-[9px] uppercase tracking-[0.2em] text-c2 mb-1">Tools</h4>
              <p className="text-xs font-bold uppercase leading-relaxed">.NET, TensorFlow, Unity, MQTT, Git, WHM</p>
            </div>
            <div className="flex justify-between pt-4 border-t border-c3">
              <div>
                <h4 className="text-[9px] uppercase tracking-[0.2em] text-c2 mb-1">English</h4>
                <p className="text-xs font-bold uppercase">C2 Prof.</p>
              </div>
              <div>
                <h4 className="text-[9px] uppercase tracking-[0.2em] text-c2 mb-1">Greek</h4>
                <p className="text-xs font-bold uppercase">Native</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Branding */}
      <footer className="mt-24 text-center">
        <div className="inline-block border border-c3 px-4 md:px-6 py-2">
          <p className="text-[7px] md:text-[8px] uppercase tracking-[0.3em] md:tracking-[0.5em] text-c2 leading-none">
            System Architect / Jason Lesgidis / 2026 Edition
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Cv;