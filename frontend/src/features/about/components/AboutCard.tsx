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
        className="flex flex-col gap-5 p-7 h-full"
      >
        <div
          className={cn(
            "inline-flex size-11 items-center justify-center rounded-xl",
            "bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20"
          )}
          aria-hidden="true"
        >
          <Icon className="size-5" />
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-semibold text-white">{card.title}</h3>
          <p className="text-sm leading-relaxed text-slate-500">
            {card.description}
          </p>
        </div>
      </GlassCard>
    </motion.div>
  );
}
