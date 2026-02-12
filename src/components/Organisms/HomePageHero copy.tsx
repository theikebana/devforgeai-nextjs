"use client";
import { motion } from "framer-motion";
export default function HomePageHero() {
  return (
    <section className="relative  h-screen bg-[#020617] flex items-center justify-center overflow-hidden rounded-4xl m-4">
      
      {/* Center Content */}
      <div className="text-center flex flex-col items-center justify-center ">
        <motion.h1
        className="text-center text-5xl md:text-6xl font-medium leading-[70px] tracking-[-3.2px] text-center "
        >
            <span   className="
          bg-gradient-to-r from-[#87CBFF] to-[#C5E6FF] 
          bg-clip-text text-transparent"
          style={{ fontFamily: "Satoshi" }}
          
        > AI Enabled </span>
         <br /> <span className="text-white ">Property Tools</span>
        </motion.h1>

        <p className="text-white/65 text-lg max-w-md mx-auto leading-snug pt-4">
        Purpose-built AI products that help businesses work 
        smarter, faster, and better.        </p>

        {/* View All Button */}
        <button className="mt-12 px-8 py-3 rounded-md bg-[#0078D4] text-white font-medium transition-all duration-300 cursor-pointer  hover:scale-105"
        onClick={() => {
          window.location.href = "/products";
        }}
        >
         Explore Now
        </button>

      
      </div>
    </section>
  );
}
