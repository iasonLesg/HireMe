import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Searchbox = () => {
  const [query, setQuery] = useState("");
  
  // Data Source: Tags remain here for the filtering logic but won't be rendered
  const pages = [
    { title: "AI Development - Deep Excavation LLC", path: "/Deepex/AiDev", tags: "Multi-Agent Orchestration, LLM, RAG, Agentic Workflows, Gated Recurrent Unit, GRU, Predictive Geotechnics, Neural Networks, Sequential Modeling, Token Management, Cost Optimization, Retrieval-Augmented Generation, Intent Analysis, Semantic Search, Function Calling, Tool-use, Pilecap AI, Geotechnical Engineering, Structural Analysis, Temporal Dependencies, Displacement Prediction, Construction Sequence Modeling, Context Injection, Latency Optimization, API Integration, System Architecture" },
    { title: ".NET Embedded Python - Deep Excavation LLC", path: "/Deepex/DotNetPython", tags: "Embedded Python, .NET, Cross-Language Architecture, AI Orchestration, Zero-Installation, CPython, Keras, TensorFlow, NumPy, Scikit-learn, Portable Runtime, DLL Integration, Package Resolution, .NET Visual Basic, Python Scientific Stack, Machine Learning, Enterprise AI Deployment, Self-contained Runtime, Backend Integration, Dynamic Link Libraries, Native Performance" },
    { title: "Soil Profiling - Deep Excavation LLC", path: "/Deepex/BoringLogs", tags: "Soil Profiling, Geotechnical Visualization, Mathematical Modeling, 3D Profile Generation, Boring Log Data, Bicubic Interpolation, Bicubic Extrapolation, Spatial Interpolation, 3D Sub-surface Modeling, Automated 2D Profiling, Geological Cross-sections, Data Synthesis, Geotechnical Engineering, Automated Drafting, Sub-surface Visualization, Civil Engineering Software" },
    { title: "Subway Systems - Deep Excavation LLC", path: "/Deepex/SubwaySystem", tags: "Geospatial Optimization, Urban Infrastructure Logic, 2D Alignment Interface, Google Maps API, GIS Integration, Engineering Constraints, Min Turn Radius Calculation, Rolling Stock Variables, Cost-Distance Optimization, Shortest Digging Logic, Station Placement Intelligence, Demand-Driven Routing, Weighted Population Reach, Accessibility Modeling, Transit Optimization, Urban Planning Algorithms" },
    { title: "APIs & Integration - Deep Excavation LLC", path: "/Deepex/Apis", tags: "APIs & Integration, Cloud Connectivity, Industrial IoT, Business Intelligence, Google Elevation & Routing, OpenAI API, Pipedrive API, Wix API, CAD Mapper, Mosquitto MQTT, Real-time Data Flow, Industrial Protocols, Tunnel Infrastructure, ASP.NET, C#, RESTful Architecture, Backend Engineering, API Security, Licensing Verification, Queue Management, Server-side Task Creation, CRM Integration, Data Synchronization, Zero-connectivity Reliability,API,RHEST,GET,POST" },
    { title: "Enterprise Portal - Deep Excavation LLC", path: "/Deepex/EnterprisePortal", tags: "Enterprise Portal, Full-Stack Development, Microservices Architecture, Systems Administration, ASP.NET, MS SQL Server, Monolith Refactoring, Network Security, Email Infrastructure, WHM, cPanel, DNS Management, Domain Routing, SSL/TLS Certificates, DevOps, Physical Server Migration, Infrastructure Management, Business Intelligence, Data Decoupling, Wix & Pipedrive Integration, Real-time Analytics, Security Refactoring, SQL Optimization, Operations Management, C#, Distributed Systems, Portal" },
  ];

  // Filter Logic: Still checks tags so the search remains powerful
  const filteredPages = query === "" 
    ? [] 
    : pages.filter(page => 
        page.title.toLowerCase().includes(query.toLowerCase()) || 
        page.tags.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="w-full max-w-md">
      <div className="relative group">
        {/* Minimalist Input */}
        <input
          type="text"
          placeholder="SEARCH PROJECTS..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-transparent border-b border-c3 py-2 text-xs tracking-widest outline-none focus:border-c1 transition-colors uppercase placeholder:text-c2 text-c1"
        />
        
        {/* Results Dropdown */}
        {filteredPages.length > 0 && (
          <div className="absolute top-full left-0 w-full bg-bg border border-c3 mt-1 z-50 animate-in fade-in slide-in-from-top-1 duration-200 shadow-xl">
            {filteredPages.map((page, index) => (
              <Link
                key={index}
                to={page.path}
                onClick={() => setQuery("")} // Clear search on click
                className="block p-4 border-b border-c3 last:border-none hover:bg-c3 transition-colors group/item"
              >
                {/* Only Title is rendered now */}
                <p className="text-sm font-bold uppercase tracking-tighter text-c1 group-hover/item:text-teal-pressed transition-colors">
                  {page.title}
                </p>
                <div className="text-[9px] text-c2 mt-1 uppercase tracking-widest opacity-0 group-hover/item:opacity-100 transition-opacity">
                  View Project →
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Searchbox;