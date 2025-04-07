export interface Location {
  address?: string;
  postalCode?: string;
  city?: string;
  countryCode?: string;
  region?: string;
}

export interface Profile {
  network: string;
  username: string;
  url: string;
}

export interface Basics {
  name: string;
  label?: string;
  image?: string;
  email: string;
  phone?: string;
  url?: string;
  summary?: string;
  location?: Location;
  profiles: Profile[];
}

export interface WorkExperience {
  company: string;
  position: string;
  website?: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

export interface Education {
  institution: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate?: string;
  gpa?: string;
  courses?: string[];
}

export interface Skill {
  name: string;
  level?: string;
  keywords?: string[];
}

export interface Language {
  language: string;
  fluency: string;
}

export interface Interest {
  name: string;
  keywords?: string[];
}

export interface Reference {
  name: string;
  reference: string;
}

export interface Project {
  name: string;
  description?: string;
  highlights?: string[];
  keywords?: string[];
  startDate?: string;
  endDate?: string;
  url?: string;
  roles?: string[];
  entity?: string;
  type?: string;
}

export interface Resume {
  basics: Basics;
  work: WorkExperience[];
  education: Education[];
  skills: Skill[];
  languages: Language[];
  interests: Interest[];
  references: Reference[];
  projects: Project[];
}

// Utility type for partial resume data during parsing/construction
export type PartialResume = Partial<Resume>;

// Type guard to check if an object is a valid Resume
export function isResume(obj: any): obj is Resume {
  return (
    obj &&
    typeof obj === 'object' &&
    'basics' in obj &&
    'work' in obj &&
    'education' in obj &&
    'skills' in obj &&
    'languages' in obj &&
    'interests' in obj &&
    'references' in obj &&
    'projects' in obj
  );
}

// Helper function to create an empty resume structure
export function createEmptyResume(): Resume {
  return {
    basics: {
      name: '',
      email: '',
      profiles: []
    },
    work: [],
    education: [],
    skills: [],
    languages: [],
    interests: [],
    references: [],
    projects: []
  };
}