"use client";

import { Mail, MapPin, type LucideProps } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CONTACT_DESCRIPTION, CONTACT_FIELDS, CONTACT_ANIMATION } from "../constants";

const ICON_MAP: Record<string, React.ElementType<LucideProps>> = {
    Mail,
    Github: FaGithub,
    Linkedin: FaLinkedin,
    MapPin,
};

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-10">
      {/* Description */}
      <motion.p
        variants={CONTACT_ANIMATION.item}
        className="text-lg leading-relaxed text-slate-400"
      >
        {CONTACT_DESCRIPTION}
      </motion.p>

      {/* Contact fields */}
      <motion.ul
        variants={CONTACT_ANIMATION.item}
        className="flex flex-col gap-5"
        aria-label="Contact information"
      >
        {CONTACT_FIELDS.map(({ name, value, icon, href }) => {
          const Icon = ICON_MAP[icon] ?? Mail;

          const inner = (
            <div className="flex items-center gap-4">
              <div
                className={cn(
                  "inline-flex size-10 shrink-0 items-center justify-center rounded-xl",
                  "bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20"
                )}
                aria-hidden="true"
              >
                <Icon className="size-4" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-600">
                  {name}
                </span>
                <span className="text-sm font-medium text-slate-300">
                  {value}
                </span>
              </div>
            </div>
          );

          return (
            <li key={name}>
              {href ? (
                <a
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={`${name}: ${value}`}
                  className="group block transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 rounded-xl"
                >
                  {inner}
                </a>
              ) : (
                inner
              )}
            </li>
          );
        })}
      </motion.ul>
    </div>
  );
}
