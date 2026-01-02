import { ProjectDomain, TimelineEvent, Faq, Prize } from './types';
import {
  View,
  BrainCircuit,
  Smartphone,
  Code2,
  Binary,
  Trophy,
  FileText,
  Palette,
  Crown,
  Award,
  Gem,
  Star,
} from 'lucide-react';

export const projectDomains: ProjectDomain[] = [
  {
    name: 'AR/VR',
    slug: 'ar-vr',
    icon: View,
    projects: [
      { name: 'AR Campus Navigator', description: 'Navigate your campus with augmented reality overlays.', contributeUrl: '#' },
      { name: 'VR Museum Tour', description: 'Experience museum exhibits from the comfort of your home.', contributeUrl: '#' },
    ],
  },
  {
    name: 'AI/ML',
    slug: 'ai-ml',
    icon: BrainCircuit,
    projects: [
      { name: 'Sentiment Analysis Bot', description: 'A bot that analyzes and reports the sentiment of social media posts.', contributeUrl: '#' },
      { name: 'Image Recognition API', description: 'An API to identify objects in images.', contributeUrl: '#' },
      { name: 'Code Review Assistant', description: 'An AI tool to automatically review and suggest improvements for code.', contributeUrl: '#' },
    ],
  },
  {
    name: 'App Development',
    slug: 'app-dev',
    icon: Smartphone,
    projects: [
      { name: 'Community Event App', description: 'An app for discovering and joining local tech events.', contributeUrl: '#' },
      { name: 'Fitness Tracker', description: 'Track your workouts and daily activity.', contributeUrl: '#' },
    ],
  },
  {
    name: 'Web Development',
    slug: 'web-dev',
    icon: Code2,
    projects: [
      { name: 'Developer Portfolio Builder', description: 'A tool to quickly generate a personal portfolio website.', contributeUrl: '#' },
      { name: 'Real-time Chat Application', description: 'A web-based chat app using modern web technologies.', contributeUrl: '#' },
      { name: 'E-commerce Storefront', description: 'A customizable storefront for online shops.', contributeUrl: '#' },
    ],
  },
  {
    name: 'DSA',
    slug: 'dsa',
    icon: Binary,
    projects: [
      { name: 'Algorithm Visualizer', description: 'Visualize common data structures and algorithms in action.', contributeUrl: '#' },
      { name: 'Competitive Programming Library', description: 'A collection of optimized algorithms for competitive programming.', contributeUrl: '#' },
    ],
  },
  {
    name: 'Competitive Programming',
    slug: 'cp',
    icon: Trophy,
    projects: [
      { name: 'Online Judge Platform', description: 'A platform to host and participate in coding contests.', contributeUrl: '#' },
      { name: 'Problem Set Archive', description: 'A curated list of problems from various online judges.', contributeUrl: '#' },
    ],
  },
  {
    name: 'Technical Writing',
    slug: 'tech-writing',
    icon: FileText,
    projects: [
      { name: 'Documentation for Open Source', description: 'Contribute high-quality documentation to popular open-source projects.', contributeUrl: '#' },
      { name: 'Tech Blog Contribution', description: 'Write and publish articles on our official tech blog.', contributeUrl: '#' },
    ],
  },
  {
    name: 'UI/UX',
    slug: 'ui-ux',
    icon: Palette,
    projects: [
      { name: 'Design System for GDG', description: 'Create a reusable component library and design system.', contributeUrl: '#' },
      { name: 'App Redesign Challenge', description: 'Redesign and improve the user experience of an existing application.', contributeUrl: '#' },
    ],
  },
];

export const timeline: TimelineEvent[] = [
    {
      date: 'January 5, 2026',
      title: 'Registration Opens',
      description: 'Sign up to participate in the Winter of Code.',
    },
    {
      date: 'January 9, 2026',
      title: 'Opening Ceremony',
      description: 'Official kickoff of the event with project announcements.',
    },
    {
      date: 'January 10, 2026',
      title: 'Coding Period Begins',
      description: 'Start contributing to your chosen projects.',
    },
    {
      date: 'February 10, 2026',
      title: 'Coding Period Ends',
      description: 'Final day for pull requests and contributions.',
    },
    {
      date: 'March, 2026',
      title: 'Closing Ceremony & Winners Announcement',
      description: 'Announcement of winners and closing remarks.',
    },
  ];
  
  export const faqs: Faq[] = [
    {
      question: 'Who can participate?',
      answer: 'Anyone with a passion for coding and learning is welcome to participate, from beginners to experienced developers.',
    },
    {
      question: 'Is there a registration fee?',
      answer: 'No, SnowScript: Winter of Code is completely free for all participants.',
    },
    {
      question: 'How do I choose a project?',
      answer: 'You can explore the projects on the "Projects" page. We recommend choosing a project that aligns with your interests and skills. You can also connect with mentors on our Discord for guidance.',
    },
    {
      question: 'What if I have no experience with open source?',
      answer: 'No problem! We have beginner-friendly projects and mentors who will guide you through the process of making your first open-source contribution.',
    },
    {
      question: 'How are the winners decided?',
      answer: 'Winners are selected based on the quality and quantity of their contributions, their collaboration with the community, and the overall impact of their work.',
    },
  ];

  export const prizes: Prize[] = [
    {
      category: 'Top 3 Contributors',
      description: 'Awarded to the 3 people with the most number of impactful contributions across all projects.',
      icon: Crown,
    },
    {
      category: 'Top 5 Female Contributors',
      description: 'Given to the Top 5 females that demonstrated exceptional number and quality of contribution.',
      icon: Trophy,
    },
    {
      category: 'Top 10 Contirbutors',
      description: 'Specially goodies and certificates for being enthusiastic contributors to oepn source.',
      icon: Star,
    },
    {
      category: 'Top 20 Contributors',
      description: 'For the participant who sttod, certificates of appreciation and goodies.',
      icon: Award,
    },
    {
      category: 'All Contirbutors',
      description: 'Certificate of appreciation for your first succesful pull request.',
      icon: Gem,
    }
  ]
