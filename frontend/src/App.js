import { useEffect, useRef, lazy, Suspense, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import BackgroundParticles from './components/BackgroundParticles';
import Hero from './components/Hero';
import Lanyard from './components/Lanyard';
import ChromaGrid from './components/ChromaGrid';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/not-found';
import { BackgroundGradientAnimation } from './components/background-gradient-animation';
import GradientText from './components/Gradient';
import GlassIcons from './components/GlassIcons';
import { FaReact, FaNode, FaAws, FaPython, FaDocker, FaHtml5 } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTypescript, SiPostgresql } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa6";
import { RiNextjsLine } from "react-icons/ri";
import { FocusCards } from './components/focus-cards';
import { motion } from "framer-motion";
import { Carousel } from './components/carousel';
import SocialMedia from './components/Social-media';
import Form from './components/form';

// Dynamically import the World component using React.lazy
const World = lazy(() => import("./components/globe").then((m) => ({ default: m.World })));

function App() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const slideData = [
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "https://i.imgur.com/2HlEli5.jpeg",
    },
    {
      title: "Urban Dreams",
      button: "Explore Component",
      src: "https://i.imgur.com/XbixHHY.jpeg",
    },
    {
      title: "Neon Nights",
      button: "Explore Component",
      src: "https://i.imgur.com/77FNrYb.jpeg",
    },
    {
      title: "Desert Whispers",
      button: "Explore Component",
      src: "https://i.imgur.com/Dv34nCK.jpeg",
    },
  ];
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -1.303396,
      endLng: 36.852443,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: -15.785493,
      startLng: -47.909029,
      endLat: 36.162809,
      endLng: -115.119411,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: 21.3099,
      startLng: -157.8581,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: -34.6037,
      startLng: -58.3816,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 14.5995,
      startLng: 120.9842,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: -15.432563,
      startLng: 28.315853,
      endLat: 1.094136,
      endLng: -63.34546,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 37.5665,
      startLng: 126.978,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 48.8566,
      startLng: -2.3522,
      endLat: 52.52,
      endLng: 13.405,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: -8.833221,
      startLng: 13.264837,
      endLat: -33.936138,
      endLng: 18.436529,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 49.2827,
      startLng: -123.1207,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: 28.6139,
      endLng: 77.209,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 41.9028,
      startLng: 12.4964,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 1.3521,
      endLng: 103.8198,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 37.7749,
      endLng: -122.4194,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 35.6762,
      startLng: 139.6503,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 14,
      startLat: -33.936138,
      startLng: 18.436529,
      endLat: 21.395643,
      endLng: 39.883798,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
  ];

  const Skillitems = [
    { icon: <FaReact />, color: 'blue', label: 'ReactJS' },
    { icon: <SiMongodb />, color: 'purple', label: 'MongoDB' },
    { icon: <FaNode />, color: 'red', label: 'NodeJS' },
    { icon: <SiExpress />, color: 'indigo', label: 'ExpressJS' },
    { icon: <RiNextjsLine />, color: 'orange', label: 'NextJS' },
    { icon: <FaAws />, color: 'green', label: 'AWS' },
    { icon: <FaPython />, color: 'teal', label: 'Python' },
    { icon: <FaDocker />, color: 'pink', label: 'Docker' },
    { icon: <FaHtml5 />, color: 'yellow', label: 'HTML' },
    { icon: <FaCss3Alt />, color: 'lime', label: 'CSS' },
    { icon: <SiTypescript />, color: 'cyan', label: 'TypeScript' },
    { icon: <SiPostgresql />, color: 'magenta', label: 'PostgreSQL' },
  ];
  const cards = [
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      src: "https://i.imgur.com/lX9rChy.jpeg",
    },
    {
      title: "Postman API Fundamentals Student Expert",
      src: "https://i.imgur.com/LI7Gihf.png",
    },
    {
      title: "The Complete Full-Stack Web Development Bootcamp",
      src: "https://i.imgur.com/9l8lHjd.jpeg",
    },
    {
      title: "The Complete 2025 Software Testing Bootcamp",
      src: "https://i.imgur.com/wkeZNyV.jpeg",
    },
    {
      title: "Learn Ethical Hacking From Scratch 2024",
      src: "https://i.imgur.com/6IRQJXb.jpeg",
    },
    {
      title: "Social Summer of Code",
      src: "https://i.imgur.com/BSfmlmm.jpeg",
    },
    {
      title: "Synchronicity S1 Participation Certificate",
      src: "https://i.imgur.com/CptNmmk.jpeg",
    },
    {
      title: "Systems and Usable Security",
      src: "https://i.imgur.com/GwykoSf.jpeg",
    },
    {
      title: "Machine Learning and Deep Learning - Fundamentals and Applications",
      src: "https://i.imgur.com/UgrD79a.png",
    },
    {
      title: "Diversion 2k24 Participation Certificate",
      src: "https://i.imgur.com/iEfqCGv.png",
    },
    {
      title: "Introduction to Generative AI",
      src: "https://i.imgur.com/aYaXH5A.png",
    },
    {
      title: "Hacktoberfest 2024",
      src: "https://i.imgur.com/k9y5oCH.png",
    },
  ];
  const containerRef = useRef(null);
  const items = [];

  // State to toggle between SocialMedia and Form components
  const [activeComponent, setActiveComponent] = useState('social'); // Default to 'social'

  useEffect(() => {
    const updateHeight = () => {
      const lanyardHeight = 500 * window.innerHeight / 100; // 125vh
      if (containerRef.current) {
        containerRef.current.style.minHeight = `${lanyardHeight}px`;
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <Routes>
      {/* Homepage route */}
      <Route
        path="/"
        element={
          <>
            <div ref={containerRef} className="gradient-fluid relative">
              <Navbar />
              <BackgroundParticles />
              <main className="container p-32">
                <section id="home">
                  <Hero />
                </section>
              </main>
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
              </div>
              <section id="projects">
                <ChromaGrid
                  items={items}
                  radius={300}
                  damping={0.45}
                  fadeOut={0.6}
                  ease="power3.out"
                />
              </section>
              <section id="skills">
                <div style={{ height: '600px', position: 'relative' }}>
                  <GlassIcons items={Skillitems} className="custom-class" />
                </div>
              </section>
              <section id="certifications">
                <div style={{ height: '600px', position: 'relative' }}>
                  <FocusCards cards={cards} />
                </div>
              </section>
              <section id="awards">
                <div style={{ position: 'relative', marginTop: '370px' }}>
                  <Carousel slides={slideData} />
                </div>
              </section>
              <section id="connect">
                <div className="relative w-full mt-[100px] min-h-screen py-20 dark:bg-black bg-white">
                  <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                      className="text-center mb-12"
                    >
                      <h2 className="text-xl md:text-4xl font-bold text-black dark:text-white">
                        <GradientText
                          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                          animationSpeed={3}
                          showBorder={false}
                        >
                          Connect With Me
                        </GradientText>
                      </h2>
                      <p className="text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
                        Connect with me from anywhere in the globe either via my social media handles or send me a quick email. :)
                      </p>
                    </motion.div>
                    <div className="flex flex-col md:flex-row items-start justify-between gap-8">
                      {/* Left Side: Globe */}
                      <div className="w-full md:w-1/2 h-[30rem] relative z-0 self-start border-2 border-black">
                        <World data={sampleArcs} globeConfig={globeConfig} />
                      </div>
                      {/* Right Side: Buttons and Conditional Component */}
                      <div className="w-full md:w-1/2 flex flex-col items-center gap-6 z-10 p-4 border-2 border-black">
                        <div className="flex gap-4 bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-lg">
                          <button
                            onClick={() => setActiveComponent('social')}
                            className={`toggle-button px-6 py-3 rounded-lg font-semibold transition-colors duration-300 z-20 ${activeComponent === 'social'
                              ? 'bg-blue-600 text-white'
                              : 'bg-neutral-200 dark:bg-neutral-700 text-black dark:text-white hover:bg-blue-500 hover:text-white'
                              }`}
                          >
                            Social Media
                          </button>
                          <button
                            onClick={() => setActiveComponent('form')}
                            className={`toggle-button px-6 py-3 rounded-lg font-semibold transition-colors duration-300 z-20 ${activeComponent === 'form'
                              ? 'bg-blue-600 text-white'
                              : 'bg-neutral-200 dark:bg-neutral-700 text-black dark:text-white hover:bg-blue-500 hover:text-white'
                              }`}
                          >
                            Email Me
                          </button>
                        </div>
                        <div className="w-full max-w-md min-h-[20rem] border-2 border-black">
                          {activeComponent === 'social' ? <SocialMedia /> : <Form />}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </>
        }
      />
      {/* Catch-all route for 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;