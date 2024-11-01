  export interface Resume {
    Experience: Experience[];
    Education: Education[];
    ProfessionalSkills: string[];
    Languages: string[];
    achievements: string[];
  }
  
  export interface Experience {
    dateFrom: string;
    dateTo: string;
    company: string;
    jobTitle: string;
    location: string;
    projects?: string[]; // Optional, in case you want to add projects later
    responsibilities: string[];
    achievements: string[];
  }
  
  export interface Education {
    institution: string;
    year: string | number; // Allows for both string and number types for year
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