import type { EducationEntry, CertificationEntry } from "./types";

export const EDUCATION_TITLE = "Education & Certifications";

export const EDUCATION_LABEL = "Academic background";

export const EDUCATION_ENTRIES: EducationEntry[] = [
  {
    degree: "Bachelor's in Computer Engineering",
    institution: "University",
    period: "2021 — Present",
    description:
      "Core curriculum covering algorithms, data structures, software architecture, operating systems, databases, networking, and artificial intelligence.",
  },
];

export const CERTIFICATION_ENTRIES: CertificationEntry[] = [
  {
    title: "Oracle Certified Professional: Java SE 17 Developer",
    issuer: "Oracle",
    year: "2024",
    credential: "Java SE 17",
  },
];

export const EDUCATION_ANIMATION = {
  container: {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.05 },
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
