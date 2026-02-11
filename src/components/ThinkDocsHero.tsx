"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Search,
  ArrowRight,
  FolderOpen,
  Tag,
  MessageSquare,
} from "lucide-react";
import { useEffect, useState } from "react";

/* ----------------------------------------
   Motion presets
---------------------------------------- */
const heroContainer = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, staggerChildren: 0.08 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/* ----------------------------------------
   Data
---------------------------------------- */
const INSIGHTS = [
  "Find the contract with expiry in June 2027",
  "Semantic search: 'Q3 compliance reports'",
  "Auto-tagged: Legal · Confidential",
  "Summary generated for Board deck.pdf",
  "Approval routed to Finance",
];

const STATS = [
  { label: "Documents indexed", value: 12400 },
  { label: "Smart tags", value: 320 },
  { label: "Searches today", value: 890 },
  { label: "Active collaborators", value: 48 },
];

export default function ThinkDocsHero() {
  const [insightIndex, setInsightIndex] = useState(0);
  const [showSticky, setShowSticky] = useState(false);
  const [statsCount, setStatsCount] = useState(STATS.map(() => 0));

  /* Insight rotation */
  useEffect(() => {
    const i = setInterval(
      () => setInsightIndex((v) => (v + 1) % INSIGHTS.length),
      3200
    );
    return () => clearInterval(i);
  }, []);

  /* Sticky CTA */
  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 280);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Stats counter */
  useEffect(() => {
    const interval = setInterval(() => {
      setStatsCount((prev) =>
        prev.map((v, i) =>
          v < STATS[i].value
            ? Math.min(v + Math.ceil(STATS[i].value / 60), STATS[i].value)
            : v
        )
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative overflow-hidden bg-[#07090E] py-8 lg:py-12">
        {/* Ambient glow */}
        <motion.div
          className="pointer-events-none absolute -top-1/2 -right-1/4 h-[120%] w-[80%] rounded-full bg-sky-500/20 blur-[140px]"
          animate={{ opacity: [0.25, 0.6, 0.25] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative max-w-7xl 2xl:max-w-[1440px] mx-auto rounded-4xl border border-white/5 bg-[#020617] px-4 py-8 lg:py-12 lg:p-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroContainer}
            className="grid grid-cols-1 lg:grid-cols-4 items-center gap-12"
          >
            {/* ================= LEFT ================= */}
            <div
              className="order-2 lg:order-none lg:col-span-2 space-y-4
                text-center lg:text-left"
            >
              <motion.div
                variants={heroItem}
                className="inline-flex items-center gap-2
                  mx-auto lg:mx-0
                  rounded-full border border-white/10
                  bg-white/5 px-3 py-1
                  text-[10px] text-sky-100/80"
              >
                <FileText className="h-3.5 w-3.5 text-sky-300" />
                <span className="uppercase tracking-[0.18em] text-[10px]">
                  AI Document Management
                </span>
              </motion.div>

              <motion.h1
                variants={heroItem}
                className="font-semibold tracking-snug text-white
                  text-[26px] leading-[1.1]
                  sm:text-[28px]
                  md:text-[32px]
                  lg:text-[36px]
                  xl:text-[40px]"
              >
                ThinkDocs goes beyond storing files —
                <span className="bg-gradient-to-r from-sky-300 via-sky-400 to-sky-200 bg-clip-text text-transparent">
                  {" "}
                  understand, organize, search,
                </span>{" "}
                and manage content intelligently.
              </motion.h1>

              <motion.p
                variants={heroItem}
                className="lg:mx-0
                  w-full sm:max-w-md mx-auto
                  text-[14px] sm:text-sm md:text-base
                  leading-relaxed text-white/65"
              >
                An AI-powered DMS with semantic search, auto-classification,
                summaries, collaboration, and workflow automation — all in one
                secure repository.
              </motion.p>

              <motion.div
                variants={heroItem}
                className="flex flex-wrap gap-3
                  justify-center lg:justify-start"
              >
                <Link
                  href="/book-demo"
                  className="inline-flex items-center gap-2 rounded-xl
                    bg-sky-500 px-5 py-3 text-sm font-medium text-black
                    hover:bg-sky-400 transition"
                >
                  Get a live demo
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <button className="inline-flex items-center gap-2 rounded-xl
                    border border-white/15 bg-white/5
                    px-5 py-3 text-sm text-white/80 hover:bg-white/10">
                  <FolderOpen className="h-4 w-4 text-sky-300" />
                  Product overview
                </button>
              </motion.div>

              <motion.div
                variants={heroItem}
                className="flex items-center gap-2
                  justify-center lg:justify-start
                  text-[10px] sm:text-[11px] text-white/55"
              >
                <Tag className="h-4 w-4 text-sky-400" />
                Semantic search · Auto-tagging · Role-based access
              </motion.div>
            </div>

            {/* ================= RIGHT ================= */}
            <motion.div
              variants={heroItem}
              className="col-span-1 lg:col-span-2 relative border border-white/10 shadow-2xl p-2 rounded-2xl order-1 lg:order-none"
            >
              <div className="h-[320px] lg:h-[460px] relative">
                <motion.div className="relative h-full overflow-hidden rounded-xl border border-sky-400/20 bg-gradient-to-b from-sky-500/10 to-black/80 backdrop-blur-xl pb-16">
                  {/* Semantic scan sweep */}
                  <motion.div className="pointer-events-none absolute inset-0">
                    <motion.div
                      className="absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-sky-400/15 to-transparent"
                      animate={{ x: ["0%", "200%"] }}
                      transition={{
                        duration: 4.5,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>

                  <div className="relative p-6">
                    {/* Search bar */}
                    <motion.div
                      className="relative mb-6 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                      animate={{ opacity: [0.9, 1, 0.9] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Search className="h-4 w-4 text-sky-400" />
                      <span className="text-xs text-white/60">
                        Natural language search…
                      </span>
                    </motion.div>

                    {/* Search → insight flow */}
                    <motion.div
                      className="absolute left-1/2 top-[92px] h-6 w-px -translate-x-1/2 bg-gradient-to-b from-sky-400/60 to-transparent"
                      animate={{ opacity: [0.2, 0.8, 0.2] }}
                      transition={{ duration: 2.2, repeat: Infinity }}
                    />

                    {/* System spine */}
                    <motion.div
                      className="absolute left-1/2 top-28 bottom-28 w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-sky-400/20 to-transparent"
                      animate={{ opacity: [0.15, 0.4, 0.15] }}
                      transition={{ duration: 6, repeat: Infinity }}
                    />

                    {/* Document stack */}
                    <div className="relative space-y-3">
                      {[
                        { label: "Contract_2027.pdf", tag: "Legal" },
                        { label: "Q3_Compliance.pdf", tag: "Compliance" },
                        { label: "Board_deck.docx", tag: "Summarized" },
                      ].map((doc, i) => (
                        <motion.div
                          key={doc.label}
                          className="relative flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3"
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + i * 0.12 }}
                        >
                          <div className="flex items-center gap-3">
                            <FileText className="h-5 w-5 text-sky-400" />
                            <span className="text-sm text-white/90 truncate max-w-[150px]">
                              {doc.label}
                            </span>
                          </div>

                          <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 + i * 0.4 }}
                            className="text-[10px] px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300"
                          >
                            {doc.tag}
                          </motion.span>

                          {doc.label.includes("Board") && (
                            <motion.div
                              className="absolute inset-0 rounded-lg border border-sky-400/20"
                              animate={{ opacity: [0.2, 0.6, 0.2] }}
                              transition={{ duration: 3, repeat: Infinity }}
                            />
                          )}
                        </motion.div>
                      ))}
                    </div>

                    {/* Insight */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={insightIndex}
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.98 }}
                        className="mt-6 rounded-xl border border-sky-400/20 bg-slate-950/90 p-3 backdrop-blur flex items-center gap-2 text-xs text-white/75 shadow-[0_0_40px_rgba(56,189,248,0.15)]"
                      >
                        <MessageSquare className="h-4 w-4 text-sky-400 shrink-0" />
                        <span className="truncate">
                          “{INSIGHTS[insightIndex]}”
                        </span>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Stats bar */}
                  <motion.div
                    className="absolute -bottom-4 left-1/2 w-[95%] -translate-x-1/2 rounded-2xl bg-[#0B0D14]/90 border border-white/10 p-3 backdrop-blur-lg flex justify-between gap-2 shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    {STATS.map((stat, i) => (
                      <div
                        key={i}
                        className="flex-1 text-center rounded-lg bg-white/5 px-2 py-2 text-xs text-white/80"
                      >
                        <div className="text-base font-semibold text-sky-300">
                          {statsCount[i].toLocaleString()}
                        </div>
                        <div className="uppercase tracking-wider text-[8px] text-white/60 truncate">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sticky CTA */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-2xl border border-white/10 bg-slate-950/90 px-4 py-3 backdrop-blur-xl shadow-xl"
          >
            <Link
              href="/book-demo"
              className="flex items-center gap-2 text-sm font-medium text-sky-300 hover:text-sky-200"
            >
              Get a live demo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
