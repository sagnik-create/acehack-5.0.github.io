
import React from 'react';

interface SectionWrapperProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
