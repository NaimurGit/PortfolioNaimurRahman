export interface ContactLink {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  headline: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  summary: string;
  objective: string;
  availability: string;
  resumeUrl: string;
  photoUrl: string;
  links: ContactLink[];
}

export interface Project {
  _id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  techStack: string[];
  category: string;
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
  order: number;
}

export interface SkillGroup {
  _id: string;
  group: string;
  items: string[];
  order: number;
}

export interface Education {
  _id: string;
  degree: string;
  institution: string;
  location: string;
  session: string;
  result: string;
  order: number;
}

export interface Activity {
  _id: string;
  title: string;
  detail: string;
  year: string;
  order: number;
}

export interface Portfolio {
  profile: Profile;
  projects: Project[];
  skills: SkillGroup[];
  education: Education[];
  activities: Activity[];
}
