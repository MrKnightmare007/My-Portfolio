import React from 'react';
import DecryptedText from './DecryptedText';
import { TypewriterEffectSmooth } from "../components/typewriter-effect";
import resume from "../assets/resume.pdf"

const Hero = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        console.log('Button clicked');
    };
    const words = [
        { text: "A", className: "pr-2" },
        { text: "S" },
        { text: "o" },
        { text: "f" },
        { text: "t" },
        { text: "w" },
        { text: "a" },
        { text: "r" },
        { text: "e", className: "pr-2" },
        { text: "Developer.", gradient: true },
    ];

    const decryptedTextStyle = "text-white text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-bold font-[Consolas]";

    return (
        <div>
            <div style={{ marginTop: '2rem' }}>
                <DecryptedText
                    text="HELLO !!!"
                    animateOn="view"
                    revealDirection="center"
                    className={decryptedTextStyle}
                />
            </div>
            <div style={{ marginTop: '1rem' }}>
                <DecryptedText
                    text="I am Soumyadipta Das,"
                    animateOn="view"
                    revealDirection="center"
                    className={decryptedTextStyle}
                />
            </div>
            <TypewriterEffectSmooth words={words} />
            <div style={{ marginTop: '1rem' }}>
                <div className="container-button">
                    <div className="hover bt-1"></div>
                    <div className="hover bt-2"></div>
                    <div className="hover bt-3"></div>
                    <div className="hover bt-4"></div>
                    <div className="hover bt-5"></div>
                    <div className="hover bt-6"></div>
                    <a
                        onClick={handleDownload}
                        className="jelly-button group relative inline-flex h-12 items-center justify-center overflow-hidden"
                    >
                        <span>Download Resume</span>
                        <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                                <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;