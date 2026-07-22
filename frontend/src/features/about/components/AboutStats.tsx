"use client";

import { motion } from "framer-motion";
import { ABOUT_STATS, ABOUT_ANIMATION } from "../constants";

export default function AboutStats() {
  return (
    <motion.div
      variants={ABOUT_ANIMATION.item}
      className="flex flex-wrap items-center gap-8 pt-2"
    >
      {ABOUT_STATS.map(({ value, label }) => (
        <div key={label} className="flex flex-col gap-0.5">
          <span className="text-2xl font-bold text-white">{value}</span>
          <span className="text-xs text-slate-500">{label}</span>
        </div>
      ))}
    </motion.div>
  );
}
