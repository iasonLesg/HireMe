import React from 'react';
import { Link } from 'react-router-dom';

const AiDev = () => {
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
          AI DEV<span className="font-light italic text-c2">ELOPMENT</span>
        </h1>
        <p className="text-c2 uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs font-bold leading-relaxed">
          Deep Excavation LLC / Intelligent Systems & Geotechnical Machine Learning
        </p>
      </header>

      {/* NEW: Fine-Tuning & Conversational Guidance Section */}
      <section className="mb-20 md:mb-24 border-t border-c1 pt-12">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-pressed mb-4">Fine-Tuning & Behavior</h2>
            <p className="text-c1 font-medium leading-relaxed italic text-sm md:text-base">
              "Transitioning from general-purpose LLMs to a specialized Geotechnical Guide via targeted dataset training."
            </p>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-6">Autonomous Project Guide</h3>
            <p className="text-lg md:text-xl leading-relaxed text-c1 font-light mb-8">
              Engineered a specialized agent that acts as a comprehensive project advisor. By **Fine-tuning** models using custom **JSONL conversation datasets**, I created a conversational architect capable of guiding engineers through the complete lifecycle of a deep excavation design.
            </p>
            {/* Mobile Fix: Changed to flex-wrap */}
            <div className="flex flex-wrap gap-3 md:gap-4">
               <div className="px-3 py-2 border border-c3 text-[9px] md:text-[10px] uppercase tracking-widest font-bold">JSONL Pre-processing</div>
               <div className="px-3 py-2 border border-c3 text-[9px] md:text-[10px] uppercase tracking-widest font-bold">OpenAI API Fine-Tuning</div>
               <div className="px-3 py-2 border border-c3 text-[9px] md:text-[10px] uppercase tracking-widest font-bold">Behavioral Guardrails</div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Agent Orchestration */}
      <section className="mb-20 md:mb-24 border-t border-c1 pt-12">
        <h2 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-10 text-pressed">Orchestration Architecture</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="p-6 bg-c1 text-bg">
            <h3 className="text-xs font-bold tracking-widest uppercase mb-4 opacity-70">01 / Delegator</h3>
            <p className="text-base md:text-lg font-medium leading-snug">
              Primary <span className="italic">Delegator Agent</span> that analyzes user intent to route queries to specialized sub-agents.
            </p>
          </div>
          <div className="p-6 border border-c1">
            <h3 className="text-xs font-bold tracking-widest uppercase mb-4 text-c2">02 / Functional</h3>
            <p className="text-base md:text-lg font-medium leading-snug">
              <span className="font-bold text-c1">Functional Agent</span> executing application tasks via Tool-use and direct API integration.
            </p>
          </div>
          <div className="p-6 border border-c1">
            <h3 className="text-xs font-bold tracking-widest uppercase mb-4 text-c2">03 / Knowledge</h3>
            <p className="text-base md:text-lg font-medium leading-snug">
              <span className="font-bold text-c1">Documentation Agent</span> providing high-accuracy RAG search across technical manuals.
            </p>
          </div>
        </div>
      </section>

      {/* Deep Technicals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 border-t border-c3 pt-12">
        <section className="space-y-12 md:space-y-16">
          <div>
            <h2 className="text-lg md:text-xl font-bold tracking-tight text-c1 uppercase mb-6">RAG & Token Strategy</h2>
            <div className="border-l-2 border-c1 pl-6">
              <p className="text-sm md:text-md leading-relaxed text-c1 font-light">
                Optimized token consumption by engineering precise **RAG injection** protocols. I balanced the ratio between user soil data and retrieved technical context to minimize latency and API overhead.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-bold tracking-tight text-c1 uppercase mb-6">Pilecap Intelligence</h2>
            <div className="border-l-2 border-c2 pl-6">
              <p className="text-sm md:text-md leading-relaxed text-c1 font-light">
                Specialized logic that synthesizes user input with RAG-based soil databases. The model autonomously determines the most relevant soil profiles.
              </p>
            </div>
          </div>
        </section>

        {/* Predictive Displacement Section */}
        <section className="md:border-l md:border-c3 md:pl-16">
          <h2 className="text-lg md:text-xl font-bold tracking-tight text-c1 uppercase mb-6">Predictive Modeling</h2>
          <div className="bg-c1 p-6 md:p-8 text-bg mb-6">
             <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 text-c2">Sequential / GRU / Displacement</p>
             <p className="text-lg md:text-xl leading-relaxed font-light">
                Integrated **Gated Recurrent Unit (GRU)** neural networks to predict soil and wall displacement for excavation sequences.
             </p>
          </div>
          <div className="border-l-2 border-c1 pl-6">
            <p className="text-xs md:text-sm leading-relaxed text-c1 font-light italic">
              By capturing temporal dependencies in construction phases, the model provides safety predictions that reflect real-world sequential patterns.
            </p>
          </div>
        </section>
      </div>

      {/* Technical Stack Tags */}
      <footer className="mt-20 pt-8 border-t border-c3">
        <div className="flex flex-wrap gap-2">
          {['OpenAI Fine-Tuning', 'JSONL', 'GRU Neural Networks', 'RAG', 'Vector Embeddings', 'Python', 'C# Integration', 'Tool Use'].map((tech) => (
            <span key={tech} className="px-3 py-1 border border-c3 text-[9px] uppercase tracking-widest font-bold text-c2">{tech}</span>
          ))}
        </div>
      </footer>
    </main>
  );
};

export default AiDev;