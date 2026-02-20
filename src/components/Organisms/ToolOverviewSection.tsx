"use client";

import { motion } from "framer-motion";
import AnimateSection from "../AnimateSection";

type PipelineStep = {
  title: string;
  description: string;
  status?: "active" | "idle";
};

export type ToolOverviewSectionProps = {
  badge: string;
  accent: "sky" | "emerald";
  title: React.ReactNode;
  description: string;
  steps: PipelineStep[];
  footerStatus?: string;
};

export default function ToolOverviewSection({
  badge,
  accent,
  title,
  description,
  steps,
  footerStatus,
}: ToolOverviewSectionProps) {
  const accentMap = {
    sky: {
      border: "border-sky-400/25",
      bg: "bg-sky-500/10",
      text: "text-sky-200",
      dotBorder: "border-sky-400/50",
      dotBg: "bg-sky-500/15",
      pulse: "bg-sky-400",
      line: "bg-sky-500/20",
      pulseLine: "bg-sky-400/60",
      highlight: "text-sky-400",
    },
    emerald: {
      border: "border-emerald-400/20",
      bg: "bg-emerald-500/5",
      text: "text-emerald-200",
      dotBorder: "border-emerald-400/50",
      dotBg: "bg-emerald-500/15",
      pulse: "bg-emerald-400",
      line: "bg-emerald-500/20",
      pulseLine: "bg-emerald-400/60",
      highlight: "text-emerald-400",
    },
  };

  const c = accentMap[accent];

  return (
    <div className="bg-[#07090E] py-12 lg:py-16 xl:py-20 2xl:py-24">
      <AnimateSection type="fadeUp">
        <section className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-8">
          {/* Badge */}
          <div
            className={`mb-4 inline-flex items-center gap-2 rounded-full border ${c.border} ${c.bg} px-3 py-1.5 text-[10px] tracking-widest ${c.text}`}
          >
            {badge}
          </div>

          <div className="grid 2xl:gap-12 gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
            {/* LEFT */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                {title}
              </h2>

              <p className="text-sm md:text-base text-white/70 max-w-2xl leading-relaxed">
                {description}
              </p>
            </div>

            {/* PIPELINE */}
            <div className="relative">
              <ul className="space-y-10">
                {steps.map((step, i) => {
                  const isActive = step.status === "active";
                  const isLast = i === steps.length - 1;

                  return (
                    <motion.li
                      key={step.title}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="relative"
                    >
                      {/* Dot */}
                      <span
                        className={`absolute left-5 top-0 z-10 flex h-5 w-5 items-center justify-center rounded-full border ${c.dotBorder} ${c.dotBg}`}
                      >
                        {isActive ? (
                          <motion.span
                            className={`h-2 w-2 rounded-full ${c.pulse}`}
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{
                              duration: 1.4,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                        ) : (
                          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                        )}
                      </span>

                      {/* Line */}
                      {!isLast && (
                        <>
                          <div
                            className={`absolute left-7 top-5 w-px ${c.line}`}
                            style={{ height: "calc(100% + 18px)" }}
                          />

                          <motion.div
                            className={`absolute left-[26px] w-[3px] rounded-full ${c.pulseLine} blur-[1px]`}
                            style={{ height: 28 }}
                            initial={{ top: "20%" }}
                            animate={{ top: "100%" }}
                            transition={{
                              duration: 2.6,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                        </>
                      )}

                      {/* Content */}
                      <div className="pl-16">
                        <p className="font-medium text-white">
                          {step.title}
                        </p>
                        <p className="text-xs md:text-sm text-white/65">
                          {step.description}
                        </p>
                      </div>
                    </motion.li>
                  );
                })}
              </ul>

              {footerStatus && (
                <p className="mt-6 pl-12 text-[10px] text-white/45 tracking-wide">
                  {footerStatus}
                </p>
              )}
            </div>
          </div>
        </section>
      </AnimateSection>
    </div>
  );
}
