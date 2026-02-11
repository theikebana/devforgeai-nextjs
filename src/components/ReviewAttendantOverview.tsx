"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Zap,
  Users,
  BarChart2,
  Eye,
  AlertTriangle,
  Bell,
  ShieldCheck,
} from "lucide-react";
import AnimateSection from "./AnimateSection";

const bulletContent = "text-xs md:text-sm text-white/80";

// Left & Right cards: 5 points each
const keyFeatures = [
  { icon: CheckCircle, text: "Unified dashboard for all review platforms." },
  { icon: Zap, text: "AI-driven sentiment analysis." },
  { icon: Users, text: "Personalized response generation." },
  { icon: BarChart2, text: "Customizable workflow automation." },
  { icon: Eye, text: "Intuitive reporting to track trends." },
];

const solutions = [
  { icon: CheckCircle, text: "Automated Review Collection" },
  { icon: Zap, text: "AI-Driven Sentiment Analysis" },
  { icon: Users, text: "Unified Dashboard" },
  { icon: Bell, text: "Personalized Response Generation" },
  { icon: BarChart2, text: "Real-Time Notifications" },
];

// Center card: 8 points with different values
const problemStatements = [
  { icon: AlertTriangle, text: "Inconsistent Responses across platforms" },
  { icon: Bell, text: "Time-consuming review management" },
  { icon: ShieldCheck, text: "Reputation damage due to delayed responses" },
  { icon: Eye, text: "Difficulty tracking sentiment trends" },
  { icon: Zap, text: "Manual response creation is inefficient" },
  // { icon: Users, text: "Lack of team collaboration in managing reviews" },
  { icon: BarChart2, text: "Limited performance analytics for metrics" },
  // { icon: CheckCircle, text: "Customer retention challenges due to slow engagement" },
];

export default function ReviewAttendantOverview() {
  return (
    <div className="bg-[#07090E] ">
      {/* ---------------- INTRO ---------------- */}
      <AnimateSection type="fadeUp">
        <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
          <div className="">
            <div className="mx-auto text-center">
              <p className="text-xs font-semibold tracking-[0.2em] text-amber-300 uppercase mb-3">
                Key Features
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">
                One portal for all your reviews and reputation
              </h2>
              <p className="text-sm md:text-base text-white/65 max-w-5xl mb-4">
                Review Attendant unifies Yelp, Facebook, Google, and Twitter reviews into a single dashboard.
                Powered by AI, it analyzes sentiment, automates responses, and helps your team maintain
                a consistent and timely engagement strategy.
              </p>
             
            </div>
          </div>
        </section>
      </AnimateSection>

      {/* ---------------- KEY FEATURES & PROBLEMS & SOLUTIONS ---------------- */}
      <AnimateSection type="scaleUp" delay={0.05}>
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-14">
          <div className="grid gap-5 lg:grid-cols-3 items-end">
            
            {/* Left — Key Features */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/8 p-5 lg:p-6 "
            >
              <ul className="space-y-3 text-white/80">
                {keyFeatures.map((item, i) => (
                  <motion.li
                    key={item.text}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-30px" }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <item.icon className="h-4 w-4 text-amber-400 shrink-0" />
                    <span className={bulletContent}>{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Center — Problem Statements (Podium effect) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-40px" }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md  lg:translate-y-[-10%]"
            >
              <ul className="space-y-3 text-white/80">
                {problemStatements.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.3, delay: i * 0.03 }}
                    className="flex items-center gap-3"
                  >
                    <item.icon className="h-4 w-4 text-amber-300 shrink-0" />
                    <span className={bulletContent}>{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right — Solutions */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-sky-400/30 p-5 backdrop-blur-md "
            >
              <ul className="space-y-3 text-white/80">
                {solutions.map((item, i) => (
                  <motion.li
                    key={item.text}
                    initial={{ opacity: 0, x: 8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <item.icon className="h-4 w-4 text-sky-400 shrink-0" />
                    <span className={bulletContent}>{item.text}</span>
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
