"use client";

import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroCard from "@/components/molecule/HeroCard";
import Image from "next/image";

import { productsById, type ProductId } from "@/config/products";

const LEFT_COLUMN_IDS: ProductId[] = [
  "rex",
  "ian",
  "vira",
  "mooglemind",
  "review-attendant",
];

const RIGHT_COLUMN_IDS: ProductId[] = [
  "attendai",
  "elvis",
  "thinkdocs",
  "alluvium",
  "demo-agent",
];

const defaultHero = {
  badge: "AI Enabled Suite",
  titleHighlight: "AI Enabled ",
  titleRest: "Property Tools",
  description:
    "Purpose-built AI products that help businesses work smarter, faster, and better.",
  ctaLabel: "Explore Now",
  ctaHref: "/products",
};

export default function HomePageHero() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={heroRef}
      className="relative h-screen overflow-hidden rounded-b-4xl bg-gradient-to-b from-[#020617] via-[#020617] to-[#030712]"
    >
      {/* Left Image */}
      <div className="absolute top-0 left-0 pointer-events-none">
        <Image
          src="/herodecorleft.png"
          alt="Hero Background Left"
          width={1000}
          height={1000}
        />
      </div>

      {/* Right Image */}
      <div className="absolute top-0 right-0 pointer-events-none">
        <Image
          src="/herodecorright.png"
          alt="Hero Background Right"
          width={1000}
          height={1000}
        />
      </div>

      {/* Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[637px] h-[1159px] bg-[#0360A7]/60 blur-[190px] rounded-full pointer-events-none" />

      {/* Left & Right Cards — STRICTLY UNCHANGED STRUCTURE */}
      <div className="relative flex h-full items-center justify-between container mx-auto z-10">
        
        {/* Left column */}
        <div>
          {LEFT_COLUMN_IDS.map((id, index) => {
            const product = productsById[id];
            const isFirst = index === 0;
            const isEven = index % 2 === 0;

            return (
              <div
                key={product.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-y-6 w-fit ${
                  !isFirst ? "mt-6" : ""
                }`}
              >
                {!isEven && <div />}
                <div className={isEven ? "col-start-1" : "col-start-2"}>
                  <HeroCard
                    icon={product.icon}
                    title={product.title}
                    description={product.description}
                    className="relative"
                  />
                </div>
                {isEven && <div />}
              </div>
            );
          })}
        </div>

        {/* Right column */}
        <div>
          {RIGHT_COLUMN_IDS.map((id, index) => {
            const product = productsById[id];
            const isFirst = index === 0;
            const isEven = index % 2 === 0;

            return (
              <div
                key={product.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-y-6 w-fit ${
                  !isFirst ? "mt-6" : ""
                }`}
              >
                {!isEven && <div />}
                <div className={isEven ? "col-start-1" : "col-start-2"}>
                  <HeroCard
                    icon={product.icon}
                    title={product.title}
                    description={product.description}
                    className="relative"
                  />
                </div>
                {isEven && <div />}
              </div>
            );
          })}
        </div>
      </div>

      {/* Center Hero */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="px-6 text-center w-full h-full flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key="default-hero"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[#C5E6FF]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8]" />
                {defaultHero.badge}
              </div>

              <h1 className="text-5xl md:text-[64px] font-medium leading-[70px] tracking-[-3.2px]">
                <span className="bg-gradient-to-r from-[#87CBFF] to-[#C5E6FF] bg-clip-text text-transparent">
                  {defaultHero.titleHighlight}
                </span>
                <br />
                <span className="text-white">{defaultHero.titleRest}</span>
              </h1>

              <p className="text-white/65 text-lg max-w-md mx-auto pt-4">
                {defaultHero.description}
              </p>

              <button
                className="mt-12 px-8 py-3 rounded-md bg-[#0078D4] text-white font-medium transition hover:scale-105"
                onClick={() => (window.location.href = defaultHero.ctaHref)}
              >
                {defaultHero.ctaLabel}
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
