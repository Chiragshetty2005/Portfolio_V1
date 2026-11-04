export const projects = [
  {
    slug: "scrp",
    index: "01",
    letter: "S",
    title: "Smart Caching Reverse Proxy",
    shortTitle: "SCRP",
    year: "2025",
    role: "Design & build",
    featured: true,
    accent: "#dfe3ff",
    ink: "#20266b",
    tagline:
      "A reverse proxy that turns a burst of identical requests into one upstream call.",
    summary:
      "Node.js, Express, Redis, WebSockets, React. Request coalescing, short-lived caching, and a live dashboard.",
    stack: ["Node.js", "Express", "Redis", "WebSockets", "React"],
    repo: "",
    demo: "",
    overview:
      "SCRP sits between the client and an upstream API. When several requests ask for the same thing at the same moment, it collapses them into a single call, caches the result briefly in Redis, and streams what happened to a React dashboard.",
    problem:
      "Caching helps after a key exists. It does not help the first burst: ten users hit a cold endpoint, ten identical calls reach the backend, and the same expensive work happens ten times. The fix is not a longer TTL. It is request coalescing.",
    approach: [
      "Intercept outbound API traffic through an Express reverse proxy.",
      "Key each request by method, path, and body, then track what is already in flight.",
      "Make duplicate concurrent requests await the same upstream promise instead of firing their own.",
      "Store short-lived responses in Redis so repeat reads skip the backend entirely.",
      "Stream cache hits, dedup counts, and latency to a React dashboard over WebSockets.",
    ],
    architecture: {
      nodes: [
        "Client",
        "Express proxy",
        "In-flight registry",
        "Redis cache",
        "Upstream API",
      ],
      note: "Cache hits return from Redis. Misses check the in-flight registry before touching the upstream.",
    },
    signals: [
      {
        value: "N → 1",
        label: "Concurrent duplicates collapse into a single upstream call",
      },
      {
        value: "TTL",
        label: "Short-lived Redis cache, scoped per route",
      },
      {
        value: "Live",
        label: "WebSocket dashboard for hits, dedup, and latency",
      },
    ],
    notes:
      "The interesting part was not the cache. It was the race. Two requests arriving a millisecond apart both miss the cache; without an in-flight registry, both go upstream. Coalescing closes that window.",
  },
  {
    slug: "codeclash",
    index: "02",
    letter: "C",
    title: "CodeClash",
    shortTitle: "CodeClash",
    year: "2025",
    role: "Design & build",
    featured: false,
    accent: "#ffe3d8",
    ink: "#6b2415",
    tagline:
      "An animated frontend study: motion as hierarchy, not decoration.",
    summary:
      "React, Tailwind CSS, GSAP. Page transitions, scroll-linked reveals, and a reusable motion system.",
    stack: ["React", "Tailwind CSS", "GSAP"],
    repo: "",
    demo: "",
    overview:
      "A landing experience built to practise motion systems: page transitions, scroll-triggered reveals, hover states, and micro-interactions that stay coherent across a whole interface.",
    problem:
      "Most student frontends stop at “it renders”. CodeClash treats motion as part of the interface: what enters, when, and how fast. The goal was a system, not a pile of one-off animations.",
    approach: [
      "Build a reusable React and Tailwind component system.",
      "Choreograph page transitions with GSAP timelines.",
      "Tie reveals and parallax to scroll with ScrollTrigger.",
      "Keep hover and focus states consistent across every component.",
    ],
    architecture: {
      nodes: [
        "React",
        "Component system",
        "GSAP timelines",
        "ScrollTrigger",
        "Interface",
      ],
      note: "Motion primitives live at the component layer so every section shares the same timing language.",
    },
    signals: [
      {
        value: "GSAP",
        label: "Timeline-based page and section transitions",
      },
      {
        value: "Scroll",
        label: "Scroll-triggered reveals and parallax",
      },
      {
        value: "System",
        label: "Reusable motion primitives, not one-off effects",
      },
    ],
    notes:
      "Good motion explains hierarchy. If an animation does not tell you where you are or what just changed, it is probably decoration.",
  },
  {
    slug: "mac-reimagined",
    index: "03",
    letter: "M",
    title: "MAC Reimagined",
    shortTitle: "MAC Reimagined",
    year: "2025",
    role: "Design & build",
    featured: false,
    accent: "#e4efe5",
    ink: "#1f4a2c",
    tagline:
      "A scroll-choreographed rebuild of Apple's Mac page, with a 3D model in the middle.",
    summary:
      "React, Three.js, GSAP, Tailwind CSS. Modular sections, scroll-linked camera motion, and a responsive rebuild.",
    stack: ["React", "Three.js", "GSAP", "Tailwind CSS"],
    repo: "",
    demo: "",
    overview:
      "A responsive redesign of Apple's Mac product page: modular sections, a Three.js model you can inspect, and GSAP ScrollTrigger keeping DOM type and 3D motion in the same rhythm.",
    problem:
      "Apple's pages are a benchmark for pacing. Rebuilding one is a study in scroll choreography, responsive layout, and keeping a real-time 3D scene from fighting the rest of the page.",
    approach: [
      "Compose the page from modular React sections.",
      "Load and frame a Mac model with Three.js.",
      "Drive section and camera motion with GSAP ScrollTrigger.",
      "Rebuild the layout for mobile without losing the pacing.",
    ],
    architecture: {
      nodes: [
        "Scroll",
        "ScrollTrigger",
        "Camera + model",
        "React sections",
        "Interface",
      ],
      note: "Scroll position is the shared clock: it drives the DOM sections and the Three.js camera from one source.",
    },
    signals: [
      {
        value: "Three.js",
        label: "Interactive 3D device in the browser",
      },
      {
        value: "ScrollTrigger",
        label: "Scroll-linked camera and section motion",
      },
      {
        value: "Responsive",
        label: "Rebuilt layout across breakpoints",
      },
    ],
    notes:
      "The hard part is rhythm. A 3D scene runs on its own clock and the page scrolls on another. ScrollTrigger is what keeps them in the same sentence.",
  },
  {
    slug: "ai-resume-analyzer",
    index: "04",
    letter: "A",
    title: "AI Resume Analyzer",
    shortTitle: "AI Resume Analyzer",
    year: "2025",
    role: "Design & build",
    featured: false,
    accent: "#f7e8bb",
    ink: "#5a4300",
    tagline:
      "An in-browser tool that reads a resume the way a screening system might.",
    summary:
      "JavaScript, Puter.js, Node.js. PDF and DOCX parsing, ATS scoring, and keyword analysis in the browser.",
    stack: ["JavaScript", "Puter.js", "Node.js"],
    repo: "",
    demo: "",
    overview:
      "Upload a PDF or DOCX and get a structured read: extracted skills and experience, an ATS compatibility score, keyword coverage, and concrete suggestions, processed in the browser with Puter.js.",
    problem:
      "Screening is opaque. Candidates rarely see why a resume is filtered out. The tool makes the first pass legible: what was parsed, what was missing, and what to fix.",
    approach: [
      "Parse PDF and DOCX files in the browser.",
      "Extract sections, skills, and experience with NLP-based analysis.",
      "Score ATS compatibility and keyword coverage against a target role.",
      "Separate parsing, scoring, and suggestion modules so each can change independently.",
    ],
    architecture: {
      nodes: [
        "Upload",
        "PDF / DOCX parser",
        "Extraction",
        "Scoring",
        "Report",
      ],
      note: "Parsing, scoring, and suggestions are separate modules. A change to the scoring model never touches the file pipeline.",
    },
    signals: [
      {
        value: "In-browser",
        label: "Puter.js handles processing client-side",
      },
      {
        value: "PDF / DOCX",
        label: "Two input formats, one pipeline",
      },
      {
        value: "ATS",
        label: "Compatibility and keyword scoring",
      },
    ],
    notes:
      "The model is the easy part. Most of the work is extraction: if the sections are wrong, every score downstream is wrong too.",
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);

export const getNextProject = (slug) => {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return projects[0];
  return projects[(index + 1) % projects.length];
};
