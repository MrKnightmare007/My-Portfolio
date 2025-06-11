import React from 'react';
import SplitText from "./SplitText";
import { TypewriterEffectSmooth } from "./typewriter-effect";
import GradientText from './Gradient';

const Hero = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = "/assets/resume.pdf"; // Updated to use public path
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

    return (
        <div>
            <div style={{ marginTop: '-2rem' }}>
                <SplitText
                    text="Hello !!!"
                    className="text-white text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                />
            </div>
            <div style={{ marginTop: '-1rem' }}>
                <SplitText
                    text="I am Soumyadipta Das"
                    className="text-white text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
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
                        <GradientText
                            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                            animationSpeed={3}
                            showBorder={false}
                            className="custom-class"
                        >
                            My Resume
                        </GradientText>
                        <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                                <path
                                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
            <div className="intro-container">
                <div className="intro-text">
                    <span className='text-white text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center'>A</span>spiring college student passionate about the exciting realms of{' '}
                    <GradientText
                        colors={["#FF00FF", "#00FFFF", "#FFFF00"]}
                        animationSpeed={3}
                        showBorder={false}
                    >
                        machine learning, AI, cybersecurity, blockchain technology, and web development.
                    </GradientText>
                    Eager to push boundaries and make a positive impact in these dynamic fields. Actively seeking opportunities for personal growth and professional development through internships and job positions. Skilled in programming languages such as Python, Java, and JavaScript, with experience in data analysis, algorithm design, and web application development. Committed to staying updated with the latest industry trends and emerging technologies. Strong problem-solving abilities, attention to detail, and a collaborative mindset. Let's connect and explore the possibilities of working together!
                </div>
            </div>
        </div>
    );
};

export default Hero;