"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateSection from "./AnimateSection";

const tabs = ["Key Features", "Problem Statement", "Solution"];

export default function AttendAIOverview() {
  const [activeTab, setActiveTab] = useState("Key Features");

  const keyFeatures = [
    {
      title: "Accurate, automated attendance at scale",
      desc: "Monitor employee attendance effortlessly with facial recognition and automated logging, eliminating manual tracking and errors.",
    },
    {
      title: "Dashboard displaying daily user attendance status",
      desc: "Get a real-time overview of daily attendance, highlighting present, absent, and late employees in a single view.",
    },
    {
      title: "Report generation by week, month, or custom date range",
      desc: "Easily generate attendance reports for any time period, enabling data-driven HR and management decisions.",
    },
    {
      title: "Seamless IP camera integration with advanced face detection and recognition",
      desc: "Connect multiple IP cameras for automatic face detection, ensuring accurate tracking across locations.",
    },
    {
      title: "Detailed reports showing IN/OUT times with user images",
      desc: "View precise timestamps of employee entries and exits along with verified user images for audit purposes.",
    },
    {
      title: "Automatic reporting for false or unidentified images",
      desc: "Identify and flag unrecognized faces or camera errors automatically, improving system reliability.",
    },
    {
      title: "SaaS-ready architecture with secure, multi-tenant support",
      desc: "Scale effortlessly with a cloud-ready platform that supports multiple organizations securely in a single instance.",
    },
  ];

  const problems = [
    "Current UI design lacks clarity and needs improvement across key pages.",
    "Attendance accuracy is affected by inconsistent camera quality.",
    "Environmental conditions impact facial recognition reliability.",
    "Camera positioning requires hit-and-trial experimentation for optimal results.",
    "System is not yet SaaS-based, limiting scalability and multi-tenant usage.",
  ];

  const solutions = [
    "Redesign and improve the UI for Home, About Us, and feature integration.",
    "Enhance detection accuracy through the use of higher-quality IP cameras.",
    "Implement advanced facial recognition and detection algorithms for better reliability.",
    "Conduct systematic testing to determine optimal camera positioning.",
    "Convert the platform into a SaaS-based system with pricing plans for scalability.",
  ];

  return (
    <div className="bg-[#07090E] ">
      <AnimateSection type="fadeUp">
        <section className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-[0.22em] text-emerald-300 uppercase mb-3">
              Platform Overview
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              AttendAI: Automated Attendance, Reliable Insights
            </h2>
            <p className="text-sm md:text-base text-white/65 max-w-3xl leading-relaxed">
              AttendAI combines facial recognition, IP camera integration, and advanced reporting 
              to provide organizations with accurate attendance tracking at scale. Designed for 
              SaaS-ready deployment, it ensures reliability, security, and ease of monitoring across teams.
            </p>
          </div>

          {/* Tabs */}
          <div className="overflow-x-auto mb-5">
            <div className="inline-flex rounded-xl border border-white/10 bg-slate-950/80 p-1 min-w-max sm:min-w-0">
              {tabs.map((tab) => {
                const isActive = activeTab === tab;

                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="relative px-4 py-2 text-sm font-medium min-w-[120px] md:min-w-[150px] text-center"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeTab"
                        className="absolute inset-0 rounded-lg bg-emerald-500/15"
                        transition={{ type: "spring", stiffness: 320, damping: 28 }}
                      />
                    )}
                    <span
                      className={`relative z-10 transition-colors ${
                        isActive
                          ? "text-emerald-300"
                          : "text-white/55 hover:text-white"
                      }`}
                    >
                      {tab}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content */}
          <div className="relative min-h-[450px]">
            <AnimatePresence mode="wait">
              {/* Key Features */}
              {activeTab === "Key Features" && (
                <motion.div
                  key="features"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-5 max-w-7xl"
                >
                  <p className="text-base md:text-lg text-white/80 leading-relaxed">
                    Key Features of AttendAI for efficient and scalable attendance management:
                  </p>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {keyFeatures.map((item) => (
                      <div
                        key={item.title}
                        className="p-5 rounded-2xl border border-white/5 bg-white/[0.02]"
                      >
                        <h4 className="text-emerald-300 text-sm font-medium mb-2">{item.title}</h4>
                        <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Problem Statement */}
              {activeTab === "Problem Statement" && (
                <motion.div
                  key="problems"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35 }}
                  className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
                >
                  {problems.map((problem) => (
                    <div
                      key={problem}
                      className="flex gap-4 p-4 rounded-xl border border-red-500/10 bg-red-500/[0.02]"
                    >
                      <span className="text-red-400 text-lg">✕</span>
                      <p className="text-sm text-white">{problem}</p>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* Solutions */}
              {activeTab === "Solution" && (
                <motion.div
                  key="solutions"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35 }}
                  className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
                >
                  {solutions.map((solution) => (
                    <div
                      key={solution}
                      className="flex gap-4 p-4 rounded-xl border border-emerald-500/10 bg-emerald-500/[0.02]"
                    >
                      <span className="text-emerald-400 text-lg">✓</span>
                      <p className="text-sm text-white">{solution}</p>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </AnimateSection>
    </div>
  );
}
