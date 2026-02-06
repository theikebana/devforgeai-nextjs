"use client";
import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

type AnimationType =
  | "fadeUp"
  | "fadeDown"
  | "fadeLeft"
  | "fadeRight"
  | "zoomIn"
  | "scaleUp";

const animationVariants = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
};

type AnimateSectionProps = PropsWithChildren<{
  type?: AnimationType;
  delay?: number;
}>;

export default function AnimateSection({
  children,
  type = "fadeUp",
  delay = 0,
}: AnimateSectionProps) {
  return (
    <motion.section
      variants={animationVariants[type]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-100px" }} // ✅ animate every scroll
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.section>
  );
}
