
import React from 'react';
import { PRIZES } from '../constants';
import SectionWrapper from './ui/SectionWrapper';

const PrizesSection: React.FC = () => {
  return (
    <SectionWrapper id="prizes" title="Prizes & Recognition">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PRIZES.map((prize) => (
          <div key={prize.rank} className={`p-1 rounded-lg bg-gradient-to-br ${prize.bgClass} transform hover:scale-105 transition-transform duration-300`}>
            <div className="bg-slate-900 rounded-lg p-8 h-full flex flex-col text-center items-center">
              <span className={`text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br ${prize.bgClass}`}>
                {prize.rank}
              </span>
              <h3 className="text-2xl font-bold text-white mt-4 mb-2">{prize.title}</h3>
              <p className="text-slate-400 flex-grow">{prize.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default PrizesSection;
