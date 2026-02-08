"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Brain,
  MessageSquare,
  TrendingUp,
} from "lucide-react";
import AnimateSection from "./AnimateSection";

const benefits = [
  {
    icon: LayoutDashboard,
    title: "Unified dashboard",
    description:
      "Manage Yelp, Facebook, Google, and Twitter reviews from one portal. No more switching between platforms or missing feedback.",
    color: "sky",
  },
  {
    icon: Brain,
    title: "AI sentiment analysis",
    description:
      "Automatically classify feedback as positive, neutral, or negative. Focus your time on reviews that need attention and response.",
    color: "sky",
  },
  {
    icon: MessageSquare,
    title: "Personalized response generation",
    description:
      "Generate on-brand, context-aware replies so you can respond quickly and consistently without sacrificing quality.",
    color: "amber",
  },
  {
    icon: TrendingUp,
    title: "Performance analytics",
    description:
      "Track response rates, sentiment trends, and reputation over time. Scalable architecture grows with your review volume.",
    color: "sky",
  },
];

const iconWrapperClass = (color: string) =>
  color === "sky"
    ? "bg-sky-500/10 border-sky-400/40"
    : "bg-amber-500/10 border-amber-400/40";
const iconClass = (color: string) =>
  color === "sky" ? "text-sky-300" : "text-amber-300";

export default function ReviewAttendantKeyBenefits() {
  return (
    <div className="bg-[#07090E] py-16">
      <AnimateSection type="fadeUp">
        <section className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] text-sky-300 uppercase mb-3">
              Key benefits
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">
              Everything you need for review management and reputation.
            </h2>
            <p className="text-sm md:text-base text-white/65">
              Review Attendant brings multi-platform reviews, AI-driven sentiment
              analysis, and personalized responses together so you maintain a
              strong online reputation through timely customer engagement.
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
                  className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md overflow-hidden hover:border-sky-400/30 transition-colors"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-sky-500/10 to-transparent" />
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
