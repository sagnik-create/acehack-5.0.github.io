
import React from 'react';
import { FAQ_ITEMS } from '../constants';
import Accordion from './ui/Accordion';
import SectionWrapper from './ui/SectionWrapper';

const FaqSection: React.FC = () => {
  return (
    <SectionWrapper id="faq" title="Frequently Asked Questions">
      <div className="max-w-3xl mx-auto space-y-4">
        {FAQ_ITEMS.map((item, index) => (
          <Accordion key={index} title={item.question}>
            {item.answer}
          </Accordion>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default FaqSection;
