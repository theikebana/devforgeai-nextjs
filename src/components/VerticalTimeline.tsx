"use client";

import { motion } from "framer-motion";
import AnimateSection from "./AnimateSection";
import { LucideIcon } from "lucide-react";

export interface TimelineItem {
  icon?: LucideIcon;
  title: string;
  description: string;
}

interface VerticalTimelineProps {
  items: TimelineItem[];

  /** Header */
  badge?: string;
  heading: string;
  subheading?: string;

  /** Styling */
  backgroundClass?: string;
  accentColorClass?: string;

  /** Animation */
  animateLine?: boolean;
}

export default function VerticalTimeline({
  items,
  badge,
  heading,
  subheading,
  backgroundClass = "bg-[#07090E]",
  accentColorClass = "emerald",
  animateLine = true,
}: VerticalTimelineProps) {
  return (
    <div className={backgroundClass}>
      <AnimateSection type="fadeUp">
        <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-16">

          {/* HEADER */}
          <div className="max-w-3xl mx-auto text-center">
            {badge && (
              <p
                className={`text-[11px] font-semibold tracking-[0.22em] text-${accentColorClass}-300 uppercase mb-3`}
              >
                {badge}
              </p>
            )}

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
              {heading}
            </h2>

            {subheading && (
              <p className="text-sm sm:text-base text-white/70">
                {subheading}
              </p>
            )}
          </div>

          {/* TIMELINE */}
          <div className="relative">

            {/* CENTER LINE */}
            {animateLine && (
              <motion.div
                className={`
                  absolute top-0 h-full w-px
                  left-3 sm:left-1/2
                  bg-gradient-to-b
                  from-${accentColorClass}-400/40
                  via-${accentColorClass}-400/10
                  to-transparent
                `}
                animate={{ backgroundPositionY: ["0%", "100%"] }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ backgroundSize: "100% 200%" }}
              />
            )}

            <ul className="space-y-10 sm:space-y-14">
              {items.map((item, i) => {
                const Icon = item.icon;
                const isLeft = i % 2 === 0;

                return (
                  <motion.li
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45 }}
                    className="relative flex"
                  >
                    {/* LEFT CONTENT (desktop) */}
                    <div
                      className={`hidden sm:block w-1/2 ${
                        isLeft ? "pr-8 text-right" : "opacity-0"
                      }`}
                    >
                      {isLeft && (
                        <>
                          <h3 className="text-base md:text-lg font-semibold text-white mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm md:text-base text-white/70 max-w-md ml-auto">
                            {item.description}
                          </p>
                        </>
                      )}
                    </div>

                    {/* DOT */}
                    <span
                      className={`
                        relative z-10 mt-1
                        flex h-5 w-5 items-center justify-center
                        rounded-full border
                        border-${accentColorClass}-400/50
                        bg-[#07090E]
                        ml-2 sm:ml-0
                      `}
                    >
                      <span
                        className={`h-2.5 w-2.5 rounded-full bg-${accentColorClass}-400`}
                      />
                    </span>

                    {/* RIGHT CONTENT */}
                    <div
                      className={`
                        pl-6 sm:w-1/2 sm:pl-8
                        ${isLeft ? "sm:opacity-0" : ""}
                      `}
                    >
                      {/* MOBILE TITLE */}
                      <div className="flex items-start gap-3 mb-2 sm:hidden">
                        {Icon && (
                          <Icon
                            className={`h-4 w-4 text-${accentColorClass}-300 mt-1`}
                          />
                        )}
                        <h3 className="font-semibold text-white">
                          {item.title}
                        </h3>
                      </div>

                      {/* DESKTOP RIGHT TITLE */}
                      {!isLeft && (
                        <h3 className="hidden sm:block text-base md:text-lg font-semibold text-white mb-2">
                          {item.title}
                        </h3>
                      )}

                      <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </section>
      </AnimateSection>
    </div>
  );
}
