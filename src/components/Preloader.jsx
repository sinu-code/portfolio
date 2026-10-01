import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [hidden, setHidden] = useState(false);
    const navigate = useNavigate();

    const finishPreloader = () => {
        setHidden(true);
        if (onComplete) onComplete();
        navigate('/home');
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        finishPreloader();
                    }, 400);
                    return 100;
                }
                return prev + Math.floor(Math.random() * 8) + 4;
            });
        }, 60);

        const handleSkip = (e) => {
            if (e.code === 'Space' || e.code === 'Escape') {
                setProgress(100);
                finishPreloader();
            }
        };

        window.addEventListener('keydown', handleSkip);
        return () => {
            clearInterval(interval);
            window.removeEventListener('keydown', handleSkip);
        };
    }, []);

    if (hidden) return null;

    return (
        <div 
            onClick={() => { setProgress(100); finishPreloader(); }}
            className="fixed inset-0 z-[100] bg-[#10001f] flex items-center justify-center cursor-pointer select-none"
        >
            <div className="w-[92vw] max-w-4xl h-[85vh] bg-black border-4 border-[#22003c] rounded-2xl relative overflow-hidden shadow-[0_0_60px_rgba(255,0,255,0.5)] flex flex-col justify-between p-4 sm:p-8">
                
                {/* SMPTE Color Bars Header */}
                <div className="w-full h-12 flex rounded overflow-hidden shadow-md">
                    <div className="flex-1 bg-white"></div>
                    <div className="flex-1 bg-yellow-400"></div>
                    <div className="flex-1 bg-cyan-400"></div>
                    <div className="flex-1 bg-green-500"></div>
                    <div className="flex-1 bg-magenta-600 bg-[#ff00ff]"></div>
                    <div className="flex-1 bg-red-600"></div>
                    <div className="flex-1 bg-blue-600"></div>
                </div>

                {/* Center CRT TV Terminal Message */}
                <div className="flex flex-col items-center text-center gap-6 my-auto z-10">
                    <div className="font-mono text-xs text-[#00fbfb] tracking-widest uppercase border border-[#00fbfb]/40 px-4 py-1 rounded bg-[#1a0030]/80 animate-pulse">
                        SYS.MAINFRAME // VACHAN JAIN PORTFOLIO
                    </div>

                    <div className="font-headline-lg text-4xl sm:text-6xl lg:text-7xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] via-[#ffabf3] to-[#00fbfb] tracking-tight uppercase leading-none drop-shadow-[0_0_25px_rgba(255,0,255,0.9)]">
                        WELCOME TO<br />V CITY
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full max-w-md bg-[#1a0030] h-4 rounded-full border border-[#ff00ff]/50 overflow-hidden relative shadow-[0_0_15px_#ff00ff]">
                        <div 
                            className="h-full bg-gradient-to-r from-[#ff00ff] to-[#00fbfb] transition-all duration-75 shadow-[0_0_15px_#00fbfb]"
                            style={{ width: `${Math.min(progress, 100)}%` }}
                        ></div>
                    </div>

                    <span className="font-mono text-2xl font-bold text-[#00fbfb] tracking-widest">
                        {Math.min(progress, 100)}%
                    </span>
                </div>

                {/* Bottom SMPTE Strip & Skip Hint */}
                <div className="flex justify-between items-end text-xs font-mono text-[#dcbed4] opacity-80 z-10">
                    <span className="hidden sm:inline">&gt; PRESS SPACE OR ESC TO ENTER ABOUT PAGE</span>
                    <span className="sm:hidden">&gt; TAP TO ENTER ABOUT PAGE</span>
                    <span>FREQLOG 105.7 MHZ</span>
                </div>

                {/* Scanlines & Grain Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,0.3)_50%)] bg-[size:100%_4px] pointer-events-none opacity-70 animate-pulse"></div>
            </div>
        </div>
    );
};
