import { Badge } from "@/components/common/badge";

interface TechBadgeProps {
  label: string;
}

export default function TechBadge({ label }: TechBadgeProps) {
  return (
    <Badge
      variant="outline"
      className="rounded-full border-white/10 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-300 transition-colors"
    >
      {label}
    </Badge>
  );
}
