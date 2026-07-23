import type { CertificationEntry, EducationEntry } from "./types";

export const EDUCATION_TITLE = "Professional Certifications";
export const EDUCATION_LABEL = "Recognition & Excellence";

export const EDUCATION_ENTRIES: EducationEntry[] = [];

export const CERTIFICATION_ENTRIES: CertificationEntry[] = [
  {
    title: "Oracle Certified Professional: Java SE 17 Developer",
    issuer: "Oracle",
    year: "2024",
    credentialUrl: "https://badgr.com/public/assertions/placeholder",
    imageUrl: "https://picsum.photos/seed/oracle-cert/600/400",
  },
  {
    title: "Spring Certified Professional",
    issuer: "Broadcom/VMware",
    year: "2023",
    credentialUrl: "https://badgr.com/public/assertions/placeholder",
    imageUrl: "https://picsum.photos/seed/spring-cert/600/400",
  },
  {
    title: "Google Cloud Associate Engineer",
    issuer: "Google Cloud",
    year: "2023",
    credentialUrl: "https://badgr.com/public/assertions/placeholder",
    imageUrl: "https://picsum.photos/seed/gcp-cert/600/400",
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
