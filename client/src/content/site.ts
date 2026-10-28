// All of the site's text, links and photos. Both layouts read from here,
// so an edit in this file shows up everywhere.
import type { StaticImageData } from "next/image";
import beach from "@/assets/beach.jpg";
import gradPortrait from "@/assets/grad-portrait.jpg";
import hotCocoa from "@/assets/hot-cocoa-bryant-park.jpg";

// `focus` is a CSS object-position, used when a layout crops the photo.
// `zoom` scales the photo up around that point (1.2 = 20% closer).
export type Photo = { src: StaticImageData; alt: string; caption?: string; focus?: string; zoom?: number };

export const profile = {
  name: "Sarah Zwart",
  role: "Software Developer",
  email: "sarahczwart@gmail.com",
  github: "https://github.com/sarahzwart",
  linkedin: "https://www.linkedin.com/in/sarah-zwart",
};

// The thin strip above the navbar
export const banner = ["Computer science, Lehigh University", "Control systems programmer at USIS Audiovisual"];

export const hero = {
  headline: ["Hello, I'm Sarah.", "Welcome to my webpage!"],
  intro:
    "I'm currently a Control Systems Programmer at USIS Audiovisual, where I design and program the touch panels people use to run AV systems. I also build web apps in React and TypeScript, and I love learning new technologies.",
};

export const about = {
  heading: "A little about me",
  paragraphs: [
    "I earned my B.S. in computer science with a minor in data science from Lehigh University in May of 2025. I wrapped up my degree with a year-long capstone: a React Native and TypeScript app that rates how accessible public facilities are, so people with disabilities can plan where to go.",
    "Today I'm a control systems programmer at USIS Audiovisual. I design and program the touch panels people use to run AV systems and make sure every networked device talks to the other reliably.",
  ],
};

export const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Python",
  "Java",
  "SQL",
  "Crestron",
  "Q-SYS",
];

export type Job = { what: string; where: string; when: string; summary: string };

export const experience: Job[] = [
  {
    what: "Control Systems Programmer",
    where: "USIS Audiovisual",
    when: "July 2025 - Present",
    summary:
      "I build the touch panel apps people use to run meeting rooms and AV systems. I've recently been working on integrating the React and TypeScript framework into the Crestron touch panels. I also program in SIMPL Windows and Q-SYS.",
  },
  {
    what: "Web Developer",
    where: "Lehigh University",
    when: "January 2024 - May 2025",
    summary:
      "I kept the Lehigh Computer Science website accurate and up to date, built the design changes the department asked for, and moved the Capstone website to a new host.",
  },
  {
    what: "B.S. Computer Science, minor in Data Science",
    where: "Lehigh University",
    when: "August 2021 - May 2025",
    summary:
      "I finished with a year-long capstone: a React Native app for iOS and Android that rates how accessible public facilities are. I also took classes in Cybersecurity, Databases, Machine Learning, Web Development, and many more!",
  },
];

export type Project = {
  name: string;
  stack: string;
  about: string;
  link?: string; // leave out for private or work projects
  status?: string;
};

export const projects: Project[] = [
  {
    name: "Crestron Touch Panel Framework",
    stack: "React, TypeScript, Tailwind CSS",
    about:
      "A React framework for the Crestron touch panels I build at work. Reusable hooks handle the panel's digital, analog and serial signals, and a theme system gives every client's panels one consistent design.",
    status: "In progress",
  },
  {
    name: "Facility Accessibility App",
    stack: "TypeScript, Expo, React Native",
    about:
      "My capstone project: a mobile app that rates how accessible public facilities are, so people with disabilities can decide where to go based on their own needs.",
    link: "https://drive.google.com/drive/folders/1LoIyNDDRjvS_BW3q5_-bnTWd3U0UzP4q?usp=sharing",
  },
  {
    name: "Whiskr",
    stack: "TypeScript, Next.js, TensorFlow, MongoDB",
    about:
      "A social app for cat photos only. A TensorFlow image classifier checks every upload and turns away anything that isn't a cat.",
    link: "https://next-social-app-six.vercel.app",
    status: "In progress",
  },
  {
    name: "Plant Pal",
    stack: "React, Vite, Express, ElephantSQL, Google OAuth",
    about:
      "Track when each plant in your garden needs water. Sign in with Google, add plants from the Perenual plant database, and paid users get care tips.",
    link: "https://github.com/sarahzwart/plantpal",
  },
  {
    name: "Database Banking System",
    stack: "Java, Oracle, PL/SQL",
    about:
      "A simulated bank built for my database systems class, with accounts, deposits, withdrawals and transfers handled by stored procedures that keep the data consistent.",
    link: "https://sarah-zwart-bank-database.netlify.app",
  },
];

// `icon` picks a drawing from components/icons.tsx
export type Hobby = { icon: "puzzle" | "matcha" | "dumbbell" | "city"; title: string; text: string };

export const hobbies: Hobby[] = [
  {
    icon: "puzzle",
    title: "Puzzles",
    text: "I play the NYT games, especially Pips, the crossword and Strands, and love a good 1,000-piece puzzle.",
  },
  {
    icon: "matcha",
    title: "Coffee & matcha",
    text: "I make my own matcha at home and I'm always trying new coffee and matcha shops nearby.",
  },
  {
    icon: "dumbbell",
    title: "Fitness & food",
    text: "I lift weights and run, and I love finding high-protein, whole-food recipes that actually taste good.",
  },
  {
    icon: "city",
    title: "Exploring the city",
    text: "Some of my favorite days are spent exploring the city with friends.",
  },
];

export const contact = {
  heading: "Let's connect",
  text: "Open to new roles and projects. Email works best.",
};

export const photos = {
  about: { src: beach, alt: "Sarah smiling on a sunny beach", focus: "50% 45%", zoom: 1.25 },
  experience: {
    src: gradPortrait,
    alt: "Sarah smiling in front of a Lehigh University chapel at graduation",
    focus: "100% center",
  },
  hobbies: {
    src: hotCocoa,
    alt: "Sarah holding a hot cocoa topped with whipped cream at Bryant Park",
    caption: "",
    focus: "62% center",
  },
} satisfies Record<string, Photo>;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#hobbies", label: "Hobbies" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];
