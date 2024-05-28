export interface Project {
  name: string;
  description: string;
  skillsUsed: number[];
}

export interface JobExperience {
  title: string;
  razonSocial: string;
  description: string;
  projects: Project[];
}

export interface Skill {
  id: number
  name: string;
  popularity: number;
}
  
  export interface ContactInfo {
    email: string;
    phone: string;
  }
  
  export interface CVData {
    professionalPosition: string;
    jobExperiences: JobExperience[];
    skills: Skill[];
    contactInfo: ContactInfo;
  }
  