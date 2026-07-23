import type { ExperienceEntry } from "../experience/types";

export const JOURNEY_TITLE = "My Journey";
export const JOURNEY_LABEL = "Education & Experience";

export const JOURNEY_ENTRIES: ExperienceEntry[] = [
  {
    title: "Backend & AI Developer",
    organization: "Freelance",
    period: "2024 — Present",
    description:
      "Building AI-powered backend systems and REST APIs. Developing production-grade applications using Java, Spring Boot, and Spring AI integrated with local LLMs and vector databases.",
    tags: ["Java", "Spring Boot", "Spring AI", "Ollama", "Qdrant"],
    kind: "work",
    current: true,
  },
  {
    title: "Full Stack Developer",
    organization: "GestionProjet — Academic Project",
    period: "2023",
    description:
      "Designed and built a collaborative project management platform with JWT-based authentication, role management, and real-time progress tracking.",
    tags: ["Spring Boot", "React", "PostgreSQL", "JWT"],
    kind: "work",
  },
  {
    title: "Computer Engineering",
    organization: "University",
    period: "2021 — Present",
    description:
      "Bachelor's degree in Computer Engineering. Core focus on algorithms, software architecture, databases, networks, and artificial intelligence.",
    tags: ["Algorithms", "Software Architecture", "AI", "Networks"],
    kind: "education",
    current: true,
  },
];

export const JOURNEY_ANIMATION = {
  container: {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },
} as const;
