import {FaGithub, FaLinkedin} from "react-icons/fa";

export const HERO_NAME = "Ismail Lamraoui";

export const HERO_ROLE = "Backend Developer | AI Engineer";

export const HERO_DESCRIPTION =
  "Computer Engineering student building intelligent applications with Java, Spring Boot, AI and modern web technologies.";

export const HERO_BUTTONS = [
  { label: "View Projects", href: "#projects", variant: "default" as const },
  { label: "Download CV", href: "/resume.pdf", variant: "outline" as const },
] as const;

export const SOCIAL_ICONS = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
};

export type FooterSocialLabel = keyof typeof SOCIAL_ICONS;
export const HERO_SOCIALS = [
  { label: "GitHub", href: "https://github.com/lamraoui" },
  { label: "LinkedIn", href: "https://linkedin.com/in/ismail-lamraoui" },
] as const;

export const HERO_ANIMATION = {
  container: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
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
