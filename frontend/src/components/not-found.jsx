import React from 'react';
import { Link } from 'react-router-dom';
import Noise from './Noise';
import FuzzyText from './FuzzyText';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1C2526] relative overflow-hidden">
      {/* Noise overlay covering the entire viewport */}
      <Noise
        patternSize={100}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={1}
        patternAlpha={30}
      />
      {/* Fuzzy 404 text centered */}
      <div className="relative z-10 text-center">
        <FuzzyText
          fontSize="clamp(4rem, 15vw, 12rem)"
          fontWeight={900}
          fontFamily="monospace"
          color="#D3D3D3"
          enableHover={true}
          baseIntensity={0.3}
          hoverIntensity={0.6}
        >
          404
        </FuzzyText>
        <p className="text-[#D3D3D3] text-lg md:text-xl mt-4 mb-8">
          Page Not Found
        </p>
        <Link to="/">
          <button className="relative inline-flex items-center justify-center px-6 py-3 text-[#D3D3D3] border border-[#D3D3D3] rounded-md hover:bg-[#D3D3D3] hover:text-[#1C2526] transition-all duration-300">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;