"use client";

import { motion } from "framer-motion";
import AnimateSection from "./AnimateSection";
import type { LucideIcon } from "lucide-react";

type StepItem = {
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type HowToolWorksSectionProps = {
  eyebrow?: string;
  heading: React.ReactNode;
  description?: string;
  steps: StepItem[];
  accent?: "emerald" | "sky";
};

export default function HowToolWorksSection({
  eyebrow,
  heading,
  description,
  steps,
  accent = "emerald",
}: HowToolWorksSectionProps) {
  const accentMap = {
    emerald: {
      eyebrow: "text-emerald-300",
      labelBg: "bg-emerald-500/10",
      labelText: "text-emerald-200",
      iconText: "text-emerald-300",
    },
    sky: {
      eyebrow: "text-sky-300",
      labelBg: "bg-sky-500/10",
      labelText: "text-sky-200",
      iconText: "text-sky-300",
    },
  };

  const c = accentMap[accent];

  return (
    <div className="bg-[#07090E] py-12">
      <AnimateSection type="fadeUp">
        <section className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 grid gap-6 md:grid-cols-[1.3fr_0.7fr] items-end">
            <div>
              {eyebrow && (
                <p
                  className={`mb-3 text-[10px] font-semibold tracking-[0.24em] uppercase ${c.eyebrow}`}
                >
                  {eyebrow}
                </p>
              )}

              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                {heading}
              </h2>
            </div>

            {description && (
              <p className="text-white/65 max-w-md">
                {description}
              </p>
            )}
          </div>

          {/* Steps */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  className="
                    rounded-2xl
                    border border-white/10
                    bg-[#0b1220]/60
                    p-6
                  "
                >
                  {/* Top */}
                  <div className="mb-4 flex items-center gap-3">
                    <span
                      className={`inline-flex h-7 w-7 items-center justify-center rounded-lg text-[11px] font-semibold tracking-widest ${c.labelBg} ${c.labelText}`}
                    >
                      {step.label}
                    </span>

                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-black/40">
                      <Icon className={`h-4 w-4 ${c.iconText}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mb-2 text-lg font-medium text-white">
                    {step.title}
                  </h3>

                  <p className="text-white/65 leading-tight text-sm">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>
      </AnimateSection>
    </div>
  );
}
