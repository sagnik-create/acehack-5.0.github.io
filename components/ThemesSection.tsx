
import React from 'react';
import { THEMES } from '../constants';
import Card from './ui/Card';
import SectionWrapper from './ui/SectionWrapper';

const ThemesSection: React.FC = () => {
  return (
    <SectionWrapper id="themes" title="Hackathon Tracks">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {THEMES.map((theme, index) => (
          <Card key={index} className="flex flex-col items-center text-center p-8">
            <div className="mb-4">{theme.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{theme.title}</h3>
            <p className="text-slate-400">{theme.description}</p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ThemesSection;
