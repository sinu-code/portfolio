import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [crtEnabled, setCrtEnabled] = useState(true);
    const [soundEnabled, setSoundEnabled] = useState(true);
    const [radioPlaying, setRadioPlaying] = useState(false);
    const [cinematicMode, setCinematicMode] = useState(false);
    const [sysTime, setSysTime] = useState('');

    const audioCtxRef = useRef(null);
    const synthLoopRef = useRef(null);

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            setSysTime(now.toTimeString().split(' ')[0] + ' EST');
        };
        updateClock();
        const timer = setInterval(updateClock, 1000);
        return () => clearInterval(timer);
    }, []);

    // Web Audio Synthesizer Beeps
    const playBeep = (freq = 520, duration = 0.08) => {
        if (!soundEnabled) return;
        try {
            if (!audioCtxRef.current) {
                audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
            }
            const ctx = audioCtxRef.current;
            if (ctx.state === 'suspended') ctx.resume();

            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(freq, ctx.currentTime);
            gain.gain.setValueAtTime(0.08, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + duration);
        } catch (e) {
            // Audio uninitialized
        }
    };

    // GTA Vice City Synthwave Background Radio Synthesizer
    const startViceCityRadio = () => {
        try {
            if (!audioCtxRef.current) {
                audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
            }
            const ctx = audioCtxRef.current;
            if (ctx.state === 'suspended') ctx.resume();

            // Synthwave Bassline Frequencies (Vice City Synthwave in Am)
            const bassNotes = [110, 110, 130.81, 146.83, 110, 110, 98.00, 110];
            let noteIdx = 0;

            const playStep = () => {
                if (!audioCtxRef.current) return;
                const now = ctx.currentTime;

                // Bass synth note
                const osc = ctx.createOscillator();
                const filter = ctx.createBiquadFilter();
                const gain = ctx.createGain();

                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(bassNotes[noteIdx % bassNotes.length], now);

                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(800, now);
                filter.frequency.exponentialRampToValueAtTime(200, now + 0.18);

                gain.gain.setValueAtTime(0.12, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

                osc.connect(filter);
                filter.connect(gain);
                gain.connect(ctx.destination);

                osc.start(now);
                osc.stop(now + 0.22);

                // Synth Arpeggio High Note every 2 beats
                if (noteIdx % 2 === 0) {
                    const arp = ctx.createOscillator();
                    const arpGain = ctx.createGain();
                    arp.type = 'sine';
                    arp.frequency.setValueAtTime(bassNotes[noteIdx % bassNotes.length] * 4, now);
                    arpGain.gain.setValueAtTime(0.05, now);
                    arpGain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
                    arp.connect(arpGain);
                    arpGain.connect(ctx.destination);
                    arp.start(now);
                    arp.stop(now + 0.18);
                }

                noteIdx++;
            };

            playStep();
            synthLoopRef.current = setInterval(playStep, 220); // 136 BPM Synthwave Beat
        } catch (e) {
            console.log('Audio Context error:', e);
        }
    };

    const stopViceCityRadio = () => {
        if (synthLoopRef.current) {
            clearInterval(synthLoopRef.current);
            synthLoopRef.current = null;
        }
    };

    const toggleRadio = () => {
        if (radioPlaying) {
            stopViceCityRadio();
            setRadioPlaying(false);
        } else {
            startViceCityRadio();
            setRadioPlaying(true);
            playBeep(800, 0.1);
        }
    };

    const toggleCrt = () => {
        setCrtEnabled(!crtEnabled);
        playBeep(440, 0.05);
    };

    const toggleSound = () => {
        setSoundEnabled(!soundEnabled);
        if (!soundEnabled) playBeep(660, 0.1);
    };

    const toggleCinematic = () => {
        const nextState = !cinematicMode;
        setCinematicMode(nextState);
        playBeep(750, 0.1);
        if (nextState && !radioPlaying) {
            startViceCityRadio();
            setRadioPlaying(true);
        }
    };

    return (
        <ThemeContext.Provider value={{
            crtEnabled,
            toggleCrt,
            soundEnabled,
            toggleSound,
            radioPlaying,
            toggleRadio,
            cinematicMode,
            toggleCinematic,
            playBeep,
            sysTime
        }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
