import { z } from "zod";
import type { ContactField } from "./types";

export const CONTACT_TITLE = "Get In Touch";

export const CONTACT_LABEL = "Contact";

export const CONTACT_DESCRIPTION =
  "I'm open to new opportunities, collaborations, and interesting projects. Feel free to reach out — I'll get back to you as soon as possible.";

export const CONTACT_FIELDS: ContactField[] = [
  {
    name: "Email",
    value: "contact@ismaillamraoui.dev",
    icon: "Mail",
    href: "mailto:contact@ismaillamraoui.dev",
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/ismail-lamraoui",
    icon: "Linkedin",
    href: "https://linkedin.com/in/ismail-lamraoui",
  },
  {
    name: "GitHub",
    value: "github.com/lamraoui",
    icon: "Github",
    href: "https://github.com/lamraoui",
  },
  {
    name: "Location",
    value: "Morocco",
    icon: "MapPin",
  },
];

export const CONTACT_SCHEMA = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long"),
});

export const CONTACT_ANIMATION = {
  container: {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
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
