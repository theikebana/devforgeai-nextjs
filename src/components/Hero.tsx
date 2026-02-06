"use client";

import { useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import { Shield, Cloud, Zap, Rocket } from "lucide-react";
import {
  FaLock,
  FaCloud,
  FaBolt,
  FaRocket,
  FaBrain,
  FaClipboardCheck,
  FaUserCheck,
  FaRobot,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";

/* ----------------------------------------
   Ring Data
---------------------------------------- */
const outerRing = [
  {
    icon: Shield,
    label: "Security",
    image: "https://dummyimage.com/160x160/020617/1f2937&text=Security",
  },
  {
    icon: Cloud,
    label: "Cloud",
    image: "https://dummyimage.com/160x160/020617/1f2937&text=Cloud",
  },
  {
    icon: Zap,
    label: "Performance",
    image: "https://dummyimage.com/160x160/020617/1f2937&text=Speed",
  },
];

const midRing = [
  {
    icon: Cloud,
    label: "Observability",
    image: "https://dummyimage.com/160x160/020617/1f2937&text=Insights",
  },
  {
    icon: Zap,
    label: "Scalability",
    image: "https://dummyimage.com/160x160/020617/1f2937&text=Scale",
  },
];

const innerRing = [
  {
    icon: Rocket,
    label: "Automation",
    image: "https://dummyimage.com/160x160/020617/1f2937&text=Auto",
  },
  {
    icon: Shield,
    label: "Compliance",
    image: "https://dummyimage.com/160x160/020617/1f2937&text=Gov",
  },
];

const tools = [
  {
    title: "Moogle Mind",
    description: "Context-aware AI search across your engineering knowledge.",
    Icon: FaBrain,
  },
  {
    title: "Review Attendant",
    description: "Automated PR reviews that catch risks before production.",
    Icon: FaClipboardCheck,
  },
  {
    title: "Attend AI",
    description: "Meeting intelligence that turns calls into clear actions.",
    Icon: FaUserCheck,
  },
  {
    title: "REX",
    description: "Execution engine to orchestrate secure cloud workflows.",
    Icon: FaRobot,
  },
  {
    title: "VIRA",
    description: "Real-time vulnerability and compliance risk analytics.",
    Icon: FaShieldAlt,
  },
  {
    title: "IAN",
    description: "Insight assistant for cost, performance, and telemetry.",
    Icon: FaChartLine,
  },
  {
    title: "ELVIS",
    description: "Environment lifecycle manager for ephemeral dev stacks.",
    Icon: FaBolt,
  },
];

export default function Hero() {
  const [orbitAngle, setOrbitAngle] = useState(0);

  // Smooth circular motion for the tool cards while keeping them upright
  useAnimationFrame((time) => {
    const speed = 0.00009; // smaller = slower, smoother orbit
    const angle = (time as number) * speed;
    setOrbitAngle(angle % (Math.PI * 2));
  });

  return (
    <section
      id="hero"
      className="relative min-h-[80vh] pt-24 lg:pt-32 pb-[500px] overflow-hidden bg-[#020617] rounded-4xl m-4"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* TITLE */}
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-medium tracking-tight text-white">
            AI Enabled Proprietary Suite
          </h1>

          <p className="mt-6 text-sm md:text-lg text-white/60 leading-relaxed">
            DevForge.ai gives you full visibility and control over your Azure
            infrastructure with enterprise-grade security.
          </p>
        </div>

      </div>

      {/* MOON HALF-CIRCLE WITH RINGS */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[-360px] flex justify-center">
        <div className="relative w-[720px] h-[720px]">
          {/* Rotating ring system (glow + rings + moon body) */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
          >
            {/* Outer glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-cyan-400/12 via-sky-200/3 to-transparent blur-2xl" />

            {/* Outer ring */}
            <div className="absolute inset-6 rounded-full border border-cyan-300/25" />

            {/* Mid ring */}
            <div className="absolute inset-16 rounded-full border border-sky-300/20" />

            {/* Inner ring */}
            <div className="absolute inset-26 rounded-full border border-sky-200/20" />

            {/* Moon body - tuned for dark theme */}
            <div className="absolute inset-32 rounded-full bg-gradient-to-t from-slate-950 via-slate-900 to-slate-800 shadow-[0_0_120px_rgba(56,189,248,0.45)]" />

            {/* Subtle shadow on lower part to emphasize half-moon */}
            <div className="absolute inset-28 rounded-full bg-gradient-to-b from-transparent via-black/50 to-black/90 mix-blend-multiply" />
          </motion.div>

          {/* Tool chips orbiting outer ring (stay upright) */}
          <div className="absolute inset-0 flex items-center justify-center">
            {tools.map(({ title, description, Icon }, index) => {
              const baseAngle = (2 * Math.PI * index) / tools.length;
              const angle = orbitAngle + baseAngle;
              const radius = 400;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);
              return (
                <div
                  key={title}
                  className="absolute"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  <div className="h-20 w-40 md:h-24 md:w-48 rounded-xl bg-slate-950/30 border border-sky-300/25 shadow-[0_0_18px_rgba(56,189,248,0.25)] flex  flex-col items-start justify-center px-3 gap-1 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 rounded-md bg-sky-500/10 flex items-center justify-center">
                        <Icon className="text-sky-200 text-base" />
                      </div>
                      <span className="text-sm font-medium text-white">
                        {title}
                      </span>
                    </div>
                    <div className="flex flex-col ">
                     
                      <p className="text-xs font-light  text-sky-100/65 leading-tight line-clamp-2">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
}
