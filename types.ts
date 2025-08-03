import type { ReactNode } from 'react';

export interface NavLink {
  name: string;
  href: string;
}

export interface Theme {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface TimelineEvent {
  time: string;
  title: string;
  description: string;
}

export interface Prize {
  rank: string;
  title: string;
  description: string;
  bgClass: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
