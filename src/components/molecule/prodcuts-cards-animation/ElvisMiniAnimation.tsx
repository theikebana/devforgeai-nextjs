"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function ElvisMiniAnimation() {
  const stats = [
    { label: "Leads", value: "1.2k" },
    { label: "Active", value: "312" },
    { label: "Assigned", value: "86" },
    { label: "Win rate", value: "28%" },
  ];

  return (
    <div className="mt-4 h-full rounded-xl border border-violet-400/30 bg-gradient-to-r from-slate-950 via-slate-950/85 to-violet-950/50  py-3">
      <div className="flex items-center gap-3">
        
        {/* Circular Lead Engine */}
        <div className="relative h-16 w-16 flex-shrink-0">
          
          <div className="absolute inset-1 rounded-full border border-violet-400/40 bg-black/70" />

          <motion.div
            className="absolute inset-1 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, rgba(139,92,246,0.5), transparent 40%)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />

          <div className="absolute inset-4 rounded-full bg-black/90 border border-violet-400/40 flex items-center justify-center">
            <Sparkles className="h-4 w-4 text-violet-300" />
          </div>

          {[0, 1, 2].map((ring) => (
            <motion.div
              key={ring}
              className="absolute inset-0 rounded-full border border-violet-400/25"
              animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.15, 1] }}
              transition={{
                duration: 3 + ring,
                repeat: Infinity,
                ease: "easeInOut",
                delay: ring * 0.3,
              }}
            />
          ))}
        </div>

        {/* Stats Chips */}
        <div className="flex-1 grid grid-cols-2 gap-1.5">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              className="rounded-md border border-violet-400/25 bg-black/60 px-2 py-1"
              animate={{ y: [0, -1.5, 0], opacity: [0.8, 1, 0.8] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.12,
              }}
            >
              <p className="text-[9px] text-slate-300">{stat.label}</p>
              <p className="text-[11px] font-semibold text-violet-200">
                {stat.value}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex-1 grid grid-cols-2 gap-1.5">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              className="rounded-md border border-violet-400/25 bg-black/60 px-2 py-1"
              animate={{ y: [0, -1.5, 0], opacity: [0.8, 1, 0.8] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.12,
              }}
            >
              <p className="text-[9px] text-slate-300">{stat.label}</p>
              <p className="text-[11px] font-semibold text-violet-200">
                {stat.value}
              </p>
            </motion.div>
          ))}
        </div>


      </div>
    </div>
  );
}