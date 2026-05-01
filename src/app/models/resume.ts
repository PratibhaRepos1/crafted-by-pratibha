  export interface Resume {
    Experience: Experience[];
    Education: Education[];
    ProfessionalSkills: string[];
    Languages: string[];
    Certifications: Certification[];
    achievements: string[];
  }

  export interface AiPortfolioItem {
    name: string;
    deployment: string;
    techStack: string;
    description: string;
    liveUrl?: string;
    repoUrl?: string;
  }

  export interface Experience {
    dateFrom: string;
    dateTo: string;
    company: string;
    jobTitle: string;
    location: string;
    projects?: string[];
    responsibilities: string[];
    achievements?: string[];
  }

  export interface Education {
    institution: string;
    year: string | number;
    degree: string;
    location: string;
  }

  export interface professionalSkills {
    category: string;
    skills: string[];
  }

  export interface Languages  {
    name: string;
    level: string;
  }

  export interface Certification {
    name: string;
    issuer: string;
    year: string;
  }
