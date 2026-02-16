"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroCard from "@/components/molecule/HeroCard";
import Image from "next/image";
import HomePageHeroStats from "./HeroStatSection";
import ProductHeroMap from "./ProductHeroMap";
import { productsById, type ProductId } from "@/config/products";
import { X, Home, ChevronLeft, ChevronRight } from "lucide-react";

const LEFT_COLUMN_IDS: ProductId[] = ["rex", "ian", "vira", "mooglemind", "review-attendant"];
const RIGHT_COLUMN_IDS: ProductId[] = ["attendai", "elvis", "thinkdocs", "alluvium", "demo-agent"];

/** Slide 0 = main hero, slides 1–10 = products in order (rex…demo-agent) */
const SLIDE_PRODUCT_IDS: (ProductId | null)[] = [
  null,
  ...LEFT_COLUMN_IDS,
  ...RIGHT_COLUMN_IDS,
];
const TOTAL_SLIDES = SLIDE_PRODUCT_IDS.length;

const defaultHero = {
  badge: "AI Enabled Suite",
  title: "AI Enabled Property Tools",
  titleHighlight: "AI Enabled ",
  titleRest: "Property Tools",
  description:
    "Purpose-built AI products that help businesses work smarter, faster, and better.",
  ctaLabel: "Explore Now",
  ctaHref: "/products",
};

export default function HomePageHero() {
  const heroRef = useRef<HTMLElement>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const activeProductId = activeSlideIndex === 0 ? null : (SLIDE_PRODUCT_IDS[activeSlideIndex] as ProductId);
  const showDefault = activeSlideIndex === 0;

  const scrollToHero = () => {
    heroRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goToSlide = (index: number) => {
    setActiveSlideIndex((index + TOTAL_SLIDES) % TOTAL_SLIDES);
    scrollToHero();
  };

  const handleCardClick = (id: ProductId) => {
    const idx = SLIDE_PRODUCT_IDS.indexOf(id);
    if (idx !== -1) {
      setActiveSlideIndex(idx);
      scrollToHero();
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative h-screen overflow-hidden rounded-b-4xl  bg-gradient-to-b from-[#020617] via-[#020617] to-[#030712] "
    >
      {/* Soft glow bottom accent */}
      {/* <div className="pointer-events-none absolute inset-x-0 bottom-[-40%] h-[60%] bg-[radial-gradient(circle_at_center,_#0EA5E9_0,_transparent_55%)] opacity-40 blur-3xl" /> */}

      {/* Floating product cards */}

      {/* Left Image */}
      <div className="absolute top-0 left-0 pointer-events-none ">
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


      <div className="absolute 
                top-1/2 
                left-1/2 
                -translate-x-1/2 
                -translate-y-1/2
                w-[637px] 
                h-[1159px] 
                bg-[#0360A7]/60 
                blur-[190px] 
                rounded-full
                bottom-96
                pointer-events-none">
      </div>



      <div
        className={`relative flex h-full items-center justify-between container mx-auto transition-all duration-300 ${activeSlideIndex > 0 ? "z-10" : "z-30"
          }`}
      >

        {/* Left column cards */}
        <div>
          {LEFT_COLUMN_IDS.map((id, index) => {
            const product = productsById[id];
            const isFirst = index === 0;
            const isEven = index % 2 === 0;
            return (
              <div
                key={product.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-x-0 gap-y-6 w-fit ${!isFirst ? "mt-6" : ""}`}
              >
                {!isEven && <div />}
                <div className={isEven ? "col-start-1" : "col-start-2"}>
                  <HeroCard
                    icon={product.icon}
                    title={product.title}
                    description={product.description}
                    className={`relative ${activeSlideIndex > 0 && SLIDE_PRODUCT_IDS[activeSlideIndex] === id ? "ring-2 ring-[#38BDF8] ring-offset-2 ring-offset-[#020617]" : ""}`}
                    onClick={() => handleCardClick(id)}
                  />
                </div>
                {isEven && <div />}
              </div>
            );
          })}
        </div>

        {/* Right column cards */}
        <div>
          {RIGHT_COLUMN_IDS.map((id, index) => {
            const product = productsById[id];
            const isFirst = index === 0;
            const isEven = index % 2 === 0;
            return (
              <div
                key={product.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-x-0 gap-y-6 w-fit ${!isFirst ? "mt-6" : ""}`}
              >
                {!isEven && <div />}
                <div className={isEven ? "col-start-1" : "col-start-2"}>
                  <HeroCard
                    icon={product.icon}
                    title={product.title}
                    description={product.description}
                    className={`relative ${activeSlideIndex > 0 && SLIDE_PRODUCT_IDS[activeSlideIndex] === id ? "ring-2 ring-[#38BDF8] ring-offset-2 ring-offset-[#020617]" : ""}`}
                    onClick={() => handleCardClick(id)}
                  />
                </div>
                {isEven && <div />}
              </div>
            );
          })}
        </div>
      </div>



      {/* Center hero content – one section: default or merged product hero when stat/card is clicked */}
      <div
        className={`absolute inset-0 flex h-full items-center justify-center pointer-events-none backdrop-blur-xl transition-all duration-300 ${activeSlideIndex > 0 ? "z-40" : "z-20"
          }`}
      >


        <div className="px-6 text-center md:px-0 w-full h-full flex flex-col items-center justify-center pointer-events-auto relative">
          <AnimatePresence mode="wait">
            {showDefault ? (
              <motion.div
                key="default-hero"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center"
              >
                {/* Default hero content */}
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[#C5E6FF]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8]" />
                  {defaultHero.badge}
                </div>
                <h1
                  className="text-center text-5xl md:text-[64px] font-medium leading-[70px] tracking-[-3.2px]"
                  style={{ fontFamily: "Satoshi" }}
                >
                  <span className="bg-gradient-to-r from-[#87CBFF] to-[#C5E6FF] bg-clip-text text-transparent">
                    {defaultHero.titleHighlight}
                  </span>
                  <br />
                  <span className="text-white">{defaultHero.titleRest}</span>
                </h1>
                <p className="text-white/65 text-lg max-w-md mx-auto leading-snug pt-4">
                  {defaultHero.description}
                </p>
                <button
                  className="mt-12 px-8 py-3 rounded-md bg-[#0078D4] text-white font-medium transition-all duration-300 cursor-pointer hover:scale-105"
                  onClick={() => {
                    window.location.href = defaultHero.ctaHref;
                  }}
                >
                  {defaultHero.ctaLabel}
                </button>
              </motion.div>
            ) : (
              activeProductId && (
                <motion.div
                  key={activeProductId}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex flex-col items-center justify-center w-full container mx-auto overflow-y-auto py-8"
                >
                  {/* Back to all products */}
                  <button
                    onClick={() => goToSlide(0)}
                    className="absolute top-4 right-4 md:top-6 md:right-6 z-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                    aria-label="Back to all products"
                  >
                    <X className="w-4 h-4" />
                    All products
                  </button>

                  {/* Product hero */}
                  <div className="home-hero-embedded w-full container mx-auto backdrop-blur-xl">
                    <ProductHeroMap productId={activeProductId} />
                  </div>

                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>
      </div>


      {/* Controls + Stats */}
      <div className="absolute inset-x-0 bottom-4 z-50 flex flex-col items-center ">

        {/* 1️⃣ Pagination Dots (Top) */}
        <div className="flex items-center gap-2 rounded-t-xl bg-white/[0.03] border border-white/10 backdrop-blur-xl px-4 py-1">
          {Array.from({ length: TOTAL_SLIDES }, (_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className="group focus:outline-none"
              aria-label={`Go to slide ${i + 1}`}
            >
              <span
                className={`block h-1 w-3 rounded-full transition-all duration-300 ${i === activeSlideIndex
                    ? "bg-[#38BDF8] scale-125"
                    : "bg-white/40 group-hover:bg-white/70"
                  }`}
              />
            </button>
          ))}
        </div>

        {/* 2️⃣ Arrows + Stats Bar */}
        <div className="flex items-center ">

          {/* Left Arrow */}
          <button
            onClick={() => goToSlide(activeSlideIndex - 1)}
            className="p-3 rounded-l-md rounded-r-none  bg-white/[0.03]
          border border-white/10
          backdrop-blur-xl border border-white/15 text-white/80 hover:text-white hover:bg-white/20 transition-all"
            aria-label="Previous hero"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Stats Bar */}
          <HomePageHeroStats
            onStatClick={(id) => {
              const idx = SLIDE_PRODUCT_IDS.indexOf(id);
              if (idx !== -1) goToSlide(idx);
            }}
            centerSlot={
              <button
                onClick={() => goToSlide(0)}
                className="flex items-center gap-2 cursor-pointer rounded-md border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/12 transition-colors"
                aria-label="Back to main hero"
              >
                <Home className="w-5 h-5 text-[#38BDF8]" />
                <span className="hidden sm:inline">Home</span>
              </button>
            }
          />

          {/* Right Arrow */}
          <button
            onClick={() => goToSlide(activeSlideIndex + 1)}
            className="p-3 rounded-r-md rounded-l-none   bg-white/[0.03]
          border border-white/10
          backdrop-blur-xl border border-white/15 text-white/80 hover:text-white hover:bg-white/20 transition-all"
            aria-label="Next hero"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>
      </div>


    </section>
  );
}
