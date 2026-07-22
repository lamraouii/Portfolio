import type { ExperienceEntry } from "./types";

export const EXPERIENCE_TITLE = "Experience";

export const EXPERIENCE_LABEL = "My journey";

export const EXPERIENCE_ENTRIES: ExperienceEntry[] = [
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
    title: "Java SE 17 Developer",
    organization: "Oracle Certification",
    period: "2024",
    description:
      "Achieved Oracle Certified Professional: Java SE 17 Developer certification, validating expertise in Java language fundamentals, OOP principles, and modern Java features.",
    tags: ["Java", "OOP", "Oracle"],
    kind: "certification",
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

export const KIND_LABEL: Record<string, string> = {
  work: "Work",
  education: "Education",
  certification: "Certification",
};

export const EXPERIENCE_ANIMATION = {
  container: {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
  },
  item: {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  },
} as const;
