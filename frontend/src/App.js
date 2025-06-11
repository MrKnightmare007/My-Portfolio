import { useEffect, useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import BackgroundParticles from './components/BackgroundParticles';
import Hero from './components/Hero';
import Lanyard from './components/Lanyard';
import ChromaGrid from './components/ChromaGrid';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/not-found';

function App() {
  const containerRef = useRef(null);
  const items = [
  ];
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
                <Hero />
              </main>
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
              </div>
              <div>
                <ChromaGrid
                  items={items}
                  radius={300}
                  damping={0.45}
                  fadeOut={0.6}
                  ease="power3.out"
                />
              </div>
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