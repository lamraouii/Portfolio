import type { EducationEntry, CertificationEntry, VolunteeringEntry } from "./types";

export const EDUCATION_TITLE = "Certifications & Volunteering";

export const EDUCATION_LABEL = "Impact & Recognition";

export const EDUCATION_ENTRIES: EducationEntry[] = [];

export const CERTIFICATION_ENTRIES: CertificationEntry[] = [
  {
    title: "Oracle Certified Professional: Java SE 17 Developer",
    issuer: "Oracle",
    year: "2024",
    credentialUrl: "https://badgr.com/public/assertions/placeholder",
    imageUrl: "https://picsum.photos/seed/oracle-cert/600/400",
  },
];

export const VOLUNTEERING_ENTRIES: VolunteeringEntry[] = [
  {
    id: "v1",
    role: "Lead Technical Volunteer",
    event: "Hackathon 2024",
    institution: "Tech University",
    description: "Mentored 20+ teams in building scalable cloud solutions and judged technical implementations.",
    images: [
      "https://picsum.photos/seed/hack1/800/600",
      "https://picsum.photos/seed/hack2/800/600",
    ],
  },
  {
    id: "v2",
    role: "Community Organizer",
    event: "GDG DevFest",
    institution: "Google Developer Groups",
    description: "Organized technical workshops and coordinated speaker logistics for 500+ attendees.",
    images: [
      "https://picsum.photos/seed/devfest1/800/600",
    ],
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
