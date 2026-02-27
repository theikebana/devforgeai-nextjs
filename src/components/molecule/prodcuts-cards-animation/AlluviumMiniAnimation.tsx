"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function AlluviumMiniAnimation() {
  return (
    <div className="mt-4 h-full rounded-xl border border-red-400/30 bg-gradient-to-r from-slate-950 via-slate-950/85 to-red-950/40 px-3 py-3">
      <div className="space-y-3">

        {/* Document Header */}
        <motion.div
          className="flex items-center justify-between rounded-lg border border-white/10 bg-black/50 px-3 py-2"
          animate={{ opacity: [0.8, 1, 0.9] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex items-center gap-2 text-xs text-white/70">
            <FileText className="h-4 w-4 text-red-300" />
            <span>invoice_schneider_q3.pdf</span>
          </div>

          <span className="text-[10px] text-emerald-300 inline-flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            extracting…
          </span>
        </motion.div>

        {/* Extracted Fields */}
        <div className="grid grid-cols-2 gap-1.5">
          {[
            ["Vendor", "Schneider Electric"],
            ["Total", "€48,920.00"],
            ["Due date", "25 Aug 2024"],
            ["Tax", "19% VAT"],
          ].map(([label, value], idx) => (
            <motion.div
              key={label}
              className="rounded-lg border border-white/8 bg-white/5 px-2 py-1.5"
              animate={{
                borderColor: [
                  "rgba(148,163,184,0.4)",
                  "rgba(248,113,113,0.9)",
                  "rgba(148,163,184,0.4)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.18,
              }}
            >
              <p className="text-[9px] text-white/55">{label}</p>
              <p className="text-[10px] font-medium text-white/90 truncate">
                {value}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}