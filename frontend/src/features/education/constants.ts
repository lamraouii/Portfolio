import type { JourneyEntry } from "./types";

export const JOURNEY_TITLE = "Academic Journey";
export const JOURNEY_LABEL = "Education & Experience";

/**
 * Timeline entries — ordered top-to-bottom (most recent first).
 * "education" entries always render on the LEFT on desktop.
 * "professional" entries always render on the RIGHT on desktop.
 * On mobile, all entries render right of the left-side line.
 */
export const JOURNEY_ENTRIES: JourneyEntry[] = [
  {
    id: "engineering-cycle",
    category: "education",
    title: "Engineering Cycle — Computer Engineering",
    institution: "ENSA Oujda",
    period: "2024 — Present",
    description:
      "Specializing in software architecture, AI, distributed systems, and cloud computing. Focused on backend development and applied machine learning.",
    tags: ["Computer Engineering", "AI", "Distributed Systems"],
    current: true,
  },
  {
    id: "current-internship",
    category: "professional",
    title: "Software Engineering Intern",
    institution: "Company Name",
    period: "July 2026 — Present",
    description:
      "Contributing to backend systems and AI integrations as part of an end-of-study internship (PFE).",
    tags: ["Backend", "Spring Boot", "AI"],
    current: true,
  },
  {
    id: "preparatory-cycle",
    category: "education",
    title: "Preparatory Cycle — MPSI",
    institution: "ENSA Oujda",
    period: "2022 — 2024",
    description:
      "Two-year intensive program in mathematics, physics, and computer science foundations, preparing for competitive engineering entrance exams.",
    tags: ["Mathematics", "Physics", "Algorithms"],
  },
  {
    id: "pfa-project",
    category: "professional",
    title: "PFA — AI-Powered Backend System",
    institution: "ENSA Oujda",
    period: "2024",
    description:
      "Built a production-grade AI-powered REST API using Spring Boot and Spring AI, integrating local LLMs via Ollama and semantic search via Qdrant.",
    tags: ["Spring AI", "Ollama", "Qdrant", "Java"],
  },
  {
    id: "baccalaureate",
    category: "education",
    title: "Baccalaureate — Sciences Physiques",
    institution: "Lycée",
    period: "2022",
    description:
      "French-track baccalaureate with a focus on physics and applied sciences. Graduated with honors.",
    tags: ["Sciences Physiques", "Mention Bien"],
  },
  {
    id: "chu-internship",
    category: "professional",
    title: "IT Internship",
    institution: "CHU",
    period: "2023",
    description:
      "Observed and participated in the management of hospital information systems. Assisted with network administration and system maintenance.",
    tags: ["Networking", "System Administration"],
  },
];

export const JOURNEY_ANIMATION = {
  container: {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.14, delayChildren: 0.05 },
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
