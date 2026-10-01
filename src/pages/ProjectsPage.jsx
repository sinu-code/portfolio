import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export const ProjectsPage = () => {
    const navigate = useNavigate();
    const { playBeep, sysTime } = useTheme();
    const [notifyEmail, setNotifyEmail] = useState('');
    const [notifyStatus, setNotifyStatus] = useState(false);

    const handleNotify = (e) => {
        e.preventDefault();
        playBeep(700, 0.15);
        setNotifyStatus(true);
        setNotifyEmail('');
    };

    const upcomingMissions = [
        {
            code: "MISSION #01",
            title: "Vice City Traffic & Transit Analytics",
            tech: "Power BI & SQL",
            progress: "85%",
            status: "RENDERING",
            border: "neon-border-cyan animate-flicker-cyan",
            color: "text-secondary-fixed"
        },
        {
            code: "MISSION #02",
            title: "Neon Synth Market Predictor Engine",
            tech: "Python & Machine Learning",
            progress: "75%",
            status: "COMPILING",
            border: "neon-border-pink animate-flicker-pink",
            color: "text-primary"
        },
        {
            code: "MISSION #03",
            title: "Automated Logistics & Inventory Matrix",
            tech: "Excel VBA & SQL Database",
            progress: "90%",
            status: "OPTIMIZING",
            border: "neon-border-orange",
            color: "text-tertiary"
        },
        {
            code: "MISSION #04",
            title: "DSA Combat Sim: Algorithm Visualizer",
            tech: "C++ & Data Structures",
            progress: "70%",
            status: "COMPILING",
            border: "neon-border-cyan animate-flicker-cyan",
            color: "text-secondary-fixed"
        }
    ];

    return (
        <section className="flex flex-col gap-12 py-4 crt-effect">
            
            {/* Header Banner */}
            <div className="text-center flex flex-col items-center gap-4">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/50 bg-surface-container-low/80 backdrop-blur-md animate-flicker-pink">
                    <span className="w-3 h-3 rounded-full bg-primary-container animate-ping"></span>
                    <span className="font-label-caps text-xs text-primary tracking-widest uppercase">MAINFRAME INITIALIZATION IN PROGRESS</span>
                </div>

                <h1 className="font-headline-lg text-4xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-secondary-fixed via-primary to-tertiary neon-text-primary uppercase tracking-tight">
                    PROJECTS: LAUNCHING SOON
                </h1>

                <p className="font-body-lg text-lg sm:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
                    The grid is expanding. New digital constructs and data analytics projects are currently under rendering in the mainframe. Stand by for the next upload.
                </p>
            </div>

            {/* Launching Soon Hero Box */}
            <div className="bg-surface-container-low/90 backdrop-blur-lg p-8 sm:p-12 rounded-2xl neon-border-cyan pulse-glow flex flex-col items-center text-center gap-8 relative overflow-hidden">
                
                {/* Glowing Pulse Rings */}
                <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-secondary-fixed/20 rounded-full blur-3xl pointer-events-none"></div>

                <div className="font-mono text-xs text-secondary-fixed tracking-widest uppercase border border-secondary-fixed/50 px-4 py-1.5 rounded bg-surface-dim animate-pulse">
                    SYSTEM STATUS: 85% RENDER COMPLETE
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl">
                    <div className="bg-surface-dim/80 p-4 rounded-xl border border-primary/30 flex flex-col items-center">
                        <span className="font-headline-lg text-3xl sm:text-5xl text-primary font-bold neon-text-primary">05</span>
                        <span className="font-label-caps text-xs text-on-surface-variant uppercase mt-1">Missions</span>
                    </div>
                    <div className="bg-surface-dim/80 p-4 rounded-xl border border-secondary-fixed/30 flex flex-col items-center">
                        <span className="font-headline-lg text-3xl sm:text-5xl text-secondary-fixed font-bold neon-text-secondary">85%</span>
                        <span className="font-label-caps text-xs text-on-surface-variant uppercase mt-1">Rendered</span>
                    </div>
                    <div className="bg-surface-dim/80 p-4 rounded-xl border border-tertiary/30 flex flex-col items-center">
                        <span className="font-headline-lg text-3xl sm:text-5xl text-tertiary font-bold neon-text-orange">V2.0</span>
                        <span className="font-label-caps text-xs text-on-surface-variant uppercase mt-1">Grid Spec</span>
                    </div>
                    <div className="bg-surface-dim/80 p-4 rounded-xl border border-primary-container/30 flex flex-col items-center">
                        <span className="font-headline-lg text-3xl sm:text-5xl text-primary-container font-bold neon-text-primary">ONLINE</span>
                        <span className="font-label-caps text-xs text-on-surface-variant uppercase mt-1">Status</span>
                    </div>
                </div>

                {/* Email Notification Form */}
                <form onSubmit={handleNotify} className="w-full max-w-md flex flex-col sm:flex-row gap-3 mt-2">
                    <input 
                        type="email"
                        required
                        value={notifyEmail}
                        onChange={(e) => setNotifyEmail(e.target.value)}
                        placeholder="Enter email for launch ping..."
                        className="flex-grow bg-surface-dim border border-secondary-fixed/50 text-white rounded-lg p-3 text-sm font-label-caps focus:border-secondary-fixed focus:outline-none"
                    />
                    <button 
                        type="submit"
                        className="btn-synth px-6 py-3 text-xs uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 whitespace-nowrap animate-flicker-pink"
                    >
                        <span>NOTIFY ME</span>
                        <span className="material-symbols-outlined text-sm">notifications</span>
                    </button>
                </form>

                {notifyStatus && (
                    <div className="p-3 bg-surface-container-lowest border border-secondary-fixed rounded text-xs font-mono text-secondary-fixed shadow-[0_0_15px_rgba(0,251,251,0.4)]">
                        &gt; SIGNAL REGISTERED: YOU WILL BE NOTIFIED UPON MAINFRAME LAUNCH.
                    </div>
                )}
            </div>

            {/* Upcoming Render Pipeline Grid */}
            <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center border-b border-secondary-fixed/30 pb-2">
                    <h3 className="font-headline-md text-2xl text-secondary-fixed uppercase neon-text-secondary">Rendering Pipeline Dossier</h3>
                    <span className="font-label-caps text-xs text-primary">4 CONSTRUCTS IN QUEUE</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {upcomingMissions.map((m, idx) => (
                        <div key={idx} className={`bg-surface-container-low/80 backdrop-blur-md p-6 rounded-xl ${m.border} flex flex-col gap-4 hover:-translate-y-2 transition-all`}>
                            <div className="flex justify-between items-center text-xs font-label-caps text-on-surface-variant">
                                <span>{m.code}</span>
                                <span className={`px-2 py-0.5 rounded border border-white/20 font-bold ${m.color}`}>{m.status}</span>
                            </div>
                            <h4 className="font-headline-md text-xl text-white font-bold">{m.title}</h4>
                            <span className={`font-label-caps text-xs ${m.color}`}>{m.tech}</span>
                            <div className="w-full h-2.5 bg-surface-dim rounded-full overflow-hidden mt-auto">
                                <div className={`h-full bg-gradient-to-r from-secondary-fixed to-primary-container`} style={{ width: m.progress }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Terminal Status Console */}
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-secondary-fixed/40 font-mono text-xs sm:text-sm flex flex-col gap-2 shadow-[0_0_20px_rgba(0,251,251,0.2)]">
                <div className="flex justify-between items-center text-xs text-secondary-fixed border-b border-secondary-fixed/30 pb-2">
                    <span>SYS.MAINFRAME // RENDER ENGINE</span>
                    <span>{sysTime || '06:48:39 EST'}</span>
                </div>
                <div className="text-on-surface-variant leading-relaxed">
                    &gt; MAINFRAME: PROJECT DEPLOYMENT PIPELINE ACTIVE<br />
                    &gt; STATUS: PROJECTS SECTION SET TO "LAUNCHING SOON"<br />
                    &gt; TARGET: POORNIMA COLLEGE OF ENGINEERING AND TECHNOLOGY DATA GRID<br />
                    &gt; NEXT UPLOAD: NEURAL NETWORKS &amp; TIME SERIES PREDICTION MODELS
                </div>
            </div>

            {/* Walk Down to Next Street Button */}
            <div className="flex justify-center mt-4 mb-8">
                <button
                    onClick={() => { playBeep(700, 0.1); navigate('/contact'); }}
                    className="btn-synth px-8 py-4 text-base uppercase tracking-widest rounded-xl flex items-center gap-3 animate-flicker-pink shadow-[0_0_30px_#ff00ff]"
                >
                    <span>WALK DOWN TO NEXT STREET</span>
                    <span className="material-symbols-outlined text-xl animate-bounce">keyboard_double_arrow_right</span>
                </button>
            </div>
        </section>
    );
};
