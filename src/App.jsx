import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CRTScanlines } from './components/CRTScanlines';
import { SynthGrid } from './components/SynthGrid';
import { CinematicController } from './components/CinematicController';
import { CustomCursor } from './components/CustomCursor';
import { SideLabels } from './components/SideLabels';
import { FluidCanvas } from './components/FluidCanvas';

import { WelcomePage } from './pages/WelcomePage';
import { HomePage } from './pages/HomePage';
import { SkillsPage } from './pages/SkillsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';

export function App() {

    return (
        <div className="bg-[#22003c] text-[#f2daff] min-h-screen flex flex-col relative selection:bg-[#ff00ff] selection:text-white">
            {/* Custom Neon Reticle Cursor */}
            <CustomCursor />

            {/* Interactive Particle Fluid Wave Background */}
            <FluidCanvas />

            {/* Fixed Left / Right Navigation Side Labels */}
            <SideLabels />

            {/* CRT TV & Synth Grid Overlays */}
            <CRTScanlines />
            <SynthGrid />
            <CinematicController />

            {/* Main Header Navbar */}
            <Navbar />

            {/* Dynamic Route Outlet Container */}
            <main className="flex-grow z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Routes>
                    <Route path="/" element={<WelcomePage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/skills" element={<SkillsPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </main>

            {/* Shared Footer */}
            <Footer />
        </div>
    );
}
export default App;
