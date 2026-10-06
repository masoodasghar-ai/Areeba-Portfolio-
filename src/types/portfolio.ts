export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  category: 'global' | 'climate' | 'youth' | 'policy';
  badge?: string;
  summary: string;
  achievements: string[];
  keyOutcomes?: string[];
  tags: string[];
  skills?: string[];
}

export interface InitiativeItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  category: 'climate' | 'diplomacy' | 'health' | 'youth';
  image: string;
  shortDesc: string;
  fullDesc: string;
  objectives: string[];
  impactMetrics: string[];
  partners: string[];
  skills?: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  honors: string[];
  courses?: string[];
}

export interface CompetencyItem {
  id: string;
  title: string;
  description: string;
  subfields: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; level?: string; context?: string }[];
}
