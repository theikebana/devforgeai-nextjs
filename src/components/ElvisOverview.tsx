"use client";

import { motion } from "framer-motion";
import AnimateSection from "./AnimateSection";

const bulletIconClasses = "mt-0.5 text-amber-400 font-bold text-sm shrink-0";
const bulletContent = "text-xs md:text-sm text-white/80";

const businessChallenges = [
  "Job leads are scattered across multiple platforms and difficult to track",
  "Sales reps struggle to find relevant jobs matching their assigned keywords",
  "Managers lack visibility into team activity and lead status updates",
  "Multiple reps working the same lead causes status conflicts and confusion",
  "Manual tracking leads to missed opportunities and duplicate efforts",
  "Limited insight into technology trends and keyword performance over time",
  "Manual reporting and notifications slow down response time",
];

const solutionLeft = [
  "Centralized job leads platform with role-based access for admins, managers, and sales representatives",
  "Keyword-driven job filtering ensures reps only see relevant opportunities",
  "Priority-based status aggregation across multiple sales representatives per lead",
  "Real-time visibility into team activity, lead progress, and performance metrics",
  "Automated lead assignment, reassignment, and historical tracking",
];

const solutionRight = [
  "AI-powered job description enrichment for technology and domain analytics",
  "Technology trend insights and keyword performance tracking over time",
  "Automated email notifications for new leads and weekly performance reports",
  "Secure, scalable architecture with soft deletes for complete audit history",
];

export default function ElvisOverview() {
  return (
    <div className="bg-[#07090E] pb-12 pt-4">
      {/* Business Challenges */}
      <AnimateSection type="fadeUp">
        <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-amber-300 uppercase mb-3">
                Business Challenges
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">
                Remove the friction from lead management.
              </h2>
              <p className="text-sm md:text-base text-white/65 max-w-xl">
                ELVIS addresses the realities of managing job leads at scale:
                scattered sources, duplicate effort, and limited visibility into
                team performance and keyword effectiveness.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/8 bg-gradient-to-br from-slate-900/80 via-slate-950 to-black/95 p-5 lg:p-6 shadow-[0_0_40px_rgba(15,23,42,0.9)]"
            >
              <ul className="space-y-2.5 text-xs md:text-sm text-white/75">
                {businessChallenges.map((item, i) => (
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
            </motion.div>
          </div>
        </section>
      </AnimateSection>

      {/* Solution */}
      <AnimateSection type="scaleUp" delay={0.05}>
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-14">
          <div className="flex flex-col lg:flex-row lg:items-start gap-10">
            <div className="flex-1 grid gap-6 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-40px" }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md shadow-[0_0_40px_rgba(15,23,42,0.7)]"
              >
                <p className="text-xs font-semibold tracking-[0.18em] text-violet-200/90 uppercase mb-3">
                  Solution
                </p>
                <ul className="space-y-2.5 text-xs md:text-sm text-white/80">
                  {solutionLeft.map((item, i) => (
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
                className="rounded-2xl border border-violet-400/30 bg-gradient-to-b from-violet-500/15 via-slate-900/95 to-slate-950 p-5 backdrop-blur-md"
              >
                <p className="text-xs font-semibold tracking-[0.18em] text-violet-100 uppercase mb-3">
                  Solution (continued)
                </p>
                <ul className="space-y-2.5 text-xs md:text-sm text-violet-50/90">
                  {solutionRight.map((item, i) => (
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

            <div className="max-w-md">
              <p className="text-xs font-semibold tracking-[0.2em] text-violet-300 uppercase mb-3">
                Why ELVIS
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">
                One platform for discovery, assignment, and insights.
              </h2>
              <p className="text-sm md:text-base text-white/65">
                ELVIS brings keyword-driven automation, role-based workflows, and
                AI-powered analytics together so sales teams can focus on
                closing deals instead of chasing leads across spreadsheets and
                siloed tools.
              </p>
            </div>
          </div>
        </section>
      </AnimateSection>
    </div>
  );
}
