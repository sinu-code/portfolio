import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { PortraitFrame } from '../components/PortraitFrame';

/* ── Road Signpost Component ─────────────────────────────────────── */
const RoadSignpost = () => {
    const navigate = useNavigate();
    const { playBeep } = useTheme();
    const [hovered, setHovered] = useState(null); // 'skills' | 'projects' | null

    const handleNav = (path, freq) => {
        playBeep(freq, 0.12);
        setTimeout(() => navigate(path), 250);
    };

    return (
        <div className="relative flex flex-col items-center select-none" style={{ minHeight: 320 }}>

            {/* Pole glow ambient */}
            <div className="absolute left-1/2 -translate-x-1/2 w-8 h-full rounded-full blur-xl opacity-40 pointer-events-none"
                style={{ background: 'linear-gradient(180deg,#ff00ff,#00fbfb)' }} />

            {/* Top sign — SKILLS / INTEL (left-pointing arrow sign) */}
            <div
                className={`sign-left relative cursor-pointer mb-2 transition-all duration-300 ${hovered === 'skills' ? 'scale-110' : 'scale-100'}`}
                onMouseEnter={() => setHovered('skills')}
                onMouseLeave={() => setHovered(null)}
                onClick={() => handleNav('/skills', 650)}
                style={{
                    alignSelf: 'flex-start',
                    marginLeft: '-20px',
                    animation: 'signSwingLeft 4s ease-in-out infinite',
                }}
            >
                {/* Arrow sign pointing LEFT */}
                <div
                    className="relative flex items-center"
                    style={{
                        background: hovered === 'skills'
                            ? 'linear-gradient(90deg,#00fbfb,#007d7d)'
                            : 'linear-gradient(90deg,#005252,#002f2f)',
                        border: `3px solid ${hovered === 'skills' ? '#00fbfb' : '#00fbfb88'}`,
                        borderRadius: '6px 6px 6px 6px',
                        boxShadow: hovered === 'skills'
                            ? '0 0 30px #00fbfb, 0 0 10px #00fbfb inset'
                            : '0 0 12px rgba(0,251,251,0.3)',
                        padding: '14px 20px 14px 30px',
                        clipPath: 'polygon(22px 0%, 100% 0%, 100% 100%, 22px 100%, 0% 50%)',
                        minWidth: 220,
                        transition: 'all 0.3s ease',
                    }}
                >
                    <span className="material-symbols-outlined text-[#00fbfb] text-2xl mr-3" style={{ textShadow: '0 0 10px #00fbfb' }}>
                        analytics
                    </span>
                    <div className="flex flex-col">
                        <span className="font-label-caps font-black text-[#00fbfb] uppercase tracking-widest text-sm" style={{ textShadow: '0 0 8px #00fbfb' }}>
                            ARSENAL &amp; INTEL
                        </span>
                        <span className="font-mono text-[10px] text-[#00fbfb]/60 uppercase tracking-widest">
                            Technical Stack →
                        </span>
                    </div>
                    {/* Neon bulbs */}
                    {[0, 1, 2].map(i => (
                        <span key={i} className="absolute rounded-full animate-pulse"
                            style={{
                                width: 6, height: 6,
                                background: '#00fbfb',
                                boxShadow: '0 0 8px #00fbfb',
                                top: 6 + i * 10,
                                right: 8,
                                animationDelay: `${i * 0.3}s`
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Pole body */}
            <div className="relative z-10 flex flex-col items-center">
                {/* Top cap */}
                <div className="w-6 h-6 rounded-full border-4 border-[#ff00ff] bg-[#ff00ff]"
                    style={{ boxShadow: '0 0 20px #ff00ff, 0 0 40px #ff00ff' }} />
                {/* Pole segment top */}
                <div className="w-4 relative" style={{ height: 48 }}>
                    <div className="absolute inset-x-0 inset-y-0"
                        style={{
                            background: 'linear-gradient(90deg,#3d0055,#ff00ff44,#3d0055)',
                            border: '2px solid #ff00ff55',
                        }} />
                    {/* Reflective stripe */}
                    <div className="absolute inset-y-0 left-1/2 w-px bg-white/20" />
                </div>
            </div>

            {/* Street plate in the middle */}
            <div className="z-20 bg-[#1a0030] border-2 border-[#ff00ff] rounded px-5 py-2 shadow-[0_0_25px_#ff00ff] -my-1"
                style={{ animation: 'pulseGlowPink 2s ease-in-out infinite' }}
            >
                <span className="font-mono text-xs text-[#ff00ff] tracking-[0.4em] uppercase" style={{ textShadow: '0 0 10px #ff00ff' }}>
                    V·CITY·GRID
                </span>
            </div>

            {/* Pole body bottom */}
            <div className="relative z-10 flex flex-col items-center">
                <div className="w-4 relative" style={{ height: 48 }}>
                    <div className="absolute inset-x-0 inset-y-0"
                        style={{
                            background: 'linear-gradient(90deg,#3d0055,#ff00ff44,#3d0055)',
                            border: '2px solid #ff00ff55',
                        }} />
                    <div className="absolute inset-y-0 left-1/2 w-px bg-white/20" />
                </div>
            </div>

            {/* Bottom sign — PROJECTS (right-pointing arrow sign) */}
            <div
                className={`relative cursor-pointer mt-2 transition-all duration-300 ${hovered === 'projects' ? 'scale-110' : 'scale-100'}`}
                onMouseEnter={() => setHovered('projects')}
                onMouseLeave={() => setHovered(null)}
                onClick={() => handleNav('/projects', 700)}
                style={{
                    alignSelf: 'flex-end',
                    marginRight: '-20px',
                    animation: 'signSwingRight 5s ease-in-out infinite',
                }}
            >
                {/* Arrow sign pointing RIGHT */}
                <div
                    className="relative flex items-center"
                    style={{
                        background: hovered === 'projects'
                            ? 'linear-gradient(90deg,#810081,#ff00ff)'
                            : 'linear-gradient(90deg,#3d0058,#550080)',
                        border: `3px solid ${hovered === 'projects' ? '#ff00ff' : '#ff00ff88'}`,
                        borderRadius: '6px 6px 6px 6px',
                        boxShadow: hovered === 'projects'
                            ? '0 0 30px #ff00ff, 0 0 10px #ff00ff inset'
                            : '0 0 12px rgba(255,0,255,0.3)',
                        padding: '14px 30px 14px 20px',
                        clipPath: 'polygon(0% 0%, calc(100% - 22px) 0%, 100% 50%, calc(100% - 22px) 100%, 0% 100%)',
                        minWidth: 220,
                        transition: 'all 0.3s ease',
                    }}
                >
                    {/* Neon bulbs */}
                    {[0, 1, 2].map(i => (
                        <span key={i} className="absolute rounded-full animate-pulse"
                            style={{
                                width: 6, height: 6,
                                background: '#ff00ff',
                                boxShadow: '0 0 8px #ff00ff',
                                top: 6 + i * 10,
                                left: 8,
                                animationDelay: `${i * 0.3}s`
                            }}
                        />
                    ))}
                    <div className="flex flex-col mr-3">
                        <span className="font-label-caps font-black text-[#ffabf3] uppercase tracking-widest text-sm" style={{ textShadow: '0 0 8px #ff00ff' }}>
                            MISSIONS &amp; PROJECTS
                        </span>
                        <span className="font-mono text-[10px] text-[#ffabf3]/60 uppercase tracking-widest">
                            ← View Dossier
                        </span>
                    </div>
                    <span className="material-symbols-outlined text-[#ffabf3] text-2xl" style={{ textShadow: '0 0 10px #ff00ff' }}>
                        rocket_launch
                    </span>
                </div>
            </div>

            {/* Pole base */}
            <div className="relative z-10 flex flex-col items-center">
                <div className="w-4 relative" style={{ height: 32 }}>
                    <div className="absolute inset-x-0 inset-y-0"
                        style={{ background: 'linear-gradient(90deg,#3d0055,#ff00ff44,#3d0055)', border: '2px solid #ff00ff55' }} />
                </div>
                {/* Base plate */}
                <div className="w-12 h-3 rounded"
                    style={{
                        background: 'linear-gradient(90deg,#1a0030,#3d0058,#1a0030)',
                        border: '2px solid #ff00ff44',
                        boxShadow: '0 0 15px rgba(255,0,255,0.4)',
                    }} />
                <div className="w-20 h-2 rounded-b"
                    style={{
                        background: 'linear-gradient(90deg,#0a0015,#22003c,#0a0015)',
                        border: '1px solid #ff00ff22',
                    }} />
            </div>

            {/* Ground shadow */}
            <div className="w-32 h-3 rounded-full mt-1 opacity-50"
                style={{ background: 'radial-gradient(ellipse,rgba(255,0,255,0.4),transparent)' }} />
        </div>
    );
};

/* ── HomePage ────────────────────────────────────────────────────── */
export const HomePage = () => {
    const navigate = useNavigate();
    const { playBeep } = useTheme();
    const [entered, setEntered] = useState(false);

    useEffect(() => {
        // Trigger entrance animation
        const t = setTimeout(() => setEntered(true), 80);
        return () => clearTimeout(t);
    }, []);

    return (
        <section className="flex flex-col gap-16 py-4 crt-effect">

            {/* Hero Row */}
            <div className={`flex flex-col lg:flex-row items-center gap-12 min-h-[65vh] transition-all duration-700 ${entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

                {/* Left: Text content */}
                <div className="lg:w-1/2 flex flex-col gap-6">
                    <div className="flex items-center gap-3 text-secondary-fixed font-label-caps text-xs tracking-widest">
                        <span className="w-10 h-0.5 bg-secondary-fixed shadow-[0_0_8px_rgba(0,251,251,0.8)]" />
                        SYS.INIT // USER_AUTH: TRUE
                    </div>

                    <div className="relative">
                        <h1 className="font-headline-lg text-5xl sm:text-7xl lg:text-8xl font-black text-primary neon-text-primary uppercase leading-none tracking-tight">
                            SONU<br />KUMAR
                        </h1>
                        {/* Glitch underline */}
                        <div className="absolute -bottom-2 left-0 h-1 w-24 rounded-full bg-secondary-fixed shadow-[0_0_12px_#00fbfb]" />
                    </div>

                    <h2 className="font-headline-md text-2xl sm:text-3xl text-on-background border-l-4 border-primary-container pl-4 py-2 bg-surface-container-low/60 backdrop-blur-sm rounded-r">
                        DECODING COMPLEXITY THROUGH <span className="text-secondary-fixed font-black neon-text-secondary">DATA</span>.
                    </h2>

                    <p className="font-body-lg text-base sm:text-lg text-on-surface-variant leading-relaxed">
                        Computer Science &amp; Engineering Student at <strong className="text-on-surface">Poornima College of Engineering and Technology</strong>. Analyzing the digital grid to extract actionable intelligence, build robust algorithms, and design high-impact visual dashboards.
                    </p>

                    {/* Stats row */}
                    <div className={`flex gap-6 mt-2 transition-all duration-700 delay-300 ${entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        {[
                            { val: '5+', label: 'Tools', color: '#00fbfb' },
                            { val: '04', label: 'Missions', color: '#ff00ff' },
                            { val: 'V2.0', label: 'Grid Spec', color: '#ffb77d' },
                        ].map(({ val, label, color }) => (
                            <div key={label} className="flex flex-col items-center bg-surface-container-low/60 rounded-xl p-3 px-5 border border-white/10 backdrop-blur-sm">
                                <span className="font-headline-lg text-2xl font-black" style={{ color, textShadow: `0 0 12px ${color}` }}>{val}</span>
                                <span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Portrait */}
                <div className={`lg:w-1/2 w-full transition-all duration-700 delay-200 ${entered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                    <PortraitFrame />
                </div>
            </div>

            {/* Agent Profile Dossier */}
            <div className={`bg-surface-container-high/60 backdrop-blur-lg p-8 sm:p-12 rounded-xl border-t-4 border-l-4 border-tertiary shadow-[15px_15px_0px_rgba(219,120,0,0.3)] flex flex-col gap-4 pulse-glow transition-all duration-700 delay-400 ${entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                <h3 className="font-headline-md text-2xl sm:text-3xl text-tertiary uppercase neon-text-orange">Agent Profile Dossier</h3>
                <p className="font-body-lg text-base sm:text-lg text-secondary-fixed font-semibold tracking-wide italic">
                    "Born in the static between signal and noise, this agent hunts patterns where others see chaos."
                </p>
                <p className="font-body-lg text-base sm:text-lg text-on-surface leading-relaxed">
                    Navigating the digital neon streets, transforming raw data into high-octane insights. Driven by curiosity and fueled by complex algorithms, the objective is always clear: decode the noise, visualize the truth, and execute precision analysis in a fast-paced environment.
                </p>
            </div>

            {/* ── Road Signpost Navigation ─────────────────────── */}
            <div className={`flex flex-col items-center gap-6 py-8 transition-all duration-700 delay-500 ${entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {/* Section header */}
                <div className="text-center flex flex-col gap-2 mb-4">
                    <div className="flex items-center gap-3 justify-center text-[#dcbed4]/60 font-mono text-xs tracking-widest uppercase">
                        <span className="w-12 h-px bg-current" />
                        CHOOSE YOUR NEXT BLOCK
                        <span className="w-12 h-px bg-current" />
                    </div>
                    <p className="font-label-caps text-xs text-on-surface-variant uppercase tracking-widest">Where do you want to walk next?</p>
                </div>

                {/* The signpost */}
                <RoadSignpost />
            </div>

            {/* Walk Down button */}
            <div className={`flex justify-center mb-8 transition-all duration-700 delay-600 ${entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <button
                    onClick={() => { playBeep(700, 0.1); navigate('/skills'); }}
                    className="btn-synth px-8 py-4 text-base uppercase tracking-widest rounded-xl flex items-center gap-3 animate-flicker-pink shadow-[0_0_30px_#ff00ff]"
                >
                    <span>WALK DOWN TO NEXT STREET</span>
                    <span className="material-symbols-outlined text-xl animate-bounce">keyboard_double_arrow_right</span>
                </button>
            </div>

        </section>
    );
};
