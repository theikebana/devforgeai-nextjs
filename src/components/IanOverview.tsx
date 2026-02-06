"use client";

import { motion } from "framer-motion";
import AnimateSection from "./AnimateSection";

const bulletContent = "text-xs md:text-sm text-white/80";

const services = [
  {
    title: "App Services",
    description: "Monitor performance, availability, and resource usage",
  },
  {
    title: "Virtual Machines",
    description:
      "Track CPU, memory, disk, and network metrics in real-time",
  },
  {
    title: "Storage Accounts",
    description: "Monitor capacity, transactions, and access patterns",
  },
  {
    title: "And more",
    description:
      "Databases, networking, containers, and serverless functions",
  },
];

export default function IanOverview() {
  return (
    <div className="bg-[#07090E] pb-16 pt-4">
      <AnimateSection type="fadeUp">
        <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-500/10 px-3 py-1.5 text-xs text-sky-100/90">
            <span className="uppercase tracking-[0.18em] text-[10px]">
              Cloud Monitoring — Powered by IAN
            </span>
          </div>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start mt-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">
                IAN (Infrastructure Analysis Navigator): Complete Cloud
                Visibility
              </h2>
              <p className="text-sm md:text-base text-white/65 max-w-xl">
                IAN is your centralized command center for Azure infrastructure
                monitoring. It offers a unified dashboard that seamlessly
                integrates with Azure services, including:
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/8 bg-gradient-to-br from-slate-900/80 via-slate-950 to-black/95 p-5 lg:p-6 shadow-[0_0_40px_rgba(15,23,42,0.9)]"
            >
              <ul className="space-y-3 text-xs md:text-sm text-white/75">
                {services.map((item, i) => (
                  <motion.li
                    key={item.title}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-30px" }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    className="flex gap-3"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-sky-400/50 bg-sky-500/20 text-sky-300 text-[10px]">
                      ✓
                    </span>
                    <div>
                      <span className="font-semibold text-white">
                        {item.title}
                      </span>
                      <span className={bulletContent}> — {item.description}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
      </AnimateSection>
    </div>
  );
}
