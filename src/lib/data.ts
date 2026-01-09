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
      { name: 'AR Birthday Card', description: 'The goal is to create an Augmented Reality (AR) Birthday Greeting Card that provides an interactive and engaging experience for the user using Unity and Vuforia', contributeUrl: 'https://github.com/GDG-IGDTUW/AR-VR/tree/main/AR%20Birthday%20Card' },
      { name: 'Taarangana’26 3D Reel', description: 'This is an open-source Blender modeling project for a dreamy vertical (9:16) cinematic reel made for the college fest Taarangana’26.', contributeUrl: 'https://github.com/GDG-IGDTUW/AR-VR/tree/main/Taarangana%E2%80%9926%20%E2%80%94%203D%20Announcement%20Reel' },
      { name: '3D Domain City Model', description: 'This is an open-source Blender modeling initiative to build a single combined 3D model set  representing all GDG domains as buildings', contributeUrl: 'https://github.com/GDG-IGDTUW/AR-VR/tree/main/3D%20Domain%20City%20Model%20Project' },
    ],
  },
  {
    name: 'AI/ML',
    slug: 'ai-ml',
    icon: BrainCircuit,
    projects: [
      { name: 'VibeLift', description: 'A bot that analyzes and reports the sentiment of social media posts.', contributeUrl: 'https://github.com/GDG-IGDTUW/AI-ML-1/tree/main/VibeLift' },
      { name: 'CineSync', description: 'CineSync is a simple movie recommendation tool that helps users find movies similar to their favorites.', contributeUrl: 'https://github.com/GDG-IGDTUW/AI-ML-1/tree/main/CineSync' },
      { name: 'Compare AI', description: 'This project detects similarity between two text documents to identify potential plagiarism. ', contributeUrl: 'https://github.com/GDG-IGDTUW/AI-ML-1/tree/main/Compare%20AI' },
      { name: 'Moodify', description: 'A web application built with Streamlit and scikit-learn that classifies the dominant emotion (e.g., joy, sadness, anger) from song lyrics and suggests related songs from a database with the same predicted vibe.' , contributeUrl: 'https://github.com/GDG-IGDTUW/AI-ML-1/tree/main/Moodify' },
      { name: 'Mythos AI', description: 'A machine learning project that predicts the main genre of a book using only its title.  ', contributeUrl: 'https://github.com/GDG-IGDTUW/AI-ML-1/tree/main/Mythos%20AI' },
      { name: 'NINA (News Intelligence Neural Analyzer)', description: 'NINA is a smart news verification tool that classifies articles as real or fake using state-of-the-art NLP embeddings and machine learning. ', contributeUrl: 'https://github.com/GDG-IGDTUW/AI-ML-1/tree/main/NINA' },
      { name: 'ReMixRecipe', description: 'ReMixRecipe is a tool that helps you figure out what cuisine you can cook using the ingredients you already have. ', contributeUrl: 'https://github.com/GDG-IGDTUW/AI-ML-1/tree/main/ReMixRecipe' },
      { name: 'ResuMatch', description: 'ResuMatch is a simple, beginner-friendly web application designed to help job seekers optimize their resumes. ', contributeUrl: 'https://github.com/GDG-IGDTUW/AI-ML-1/tree/main/ResuMatch' },
      { name: 'Seqnet', description: 'Seqnet is a deep learning–based text generation project that predicts the next word in a sequence using an LSTM neural network built with TensorFlow and Keras.', contributeUrl: 'https://github.com/GDG-IGDTUW/AI-ML-1/tree/main/Seqnet' },
    ],
  },
  {
    name: 'App Development',
    slug: 'app-dev',
    icon: Smartphone,
    projects: [
      { name: 'Community Event App', description: 'VibeLift is a polished, tablet-inspired web application designed to help users track and improve their emotional well-being.', contributeUrl: '#' },
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
      { name: 'Arrays', description: 'Solve some array based DSA problems.', contributeUrl: 'https://github.com/GDG-IGDTUW/DSA-1/tree/main/ARRAYS' },
      { name: 'Binary Search', description: 'Solve some binary search based DSA problems.', contributeUrl: 'https://github.com/GDG-IGDTUW/DSA-1/tree/main/BinarySearch' },
      { name: 'Binary Trees', description: 'Solve some binary trees based DSA problems.', contributeUrl: 'https://github.com/GDG-IGDTUW/DSA-1/tree/main/BinaryTrees' },
      { name: 'Dynamic Programming', description: 'Solve some dp based DSA problems.', contributeUrl: 'https://github.com/GDG-IGDTUW/DSA-1/tree/main/DynamicProgramming' },
      { name: 'Graphs', description: 'Solve some graph based DSA problems.', contributeUrl: 'https://github.com/GDG-IGDTUW/DSA-1/tree/main/Graphs' },
      { name: 'Greedy', description: 'Solve some greedy based DSA problems.', contributeUrl: 'https://github.com/GDG-IGDTUW/DSA-1/tree/main/Greedy' },
      { name: 'Hash Maps', description: 'Solve some hashmap based DSA problems.', contributeUrl: 'https://github.com/GDG-IGDTUW/DSA-1/tree/main/HashMaps' },
      { name: 'Heaps', description: 'Solve some heap based DSA problems.', contributeUrl: 'https://github.com/GDG-IGDTUW/DSA-1/tree/main/Heaps' },
      { name: 'Linked List', description: 'Solve some linked list based DSA problems.', contributeUrl: 'https://github.com/GDG-IGDTUW/DSA-1/tree/main/Linked%20Lists' },
      { name: 'Recursion', description: 'Solve some recursion based DSA problems.', contributeUrl: 'https://github.com/GDG-IGDTUW/DSA-1/tree/main/Recusion%20Dsa' },
      { name: 'Stacks & Queues', description: 'Solve some stacks and queues based DSA problems.', contributeUrl: 'https://github.com/GDG-IGDTUW/DSA-1/tree/main/Stacks%20%26%20Queues' },
      { name: 'Contact Management System', description: 'Design and implement a data structure for a Contact Management System that supports adding contacts, removing contacts, updating contact details, and retrieving stored contacts efficiently.', contributeUrl: 'https://github.com/GDG-IGDTUW/DSA-2/tree/main/Contact%20Management%20System' },
      { name: 'E-Commerce Cart System', description: 'Design and implement a data structure for an E-commerce Cart System that supports adding products, removing products, updating quantities, and retrieving the total price of items in the cart.', contributeUrl: 'https://github.com/GDG-IGDTUW/DSA-2/tree/main/E-Commerce%20Cart%20System' },
      { name: 'File Compression', description: 'Develop a file compression system using Huffman Coding, which is a lossless data compression algorithm. The goal is to compress a given text by assigning variable-length binary codes to characters based on their frequencies. Characters with higher frequency should get shorter codes, while less frequent characters get longer codes.', contributeUrl: 'https://github.com/GDG-IGDTUW/DSA-2/tree/main/File%20Compression%20(Huffman%20Coding%20)' },
      { name: 'Hospital Management System', description: 'You are tasked with designing a Hospital Management System to manage patient admissions, doctor assignments, ward allocations, and billing efficiently.', contributeUrl: 'https://github.com/GDG-IGDTUW/DSA-2/tree/main/Hospital%20Management%20System%20' },
      { name: 'Movie Recommendation System', description: 'Design a Movie Recommendation System that suggests movies to users based on their preferences and ratings.', contributeUrl: 'https://github.com/GDG-IGDTUW/DSA-2/tree/main/Movie%20Recommendation%20System' },
      { name: 'Music Playlist Manager', description: 'Design a simplified Music Playlist Manager that supports common playlist operations for users. ', contributeUrl: 'https://github.com/GDG-IGDTUW/DSA-2/tree/main/Music%20Playlist%20Manager' },
      { name: 'Online Food Ordering', description: 'You are tasked with designing a Food Delivery System to manage restaurants, menus, customer orders, order processing, cancellations, and order history efficiently.', contributeUrl: 'https://github.com/GDG-IGDTUW/DSA-2/tree/main/Online%20Food%20Ordering' },
      { name: 'Parking Lot Management', description: 'Design a parking lot system that manages parking spaces, vehicle entry and exit, ticketing, and fee calculation.', contributeUrl: 'https://github.com/GDG-IGDTUW/DSA-2/tree/main/Parking%20Lot%20Management%20System' },
      { name: 'Undo Redo Operation', description: 'You are tasked with designing an Undo–Redo Operation System similar to what is used in text editors, drawing tools, or IDEs.', contributeUrl: 'https://github.com/GDG-IGDTUW/DSA-2/tree/main/Undo%20Redo%20Operation%20System' },
      { name: 'University Course Manager', description: 'Design and implement a data structure for a University Course Prerequisite Manager.', contributeUrl: 'https://github.com/GDG-IGDTUW/DSA-2/tree/main/University%20Course%20Prerequisite%20Manager' },
    ],
  },
  {
    name: 'Competitive Programming',
    slug: 'cp',
    icon: Trophy,
    projects: [
      { name: 'Binary Search', description: 'Contribute some binary search based competitive programming solutions.', contributeUrl: 'https://github.com/GDG-IGDTUW/Competitive-Programming/tree/main/Binary%20Search' },
      { name: 'Bit Manipulation', description: 'Contribute some bit manipulation based competitive programming solutions.', contributeUrl: 'https://github.com/GDG-IGDTUW/Competitive-Programming/tree/main/Bit%20Manipulation' },
      { name: 'Combinatorics', description: 'Contribute some binary search based competitive programming solutions.', contributeUrl: 'https://github.com/GDG-IGDTUW/Competitive-Programming/tree/main/Combinatorics' },
      { name: 'Dynamic Programming', description: 'Contribute some dynamic programming based competitive programming solutions.', contributeUrl: 'https://github.com/GDG-IGDTUW/Competitive-Programming/tree/main/DP' },
      { name: 'Game Theory', description: 'Contribute some game theory based competitive programming solutions.', contributeUrl: 'https://github.com/GDG-IGDTUW/Competitive-Programming/tree/main/Game%20Theory' },
      { name: 'Graphs', description: 'Contribute some graph based competitive programming solutions.', contributeUrl: 'https://github.com/GDG-IGDTUW/Competitive-Programming/tree/main/Graphs' },
      { name: 'Greedy', description: 'Contribute some greedy algorithms based competitive programming solutions.', contributeUrl: 'https://github.com/GDG-IGDTUW/Competitive-Programming/tree/main/Greedy%20Algorithms' },
      { name: 'Number Theory', description: 'Contribute some number theory based competitive programming solutions.', contributeUrl: 'https://github.com/GDG-IGDTUW/Competitive-Programming/tree/main/Number-Theory' },
      { name: 'Prefix Sum', description: 'Contribute some prefix sum based competitive programming solutions.', contributeUrl: 'https://github.com/GDG-IGDTUW/Competitive-Programming/tree/main/Prefix-Sum' },
      { name: 'Range Queries', description: 'Contribute some range query based competitive programming solutions.', contributeUrl: 'https://github.com/GDG-IGDTUW/Competitive-Programming/tree/main/Range%20Queries' },
      { name: 'Recursion', description: 'Contribute some recursion based competitive programming solutions.', contributeUrl: 'https://github.com/GDG-IGDTUW/Competitive-Programming/tree/main/Recursion' },
      { name: 'Sliding Window & Two Pointer', description: 'Contribute some sliding window and two pointer based competitive programming solutions.', contributeUrl: 'https://github.com/GDG-IGDTUW/Competitive-Programming/tree/main/SlidingWindowandTwoPointers' },
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
      { name: 'EcoCart', description: 'EcoCart is a mobile application designed to help users track their carbon footprint, make eco-friendly purchasing decisions, and stay motivated through rewards and insights.', contributeUrl: 'https://github.com/GDG-IGDTUW/UI-UX-1/tree/main/ECOCART' },
      { name: 'Eklavya', description: 'Eklavya is a student-centric learning and support platform designed to help school and college learners manage academics, build strong peer networks, and access personalized guidance.', contributeUrl: 'https://github.com/GDG-IGDTUW/UI-UX-1/tree/main/Eklavya' },
      { name: 'GreenPulse', description: 'GreenPulse is a smart product-impact analyzer that helps environmentally conscious shoppers understand the sustainability impact of everyday products.', contributeUrl: 'https://github.com/GDG-IGDTUW/UI-UX-1/tree/main/GreenPulse' },
      { name: 'Packify', description: 'Packify is a web-based platform that helps optimize packaging box sizes to increase transportation efficiency.', contributeUrl: 'https://github.com/GDG-IGDTUW/UI-UX-1/tree/main/Packify' },
      { name: 'ShopIt', description: 'ShopIt is a local marketplace shopping and delivery platform designed to connect nearby businesses with customers through a seamless digital experience.', contributeUrl: 'https://github.com/GDG-IGDTUW/UI-UX-1/tree/main/ShopIt' },
      { name: 'Mindfullness App', description: 'This is a mindfulness and wellness app designed to help users reduce stress and improve sleep through guided meditations, calming sleep sounds, breathing exercises, and counseling support.', contributeUrl: 'https://github.com/GDG-IGDTUW/UI-UX-1/tree/main/mindfullness%20app' },
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
