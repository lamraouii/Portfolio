import type { SkillCategoryData } from "./types";

export const SKILLS_TITLE = "Skills & Technologies";

export const SKILLS_LABEL = "My toolkit";

export const SKILL_CATEGORIES: SkillCategoryData[] = [
  {
    title: "Backend",
    icon: "Server",
    skills: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring AI",
      "JPA / Hibernate",
      "REST APIs",
    ],
  },
  {
    title: "Artificial Intelligence",
    icon: "Brain",
    skills: ["Ollama", "Qdrant", "RAG", "LangChain4j", "Prompt Engineering"],
  },
  {
    title: "Frontend",
    icon: "Monitor",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Databases",
    icon: "Database",
    skills: ["PostgreSQL", "MySQL", "SQLite"],
  },
  {
    title: "DevOps & Tools",
    icon: "Terminal",
    skills: ["Git", "Docker", "Linux", "GitLab CI", "Maven"],
  },
];

export const SKILLS_ANIMATION = {
  container: {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" as const },
    },
  },
} as const;
