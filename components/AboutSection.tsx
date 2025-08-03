
import React from 'react';
import SectionWrapper from './ui/SectionWrapper';

const AboutSection: React.FC = () => {
  return (
    <SectionWrapper id="about" title="About The Hackathon">
        <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3 text-lg text-slate-300 space-y-4">
                <p>
                    AceHack 5.0 is the flagship 48-hour hackathon organized by the University of Engineering & Management (UEM), Jaipur. It's a premier event that brings together the brightest minds from across the country to innovate, collaborate, and create groundbreaking solutions to real-world problems.
                </p>
                <p>
                    Our mission is to foster a culture of creativity and problem-solving. We provide a platform for students to showcase their skills, learn from industry experts, and network with like-minded peers. Whether you're a seasoned coder or a curious beginner, AceHack is the place to challenge yourself and turn your ideas into reality.
                </p>
            </div>
            <div className="md:col-span-2">
                <img 
                    src="https://picsum.photos/seed/uem/600/400" 
                    alt="UEM Jaipur Campus" 
                    className="rounded-lg shadow-2xl w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                />
            </div>
        </div>
    </SectionWrapper>
  );
};

export default AboutSection;
