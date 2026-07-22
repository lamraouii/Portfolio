"use client"

import * as React from "react"
import { motion, type HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

export interface GlassCardProps extends Omit<HTMLMotionProps<"div">, "type" | "children"> {
  children?: React.ReactNode
  glowColor?: "primary" | "indigo" | "rose" | "emerald" | "violet" | "none"
  hoverEffect?: "none" | "lift" | "glow" | "lift-glow"
  backdropBlur?: "none" | "sm" | "md" | "lg"
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
    (
        {
          className,
          children,
          glowColor = "primary",
          hoverEffect = "lift",
          backdropBlur = "md",
          ...props
        },
        ref
    ) => {

      const glowClasses = {
        primary:
            "hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)] dark:hover:shadow-[0_0_35px_-5px_rgba(147,197,253,0.08)]",
        indigo:
            "hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.2)] dark:hover:shadow-[0_0_35px_-5px_rgba(165,180,252,0.1)]",
        rose:
            "hover:shadow-[0_0_30px_-5px_rgba(244,63,94,0.2)] dark:hover:shadow-[0_0_35px_-5px_rgba(253,164,186,0.1)]",
        emerald:
            "hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.2)] dark:hover:shadow-[0_0_35px_-5px_rgba(110,231,183,0.1)]",
        violet:
            "hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.2)] dark:hover:shadow-[0_0_35px_-5px_rgba(196,181,253,0.1)]",
        none: "",
      }

      const blurClasses = {
        none: "",
        sm: "backdrop-blur-sm",
        md: "backdrop-blur-md",
        lg: "backdrop-blur-lg",
      }

      const liftVariants = {
        initial: {
          y: 0,
        },
        hover: {
          y: -6,
          transition: {
            duration: 0.3,
            ease: "easeOut" as const,
          },
        },
      }

      const hasLift =
          hoverEffect === "lift" || hoverEffect === "lift-glow"

      const hasGlow =
          hoverEffect === "glow" || hoverEffect === "lift-glow"


      return (
          <motion.div
              ref={ref}
              initial="initial"
              whileHover={hasLift ? "hover" : undefined}
              variants={hasLift ? liftVariants : undefined}
              className={cn(
                  "relative overflow-hidden rounded-2xl border border-neutral-200/40 bg-white/40 shadow-sm transition-shadow duration-300 dark:border-neutral-800/40 dark:bg-neutral-900/30",
                  blurClasses[backdropBlur],
                  hasGlow && glowColor !== "none" && glowClasses[glowColor],
                  className
              )}
              {...props}
          >

            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent dark:via-white/10" />

            <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-60 dark:from-white/5" />

            {children}

          </motion.div>
      )
    }
)

GlassCard.displayName = "GlassCard"