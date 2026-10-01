import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export const Navbar = () => {
    const { 
        crtEnabled, 
        toggleCrt, 
        soundEnabled, 
        toggleSound, 
        radioPlaying, 
        toggleRadio,
        cinematicMode,
        toggleCinematic,
        playBeep 
    } = useTheme();

    const handleHover = () => playBeep(880, 0.02);
    const handleClick = () => playBeep(520, 0.05);

    return (
        <header className="bg-surface/80 backdrop-blur-md sticky top-0 border-b-2 border-primary/40 shadow-[0_4px_25px_rgba(255,0,255,0.3)] z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                
                {/* Logo */}
                <NavLink 
                    to="/" 
                    onMouseEnter={handleHover}
                    onClick={handleClick}
                    className="text-2xl sm:text-3xl font-black italic tracking-wider text-secondary-fixed drop-shadow-[0_0_12px_rgba(0,251,251,0.8)] hover:scale-105 transition-all flex items-center gap-2"
                >
                    <span>SONU KUMAR</span>
                </NavLink>

                {/* Router Navigation Links */}
                <nav className="hidden md:flex items-center gap-6 font-label-caps text-sm uppercase tracking-widest">
                    <NavLink 
                        to="/" 
                        onMouseEnter={handleHover}
                        onClick={handleClick}
                        className={({ isActive }) => `text-on-surface-variant hover:text-secondary-fixed transition-colors ${isActive ? 'text-secondary-fixed border-b-2 border-secondary-fixed pb-0.5 font-bold shadow-[0_0_10px_#00fbfb]' : ''}`}
                        end
                    >
                        Welcome
                    </NavLink>

                    <NavLink 
                        to="/home" 
                        onMouseEnter={handleHover}
                        onClick={handleClick}
                        className={({ isActive }) => `text-on-surface-variant hover:text-secondary-fixed transition-colors ${isActive ? 'text-secondary-fixed border-b-2 border-secondary-fixed pb-0.5 font-bold shadow-[0_0_10px_#00fbfb]' : ''}`}
                    >
                        Home
                    </NavLink>

                    <NavLink 
                        to="/skills" 
                        onMouseEnter={handleHover}
                        onClick={handleClick}
                        className={({ isActive }) => `text-on-surface-variant hover:text-secondary-fixed transition-colors ${isActive ? 'text-secondary-fixed border-b-2 border-secondary-fixed pb-0.5 font-bold shadow-[0_0_10px_#00fbfb]' : ''}`}
                    >
                        Skills
                    </NavLink>

                    <NavLink 
                        to="/projects" 
                        onMouseEnter={handleHover}
                        onClick={handleClick}
                        className={({ isActive }) => `text-on-surface-variant hover:text-secondary-fixed transition-colors ${isActive ? 'text-secondary-fixed border-b-2 border-secondary-fixed pb-0.5 font-bold shadow-[0_0_10px_#00fbfb]' : ''}`}
                    >
                        Projects
                    </NavLink>

                    <NavLink 
                        to="/contact" 
                        onMouseEnter={handleHover}
                        onClick={handleClick}
                        className={({ isActive }) => `text-on-surface-variant hover:text-secondary-fixed transition-colors ${isActive ? 'text-secondary-fixed border-b-2 border-secondary-fixed pb-0.5 font-bold shadow-[0_0_10px_#00fbfb]' : ''}`}
                    >
                        Contact
                    </NavLink>
                </nav>

                {/* Utility Controls */}
                <div className="flex items-center gap-3">
                    
                    {/* GTA Vice City Radio Music Button */}
                    <button 
                        onClick={toggleRadio}
                        onMouseEnter={handleHover}
                        title="GTA Vice City Synthwave Radio" 
                        className={`p-2 border rounded transition-all flex items-center gap-1.5 ${radioPlaying ? 'border-primary text-primary bg-primary/20 shadow-[0_0_15px_#ff00ff] animate-pulse' : 'border-gray-500 text-gray-400'}`}
                    >
                        <span className="material-symbols-outlined text-sm">radio</span>
                        <span className="font-label-caps text-xs hidden lg:inline">{radioPlaying ? 'VCPD 105.7 FM' : 'RADIO'}</span>
                    </button>

                    {/* Cinematic Video Tour Button */}
                    <button 
                        onClick={toggleCinematic}
                        onMouseEnter={handleHover}
                        title="Cinematic Video Tour" 
                        className={`p-2 border rounded transition-all flex items-center gap-1.5 ${cinematicMode ? 'border-secondary-fixed text-secondary-fixed bg-secondary-fixed/20 shadow-[0_0_15px_#00fbfb]' : 'border-tertiary text-tertiary'}`}
                    >
                        <span className="material-symbols-outlined text-sm">{cinematicMode ? 'pause_circle' : 'play_circle'}</span>
                        <span className="font-label-caps text-xs hidden lg:inline">{cinematicMode ? 'TOUR PLAYING' : 'VIDEO TOUR'}</span>
                    </button>

                    <button 
                        onClick={toggleCrt}
                        onMouseEnter={handleHover}
                        title="Toggle CRT Scanlines" 
                        className={`p-2 border rounded transition-all ${crtEnabled ? 'border-secondary-fixed text-secondary-fixed bg-secondary-fixed/10' : 'border-gray-500 text-gray-400'}`}
                    >
                        <span className="material-symbols-outlined text-sm">tv</span>
                    </button>

                    <button 
                        onClick={toggleSound}
                        onMouseEnter={handleHover}
                        title="Toggle Sound Effects" 
                        className={`p-2 border rounded transition-all ${soundEnabled ? 'border-primary text-primary bg-primary/10' : 'border-gray-500 text-gray-400'}`}
                    >
                        <span className="material-symbols-outlined text-sm">{soundEnabled ? 'volume_up' : 'volume_off'}</span>
                    </button>
                </div>
            </div>
        </header>
    );
};
