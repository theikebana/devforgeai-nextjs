"use client";

import { motion } from "framer-motion";
import {
  Github,
  Cloud,
  Rocket,
  Shield,
  Zap,
  FileCode,
  ArrowRight,
  Search,
} from "lucide-react";
import { IoWarningOutline, IoCloudOutline, IoCloud } from "react-icons/io5";

/**
 * Reusable animated CI/CD flow used in the REX product card.
 */
export function RexCardAnimation() {
  return (
    <div className="p-3 sm:p-4 rounded-xl bg-[#FFFFFF0D] border border-white/4 h-auto sm:h-32 flex items-center justify-center">
      <div className="flex items-center justify-between w-full">
        {/* Code Icon */}
        <div className="flex flex-col items-center gap-2 mt-5">
          <div
            className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white animate-pulse"
            style={{ animationDelay: "0s" }}
          >
            <FileCode className="w-6 h-6" />
          </div>
          <span className="text-xs text-white">Code</span>
        </div>

        {/* Dashed Arrow */}
        <div className="flex-1 flex items-center justify-center px-2 relative">
          <div className="w-full h-[1px] border-t border-dashed border-white/30 relative">
            {/* Animated Arrow */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2"
              initial={{ left: "0%" }}
              animate={{ left: "100%" }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: [0.4, 0, 0.2, 1],
                repeatDelay: 0.5,
              }}
            >
              <ArrowRight className="w-4 h-4 text-white/80" />
            </motion.div>
          </div>
        </div>

        {/* Review Icon */}
        <div className="flex flex-col items-center gap-2 mt-5">
          <div
            className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white animate-pulse"
            style={{ animationDelay: "0s" }}
          >
            <Search className="w-6 h-6" strokeWidth={1.8} />
          </div>
          <span className="text-xs text-white">REX</span>
        </div>

        {/* Dashed Arrow */}
        <div className="flex-1 flex items-center justify-center px-2 relative">
          <div className="w-full h-[1px] border-t border-dashed border-white/30 relative">
            {/* Animated Arrow */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2"
              initial={{ left: "0%" }}
              animate={{ left: "100%" }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: [0.4, 0, 0.2, 1],
                delay: 1.5,
                repeatDelay: 0.5,
              }}
            >
              <ArrowRight className="w-4 h-4 text-white/80" />
            </motion.div>
          </div>
        </div>

        {/* Security Icon */}
        <div className="flex flex-col items-center gap-2 mt-5">
          <div
            className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white animate-pulse"
            style={{ animationDelay: "0s" }}
          >
            <Shield className="w-6 h-6" />
          </div>
          <span className="text-xs text-white">Validated</span>
        </div>
      </div>
    </div>
  );
}

/**
 * Reusable animated radar used in the VIRA product card.
 */
export function ViraCardAnimation() {
  return (
    <div className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/4 h-28 sm:h-32 flex items-center justify-center">
      <div className="relative w-full h-full max-w-[120px] max-h-[120px]">
        {/* Cloud Background Behind Radar */}
        <div className="absolute inset-0 -z-10">
          {/* Filled cloud */}
          <IoCloudOutline className="absolute -top-3 -left-4 w-16 h-12 text-white/4" />
          {/* Outline cloud */}
          <IoCloudOutline className="absolute top-6 -right-2 w-9 h-9 text-white/4" />
          <IoCloud className="absolute top-12 -left-12 w-9 h-9 text-white/4" />
          <IoCloud className="absolute top-12 -right-12 w-12 h-12 text-white/4" />
          {/* Smaller filled cloud */}
          <IoCloud className="absolute bottom-0 left-4 w-8 h-8 text-white/4" />
        </div>
        {/* Radar Background Circle */}
        <svg
          className="w-full h-full transform -rotate-90"
          viewBox="0 0 100 100"
        >
          {/* Grid Circles */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="rgba(59, 130, 246, 0.1)"
            strokeWidth="0.5"
          />
          <circle
            cx="50"
            cy="50"
            r="28"
            fill="none"
            stroke="rgba(59, 130, 246, 0.1)"
            strokeWidth="0.5"
          />
          <circle
            cx="50"
            cy="50"
            r="16"
            fill="none"
            stroke="rgba(59, 130, 246, 0.1)"
            strokeWidth="0.5"
          />

          {/* Grid Lines */}
          <line
            x1="50"
            y1="0"
            x2="50"
            y2="100"
            stroke="rgba(59, 130, 246, 0.1)"
            strokeWidth="0.5"
          />
          <line
            x1="0"
            y1="50"
            x2="100"
            y2="50"
            stroke="rgba(59, 130, 246, 0.1)"
            strokeWidth="0.5"
          />
          <line
            x1="10"
            y1="10"
            x2="90"
            y2="90"
            stroke="rgba(59, 130, 246, 0.1)"
            strokeWidth="0.5"
          />
          <line
            x1="90"
            y1="10"
            x2="10"
            y2="90"
            stroke="rgba(59, 130, 246, 0.1)"
            strokeWidth="0.5"
          />

          {/* Detection Points - Bugs (Warnings) */}
          <IoWarningOutline
            x="62"
            y="32"
            width="4"
            height="4"
            color="#ef4444"
            className="animate-radar-pulse"
            style={{ animationDelay: "0s" }}
          />
          <IoWarningOutline
            x="37"
            y="67"
            width="4"
            height="4"
            color="#ef4444"
            className="animate-radar-pulse text-red-500"
            style={{ animationDelay: "1s" }}
          />
          <IoWarningOutline
            x="17"
            y="27"
            width="4"
            height="4"
            color="#ef4444"
            className="animate-radar-pulse"
            style={{ animationDelay: "1.5s" }}
          />

          {/* Gradient for sweep line */}
          <defs>
            <linearGradient
              id="radar-gradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#93c5fd" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Sweep Line (rotating with SVG animation) */}
          <g transform="translate(50, 50)">
            <g>
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0;360"
                dur="3s"
                repeatCount="indefinite"
              />
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="-40"
                stroke="url(#radar-gradient)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </g>
          </g>

          {/* Center Dot */}
          <circle
            cx="50"
            cy="50"
            r="2"
            fill="#3b82f6"
            className="animate-pulse"
          />
        </svg>

        {/* Finding Lens Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-20 h-20">
            {/* Lens Outer Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-lens-pulse"></div>
            {/* Lens Inner Ring */}
            <div
              className="absolute inset-2 rounded-full border border-blue-400/50 animate-lens-pulse"
              style={{ animationDelay: "0.3s" }}
            ></div>
            {/* Lens Center */}
            <div className="absolute inset-4 rounded-full bg-blue-500/10 backdrop-blur-sm animate-lens-focus"></div>
            {/* Crosshair */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-[1px] bg-blue-500/40"></div>
              <div className="absolute w-[1px] h-full bg-blue-500/40"></div>
            </div>
          </div>
        </div>

        {/* Scanning Arc Effect */}
        <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            style={{ transformOrigin: "50% 50%" }}
          >
            <defs>
              <linearGradient
                id="arc-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="transparent" />
                <stop
                  offset="50%"
                  stopColor="rgba(59, 130, 246, 0.4)"
                />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <g transform="translate(50, 50)">
              <g>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  values="0;360"
                  dur="3s"
                  repeatCount="indefinite"
                />
                <path
                  d="M 0 -50 L 0 0 A 50 50 0 0 1 50 0 Z"
                  fill="url(#arc-gradient)"
                  opacity="0.5"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

/**
 * Reusable animated resource status list used in the IAN product card.
 */
export function IanCardAnimation() {
  return (
    <div className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/4 h-28 sm:h-32 flex items-center justify-center">
      <div className="space-y-2.5 w-full">
        {/* VM-01 */}
        <div className="flex items-center gap-2.5">
          <motion.div
            className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
          ></motion.div>
          <span className="text-xs text-gray-300 font-mono flex-shrink-0 min-w-[50px]">
            VM-01
          </span>
          <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden relative">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full"></div>
            <motion.div
              className="h-full bg-blue-500 rounded-full relative z-10"
              initial={{ width: 0 }}
              animate={{ width: "78%" }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            ></motion.div>
            <div className="absolute right-0 top-0 h-full w-[22%] bg-white/10 rounded-r-full"></div>
          </div>
          <span className="text-xs text-green-400 font-medium flex-shrink-0 ml-1">
            Run
          </span>
        </div>

        {/* AppSvc */}
        <div className="flex items-center gap-2.5">
          <motion.div
            className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{
              repeat: Infinity,
              duration: 1,
              delay: 0.2,
            }}
          ></motion.div>
          <span className="text-xs text-gray-300 font-mono flex-shrink-0 min-w-[50px]">
            AppSvc
          </span>
          <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden relative">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full"></div>
            <motion.div
              className="h-full bg-blue-500 rounded-full relative z-10"
              initial={{ width: 0 }}
              animate={{ width: "78%" }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.2,
              }}
            ></motion.div>
            <div className="absolute right-0 top-0 h-full w-[22%] bg-white/10 rounded-r-full"></div>
          </div>
          <span className="text-xs text-green-400 font-medium flex-shrink-0 ml-1">
            OK
          </span>
        </div>

        {/* SQL-DB */}
        <div className="flex items-center gap-2.5">
          <motion.div
            className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{
              repeat: Infinity,
              duration: 1,
              delay: 0.4,
            }}
          ></motion.div>
          <span className="text-xs text-gray-300 font-mono flex-shrink-0 min-w-[50px]">
            SQL-DB
          </span>
          <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden relative">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full"></div>
            <motion.div
              className="h-full bg-blue-500 rounded-full relative z-10"
              initial={{ width: 0 }}
              animate={{ width: "78%" }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.4,
              }}
            ></motion.div>
            <div className="absolute right-0 top-0 h-full w-[22%] bg-white/10 rounded-r-full"></div>
          </div>
          <span className="text-xs text-green-400 font-medium flex-shrink-0 ml-1">
            OK
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <div id="hero" className="relative lg:pt-32 pt-20 pb-16 lg:pb-20  sm:pb-24 overflow-hidden ">
      {/* Background Gradients */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col 2xl:gap-24 lg:gap-20 gap-0">
        <div className="py-10">



          <section className="w-full">
            <div className="max-w-7xl mx-auto px-4">

              {/* Centering Wrapper */}
              <div className="flex justify-center">

                {/* Content Row */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8">

                  {/* Left Content */}
                  <div className="max-w-xl text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-medium tracking-tight text-white">
                      Secure. Optimize.
                      <br />
                      Take Control.
                    </h1>
                  </div>

                  {/* Separator */}
                  <div className="hidden lg:block w-px h-32 bg-white/20" />

                  {/* Right Content */}
                  <div className="max-w-xl text-left">
                    <p className="text-sm md:text-lg text-[#FFFFFF99] font-light leading-snug">
                      DevForge.ai is a cloud management and security platform that
                      provides deep visibility into your Azure infrastructure
                      while maintaining strong security and compliance across the
                      environment.
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </section>


        </div>

        {/* GitHub and Azure Buttons */}

        {/* Product Cards */}


        <div className="grid relative grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-5 xl:gap-12 max-w-6xl mx-auto">

          <div className="absolute -top-16 left-1/3 -translate-x-1/3 flex flex-col items-center justify-center">
            <div className="relative z-20 mb-2 sm:mb-0">
              <button
                className="
    w-[110px] sm:w-[129.2px]
    h-[44px] sm:h-[49.6px]

    flex
    items-center
    gap-2
    pl-[16px] sm:pl-[20px]

    bg-[#24292ECC]
    border
    border-[#FFFFFF33]

    shadow-[0_0_100px_rgba(255,255,255,0.20)]
    rounded-full

    text-white
    text-xs sm:text-sm
    font-medium

    backdrop-blur-md
    transition
    "
              >
                <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>DevForge</span>
              </button>
            </div>

            <div className="mb-2 sm:mb-0 w-[600px]">
              <img
                src="/main-connector.svg"
                alt="Icon"
                className="w-full h-full object-cover lg:block hidden"
              />


            </div>
          </div>

          <div className="flex flex-col items-center ">
            <div className="relative z-20 mb-2 sm:mb-0">
              <button
                className="
    relative box-border
    flex items-center gap-2 pl-[16px] sm:pl-[20px]
    h-[44px] sm:h-[49.6px] w-[100px] sm:w-[119.91px]

    rounded-full
    bg-[#161b22]
    border border-[#30363d]

    text-[#e6edf3] font-medium text-xs sm:text-sm
    backdrop-blur-md

    transition-all
    hover:scale-[1.02]
    active:scale-[0.98]

    before:content-['']
    before:absolute
    before:inset-0
    before:-z-10
    before:rounded-full
    before:bg-[rgba(35,134,54,0.45)]
    before:blur-[28px]
    before:opacity-40

    shadow-[0_0_18px_rgba(35,134,54,0.18)]

   
  "
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 text-[#2ea043]" />
                <span className="text-[#2ea043]">GitHub</span>
              </button>

            </div>

            <div className="mb-2 sm:mb-0">
              <img
                src="/github-connector.svg"
                alt="Icon"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="group relative p-4 sm:p-6 rounded-2xl bg-[#0A0C10] border border-white/5 overflow-hidden text-left animate-fade-in flex flex-col h-full w-full">
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
              <div className="relative z-10 flex flex-col gap-2 sm:gap-3 flex-1">
                <div className="flex items-start md:flex-col gap-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/5 flex items-center justify-center mb-2 sm:mb-4 text-white flex-shrink-0">
                    <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex flex-col gap-2 sm:gap-3 flex-1">
                    <h3 className="text-xl sm:text-2xl font-medium text-white ">
                      REX
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 sm:mb-6 leading-tight flex-grow">
                      Rex auto-reviews code, finds risks, and secures CI/CD
                      before production.
                    </p>
                  </div>
                </div>

                {/* CI/CD Flow Diagram - Wrapped in Box */}
              <div className="mt-auto ">
                <RexCardAnimation />
              </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:col-span-2 items-center mt-6 md:mt-0">
            <div className="relative z-20 mb-2 sm:mb-0">
              <button
                className="
 relative
    box-border

    flex items-center gap-2 pl-[16px] sm:pl-[20px]
    h-[44px] sm:h-[49.6px] w-[100px] sm:w-[119.91px]

    rounded-full
    bg-[rgba(0,120,212,0.1)]
    border border-[0.8px] border-[rgba(0,120,212,0.4)]

    text-blue-500 font-medium text-xs sm:text-sm
    backdrop-blur-md

    transition-all
    hover:scale-[1.02]
    active:scale-[0.98]

    before:content-['']
    before:absolute
    before:inset-0
    before:-z-10
    before:rounded-full
    before:bg-[rgba(0,120,212,0.6)]
    before:blur-[25px]
    before:opacity-60 

    shadow-[0_0_20px_rgba(0,120,212,0.2)]

    hover:border-white/20
    hover:bg-white/10
  "
              >
                <Cloud className="w-4 h-4 sm:w-5 sm:h-5 text-white/10" />
                <span>Azure</span>
              </button>
            </div>
            <div className="mb-2 sm:mb-0">
              <img
                src="/connector.svg"
                alt="Icon"
                className="w-full h-full object-cover lg:block hidden"
              />

              <img
                src="/github-connector.svg"
                alt="Icon"
                className="w-full h-full object-cover lg:hidden block"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 sm:gap-6 w-full">
              <div className="group relative p-4 sm:p-6 rounded-2xl bg-[#0A0C10] border border-white/5 overflow-hidden text-left animate-fade-in flex flex-col h-full w-full">
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

                <div className="relative z-10 flex flex-col gap-2 sm:gap-3 flex-1">
                  <div className="flex items-start md:flex-col gap-5">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/5 flex items-center justify-center mb-2 sm:mb-4 text-white flex-shrink-0">
                      <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex flex-col gap-2 sm:gap-3 flex-1">
                      <h3 className="text-xl sm:text-2xl font-medium text-white ">
                        VIRA
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 sm:mb-6 leading-tight flex-grow">
                        Cloud VIRA automates Azure security with continuous,
                        enterprise-grade risk scanning.
                      </p>
                    </div>
                  </div>
                  {/* Radar Scanning Animation - Wrapped in Box */}
                  <div className="mt-auto ">
                    <ViraCardAnimation />
                  </div>
                </div>
              </div>

              <div className="group relative p-4 sm:p-6 rounded-2xl bg-[#0A0C10] border border-white/5 overflow-hidden text-left animate-fade-in flex flex-col h-full w-full">
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
                <div className="relative z-10 flex flex-col gap-2 sm:gap-3 flex-1">
                  <div className="flex items-start md:flex-col gap-5">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/5 flex items-center justify-center mb-2 sm:mb-4 text-white flex-shrink-0">
                      <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex flex-col gap-2 sm:gap-3 flex-1">
                      <h3 className="text-xl sm:text-2xl font-medium text-white ">
                        IAN
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 sm:mb-6 leading-tight flex-grow">
                        Manage all Azure services from one dashboard with
                        real-time insights.
                      </p>
                    </div>
                  </div>

                  {/* Dashboard Status Display - Wrapped in Box */}
                  <div className="mt-auto ">
                    <IanCardAnimation />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
