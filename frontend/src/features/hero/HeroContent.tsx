"use client";

import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";
import PhotoCube from "./components/PhotoCube";
import { HERO_NAME, HERO_ROLE, HERO_DESCRIPTION, HERO_ANIMATION } from "./constants";

export default function HeroContent() {
  return (
      <motion.div
          className="flex flex-col items-center text-center space-y-10 max-w-4xl mx-auto"
          variants={HERO_ANIMATION.container}
          initial="hidden"
          animate="visible"
      >
        {/* 3D Photo Cube */}
        <motion.div variants={HERO_ANIMATION.item} className="mb-4">
          <PhotoCube />
        </motion.div>

        {/* Greeting badge */}
        <motion.div variants={HERO_ANIMATION.item}>
        <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-slate-400 backdrop-blur-sm">
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
            className="text-6xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl"
        >
          {HERO_NAME}
        </motion.h1>

        {/* Role */}
        <motion.h2
            variants={HERO_ANIMATION.item}
            className="text-xl font-medium text-slate-400 sm:text-2xl lg:text-3xl"
        >
          {HERO_ROLE}
        </motion.h2>

        {/* Description */}
        <motion.p
            variants={HERO_ANIMATION.item}
            className="max-w-2xl text-lg leading-relaxed text-slate-500 sm:text-xl"
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
