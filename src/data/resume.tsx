import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Himanshu Chauhan",
  initials: "HC",
  tagline: "Full Stack Developer | Problem Solver | Tech Enthusiast",
  url: "https://linkedin.com/in/chimanshu",
  location: "Lucknow, Uttar Pradesh, India",
  locationLink: "https://www.google.com/maps/place/Lucknow,+Uttar+Pradesh",
  description:
    "Motivated Computer Science undergraduate passionate about building scalable, user-centric applications and exploring modern technologies across frontend, backend, and cloud ecosystems.",
  summary:
    "I'm a B.Tech Computer Science student at Lovely Professional University with strong expertise in full-stack web development, backend systems, and object-oriented programming. I’ve built projects using JavaScript, PHP, and Java — from an online food ordering app to a socket-based chat system. I’m highly driven by learning, problem-solving, and applying concepts of DSA, OOP, and system design to real-world challenges. My mission is to grow into a software engineer capable of designing impactful digital solutions that improve everyday life.",
  avatarUrl: "/me.png",

  skills: [
    "C",
    "C++",
    "Python",
    "Java",
    "PHP",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Express.js",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "MySQL",
    "MongoDB",
    "REST APIs",
    "Docker",
    "Linux",
    "Git",
    "GitHub",
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: NotebookIcon, label: "Projects" },
  ],

  contact: {
    email: "Himansingh8511@gmail.com",
    tel: "+91 8601748352",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/chimanshu",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:Himansingh8511@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
      X: {
        name: "X (Twitter)",
        url: "https://twitter.com/yourusername",
        icon: Icons.x,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Freelance Projects",
      href: "#",
      location: "Remote",
      title: "Full Stack Developer (Freelance)",
      logoUrl: "/freelance.png",
      start: "Jan 2024",
      end: "Present",
      description:
        "Developing custom web applications and dynamic websites using React, PHP, and MySQL. Focused on delivering responsive, optimized, and SEO-friendly solutions. Integrated REST APIs, authentication, and real-time communication systems.",
    },
  ],

  education: [
    {
      school: "Lovely Professional University",
      href: "https://www.lpu.in",
      degree: "Bachelor of Technology in Computer Science",
      logoUrl: "/lpu.png",
      start: "Aug 2023",
      end: "Present",
      description:
        "Coursework includes Data Structures, Algorithms, Operating Systems, Networking, Database Management, and Software Engineering. Active in hackathons, coding contests, and developer clubs.",
    },
  ],

  projects: [
    {
      title: "Online Food Ordering System",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Developed a responsive web app for online food ordering featuring real-time dynamic cart, menu filters, and order summary. Focused on smooth UX using JavaScript and DOM optimization. Mobile-first and performance-optimized UI.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
    },
    {
      title: "Interactive Calendar App",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Built a full-stack calendar app supporting event creation, editing, and deletion. Integrated persistent MySQL storage and built robust PHP backend APIs. Designed minimal UI using Tailwind CSS with real-time updates.",
      technologies: ["PHP", "Tailwind CSS", "MySQL"],
    },
    {
      title: "Java Chat Application",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "Engineered a multi-threaded real-time chat app using Java Sockets and Swing GUI. Implemented secure client-server communication and user-friendly message UI with connection status indicators.",
      technologies: ["Java", "Swing", "Socket Programming"],
    },
    {
      title: "Portfolio Website",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "Designed and deployed a personal portfolio website showcasing skills, education, and projects using React, TypeScript, and Tailwind CSS. Deployed using Vercel with optimized Lighthouse scores.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    },
  ],

  achievements: [
    "3-star rating on HackerRank (Problem Solving)",
    "Bronze badge on Stack Overflow",
    "1-star badge in Basic Programming on HackerEarth",
    "Top 20 finalist in Code-A-Hunt Hackathon 2024",
    "Recognized contributor in LPU Developer Club (2024)",
  ],

  certifications: [
    "Python & Django: Web Development (Udemy, 2024)",
    "Navigating the Linux Administration Landscape (Cisco iGen, Sep 2024)",
    "C for Everyone: Programming Fundamentals (Coursera, 2023)",
    "Java Programming Masterclass (Udemy, 2024)",
  ],

  extracurricular: [
    "Participated in CyberSec Symposium — Nov 2023",
    "Competed in Code-A-Hunt Hackathon — Feb 2024",
    "Volunteered in LPU Tech Fest 2024 as Event Coordinator",
  ],

  hackathons: [],
} as const;
