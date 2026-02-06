"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  BarChart3,
  Lightbulb,
  Cloud,
} from "lucide-react";
import AnimateSection from "./AnimateSection";

const benefits = [
  {
    icon: LayoutDashboard,
    title: "Centralized visibility",
    description:
      "One dashboard for VMs, App Services, Storage Accounts, databases, networking, and serverless. No more jumping between Azure portals.",
    color: "sky",
  },
  {
    icon: BarChart3,
    title: "Real-time performance metrics",
    description:
      "Monitor CPU, memory, network, and disk usage across all resources. Spot anomalies and capacity issues before they impact users.",
    color: "sky",
  },
  {
    icon: Lightbulb,
    title: "Intelligent recommendations",
    description:
      "Get proactive insights to optimize cost, performance, and security. IAN translates Azure signals into clear, actionable guidance.",
    color: "cyan",
  },
  {
    icon: Cloud,
    title: "Azure-native integration",
    description:
      "Seamlessly integrates with Azure services. Built for teams that run production workloads on Microsoft Cloud.",
    color: "sky",
  },
];

const iconWrapperClass = (color: string) =>
  color === "sky"
    ? "bg-sky-500/10 border-sky-400/40"
    : "bg-cyan-500/10 border-cyan-400/40";
const iconClass = (color: string) =>
  color === "sky" ? "text-sky-300" : "text-cyan-300";

export default function IanKeyBenefits() {
  return (
    <div className="bg-[#07090E] py-16">
      <AnimateSection type="fadeUp">
        <section className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] text-sky-300 uppercase mb-3">
              Key benefits
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">
              Everything you need for Azure cloud intelligence.
            </h2>
            <p className="text-sm md:text-base text-white/65">
              IAN brings real-time metrics, intelligent recommendations, and
              centralized visibility into one platform so you can manage and
              optimize your Azure environment with confidence.
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
