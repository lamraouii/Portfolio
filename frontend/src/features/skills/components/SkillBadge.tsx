import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  label: string;
}

export default function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1",
        "border border-white/10 bg-white/5",
        "text-xs text-slate-400",
        "transition-colors duration-150 hover:bg-white/10 hover:text-slate-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
      )}
      tabIndex={0}
      aria-label={label}
    >
      {label}
    </span>
  );
}
