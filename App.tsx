
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ThemesSection from './components/ThemesSection';
import TimelineSection from './components/TimelineSection';
import PrizesSection from './components/PrizesSection';
import SponsorsSection from './components/SponsorsSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-200 font-sans leading-relaxed">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-slate-900 to-black z-0"></div>
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ThemesSection />
          <TimelineSection />
          <PrizesSection />
          <SponsorsSection />
          <FaqSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
