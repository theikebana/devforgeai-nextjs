"use client";

import { motion } from "framer-motion";
import { Zap, Users, LineChart, Mail } from "lucide-react";
import AnimateSection from "./AnimateSection";

const benefits = [
  {
    icon: Zap,
    title: "Keyword-driven automation",
    description:
      "Leads are filtered by assigned keywords so reps only see opportunities that match their focus—no more noise.",
    color: "violet",
  },
  {
    icon: Users,
    title: "Role-based workflows",
    description:
      "Admins, managers, and sales reps each get the right view and actions. Assign, reassign, and track with full history.",
    color: "violet",
  },
  {
    icon: LineChart,
    title: "AI-powered analytics",
    description:
      "Job description enrichment, technology trends, and keyword performance over time—all in one place.",
    color: "amber",
  },
  {
    icon: Mail,
    title: "Automated notifications",
    description:
      "New lead alerts and weekly performance reports keep the team responsive without manual follow-ups.",
    color: "violet",
  },
];

const iconWrapperClass = (color: string) =>
  color === "violet"
    ? "bg-violet-500/10 border-violet-400/40"
    : "bg-amber-500/10 border-amber-400/40";
const iconClass = (color: string) =>
  color === "violet" ? "text-violet-300" : "text-amber-300";

export default function ElvisKeyBenefits() {
  return (
    <div className="bg-[#07090E] py-16">
      <AnimateSection type="fadeUp">
        <section className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] text-violet-300 uppercase mb-3">
              Key benefits
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">
              Everything your sales team needs in one platform.
            </h2>
            <p className="text-sm md:text-base text-white/65">
              ELVIS unifies discovery, assignment, tracking, and insights so
              you can close more deals with less manual work.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md overflow-hidden hover:border-violet-400/30 transition-colors"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-violet-500/10 to-transparent" />
                  <div className="relative z-10">
                    <div
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border mb-4 ${iconWrapperClass(item.color)}`}
                    >
                      <Icon className={`h-5 w-5 ${iconClass(item.color)}`} />
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-white/70 leading-relaxed">
                      {item.description}
                    </p>
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
