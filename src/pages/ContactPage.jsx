import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export const ContactPage = () => {
    const navigate = useNavigate();
    const { playBeep } = useTheme();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [terminalLogs, setTerminalLogs] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        playBeep(750, 0.15);
        setTerminalLogs(`> TRANSMITTING ENCRYPTED SIGNAL...
> SENDER: ${name.toUpperCase()} <${email}>
> STATUS: ENCRYPTED & DELIVERED TO SONU KUMAR.
> RESPONSE PROTOCOL INITIATED VIA MAINFRAME.`);
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <section className="flex flex-col gap-12 py-4">
            <div className="text-center flex flex-col gap-2">
                <h1 className="font-headline-lg text-4xl sm:text-6xl text-primary font-black uppercase drop-shadow-[0_0_15px_rgba(255,0,255,0.7)]">
                    SYSTEM CONNECT
                </h1>
                <p className="font-body-lg text-lg text-on-surface-variant max-w-2xl mx-auto">
                    Transmit an encrypted message or connect with Sonu Kumar directly through the digital terminal.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                {/* Contact Form Card */}
                <form onSubmit={handleSubmit} className="bg-surface-container-low/90 backdrop-blur-md p-8 rounded-xl neon-border-pink flex flex-col gap-6">
                    <div className="flex items-center gap-3 text-primary font-label-caps text-xs uppercase tracking-widest">
                        <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                        TRANSMISSION PROTOCOL V2.0
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="sender-name" className="font-label-caps text-xs text-on-surface uppercase">Agent Identifier (Your Name)</label>
                        <input 
                            type="text" 
                            id="sender-name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required 
                            placeholder="e.g. Alex Mercer" 
                            className="bg-surface-dim border border-primary/50 text-white rounded p-3 focus:border-secondary-fixed focus:outline-none transition-all"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="sender-email" className="font-label-caps text-xs text-on-surface uppercase">Direct Frequency (Email)</label>
                        <input 
                            type="email" 
                            id="sender-email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                            placeholder="alex@grid.com" 
                            className="bg-surface-dim border border-primary/50 text-white rounded p-3 focus:border-secondary-fixed focus:outline-none transition-all"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="sender-msg" className="font-label-caps text-xs text-on-surface uppercase">Encrypted Transmission (Message)</label>
                        <textarea 
                            id="sender-msg"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows="4" 
                            required 
                            placeholder="State your mission objective..." 
                            className="bg-surface-dim border border-primary/50 text-white rounded p-3 focus:border-secondary-fixed focus:outline-none transition-all"
                        ></textarea>
                    </div>

                    <button type="submit" className="btn-synth py-4 text-sm uppercase tracking-widest rounded flex items-center justify-center gap-3">
                        <span>TRANSMIT SIGNAL</span>
                        <span className="material-symbols-outlined text-sm">send</span>
                    </button>

                    {terminalLogs && (
                        <div className="p-4 bg-surface-container-lowest border border-secondary-fixed rounded mt-2 font-mono text-xs text-secondary-fixed whitespace-pre-line shadow-[0_0_15px_rgba(0,251,251,0.3)]">
                            {terminalLogs}
                        </div>
                    )}
                </form>

                {/* Direct Info Dossier */}
                <div className="flex flex-col gap-8">
                    
                    <div className="bg-surface-container-low/90 backdrop-blur-md p-8 rounded-xl neon-border-cyan flex flex-col gap-6">
                        <h3 className="font-headline-md text-2xl text-secondary-fixed uppercase">Direct Frequencies</h3>
                        
                        <div className="flex items-center gap-4">
                            <span className="p-3 bg-surface-dim text-secondary-fixed rounded border border-secondary-fixed/40">
                                <span className="material-symbols-outlined">mail</span>
                            </span>
                            <div>
                                <span className="font-label-caps text-xs text-on-surface-variant uppercase">Email Address</span>
                                <p className="font-body-md text-white font-semibold">
                                    <a href="mailto:sonunwcc81@gmail.com" className="hover:text-secondary-fixed transition-colors">sonunwcc81@gmail.com</a>
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="p-3 bg-surface-dim text-primary rounded border border-primary/40">
                                <span className="material-symbols-outlined">school</span>
                            </span>
                            <div>
                                <span className="font-label-caps text-xs text-on-surface-variant uppercase">Institution</span>
                                <p className="font-body-md text-white font-semibold">Poornima College of Engineering & Tech</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="p-3 bg-surface-dim text-tertiary rounded border border-tertiary/40">
                                <span className="material-symbols-outlined">location_on</span>
                            </span>
                            <div>
                                <span className="font-label-caps text-xs text-on-surface-variant uppercase">Location Base</span>
                                <p className="font-body-md text-white font-semibold">Jaipur, Rajasthan, India</p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links Box */}
                    <div className="bg-surface-container-high/60 backdrop-blur-md p-8 rounded-xl border border-primary/30 flex flex-col gap-4">
                        <h4 className="font-headline-md text-xl text-primary uppercase">Network Links</h4>
                        <div className="flex flex-wrap gap-4">
                            <a href="https://github.com" target="_blank" rel="noreferrer" className="px-5 py-3 border border-secondary-fixed/50 text-secondary-fixed font-label-caps text-xs uppercase rounded hover:bg-secondary-fixed/20 transition-all flex items-center gap-2">
                                <span>GITHUB GRID</span>
                                <span className="material-symbols-outlined text-xs">code</span>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="px-5 py-3 border border-primary/50 text-primary font-label-caps text-xs uppercase rounded hover:bg-primary/20 transition-all flex items-center gap-2">
                                <span>LINKEDIN FREQUENCY</span>
                                <span className="material-symbols-outlined text-xs">link</span>
                            </a>
                        </div>
                    </div>

                </div>

            </div>
            {/* Walk Down to Next Street Button — loops back to Welcome */}
            <div className="flex justify-center mt-4 mb-8">
                <button
                    onClick={() => { playBeep(700, 0.1); navigate('/'); }}
                    className="btn-synth px-8 py-4 text-base uppercase tracking-widest rounded-xl flex items-center gap-3 animate-flicker-cyan shadow-[0_0_30px_#00fbfb]"
                >
                    <span>RETURN TO BLOCK ONE</span>
                    <span className="material-symbols-outlined text-xl animate-bounce">keyboard_double_arrow_right</span>
                </button>
            </div>
        </section>
    );
};
