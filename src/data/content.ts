export const profile = {
  name: "Sanish Thapa Shrestha",
  firstName: "Sanish",
  location: "Bhaktapur, Nepal",
  role: "Computer Engineering Student",
  institution: "Khwopa Engineering College",
  tagline: "I build things in layers from the pixel up, and from the bit up.",
  bio: [
    "I'm a Computer Engineering student at Khwopa Engineering College in Bhaktapur, Nepal, working through my fourth semester while building real, working software on the side — not assignments, actual projects with their own roadmaps.",
    "My work splits into two registers that I keep coming back to. One is structured: full applications planned out in phases, like Canopy, a Django-based photo-sharing platform I'm building solo. The other is experimental: smaller systems where I get to play with the raw mechanics underneath, hand-tracked particle physics, bitwise data encoding, the kind of thing that doesn't ship a product but teaches you how the layer below actually works.",
    "I'd rather understand both ends of the stack than specialize too early.",
  ],
  socials: {
    github: "https://github.com/Endurance3000",
    linkedin: "https://www.linkedin.com/in/sanishthapashrestha/",
    instagram: "https://www.instagram.com/solosingularity/",
    facebook: "https://www.facebook.com/sanishshrestha3000",
  },
};

export type Project = {
  id: string;
  index: string;
  title: string;
  kicker: string;
  description: string;
  details: string[];
  stack: string[];
  status: "in development" | "academic submission" | "experimental build";
  year: string;
  accent: "signal" | "moss";
};

export const projects: Project[] = [
  {
    id: "canopy",
    index: "01",
    title: "Canopy",
    kicker: "Nature photography community platform",
    description:
      "A Django-based platform for a community of nature photographers to share, organize, and discuss their work — built solo as a structured, phased academic project, not a weekend prototype.",
    details: [
      "Architected across five Django apps — accounts, photos, albums, interactions, and core — each owning a clear slice of the platform.",
      "Planned and built against an eight-phase roadmap, with pagination favored over infinite scroll and nested comments scoped as a deliberate stretch goal rather than a rushed default.",
      "Backed by SQLite for local development, with the full project built and run for local submission rather than public deployment.",
    ],
    stack: ["Django", "Python", "SQLite", "HTML/CSS"],
    status: "academic submission",
    year: "2026",
    accent: "moss",
  },
  {
    id: "gesture-field",
    index: "02",
    title: "Gesture Particle Field",
    kicker: "Hand-tracked 3D particle system",
    description:
      "An interactive 3D particle system where hand movement, captured live through a webcam, warps and steers thousands of particles in real time — the same idea this portfolio's hero section borrows from.",
    details: [
      "Built with Three.js for the particle rendering and MediaPipe for real-time hand landmark tracking, translating finger and palm position into forces applied across the particle field.",
      "Tuned through several rounds of stability work — filtering noisy tracking data, adding dead zones so small jitter doesn't read as intent, shaping sensitivity, and damping motion so the field feels controlled rather than chaotic.",
      "Refactored from a single HTML file into separated markup, styles, and logic, cleaning up the project without touching its behavior.",
    ],
    stack: ["Three.js", "MediaPipe", "JavaScript", "WebGL"],
    status: "in development",
    year: "2026",
    accent: "signal",
  },
  {
    id: "personality-engine",
    index: "03",
    title: "Personality Assessment Engine",
    kicker: "C++ engine with bitwise data encoding",
    description:
      "A C++ engine for running structured personality assessments, with answer data encoded through a custom XOR scheme before being written to local storage.",
    details: [
      "Indexes assessment questions algorithmically rather than hardcoding flow, making the question set easier to extend.",
      "Encodes response data with a custom XOR binary scheme before it touches disk, as a hands-on exercise in bitwise data security rather than relying on a library to handle it.",
      "Written close to the metal in C++, with manual attention to how data is structured and stored rather than leaning on higher-level abstractions.",
    ],
    stack: ["C++", "Bitwise Encoding", "File I/O"],
    status: "experimental build",
    year: "2025",
    accent: "signal",
  },
];

export const registers = [
  {
    label: "Structured",
    description:
      "Full platforms, planned in phases, with a clear app architecture before a line of code is written.",
    examples: ["Django app design", "Database modeling", "Roadmapping", "Auth & permissions"],
  },
  {
    label: "Experimental",
    description:
      "Smaller systems built to understand a mechanism — gesture math, encoding schemes, rendering pipelines.",
    examples: ["WebGL & Three.js", "Hand-tracking input", "Bitwise encoding", "C++ fundamentals"],
  },
];

export const stack = [
  { name: "Python", group: "language" },
  { name: "C++", group: "language" },
  { name: "JavaScript", group: "language" },
  { name: "Django", group: "backend" },
  { name: "SQLite", group: "backend" },
  { name: "React", group: "frontend" },
  { name: "Three.js", group: "frontend" },
  { name: "MediaPipe", group: "frontend" },
  { name: "Tailwind CSS", group: "frontend" },
  { name: "Git & GitHub", group: "tooling" },
  { name: "VS Code", group: "tooling" },
  { name: "Bitwise / XOR I/O", group: "systems" },
];
