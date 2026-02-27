"use client";

import { motion, AnimatePresence } from "framer-motion";
import { BsRobot } from "react-icons/bs";
import { GoArrowDownRight } from "react-icons/go";
import ColorBends from "../ColorBends";
import ProductsShowcase from "./ProductsShowcase";

export default function HomePageHero() {
  return (
    <section className="relative h-[95vh] flex flex-col justify-center rounded-4xl text-white 2xl:px-6 px-2 2xl:m-4 m-2 bg-[#000] overflow-hidden">

      {/* =========================
          Background Color Blend / Orb
          ========================= */}
      <div className="absolute inset-0 z-10 h-full">
        <ColorBends
          colors={["#1a1b2f", "#151a2e", "#0f1f25"]}
          rotation={-180}
          speed={0.2}
          scale={0.2}
          frequency={2.9}
          warpStrength={0}
          mouseInfluence={0.2}
          parallax={0}
          noise={0}
          transparent
          autoRotate={0}
        />
      </div>

      {/* =========================
          Hero Header: Icon + Description
          ========================= */}
      <div className="flex flex-col items-center mb-6 max-w-3xl mx-auto z-50">
        
        {/* Top icon + pill label */}
        <div className="flex items-center gap-2 max-w-3xl self-start relative top-2 z-50">
          <div className="flex items-center justify-center w-14 h-14 rounded-full rotate-12 text-white border border-white/4 glass-card">
            <BsRobot className="w-8 h-8" />
          </div>

          <p className="text-gray-400 text-xs font-semibold p-2 py-1 rounded-md bg-black/40 backdrop-blur-xl">
            DESIGNED TO HELP BUSINESSES WORK
          </p>
        </div>

        {/* Main Hero Title */}
        <AnimatePresence mode="wait">
          <motion.h1
            key="hero-title"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className="text-[3rem] md:text-[4rem] lg:text-[5rem] leading-[0.85] tracking-tight flex flex-col items-start mb-5 backdrop-blur-xl z-50 p-8 rounded-2xl overflow-hidden"
          >
            <span>Purpose-built</span>
            <span className="flex items-center gap-4 mt-2">
              AI products
              <span className="flex items-center justify-center w-16 h-16 mt-4 rounded-full border border-white/4 glass-card animate-pulse">
                <GoArrowDownRight className="w-8 h-8 text-white" />
              </span>
            </span>
          </motion.h1>
        </AnimatePresence>

        {/* Hero Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-2 rounded-full border border-white/10 backdrop-blur-xl text-white hover:border-white/4 cursor-pointer transition-all duration-300 glass-card mb-8 z-50"
        >
          Explore our products
        </motion.button>
      </div>

      {/* =========================
          Left Scrolling Product Showcase
          ========================= */}
      <div className="absolute left-4 2xl:left-12 w-[275px] h-full z-40 2xl:w-[300px]">
        <ProductsShowcase />
      </div>

      {/* =========================
          Right Scrolling Product Showcase (Reverse)
          ========================= */}
      <div className="absolute right-4  2xl:right-12 w-[275px] h-full z-40 2xl:w-[300px]">
        <ProductsShowcase reverse />
      </div>

      {/* =========================
          Bottom Description Text
          ========================= */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-center max-w-md px-4 z-50">
        <p className="text-gray-400 text-sm">
          Designed to help businesses work smarter, faster, and better.
        </p>
      </div>

    </section>
  );
}