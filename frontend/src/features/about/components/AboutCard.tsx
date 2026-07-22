"use client";

import { Server, Brain, Layers, type LucideProps } from "lucide-react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/common/card";
import { cn } from "@/lib/utils";
import type { AboutCard as AboutCardType } from "../types";
import { ABOUT_ANIMATION } from "../constants";

const ICON_MAP: Record<string, React.ElementType<LucideProps>> = {
  Server,
  Brain,
  Layers,
};

interface AboutCardProps {
  card: AboutCardType;
}

export default function AboutCard({ card }: AboutCardProps) {
  const Icon = ICON_MAP[card.icon] ?? Server;

  return (
    <motion.div variants={ABOUT_ANIMATION.item}>
      <GlassCard
        hoverEffect="lift"
        backdropBlur="sm"
        className="flex flex-col gap-4 p-6 h-full"
      >
        <div
          className={cn(
            "inline-flex size-10 items-center justify-center rounded-xl",
            "bg-white/5 text-slate-300 ring-1 ring-white/10"
          )}
        >
          <Icon className="size-5" />
        </div>

        <div className="space-y-1">
          <h3 className="text-sm font-semibold text-white">{card.title}</h3>
          <p className="text-xs leading-relaxed text-slate-500">
            {card.description}
          </p>
        </div>
      </GlassCard>
    </motion.div>
  );
}
