import React from 'react';
import { Link } from 'react-router-dom';

const Apis = () => {
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
          APIs & <span className="font-light italic text-c2">INTEGRATION</span>
        </h1>
        <p className="text-c2 uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs font-bold leading-relaxed">
          Cloud Connectivity, Industrial IoT & Business Intelligence
        </p>
      </header>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 border-t border-c1 pt-12">
        
        {/* Section 1: External API Consumption */}
        <section className="space-y-10 md:space-y-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-8 text-pressed">External Ecosystems</h2>
            <div className="border-l-2 border-c1 pl-5 md:pl-6 space-y-8">
              <p className="text-base md:text-lg leading-relaxed text-c1 font-light">
                Integrated diverse external APIs to enable the retrieval and processing of <span className="font-bold">Civil Engineering datasets</span> and <span className="font-bold text-pressed">Sales Intelligence</span>.
              </p>
              
              <ul className="grid grid-cols-1 gap-4">
                {[
                  { label: "Geospatial", val: "Google Elevation & Routing" },
                  { label: "Intelligence", val: "OpenAI API Ecosystem" },
                  { label: "CRM & Sales", val: "Pipedrive API Integration" },
                  { label: "Web Operations", val: "Wix Data Retrieval" },
                  { label: "CAD Architecture", val: "CAD Mapper Routing" }
                ].map((item, i) => (
                  <li key={i} className="flex flex-col border-b border-c3 pb-2">
                    <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-c2">{item.label}</span>
                    <span className="text-xs md:text-sm font-bold uppercase">{item.val}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tunnel / IoT Section */}
          <div className="p-6 md:p-8 bg-c1 text-bg">
            <h3 className="text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4 opacity-70">Industrial IoT / Tunnel Systems</h3>
            <p className="text-lg md:text-xl leading-snug font-medium italic mb-6">
              "Ensuring infrastructure reliability in zero-connectivity environments."
            </p>
            <p className="text-xs md:text-sm text-teal-c2 leading-relaxed font-light">
              Integrated proprietary hardware APIs for tunnel infrastructure using <span className="text-white font-bold underline decoration-pressed underline-offset-4">Mosquitto MQTT</span> to manage real-time data flow.
            </p>
          </div>
        </section>

        {/* Section 2: Custom API Development */}
        <section className="md:border-l md:border-c3 md:pl-16 space-y-10 md:space-y-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-8">Backend Engineering</h2>
            <div className="border-l-2 border-c2 pl-5 md:pl-6 space-y-10">
              <p className="text-base md:text-lg leading-relaxed text-c1 font-light">
                Architected custom RESTful APIs within the <span className="font-bold italic">ASP.NET C# environment</span> to support core business operations.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Security & Licensing", route: "POST / Request Licensing Verification" },
                  { title: "User Management", route: "GET / Request for Existing Users" },
                  { title: "Queue Management", route: "GET / Server-Side Task Creation" }
                ].map((api, i) => (
                  <div key={i} className="group">
                    <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-pressed mb-1">{api.title}</h4>
                    <p className="text-sm md:text-md font-medium border-b border-c3 pb-2 transition-colors group-hover:border-c1 break-all">
                      {api.route}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 md:mt-20 p-6 md:p-8 border border-dashed border-c3 text-center">
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.1em] md:tracking-[0.2em] text-c2 italic">
              RESTful Architecture / Wix & Pipedrive Sync / MQTT
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Apis;