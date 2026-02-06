"use client";

import { motion } from "framer-motion";
import { Search, UserPlus, BarChart3, Workflow } from "lucide-react";
import AnimateSection from "./AnimateSection";

const steps = [
  {
    id: "01",
    title: "Discover & ingest job leads",
    description:
      "ELVIS aggregates job leads from your configured sources and filters them by keywords so reps only see opportunities that match their focus.",
    icon: Search,
  },
  {
    id: "02",
    title: "Assign, track & collaborate",
    description:
      "Managers assign leads to reps; status updates are aggregated per lead so multiple reps can work the same opportunity without conflicts.",
    icon: UserPlus,
  },
  {
    id: "03",
    title: "Insights & automation",
    description:
      "AI enriches job descriptions, tracks technology trends and keyword performance, and sends automated notifications and weekly reports.",
    icon: BarChart3,
  },
];

export default function ElvisHowItWorks() {
  return (
    <div className="bg-[#07090E] py-12">
      <AnimateSection type="fadeUp">
        <section
          id="how-elvis-works"
          className="max-w-7xl mx-auto px-6 lg:px-8 pb-4"
        >
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
            <div className="max-w-md">
              <p className="text-xs font-semibold tracking-[0.2em] text-violet-300 uppercase mb-3">
                How ELVIS works
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">
                From scattered leads to a single command center.
              </h2>
              <p className="text-sm md:text-base text-white/65">
                ELVIS connects discovery, assignment, and analytics in one
                workflow. Role-based access keeps everyone focused on their
                pipeline while managers get real-time visibility and AI-driven
                insights.
              </p>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70 backdrop-blur-md">
                <Workflow className="h-3.5 w-3.5 text-violet-300" />
                <span>Role-based: admins, managers, sales reps</span>
              </div>
            </div>

            <div className="flex-1 relative">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative grid gap-4 md:grid-cols-3 rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-black/95 p-4 md:p-5 backdrop-blur-xl shadow-[0_0_10px_rgba(15,23,42,0.9)]"
              >
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, margin: "-80px" }}
                      transition={{ duration: 0.45, delay: index * 0.1 }}
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className="group relative flex flex-col justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-4 md:px-4 md:py-5 overflow-hidden"
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-violet-500/15 via-violet-400/10 to-violet-300/20" />
                      <div className="relative z-10 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/50">
                            Step {step.id}
                          </span>
                          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 border border-white/15">
                            <Icon className="h-4 w-4 text-violet-200" />
                          </div>
                        </div>
                        <h3 className="text-sm font-semibold text-white">
                          {step.title}
                        </h3>
                        <p className="text-[11px] text-white/70">
                          {step.description}
                        </p>
                      </div>
                      <div className="relative mt-4 h-1 w-full rounded-full bg-white/5 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-violet-400 via-violet-300 to-violet-200"
                          initial={{ width: "0%" }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: false, margin: "-50px" }}
                          transition={{
                            duration: 1.2,
                            delay: index * 0.15,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>
      </AnimateSection>
    </div>
  );
}
