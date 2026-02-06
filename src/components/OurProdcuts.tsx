"use client";

import SectionHeader from "./SectionHeader";
import {
  RexCardAnimation,
  ViraCardAnimation,
  IanCardAnimation,
} from "./Hero copy";
import {
  Rocket,
  Shield,
  Zap,
  Search,
  MessageCircle,
  Users,
  LineChart,
  Apple,
  Car,
} from "lucide-react";
import { motion } from "framer-motion";

const newsCardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

type NewsCard = {
  title: string;
  description: string;
  id:
    | "mooglemind"
    | "review-attendant"
    | "attendai"
    | "assetwisp"
    | "slimsnap"
    | "lotiq";
};

const newsCardsRowOne: NewsCard[] = [
  {
    title: "MoogleMind",
    description:
      "An open‑source AI platform for unified enterprise search, custom agents, and secure self‑hosting.",
    id: "mooglemind",
  },
  {
    title: "Review Attendant",
    description:
      "An AI platform that centralizes reviews and automates responses with sentiment analysis.",
    id: "review-attendant",
  },
  {
    title: "AttendAI",
    description:
      "A smart face‑recognition attendance system with IP camera support and clear reporting.",
    id: "attendai",
  },
];

const newsCardsRowTwo: NewsCard[] = [
  {
    title: "AssetWisp",
    description:
      "An AI platform for tracking and analyzing multi‑asset portfolios with smart insights.",
    id: "assetwisp",
  },
  {
    title: "Slim Snap",
    description:
      "An AI photo‑based calorie tracker that provides nutrition insights and shopping lists.",
    id: "slimsnap",
  },
//   {
//     title: "LotIQ",
//     description:
//       "An AI‑powered platform that streamlines parking with bookings, payments, and live availability.",
//     id: "lotiq",
//   },
];

// --- Custom mini animations for each product card ---

function MoogleMindMiniAnimation() {
  // Graph of connected knowledge nodes / queries
  const nodes = [
    { x: "8%", y: "40%" },
    { x: "32%", y: "18%" },
    { x: "50%", y: "52%" },
    { x: "72%", y: "26%" },
    { x: "86%", y: "60%" },
  ];

  return (
    <div className="mt-4 rounded-xl border border-emerald-400/20 bg-gradient-to-r from-emerald-950/60 via-slate-950/80 to-sky-950/60 px-3 py-2">
      <div className="relative h-16 w-full overflow-hidden rounded-lg bg-black/40">
        {/* flowing query beam */}
        <motion.div
          className="absolute inset-y-1 left-0 w-1/3 rounded-full bg-gradient-to-r from-emerald-300/40 via-sky-300/50 to-transparent"
          initial={{ x: "-120%" }}
          animate={{ x: "140%" }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* nodes */}
        {nodes.map((node, idx) => (
          <motion.div
            key={idx}
            className="absolute h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_0_4px_rgba(16,185,129,0.15)]"
            style={{ top: node.y, left: node.x }}
            animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: idx * 0.18,
            }}
          />
        ))}

        {/* center knowledge hub */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: [0, 4, -3, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="h-8 w-8 rounded-full border border-emerald-300/50 bg-black/80 flex items-center justify-center">
            <div className="h-4 w-4 rounded-full bg-emerald-300/80" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function ReviewAttendantMiniAnimation() {
  // Sentiment bars + incoming review bubbles
  return (
    <div className="mt-4 rounded-xl border border-amber-400/25 bg-gradient-to-r from-slate-950 via-slate-950/80 to-amber-950/40 px-3 py-2">
      <div className="flex items-center gap-3">
        {/* live bar graph */}
        <div className="flex items-end gap-1.5 flex-1">
          {[0.4, 0.6, 0.9, 0.7].map((height, idx) => (
            <motion.div
              key={idx}
              className={`w-2 rounded-[6px] ${
                idx === 2 ? "bg-emerald-400" : "bg-amber-300/90"
              }`}
              style={{ height: `${height * 32}px` }}
              animate={{ scaleY: [0.7, 1.15, 0.85, 1] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.12,
              }}
            />
          ))}
        </div>

        {/* incoming review bubbles */}
        <div className="relative h-10 w-20">
          {[0, 0.8, 1.6].map((delay, idx) => (
            <motion.div
              key={idx}
              className="absolute right-0 flex items-center gap-1 rounded-full border border-white/10 bg-black/70 px-2 py-[3px]"
              initial={{ opacity: 0, y: 10, x: 12 }}
              animate={{ opacity: [0, 1, 0], y: [-4, -10, -16], x: [8, 0, -4] }}
              transition={{
                duration: 2.3,
                repeat: Infinity,
                ease: "easeOut",
                delay,
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-[9px] text-white/80">
                {idx === 1 ? "5★" : idx === 2 ? "4★" : "New"}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AttendAIMiniAnimation() {
  // Attendance grid with faces checking in
  const cells = Array.from({ length: 8 });

  return (
    <div className="mt-4 rounded-xl border border-sky-400/25 bg-gradient-to-r from-slate-950 via-slate-950/80 to-sky-950/40 px-3 py-2">
      <div className="flex items-center gap-3">
        <div className="grid grid-cols-4 gap-1.5 flex-1">
          {cells.map((_, idx) => (
            <motion.div
              key={idx}
              className="relative h-6 rounded-md bg-slate-800/80 overflow-hidden"
              animate={{
                borderColor: [
                  "rgba(148,163,184,0.6)",
                  "rgba(56,189,248,0.9)",
                  "rgba(148,163,184,0.6)",
                ],
              }}
              transition={{
                duration: 2.1,
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.08,
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-400/40 to-transparent"
                initial={{ x: "-120%" }}
                animate={{ x: "150%" }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.05,
                }}
              />
              <div className="relative z-10 flex h-full items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-slate-700">
                  <motion.div
                    className="h-3 w-3 rounded-full border-[1.5px] border-emerald-400/70"
                    animate={{ scale: [0.5, 1, 0.5], opacity: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: idx * 0.15,
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="rounded-full border border-emerald-400/40 bg-emerald-500/20 px-2 py-0.5 text-[10px] font-medium text-emerald-100"
          animate={{ y: [0, -1.5, 0], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          98% Present
        </motion.div>
      </div>
    </div>
  );
}

function AssetWispMiniAnimation() {
  // Multi‑asset performance lines with glowing markers
  const lines = ["emerald", "sky", "violet"] as const;

  return (
    <div className="mt-4 rounded-xl border border-emerald-300/25 bg-gradient-to-r from-slate-950 via-slate-950/80 to-emerald-950/40 px-3 py-2">
      <div className="relative h-16 w-full overflow-hidden rounded-lg bg-black/40">
        {lines.map((color, idx) => (
          <motion.svg
            key={color}
            viewBox="0 0 120 40"
            className="absolute inset-0"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: [0.4, 0.9, 0.6] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: idx * 0.25,
            }}
          >
            <motion.path
              d="M0 28 Q 20 10 40 18 T 80 14 T 120 8"
              fill="none"
              stroke={`url(#grad-${color})`}
              strokeWidth="1.4"
              initial={{ pathLength: 0.7, pathOffset: 0.4 }}
              animate={{ pathLength: [0.5, 1, 0.7], pathOffset: [0.4, 0, 0.2] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.2,
              }}
            />
            <defs>
              <linearGradient id={`grad-${color}`} x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="rgba(15,23,42,0)" />
                <stop
                  offset="40%"
                  stopColor={
                    color === "emerald"
                      ? "rgba(52,211,153,0.9)"
                      : color === "sky"
                      ? "rgba(56,189,248,0.9)"
                      : "rgba(196,181,253,0.9)"
                  }
                />
                <stop offset="100%" stopColor="rgba(15,23,42,0)" />
              </linearGradient>
            </defs>
          </motion.svg>
        ))}

        {/* metric pill */}
        <motion.div
          className="absolute bottom-2 right-2 rounded-full border border-emerald-400/50 bg-black/70 px-2 py-0.5 text-[10px] font-medium text-emerald-100"
          animate={{ y: [0, -1.5, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          +18.3% ROI
        </motion.div>
      </div>
    </div>
  );
}

function SlimSnapMiniAnimation() {
  // Calorie ring + macro bars
  return (
    <div className="mt-4 rounded-xl border border-rose-400/25 bg-gradient-to-r from-slate-950 via-slate-950/80 to-rose-950/40 px-3 py-2">
      <div className="flex items-center gap-3">
        {/* progress ring */}
        <div className="relative h-12 w-12">
          <svg viewBox="0 0 36 36" className="h-full w-full rotate-[-90deg]">
            <path
              d="M18 2.5a15.5 15.5 0 1 1 0 31 15.5 15.5 0 0 1 0-31"
              fill="none"
              stroke="rgba(148,163,184,0.3)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <motion.path
              d="M18 2.5a15.5 15.5 0 1 1 0 31 15.5 15.5 0 0 1 0-31"
              fill="none"
              stroke="url(#ring-grad)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="97"
              strokeDashoffset="30"
              animate={{ strokeDashoffset: [40, 28, 34] }}
              transition={{ duration: 2.3, repeat: Infinity, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="ring-grad" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="50%" stopColor="#eab308" />
                <stop offset="100%" stopColor="#fb7185" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center rotate-[90deg]">
            <span className="text-[8px] text-slate-300">kcal</span>
            <span className="text-[10px] font-semibold text-white">1240</span>
          </div>
        </div>

        {/* macro bars */}
        <div className="flex-1 space-y-1.5">
          {[
            { label: "Protein", color: "bg-emerald-400", width: "80%" },
            { label: "Carbs", color: "bg-amber-300", width: "60%" },
            { label: "Fats", color: "bg-rose-400", width: "40%" },
          ].map((macro, idx) => (
            <div key={macro.label} className="space-y-0.5">
              <div className="flex items-center justify-between text-[9px] text-slate-300">
                <span>{macro.label}</span>
                <span>{idx === 0 ? "On track" : idx === 1 ? "OK" : "Low"}</span>
              </div>
              <div className="h-1 rounded-full bg-slate-800">
                <motion.div
                  className={`h-1 rounded-full ${macro.color}`}
                  style={{ width: macro.width }}
                  initial={{ scaleX: 0.4, originX: 0 }}
                  animate={{ scaleX: [0.7, 1, 0.8, 1] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: idx * 0.12,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LotIQMiniAnimation() {
  // Parking slots grid with moving car indicator
  const slots = Array.from({ length: 6 });

  return (
    <div className="mt-4 rounded-xl border border-sky-400/25 bg-gradient-to-r from-slate-950 via-slate-950/80 to-sky-950/40 px-3 py-2">
      <div className="relative h-14 w-full overflow-hidden rounded-lg bg-slate-950/70">
        <div className="grid grid-cols-3 gap-[3px] p-[4px]">
          {slots.map((_, idx) => (
            <motion.div
              key={idx}
              className="relative h-4 rounded-[5px] border border-slate-700/80 bg-slate-900/80"
              animate={{
                backgroundColor: [
                  "rgba(15,23,42,0.9)",
                  idx % 2 === 0
                    ? "rgba(22,163,74,0.9)"
                    : "rgba(15,23,42,0.9)",
                  "rgba(15,23,42,0.9)",
                ],
              }}
              transition={{
                duration: 2.1,
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.2,
              }}
            >
              {idx === 1 || idx === 4 ? (
                <motion.div
                  className="absolute inset-y-[1px] left-[1px] right-[1px] rounded-[4px] bg-gradient-to-r from-sky-300 to-emerald-300"
                  initial={{ x: "-10%" }}
                  animate={{ x: ["-5%", "5%", "-5%"] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: idx === 1 ? 0.2 : 0.9,
                  }}
                />
              ) : null}
            </motion.div>
          ))}
        </div>
        <motion.div
          className="absolute bottom-1 right-2 rounded-full border border-emerald-400/40 bg-emerald-500/20 px-2 py-0.5 text-[10px] font-medium text-emerald-100"
          animate={{ y: [0, -1.5, 0], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          82% Full
        </motion.div>
      </div>
    </div>
  );
}

function renderNewsCardAnimation(id: NewsCard["id"]) {
  switch (id) {
    case "mooglemind":
      return <MoogleMindMiniAnimation />;
    case "review-attendant":
      return <ReviewAttendantMiniAnimation />;
    case "attendai":
      return <AttendAIMiniAnimation />;
    case "assetwisp":
      return <AssetWispMiniAnimation />;
    case "slimsnap":
      return <SlimSnapMiniAnimation />;
    case "lotiq":
      return <LotIQMiniAnimation />;
    default:
      return null;
  }
}

function renderNewsCardIcon(id: NewsCard["id"]) {
  const commonIconClasses = "w-5 h-5 sm:w-6 sm:h-6";

  switch (id) {
    case "mooglemind":
      return <Search className={commonIconClasses} />;
    case "review-attendant":
      return <MessageCircle className={commonIconClasses} />;
    case "attendai":
      return <Users className={commonIconClasses} />;
    case "assetwisp":
      return <LineChart className={commonIconClasses} />;
    case "slimsnap":
      return <Apple className={commonIconClasses} />;
    case "lotiq":
      return <Car className={commonIconClasses} />;
    default:
      return null;
  }
}

export default function ProductSection() {
  return (
    <section
      id="products"
      className="py-8 md:py-12 lg:py-20 overflow-hidden"
    >
      <div className="custom-container mx-auto px-4 sm:px-0">
        <SectionHeader
          badge="Product Features"
          title="Our Products"
          description="Explore the powerful capabilities of Devforge. From intelligent monitoring to community engagement, we have the tools you need."
          descriptionVariant="secondary"
        />

        {/* All product cards in a unified grid (REX / VIRA / IAN + others) */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* REX Card */}
          <motion.div
            className="group relative p-4 sm:p-6 rounded-2xl bg-[#0A0C10] border border-white/5 overflow-hidden text-left animate-fade-in flex flex-col h-full w-full"
            variants={newsCardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: 0 * 0.08, ease: "easeOut" }}
            whileHover={{
              y: -6,
              boxShadow: "0 22px 55px rgba(15,23,42,0.65)",
              borderColor: "rgba(255,255,255,0.35)",
            }}
          >
            <div
              className="
                absolute
                w-[150px]
                h-[150px]
                right-0
                top-[1.2px]
                bg-white
                opacity-[0.08]
                blur-[60px]
                pointer-events-none
              "
            />
            <div className="relative z-10 flex flex-col gap-8 flex-1">
              <div className="flex  gap-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/5 flex items-center justify-center mb-2 sm:mb-4 text-white flex-shrink-0">
                  <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex flex-col  flex-1">
                  <h3 className="text-xl  font-medium text-white ">
                    REX
                  </h3>
                  <p className="text-gray-400 text-sm leading-tight line-clamp-2 flex-grow">
                    Rex auto-reviews code, finds risks, and secures CI/CD
                    before production.
                  </p>
                </div>
              </div>
              <div className="mt-auto">
                <RexCardAnimation />
              </div>
            </div>
          </motion.div>

          {/* VIRA Card */}
          <motion.div
            className="group relative p-4 sm:p-6 rounded-2xl bg-[#0A0C10] border border-white/5 overflow-hidden text-left animate-fade-in flex flex-col h-full w-full"
            variants={newsCardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: 1 * 0.08, ease: "easeOut" }}
            whileHover={{
              y: -6,
              boxShadow: "0 22px 55px rgba(15,23,42,0.65)",
              borderColor: "rgba(255,255,255,0.35)",
            }}
          >
            <div
              className="
                absolute
                w-[150px]
                h-[150px]
                right-0
                top-[1.2px]
                bg-white
                opacity-[0.08]
                blur-[60px]
                pointer-events-none
              "
            />
            <div className="relative z-10 flex flex-col gap-8 flex-1">
              <div className="flex  gap-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/5 flex items-center justify-center mb-2 sm:mb-4 text-white flex-shrink-0">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex flex-col  flex-1">
                  <h3 className="text-xl  font-medium text-white ">
                    VIRA
                  </h3>
                  <p className="text-gray-400 text-sm leading-tight line-clamp-2 flex-grow">
                    Cloud VIRA automates Azure security with continuous,
                    enterprise-grade risk scanning.
                  </p>
                </div>
              </div>
              <div className="mt-auto">
                <ViraCardAnimation />
              </div>
            </div>
          </motion.div>

          {/* IAN Card */}
          <motion.div
            className="group relative p-4 sm:p-6 rounded-2xl bg-[#0A0C10] border border-white/5 overflow-hidden text-left animate-fade-in flex flex-col h-full w-full"
            variants={newsCardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: 2 * 0.08, ease: "easeOut" }}
            whileHover={{
              y: -6,
              boxShadow: "0 22px 55px rgba(15,23,42,0.65)",
              borderColor: "rgba(255,255,255,0.35)",
            }}
          >
            <div
              className="
                absolute
                w-[150px]
                h-[150px]
                right-0
                top-[1.2px]
                bg-white
                opacity-[0.08]
                blur-[60px]
                pointer-events-none
              "
            />
            <div className="relative z-10 flex flex-col gap-8 flex-1">
              <div className="flex gap-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/5 flex items-center justify-center mb-2 sm:mb-4 text-white flex-shrink-0">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex flex-col  flex-1">
                  <h3 className="text-xl sm:text-2xl font-medium text-white ">
                    IAN
                  </h3>
                  <p className="text-gray-400 text-sm leading-tight line-clamp-2 flex-grow">
                    Manage all Azure services from one dashboard with
                    real-time insights.
                  </p>
                </div>
              </div>
              <div className="mt-auto">
                <IanCardAnimation />
              </div>
            </div>
          </motion.div>

          {/* Remaining product cards following the exact layout as the REX card */}
          {[...newsCardsRowOne, ...newsCardsRowTwo].map((card, index) => (
            <motion.div
              key={card.title}
              className="group relative p-4 sm:p-6 rounded-2xl bg-[#0A0C10] border border-white/5 overflow-hidden text-left animate-fade-in flex flex-col h-full w-full"
              variants={newsCardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.4,
                delay: (index + 3) * 0.08,
                ease: "easeOut",
              }}
              whileHover={{
                y: -6,
                boxShadow: "0 22px 55px rgba(15,23,42,0.65)",
                borderColor: "rgba(255,255,255,0.35)",
              }}
            >
              <div className="absolute w-[150px] h-[150px] right-0 top-0 bg-white opacity-[0.08] blur-[60px] pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-100/0 via-white/5 to-orange-100/0 opacity-[0.25] pointer-events-none mix-blend-screen" />
              <div className="relative z-10 flex flex-col gap-8 flex-1">
                <div className="flex  gap-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/5 flex items-center justify-center mb-2 sm:mb-4 text-white flex-shrink-0">
                    {renderNewsCardIcon(card.id)}
                  </div>
                  <div className="flex flex-col  flex-1">
                    <h3 className="text-xl  font-medium text-white ">
                      {card.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-tight line-clamp-2 flex-grow">
                      {card.description}
                    </p>
                  </div>
                </div>
                <div className="mt-auto">
                  {renderNewsCardAnimation(card.id)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
