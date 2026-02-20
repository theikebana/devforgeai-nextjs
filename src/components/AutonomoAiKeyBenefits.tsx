"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import AnimateSection from "./AnimateSection";

const benefits = [
  {
    tag: "Search",
    title: "Unified, trusted answers",
    description:
      "Search and chat across all your internal knowledge with citations back to the original source—no more context switching.",
    useCases: [
      "Internal wikis, RFCs, and runbooks",
      "Design documents and incident history",
    ],
  },
  {
    tag: "Agents",
    title: "Custom agents for every team",
    description:
      "Purpose-built AI copilots that understand your processes, data, and constraints—not generic chatbots.",
    useCases: [
      "Support agents grounded in help center content",
      "Sales and RevOps assistants across CRM and notes",
    ],
  },
  {
    tag: "Self-hosted",
    title: "Own your stack and data",
    description:
      "Deploy AutonomoAI inside your own infrastructure so security, compliance, and data residency remain fully in your control.",
    useCases: [
      "Private VPC or on-prem deployments",
      "Strict compliance and regulatory environments",
    ],
  },
  {
    tag: "Extensible Platform",
    title: "Open, Extensible Core",
    description:
      "Extend the platform with your own connectors, tools, and workflows—without being limited by rigid SaaS constraints.",
    useCases: [
      "Custom internal tools and enterprise automations",
      "Integration with proprietary and legacy data sources",
    ],
  }
];

type Benefit = (typeof benefits)[number];

interface BenefitItemProps {
  benefit: Benefit;
  index: number;
  scrollYProgress: MotionValue<number>;
}

function BenefitItem({ benefit, index, scrollYProgress }: BenefitItemProps) {
  const start = index / benefits.length;
  const end = (index + 1) / benefits.length;
  const opacity = useTransform(scrollYProgress, (value) => {
    if (value <= start) return 0.25;
    if (value >= end) return 1;
    const range = end - start || 1;
    const progress = (value - start) / range;
    return 0.25 + progress * (1 - 0.25);
  });

  return (
    <motion.div
      style={{ opacity }}
      className="transition-opacity"
    >
      <span className="inline-flex items-center gap-2 mb-3 rounded-full border border-emerald-300/20 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
        {benefit.tag}
      </span>

      <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
        {benefit.title}
      </h3>
      <p className="text-sm md:text-base text-white/70 max-w-md leading-relaxed">
        {benefit.description}
      </p>
    </motion.div>
  );
}

export default function AutonomoAIKeyBenefitsNarrative() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <div className="bg-[#07090E] py-24">
      <AnimateSection type="fadeUp">
        <section ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300 uppercase mb-3">
              Why teams choose AutonomoAI
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
              Designed for serious, enterprise-grade AI adoption.
            </h2>
            <p className="text-sm md:text-base text-white/65 leading-relaxed">
              AutonomoAI combines unified search, agent tooling, and full
              self-hosting so you can roll out AI where it matters most—without
              compromising on security, compliance, or control.
            </p>
          </div>

          {/* Narrative */}
          <div className="grid gap-16 lg:grid-cols-2 items-start">
            {/* LEFT — Sticky narrative */}
            <div className="sticky top-28 space-y-14">
              {benefits.map((benefit, index) => (
                <BenefitItem
                  key={benefit.title}
                  benefit={benefit}
                  index={index}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>

            {/* RIGHT — Contextual proof only */}
            <div className="space-y-20">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="border-l border-white/10 pl-6"
                >
                  <ul className="space-y-3">
                    {b.useCases.map((u) => (
                      <li
                        key={u}
                        className="flex gap-3 text-sm md:text-base text-white/75"
                      >
                        <span className="mt-0.5 text-emerald-300 font-bold shrink-0">
                          →
                        </span>
                        {u}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimateSection>
    </div>
  );
}
