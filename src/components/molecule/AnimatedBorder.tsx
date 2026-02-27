"use client";

import { motion } from "framer-motion";
import { ReactNode, useId, useMemo } from "react";
export const clipPaths = [
    // 1️⃣ AI Circuit Frame
   
  
    // // 7️⃣ Glitch Fragment Pro
    "polygon(0% 0%, 70% 0%, 75% 5%, 100% 5%, 100% 100%, 30% 100%, 25% 95%, 0% 95%)",
  
    // // 8️⃣ Neural Pulse Pro
    // "polygon(0% 0%, 100% 0%, 100% 58%, 94% 66%, 100% 74%, 100% 100%, 0% 100%, 0% 42%, 6% 34%, 0% 26%)",
  ];

export default function AnimatedBorder({
  children,
}: {
  children: ReactNode;
}) {
  // Pick one stable shape per card instance (deterministic from useId)
  const id = useId();
  const randomClipPath = useMemo(() => {
    let n = 0;
    for (let i = 0; i < id.length; i++) n = (n * 31 + id.charCodeAt(i)) % 0x7fff;
    return clipPaths[Math.abs(n) % clipPaths.length];
  }, [id]);

  return (
    <div className="relative p-[1px]">
      {/* Animated Border Layer */}
      <motion.div
        className="absolute inset-0 opacity-70"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          clipPath: randomClipPath,
          background:
            "linear-gradient(120deg, #1e293b, #334155, #1f2937, #1e293b)",
          backgroundSize: "250% 250%",
        }}
      />

      {/* Inner Surface */}
      <div
        className="relative bg-[#0B0F14] border border-white/5 p-2"
        style={{ clipPath: randomClipPath }}
      >
        {children}
      </div>
    </div>
  );
}