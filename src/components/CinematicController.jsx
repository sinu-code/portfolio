import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export const CinematicController = () => {
    const { cinematicMode, toggleCinematic, radioPlaying, toggleRadio, playBeep } = useTheme();
    const navigate = useNavigate();
    const location = useLocation();

    const routes = ['/', '/home', '/skills', '/projects', '/contact'];
    const titles = [
        'SCENE 01: WELCOME TO V CITY',
        'SCENE 02: AGENT DOSSIER (SYS.INIT)',
        'SCENE 03: ARSENAL & INTEL (SKILL STREET)',
        'SCENE 04: MISSION LOG & PROJECTS',
        'SCENE 05: SYSTEM CONNECT TERMINAL'
    ];

    const [progress, setProgress] = useState(0);

    const currentIdx = routes.indexOf(location.pathname);
    const safeIdx = currentIdx >= 0 ? currentIdx : 0;

    useEffect(() => {
        if (!cinematicMode) {
            setProgress(0);
            return;
        }

        const interval = 50; // 50ms tick
        const duration = 6000; // 6 seconds per scene
        let elapsed = 0;

        const timer = setInterval(() => {
            elapsed += interval;
            const pct = Math.min((elapsed / duration) * 100, 100);
            setProgress(pct);

            if (elapsed >= duration) {
                elapsed = 0;
                const nextIdx = (safeIdx + 1) % routes.length;
                playBeep(650, 0.08);
                navigate(routes[nextIdx]);
            }
        }, interval);

        return () => clearInterval(timer);
    }, [cinematicMode, safeIdx, navigate]);

    if (!cinematicMode) return null;

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-2xl w-[90%] bg-surface-container-lowest/90 backdrop-blur-xl border-2 border-secondary-fixed p-4 rounded-xl shadow-[0_0_40px_rgba(0,251,251,0.6)] flex flex-col gap-3 font-mono text-xs crt-effect">
            
            {/* Top Bar Status */}
            <div className="flex justify-between items-center text-secondary-fixed">
                <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
                    <span className="font-bold tracking-widest uppercase">REC ● CINEMATIC VIDEO TOUR</span>
                </div>
                <span className="text-primary font-bold">{titles[safeIdx]}</span>
            </div>

            {/* Timeline Progress Bar */}
            <div className="w-full h-2 bg-surface-dim rounded-full overflow-hidden border border-secondary-fixed/40">
                <div 
                    className="h-full bg-gradient-to-r from-primary-container via-secondary-fixed to-tertiary shadow-[0_0_10px_#00fbfb] transition-all duration-75"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>

            {/* Video Controls & Radio Status */}
            <div className="flex justify-between items-center pt-1">
                <div className="flex items-center gap-3">
                    <button 
                        onClick={() => {
                            const prevIdx = (safeIdx - 1 + routes.length) % routes.length;
                            navigate(routes[prevIdx]);
                            playBeep(550);
                        }}
                        className="p-1.5 border border-secondary-fixed/50 text-secondary-fixed rounded hover:bg-secondary-fixed/20"
                        title="Previous Scene"
                    >
                        <span className="material-symbols-outlined text-sm">skip_previous</span>
                    </button>

                    <button 
                        onClick={toggleCinematic}
                        className="btn-synth px-3 py-1 text-xs uppercase tracking-widest rounded flex items-center gap-1"
                    >
                        <span className="material-symbols-outlined text-sm">pause</span>
                        <span>EXIT TOUR</span>
                    </button>

                    <button 
                        onClick={() => {
                            const nextIdx = (safeIdx + 1) % routes.length;
                            navigate(routes[nextIdx]);
                            playBeep(650);
                        }}
                        className="p-1.5 border border-secondary-fixed/50 text-secondary-fixed rounded hover:bg-secondary-fixed/20"
                        title="Next Scene"
                    >
                        <span className="material-symbols-outlined text-sm">skip_next</span>
                    </button>
                </div>

                {/* Radio Status Indicator */}
                <button 
                    onClick={toggleRadio}
                    className={`flex items-center gap-2 px-3 py-1 rounded border transition-all ${radioPlaying ? 'border-primary text-primary bg-primary/20 shadow-[0_0_10px_#ff00ff]' : 'border-gray-500 text-gray-400'}`}
                >
                    <span className="material-symbols-outlined text-sm">{radioPlaying ? 'radio' : 'radio_button_unchecked'}</span>
                    <span>{radioPlaying ? 'RADIO VCPD 105.7 FM' : 'RADIO OFF'}</span>
                </button>
            </div>
        </div>
    );
};
