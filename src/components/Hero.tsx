"use client";

import { useState, useEffect } from "react";
import { motion, useAnimationFrame, AnimatePresence } from "framer-motion";
import { productsById } from "@/config/products";
import {
  FaBolt,
  FaBrain,
  FaClipboardCheck,
  FaUserCheck,
  FaRobot,
  FaShieldAlt,
  FaChartLine,
  FaFileAlt,
  FaMicrophoneAlt,
} from "react-icons/fa";

/* Outer ring in 720px container: inset-6 = 24px, so ring radius = 360 - 24 = 336 */
const ORBIT_RADIUS = 400;
const tools = [
  {
    title: "MoogleMind",
    description: productsById.mooglemind.description,
    descriptionLong: productsById.mooglemind.description,
    Icon: FaBrain,
  },
  {
    title: "Review Attendant",
    description: productsById["review-attendant"].description,
    descriptionLong: productsById["review-attendant"].description,
    Icon: FaClipboardCheck,
  },
  {
    title: "Attend AI",
    description: productsById.attendai.description,
    descriptionLong: productsById.attendai.description,
    Icon: FaUserCheck,
  },
  {
    title: "REX",
    description: productsById.rex.description,
    descriptionLong: productsById.rex.description,
    Icon: FaRobot,
  },
  {
    title: "VIRA",
    description: productsById.vira.description,
    descriptionLong: productsById.vira.description,
    Icon: FaShieldAlt,
  },
  {
    title: "IAN",
    description: productsById.ian.description,
    descriptionLong: productsById.ian.description,
    Icon: FaChartLine,
  },
  {
    title: "Elvis",
    description: productsById.elvis.description,
    descriptionLong: productsById.elvis.description,
    Icon: FaBolt,
  },
  {
    title: "ThinkDocs",
    description: productsById.thinkdocs.description,
    descriptionLong: productsById.thinkdocs.description,
    Icon: FaFileAlt,
  },
  {
    title: "Demo Agent (STAGE)",
    description: productsById["demo-agent"].description,
    descriptionLong: productsById["demo-agent"].description,
    Icon: FaMicrophoneAlt,
  },
];

const pulseCenterData = {
  center: {
    title: "Devforge.ai",
    subtitle: "AI Enabled Proprietary Suite",
  },
  items: [
    {
      id: 1,
      icon: FaBrain,
      label: "MoogleMind",
    },
    {
      id: 2,
      icon: FaClipboardCheck,
      label: "Review Attendant",
    },
    {
      id: 3,
      icon: FaUserCheck,
      label: "Attend AI",
    },
    {
      id: 4,
      icon: FaRobot,
      label: "REX",
      },
   
    {
      id: 5,
      icon: FaShieldAlt,
      label: "VIRA",
    },
    {
      id: 6,
      icon: FaChartLine,
      label: "IAN",
    },
    {
      id: 7,
      icon: FaRobot,
      label: "Elvis",
    },
    {
      id: 8,
      icon: FaFileAlt,
      label: "ThinkDocs",
    },
    {
      id: 9,
      icon: FaMicrophoneAlt,
      label: "Demo Agent (STAGE)",
    },
  ],
};

const PHASE1_DURATION_MS = 8000; // 12 seconds

export default function Hero() {
  const [phase, setPhase] = useState<1 | 2>(1);
  const [orbitAngle, setOrbitAngle] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Switch to phase 2 (orbiting layout) after 12 seconds
  useEffect(() => {
    const t = setTimeout(() => setPhase(2), PHASE1_DURATION_MS);
    return () => clearTimeout(t);
  }, []);

  // Smooth circular motion for the tool cards (phase 2 only)
  useAnimationFrame((time) => {
    if (phase !== 2 || isHovered) return;
    const speed = 0.00009;
    const angle = (time as number) * speed;
    setOrbitAngle(angle % (Math.PI * 2));
  });

  return (
    <section
      id="hero"
      className="relative h-full lg:min-h-[80vh] py-12 lg:py-16 lg:pt-32 lg:pb-[500px] overflow-hidden bg-[#020617] rounded-4xl "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">


        <div className="relative flex items-center justify-center min-h-[420px] lg:hidden">
          {/* Pulse Rings */}
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="
                absolute rounded-full border border-emerald-400/30
                w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72
              "
              animate={{
                scale: [1, 1.8, 2.6],
                opacity: [0.45, 0.25, 0],
              }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                delay: i * 0.9,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Center Core */}
          <div
            className="
              relative z-10 rounded-full
              flex flex-col items-center justify-center text-center
              border-3 border-emerald-400/30 bg-emerald-500/10
              backdrop-blur-md
              shadow-[0_0_80px_rgba(16,185,129,0.4)]
              sm:w-48 sm:h-48
              w-40 h-40

            "
          >
            <h3 className="text-xl font-semibold text-emerald-200">
              {pulseCenterData.center.title}
            </h3>

            {pulseCenterData.center.subtitle && (
              <p className="mt-2 text-sm text-emerald-200/70 max-w-[160px]">
                {pulseCenterData.center.subtitle}
              </p>
            )}
          </div>

          {/* Orbiting Items */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {pulseCenterData.items.map((item, index) => {
              const angle = (index / pulseCenterData.items.length) * Math.PI * 2;
              const radius = 148;

              return (
                <div
                  key={item.id}
                  className="absolute flex flex-col items-center gap-1 text-center"
                  style={{
                    transform: `translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius
                      }px)`,
                  }}
                >
                  <div
                    className="
                      flex h-12 w-12 items-center justify-center rounded-xl
                      border border-white/20 bg-white/5 backdrop-blur-md
                    "
                  >
                    <item.icon className="h-6 w-6 text-emerald-400" /> {/* TODO: Add icon color */}
                  </div>

                  <span className="text-xs text-white/70">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* TITLE */}
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-medium tracking-tight text-white">
            AI Enabled Proprietary Suite
          </h1>

          <p className="mt-6 text-sm md:text-lg text-white/60 leading-relaxed">
            Purpose-built AI products that help businesses work smarter, faster, and better.
          </p>
        </div>

      </div>



      <div className="hidden lg:block">
        {/* Phase 1 only: 3 columns × 3 rows grid, 7th card centered; long descriptions; above sun */}
        <AnimatePresence>
          {phase === 1 && (
            <motion.div
              key=" phase1-cards"
              className="absolute inset-x-0 top-[280px] md:top-[320px] bottom-0 flex items-start justify-center  z-20"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative mx-auto w-[1440px] overflow-hidden bg-[#020617]">
                {/* TOP BORDER LINE */}
                <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r
                  from-transparent via-gray-700/80 to-transparent
                  animate-[pulse_4s_ease-in-out_infinite]" />

                {/* BOTTOM BORDER LINE */}
                <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r
                  from-transparent via-gray-700/80 to-transparent
                  animate-[pulse_4s_ease-in-out_infinite]" />

                {/* LEFT SKEW PANEL */}
                <div
                  className="absolute left-0 top-0 h-full w-28 bg-[#020617]
               -skew-x-12 origin-top-right
               border-l-2 border-gray-900
               shadow-[8px_0_30px_rgba(0,0,0,1)]"
                />

                {/* RIGHT SKEW PANEL */}
                <div
                  className="absolute right-0 top-0 h-full w-28 bg-[#020617]
               skew-x-12 origin-top-left
               border-r-2 border-gray-900
               shadow-[-8px_0_30px_rgba(0,0,0,1)]"
                />

                {/* CONTENT */}
                <div className="relative z-10">
                  <div className="relative max-w-7xl mx-auto p-5 px-16">
                    <div className="grid grid-cols-3 gap-3 max-w-7xl mx-auto p-5 px-16"> {tools.map(({ title, descriptionLong, Icon }, index) => (<motion.div key={title} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.04, duration: 0.35 }} className={index === 4 ? "col-start-2" : ""} > <div className="h-full min-h-[120px] rounded-xl bg-slate-950/30 border border-sky-300/25 shadow-[0_0_18px_rgba(56,189,248,0.15)] p-3 backdrop-blur-sm"> <div className="flex items-center gap-2"> <div className="h-7 w-7 rounded-md bg-sky-500/10 flex items-center justify-center"> <Icon className="text-sky-200" /> </div> <span className="text-sm text-white">{title}</span> </div> <p className="text-xs text-sky-100/65 mt-1"> {descriptionLong} </p> </div> </motion.div>))} </div>
                  </div>

                </div>
              </div>


            </motion.div>
          )}
        </AnimatePresence>

        {/* SUN/MOON: phase 1 = 1/3 risen, phase 2 = full position; centered horizontally */}
        <motion.div
          className="pointer-events-none absolute left-1/2 bottom-0 max-w-7xl w-[720px] -translate-x-1/2"
          initial={false}
          animate={{
            bottom: phase === 1 ? -240 : -360,
          }}
          transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="relative w-full h-[720px] overflow-visible">
            {/* Rotating ring system (glow + rings + moon body) - rotate only in phase 2 */}
            <motion.div
              className="absolute inset-0"
              animate={{
                rotate: phase === 2 ? 360 : 0,
              }}
              transition={
                phase === 2
                  ? { repeat: Infinity, duration: 120, ease: "linear" }
                  : { duration: 0 }
              }
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-cyan-400/12 via-sky-200/3 to-transparent blur-2xl" />
              <div className="absolute inset-6 rounded-full border border-cyan-300/25" />
              <div className="absolute inset-16 rounded-full border border-sky-300/20" />
              <div className="absolute inset-26 rounded-full border border-sky-200/20" />
              <div className="absolute inset-32 rounded-full bg-gradient-to-t from-slate-950 via-slate-900 to-slate-800 shadow-[0_0_120px_rgba(56,189,248,0.45)]" />
              <div className="absolute inset-28 rounded-full bg-gradient-to-b from-transparent via-black/50 to-black/90 mix-blend-multiply" />
            </motion.div>

            {/* Phase 2: tool cards on last ring, revolving */}
            {phase === 2 && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible">
                {tools.map(({ title, description, Icon }, index) => {
                  const baseAngle = (2 * Math.PI * index) / tools.length;
                  const angle = orbitAngle + baseAngle;

                  const x = ORBIT_RADIUS * Math.cos(angle);
                  const y = ORBIT_RADIUS * Math.sin(angle);

                  return (
                    <motion.div
                      key={title}
                      className="absolute"
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                      }}
                    >
                      <div className="h-20 w-40 md:h-24 md:w-52 rounded-xl bg-slate-950/30 border border-sky-300/25 shadow-[0_0_18px_rgba(56,189,248,0.25)] backdrop-blur-sm p-3">
                        <div className="flex items-center gap-2">
                          <div className="h-7 w-7 rounded-md bg-sky-500/10 flex items-center justify-center">
                            <Icon className="text-sky-200 text-base" />
                          </div>
                          <span className="text-sm font-medium text-white">
                            {title}
                          </span>
                        </div>
                        <p className="text-xs text-sky-100/65 line-clamp-2">
                          {description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}

          </div>
        </motion.div>
      </div>

    </section>
  );
}
