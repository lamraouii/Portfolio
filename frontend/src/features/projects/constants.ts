import type { Project } from "./types";

export const PROJECTS_TITLE = "Projects";

export const PROJECTS_LABEL = "What I've built";

export const PROJECTS: Project[] = [
  {
    name: "AI Code Review Assistant",
    description:
        "An AI-powered code review assistant that analyzes Git diffs, detects issues, and generates improvement suggestions using LLMs and RAG.",
    technologies: ["Java", "Spring Boot", "Spring AI", "Ollama", "Qdrant", "GitLab API"],
    images: [
      "/images/medApp.png",
      "https://picsum.photos/seed/ai-code-2/800/600",
      "https://picsum.photos/seed/ai-code-3/800/600",
    ],
  },
  {
    name: "GestionProjet",
    description:
        "A project management platform for tracking project progress with authentication and collaboration features.",
    technologies: ["Spring Boot", "React", "PostgreSQL", "JWT"],
    images: [
      "https://picsum.photos/seed/proj-mgmt-1/800/600",
      "https://picsum.photos/seed/proj-mgmt-2/800/600",
    ],
  },
  {
    name: "MedCare",
    description: "A desktop healthcare management application.",
    technologies: ["JavaFX", "MySQL"],
    images: [
      "https://picsum.photos/seed/medcare-1/800/600",
      "https://picsum.photos/seed/medcare-2/800/600",
    ],
  },
  {
    name: "Hanouty",
    description: "An Android application for managing small shop operations.",
    technologies: ["Java", "Android", "SQLite", "Room"],
    images: [
      "https://picsum.photos/seed/hanouty-1/800/600",
      "https://picsum.photos/seed/hanouty-2/800/600",
    ],
  },
  {
    name: "CBIR",
    description:
        "An image retrieval system based on computer vision techniques.",
    technologies: ["Python", "OpenCV", "Streamlit"],
    images: [
      "https://picsum.photos/seed/cbir-1/800/600",
      "https://picsum.photos/seed/cbir-2/800/600",
    ],
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
