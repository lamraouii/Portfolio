import { VolunteeringEntry } from "../education/types";

export const VOLUNTEERING_TITLE = "Volunteering Journey";
export const VOLUNTEERING_LABEL = "Impact & Community";

export const VOLUNTEERING_ENTRIES: VolunteeringEntry[] = [
  {
    id: "v1",
    role: "Lead Technical Volunteer",
    event: "MIATHON 2025",
    institution: "Tech University",
    description: "Mentored 20+ teams in building scalable cloud solutions and judged technical implementations.",
    date: "Feb 2025",
    images: [
      "https://picsum.photos/seed/miathon1/800/600",
      "https://picsum.photos/seed/miathon2/800/600",
    ],
    tags: ["Mentorship", "Cloud Computing", "AI"],
  },
  {
    id: "v2",
    role: "Cultural Club President",
    event: "Cultural Week",
    institution: "University Student Union",
    description: "Managed a team of 30 volunteers to organize a week-long series of cultural events for 2000+ students.",
    date: "2023 — 2024",
    images: [
      "https://picsum.photos/seed/cult1/800/600",
    ],
    tags: ["Leadership", "Event Planning", "Management"],
  },
  {
    id: "v3",
    role: "Tutoring",
    event: "First-Year Mentorship",
    institution: "Computer Engineering Dept",
    description: "Provided weekly tutoring sessions for first-year students in Algorithms and C programming.",
    date: "2022 — 2023",
    images: [
      "https://picsum.photos/seed/tutor1/800/600",
    ],
    tags: ["Algorithms", "Teaching", "C Programming"],
  },
];

export const VOLUNTEERING_ANIMATION = {
  container: {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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
