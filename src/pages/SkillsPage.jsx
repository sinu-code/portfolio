import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export const SkillsPage = () => {
    const navigate = useNavigate();
    const { playBeep } = useTheme();

    const handleInspect = () => {
        playBeep(650);
        navigate('/projects');
    };

    return (
        <section className="flex flex-col gap-12 py-4 crt-effect">

            {/* Header Title */}
            <header className="mb-8 text-center md:text-left">
                <h1 className="font-headline-lg text-4xl sm:text-7xl font-black text-secondary-fixed italic uppercase neon-text-secondary mb-4">
                    ARSENAL &amp; INTEL
                </h1>
                <p className="font-body-lg text-lg sm:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
                    These are the tools that power the neon lit streets of data and logic.
                </p>
            </header>

            {/* Street Walk Layout */}
            <div className="flex flex-col gap-12 md:gap-20 relative py-8">

                {/* Center Line (Street Marker) */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary-container to-transparent opacity-60 -translate-x-1/2"></div>

                {/* Skill 1: Coding (Left Side) */}
                <div className="flex flex-col md:flex-row items-center justify-start w-full relative">
                    <div className="w-full md:w-5/12 bg-surface-container-high/80 border-2 border-secondary-fixed p-8 rounded-xl relative overflow-hidden neon-border-cyan animate-flicker-cyan transition-all duration-300 hover:scale-[1.02] group">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,251,251,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,251,251,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
                        <h2 className="font-headline-md text-3xl text-primary neon-text-primary mb-2 uppercase">CODING</h2>
                        <p className="font-body-md text-sm text-on-surface-variant mb-6 leading-relaxed">
                            Data structures, algorithms, problem-solving, and core programming logic.
                        </p>
                        <div className="flex gap-2 flex-wrap">
                            <span className="px-4 py-1.5 bg-secondary-fixed text-black font-label-caps text-xs font-bold rounded-full shadow-[0_0_10px_#00fbfb]">DSA IN C++</span>
                            <span className="px-4 py-1.5 bg-tertiary text-black font-label-caps text-xs font-bold rounded-full shadow-[0_0_10px_#ffb77d]">JAVA</span>
                            <span className="px-4 py-1.5 bg-primary text-black font-label-caps text-xs font-bold rounded-full shadow-[0_0_10px_#ffabf3]">PYTHON</span>
                            <span className="px-4 py-1.5 bg-primary-container text-white font-label-caps text-xs font-bold rounded-full shadow-[0_0_10px_#ff00ff]">WEB-DEVS</span>
                        </div>
                    </div>

                    <div className="hidden md:flex w-2/12 justify-center items-center relative">
                        <span className="material-symbols-outlined text-secondary-fixed text-4xl neon-text-secondary bg-[#22003c] p-3 rounded-full border-2 border-secondary-fixed z-10 animate-pulse">terminal</span>
                    </div>

                    <div className="hidden md:block w-5/12"></div>
                </div>

                {/* Skill 2: Python (Right Side) */}
                <div className="flex flex-col md:flex-row-reverse items-center justify-start w-full relative">
                    <div className="w-full md:w-5/12 bg-surface-container-high/80 border-2 border-primary p-8 rounded-xl relative overflow-hidden neon-border-pink animate-flicker-pink transition-all duration-300 hover:scale-[1.02] group">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
                        <h2 className="font-headline-md text-3xl text-secondary-fixed neon-text-secondary mb-2 uppercase">PYTHON</h2>
                        <p className="font-body-md text-sm text-on-surface-variant mb-6 leading-relaxed">
                            The ultimate scripting weapon. Data analysis, machine learning algorithms, and automation scripts.
                        </p>
                        <div className="flex gap-2 flex-wrap">
                            <span className="px-4 py-1.5 bg-primary text-black font-label-caps text-xs font-bold rounded-full shadow-[0_0_10px_#ffabf3]">PANDAS</span>
                            <span className="px-4 py-1.5 bg-tertiary text-black font-label-caps text-xs font-bold rounded-full shadow-[0_0_10px_#ffb77d]">SCRIPTS</span>
                            <span className="px-4 py-1.5 bg-secondary-fixed text-black font-label-caps text-xs font-bold rounded-full shadow-[0_0_10px_#00fbfb]">NUMPY</span>
                            <span className="px-4 py-1.5 bg-primary text-black font-label-caps text-xs font-bold rounded-full shadow-[0_0_10px_#ffabf3]">MATPLOTLIB</span>
                            <span className="px-4 py-1.5 bg-tertiary text-black font-label-caps text-xs font-bold rounded-full shadow-[0_0_10px_#ffb77d]">SCIKIT-LEARN</span>
                            <span className="px-4 py-1.5 bg-secondary-fixed text-black font-label-caps text-xs font-bold rounded-full shadow-[0_0_10px_#00fbfb]">SEABORN</span>
                        </div>
                    </div>

                    <div className="hidden md:flex w-2/12 justify-center items-center relative">
                        <span className="material-symbols-outlined text-primary text-4xl neon-text-primary bg-[#22003c] p-3 rounded-full border-2 border-primary z-10 animate-pulse">code</span>
                    </div>

                    <div className="hidden md:block w-5/12"></div>
                </div>

                {/* Skill 3: Power BI (Left Side) */}
                <div className="flex flex-col md:flex-row items-center justify-start w-full relative">
                    <div className="w-full md:w-5/12 bg-surface-container-high/80 border-2 border-secondary-fixed p-8 rounded-xl relative overflow-hidden neon-border-cyan animate-flicker-cyan transition-all duration-300 hover:scale-[1.02] group">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,251,251,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,251,251,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
                        <h2 className="font-headline-md text-3xl text-primary neon-text-primary mb-2 uppercase">POWER BI</h2>
                        <p className="font-body-md text-sm text-on-surface-variant mb-6 leading-relaxed">
                            Transforming raw data into interactive, neon-lit dashboards. DAX mastery and data modeling.
                        </p>
                        <div className="flex gap-2 flex-wrap">
                            <span className="px-4 py-1.5 bg-secondary-fixed text-black font-label-caps text-xs font-bold rounded-full shadow-[0_0_10px_#00fbfb]">DAX</span>
                            <span className="px-4 py-1.5 bg-primary-container text-white font-label-caps text-xs font-bold rounded-full shadow-[0_0_10px_#ff00ff]">DASHBOARDS</span>
                            <span className="px-4 py-1.5 bg-tertiary text-black font-label-caps text-xs font-bold rounded-full shadow-[0_0_10px_#ffb77d]">ETL</span>
                        </div>
                    </div>

                    <div className="hidden md:flex w-2/12 justify-center items-center relative">
                        <span className="material-symbols-outlined text-secondary-fixed text-4xl neon-text-secondary bg-[#22003c] p-3 rounded-full border-2 border-secondary-fixed z-10 animate-pulse">bar_chart</span>
                    </div>

                    <div className="hidden md:block w-5/12"></div>
                </div>

                {/* Skill 4: SQL (Right Side) */}
                <div className="flex flex-col md:flex-row-reverse items-center justify-start w-full relative">
                    <div className="w-full md:w-5/12 bg-surface-container-high/80 border-2 border-primary p-8 rounded-xl relative overflow-hidden neon-border-pink animate-flicker-pink transition-all duration-300 hover:scale-[1.02] group">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
                        <h2 className="font-headline-md text-3xl text-secondary-fixed neon-text-secondary mb-2 uppercase">SQL</h2>
                        <p className="font-body-md text-sm text-on-surface-variant mb-6 leading-relaxed">
                            Querying the mainframe. Extracting, manipulating, and managing relational databases with precision.
                        </p>
                        <div className="flex gap-2 flex-wrap">
                            <span className="px-4 py-1.5 bg-secondary-fixed text-black font-label-caps text-xs font-bold rounded-full shadow-[0_0_10px_#00fbfb]">QUERIES</span>
                            <span className="px-4 py-1.5 bg-primary-container text-white font-label-caps text-xs font-bold rounded-full shadow-[0_0_10px_#ff00ff]">DATABASES</span>
                            <span className="px-4 py-1.5 bg-tertiary text-black font-label-caps text-xs font-bold rounded-full shadow-[0_0_10px_#ffb77d]">OPTIMIZATION</span>
                        </div>
                    </div>

                    <div className="hidden md:flex w-2/12 justify-center items-center relative">
                        <span className="material-symbols-outlined text-primary text-4xl neon-text-primary bg-[#22003c] p-3 rounded-full border-2 border-primary z-10 animate-pulse">database</span>
                    </div>

                    <div className="hidden md:block w-5/12"></div>
                </div>

                {/* Skill 5: Deployment & Tools (Left Side) */}
                <div className="flex flex-col md:flex-row items-center justify-start w-full relative">
                    <div className="w-full md:w-5/12 bg-surface-container-high/80 border-2 border-secondary-fixed p-8 rounded-xl relative overflow-hidden neon-border-cyan animate-flicker-cyan transition-all duration-300 hover:scale-[1.02] group">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,251,251,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,251,251,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
                        <h2 className="font-headline-md text-3xl text-primary neon-text-primary mb-2 uppercase">DEPLOYMENT &amp; TOOLS</h2>
                        <p className="font-body-md text-sm text-on-surface-variant mb-6 leading-relaxed">
                            Deploying live web applications, managing cloud hosting, version control workflows, and developer tooling.
                        </p>
                        <div className="flex gap-2 flex-wrap">
                            <span className="px-4 py-1.5 bg-secondary-fixed text-black font-label-caps text-xs font-bold rounded-full shadow-[0_0_10px_#00fbfb]">RENDER</span>
                            <span className="px-4 py-1.5 bg-primary-container text-white font-label-caps text-xs font-bold rounded-full shadow-[0_0_10px_#ff00ff]">WEB HOSTING</span>
                            <span className="px-4 py-1.5 bg-tertiary text-black font-label-caps text-xs font-bold rounded-full shadow-[0_0_10px_#ffb77d]">GIT &amp; GITHUB</span>
                            <span className="px-4 py-1.5 bg-primary text-black font-label-caps text-xs font-bold rounded-full shadow-[0_0_10px_#ffabf3]">HTML5 / JS</span>
                            <span className="px-4 py-1.5 bg-secondary-fixed text-black font-label-caps text-xs font-bold rounded-full shadow-[0_0_10px_#00fbfb]">VS CODE</span>
                        </div>
                    </div>

                    <div className="hidden md:flex w-2/12 justify-center items-center relative">
                        <span className="material-symbols-outlined text-secondary-fixed text-4xl neon-text-secondary bg-[#22003c] p-3 rounded-full border-2 border-secondary-fixed z-10 animate-pulse">cloud_upload</span>
                    </div>

                    <div className="hidden md:block w-5/12"></div>
                </div>

            </div>

            {/* Bottom CTA Banner */}
            <div className="text-center mt-6">
                <button
                    onClick={handleInspect}
                    className="btn-synth px-8 py-4 text-sm uppercase tracking-widest rounded-lg flex items-center gap-3 mx-auto animate-flicker-pink"
                >
                    <span>INSPECT MISSIONS & PROJECTS</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
            </div>

        </section>
    );
};
