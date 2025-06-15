import React, { useState} from 'react';
import Dock from './Dock';
import { VscMenu } from 'react-icons/vsc'; // Hamburger icon
import {
  VscHome,
  VscDebugDisconnect,
} from 'react-icons/vsc';
import { MdPermPhoneMsg } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { GoProjectSymlink } from "react-icons/go";
import { motion, AnimatePresence } from 'framer-motion';
import GooeyNav from './GooeyNav';
import TrueFocus from './TrueFocus';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => { 
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const items = [
    {
      icon: <VscHome className="text-white" size={18} />,
      label: 'Home',
      onClick: () => scrollToSection('home'),
    },
    {
      icon: <GoProjectSymlink className="text-white" size={18} />,
      label: 'Projects',
      onClick: () => scrollToSection('projects'),
    },
    {
      icon: <GiSkills className="text-white" size={18} />,
      label: 'Skills',
      onClick: () => scrollToSection('skills'),
    },
    {
      icon: <MdPermPhoneMsg className="text-white" size={18} />,
      label: 'Certifications',
      onClick: () => scrollToSection('certifications'),
    },
    {
      icon: <GiSkills className="text-white" size={18} />,
      label: 'Awards',
      onClick: () => scrollToSection('awards'),
    },
    {
      icon: <VscDebugDisconnect className="text-white" size={18} />,
      label: 'Connect',
      onClick: () => scrollToSection('connect'),
    },
  ];

  const Navitems = [
    { label: "Home", href: "#home", onClick: () => scrollToSection('home') },
    { label: "Projects", href: "#projects", onClick: () => scrollToSection('projects') },
    { label: "Skills", href: "#skills", onClick: () => scrollToSection('skills') },
    { label: "Certifications", href: "#certifications", onClick: () => scrollToSection('certifications') },
    { label: "Awards", href: "#awards", onClick: () => scrollToSection('awards') },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-3 bg-black/60 rounded-full text-white shadow-lg backdrop-blur-md hover:bg-black transition"
        >
          <VscMenu size={24} />
        </button>
      </div>

      {/* Dock Animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-0 left-0 right-0 z-40"
          >
            <Dock
              items={items}
              panelHeight={68}
              baseItemSize={50}
              magnification={70}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Navigation (Hidden on Mobile) */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 backdrop-blur-md bg-black/30 text-white shadow-lg w-full z-50 px-8 py-4 mb-0">
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
          <TrueFocus
            sentence="My Portfolio"
            manualMode={false}
            blurAmount={5}
            borderColor="red"
            animationDuration={1.25}
            pauseBetweenAnimations={1}
          />
          <div className="flex items-center space-x-6">
            <GooeyNav
              items={Navitems}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={0}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
            <a
              href="#connect"
              onClick={() => scrollToSection('connect')}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2 rounded-md hover:from-purple-700 hover:to-indigo-700 transition"
            >
              Connect
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;