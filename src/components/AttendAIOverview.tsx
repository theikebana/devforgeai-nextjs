"use client";

import { motion } from "framer-motion";
import AnimateSection from "./AnimateSection";

const bulletIconClasses = "mt-0.5 text-amber-400 font-bold text-sm shrink-0";
const bulletContent = "text-xs md:text-sm text-white/80";

const keyFeaturesLeft = [
  "Dashboard displaying daily user attendance status.",
  "Report generation by week, month, or custom date range.",
  "Seamless IP camera integration with advanced face detection and recognition.",
];

const keyFeaturesRight = [
  "Detailed reports showing IN/OUT times with user images.",
  "Automatic reporting for false or unidentified images.",
  "SaaS-ready architecture with secure, multi-tenant support.",
];

const problemStatements = [
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

export default function AttendAIOverview() {
  return (
    <div className="bg-[#07090E]  flex flex-col gap-5">
      {/* Key Features */}
      <AnimateSection type="fadeUp">
        <section className="max-w-7xl mx-auto px-6 lg:px-8 ">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-amber-300 uppercase mb-3">
                Key Features
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">
                Accurate, automated attendance at scale.
              </h2>
              <p className="text-sm md:text-base text-white/65 max-w-xl">
                AttendAI combines facial recognition, IP camera integration, and
                rich reporting so teams can monitor attendance without manual
                effort or unreliable spreadsheets.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/8 bg-gradient-to-br from-slate-900/80 via-slate-950 to-black/95 p-5 lg:p-6 shadow-[0_0_40px_rgba(15,23,42,0.9)]"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <ul className="space-y-2.5 text-xs md:text-sm text-white/75">
                  {keyFeaturesLeft.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, margin: "-30px" }}
                      transition={{ duration: 0.35, delay: i * 0.04 }}
                      className="flex gap-3"
                    >
                      <span className={bulletIconClasses}>»</span>
                      <span className={bulletContent}>{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <ul className="space-y-2.5 text-xs md:text-sm text-white/75">
                  {keyFeaturesRight.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, margin: "-30px" }}
                      transition={{ duration: 0.35, delay: (i + 3) * 0.04 }}
                      className="flex gap-3"
                    >
                      <span className={bulletIconClasses}>»</span>
                      <span className={bulletContent}>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>
      </AnimateSection>

      {/* Problem Statement & Solution */}
      <AnimateSection type="scaleUp" delay={0.05}>
        <section className="max-w-7xl mx-auto px-6 lg:px-8 ">
          <div className="grid gap-5 lg:grid-cols-2 items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-40px" }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md shadow-[0_0_40px_rgba(15,23,42,0.7)]"
            >
              <p className="text-xs font-semibold tracking-[0.18em] text-amber-200/90 uppercase mb-3">
                Problem Statement
              </p>
              <ul className="space-y-2.5 text-xs md:text-sm text-white/80">
                {problemStatements.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex gap-3"
                  >
                    <span className={bulletIconClasses}>»</span>
                    <span className={bulletContent}>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-sky-400/30 bg-gradient-to-b from-sky-500/15 via-slate-900/95 to-slate-950 p-5 backdrop-blur-md"
            >
              <p className="text-xs font-semibold tracking-[0.18em] text-sky-100 uppercase mb-3">
                Solution
              </p>
              <ul className="space-y-2.5 text-xs md:text-sm text-sky-50/90">
                {solutions.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.3, delay: 0.08 + i * 0.05 }}
                    className="flex gap-3"
                  >
                    <span className={bulletIconClasses}>»</span>
                    <span className={bulletContent}>{item}</span>
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

