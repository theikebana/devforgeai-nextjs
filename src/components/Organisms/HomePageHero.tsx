"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroCard from "@/components/molecule/HeroCard";
import Image from "next/image";

import { productsById, type ProductId } from "@/config/products";
import DotGrid from "@/components/dotgrid";

const LEFT_COLUMN_IDS: ProductId[] = [
  "rex",
  "ian",
  "vira",
  "autonomoai",
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
  titleHighlight: "Purpose-built ",
  titleRest: "AI products",
  description:
    "Designed to help businesses work smarter, faster, and better.",
  ctaLabel: "Explore Now",
  ctaHref: "/products",
};

export default function HomePageHero() {
  const heroRef = useRef<HTMLElement>(null);
  const [cursorDirection, setCursorDirection] = useState(0);
  const [cursorIntensity, setCursorIntensity] = useState(0);

  // Custom eased smooth scroll for better feel than native scrollIntoView
  const scrollToProducts = () => {
    if (typeof window === "undefined") return;

    const target = document.getElementById("products");
    if (!target) return;

    const startY = window.scrollY || window.pageYOffset;
    const rect = target.getBoundingClientRect();
    const targetY = startY + rect.top;

    const duration = 700; // ms
    const startTime = performance.now();

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(1, elapsed / duration);
      const eased = easeInOutCubic(progress);

      window.scrollTo(0, startY + (targetY - startY) * eased);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current) return;

    const rect = heroRef.current.getBoundingClientRect();
    const relativeX = (event.clientX - rect.left) / rect.width; // 0 -> 1

    // Normalize to -1 (far left) -> 1 (far right)
    const direction = Math.max(-1, Math.min(1, (relativeX - 0.5) * 2));

    // Smoothly ease direction toward target to avoid sudden flips
    setCursorDirection((prev) => prev + (direction - prev) * 0.2);

    // Gently boost intensity toward 1 instead of jumping
    setCursorIntensity((prev) => {
      const boosted = prev + (1 - prev) * 0.15;
      return boosted > 1 ? 1 : boosted;
    });
  };

  // Smoothly decay cursor intensity over time so motion settles when cursor stops
  useEffect(() => {
    let frameId: number;

    const decay = () => {
      setCursorIntensity((prev) => {
        const next = prev * 0.96;
        return next < 0.01 ? 0 : next;
      });
      frameId = window.requestAnimationFrame(decay);
    };

    frameId = window.requestAnimationFrame(decay);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative xl:h-screen h-[60vh] overflow-hidden rounded-b-4xl bg-gradient-to-b from-[#020617] via-[#020617] to-[#030712]"
    >
      {/* === DotGrid Animation === */}
      <DotGrid
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        dotSize={4}
        gap={15}
        baseColor="#181322ff"
        activeColor="#5227FF"
        proximity={280}
        shockRadius={280}
        shockStrength={5}
        resistance={450}
        returnDuration={1.5}
        autoMode
      />

      {/* Background Images — pointer-events-none so they don’t block cards */}
      <div className="absolute top-0 left-0 pointer-events-none z-0">
        <Image
          src="/herodecorleft.png"
          alt="Hero Background Left"
          width={1000}
          height={1000}
        />
      </div>
      <div className="absolute top-0 right-0 pointer-events-none z-0">
        <Image
          src="/herodecorright.png"
          alt="Hero Background Right"
          width={1000}
          height={1000}
        />
      </div>

      {/* Center Glow — also non-interactive */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[637px] h-[1159px] bg-[#0360A7]/60 blur-[190px] rounded-full pointer-events-none z-0" />

      {/* === HeroCards Container — above backgrounds, but lets center CTA stay clickable === */}
      <div className="relative h-full items-center justify-between container mx-auto z-20 hidden xl:flex pointer-events-none">
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
                <div
                  className={`${isEven ? "col-start-1" : "col-start-2"} pointer-events-auto`}
                >
                  <HeroCard
                    icon={product.icon}
                    title={product.title}
                    description={product.description}
                    href={product.path}
                    cursorDirection={cursorDirection}
                    cursorIntensity={cursorIntensity}
                    className="relative z-20" // ensure each card is clickable
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
                <div
                  className={`${isEven ? "col-start-1" : "col-start-2"} pointer-events-auto`}
                >
                  <HeroCard
                    icon={product.icon}
                    title={product.title}
                    description={product.description}
                    href={product.path}
                    cursorDirection={cursorDirection}
                    cursorIntensity={cursorIntensity}
                    className="relative z-20" // ensure each card is clickable
                  />
                </div>
                {isEven && <div />}
              </div>
            );
          })}
        </div>
      </div>

      {/* Center Hero */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
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

              <h1 className="text-5xl md:text-[64px] font-medium xl:leading-[70px] leading-[50px] tracking-[-3.2px]">
                <span className="bg-gradient-to-r from-[#87CBFF] to-[#C5E6FF] bg-clip-text text-transparent">
                  {defaultHero.titleHighlight}
                </span>
                <br />
                <span className="text-white">{defaultHero.titleRest}</span>
              </h1>

              <p className="text-white/65 text-lg max-w-lg mx-auto pt-4">
                {defaultHero.description}
              </p>

              <button
                className="mt-12 px-8 py-3 rounded-md bg-[#0078D4] cursor-pointer z-100 text-white font-medium transition hover:scale-105"
                onClick={scrollToProducts}
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
