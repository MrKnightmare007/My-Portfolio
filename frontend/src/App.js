import { useEffect, useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import BackgroundParticles from './components/BackgroundParticles';
import Hero from './components/Hero';
import Lanyard from './components/Lanyard';

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const updateHeight = () => {
      const lanyardHeight = 999 * window.innerHeight / 100; // 125vh
      if (containerRef.current) {
        containerRef.current.style.minHeight = `${lanyardHeight}px`;
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <div ref={containerRef} className="gradient-fluid relative">
      <Navbar />
      <BackgroundParticles />
      <main className="container p-32">
        <Hero />
      </main>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div>
    </div>
  );
}

export default App;