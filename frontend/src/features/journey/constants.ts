import type { TimelineEntry } from "./types";

export const JOURNEY_TITLE = "Academic Journey";
export const JOURNEY_LABEL = "Timeline of Growth";

export const EDUCATION_ENTRIES: TimelineEntry[] = [
  {
    id: "edu-1",
    title: "Engineering Cycle",
    organization: "University Name",
    period: "2023 — Present",
    description: "Specializing in Computer Engineering with a focus on Distributed Systems and AI.",
    tags: ["Distributed Systems", "AI", "Cloud Computing"],
    current: true,
  },
  {
    id: "edu-2",
    title: "Preparatory Cycle",
    organization: "Preparatory School",
    period: "2021 — 2023",
    description: "Intensive studies in Mathematics, Physics, and Engineering Sciences.",
    tags: ["Mathematics", "Physics", "Computer Science"],
  },
  {
    id: "edu-3",
    title: "Baccalaureate",
    organization: "High School Name",
    period: "2021",
    description: "Mathematical Sciences degree with honors.",
  },
];

export const INTERNSHIP_ENTRIES: TimelineEntry[] = [
  {
    id: "int-1",
    title: "Current Internship",
    organization: "Tech Solutions Inc.",
    period: "2024 — Present",
    description: "Developing production-grade applications using Java, Spring Boot, and Spring AI.",
    tags: ["Java", "Spring Boot", "AI Integration"],
    current: true,
  },
  {
    id: "int-2",
    title: "PFA Project",
    organization: "Academic Project",
    period: "2023",
    description: "End of year project focusing on collaborative management systems.",
    tags: ["React", "PostgreSQL", "Next.js"],
  },
  {
    id: "int-3",
    title: "CHU Internship",
    organization: "University Hospital Center",
    period: "2022",
    description: "Introductory internship in the IT department, maintaining network infrastructure.",
    tags: ["Networking", "Support"],
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
