export const profile = {
  name: "Chirag P Shetty",
  shortName: "Chirag Shetty",
  initials: "CS",
  role: "Backend & Systems Developer",
  location: "Bangalore, India",
  timezone: "IST · UTC+5:30",
  email: "chiraglab007@gmail.com",
  phone: "+91 63609 33652",
  phoneHref: "+916360933652",
  github: "https://github.com/Chiragshetty2005",
  githubHandle: "Chiragshetty2005",
  resume: "/resume/Chirag-Shetty-Resume.pdf",
  availability: "Open to internships and backend / full-stack roles",

  intro:
    "Computer science undergraduate in Bangalore. I build backend systems that stay fast under load, and interfaces that make them legible.",

  resumeSummary:
    "Computer science undergraduate at Dayananda Sagar University (B.Tech, CSE, 2023–2027) with backend-focused internship experience at Tetherfi. Comfortable with C, Python, JavaScript, SQL, .NET Core, and MariaDB. I build systems like smart caching reverse proxies and interactive frontends, with a focus on clean code, performance, and learning industry-standard practices.",

  bio: [
    "I'm Chirag. I study computer science at Dayananda Sagar University and spend most of my time on the layer where requests, caches, and latency meet.",
    "The work I enjoy most has a measurable shape: fewer upstream calls, faster responses, clearer dashboards. I also care about how that work feels, which is why I keep building interactive frontends with React, Three.js, and GSAP.",
    "In 2025 I interned at Tetherfi, working on .NET Core services and MariaDB alongside senior engineers. Outside of that, I build projects I can benchmark, break, and explain.",
  ],

  education: [
    {
      school: "Dayananda Sagar University",
      degree: "B.Tech, Computer Science Engineering",
      period: "2023 — 2027",
      location: "Bangalore, India",
      note: "Coursework across data structures, operating systems, databases, and computer networks.",
    },
    {
      school: "Jyothy Composite PU College",
      degree: "Senior Secondary (PCMB)",
      period: "2021 — 2023",
      location: "Karnataka, India",
      note: "Physics, chemistry, mathematics, and biology under the Karnataka State Board.",
    },
  ],

  experience: [
    {
      company: "Tetherfi",
      role: "Software Intern",
      period: "2025",
      location: "Bangalore, India",
      summary:
        "Worked inside a production backend team, building and maintaining services that real applications depend on.",
      bullets: [
        "Developed and maintained backend services in .NET Core, with a focus on clean, well-structured APIs.",
        "Worked with MariaDB and SQL on schema design, queries, and data-driven feature integration.",
        "Collaborated with senior engineers on debugging, testing, and feature implementation, and saw how production workflows actually run.",
      ],
      tags: [".NET Core", "MariaDB", "SQL", "REST APIs"],
    },
  ],

  certifications: [
    {
      title: "Cyber Job Simulation",
      issuer: "Deloitte Australia",
      tag: "Cybersecurity",
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte Australia",
      tag: "Data",
    },
    {
      title: "Web Development",
      issuer: "",
      tag: "Foundations",
    },
    {
      title: "Introduction to Career Skills in Software Development",
      issuer: "",
      tag: "Foundations",
    },
  ],

  languages: [
    { name: "English", level: "Fluent" },
    { name: "Kannada", level: "Native" },
    { name: "Hindi", level: "Conversational" },
  ],

  skills: [
    {
      label: "Languages",
      items: ["C", "Python", "JavaScript", "SQL"],
      usedIn: null,
      note: "The base layer: memory, scripting, the web, and queries.",
    },
    {
      label: "Backend",
      items: ["Node.js", "Express", "REST APIs", "WebSockets", ".NET Core"],
      usedIn: { label: "SCRP case study", href: "/projects/scrp" },
      note: "Services, proxies, and the contracts between them.",
    },
    {
      label: "Data",
      items: ["Redis", "MariaDB", "SQL schema design"],
      usedIn: { label: "SCRP case study", href: "/projects/scrp" },
      note: "Short-lived caches, relational schemas, and queries that stay readable.",
    },
    {
      label: "Frontend",
      items: ["React", "Three.js", "GSAP", "Tailwind CSS"],
      usedIn: { label: "MAC Reimagined", href: "/projects/mac-reimagined" },
      note: "Interfaces where motion and 3D carry meaning, not just decoration.",
    },
    {
      label: "Workflow",
      items: ["Git", "GitHub", "Linux", "VS Code"],
      usedIn: { label: "Tetherfi internship", href: "/experience" },
      note: "How the work ships: versioned, reviewed, and debuggable.",
    },
  ],

  principles: [
    {
      title: "Measure before optimizing",
      body: "If I can't show the before and after, I don't understand the system yet. Cache hit rates and latency numbers are part of the design, not a report at the end.",
    },
    {
      title: "Keep the seams visible",
      body: "Logs, dashboards, and clear APIs. A system that can't explain what it is doing is a system that will be hard to trust.",
    },
    {
      title: "Motion is hierarchy",
      body: "An interface should tell you where you are and what just changed. If an animation doesn't do that, it is decoration.",
    },
  ],
};

export const navigation = [
  { to: "/projects", label: "Work", index: "01" },
  { to: "/about", label: "About", index: "02" },
  { to: "/experience", label: "Experience", index: "03" },
  { to: "/skills", label: "Skills", index: "04" },
  { to: "/resume", label: "Resume", index: "05" },
  { to: "/contact", label: "Contact", index: "06" },
];

export const primaryNavigation = navigation.filter((item) =>
  ["/projects", "/about", "/resume", "/contact"].includes(item.to)
);
