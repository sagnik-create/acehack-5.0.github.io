
import React from 'react';
import { TIMELINE_EVENTS } from '../constants';
import SectionWrapper from './ui/SectionWrapper';

const TimelineSection: React.FC = () => {
  return (
    <SectionWrapper id="timeline" title="Event Timeline">
      <div className="relative container mx-auto px-6 flex flex-col space-y-8">
        <div className="absolute w-1 h-full bg-slate-700 shadow-md left-1/2 -translate-x-1/2"></div>
        {TIMELINE_EVENTS.map((event, index) => (
          <div key={index} className="relative flex items-center w-full">
            <div className={`flex w-full items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="p-6 rounded-lg bg-slate-800/80 backdrop-blur-sm shadow-lg border border-slate-700 transform transition-transform duration-500 hover:scale-105 hover:border-purple-500">
                  <p className="font-semibold text-purple-400 mb-1">{event.time}</p>
                  <h3 className="text-lg font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-slate-400">{event.description}</p>
                </div>
              </div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900"></div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default TimelineSection;
