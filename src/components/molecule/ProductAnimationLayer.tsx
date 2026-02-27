"use client";

import { motion } from "framer-motion";
import { ProductId } from "@/config/products";

export default function ProductAnimationLayer({
  productId,
}: {
  productId: ProductId;
}) {
  switch (productId) {
    /* ============================= */
    /* 🚀 REX – Code Flow Matrix    */
    /* ============================= */
    case "rex":
      return (
        <div className="relative w-full h-full overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[2px] h-10 bg-purple-500/60"
              style={{ left: `${15 * i}%` }}
              animate={{
                y: ["-100%", "120%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "linear",
              }}
            />
          ))}
        </div>
      );

    /* ============================= */
    /* 🛡 VIRA – Security Grid Lock */
    /* ============================= */
    case "vira":
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div
            className="absolute w-24 h-24 border border-indigo-500 rounded-xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-16 h-16 border border-indigo-400 rounded-xl"
            animate={{ rotate: -360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
        </div>
      );

    /* ============================= */
    /* ⚡ IAN – Energy Nodes        */
    /* ============================= */
    case "ian":
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-yellow-400 rounded-full"
              animate={{
                x: [0, 30, 0, -30, 0],
                y: [0, -30, 0, 30, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      );

    /* ============================= */
    /* 🔍 Autonomo AI – Search Waves */
    /* ============================= */
    case "autonomoai":
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute w-20 h-20 border border-purple-400 rounded-full"
              animate={{
                scale: [0.5, 1.8],
                opacity: [0.6, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.8,
              }}
            />
          ))}
        </div>
      );

    /* ============================= */
    /* 💬 Review Attendant – Chat Stack */
    /* ============================= */
    case "review-attendant":
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute w-10 h-6 bg-purple-400/30 rounded-md"
              animate={{
                y: [20 * i, -20],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </div>
      );

    /* ============================= */
    /* 👥 AttendAI – Face Scan Grid */
    /* ============================= */
    case "attendai":
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div
            className="absolute w-20 h-20 border border-green-500"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute w-6 h-6 bg-green-500 rounded-full"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      );

    /* ============================= */
    /* 🧠 ELVIS – Layer Expansion   */
    /* ============================= */
    case "elvis":
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute w-24 h-4 bg-blue-500/30 rounded"
              animate={{
                y: [-20 + i * 20, -20 + i * 20 - 10],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      );

    /* ============================= */
    /* 🌊 Alluvium – Data Flow Lines */
    /* ============================= */
    case "alluvium":
      return (
        <div className="relative w-full h-full overflow-hidden">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute w-full h-[2px] bg-cyan-400/40"
              style={{ top: `${20 * i + 20}%` }}
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "linear",
              }}
            />
          ))}
        </div>
      );

    /* ============================= */
    /* 📄 ThinkDocs – Page Flicker  */
    /* ============================= */
    case "thinkdocs":
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div
            className="w-20 h-24 border border-white/40 rounded-md"
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute w-12 h-[2px] bg-white/50"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      );

    /* ============================= */
    /* 🤖 Stage – Bot Orbit System  */
    /* ============================= */
    case "demo-agent":
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div
            className="absolute w-16 h-16 border border-purple-500 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="w-3 h-3 bg-purple-500 rounded-full"
            animate={{ scale: [1, 1.6, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
        </div>
      );

    default:
      return null;
  }
}