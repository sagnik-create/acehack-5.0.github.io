
import React from 'react';
import type { NavLink, Theme, TimelineEvent, Prize, FaqItem } from './types';

const BrainIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6.5a3.5 3.5 0 017 0V19M5 19h14M9 5a2.5 2.5 0 015 0" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M19 12h.01M8 8h.01M16 8h.01M12 5h.01M12 19v-3" />
    </svg>
);
  
const GlobeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9M3 12a9 9 0 019-9m-9 9h18" />
    </svg>
);
  
const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 0118 0 12.02 12.02 0 00-2.382-8.96z" />
    </svg>
);

const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
);

export const NAV_LINKS: NavLink[] = [
  { name: 'About', href: '#about' },
  { name: 'Themes', href: '#themes' },
  { name: 'Timeline', href: '#timeline' },
  { name: 'Prizes', href: '#prizes' },
  { name: 'FAQ', href: '#faq' },
];

export const THEMES: Theme[] = [
  {
    icon: <BrainIcon />,
    title: 'AI & Machine Learning',
    description: 'Innovate with intelligent algorithms, data models, and predictive analytics to solve real-world problems.',
  },
  {
    icon: <GlobeIcon />,
    title: 'Web3 & Blockchain',
    description: 'Explore the future of the internet with decentralized applications, smart contracts, and blockchain technology.',
  },
  {
    icon: <ShieldIcon />,
    title: 'Cybersecurity',
    description: 'Develop solutions to protect digital assets, secure networks, and combat modern cyber threats.',
  },
  {
    icon: <HeartIcon />,
    title: 'Healthcare Tech',
    description: 'Create technology that improves patient care, streamlines medical processes, and enhances public health.',
  },
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    time: 'Day 1 - 9:00 AM',
    title: 'Opening Ceremony',
    description: 'Kick-off, keynote speeches, and announcement of the hackathon rules and problem statements.',
  },
  {
    time: 'Day 1 - 10:00 AM',
    title: 'Hacking Begins',
    description: 'Time to start coding! Mentors will be available to guide you through your projects.',
  },
  {
    time: 'Day 1 - 1:00 PM',
    title: 'Workshop Session',
    description: 'An expert-led workshop on "Building Scalable APIs" to help you level up your skills.',
  },
  {
    time: 'Day 2 - 9:00 AM',
    title: 'Mid-Point Check-in',
    description: 'A quick check-in to see progress, resolve blockers, and get feedback from mentors.',
  },
  {
    time: 'Day 2 - 5:00 PM',
    title: 'Hacking Ends & Submissions',
    description: 'Finalize your projects and submit them to the judging portal. No more coding after this point.',
  },
  {
    time: 'Day 2 - 6:00 PM',
    title: 'Project Demos & Judging',
    description: 'Teams present their projects to the judges. Each team gets 5 minutes to present.',
  },
  {
    time: 'Day 2 - 8:00 PM',
    title: 'Closing Ceremony & Winners',
    description: 'Announcement of winners, prize distribution, and closing remarks.',
  },
];

export const PRIZES: Prize[] = [
  {
    rank: '1st',
    title: 'Grand Prize Winner',
    description: '$5,000 cash prize, premium swag kits, and a feature on our university blog.',
    bgClass: 'from-purple-600 to-indigo-600',
  },
  {
    rank: '2nd',
    title: 'Runner Up',
    description: '$2,500 cash prize and premium swag kits.',
    bgClass: 'from-blue-600 to-cyan-600',
  },
  {
    rank: '3rd',
    title: 'Second Runner Up',
    description: '$1,000 cash prize and premium swag kits.',
    bgClass: 'from-teal-600 to-green-600',
  },
];

export const SPONSORS: string[] = ['Innovate Inc.', 'TechCorp', 'DevSolutions', 'CodeBase', 'NextGen AI', 'QuantumLeap'];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Who can participate in AceHack 5.0?',
    answer: 'AceHack 5.0 is open to all university students, regardless of their major or year of study. We welcome everyone with a passion for technology and innovation.',
  },
  {
    question: 'Is there a registration fee?',
    answer: 'No, participation in AceHack 5.0 is completely free for all selected participants. We will also provide meals, snacks, and beverages throughout the event.',
  },
  {
    question: 'What is the team size?',
    answer: 'Teams can consist of 2 to 4 members. You can form a team before the event or find team members during our team formation session at the beginning of the hackathon.',
  },
  {
    question: 'Do I need to have a project idea beforehand?',
    answer: 'No, it is not required. You can come up with an idea during the hackathon. We will announce problem statements during the opening ceremony to inspire you.',
  },
  {
    question: 'What should I bring to the event?',
    answer: 'You should bring your laptop, charger, any other necessary hardware, and a valid student ID. And of course, bring your creativity and enthusiasm!',
  },
];
