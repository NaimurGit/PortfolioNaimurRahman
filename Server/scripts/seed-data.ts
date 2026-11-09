import type { ProfileDocument } from "../src/lib/models/Profile";
import type { ProjectDocument } from "../src/lib/models/Project";
import type { SkillDocument } from "../src/lib/models/Skill";
import type { EducationDocument } from "../src/lib/models/Education";
import type { ActivityDocument } from "../src/lib/models/Activity";

export const seedProfile: ProfileDocument = {
  name: "Md Naimur Rahman",
  headline: "Full-stack Developer building scalable web products",
  role: "Full-stack Developer",
  location: "Ashulia, Savar, Dhaka, Bangladesh",
  email: "naimur.turjo03@gmail.com",
  phone: "0173635473",
  summary:
    "Software Engineering graduate from Daffodil International University with a strong foundation in full-stack web development using React, Node.js, Express, MongoDB and MySQL. Passionate about building scalable web applications, exploring Machine Learning and Data Science, and shipping products with the help of modern AI tooling.",
  objective:
    "Seeking an entry-level Software Engineer position where I can contribute to real products while continuing to grow technically across the stack.",
  availability: "Open to entry-level Software Engineer roles",
  resumeUrl: "/resume/Md_Naimur_Rahman_Dev_Resume.pdf",
  photoUrl: "/naimur.png",
  links: [
    { label: "GitHub", href: "https://github.com/NaimurGit" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/md-naimur-rahman-turjo",
    },
    { label: "Email", href: "mailto:naimur.turjo03@gmail.com" },
  ],
};

export const seedProjects: ProjectDocument[] = [
  {
    title: "Grade-Fusion",
    tagline: "Result sheet management for university teachers",
    description:
      "A web-based tool that helps university teachers manage and generate student result sheets effortlessly. Teachers filter students by department, batch, section and course, then download customised Excel sheets for midterm, final, assignments and total results.",
    highlights: [
      "Course-specific student data entry with CLO-based evaluation",
      "Dynamic filtering by department, batch, section and course",
      "Export-ready Excel result sheets for every assessment type",
    ],
    techStack: [
      "React",
      "React Router",
      "Tailwind CSS",
      "DaisyUI",
      "Firebase Auth",
      "Express.js",
      "MongoDB",
      "Vercel",
    ],
    category: "Full-stack Web Application",
    liveUrl: "https://grade-fusion.web.app/",
    repoUrl: "https://github.com/NaimurGit",
    featured: true,
    order: 1,
  },
  {
    title: "TurjoFolio",
    tagline: "MERN portfolio with a Next.js API",
    description:
      "This very portfolio: a React + Vite frontend powered by a Next.js REST API and MongoDB. Content for projects, skills, education and activities is served from the database so it can be updated without touching the UI.",
    highlights: [
      "React frontend with a clean, responsive dark UI",
      "Next.js route handlers backed by Mongoose models",
      "Contact form that persists messages to MongoDB",
    ],
    techStack: ["React", "Vite", "Tailwind CSS", "Next.js", "MongoDB", "Mongoose"],
    category: "MERN Stack",
    liveUrl: "",
    repoUrl: "https://github.com/NaimurGit",
    featured: true,
    order: 2,
  },
];

export const seedSkills: SkillDocument[] = [
  {
    group: "Languages",
    items: ["JavaScript", "Python", "HTML", "CSS"],
    order: 1,
  },
  {
    group: "Frontend",
    items: ["React.js", "React Router", "Tailwind CSS", "DaisyUI", "Vite"],
    order: 2,
  },
  {
    group: "Backend & Data",
    items: ["Node.js", "Express.js", "REST APIs", "MongoDB", "MySQL", "Firebase"],
    order: 3,
  },
  {
    group: "Tools & Practices",
    items: ["Git", "GitHub", "Firebase Auth", "AI-assisted development (Claude, OpenCode)"],
    order: 4,
  },
  {
    group: "Soft Skills",
    items: ["Teamwork", "Time Management", "Communication"],
    order: 5,
  },
];

export const seedEducation: EducationDocument[] = [
  {
    degree: "B.Sc in Software Engineering (Major: Data Science)",
    institution: "Daffodil International University",
    location: "Ashulia, Savar, Dhaka",
    session: "2022 - 2026",
    result: "CGPA 3.63 / 4.00",
    order: 1,
  },
  {
    degree: "Higher Secondary Certificate (Science)",
    institution: "Nawabgonj Government College",
    location: "Chapainawabgonj Sadar, Chapainawabgonj",
    session: "2021",
    result: "GPA 5.00 / 5.00",
    order: 2,
  },
  {
    degree: "Secondary School Certificate (Science)",
    institution: "Harimohan Govt. High School",
    location: "Chapainawabgonj Sadar, Chapainawabgonj",
    session: "2019",
    result: "GPA 5.00 / 5.00",
    order: 3,
  },
  {
    degree: "Junior School Certificate",
    institution: "Harimohan Govt. High School",
    location: "Chapainawabgonj Sadar, Chapainawabgonj",
    session: "2016",
    result: "GPA 5.00 / 5.00 (Scholarship in General Category)",
    order: 4,
  },
];

export const seedActivities: ActivityDocument[] = [
  {
    title: "Volunteer - Bangladesh Cyber Security Awareness Day",
    detail: "Hosted by Daffodil International University.",
    year: "2023",
    order: 1,
  },
  {
    title: "Volunteer - Software Engineering Club Programme",
    detail: "Supported club events and student activities at DIU.",
    year: "2023",
    order: 2,
  },
];
