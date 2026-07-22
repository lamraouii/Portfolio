import type { Project } from "./types";

export const PROJECTS_TITLE = "Projects";

export const PROJECTS_LABEL = "What I've built";

export const PROJECTS: Project[] = [
  {
    name: "AI Code Review Assistant",
    description:
      "An AI-powered code review assistant that analyzes Git diffs, detects issues, and generates improvement suggestions using LLMs and RAG.",
    technologies: ["Java", "Spring Boot", "Spring AI", "Ollama", "Qdrant", "GitLab API"],
  },
  {
    name: "GestionProjet",
    description:
      "A project management platform for tracking project progress with authentication and collaboration features.",
    technologies: ["Spring Boot", "React", "PostgreSQL", "JWT"],
  },
  {
    name: "MedCare",
    description: "A desktop healthcare management application.",
    technologies: ["JavaFX", "MySQL"],
  },
  {
    name: "Hanouty",
    description: "An Android application for managing small shop operations.",
    technologies: ["Java", "Android", "SQLite", "Room"],
  },
  {
    name: "CBIR",
    description:
      "An image retrieval system based on computer vision techniques.",
    technologies: ["Python", "OpenCV", "Streamlit"],
  },
];

export const PROJECTS_ANIMATION = {
  container: {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  },
} as const;
