import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const headingVariants = cva(
  "tracking-tight text-foreground transition-colors font-sans",
  {
    variants: {
      size: {
        default: "text-2xl font-bold md:text-3xl",
        h1: "text-4xl font-extrabold md:text-5xl lg:text-6xl",
        h2: "text-3xl font-bold md:text-4xl",
        h3: "text-2xl font-bold md:text-3xl",
        h4: "text-xl font-semibold md:text-2xl",
        h5: "text-lg font-semibold md:text-xl",
        h6: "text-base font-semibold md:text-lg",
        xs: "text-xs font-semibold",
        sm: "text-sm font-semibold",
        md: "text-base font-semibold",
        lg: "text-lg font-bold",
        xl: "text-xl font-bold",
        "2xl": "text-2xl font-bold md:text-3xl",
        "3xl": "text-3xl font-extrabold md:text-4xl",
        "4xl": "text-4xl font-extrabold md:text-5xl",
        "5xl": "text-5xl font-extrabold md:text-6xl",
      },
      weight: {
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
        extrabold: "font-extrabold",
      },
      gradient: {
        none: "",
        primary: "bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400",
        sunset: "bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent dark:from-orange-400 dark:via-red-400 dark:to-pink-400",
        ocean: "bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500 bg-clip-text text-transparent dark:from-cyan-400 dark:via-blue-400 dark:to-emerald-400",
      }
    },
    defaultVariants: {
      size: "default",
      weight: "bold",
      gradient: "none",
    },
  }
)

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export function Heading({
  className,
  size,
  weight,
  gradient,
  as: Component = "h2",
  ...props
}: HeadingProps) {
  const resolvedSize = size ?? "lg";

  return (
    <Component
      className={cn(headingVariants({ size: resolvedSize, weight, gradient }), className)}
      {...props}
    />
  )
}
