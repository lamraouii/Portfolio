import { cn } from "@/lib/utils";
import {FooterSocialLink, SOCIAL_ICONS} from "../types";

interface FooterSocialsProps {
  links: FooterSocialLink[];
}

export function FooterSocials({ links }: FooterSocialsProps) {
  return (
    <div className="flex items-center gap-1">
      {links.map(({ label, href, ariaLabel }) => {
        const Icon = SOCIAL_ICONS[label];
        return (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            className={cn(
              "inline-flex h-9 w-9 items-center justify-center rounded-md",
              "text-muted-foreground transition-colors duration-200",
              "hover:text-foreground hover:bg-accent",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              "focus-visible:ring-offset-2"
            )}
          >
            {Icon && <Icon className="size-4" aria-hidden="true" />}
          </a>
        );
      })}
    </div>
  );
}
