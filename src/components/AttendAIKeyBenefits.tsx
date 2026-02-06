"use client";

import { motion } from "framer-motion";
import { Video, FileBarChart, ScanFace, Cloud } from "lucide-react";
import AnimateSection from "./AnimateSection";

const benefits = [
  {
    icon: Video,
    title: "IP camera integration",
    description:
      "Connect your IP cameras for seamless face detection and recognition. Advanced computer vision runs at the edge for reliable check-in and check-out.",
    color: "sky",
  },
  {
    icon: FileBarChart,
    title: "Dashboard & reporting",
    description:
      "Daily attendance status, reports by week, month, or custom date range. Detailed IN/OUT times with user images and automatic flags for false or unidentified captures.",
    color: "sky",
  },
  {
    icon: ScanFace,
    title: "Facial recognition",
    description:
      "Accurate, automated attendance with advanced algorithms. Improved reliability under varying environmental conditions and optimized camera positioning.",
    color: "amber",
  },
  {
    icon: Cloud,
    title: "SaaS enablement",
    description:
      "Scalable multi-tenant platform with pricing plans. Refined UI across Home, About Us, and feature pages for better usability and performance.",
    color: "sky",
  },
];

const iconWrapperClass = (color: string) =>
  color === "sky"
    ? "bg-sky-500/10 border-sky-400/40"
    : "bg-amber-500/10 border-amber-400/40";
const iconClass = (color: string) =>
  color === "sky" ? "text-sky-300" : "text-amber-300";

export default function AttendAIKeyBenefits() {
  return (
    <div className="bg-[#07090E] py-16">
      <AnimateSection type="fadeUp">
        <section className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] text-sky-300 uppercase mb-3">
              Key benefits
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">
              Everything you need for automated attendance.
            </h2>
            <p className="text-sm md:text-base text-white/65">
              AttendAI brings computer vision, IP cameras, and clear reporting
              together so you get accurate attendance without manual tracking or
              unreliable punch cards.
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
