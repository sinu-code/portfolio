import React, { useState } from 'react';
import profilePhoto from '../assets/profile.jpeg';

export const PortraitFrame = () => {
    const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMouseOffset({ x: x * 20, y: y * 20 });
    };

    return (
        <div 
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => { setIsHovered(false); setMouseOffset({ x: 0, y: 0 }); }}
            className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden neon-border-cyan group transition-all duration-300 cursor-pointer shadow-[0_0_35px_rgba(0,251,251,0.4)]"
            style={{
                transform: `perspective(1000px) rotateY(${mouseOffset.x}deg) rotateX(${-mouseOffset.y}deg)`
            }}
        >
            {/* Base Portrait Photo */}
            <img 
                src={profilePhoto}
                alt="Sonu Kumar" 
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 scale-105 group-hover:scale-110"
            />

            {/* Stylized Neon Line Art Layer Reveal on Hover */}
            <div 
                className="absolute inset-0 transition-opacity duration-500 pointer-events-none mix-blend-color-dodge bg-gradient-to-tr from-[#ff00ff]/40 via-transparent to-[#00fbfb]/40"
                style={{ opacity: isHovered ? 0.9 : 0.2 }}
            ></div>

            {/* Retro CRT Grid Scan Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,251,251,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>

            {/* Bottom Floating Badge & Vignette */}
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#22003c] via-[#22003c]/80 to-transparent z-20 flex justify-between items-end">
                <div>
                    <span className="font-label-caps text-xs text-[#00fbfb] uppercase tracking-widest">DOSSIER // SONU-8086</span>
                    <h3 className="font-headline-md text-2xl text-[#ffabf3] font-bold">Sonu</h3>
                </div>
                <span className="px-3 py-1 bg-[#ff00ff] text-white font-label-caps text-xs rounded-full shadow-[0_0_15px_#ff00ff] animate-pulse">
                    {isHovered ? 'REVEAL MODE' : 'ONLINE'}
                </span>
            </div>
        </div>
    );
};
