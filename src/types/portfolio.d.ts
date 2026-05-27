export interface BilingualText {
  en: string;
  pt: string;
}

export interface Experience {
  id: string;
  role: BilingualText;
  company: string;
  location: string;
  period: {
    start: string;
    end: string;
  };
  description: BilingualText;
  technologies: string[];
  current?: boolean;
}

export interface Project {
  id: string;
  title: BilingualText;
  description: BilingualText;
  image: string;
  url?: string;
  tags: string[];
  isConfidential: boolean;
  highlights?: BilingualText[];
}

export interface Skill {
  category: BilingualText;
  items: string[];
}

export interface Education {
  id: string;
  degree: BilingualText;
  institution: string;
  location: string;
  period: {
    start: string;
    end: string;
  };
  description?: BilingualText;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year?: number;
}

export interface ContactInfo {
  name: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
}

export interface PortfolioData {
  contact: ContactInfo;
  tagline: BilingualText;
  summary: BilingualText;
  experience: Experience[];
  projects: Project[];
  skills: Skill[];
  education: Education[];
  certifications: Certification[];
  languages: {
    language: string;
    proficiency: BilingualText;
  }[];
  interests: BilingualText[];
}

export type Language = 'en' | 'pt';
export type Theme = 'light' | 'dark';
