
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: `url('https://picsum.photos/seed/acehack/1920/1080')` }}>
      <div className="absolute inset-0 bg-slate-900/70 backdrop-brightness-50"></div>
      <div className="relative z-10 px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tighter mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-500">
            AceHack 5.0
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 mb-2">
          Organized by <span className="font-semibold text-white">UEM Jaipur</span>
        </p>
        <p className="text-xl md:text-2xl lg:text-3xl text-slate-200 font-light mb-8">
          Innovate. Collaborate. Create.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#about" className="bg-white text-slate-900 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-slate-200 transform transition-all duration-300 hover:scale-105">
            Learn More
          </a>
          <a href="#" className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300">
            Register Now
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
