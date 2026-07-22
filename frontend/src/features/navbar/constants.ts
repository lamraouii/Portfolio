import type { NavLink, SocialLink } from "./types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", sectionId: "hero" },
  { label: "About", sectionId: "about" },
  { label: "Experience", sectionId: "experience" },
  { label: "Projects", sectionId: "projects" },
  { label: "Skills", sectionId: "skills" },
  { label: "Contact", sectionId: "contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/lamraouii" },
  { label: "LinkedIn", href: "https://linkedin.com/in/ismail-lamraoui" },
];

export const RESUME_URL = "/resume.pdf";

export const SCROLL_THRESHOLD = 20;
