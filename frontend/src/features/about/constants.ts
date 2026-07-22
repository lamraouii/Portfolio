import type { AboutCard, AboutStat } from "./types";

export const ABOUT_TITLE = "About Me";

export const ABOUT_PARAGRAPHS = [
  "I'm a Computer Engineering student focused on backend development and artificial intelligence.",
  "I build scalable applications using Java, Spring Boot, modern web technologies, and AI-powered solutions.",
] as const;

export const ABOUT_CARDS: AboutCard[] = [
  {
    title: "Backend Engineering",
    description: "Java, Spring Boot, APIs, Databases",
    icon: "Server",
  },
  {
    title: "Artificial Intelligence",
    description: "LLMs, RAG, Spring AI, Ollama",
    icon: "Brain",
  },
  {
    title: "Software Engineering",
    description: "Clean Architecture, Testing, DevOps",
    icon: "Layers",
  },
];

export const ABOUT_STATS: AboutStat[] = [
  { value: "4+", label: "Years Learning" },
  { value: "10+", label: "Projects" },
  { value: "Java SE 17", label: "Certification" },
];

export const ABOUT_ANIMATION = {
  container: {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  },
} as const;
