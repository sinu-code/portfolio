import React, { useEffect, useState } from 'react';

export const CustomCursor = () => {
    const [pos, setPos] = useState({ x: -100, y: -100 });
    const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPos({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.closest('a, button, input, textarea, [data-interactive]')) {
                setHovered(true);
            } else {
                setHovered(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    // Smooth lerp follow for the ring
    useEffect(() => {
        let animId;
        const lerp = () => {
            setRingPos((prev) => ({
                x: prev.x + (pos.x - prev.x) * 0.25,
                y: prev.y + (pos.y - prev.y) * 0.25
            }));
            animId = requestAnimationFrame(lerp);
        };
        animId = requestAnimationFrame(lerp);
        return () => cancelAnimationFrame(animId);
    }, [pos]);

    return (
        <div className="hidden lg:block pointer-events-none fixed inset-0 z-[999]">
            {/* Outer Glowing Ring */}
            <div 
                className={`fixed rounded-full border-2 border-[#00fbfb] shadow-[0_0_15px_#00fbfb] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ${hovered ? 'w-14 h-14 border-[#ff00ff] shadow-[0_0_20px_#ff00ff] bg-[#ff00ff]/10' : 'w-9 h-9'}`}
                style={{ left: `${ringPos.x}px`, top: `${ringPos.y}px` }}
            ></div>

            {/* Inner Pointer Dot */}
            <div 
                className="fixed w-2 h-2 rounded-full bg-[#ff00ff] shadow-[0_0_8px_#ff00ff] -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
            ></div>
        </div>
    );
};
