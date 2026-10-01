import React from 'react';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="bg-surface-container-lowest border-t-4 border-secondary-fixed shadow-[0_-10px_30px_rgba(0,251,251,0.2)] mt-16 z-40 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="font-headline-md text-2xl italic text-primary drop-shadow-[0_0_8px_rgba(255,171,243,0.5)]">
                    SONU KUMAR
                </div>

                <nav className="flex flex-wrap justify-center gap-6 font-body-md text-sm">
                    <NavLink to="/" className="text-on-surface-variant hover:text-secondary-fixed transition-colors">Welcome</NavLink>
                    <NavLink to="/home" className="text-on-surface-variant hover:text-secondary-fixed transition-colors">Home</NavLink>
                    <NavLink to="/skills" className="text-on-surface-variant hover:text-secondary-fixed transition-colors">Skills</NavLink>
                    <NavLink to="/projects" className="text-on-surface-variant hover:text-secondary-fixed transition-colors">Projects</NavLink>
                    <NavLink to="/contact" className="text-on-surface-variant hover:text-secondary-fixed transition-colors">Contact</NavLink>
                </nav>

                <div className="font-label-caps text-xs text-tertiary opacity-80">
                    © 1986 VERCETTI ESTATE - DATA MISSION COMPLETE
                </div>
            </div>
        </footer>
    );
};
