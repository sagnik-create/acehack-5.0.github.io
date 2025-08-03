
import React from 'react';
import { SPONSORS } from '../constants';
import SectionWrapper from './ui/SectionWrapper';

const SponsorsSection: React.FC = () => {
  return (
    <SectionWrapper id="sponsors" title="Our Sponsors">
      <div className="flex flex-wrap justify-center items-center gap-8">
        {SPONSORS.map((sponsor, index) => (
          <div key={index} className="p-4 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-slate-700">
            <p className="text-xl font-semibold text-slate-300 tracking-widest">{sponsor}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default SponsorsSection;
