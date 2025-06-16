import React from 'react';

// Import images directly if they are in src/assets/
import LinkedInIcon from '../assets/linkedin.png';
import GitHubIcon from '../assets/github.png';
import GmailIcon from '../assets/gmail.png';
import InstagramIcon from '../assets/instagram.png';
import XIcon from '../assets/x.png';

const SocialMedia = () => {
  const handleImageError = (e, platform) => {
    console.error(`Failed to load ${platform} image`);
    e.target.style.display = 'none'; // Hide the broken image
    e.target.alt = `${platform} (Image not found)`; // Update alt text for accessibility
  };

  return (
    <div className="glass-container p-6">
      <h3 className="flex items-center justify-center text-2xl font-semibold text-black dark:text-white mb-4">Social Media Handles</h3>
      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href="https://www.linkedin.com/in/soumyadipta-das-950241282/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img
            src={LinkedInIcon}
            alt="LinkedIn"
            className="w-12 h-12 object-contain transition-transform duration-300 hover:scale-110"
            onError={(e) => handleImageError(e, 'LinkedIn')}
          />
        </a>
        <a
          href="https://github.com/MrKnightmare007"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img
            src={GitHubIcon}
            alt="GitHub"
            className="w-12 h-12 object-contain transition-transform duration-300 hover:scale-110"
            onError={(e) => handleImageError(e, 'GitHub')}
          />
        </a>
        <a
          href="mailto:dassoumyadipta007@gmail.com"
          className="social-icon"
        >
          <img
            src={GmailIcon}
            alt="Gmail"
            className="w-12 h-12 object-contain transition-transform duration-300 hover:scale-110"
            onError={(e) => handleImageError(e, 'Gmail')}
          />
        </a>
        <a
          href="https://www.instagram.com/das_besondere_/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img
            src={InstagramIcon}
            alt="Instagram"
            className="w-12 h-12 object-contain transition-transform duration-300 hover:scale-110"
            onError={(e) => handleImageError(e, 'Instagram')}
          />
        </a>
        <a
          href="https://x.com/CodeSavantKick/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img
            src={XIcon}
            alt="X"
            className="w-12 h-12 object-contain transition-transform duration-300 hover:scale-110"
            onError={(e) => handleImageError(e, 'X')}
          />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;