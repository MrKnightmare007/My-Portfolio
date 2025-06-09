import React from 'react';
import Particles from './Particles';

const BackgroundParticles = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1, // Behind everything
       
        overflow: 'hidden',
      }}
    >
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={true} // Set true for semi-transparent points
        disableRotation={false}
      />
    </div>
  );
};

export default BackgroundParticles;