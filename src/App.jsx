import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Footer from './components/Footer';
import NavBar from './components/NavBar';
import LoadingElement from './components/LoadingElement';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import DeepEXWork from './pages/DeepexWork';
import Cv from './pages/Cv';
import Projects from './pages/Projects';
import AiDev from './pages/Deepex/AiDev';
import DotNetPython from './pages/Deepex/DotNetPython';
import BoringLogs from './pages/Deepex/BoringLogs';
import EnterprisePortal from './pages/Deepex/EnterprisePortal';
import Apis from './pages/Deepex/Apis';
import SubwaySystem from './pages/Deepex/SubwaySystem';
import CabinInTheWoods from './pages/GameDev/CabinInTheWoods';
import Tetrapipe from './pages/GameDev/Tetrapipe';
import GameDev from './pages/GameDev';
import Thesis from './pages/Thesis';

import OpenSource from './pages/OpenSource';
import MedicalAssistant from './pages/OpenSource/MedicalAssistant';

import InteractiveCubes from "./components/InteractiveCubes";
import Skills from "./components/Skills"; // 1. Imported the SEO component

// Helper for scrolling
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Page Transition Wrapper
const PageLayout = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

const AppContent = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col bg-[#e3e3e3] text-c1 font-sans">
      <NavBar />
      <ScrollToTop />
      
      {/* 2. SEO INJECTION POINT: 
          This renders the categorized lists and tables 
          in a hidden div for Search Engines like Gemini/Google. 
      */}
      

      <main 
        className="flex-grow flex flex-col md:flex-row overflow-hidden"
        style={{ height: isHome ? 'calc(100vh - 80px)' : 'auto' }}
      > 
        <div className={`transition-all duration-1000 ease-in-out z-10
          ${isHome 
            ? 'w-full h-auto md:h-full md:w-auto md:min-w-[33%] flex flex-col justify-center p-8' 
            : 'w-full p-4 md:p-12'
          }`}
        >
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageLayout><Home /></PageLayout>} />
              <Route path="/cv" element={<PageLayout><Cv /></PageLayout>} />
              <Route path="/projects" element={<PageLayout><Projects /></PageLayout>} />
              <Route path="/Deepex/aidev" element={<PageLayout><AiDev /></PageLayout>} />
              <Route path="/Deepex/DotNetPython" element={<PageLayout><DotNetPython /></PageLayout>} />
              <Route path="/Deepex/BoringLogs" element={<PageLayout><BoringLogs /></PageLayout>} />
              <Route path="/Deepex/Apis" element={<PageLayout><Apis /></PageLayout>} />
              <Route path="/Deepex/SubwaySystem" element={<PageLayout><SubwaySystem /></PageLayout>} />
              <Route path="/Deepex/EnterprisePortal" element={<PageLayout><EnterprisePortal /></PageLayout>} />
              <Route path="/DeepEXWork" element={<PageLayout><DeepEXWork /></PageLayout>} />
              <Route path="/GameDev/CabinInTheWoods" element={<PageLayout><CabinInTheWoods /></PageLayout>} />
              <Route path="/GameDev/Tetrapipe" element={<PageLayout><Tetrapipe /></PageLayout>} />
              <Route path="/GameDev" element={<PageLayout><GameDev /></PageLayout>} />
              <Route path="/Thesis" element={<PageLayout><Thesis /></PageLayout>} />
              <Route path="/OpenSource" element={<PageLayout><OpenSource /></PageLayout>} />
              <Route path="/OpenSource/MedicalAssistant" element={<PageLayout><MedicalAssistant /></PageLayout>} />
              <Route path="*" element={<PageLayout><NotFound /></PageLayout>} />
            </Routes>
          </AnimatePresence>
        </div>

        <div 
          className={`relative transition-all duration-1000 ease-in-out bg-[#e3e3e3] flex-1
            ${isHome 
              ? 'opacity-100 visible border-t md:border-t-0 md:border-l border-black/5 min-h-[350px] md:min-h-full' 
              : 'w-0 h-0 opacity-0 invisible pointer-events-none'
            }`}
        >
          {isHome && (
            <div className="w-full h-full">
              <Canvas 
                orthographic 
                camera={{ position: [0, 0, 1000], near: 0.1, far: 2000 }}
                gl={{ antialias: true, alpha: true }}
                onCreated={({ camera }) => {
                  camera.zoom = 3; 
                  camera.updateProjectionMatrix();
                }}
              >
                <ambientLight intensity={0.7} /> 
                <directionalLight position={[150, 150, 150]} intensity={1.2} />
                
                {/* 3. INTERACTIVE CUBES: 
                    These use the ALL_SKILLS array from skillsData.js 
                */}
                <InteractiveCubes onHover={setHoveredIndex} hovered={hoveredIndex} />
                
                <OrbitControls 
                  makeDefault 
                  enableZoom={false} 
                  enablePan={false} 
                />
              </Canvas>
            </div>
          )}
        </div>
      </main>
<Skills />
      <Footer />
    </div>
  );
};

function App() {
  const [contentReady, setContentReady] = useState(false);
  const [removeLoader, setRemoveLoader] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setContentReady(true), 1500);
    const timer2 = setTimeout(() => setRemoveLoader(true), 3000);
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, []);

  return (
    <Router>
      <div className="relative overflow-hidden selection:bg-c1 selection:text-bg">
        {!removeLoader && <LoadingElement isExiting={contentReady} />}
        <AppContent />
      </div>
    </Router>
  );
}

export default App;