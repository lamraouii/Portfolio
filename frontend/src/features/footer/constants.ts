import type { FooterNavLink, FooterSocialLink } from "./types";

export const FOOTER_OWNER = "Ismail Lamraoui";

export const FOOTER_TAGLINE =
  "Building intelligent applications with Java, Spring Boot and AI.";

export const FOOTER_NAV_LINKS: FooterNavLink[] = [
  { label: "Home", sectionId: "hero" },
  { label: "About", sectionId: "about" },
  { label: "Experience", sectionId: "experience" },
  { label: "Projects", sectionId: "projects" },
  { label: "Skills", sectionId: "skills" },
  { label: "Contact", sectionId: "contact" },
];

export const FOOTER_SOCIAL_LINKS: FooterSocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/lamraoui",
    ariaLabel: "Visit GitHub profile",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ismail-lamraoui",
    ariaLabel: "Visit LinkedIn profile",
  },
];

export const FOOTER_ANIMATION = {
  container: {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  },
} as const;
