"use client";

import { motion } from "framer-motion";
import AnimateSection from "./AnimateSection";
import { LucideIcon } from "lucide-react";

export interface FeatureItem {
  icon: LucideIcon;
  name: string;
  description: string;
}

interface ShineCardsSectionProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: FeatureItem[];
  columns?: 2 | 3 | 4;
  backgroundClass?: string;
}

export default function ShineCardsSection({
  eyebrow,
  title,
  subtitle,
  items,
  columns = 4,
  backgroundClass = "bg-[#07090E]",
}: ShineCardsSectionProps) {
  const gridCols =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 3
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <div className={`${backgroundClass} py-8 sm:py-12 lg:py-16`}>
      <AnimateSection type="fadeUp">
        <section className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            {eyebrow && (
              <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300 uppercase mb-2">
                {eyebrow}
              </p>
            )}

            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">
              {title}
            </h2>

            {subtitle && (
              <p className="text-sm md:text-base text-white/65 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          {/* Cards */}
          <div className={`grid gap-5 ${gridCols}`}>
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="relative overflow-hidden rounded-2xl border border-emerald-400/15 bg-gradient-to-b from-slate-900/70 via-slate-950 to-black p-5 sm:p-6"
                >
                  {/* Moving scan line */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* CONTENT */}
                  <div className="
                    relative z-10
                    flex items-start gap-4 text-left
                    sm:flex-col sm:items-center sm:gap-0 sm:text-center
                  ">
                    {/* ICON */}
                    <div className="
                      flex h-10 w-10 shrink-0 items-center justify-center
                      rounded-xl bg-emerald-500/15 border border-emerald-400/30
                      sm:mb-4 sm:h-12 sm:w-12
                    ">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-300" />
                    </div>

                    {/* TEXT */}
                    <div>
                      <h3 className="text-sm sm:text-md font-medium text-white mb-1">
                        {item.name}
                      </h3>

                      <p className="text-sm text-white/65 leading-snug sm:leading-tight">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </AnimateSection>
    </div>
  );
}
