import { FaGithub, FaLinkedin } from "react-icons/fa";

export const SOCIAL_ICONS = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
};

export type FooterSocialLabel = keyof typeof SOCIAL_ICONS;

export interface FooterNavLink {
  label: string;
  sectionId: string;
}

export interface FooterSocialLink {
  label: FooterSocialLabel;
  href: string;
  ariaLabel: string;
}