import type { LucideIcon } from 'lucide-react';

export type Project = {
  name: string;
  description: string;
  contributeUrl: string;
};

export type ProjectDomain = {
  name: string;
  slug: string;
  icon: LucideIcon;
  projects: Project[];
};

export type TimelineEvent = {
  date: string;
  title: string;
  description: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type Prize = {
  category: string;
  description: string;
  icon: LucideIcon;
};
