"use client";

import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";
import { HERO_NAME, HERO_ROLE, HERO_DESCRIPTION, HERO_ANIMATION } from "./constants";

export default function HeroContent() {
  return (
    <motion.div
      className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto"
      variants={HERO_ANIMATION.container}
      initial="hidden"
      animate="visible"
    >
      {/* Greeting badge */}
      <motion.div variants={HERO_ANIMATION.item}>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-400 backdrop-blur-sm">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-50" />
            <span className="relative inline-flex size-2 rounded-full bg-blue-400" />
          </span>
          Available for opportunities
        </span>
      </motion.div>

      {/* Name */}
      <motion.h1
        variants={HERO_ANIMATION.item}
        className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
      >
        {HERO_NAME}
      </motion.h1>

      {/* Role */}
      <motion.h2
        variants={HERO_ANIMATION.item}
        className="text-xl font-medium text-slate-400 sm:text-2xl"
      >
        {HERO_ROLE}
      </motion.h2>

      {/* Description */}
      <motion.p
        variants={HERO_ANIMATION.item}
        className="max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg"
      >
        {HERO_DESCRIPTION}
      </motion.p>

      {/* CTA Buttons */}
      <motion.div variants={HERO_ANIMATION.item}>
        <HeroButtons />
      </motion.div>

      {/* Social Links */}
      <motion.div variants={HERO_ANIMATION.item}>
        <HeroSocials />
      </motion.div>
    </motion.div>
  );
}
