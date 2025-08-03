
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-white tracking-wider">
          AceHack <span className="text-purple-400">5.0</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={link.href} className="text-slate-300 hover:text-white transition-colors duration-300">
              {link.name}
            </a>
          ))}
        </nav>
        <a href="#" className="hidden md:inline-block bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:scale-105 transform transition-transform duration-300">
          Register Now
        </a>
      </div>
    </header>
  );
};

export default Header;
