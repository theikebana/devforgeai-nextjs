"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface PulseItem {
  id: number;
  icon: LucideIcon;
  label: string;
}

interface PulseSectionProps {
  center: {
    title: string;
    subtitle?: string;
  };
  items: PulseItem[];
  sectionTitle?: string;
  sectionDescription?: string;
}

export default function PulseSection({
  center,
  items,
  sectionTitle,
  sectionDescription,
}: PulseSectionProps) {
  return (
    <section className="relative w-full py-16 overflow-hidden rounded-4xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Animation block */}
        <div className="relative flex items-center justify-center min-h-[420px]">
          {/* Pulse Rings */}
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="
                absolute rounded-full border border-emerald-400/30
                w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72
              "
              animate={{
                scale: [1, 1.8, 2.6],
                opacity: [0.45, 0.25, 0],
              }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                delay: i * 0.9,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Center Core */}
          <div
            className="
              relative z-10 rounded-full
              flex flex-col items-center justify-center text-center
              border-3 border-emerald-400/30 bg-emerald-500/10
              backdrop-blur-md
              shadow-[0_0_80px_rgba(16,185,129,0.4)]
              sm:w-48 sm:h-48
              w-40 h-40

            "
          >
            <h3 className="text-xl font-semibold text-emerald-200">
              {center.title}
            </h3>

            {center.subtitle && (
              <p className="mt-2 text-sm text-emerald-200/70 max-w-[160px]">
                {center.subtitle}
              </p>
            )}
          </div>

          {/* Orbiting Items */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {items.map((item, index) => {
              const angle = (index / items.length) * Math.PI * 2;
              const radius = 148;

              return (
                <div
                  key={item.id}
                  className="absolute flex flex-col items-center gap-1 text-center"
                  style={{
                    transform: `translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius
                      }px)`,
                  }}
                >
                  <div
                    className="
                      flex h-12 w-12 items-center justify-center rounded-xl
                      border border-white/20 bg-white/5 backdrop-blur-md
                    "
                  >
                    <item.icon className="h-6 w-6 text-emerald-400" />
                  </div>

                  <span className="text-xs text-white/70">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section Text */}
        {(sectionTitle || sectionDescription) && (
          <div className="sm:mt-8 lg:mt-16 flex flex-col items-center text-center">
            {sectionTitle && (
              <h2 className="text-2xl sm:text-4xl font-semibold text-white">
                {sectionTitle}
              </h2>
            )}

            {sectionDescription && (
              <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/70">
                {sectionDescription}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
