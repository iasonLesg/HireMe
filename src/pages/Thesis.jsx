import React from 'react';
import { Link } from 'react-router-dom';

const Thesis = () => {
  return (
    <main className="px-6 md:px-8 pt-20 md:pt-32 pb-20 max-w-4xl mx-auto font-sans">
      {/* Navigation */}
      <Link 
        to="/Portfolio/" 
        className="nav-link text-xs uppercase tracking-widest text-c2 mb-12 block w-fit"
      >
        ← Back to Overview
      </Link>

      {/* Header Section */}
      <header className="border-b-4 border-c1 pb-8 mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-c1 uppercase leading-tight md:leading-none break-words">
          Thesis <span className="font-light italic text-c2">Synopsis</span>
        </h1>
        
        {/* Contact info optimized for mobile wrapping */}
        <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-4 text-[9px] md:text-[10px] uppercase tracking-widest text-c2 font-bold">
          <span>Aristotle University of Thessaloniki</span>
          <span className="hidden md:inline opacity-30">|</span>
          <span>Electrical & Computer Engineering</span>
          <span className="hidden md:inline opacity-30">|</span>
          <span className="text-c1 italic">Image Forensics & Computer Vision</span>
        </div>
      </header>

      {/* Research Objective */}
      <section className="mb-12">
        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-pressed mb-6 border-b border-c3 pb-2">Research Objective</h2>
        <div className="bg-c3/10 p-5 md:p-6 border-l-2 border-c1 mb-8">
          <h3 className="text-base md:text-lg font-bold text-c1 uppercase tracking-tight mb-2 leading-tight">
            Multi-Layered Article Validation via Image Forensics
          </h3>
          <p className="text-sm leading-relaxed text-c1 font-light">
            Development of a Chrome Extension capable of cross-verifying digital journalism by analyzing image integrity through 7 forensic methods and object classification.
          </p>
        </div>
      </section>

      {/* Technical Deep Dive */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        {/* Computer Vision Column */}
        <section>
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-pressed mb-6 border-b border-c3 pb-2">Object Detection (2020)</h2>
          <div className="space-y-6">
            <div className="border-l border-c3 pl-4">
              <h4 className="text-sm font-bold uppercase text-c1">Python-Trained ML Model</h4>
              <p className="text-xs text-c2 leading-relaxed mt-2">
                Utilized a pre-trained model optimized on the <strong>COCO Dataset</strong> to identify and isolate specific items within article imagery.
              </p>
              <div className="mt-3 text-[9px] md:text-[10px] text-c1 font-bold tracking-tighter sm:tracking-widest">
                CAPACITY: 120 CLASSIFIED OBJECT CLASSES
              </div>
            </div>
            <div className="border-l border-c3 pl-4">
              <h4 className="text-sm font-bold uppercase text-c1">Natural Language Flags</h4>
              <p className="text-xs text-c2 leading-relaxed mt-2">
                Simultaneous analysis of article metadata: detecting "All-Caps" titles, profanity filters, and domain blacklisting.
              </p>
            </div>
          </div>
        </section>

        {/* Forensic Analysis Column */}
        <section>
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-pressed mb-6 border-b border-c3 pb-2">Image Integrity (MKLab)</h2>
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-c2 mb-1">Forensic Pipeline</h4>
            <p className="text-xs text-c1 font-medium mb-4">Integrated university-grade APIs to execute 7 distinct forensic analyses:</p>
            
            {/* Grid fix for small screens */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-2">
              {["CAGI", "WAVELET", "MEDIAN", "BLOCK", "GHOST", "ELA", "DQ"].map((item) => (
                <div key={item} className="text-[8px] md:text-[9px] border border-c3 px-1 py-2 text-center font-bold text-c2 uppercase leading-none flex items-center justify-center">
                  {item}
                </div>
              ))}
            </div>
            
            <div className="pt-4 mt-6 border-t border-c3">
               <h4 className="text-[9px] uppercase tracking-[0.2em] text-pressed mb-1">Decision Engine</h4>
               <p className="text-xs font-bold uppercase text-c1 leading-tight">
                 Threshold: {`<`} 60% Probability Score = "Likely Misinformation"
               </p>
            </div>
          </div>
        </section>
      </div>

      {/* Accomplishments Section */}
      <section className="mb-12">
        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-pressed mb-6 border-b border-c3 pb-2">Key Accomplishments</h2>
        <ul className="space-y-4">
          {[
            "Successfully integrated the MKLab API for deep image temper detection within a production browser environment.",
            "Engineered an automated 'Checkmark' verification system that only triggers upon passing all 7 forensic filters.",
            "Developed the Chrome Extension architecture to handle heavy external API calls without degrading browser performance.",
            "Implemented an investigative UI that allows users to drill down into the forensic evidence for each specific image."
          ].map((item, i) => (
            <li key={i} className="flex gap-4 text-sm leading-relaxed text-c1 font-light">
              <span className="text-pressed font-bold mt-1">/</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Footer Branding */}
      <footer className="mt-24 text-center">
        <div className="inline-block border border-c3 px-5 py-2">
          <p className="text-[7px] md:text-[8px] uppercase tracking-[0.3em] md:tracking-[0.5em] text-c2 leading-none">
            System Architect / Jason Lesgidis / Diploma Thesis
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Thesis;