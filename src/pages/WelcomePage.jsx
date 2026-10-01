import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export const WelcomePage = () => {
    const navigate = useNavigate();
    const { playBeep, soundEnabled, toggleSound, radioPlaying, toggleRadio } = useTheme();
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [currentTime, setCurrentTime] = useState('');
    const [exiting, setExiting] = useState(false);
    const [activeTab, setActiveTab] = useState('welcome');
    const [bootStep, setBootStep] = useState(0);

    // Live Clock & Boot Sequence
    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString('en-US', { hour12: false }));
        };
        updateClock();
        const timer = setInterval(updateClock, 1000);

        const boot1 = setTimeout(() => setBootStep(1), 300);
        const boot2 = setTimeout(() => setBootStep(2), 700);
        const boot3 = setTimeout(() => setBootStep(3), 1100);

        return () => {
            clearInterval(timer);
            clearTimeout(boot1);
            clearTimeout(boot2);
            clearTimeout(boot3);
        };
    }, []);

    // Interactive 3D Perspective on Mouse Move
    const handleMouseMove = (e) => {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth - 0.5) * 16;
        const y = (e.clientY / innerHeight - 0.5) * 16;
        setMousePos({ x, y });
    };

    const handleNavigate = (path, soundFreq = 750) => {
        playBeep(soundFreq, 0.15);
        setExiting(true);
        setTimeout(() => navigate(path), 650);
    };

    // Keyboard Shortcuts
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.code === 'Space' || e.code === 'Enter') {
                handleNavigate('/home', 850);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div
            onMouseMove={handleMouseMove}
            className={`fixed inset-0 z-50 flex flex-col justify-between bg-[#0e001a] text-[#f2daff] overflow-hidden select-none transition-all duration-700 ${
                exiting ? 'opacity-0 scale-105 filter blur-sm' : 'opacity-100 scale-100'
            }`}
            style={{
                fontFamily: "'Space Grotesk', 'Montserrat', sans-serif"
            }}
        >
            {/* Ambient Background Gradient Waves & Grid */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Glowing Sunset Sun on Horizon */}
                <div 
                    className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-t-full bg-gradient-to-t from-[#ff00ff] via-[#ff5500] to-transparent opacity-40 blur-2xl"
                    style={{
                        transform: `translate(calc(-50% + ${mousePos.x * 0.5}px), ${mousePos.y * 0.5}px)`
                    }}
                />
                
                {/* 3D Synthwave Perspective Grid */}
                <div 
                    className="absolute inset-x-0 bottom-0 h-[50vh] origin-bottom"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(0, 251, 251, 0.25) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 0, 255, 0.25) 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px',
                        transform: 'perspective(500px) rotateX(60deg) translateY(50px)',
                        maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 40%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 40%, transparent 100%)'
                    }}
                />

                {/* Vignette & Scanlines */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(14,0,26,0.85)_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,0.3)_50%)] bg-[size:100%_4px] opacity-40" />
            </div>

            {/* Top HUD Status Bar */}
            <header className="relative z-20 w-full px-6 sm:px-12 py-5 flex justify-between items-center border-b border-[#00fbfb]/30 bg-[#160029]/80 backdrop-blur-md">
                <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-[#00fbfb] shadow-[0_0_12px_#00fbfb] animate-ping" />
                    <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.25em] text-[#00fbfb] uppercase">
                        SONU.OS // MAINFRAME V2.6
                    </span>
                    <span className="hidden md:inline px-2.5 py-0.5 rounded border border-[#ff00ff]/40 bg-[#ff00ff]/10 text-[10px] font-mono text-[#ffabf3] uppercase">
                        SECURITY CLEARANCE: LEVEL 5
                    </span>
                </div>

                <div className="flex items-center gap-6 font-mono text-xs">
                    <div className="hidden sm:flex items-center gap-2 text-[#dcbed4]/80">
                        <span className="material-symbols-outlined text-sm text-[#00fbfb]">schedule</span>
                        <span className="tracking-widest">{currentTime || '00:00:00'} VCPD</span>
                    </div>

                    <button
                        onClick={toggleSound}
                        onMouseEnter={() => playBeep(880, 0.02)}
                        className={`p-1.5 px-3 rounded border text-xs flex items-center gap-1.5 transition-all ${
                            soundEnabled
                                ? 'border-[#00fbfb] text-[#00fbfb] bg-[#00fbfb]/10 shadow-[0_0_10px_rgba(0,251,251,0.3)]'
                                : 'border-gray-600 text-gray-500'
                        }`}
                    >
                        <span className="material-symbols-outlined text-sm">
                            {soundEnabled ? 'volume_up' : 'volume_off'}
                        </span>
                        <span className="hidden md:inline">{soundEnabled ? 'SFX ON' : 'MUTED'}</span>
                    </button>
                </div>
            </header>

            {/* Main Interactive Hologram Stage */}
            <main className="relative z-20 flex-grow flex items-center justify-center px-4 py-8">
                <div
                    className="w-full max-w-4xl relative rounded-3xl overflow-hidden border-2 border-[#ff00ff]/50 bg-[#120022]/90 backdrop-blur-2xl shadow-[0_0_80px_rgba(255,0,255,0.35),0_0_30px_rgba(0,251,251,0.25)] transition-transform duration-300"
                    style={{
                        transform: `perspective(1000px) rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`
                    }}
                >
                    {/* Top SMPTE Arcade Color Strip */}
                    <div className="w-full h-2.5 flex">
                        {['#00fbfb', '#ff00ff', '#ffb77d', '#00dddd', '#ffabf3', '#ffffff', '#22003c'].map((c, i) => (
                            <div key={i} className="flex-1" style={{ backgroundColor: c }} />
                        ))}
                    </div>

                    <div className="p-8 sm:p-14 flex flex-col items-center text-center gap-8">
                        {/* Status Badge */}
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#00fbfb]/50 bg-[#00fbfb]/10 shadow-[0_0_20px_rgba(0,251,251,0.2)] animate-pulse">
                            <span className="w-2 h-2 rounded-full bg-[#00fbfb] shadow-[0_0_8px_#00fbfb]" />
                            <span className="font-mono text-xs text-[#00fbfb] tracking-[0.2em] uppercase font-semibold">
                                // NEON DATA ARCHITECT // PORTFOLIO 2026
                            </span>
                        </div>

                        {/* Title Display */}
                        <div className="flex flex-col gap-2">
                            <h1 
                                className="font-black italic uppercase tracking-tighter leading-none text-5xl sm:text-7xl md:text-8xl drop-shadow-[0_0_25px_rgba(255,0,255,0.8)]"
                                style={{
                                    fontFamily: "'Bricolage Grotesque', 'Space Grotesk', sans-serif",
                                    background: 'linear-gradient(135deg, #ffffff 0%, #ffabf3 35%, #ff00ff 70%, #00fbfb 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}
                            >
                                SONU KUMAR
                            </h1>
                            <p className="font-mono text-sm sm:text-base text-[#00fbfb] tracking-[0.3em] uppercase drop-shadow-[0_0_8px_rgba(0,251,251,0.6)]">
                                DATA ANALYST &bull; SOFTWARE ENGINEER &bull; PROBLEM SOLVER
                            </p>
                        </div>

                        {/* Quote / Subheading Dossier */}
                        <div className="max-w-2xl px-6 py-4 rounded-xl border border-[#ff00ff]/30 bg-[#1e0038]/60 shadow-[inset_0_0_20px_rgba(255,0,255,0.15)]">
                            <p className="font-mono text-xs sm:text-sm text-[#f2daff]/90 italic leading-relaxed">
                                "Born in the static between signal and noise, this agent hunts patterns where others see chaos."
                            </p>
                        </div>

                        {/* Equalizer Frequency Bars Animation */}
                        <div className="flex items-center gap-1.5 h-6">
                            {[18, 28, 14, 32, 22, 12, 30, 24, 16, 26, 34, 20, 15, 29].map((height, i) => (
                                <div
                                    key={i}
                                    className="w-1 rounded-full bg-gradient-to-t from-[#ff00ff] to-[#00fbfb] transition-all duration-300"
                                    style={{
                                        height: `${height}px`,
                                        animation: `pulse ${0.6 + (i % 5) * 0.2}s ease-in-out infinite alternate`
                                    }}
                                />
                            ))}
                        </div>

                        {/* Direct Access Navigation Buttons */}
                        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 mt-2">
                            {/* Primary Enter Button */}
                            <button
                                onClick={() => handleNavigate('/home', 900)}
                                onMouseEnter={() => playBeep(700, 0.03)}
                                className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-gradient-to-r from-[#ff00ff] via-[#ff55bb] to-[#00fbfb] text-black font-black text-base sm:text-lg tracking-widest uppercase shadow-[0_0_35px_rgba(255,0,255,0.6)] hover:shadow-[0_0_55px_rgba(0,251,251,0.9)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group"
                            >
                                <span>ENTER MAINFRAME</span>
                                <span className="material-symbols-outlined text-2xl group-hover:translate-x-1.5 transition-transform">
                                    arrow_forward
                                </span>
                            </button>

                            {/* Secondary Quick Jump */}
                            <button
                                onClick={() => handleNavigate('/skills', 650)}
                                onMouseEnter={() => playBeep(600, 0.03)}
                                className="w-full sm:w-auto px-8 py-5 rounded-2xl border-2 border-[#00fbfb] text-[#00fbfb] bg-[#00fbfb]/10 font-bold text-sm tracking-widest uppercase hover:bg-[#00fbfb] hover:text-black shadow-[0_0_20px_rgba(0,251,251,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <span className="material-symbols-outlined text-xl">analytics</span>
                                <span>VIEW ARSENAL</span>
                            </button>

                            <button
                                onClick={() => handleNavigate('/projects', 550)}
                                onMouseEnter={() => playBeep(520, 0.03)}
                                className="w-full sm:w-auto px-8 py-5 rounded-2xl border-2 border-[#ffb77d] text-[#ffb77d] bg-[#ffb77d]/10 font-bold text-sm tracking-widest uppercase hover:bg-[#ffb77d] hover:text-black shadow-[0_0_20px_rgba(255,183,125,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <span className="material-symbols-outlined text-xl">rocket_launch</span>
                                <span>PROJECTS</span>
                            </button>
                        </div>
                    </div>

                    {/* Bottom Terminal Status Bar */}
                    <div className="px-8 py-4 bg-[#0a0015] border-t border-[#ff00ff]/30 flex flex-col sm:flex-row justify-between items-center gap-2 text-[11px] font-mono text-[#dcbed4]/70 tracking-widest">
                        <div className="flex items-center gap-3">
                            <span className="text-[#00fbfb]">SYS.STATE // READY</span>
                            <span>&bull;</span>
                            <span>BANDWIDTH: 100 GB/S</span>
                        </div>
                        <div className="text-center sm:text-right text-[#ffabf3]">
                            PRESS <span className="px-2 py-0.5 bg-white/10 rounded border border-white/20 text-white font-bold">[SPACE]</span> OR <span className="px-2 py-0.5 bg-white/10 rounded border border-white/20 text-white font-bold">[ENTER]</span> TO LAUNCH
                        </div>
                    </div>
                </div>
            </main>


            {/* Bottom Footer Info */}
<footer className="relative z-20 px-8 py-2 flex flex-col sm:flex-row justify-between items-center font-mono text-[10px] text-[#dcbed4]/50 tracking-widest border-t border-[#ff00ff]/20 bg-[#0e001a]/80 backdrop-blur-sm">
    <span>&copy; 2026 SONU KUMAR &bull; ALL RIGHTS RESERVED</span>
    <span>JAIPUR GRID &bull; POORNIMA COLLEGE OF ENGG</span>
</footer>
        </div>
    );
};

export default WelcomePage;
