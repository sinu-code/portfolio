import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export const SideLabels = () => {
    const location = useLocation();
    const { playBeep } = useTheme();

    const getSideData = () => {
        switch (location.pathname) {
            case '/':
                return {
                    left: { text: 'HOME', nr: '01', path: '/home' },
                    right: { text: 'SKILLS', nr: '02', path: '/skills' }
                };
            case '/home':
                return {
                    left: { text: 'WELCOME', nr: '00', path: '/' },
                    right: { text: 'SKILLS', nr: '02', path: '/skills' }
                };
            case '/skills':
                return {
                    left: { text: 'HOME', nr: '01', path: '/home' },
                    right: { text: 'PROJECTS', nr: '03', path: '/projects' }
                };
            case '/projects':
                return {
                    left: { text: 'SKILLS', nr: '02', path: '/skills' },
                    right: { text: 'CONTACT', nr: '04', path: '/contact' }
                };
            case '/contact':
                return {
                    left: { text: 'PROJECTS', nr: '03', path: '/projects' },
                    right: { text: 'HOME', nr: '01', path: '/home' }
                };
            default:
                return {
                    left: { text: 'HOME', nr: '01', path: '/home' },
                    right: { text: 'SKILLS', nr: '02', path: '/skills' }
                };
        }
    };

    const data = getSideData();

    return (
        <>
            {/* Fixed Left Navigation Side Label */}
            <NavLink 
                to={data.left.path}
                onClick={() => playBeep(600)}
                className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 items-center gap-3 font-label-caps text-xs text-[#00fbfb] hover:text-[#ff00ff] transition-all hover:scale-105 group bg-[#1a0030]/80 backdrop-blur-md px-3 py-6 rounded-full border border-[#00fbfb]/30 shadow-[0_0_15px_rgba(0,251,251,0.3)] [writing-mode:vertical-lr] rotate-180"
            >
                <span className="font-bold text-sm tracking-widest">{data.left.nr}</span>
                <span className="tracking-widest flex items-center gap-1 uppercase group-hover:drop-shadow-[0_0_8px_#ff00ff]">
                    <span>←</span>
                    <span>{data.left.text}</span>
                </span>
            </NavLink>

            {/* Fixed Right Navigation Side Label */}
            <NavLink 
                to={data.right.path}
                onClick={() => playBeep(600)}
                className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 items-center gap-3 font-label-caps text-xs text-[#00fbfb] hover:text-[#ff00ff] transition-all hover:scale-105 group bg-[#1a0030]/80 backdrop-blur-md px-3 py-6 rounded-full border border-[#00fbfb]/30 shadow-[0_0_15px_rgba(0,251,251,0.3)] [writing-mode:vertical-lr]"
            >
                <span className="font-bold text-sm tracking-widest">{data.right.nr}</span>
                <span className="tracking-widest flex items-center gap-1 uppercase group-hover:drop-shadow-[0_0_8px_#ff00ff]">
                    <span>{data.right.text}</span>
                    <span>→</span>
                </span>
            </NavLink>
        </>
    );
};
