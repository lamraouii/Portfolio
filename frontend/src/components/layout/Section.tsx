import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  "aria-label"?: string;
}

export default function Section({
  children,
  className = "",
  id,
  "aria-label": ariaLabel,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`py-32 md:py-40 ${className}`}
    >
      {children}
    </section>
  );
}
