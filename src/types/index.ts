// Project categories
export const CATEGORIES = [
  'Web Development',
  'Mobile Development',
  'Game Development',
  'AI & Machine Learning',
  'Data Visualization',
  'IoT',
  'Blockchain',
  'AR/VR',
  'Design',
  'Productivity',
  'Education',
  'Entertainment'
];

// Project types
export interface Author {
  name: string;
  avatar: string;
  bio?: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  author: Author;
  likes: number;
  comments: number;
  views: number;
  remixes?: number;
  followers?: number;
  tags: string[];
  category?: string;
  demoUrl?: string;
  githubUrl?: string;
  websiteUrl?: string;
  twitterUrl?: string;
  linkedinUrl?: string;
  techStack?: string[];
  screenshots?: string[];
  createdAt: string;
  lastUpdated?: string;
  lastComment?: string;
}

export interface Comment {
  id: string;
  author: Author;
  content: string;
  date: string;
  likes: number;
  replies?: Comment[];
}

// UI component types
export type ButtonVariant = 'default' | 'outline' | 'text';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ColorScheme = 'indigo' | 'blue' | 'gray' | 'green' | 'red';
